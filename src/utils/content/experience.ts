import type { Experience } from "./types";

export const experience: Experience[] = [
  {
    company: "TheTripGuru",
    companyUrl: "https://thetripguru.com",
    title: "Senior Software Engineer",
    priorTitle: "promoted from Full Stack Developer",
    location: "Remote",
    period: "Mar 2021 — Present",
    current: true,
    highlights: [
      {
        text: "Built the OTA distribution stack driving over 70% of TripGuru's bookings across three API integrations — GetYourGuide's supplier API, the OCTO standard for Klook, and Bokun, which fans out to TripAdvisor, Expedia, Airbnb and Civitatis — covering availability sync, reservation, booking and cancellation.",
        metric: "over 70% of TripGuru's bookings",
      },
      {
        text: "Automated booking creation from partner confirmation emails on non-API platforms including Hotelbeds, KKDay and Ceetiz, using n8n and LLM-based PDF parsing, ingesting 300 bookings per month with no manual entry.",
        metric: "300 bookings per month",
      },
      {
        text: "Designed and rolled out the engineering team's agentic development workflow on Claude Code — custom skills, orchestration rules, PR creation and review templates, and MCP integrations with GitHub and Notion — now the standard path from ticket to merged PR.",
      },
      {
        text: "Led migration of the operations admin from legacy Django admin to a new Next.js platform, rebuilding inventory, bookings, coupons, tour guides and vendors. Used daily by Operations, Supply and Business Development.",
      },
      {
        text: "Built the guide operations system end to end: a Tour Guide PWA on Auth0 and WhatsApp OTP for activity requests, availability, compliance documents and payment tracking, plus OPA, which automates the activity lifecycle through a TOPSIS-based recommendation engine, auto-assignment on acceptance, and WhatsApp confirmation via Gupshup.",
      },
      {
        text: "Built the CI/CD pipeline on GitHub Actions, running the Django test suite on every PR to staging and deploying to AWS ECS on merge, and introduced the team's PR review and standup practices.",
      },
    ],
    stack: [
      "Python",
      "Django",
      "DRF",
      "Celery",
      "MySQL",
      "Redis",
      "Next.js",
      "React",
      "AWS",
      "Docker",
      "GitHub Actions",
      "Auth0",
      "Claude Code",
      "n8n",
    ],
  },
  {
    company: "Vogo",
    companyUrl: "https://www.linkedin.com/company/vogo-rentals/",
    note: "acquired by Chalo",
    title: "Full Stack Developer",
    location: "Bengaluru",
    period: "Sept 2019 — Mar 2021",
    highlights: [
      {
        text: "Built Vogo Keep, the flagship long-term rental product, covering package selection, scooter discovery, booking and payments from frontend through backend integration. Mentored juniors and interns.",
      },
      {
        text: "Delivered a single React PWA serving Android, iOS and web through a WebView bridge, removing the need for separate native clients, and shipped KYC onboarding with selfie verification.",
      },
    ],
    stack: [
      "Python",
      "Django",
      "DRF",
      "Celery",
      "MySQL",
      "React",
      "JavaScript",
      "AWS",
      "Docker",
    ],
  },
  {
    company: "Manch",
    companyUrl:
      "https://www.techcircle.in/2020/02/05/is-stellaris-backed-vernacular-content-platform-manch-shutting-shop",
    title: "Software Engineer",
    priorTitle: "first engineering hire",
    location: "Bengaluru",
    period: "Nov 2018 — Sept 2019",
    highlights: [
      {
        text: "Built a notification microservice in Go from scratch and scaled it to 50,000 active users.",
        metric: "50,000 active users",
      },
      {
        text: "Developed the core Express.js API, the consumer website and the internal dashboard, and owned provisioning and deployments.",
      },
    ],
    stack: [
      "Go",
      "JavaScript",
      "Node.js",
      "Express",
      "Next.js",
      "MongoDB",
      "Elasticsearch",
    ],
  },
  {
    company: "Datapeace AI Technologies",
    companyUrl: "https://www.datapeace.in/",
    title: "Backend Developer",
    location: "Delhi",
    period: "Apr 2018 — Oct 2018",
    highlights: [
      {
        text: "Built the REST API for the first version of a smart surveillance platform covering visitor and attendance management, and integrated core AWS services into its deployment.",
      },
    ],
    stack: ["Python", "Django", "DRF", "AWS"],
  },
];
