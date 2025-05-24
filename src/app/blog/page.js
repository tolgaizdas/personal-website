"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Title from "../../components/Title";
import Footer from "../../components/Footer";
import { information } from "../sections";

function formatDateShort(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function BlogPage() {
  const [blogs, setBlogs] = useState([]);
  const [selectedTag, setSelectedTag] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load blogs from API endpoint (which reads markdown files)
    fetch("/api/blogs")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error loading blogs:", error);
        // Fallback: load from static file if API doesn't exist (but without content)
        import("../../data/blogs.json").then((data) => {
          const blogsWithPlaceholder = data.default.map((blog) => ({
            ...blog,
            content:
              "# Content Loading Error\n\nPlease refresh the page or check the server.",
          }));
          setBlogs(blogsWithPlaceholder);
          setLoading(false);
        });
      });
  }, []);

  // Get unique tags
  const tags = ["All", ...new Set(blogs.map((blog) => blog.tag))];

  // Filter blogs by selected tag
  const filteredBlogs =
    selectedTag === "All"
      ? blogs
      : blogs.filter((blog) => blog.tag === selectedTag);

  // Sort blogs by date (newest first)
  const sortedBlogs = [...filteredBlogs].sort(
    (a, b) => new Date(b.publishDate) - new Date(a.publishDate),
  );

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1">
        <Title {...information} />
        <div className="max-w-2xl p-8 py-0 md:px-0">
          {/* Blog header */}
          <div className="mb-8">
            <h1 className="flex-grow text-2xl font-semibold text-neutral-900 dark:text-neutral-100 mb-4 decoration-neutral-300 dark:decoration-neutral-700">
              Welcome to my blog!
            </h1>
            <p className="text-neutral-600 dark:text-neutral-400">
              Here, I share my thoughts, experiences, and insights on a variety
              of topics. I hope you find the content engaging and insightful.
              Enjoy reading!
            </p>
          </div>

          {/* Tag filter */}
          {loading || (
            <div className="mb-8">
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setSelectedTag(tag)}
                    className={`px-3 py-1 rounded-full text-sm  ${
                      selectedTag === tag
                        ? "bg-blue-600 text-white"
                        : "bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-300 dark:hover:bg-neutral-600"
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Blog list */}
          <div className="space-y-6">
            {loading ? (
              <div className="text-center py-12">
                <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                <p className="text-neutral-600 dark:text-neutral-400 mt-4">
                  Loading blog posts...
                </p>
              </div>
            ) : sortedBlogs.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-neutral-600 dark:text-neutral-400">
                  No blog posts found.
                </p>
              </div>
            ) : (
              sortedBlogs.map((blog) => (
                <Link
                  key={blog.id}
                  href={`/blog/posts/${blog.id}`}
                  className="block"
                >
                  <article className="border-b border-neutral-200 dark:border-neutral-700 pb-6 cursor-pointer group">
                    <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 ">
                      {blog.title}
                    </h2>
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-sm">
                        {blog.tag}
                      </span>
                      <span className="text-sm text-neutral-500 dark:text-neutral-400">
                        {formatDateShort(blog.publishDate)}
                      </span>
                      <span className="text-sm text-neutral-500 dark:text-neutral-400">
                        {blog.readingTime}
                      </span>
                    </div>
                    <p className="text-neutral-600 dark:text-neutral-400 line-clamp-2">
                      {blog.preview}
                    </p>
                  </article>
                </Link>
              ))
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
