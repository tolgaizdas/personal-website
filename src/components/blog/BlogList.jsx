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
      <div className="empty-state">
        <p>No blog posts found.</p>
      </div>
    );
  }

  return (
    <ol className="blog-list">
      {sortedBlogs.map((blog) => (
        <li key={blog.slug} className="blog-item">
          <div>
            {blog.tag ? <p className="blog-tag">{blog.tag}</p> : null}
            <h2 className="blog-title">
              <Link href={`/blog/posts/${blog.slug}`}>
                {blog.title}
              </Link>
            </h2>
            <p className="blog-meta">
              {blog.publishDate ? (
                <time dateTime={blog.publishDate}>
                  {formatDateShort(blog.publishDate)}
                </time>
              ) : null}
              {blog.publishDate && blog.readingTime ? " · " : ""}
              {blog.readingTime}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}
