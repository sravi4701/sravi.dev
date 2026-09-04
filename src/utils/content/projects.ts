import type { Project } from "./types";

export const projects: Project[] = [
  {
    slug: "zodrive",
    name: "Zodrive",
    year: "2026",
    status: "live",
    featured: true,
    summary: "Doorstep driving lessons, live in Bengaluru.",
    description:
      "A driving-school platform where verified coaches come to the learner instead of the other way round. Built and operated end to end, from the booking flow to the coach dispatch behind it.",
    highlights: [
      "PostGIS polygon serviceability zones matching coaches to students by geography",
      "Cashfree payments and WhatsApp booking notifications",
      "Structured ten-day curriculum with per-session progress tracking",
    ],
    stack: ["Next.js 15", "Supabase", "PostGIS", "Cashfree"],
    links: [{ label: "Live", href: "https://zodrive.in" }],
  },
  {
    slug: "provers",
    name: "Provers.in",
    year: "2024",
    status: "live",
    featured: true,
    summary: "AI-powered SSB interview preparation.",
    description:
      "Practice and feedback for candidates preparing for Indian defence selection boards across NDA, CDS and AFCAT entries. Over a thousand active users, with paying subscribers.",
    highlights: [
      "LLM pipeline scoring free-text responses on observation, creativity and clarity",
      "1,000+ active users and a paid subscription tier",
      "Practice tests with instant feedback and performance analytics",
    ],
    stack: ["Next.js", "Firebase", "LLM APIs"],
    links: [{ label: "Live", href: "https://provers.in" }],
  },
  {
    slug: "eglify",
    name: "Eglify",
    year: "2022",
    status: "archived",
    featured: true,
    summary: "Referral marketing for local businesses.",
    description:
      "Merchants configure reward rules and generate referral links; customers track their progress while merchants verify redemptions against campaign analytics.",
    highlights: [
      "Merchant-configurable reward rules and referral link generation",
      "Customer-facing progress tracking with merchant-side redemption checks",
      "Campaign analytics across both sides of the marketplace",
    ],
    stack: ["Django", "Next.js", "AWS", "React"],
    links: [
      { label: "Demo", href: "https://localtags-web.vercel.app/" },
      { label: "Frontend", href: "https://github.com/sravi4701/localtags-web" },
      { label: "Backend", href: "https://github.com/sravi4701/localtags" },
    ],
  },
  {
    slug: "aiinshow",
    name: "AIinShow",
    year: "2023",
    status: "archived",
    featured: false,
    summary: "A curated directory of AI tools.",
    stack: ["Next.js", "React", "Firebase"],
    links: [
      { label: "Live", href: "https://aiinshow.com/" },
      { label: "Source", href: "https://github.com/sravi4701/aishow" },
    ],
  },
  {
    slug: "garagetroop",
    name: "GarageTroop",
    year: "2020",
    status: "archived",
    featured: false,
    summary: "Connecting car owners with garages for hassle-free servicing.",
    stack: ["Node.js", "Express", "Next.js", "MongoDB"],
    links: [
      {
        label: "Video",
        href: "https://www.youtube.com/watch?v=1J0abp_WzNs",
      },
      {
        label: "Frontend",
        href: "https://github.com/sravi4701/garage-troop-frontend",
      },
      {
        label: "Backend",
        href: "https://github.com/sravi4701/garage-troop-backend",
      },
    ],
  },
  {
    slug: "tweetme",
    name: "TweetMe",
    year: "2018",
    status: "archived",
    featured: false,
    summary: "A microblogging site built while learning Django.",
    stack: ["Python", "Django", "JavaScript"],
    links: [{ label: "Source", href: "https://github.com/sravi4701/tweet-me" }],
  },
  {
    slug: "sravi-dev",
    name: "sravi.dev",
    year: "2024",
    status: "live",
    featured: false,
    summary: "This site. Next.js App Router with MDX posts.",
    stack: ["Next.js", "TypeScript", "Tailwind", "MDX"],
    links: [
      { label: "Source", href: "https://github.com/sravi4701/sravi.dev" },
    ],
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export const archivedProjects = projects.filter((project) => !project.featured);
