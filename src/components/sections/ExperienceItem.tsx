import Tag from "@/components/ui/Tag";
import type { Experience, Highlight } from "@/utils/content";

/**
 * Renders a bullet with its metric substring emphasised in the accent
 * colour. Falls back to plain text when the metric is absent or does not
 * appear verbatim in the sentence.
 */
function HighlightText({ highlight }: { highlight: Highlight }) {
  const { text, metric } = highlight;
  if (!metric) return <>{text}</>;

  const at = text.indexOf(metric);
  if (at === -1) return <>{text}</>;

  return (
    <>
      {text.slice(0, at)}
      <strong className="font-semibold text-accent">{metric}</strong>
      {text.slice(at + metric.length)}
    </>
  );
}

export default function ExperienceItem({ role }: { role: Experience }) {
  return (
    <article className="relative border-l border-border pb-12 pl-7 last:pb-0">
      <span
        className={`absolute -left-[4.5px] top-1.5 h-2 w-2 rounded-full ${
          role.current ? "bg-accent" : "bg-border-strong"
        }`}
      />

      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
        <h3 className="text-lg font-medium md:text-xl">
          {role.companyUrl ? (
            <a
              href={role.companyUrl}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-accent"
            >
              {role.company}
            </a>
          ) : (
            role.company
          )}
          {role.note && (
            <span className="ml-2 text-sm font-normal text-fg-faint">
              ({role.note})
            </span>
          )}
        </h3>
        <p className="shrink-0 font-mono text-xs text-fg-faint">
          {role.period}
        </p>
      </div>

      <p className="mt-1 text-sm text-fg-muted">
        {role.title}
        {role.priorTitle && (
          <span className="text-fg-faint"> · {role.priorTitle}</span>
        )}
        <span className="text-fg-faint"> · {role.location}</span>
      </p>

      <ul className="mt-5 space-y-3">
        {role.highlights.map((highlight, index) => (
          <li
            key={index}
            className="relative pl-5 text-[15px] leading-[1.7] text-fg-muted before:absolute before:left-0 before:top-[0.65em] before:h-1 before:w-1 before:rounded-full before:bg-border-strong"
          >
            <HighlightText highlight={highlight} />
          </li>
        ))}
      </ul>

      <div className="mt-5 flex flex-wrap gap-1.5">
        {role.stack.map((item) => (
          <Tag key={item}>{item}</Tag>
        ))}
      </div>
    </article>
  );
}
