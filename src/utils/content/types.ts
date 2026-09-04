export type SocialKey = "github" | "linkedin" | "email";

export interface Social {
  key: SocialKey;
  label: string;
  handle: string;
  href: string;
  external: boolean;
}

export interface Education {
  school: string;
  degree: string;
  period: string;
  location: string;
}

export interface Profile {
  name: string;
  role: string;
  roleRotation: string[];
  location: string;
  tagline: string;
  bio: string[];
  imageSrc: string;
  imageAlt: string;
  email: string;
  startYear: number;
  education: Education;
}

/**
 * A single achievement bullet. `metric` is the substring of `text` that
 * carries the number, so the timeline can emphasise it inline without the
 * component having to parse prose.
 */
export interface Highlight {
  text: string;
  metric?: string;
}

export interface Experience {
  company: string;
  companyUrl?: string;
  note?: string;
  title: string;
  priorTitle?: string;
  location: string;
  period: string;
  current?: boolean;
  highlights: Highlight[];
  stack: string[];
}

export type ProjectStatus = "live" | "archived";

export type ProjectLinkLabel =
  | "Live"
  | "Demo"
  | "Source"
  | "Frontend"
  | "Backend"
  | "Video";

export interface ProjectLink {
  label: ProjectLinkLabel;
  href: string;
}

export interface Project {
  slug: string;
  name: string;
  year: string;
  status: ProjectStatus;
  featured: boolean;
  summary: string;
  description?: string;
  highlights?: string[];
  stack: string[];
  links: ProjectLink[];
}

export interface SkillGroup {
  label: string;
  items: string[];
}
