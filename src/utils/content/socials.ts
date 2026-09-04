import type { Social } from "./types";
import { profile } from "./profile";

export const socials: Social[] = [
  {
    key: "github",
    label: "GitHub",
    handle: "sravi4701",
    href: "https://github.com/sravi4701",
    external: true,
  },
  {
    key: "linkedin",
    label: "LinkedIn",
    handle: "sravi4701",
    href: "https://linkedin.com/in/sravi4701",
    external: true,
  },
  {
    key: "email",
    label: "Email",
    handle: profile.email,
    href: `mailto:${profile.email}`,
    external: false,
  },
];

export const socialByKey = (key: Social["key"]) =>
  socials.find((social) => social.key === key);
