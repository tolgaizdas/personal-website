import Title from "../../components/layout/Title";
import Footer from "../../components/layout/Footer";
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
    <>
      <Title {...information} sectionLabel="Blog" />
      <main id="main" className="wrap journal-main">
        <section aria-labelledby="journal-title">
          <div className="journal-content">
            <h1 id="journal-title" className="page-title">Blog</h1>
            <p className="page-intro">
              Notes on my life and experiences.
            </p>
            <BlogList blogs={blogs} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
