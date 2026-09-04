"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import Container from "./Container";
import ThemeToggle from "./ThemeToggle";

const sections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export default function Header() {
  const [active, setActive] = useState<string>("");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  // Set while a click-triggered smooth scroll is in flight, so the observer
  // does not flicker the active item through every intermediate section.
  const suppressSpy = useRef(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const nodes = sections
      .map(({ id }) => document.getElementById(id))
      .filter((node): node is HTMLElement => node !== null);

    if (nodes.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (suppressSpy.current) return;
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length > 0) setActive(visible[0].target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  const onNavigate = useCallback((id: string) => {
    setMenuOpen(false);
    setActive(id);
    suppressSpy.current = true;
    window.setTimeout(() => {
      suppressSpy.current = false;
    }, 700);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-bg/80 backdrop-blur transition-colors ${
        scrolled ? "border-b border-border" : "border-b border-transparent"
      }`}
    >
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link
          href="/"
          className="font-display text-xl leading-none text-fg transition-colors hover:text-accent"
        >
          Ravi Shankar
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              onClick={() => onNavigate(section.id)}
              className={`rounded-md px-3 py-1.5 text-sm transition-colors ${
                active === section.id
                  ? "text-accent"
                  : "text-fg-muted hover:text-fg"
              }`}
            >
              {section.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-fg-muted transition-colors hover:text-fg md:hidden"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-[18px] w-[18px]"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            >
              {menuOpen ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </Container>

      {menuOpen && (
        <div className="border-t border-border bg-bg md:hidden">
          <Container className="flex flex-col py-2">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={() => onNavigate(section.id)}
                className="rounded-md px-2 py-2.5 text-sm text-fg-muted transition-colors hover:text-fg"
              >
                {section.label}
              </a>
            ))}
          </Container>
        </div>
      )}
    </header>
  );
}
