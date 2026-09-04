import Link from "next/link";
import Container from "./Container";
import { profile, socials } from "@/utils/content";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-10">
      <Container className="flex flex-col gap-4 text-sm text-fg-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {year} {profile.name}
        </p>

        <nav className="flex flex-wrap items-center gap-x-5 gap-y-2">
          <Link href="/posts" className="transition-colors hover:text-fg">
            Writing
          </Link>
          {socials.map((social) => (
            <a
              key={social.key}
              href={social.href}
              target={social.external ? "_blank" : undefined}
              rel={social.external ? "noreferrer" : undefined}
              className="transition-colors hover:text-fg"
            >
              {social.label}
            </a>
          ))}
          <a
            href={profile.resumeHref}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-fg"
          >
            Résumé
          </a>
        </nav>
      </Container>
    </footer>
  );
}
