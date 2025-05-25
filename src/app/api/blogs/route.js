import { NextResponse } from "next/server";
import { getAllBlogs, getBlogById } from "../../../utils/blog.js";

export const runtime = "edge";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const blogId = searchParams.get("id");

    if (blogId) {
      // Get specific blog by ID
      const blog = await getBlogById(blogId);
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
