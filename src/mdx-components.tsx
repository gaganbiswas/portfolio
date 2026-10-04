import type { MDXComponents } from "mdx/types";
import Link from "next/link";

const linkClass =
  "underline underline-offset-2 decoration-1 decoration-neutral-400 hover:decoration-neutral-300 dark:text-neutral-50 dark:decoration-neutral-500 dark:hover:decoration-neutral-200 transition-colors";

const components: MDXComponents = {
  h1: (props) => <h1 className="text-2xl md:text-3xl font-medium" {...props} />,
  h2: (props) => <h2 className="text-xl mt-10 mb-2 font-medium" {...props} />,
  h3: (props) => <h3 className="text-lg mt-8 mb-2 font-medium" {...props} />,
  p: (props) => <p className="my-5 text-lg" {...props} />,
  ul: (props) => (
    <ul className="list-disc pl-6 my-5 space-y-2 text-lg" {...props} />
  ),
  table: (props) => (
    <div className="my-6 overflow-x-auto">
      <table
        className="w-full text-base border-collapse tabular-nums"
        {...props}
      />
    </div>
  ),
  th: (props) => (
    <th
      className="px-2 py-1.5 text-left font-medium border-b border-neutral-400 dark:border-neutral-600 align-bottom"
      {...props}
    />
  ),
  td: (props) => (
    <td
      className="px-2 py-1.5 border-b border-neutral-200 dark:border-neutral-800"
      {...props}
    />
  ),
  pre: (props) => (
    <pre
      className="my-5 p-4 overflow-x-auto rounded-lg text-sm bg-neutral-200 dark:bg-neutral-900 [&>code]:bg-transparent [&>code]:p-0"
      {...props}
    />
  ),
  code: (props) => (
    <code
      className="font-mono text-[0.85em] px-1 rounded bg-neutral-200 dark:bg-neutral-800"
      {...props}
    />
  ),
  a: ({ href = "", ...props }) =>
    href.startsWith("/") ? (
      <Link href={href} className={linkClass} {...props} />
    ) : (
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={linkClass}
        {...props}
      />
    ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}
