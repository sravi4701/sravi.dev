import type { Project } from "@/utils/content";

export default function ArchiveList({ projects }: { projects: Project[] }) {
  return (
    <ul className="divide-y divide-border border-y border-border">
      {projects.map((project) => (
        <li
          key={project.slug}
          className="flex flex-col gap-2 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
        >
          <div className="min-w-0">
            <p className="text-[15px]">
              <span className="font-medium">{project.name}</span>
              <span className="ml-2 font-mono text-xs text-fg-faint">
                {project.year}
              </span>
            </p>
            <p className="mt-0.5 text-sm text-fg-muted">{project.summary}</p>
            <p className="mt-1 font-mono text-[11px] text-fg-faint">
              {project.stack.join(" · ")}
            </p>
          </div>

          <div className="flex shrink-0 flex-wrap gap-x-4 gap-y-1 text-sm">
            {project.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="text-fg-muted transition-colors hover:text-accent"
              >
                {link.label}
              </a>
            ))}
          </div>
        </li>
      ))}
    </ul>
  );
}
