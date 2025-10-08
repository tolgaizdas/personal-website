import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Title from "@/components/layout/Title";
import Footer from "@/components/layout/Footer";
import TopButton from "@/components/common/TopButton";
import { IoArrowBack } from "react-icons/io5";
import { information } from "../../../content";
import { getAllBlogs, getAllBlogSlugs, getBlogById } from "@/utils/blog";

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export async function generateStaticParams() {
  const slugs = await getAllBlogSlugs();

  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = await getBlogById(slug);

  if (!blog) {
    return {
      title: "Blog Post Not Found",
    };
  }

  const description = blog.preview || blog.content?.slice(0, 160) || "";

  return {
    title: blog.title,
    description,
    openGraph: {
      title: blog.title,
      description,
      type: "article",
      publishedTime: blog.publishDate,
      tags: blog.tag ? [blog.tag] : undefined,
      url: `https://tolgaizdas.com/blog/posts/${blog.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description,
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const blog = await getBlogById(slug);

  if (!blog) {
    return (
      <div className="min-h-screen flex flex-col">
        <Title {...information} />
        <main className="flex-1">
          <section className="page-container">
            <div className="flex items-center gap-4 mb-6">
              <Link
                href="/blog"
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 flex items-center gap-2"
              >
                <IoArrowBack className="w-5 h-5" />
                Back to Blog
              </Link>
            </div>

            <div className="text-center">
              <h1 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
                Blog Post Not Found
              </h1>
              <p className="text-neutral-600 dark:text-neutral-400 mb-6">
                The blog post you're looking for doesn't exist or couldn't be
                loaded.
              </p>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    );
  }

  const allBlogs = await getAllBlogs();
  const relatedBlogs = allBlogs
    .filter((b) => b.tag === blog.tag && b.slug !== blog.slug)
    .slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col">
      <Title {...information} />
      <main className="flex-1">
        <section className="page-container">
          <div className="flex items-center gap-4 mb-6">
            <Link
              href="/blog"
              className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 flex items-center gap-2"
            >
              <IoArrowBack className="w-5 h-5" />
              Back to Blog
            </Link>
          </div>

          <article className="prose prose-neutral dark:prose-invert max-w-none mb-12">
            <div className="mb-8">
              <h1 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
                {blog.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-600 dark:text-neutral-400 mb-2">
                {blog.tag ? (
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 p-1 rounded">
                    {blog.tag}
                  </span>
                ) : null}
                <span>
                  {blog.readingTime}
                  {blog.publishDate ? ` · ${formatDate(blog.publishDate)}` : ""}
                </span>
              </div>
            </div>

            <div className="prose-lg prose-neutral dark:prose-invert max-w-none">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  code: ({ inline, className, children, ...props }) =>
                    inline ? (
                      <code
                        className="bg-neutral-100 dark:bg-neutral-800 px-1.5 rounded text-sm"
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
                    ),
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

          {relatedBlogs.length > 0 && (
            <div className="mt-12 pt-8 border-t border-neutral-200/70 dark:border-neutral-700">
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-6">
                Related Posts
              </h3>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {relatedBlogs.map((relatedBlog) => (
                  <Link
                    key={relatedBlog.slug}
                    href={`/blog/posts/${relatedBlog.slug}`}
                    className="group"
                  >
                    <article className="border border-neutral-200/70 dark:border-neutral-800/60 rounded-lg p-4 hover:shadow-md transition-shadow">
                      <h4 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                        {relatedBlog.title}
                      </h4>
                      <div className="flex items-center gap-2 mb-2">
                        {relatedBlog.tag ? (
                          <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-xs">
                            {relatedBlog.tag}
                          </span>
                        ) : null}
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
        </section>
      </main>

      <TopButton />
      <Footer />
    </div>
  );
}
