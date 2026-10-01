const config = {
  title: "Arsalan Ali Ahmed | MERN-Stack Developer",
  description: {
    long: "Explore the portfolio of Arsalan Ali Ahmed, a MERN-stack developer and creative technologist specializing in interactive web experiences, and innovative projects. Discover my latest work, including Personal Finance Dashboard, A Library Management Website, and more. Let's build something amazing together!",
    short:
      "Discover the portfolio of Arsalan Ali Ahmed, a MERN-stack developer creating interactive web experiences and innovative projects.",
  },
  keywords: [
    "Arsalan Ali Ahmed",
    "portfolio",
    "MERN-stack developer",
    "creative technologist",
    "web development",
    "3D animations",
    "interactive websites",
    "Personal Finance Dashboard",
    "Library Management Website",
    "web design",
    "GSAP",
    "React",
    "Next.js",
    "Spline",
    "Framer Motion",
  ],
  author: "Arsalan Ali Ahmed",
  email: "arsalanaliahmed17@gmail.com",
  site: "https://nareshkhatri.site",

  // for github stars button
  githubUsername: "Arsalanali18",
  githubRepo: "3d-portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-im1age.png";
  },
  social: {
    twitter: "https://x.com/",
    linkedin: "https://www.linkedin.com/in/arsalan-ali-ahmed",
    instagram: "https://www.instagram.com/_arsalan._.ali_/",
    facebook: "https://www.facebook.com/",
    github: "https://github.com/Arsalanali18",
  },
};
export { config };
