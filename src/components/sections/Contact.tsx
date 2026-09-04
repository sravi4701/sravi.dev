import Container from "@/components/layout/Container";
import Reveal from "@/components/motion/Reveal";
import SectionHeading from "./SectionHeading";
import LinkButton from "@/components/ui/LinkButton";
import { profile, socials } from "@/utils/content";

export default function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 border-t border-border py-20 md:py-28"
    >
      <Container>
        <Reveal>
          <SectionHeading
            index="05"
            title="Contact"
            description="Open to senior engineering roles."
          />
        </Reveal>

        <Reveal delay={0.06}>
          <p className="max-w-measure text-[17px] leading-[1.7] text-fg-muted">
            If you are hiring, or you have a problem that sounds like the ones
            above, I would like to hear about it. The fastest way to reach me is
            email.
          </p>

          <a
            href={`mailto:${profile.email}`}
            className="mt-8 inline-block font-display text-3xl text-fg transition-colors hover:text-accent md:text-4xl"
          >
            {profile.email}
          </a>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <LinkButton href={profile.resumeHref} variant="primary" external>
              Download résumé
            </LinkButton>
            {socials
              .filter((social) => social.external)
              .map((social) => (
                <LinkButton key={social.key} href={social.href} external>
                  {social.label}
                </LinkButton>
              ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
