import Container from "@/components/layout/Container";
import Reveal from "@/components/motion/Reveal";
import SectionHeading from "./SectionHeading";
import Tag from "@/components/ui/Tag";
import { skills } from "@/utils/content";

export default function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-24 border-t border-border py-20 md:py-28"
    >
      <Container>
        <Reveal>
          <SectionHeading
            index="04"
            title="Skills"
            description="What I reach for."
          />
        </Reveal>

        <dl className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
          {skills.map((group, index) => (
            <Reveal key={group.label} delay={Math.min(index * 0.05, 0.2)}>
              <dt className="label mb-3">{group.label}</dt>
              <dd className="flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <Tag key={item}>{item}</Tag>
                ))}
              </dd>
            </Reveal>
          ))}
        </dl>
      </Container>
    </section>
  );
}
