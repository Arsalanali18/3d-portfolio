import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill,   RiHtml5Fill,
  RiCss3Fill, } from "react-icons/ri";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
  html: {
  title: "HTML5",
  bg: "#E34F26",
  fg: "#FFFFFF",
  icon: <RiHtml5Fill />,
},

css: {
  title: "CSS3",
  bg: "#1572B6",
  fg: "#FFFFFF",
  icon: <RiCss3Fill />,
},
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  // {
  //   id: "codingducks",
  //   category: "Coding platform",
  //   title: "Coding Ducks",
  //   src: "/assets/projects-screenshots/codingducks/landing.png",
  //   screenshots: ["landing.png"],
  //   skills: {
  //     frontend: [
  //       PROJECT_SKILLS.ts,
  //       PROJECT_SKILLS.next,
  //       PROJECT_SKILLS.chakra,
  //       PROJECT_SKILLS.reactQuery,
  //       PROJECT_SKILLS.firebase,
  //     ],
  //     backend: [
  //       PROJECT_SKILLS.node,
  //       PROJECT_SKILLS.express,
  //       PROJECT_SKILLS.prisma,
  //       PROJECT_SKILLS.python,
  //       PROJECT_SKILLS.postgres,
  //       PROJECT_SKILLS.sockerio,
  //     ],
  //   },
  //   live: "https://www.codingducks.xyz/",
  //   github: "https://github.com/Naresh-Khatri/Coding-Ducks",
  //   get content() {
  //     return (
  //       <div>
  //         <TypographyP className="font-mono text-2xl text-center">
  //           Coding ducks = LeetCode + CodePen + CSS Battles
  //         </TypographyP>
  //         <TypographyP className="font-mono ">
  //           Coding Ducks is your coding dojo — where you level up your skills,
  //           battle in real-time code duels, and earn badges like a true code
  //           warrior. Track your progress, flex your brain, and climb the
  //           leaderboard. Ready to quack the code?
  //         </TypographyP>
  //         <ProjectsLinks live={this.live} repo={this.github} />
  //         <TypographyH3 className="my-4 mt-8">Problems </TypographyH3>
  //         <p className="font-mono mb-2">
  //           Solve coding problems similar to LeetCode, enhancing your
  //           problem-solving skills across various languages.
  //         </p>
  //         <SlideShow
  //           images={[
  //             `${BASE_PATH}/codingducks/problems.png`,
  //             `${BASE_PATH}/codingducks/problem.png`,
  //           ]}
  //         />
  //         <TypographyH3 className="my-4 mt-8">Ducklets</TypographyH3>
  //         <p className="font-mono mb-2">
  //           Collaborate in real-time with others in a multiplayer coding
  //           environment, just like CodePen but with a social twist.
  //         </p>
  //         <SlideShow
  //           images={[
  //             `${BASE_PATH}/codingducks/ducklets.png`,
  //             `${BASE_PATH}/codingducks/ducklet1.png`,
  //             `${BASE_PATH}/codingducks/ducklet2.png`,
  //           ]}
  //         />
  //         <TypographyH3 className="my-4 mt-8">UI Battles </TypographyH3>

  //         <p className="font-mono mb-2">
  //           Challenge yourself to create UI components with HTML/CSS/JS, and get
  //           instant feedback with an automated similarity scoring.
  //         </p>
  //         <SlideShow
  //           images={[
  //             `${BASE_PATH}/codingducks/css-battles.png`,
  //             `${BASE_PATH}/codingducks/css-battle.png`,
  //             `${BASE_PATH}/codingducks/css-battle2.png`,
  //           ]}
  //         />
  //         <TypographyH3 className="my-4 mt-8">Contests </TypographyH3>
  //         <p className="font-mono mb-2">
  //           Organize or participate in coding competitions. Successfully used to
  //           host three contests during college.
  //         </p>
  //         <SlideShow images={[`${BASE_PATH}/codingducks/contests.png`]} />
  //         <TypographyH3 className="my-4 mt-8">Playground </TypographyH3>
  //         <p className="font-mono mb-2">
  //           Test and execute your code instantly in my versatile online code
  //           runner.
  //         </p>
  //         <SlideShow images={[`${BASE_PATH}/codingducks/playground.png`]} />
  //         <TypographyH3 className="my-4 mt-8">Users</TypographyH3>

  //         <p className="font-mono mb-2">
  //           Track your progress, earn badges, and climb the rankings with
  //           detailed user profiles and activity tracking.
  //         </p>
  //         <SlideShow
  //           images={[
  //             `${BASE_PATH}/codingducks/users.png`,
  //             `${BASE_PATH}/codingducks/user.png`,
  //           ]}
  //         />
  //       </div>
  //     );
  //   },
  // },
  {
    id: "couponluxury",
    category: "HealthCare Site",
    title: "Fayz Global",
    src: "/assets/projects-screenshots/couponluxury/landing.png",
    screenshots: ["1.png", "2.png", "3.png", "4.png", "5.png"],
    live: "https://www.fayzglobal.com/",
    skills: {
      frontend: [
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.next,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
      ],
    },
    get content(): JSX.Element {
      return (
        <div>
          <TypographyP className="font-mono ">
            Fayz Global’s website serves as the digital gateway for the
            organization, presenting its mission, programs, and initiatives in a
            clear and engaging way. The platform is designed to make it easy for
            visitors to learn about the institution, explore its services, and
            stay connected with its activities.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <p className="font-mono mb-2 mt-4">
            From the moment visitors land on the site, they are welcomed with a
            clean, modern interface that highlights the organization’s key
            offerings, upcoming events, and important updates.
          </p>
          <SlideShow images={[`${BASE_PATH}/couponluxury/landing.png`]} />
          <TypographyH3 className="my-4 ">Programs</TypographyH3>
          <p className="font-mono mb-2">
            Users can explore a detailed overview of Fayz Global’s educational
            and community programs, making it easy to understand the impact and
            purpose of each initiative.
          </p>
          {/* <SlideShow
            images={[
              `${BASE_PATH}/couponluxury/stores.png`,
              `${BASE_PATH}/couponluxury/store.png`,
            ]}
          /> */}
          <TypographyH3 className="my-4 mt-8">Sections</TypographyH3>

          <p className="font-mono mb-2">
            The website organizes information into clear sections such as
            programs, events, and announcements, helping visitors quickly
            navigate and find the information they need.
          </p>
          {/* <SlideShow images={[`${BASE_PATH}/couponluxury/categories.png`]} /> */}
          <TypographyH3 className="my-4 mt-8">Content Management</TypographyH3>
          <p className="font-mono mb-2">
            A flexible content structure allows administrators to easily update
            pages, announcements, and program details, ensuring that the website
            always reflects the latest activities and information.
          </p>
          {/* <SlideShow
            images={[
              `${BASE_PATH}/couponluxury/cms-1.png`,
              `${BASE_PATH}/couponluxury/cms-2.png`,
            ]}
          /> */}
          <p className="font-mono mb-2 mt-5">
            The site focuses on accessibility, responsiveness, and performance
            so users can access important information smoothly across desktops,
            tablets, and mobile devices.
          </p>
          <p className="font-mono mb-2">
            Overall, the Fayz Global website acts as a central hub for the
            community, making it easier for visitors to discover the
            organization’s work and stay informed about its latest initiatives.
          </p>
          {/* <TypographyP className="my-4 mt-8">
          <strong>Misc:</strong>
          Hosted not one, not two, but THREE coding contests (Codemacha) during
          college. Safe to say, Coding Ducks passed the vibe check.
        </TypographyP>
        <TypographyP className="my-4 mt-8">
          <strong>Target Audience:</strong>
          For all the novice coders out there ready to make their mark.
        </TypographyP> */}
        </div>
      );
    },
  },
  {
  id: "synkronize",
  category: "Finance",
  title: "Synkronize",
  src: "/assets/projects-screenshots/synkronize/landing.png",
  screenshots: ["dashboard.png"],
  live: "https://synk-tau.vercel.app/",
  github: "https://github.com/Arsalanali18/Synkronize",
  skills: {
    frontend: [
      PROJECT_SKILLS.react,
      PROJECT_SKILLS.ts,
      PROJECT_SKILLS.tailwind,
    ],
    backend: [
      PROJECT_SKILLS.node,
      PROJECT_SKILLS.express,
      PROJECT_SKILLS.mongo,
    ],
  },
  get content() {
    return (
      <div>
        <TypographyP className="font-mono">
          Synkronize is a modern personal finance and subscription management
          platform designed to help users understand their spending, manage
          budgets, and stay on top of recurring subscriptions.
        </TypographyP>

        <ProjectsLinks live={this.live} repo={this.github} />

        <p className="font-mono mb-2 mt-8">
          The platform provides an interactive dashboard with expense
          summaries, spending categories, budget tracking, and subscription
          insights in a clean and responsive interface.
        </p>

        <SlideShow
          images={[
            `${BASE_PATH}/synkronize/landing.png`,
            `${BASE_PATH}/synkronize/dashboard.png`,
          ]}
        />

        <TypographyH3 className="my-4 mt-8">
          Personal Finance Dashboard
        </TypographyH3>

        <p className="font-mono mb-2">
          Users can monitor their monthly spending, analyze categorized
          expenses, track budgets, and view financial insights through
          interactive visualizations.
        </p>

        <SlideShow
          images={[`${BASE_PATH}/synkronize/finance-dashboard.png`]}
        />

        <TypographyH3 className="my-4 mt-8">
          Subscription Management
        </TypographyH3>

        <p className="font-mono mb-2">
          Synkronize also focuses on subscription management, helping users
          keep track of recurring payments, renewal dates, and unnecessary
          subscriptions.
        </p>

        <SlideShow
          images={[`${BASE_PATH}/synkronize/subscriptions.png`]}
        />

        <TypographyH3 className="my-4 mt-8">
          Modern UI/UX
        </TypographyH3>

        <p className="font-mono mb-2">
          Built with React, TypeScript, Vite, and Tailwind CSS, the application
          combines a responsive interface with reusable components and a
          modern finance-focused visual system.
        </p>

        {/* <SlideShow
          images={[`${BASE_PATH}/synkronize/ui.png`]}
        /> */}
      </div>
    );
  },
},
{
  id: "movie-seat-booking",
  category: "JavaScript",
  title: "Movie Seat Booking",
  src: "/assets/projects-screenshots/movie-seat-booking/movie-seat-booking.png",
  screenshots: ["movie-seat-booking.png"],
  live: "https://movie-seat-booking-nine-gamma.vercel.app/",
  github: "https://github.com/Arsalanali18/movie-seat-booking",

  skills: {
    frontend: [
      PROJECT_SKILLS.html,
      PROJECT_SKILLS.css,
      PROJECT_SKILLS.js,
    ],
    backend: [],
  },

  get content() {
    return (
      <div>
        <TypographyP className="font-mono">
          Movie Seat Booking is an interactive movie ticket booking interface
          built with HTML, CSS, and JavaScript. Users can select a movie,
          choose available seats, and view their total ticket price in
          real time.
        </TypographyP>

        <ProjectsLinks live={this.live} repo={this.github} />

        <p className="font-mono mb-2 mt-8">
          The application provides an interactive cinema seating layout with
          available, selected, and occupied seats. Movie selection, seat
          selection, and ticket pricing are handled dynamically using
          JavaScript.
        </p>

        <SlideShow
          images={[
            `${BASE_PATH}/movie-seat-booking/movie-seat-booking.png`,
          ]}
        />

        <TypographyH3 className="my-4 mt-8">
          Interactive Seat Selection
        </TypographyH3>

        <p className="font-mono mb-2">
          Users can select and deselect available seats while occupied seats
          remain unavailable. The interface provides clear visual states for
          available, selected, and occupied seats.
        </p>

        <SlideShow
          images={[
            `${BASE_PATH}/movie-seat-booking/seats.png`,
          ]}
        />

        <TypographyH3 className="my-4 mt-8">
          Dynamic Ticket Pricing
        </TypographyH3>

        <p className="font-mono mb-2">
          Users can choose from different movies with different ticket
          prices. The application automatically calculates the number of
          selected seats and updates the total ticket price as selections
          change.
        </p>

        <SlideShow
          images={[
            `${BASE_PATH}/movie-seat-booking/movie-selection.png`,
          ]}
        />

        <TypographyH3 className="my-4 mt-8">
          Local Storage
        </TypographyH3>

        <p className="font-mono mb-2">
          Movie selection, ticket price, and selected seats are stored using
          the browsers Local Storage API. This allows the application to
          restore the users selections after refreshing the page.
        </p>

        <TypographyH3 className="my-4 mt-8">
          Frontend Development
        </TypographyH3>

        <p className="font-mono mb-2">
          Built with vanilla HTML, CSS, and JavaScript, the project focuses on
          DOM manipulation, event handling, dynamic UI updates, client-side
          state management, and responsive frontend development.
        </p>
      </div>
    );
  },
},
  // {
  //   id: "the-booking-desk",
  //   category: "Travel",
  //   title: "The Booking Desk",
  //   src: "/assets/projects-screenshots/the-booking-desk/landing.png",
  //   screenshots: ["1.png"],
  //   live: "https://thebookingdesk.com/",
  //   skills: {
  //     frontend: [
  //       PROJECT_SKILLS.ts,
  //       PROJECT_SKILLS.next,
  //       PROJECT_SKILLS.aceternity,
  //       PROJECT_SKILLS.tailwind,
  //     ],
  //     backend: [PROJECT_SKILLS.sanity],
  //   },
  //   get content() {
  //     return (
  //       <div>
  //         <TypographyP className="font-mono ">
  //           The Booking Desk is your ultimate travel consultation hub, designed
  //           to turn your wanderlust dreams into reality. With a focus on smooth
  //           and visually captivating animations, navigating the site feels like
  //           a breeze—it&apos;s almost as if the destinations are calling you.
  //         </TypographyP>
  //         <ProjectsLinks live={this.live} repo={this.github} />
  //         <p className="font-mono mb-2 mt-8">
  //           A sleek, modern interface greets you, featuring the latest travel
  //           tips, deals, and must-visit spots around the globe.
  //         </p>
  //         <SlideShow images={[`${BASE_PATH}/the-booking-desk/landing.png`]} />
  //         <TypographyH3 className="my-4 mt-8">Blogs</TypographyH3>
  //         <p className="font-mono mb-2">
  //           Dive into the curated articles written by travel experts. Whether
  //           you&apos;re looking for hidden gems or travel hacks, our blog
  //           section has you covered.
  //         </p>
  //         <SlideShow
  //           images={[
  //             `${BASE_PATH}/the-booking-desk/blogs.png`,
  //             `${BASE_PATH}/the-booking-desk/blog.png`,
  //           ]}
  //         />
  //         <TypographyH3 className="my-4 mt-8">Sanity CMS</TypographyH3>

  //         <p className="font-mono mb-2">
  //           Keeping everything fresh and up-to-date, I&apos;ve integrated Sanity
  //           CMS to manage all the content with ease, ensuring you always get the
  //           latest and greatest information.
  //         </p>
  //         <SlideShow
  //           images={[
  //             `${BASE_PATH}/the-booking-desk/cms-1.png`,
  //             `${BASE_PATH}/the-booking-desk/cms-2.png`,
  //           ]}
  //         />
  //         <p className="font-mono mb-2 my-8">
  //           With a stunning 100% score on Lighthouse, The Booking Desk
  //           isn&apos;t just beautiful—it&apos;s built to perform. Whether
  //           you&apos;re planning your next adventure or just daydreaming, our
  //           site delivers a top-notch experience that&apos;s both informative
  //           and enjoyable.
  //         </p>
  //       </div>
  //     );
  //   },
  // },
  // {
  //   id: "portfolio",
  //   category: "Portfolio",
  //   title: "My Portfolio",
  //   src: "/assets/projects-screenshots/portfolio/landing.png",
  //   screenshots: ["1.png"],
  //   live: "http://nareshkhatri.vercel.app",
  //   github: "https://github.com/Naresh-Khatri/Portfolio",
  //   skills: {
  //     frontend: [
  //       PROJECT_SKILLS.ts,
  //       PROJECT_SKILLS.next,
  //       PROJECT_SKILLS.shadcn,
  //       PROJECT_SKILLS.aceternity,
  //       PROJECT_SKILLS.framerMotion,
  //       PROJECT_SKILLS.tailwind,
  //       PROJECT_SKILLS.spline,
  //     ],
  //     backend: [],
  //   },
  //   get content() {
  //     return (
  //       <div>
  //         <TypographyP className="font-mono ">
  //           Welcome to my digital playground, where creativity meets code in the
  //           dopest way possible.
  //         </TypographyP>
  //         <ProjectsLinks live={this.live} repo={this.github} />
  //         <TypographyH3 className="my-4 mt-8">
  //           Beautiful 3D Objects{" "}
  //         </TypographyH3>
  //         <p className="font-mono mb-2">
  //           Did you see that 3D keyboard modal? Yeah! I made that. That
  //           interactive keyboard is being rendered in 3D on a webpage 🤯, and
  //           pressing each keycap reveals a skill in a goofy way. It&apos;s like
  //           typing, but make it art.
  //         </p>
  //         <SlideShow
  //           images={[
  //             `${BASE_PATH}/portfolio/landing.png`,
  //             `${BASE_PATH}/portfolio/skills.png`,
  //           ]}
  //         />
  //         <TypographyH3 className="my-4 ">Space Theme</TypographyH3>
  //         <p className="font-mono mb-2">
  //           Dark background + floating particles = out-of-this-world cool.
  //         </p>
  //         <SlideShow images={[`${BASE_PATH}/portfolio/navbar.png`]} />
  //         <TypographyH3 className="my-4 mt-8">Projects</TypographyH3>

  //         <p className="font-mono mb-2">
  //           My top personal and freelance projects — no filler, all killer.
  //         </p>
  //         <SlideShow
  //           images={[
  //             `${BASE_PATH}/portfolio/projects.png`,
  //             `${BASE_PATH}/portfolio/project.png`,
  //           ]}
  //         />
  //         <p className="font-mono mb-2 mt-8 text-center">
  //           This site&apos;s not just a portfolio — it&apos;s a whole vibe.
  //         </p>
  //       </div>
  //     );
  //   },
  // },
  // {
  //   id: "ghostchat",
  //   category: "Anonymous chat",
  //   title: "GhostChat",
  //   src: "/assets/projects-screenshots/ghostchat/1.png",
  //   screenshots: ["1.png", "2.png", "3.png", "4.png"],
  //   live: "https://ghostchat.vercel.app",
  //   github: "https://github.com/Naresh-Khatri/GhostChat",
  //   skills: {
  //     frontend: [PROJECT_SKILLS.js, PROJECT_SKILLS.next, PROJECT_SKILLS.chakra],
  //     backend: [PROJECT_SKILLS.supabase],
  //   },
  //   get content() {
  //     return (
  //       <div>
  //         <TypographyP className="font-mono ">
  //           Ghostchat is your go-to spot for sending anonymous messages without
  //           leaving a trace. Powered by Supabase, it&apos;s all about keeping
  //           things low-key and secure. Whether you&apos;re sharing secrets,
  //           giving feedback, or just having some fun, Ghostchat ensures your
  //           identity stays hidden, while your voice is heard. Say what you want,
  //           without the worry.
  //         </TypographyP>
  //         <ProjectsLinks live={this.live} repo={this.github} />
  //         <SlideShow
  //           images={[
  //             `${BASE_PATH}/ghostchat/1.png`,
  //             `${BASE_PATH}/ghostchat/2.png`,
  //             `${BASE_PATH}/ghostchat/3.png`,
  //             `${BASE_PATH}/ghostchat/4.png`,
  //           ]}
  //         />
  //       </div>
  //     );
  //   },
  // },
  // {
  //   id: "jra",
  //   category: "Result analyzer",
  //   title: "JNTUA Results Analyzer",
  //   src: "/assets/projects-screenshots/jra/1.png",
  //   screenshots: ["1.png"],
  //   live: "https://naresh-khatri.github.io/JNTUA-result-analyser-spa/#/",
  //   skills: {
  //     frontend: [PROJECT_SKILLS.js, PROJECT_SKILLS.vue],
  //     backend: [
  //       PROJECT_SKILLS.node,
  //       PROJECT_SKILLS.mongo,
  //       PROJECT_SKILLS.express,
  //       PROJECT_SKILLS.docker,
  //     ],
  //   },
  //   get content() {
  //     return (
  //       <div>
  //         <TypographyP className="font-mono ">
  //           JNTUA Results Analyzer was a revolutionary tool designed to simplify
  //           and enhance the experience of accessing academic results. It served
  //           as a powerful proxy between the JNTUA university results website and
  //           its users, offering a range of features that made result analysis
  //           faster and more efficient. Here&apos;s what made it stand out:
  //         </TypographyP>
  //         <ProjectsLinks live={this.live} repo={this.github} />
  //         <SlideShow images={[`${BASE_PATH}/jra/1.png`]} />
  //         <TypographyH3 className="my-4 mt-8">
  //           Effortless Results Retrieval
  //         </TypographyH3>
  //         {/* Effortless Results Retrieval: */}
  //         <ul className="list-disc ml-6">
  //           <li className="font-mono">
  //             Search all your results using a single roll number, eliminating
  //             the tedious task of sifting through thousands of rows on the
  //             official site.
  //           </li>
  //         </ul>
  //         <TypographyH3 className="my-4 mt-8">Class-Wise Results:</TypographyH3>
  //         <ul className="list-disc ml-6">
  //           <li className="font-mono">
  //             class-wise results effortlessly by entering a roll number range.
  //             No more manual searches or filtering.
  //           </li>
  //         </ul>
  //         <TypographyH3 className="my-4 mt-8">Faculty Features:</TypographyH3>
  //         <ul className="list-disc ml-6">
  //           <li className="font-mono">
  //             Faculty members could download batch results in Excel format,
  //             making administrative tasks a breeze.
  //           </li>
  //         </ul>
  //         <TypographyH3 className="my-4 mt-8">
  //           Enhanced Data Insights:
  //         </TypographyH3>
  //         <ul className="list-disc ml-6">
  //           <li className="font-mono">
  //             Each result came with additional features including:
  //             <ul className="list-disc font-mono ml-6">
  //               <li>
  //                 <strong>CGPA Calculations: </strong>Easily track your
  //                 cumulative grade point average.
  //               </li>
  //               <li>
  //                 <strong>Charts:</strong> Visualize your academic performance
  //                 with comprehensive charts.
  //               </li>
  //               <li>
  //                 <strong>Future Projections:</strong> Get insights into
  //                 potential future outcomes based on current performance.
  //               </li>
  //               <li>
  //                 <strong> Backlog Counts: </strong>Keep track of your backlog
  //                 subjects at a glance.
  //               </li>
  //             </ul>
  //           </li>
  //         </ul>
  //         <TypographyH3 className="my-4 mt-8">Performance:</TypographyH3>
  //         <ul className="list-disc ml-6">
  //           <li className="font-mono">
  //             The application was significantly faster and more efficient than
  //             the official site, providing a smoother user experience.
  //           </li>
  //         </ul>
  //         <TypographyH3 className="my-4 mt-8">Downfall:</TypographyH3>
  //         <ul className="list-disc ml-6">
  //           <li className="font-mono">
  //             Unfortunately, as of May 2022, the tool stopped working due to the
  //             introduction of CAPTCHA on the official JNTUA results site, which
  //             disrupted the seamless functionality of the app. JNTUA Results
  //             Analyzer transformed the way students and faculty interacted with
  //             academic results, making it a must-have tool until its unexpected
  //             shutdown.
  //           </li>
  //         </ul>
  //       </div>
  //     );
  //   },
  // },
];
export default projects;
