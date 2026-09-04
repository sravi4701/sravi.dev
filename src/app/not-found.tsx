import Link from "next/link";
import Container from "@/components/layout/Container";

export default function NotFound() {
  return (
    <section className="py-28 md:py-36">
      <Container>
        <p className="label mb-3">404</p>
        <h1 className="font-display text-4xl leading-tight md:text-5xl">
          This page does not exist.
        </h1>
        <p className="mt-5 max-w-measure text-fg-muted">
          The link may be out of date. The home page has everything current.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center rounded-lg border border-accent bg-accent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
        >
          Back home
        </Link>
      </Container>
    </section>
  );
}
