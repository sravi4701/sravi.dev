/* eslint-disable react/display-name */
import Link from "next/link";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";
import { highlight } from "sugar-high";

function Table({ data }) {
  return (
    <table>
      <thead>
        <tr>
          {data.headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.rows.map((row, index) => (
          <tr key={index}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function CustomLink(props) {
  const href = props.href;

  if (href.startsWith("/")) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    );
  }

  if (href.startsWith("#")) {
    return <a {...props} />;
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
}

function CustomUL(props) {
  return <ul {...props}>{props.children}</ul>;
}

function RoundedImage(props) {
  return <Image alt={props.alt} className="rounded-lg" {...props} />;
}

function Callout(props) {
  return (
    <div className="mb-8 flex items-center rounded-lg border border-border bg-surface-2 px-4 py-3 text-sm text-fg">
      <div className="mr-4 flex w-4 items-center">{props.emoji}</div>
      <div className="callout w-full">{props.children}</div>
    </div>
  );
}

function Code({ children, ...props }) {
  const codeHTML = highlight(children);
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
}

function slugify(str: string) {
  return str
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/&/g, "-and-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-");
}

function createHeading(level: number) {
  const Heading = ({ children }) => {
    const slug = slugify(children);
    const Tag = `h${level}` as keyof JSX.IntrinsicElements;

    return (
      <Tag id={slug} className="mt-8 mb-4 font-display">
        <a href={`#${slug}`} className="anchor no-underline" aria-hidden="true" />
        {children}
      </Tag>
    );
  };

  return Heading;
}

const components = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  Image: RoundedImage,
  a: CustomLink,
  Callout,
  code: Code,
  Table,
  ul: CustomUL,
};

export default function CustomMDX(
  props: React.ComponentProps<typeof MDXRemote>
) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...((props as any).components || {}) }}
    />
  );
}
