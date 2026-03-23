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

  const topicButtonBaseClassName =
    "rounded px-3 py-1 text-sm transition-[transform,box-shadow] duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-100 dark:focus-visible:ring-offset-neutral-900";

  const activeTopicButtonClassName =
    "bg-blue-600 text-white shadow-sm shadow-blue-600/20 hover:-translate-y-0.5 hover:bg-blue-500 hover:shadow-md hover:shadow-blue-600/25 active:translate-y-0";

  const inactiveTopicButtonClassName =
    "bg-neutral-200 text-neutral-700 hover:-translate-y-0.5 hover:bg-neutral-300 hover:shadow-sm active:translate-y-0 dark:bg-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-600";

  const tags = useMemo(() => {
    const uniqueTags = new Set(blogs.map((blog) => blog.tag).filter(Boolean));
    return ["All", ...uniqueTags];
  }, [blogs]);

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
      <div className="mb-8">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`${topicButtonBaseClassName} ${
                selectedTag === tag
                  ? activeTopicButtonClassName
                  : inactiveTopicButtonClassName
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

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
                {blog.tag ? (
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 p-1 rounded">
                    {blog.tag}
                  </span>
                ) : null}
                <span>
                  {blog.readingTime}
                  {blog.publishDate
                    ? ` · ${formatDateShort(blog.publishDate)}`
                    : ""}
                </span>
              </div>
              <p className="text-neutral-600 dark:text-neutral-400 line-clamp-2">
                {blog.preview}
              </p>
            </article>
          </Link>
        ))}
      </div>
    </>
  );
}
