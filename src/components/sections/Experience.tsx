import Container from "@/components/layout/Container";
import Reveal from "@/components/motion/Reveal";
import SectionHeading from "./SectionHeading";
import ExperienceItem from "./ExperienceItem";
import { experience } from "@/utils/content";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="scroll-mt-24 border-t border-border py-20 md:py-28"
    >
      <Container>
        <Reveal>
          <SectionHeading
            index="02"
            title="Experience"
            description="Where I have worked, and what shipped."
          />
        </Reveal>

        <div className="max-w-3xl">
          {experience.map((role, index) => (
            <Reveal key={role.company} delay={Math.min(index * 0.06, 0.24)}>
              <ExperienceItem role={role} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
