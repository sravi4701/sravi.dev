import type { Profile } from "./types";

export const profile: Profile = {
  name: "Ravi Shankar",
  role: "Senior Software Engineer",
  roleRotation: [
    "Senior Software Engineer",
    "Backend & distributed systems",
    "Python · Django · Next.js · AWS",
    "Shipping travel infrastructure",
  ],
  location: "Remote · India",
  tagline:
    "I build the systems companies run on — distribution integrations, booking automation, and the internal platforms that replace manual work.",
  bio: [
    "I have spent roughly eight years building backend and full stack systems, mostly for products where a bug means someone's booking, ride, or payment breaks. I started in backend, moved through full stack, and now spend most of my time on the parts that carry load: integrations, data models, and the pipelines behind them.",
    "At TheTripGuru I own the OTA distribution stack the business sells through, and I built the automation that turns partner confirmation emails into real bookings without anyone typing them in. I also designed the agentic development workflow the engineering team now uses to go from ticket to merged pull request.",
    "Outside of work I build and operate my own products. Zodrive is a doorstep driving-lessons platform running in Bengaluru, and Provers.in is an AI interview-prep tool with a thousand-plus users. Both are live, and I run them end to end.",
  ],
  imageSrc: "/profile.png",
  imageAlt: "Ravi Shankar",
  email: "sravi4701@gmail.com",
  startYear: 2018,
  education: {
    school: "Shri Mata Vaishno Devi University",
    degree: "B.Tech, Computer Science and Engineering",
    period: "2014 — 2018",
    location: "Jammu",
  },
};

export const yearsOfExperience = new Date().getFullYear() - profile.startYear;
