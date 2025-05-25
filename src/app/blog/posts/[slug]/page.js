"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Title from "@/components/Title";
import Footer from "@/components/Footer";
import { information } from "../../../sections";
import { IoArrowBack } from "react-icons/io5";
import TopButton from "@/components/TopButton";

export const runtime = "edge";

// Simple utility functions inline to avoid import issues
function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPostPage() {
  const params = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);

  useEffect(() => {
    if (params.slug) {
      // Decode the URL parameter
      const decodedSlug = decodeURIComponent(params.slug);

      // Load specific blog post
      fetch("/api/blogs")
        .then((res) => res.json())
        .then((data) => {
          const foundBlog = data.find((b) => b.id === decodedSlug);
          if (foundBlog) {
            setBlog(foundBlog);
            // Set related blogs (same tag, excluding current blog)
            const related = data
              .filter((b) => b.tag === foundBlog.tag && b.id !== foundBlog.id)
              .slice(0, 3);
            setRelatedBlogs(related);
          } else {
            setError("Blog post not found");
          }
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error loading blog:", error);
          setError("Failed to load blog post");
          setLoading(false);
        });
    }
  }, [params.slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <div className="flex-1">
          <Title {...information} />
          <div className="p-8 py-0 md:px-0">
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
              <p className="text-neutral-600 dark:text-neutral-400 mt-4">
                Loading blog post...
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="min-h-screen flex flex-col">
        <div className="flex-1">
          <Title {...information} />
          <div className="max-w-4xl mx-auto px-8 py-0 md:px-0">
            {/* Back button */}
            <div className="flex items-center gap-4 mb-6">
              <Link
                href="/blog"
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 flex items-center gap-2"
              >
                <IoArrowBack className="w-5 h-5" />
                Back to Blog
              </Link>
            </div>

            <div className="text-center py-12">
              <h1 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
                {error || "Blog Post Not Found"}
              </h1>
              <p className="text-neutral-600 dark:text-neutral-400 mb-6">
                The blog post you're looking for doesn't exist or couldn't be
                loaded.
              </p>
              <Link
                href="/blog"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
              >
                View All Posts
              </Link>
            </div>
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
          {/* Back button */}
          <div className="flex items-center gap-4 mb-6">
            <Link
              href="/blog"
              className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 flex items-center gap-2"
            >
              <IoArrowBack className="w-5 h-5" />
              Back to Blog
            </Link>
          </div>

          {/* Blog header */}
          <article className="prose prose-neutral dark:prose-invert max-w-none mb-12">
            <div className="mb-8">
              <h1 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
                {blog.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-600 dark:text-neutral-400 mb-2">
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 p-1 rounded">
                  {blog.tag}
                </span>
                {blog.readingTime} · {formatDate(blog.publishDate)}
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
                {blog.content}
              </ReactMarkdown>
            </div>
          </article>

          {/* Related Posts */}
          {relatedBlogs.length > 0 && (
            <div className="mt-12 pt-8 border-t border-neutral-200 dark:border-neutral-700">
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-6">
                Related Posts
              </h3>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {relatedBlogs.map((relatedBlog) => (
                  <Link
                    key={relatedBlog.id}
                    href={`/blog/posts/${relatedBlog.id}`}
                    className="group"
                  >
                    <article className="border border-neutral-200 dark:border-neutral-700 rounded-lg p-4 hover:shadow-md transition-shadow">
                      <h4 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                        {relatedBlog.title}
                      </h4>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-xs">
                          {relatedBlog.tag}
                        </span>
                        <span className="text-xs text-neutral-500 dark:text-neutral-400">
                          {relatedBlog.readingTime}
                        </span>
                      </div>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-2">
                        {relatedBlog.preview}
                      </p>
                    </article>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <TopButton />
      <Footer />
    </div>
  );
}
