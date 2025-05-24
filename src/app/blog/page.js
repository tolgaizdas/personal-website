"use client";

import { useState, useEffect } from "react";
import { IoArrowBack } from "react-icons/io5";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Title from "../../components/Title";
import Footer from "../../components/Footer";
import { information } from "../sections";

// Simple utility functions inline to avoid import issues
function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

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
  const [selectedBlog, setSelectedBlog] = useState(null);
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

  if (selectedBlog) {
    return (
      <div className="min-h-screen flex flex-col">
        <div className="flex-1">
          <Title {...information} />
          <div className="max-w-4xl mx-auto px-8 py-0 md:px-0">
            {/* Back button */}
            <div className="flex items-center gap-4 mb-6">
              <button
                onClick={() => setSelectedBlog(null)}
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 flex items-center gap-2"
              >
                <IoArrowBack className="w-5 h-5" />
                Back to blog list
              </button>
            </div>

            {/* Blog header */}
            <article className="prose prose-neutral dark:prose-invert max-w-none">
              <div className="mb-8">
                <h1 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
                  {selectedBlog.title}
                </h1>
                <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-600 dark:text-neutral-400">
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">
                    {selectedBlog.tag}
                  </span>
                  <span>{formatDate(selectedBlog.publishDate)}</span>
                  <span>{selectedBlog.readingTime}</span>
                </div>
              </div>

              {/* Blog content */}
              <div className="prose-lg prose-neutral dark:prose-invert max-w-none">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  components={{
                    // Customize code blocks
                    code: ({ node, inline, className, children, ...props }) => {
                      return inline ? (
                        <code
                          className="bg-neutral-100 dark:bg-neutral-800 px-1 py-0.5 rounded text-sm"
                          {...props}
                        >
                          {children}
                        </code>
                      ) : (
                        <code
                          className={`${className} block bg-neutral-100 dark:bg-neutral-800 p-4 rounded overflow-x-auto`}
                          {...props}
                        >
                          {children}
                        </code>
                      );
                    },
                    // Customize blockquotes
                    blockquote: ({ children }) => (
                      <blockquote className="border-l-4 border-blue-500 pl-4 italic text-neutral-600 dark:text-neutral-400">
                        {children}
                      </blockquote>
                    ),
                  }}
                >
                  {selectedBlog.content}
                </ReactMarkdown>
              </div>
            </article>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

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
                <article
                  key={blog.id}
                  className="border-b border-neutral-200 dark:border-neutral-700 pb-6 cursor-pointer group"
                  onClick={() => setSelectedBlog(blog)}
                >
                  <h3 className="text-l font-semibold text-neutral-900 dark:text-neutral-100 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 ">
                    {blog.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-sm">
                      {blog.tag}
                    </span>
                    <span className="text-sm text-neutral-500 dark:text-neutral-400">
                      {formatDateShort(blog.publishDate)} | {blog.readingTime}
                    </span>
                  </div>
                  <p className="text-neutral-600 dark:text-neutral-400 line-clamp-2">
                    {blog.preview}
                  </p>
                </article>
              ))
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
