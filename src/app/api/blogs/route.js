import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import blogsMetadata from "../../../data/blogs.json";

export async function GET() {
  try {
    const blogsWithContent = await Promise.all(
      blogsMetadata.map(async (blog) => {
        try {
          const filePath = path.join(
            process.cwd(),
            "src",
            "data",
            "blogs",
            blog.file,
          );
          const content = await fs.readFile(filePath, "utf8");
          return {
            ...blog,
            content,
          };
        } catch (error) {
          console.error(`Error reading blog file ${blog.file}:`, error);
          return {
            ...blog,
            content: "# Error\n\nCould not load blog content.",
          };
        }
      }),
    );

    return NextResponse.json(blogsWithContent);
  } catch (error) {
    console.error("Error loading blogs:", error);
    return NextResponse.json([], { status: 500 });
  }
}
