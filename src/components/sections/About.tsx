import Container from "@/components/layout/Container";
import Reveal from "@/components/motion/Reveal";
import SectionHeading from "./SectionHeading";
import { profile, yearsOfExperience } from "@/utils/content";

export default function About() {
  const facts = [
    { label: "Experience", value: `${yearsOfExperience}+ years` },
    { label: "Current", value: "Senior SWE, TheTripGuru" },
    { label: "Based in", value: profile.location },
    { label: "Education", value: `B.Tech CSE, ${profile.education.period}` },
  ];

  return (
    <section id="about" className="scroll-mt-24 py-20 md:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            index="01"
            title="About"
            description="Eight years building things that carry real load."
          />
        </Reveal>

        <Reveal delay={0.06}>
          <div className="max-w-measure space-y-5 text-[17px] leading-[1.7] text-fg-muted">
            {profile.bio.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <dl className="mt-12 grid grid-cols-2 gap-x-6 gap-y-7 border-t border-border pt-8 md:grid-cols-4">
            {facts.map((fact) => (
              <div key={fact.label}>
                <dt className="label mb-2">{fact.label}</dt>
                <dd className="text-sm text-fg">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </Container>
    </section>
  );
}
