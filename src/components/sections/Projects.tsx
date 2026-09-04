import Container from "@/components/layout/Container";
import Reveal from "@/components/motion/Reveal";
import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";
import ArchiveList from "./ArchiveList";
import { archivedProjects, featuredProjects } from "@/utils/content";

export default function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-24 border-t border-border py-20 md:py-28"
    >
      <Container>
        <Reveal>
          <SectionHeading
            index="03"
            title="Projects"
            description="Things I built and run myself."
          />
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <Reveal
              key={project.slug}
              delay={Math.min(index * 0.06, 0.24)}
              className="h-full"
            >
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-16">
            <p className="label mb-5">Archive</p>
            <ArchiveList projects={archivedProjects} />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
