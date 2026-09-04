import type { ReactNode } from "react";

type Variant = "primary" | "ghost";

const styles: Record<Variant, string> = {
  primary:
    "bg-accent text-white border-accent hover:bg-accent-hover hover:border-accent-hover",
  ghost:
    "border-border text-fg hover:border-border-strong hover:bg-surface-2",
};

export default function LinkButton({
  href,
  children,
  variant = "ghost",
  external = false,
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className={`inline-flex items-center justify-center rounded-lg border px-4 py-2 text-sm font-medium transition-colors ${styles[variant]}`}
    >
      {children}
    </a>
  );
}
