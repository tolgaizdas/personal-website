import Link from "next/link";

const Blog = ({ blogUrl }) => {
  return (
    <Link
      href={blogUrl}
      className="group inline-flex px-1 py-1 text-neutral-600 dark:text-neutral-400"
    >
      <span className="transition-[transform] duration-200 ease-out group-hover:-translate-y-0.5 group-hover:text-neutral-800 dark:group-hover:text-neutral-200 motion-reduce:transition-none">
        Blog
      </span>
    </Link>
  );
};

export default Blog;
