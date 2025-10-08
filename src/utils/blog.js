import { blogData as blog1 } from "../data/blogs/blog1/index";

const rawBlogs = [blog1];

function createSlug(source) {
  const candidate = source
    .toString()
    .trim()
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-{2,}/g, "-");

  if (candidate.length > 0) {
    return candidate;
  }

  return source.toString().trim().toLowerCase().replace(/\s+/g, "-") || "blog";
}

function normalizeBlogData(data) {
  const id = data.id ?? data.title ?? "untitled-blog";
  const slug = data.slug ?? createSlug(id);

  return {
    ...data,
    id,
    slug,
  };
}

const blogStore = rawBlogs.map(normalizeBlogData);
const blogsById = new Map();
const blogsBySlug = new Map();

for (const blog of blogStore) {
  blogsById.set(blog.id, blog);
  blogsBySlug.set(blog.slug, blog);
}

export async function getBlogById(identifier) {
  const blog = blogsById.get(identifier) ?? blogsBySlug.get(identifier);
  return blog ? { ...blog } : null;
}

export async function getAllBlogs() {
  return blogStore.map((blog) => ({ ...blog }));
}

export async function getAllBlogSlugs() {
  return blogStore.map((blog) => blog.slug);
}
