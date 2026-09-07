import Title from "../../components/layout/Title";
import BlogList from "@/components/blog/BlogList";
import { information } from "../content";
import { getAllBlogs } from "@/utils/blog";

export const dynamic = "force-static";

export const metadata = {
  title: "Blog | Tolga Izdas",
  description: "Blog by Tolga Izdas.",
};

export default async function BlogPage() {
  const blogs = await getAllBlogs();

  return (
    <div className="min-h-screen flex flex-col">
      <Title {...information} sectionLabel="Blog" />
      <main className="flex-1 pb-16 sm:pb-24">
        <section
          className="fade-in-up page-container"
          style={{ "--enter-delay": "380ms" }}
        >
          <BlogList blogs={blogs} />
        </section>
      </main>
    </div>
  );
}
