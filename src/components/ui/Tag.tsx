export default function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-md border border-border bg-surface-2 px-2 py-1 font-mono text-[11px] text-fg-muted">
      {children}
    </span>
  );
}
