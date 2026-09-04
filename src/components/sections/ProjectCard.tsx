import Tag from "@/components/ui/Tag";
import type { Project } from "@/utils/content";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex h-full flex-col rounded-lg border border-border bg-surface p-6 transition-colors hover:border-border-strong">
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="text-lg font-medium md:text-xl">{project.name}</h3>
        <span className="shrink-0 font-mono text-xs text-fg-faint">
          {project.year}
        </span>
      </div>

      <p className="mt-1 text-sm text-fg-faint">{project.summary}</p>

      {project.description && (
        <p className="mt-4 text-[15px] leading-[1.7] text-fg-muted">
          {project.description}
        </p>
      )}

      {project.highlights && (
        <ul className="mt-4 space-y-2">
          {project.highlights.map((highlight) => (
            <li
              key={highlight}
              className="relative pl-5 text-sm leading-[1.6] text-fg-muted before:absolute before:left-0 before:top-[0.6em] before:h-1 before:w-1 before:rounded-full before:bg-border-strong"
            >
              {highlight}
            </li>
          ))}
        </ul>
      )}

      <div className="mt-5 flex flex-wrap gap-1.5">
        {project.stack.map((item) => (
          <Tag key={item}>{item}</Tag>
        ))}
      </div>

      <div className="mt-auto flex flex-wrap gap-x-5 gap-y-2 pt-6 text-sm">
        {project.links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="text-accent transition-colors hover:text-accent-hover"
          >
            {link.label} <span aria-hidden="true">&#8599;</span>
          </a>
        ))}
      </div>
    </article>
  );
}
