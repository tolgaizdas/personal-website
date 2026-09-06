"use client";

import { useMemo, useState } from "react";
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
  const [selectedTag, setSelectedTag] = useState("All");

  const filteredBlogs = useMemo(() => {
    if (selectedTag === "All") {
      return blogs;
    }

    return blogs.filter((blog) => blog.tag === selectedTag);
  }, [blogs, selectedTag]);

  const sortedBlogs = useMemo(() => {
    return [...filteredBlogs].sort(
      (a, b) => new Date(b.publishDate) - new Date(a.publishDate),
    );
  }, [filteredBlogs]);

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
    <>
      <div className="space-y-6">
        {sortedBlogs.map((blog) => (
          <Link
            key={blog.slug}
            href={`/blog/posts/${blog.slug}`}
            className="block"
          >
            <article className="pb-6 cursor-pointer group">
              <h2 className="mb-4 text-xl font-semibold text-neutral-900 transition-transform duration-200 dark:text-neutral-100 group-hover:translate-x-0.5 group-hover:text-blue-600 dark:group-hover:text-blue-400 motion-reduce:transform-none">
                <span className="inline-block">
                  {blog.title}
                </span>
              </h2>
              <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-600 dark:text-neutral-400 mb-2">
                <span>
                  {blog.readingTime}
                  {blog.publishDate
                    ? ` · ${formatDateShort(blog.publishDate)}`
                    : ""}
                </span>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </>
  );
}
