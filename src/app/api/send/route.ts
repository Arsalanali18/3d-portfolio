import { EmailTemplate } from "@/components/email-template";
import { config } from "@/data/config";
import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const Email = z.object({
  fullName: z.string().min(2, "Full name is invalid!"),
  email: z.string().email({ message: "Email is invalid!" }),
  message: z.string().min(10, "Message is too short!"),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();

    console.log("CONTACT FORM DATA:", body);

    const {
      success: zodSuccess,
      data: zodData,
      error: zodError,
    } = Email.safeParse(body);

    if (!zodSuccess) {
      console.error("VALIDATION ERROR:", zodError);

      return Response.json(
        { error: zodError.message },
        { status: 400 }
      );
    }

    console.log("Sending email to:", config.email);

    const { data: resendData, error: resendError } =
      await resend.emails.send({
        from: "Portfolio <onboarding@resend.dev>",
        to: [config.email],
        replyTo: zodData.email,
        subject: `Portfolio Contact — ${zodData.fullName}`,
        react: EmailTemplate({
          fullName: zodData.fullName,
          email: zodData.email,
          message: zodData.message,
        }),
      });

    if (resendError) {
      console.error("RESEND ERROR:", resendError);

      return Response.json(
        {
          error: resendError.message,
        },
        { status: 500 }
      );
    }

    console.log("EMAIL SENT:", resendData);

    return Response.json({
      success: true,
      data: resendData,
    });
  } catch (error) {
    console.error("API ERROR:", error);

    return Response.json(
      {
        error:
          error instanceof Error ? error.message : "Something went wrong",
      },
      { status: 500 }
    );
  }
}