import Title from "../../components/layout/Title";
import Footer from "../../components/layout/Footer";
import BlogList from "@/components/blog/BlogList";
import { information } from "../content";
import { getAllBlogs } from "@/utils/blog";

export const dynamic = "force-static";

export default async function BlogPage() {
  const blogs = await getAllBlogs();
  const hasBlogs = blogs.length > 0;

  return (
    <div className="min-h-screen flex flex-col">
      <Title {...information} />
      <main className="flex-1 max-w-5xl mx-auto">
        <section className="page-container mb-10 custom:pr-[20rem]">
          <h1 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100 mb-4">
            Welcome to my blog!
          </h1>
          <p className="text-neutral-600 dark:text-neutral-400">
            Here, I share my thoughts, experiences, and insights on a variety of
            topics. I hope you find the content engaging and insightful. Enjoy
            reading!
          </p>
        </section>

        <section
          className={`page-container pb-16${hasBlogs ? " custom:pr-[20rem]" : ""}`}
        >
          <BlogList blogs={blogs} />
        </section>
      </main>
      <Footer />
    </div>
  );
}
