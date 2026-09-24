import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Title from "@/components/layout/Title";
import Footer from "@/components/layout/Footer";
import TopButton from "@/components/common/TopButton";
import { information } from "../../../content";
import { getAllBlogs, getAllBlogSlugs, getBlogById } from "@/utils/blog";

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
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
    return { title: "Blog Post Not Found" };
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
    notFound();
  }

  const allBlogs = await getAllBlogs();
  const relatedBlogs = allBlogs
    .filter(
      (candidate) =>
        candidate.tag === blog.tag && candidate.slug !== blog.slug,
    )
    .slice(0, 3);

  return (
    <>
      <Title {...information} sectionLabel="Blog" />
      <main id="main" className="wrap article-main">
        <div className="article-layout">
          <article className="article">
            <header className="article-header">
              <h1>{blog.title}</h1>
              <p className="article-meta">
                {blog.publishDate ? (
                  <time dateTime={blog.publishDate}>
                    {formatDate(blog.publishDate)}
                  </time>
                ) : null}
                {blog.publishDate && blog.readingTime ? " · " : ""}
                {blog.readingTime}
              </p>
            </header>

            <div className="prose">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  h1: ({ children }) => <h2>{children}</h2>,
                  code: ({ inline, className, children, ...props }) =>
                    inline ? (
                      <code {...props}>{children}</code>
                    ) : (
                      <code className={className} {...props}>
                        {children}
                      </code>
                    ),
                }}
              >
                {blog.content}
              </ReactMarkdown>
            </div>
          </article>

          {relatedBlogs.length > 0 ? (
            <section className="related-posts">
              <h2>Related posts</h2>
              <ul>
                {relatedBlogs.map((relatedBlog) => (
                  <li key={relatedBlog.slug}>
                    <Link href={`/blog/posts/${relatedBlog.slug}`}>
                      {relatedBlog.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}
        </div>
      </main>
      <Footer />
      <TopButton />
    </>
  );
}
