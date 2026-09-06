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
      <main className="flex-1">
        <section
          className={`fade-in-up page-container`}
          style={{ "--enter-delay": "380ms" }}
        >
          <BlogList blogs={blogs} />
        </section>
      </main>
    </div>
  );
}
