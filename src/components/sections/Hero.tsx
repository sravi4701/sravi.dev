import Image from "next/image";
import Container from "@/components/layout/Container";
import RotatingRole from "@/components/motion/RotatingRole";
import LinkButton from "@/components/ui/LinkButton";
import { profile, socials } from "@/utils/content";

export default function Hero() {
  return (
    <section className="pt-16 pb-20 md:pt-24 md:pb-28">
      <Container>
        <div className="flex flex-col-reverse items-start gap-10 md:flex-row md:items-center md:justify-between md:gap-16">
          <div className="max-w-2xl">
            <p className="label mb-5 flex items-center gap-2">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
              {profile.location}
            </p>

            <h1 className="font-display text-5xl leading-[1.05] tracking-tight md:text-7xl">
              {profile.name}
            </h1>

            <div className="mt-4">
              <RotatingRole roles={profile.roleRotation} />
            </div>

            <p className="mt-6 max-w-measure text-lg leading-[1.65] text-fg-muted">
              {profile.tagline}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <LinkButton href="#contact" variant="primary">
                Get in touch
              </LinkButton>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
              {socials.map((social) => (
                <a
                  key={social.key}
                  href={social.href}
                  target={social.external ? "_blank" : undefined}
                  rel={social.external ? "noreferrer" : undefined}
                  className="text-fg-muted transition-colors hover:text-accent"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          <div className="shrink-0">
            <Image
              src={profile.imageSrc}
              alt={profile.imageAlt}
              width={224}
              height={224}
              priority
              sizes="(min-width: 768px) 224px, 144px"
              className="h-36 w-36 rounded-full object-cover ring-1 ring-border md:h-56 md:w-56"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
