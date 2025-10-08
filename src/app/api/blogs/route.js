import { NextResponse } from "next/server";
import { getAllBlogs, getBlogById } from "@/utils/blog";

export const runtime = "edge";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const blogId = searchParams.get("id");
    const slug = searchParams.get("slug");

    if (blogId || slug) {
      const identifier = slug ?? blogId;
      // Get specific blog by ID or slug
      const blog = await getBlogById(identifier);
      if (!blog) {
        return NextResponse.json({ error: "Blog not found" }, { status: 404 });
      }
      return NextResponse.json(blog);
    } else {
      // Get all blogs
      const blogs = await getAllBlogs();
      return NextResponse.json(blogs);
    }
  } catch (error) {
    console.error("Error loading blogs:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
