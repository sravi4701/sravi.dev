export default function SectionHeading({
  index,
  title,
  description,
}: {
  index: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-10 md:mb-14">
      <p className="label mb-3">
        {index} <span className="text-border-strong">/</span> {title}
      </p>
      <h2 className="font-display text-3xl leading-tight md:text-4xl">
        {description ?? title}
      </h2>
    </div>
  );
}
