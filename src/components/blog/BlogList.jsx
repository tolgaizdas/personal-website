import Link from "next/link";

function formatDateShort(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function BlogList({ blogs = [] }) {
  const sortedBlogs = [...blogs].sort(
    (a, b) => new Date(b.publishDate) - new Date(a.publishDate),
  );

  if (!sortedBlogs.length) {
    return (
      <div className="text-center py-12">
        <p className="text-neutral-600 dark:text-neutral-400">
          No blog posts found.
        </p>
      </div>
    );
  }

  return (
    <ol className="border-t border-neutral-300/80 dark:border-neutral-700/80">
      {sortedBlogs.map((blog, index) => (
        <li
          key={blog.slug}
          className="border-b border-neutral-300/80 dark:border-neutral-700/80"
        >
          <Link
            href={`/blog/posts/${blog.slug}`}
            className="group grid grid-cols-[2.25rem_minmax(0,1fr)] gap-x-4 gap-y-3 py-7 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60 focus-visible:ring-offset-4 focus-visible:ring-offset-[#f0f0f0] dark:focus-visible:ring-offset-[#171717] sm:grid-cols-[3rem_minmax(0,1fr)] sm:gap-6 sm:py-9"
          >
            <span className="row-span-2 text-sm tabular-nums text-neutral-500 dark:text-neutral-500 sm:row-span-1 sm:self-start">
              {String(index + 1).padStart(2, "0")}
            </span>

            <div>
              {blog.tag ? (
                <p className="mb-2 text-xs font-medium uppercase tracking-[0.14em] text-neutral-600 dark:text-neutral-400">
                  {blog.tag}
                </p>
              ) : null}
              <div className="grid gap-3 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-baseline sm:gap-6">
              <h2 className="max-w-2xl text-xl font-semibold leading-snug tracking-[-0.015em] text-neutral-900 transition-[color,transform] duration-200 ease-out group-hover:translate-x-0.5 group-hover:text-blue-600 dark:text-neutral-100 dark:group-hover:text-blue-400 motion-reduce:transform-none motion-reduce:transition-none sm:text-2xl">
                {blog.title}
              </h2>

            <p
              className="text-sm text-neutral-600 dark:text-neutral-400 sm:text-right"
              style={{ alignSelf: "anchor-center" }}
            >
              {blog.publishDate ? (
                <time dateTime={blog.publishDate}>
                  {formatDateShort(blog.publishDate)}
                </time>
              ) : null}
              {blog.publishDate && blog.readingTime ? " · " : ""}
              {blog.readingTime}
            </p>
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ol>
  );
}
