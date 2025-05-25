// Blog index mapping IDs to their respective modules
export const blogModules = {
  "My Journey to a Master's in Computer Science": () =>
    import("../data/blogs/blog1.js"),
  // Add more blog mappings here as you create them
  // "Blog ID": () => import('./blog.js'),
};

// Function to get a specific blog by ID
export async function getBlogById(id) {
  const moduleLoader = blogModules[id];
  if (!moduleLoader) {
    return null;
  }

  try {
    const module = await moduleLoader();
    return module.blogData;
  } catch (error) {
    console.error(`Error loading blog with ID "${id}":`, error);
    return null;
  }
}

// Function to get all blogs
export async function getAllBlogs() {
  const blogs = [];

  for (const [id, moduleLoader] of Object.entries(blogModules)) {
    try {
      const module = await moduleLoader();
      blogs.push(module.blogData);
    } catch (error) {
      console.error(`Error loading blog with ID "${id}":`, error);
      // Add a placeholder blog with error content
      blogs.push({
        id,
        title: "Error Loading Blog",
        tag: "Error",
        publishDate: "2025-01-01",
        readingTime: "0 min read",
        preview: "This blog post could not be loaded.",
        content: "# Error\n\nCould not load blog content.",
      });
    }
  }

  return blogs;
}
