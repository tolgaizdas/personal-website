#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function ask(question) {
  return new Promise((resolve) => {
    rl.question(question, resolve);
  });
}

async function createNewBlogPost() {
  console.log("🚀 Creating a new blog post...\n");

  const title = await ask("📝 Blog title: ");
  const tag = await ask("🏷️  Tag/Category: ");
  const readingTime = await ask('⏱️  Reading time (e.g., "5 min read"): ');
  const preview = await ask("📖 Blog preview (1-2 sentences): ");

  // Generate ID from title
  const id = title
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, "")
    .replace(/\s+/g, "-")
    .trim();

  // Get current date
  const publishDate = new Date().toISOString().split("T")[0];

  const filename = `${id}.md`;
  const blogPath = path.join(__dirname, "..", "src", "data", "blogs", filename);
  const metadataPath = path.join(__dirname, "..", "src", "data", "blogs.json");

  // Create markdown file
  const markdownContent = `# ${title}

Write your blog content here using markdown syntax.

## Introduction

Start with an engaging introduction...

## Main Content

Add your main content sections here.

### Subsection

You can use:
- **Bold text**
- *Italic text*
- \`inline code\`
- [Links](https://example.com)

\`\`\`javascript
// Code blocks
function example() {
  console.log("Hello, World!");
}
\`\`\`

> Blockquotes for important notes

## Conclusion

Wrap up your thoughts here.
`;

  // Write markdown file
  fs.writeFileSync(blogPath, markdownContent);

  // Update blogs.json
  const blogs = JSON.parse(fs.readFileSync(metadataPath, "utf8"));
  const newBlog = {
    id,
    title,
    tag,
    publishDate,
    readingTime,
    file: filename,
    preview,
  };

  blogs.unshift(newBlog); // Add to beginning
  fs.writeFileSync(metadataPath, JSON.stringify(blogs, null, 2));

  console.log(`\n✅ Blog post created successfully!`);
  console.log(`📄 Markdown file: ${blogPath}`);
  console.log(`📋 Metadata updated in: ${metadataPath}`);
  console.log(`\n🎯 Next steps:`);
  console.log(`   1. Edit ${filename} with your content`);
  console.log(`   2. Update the reading time if needed`);
  console.log(`   3. Your blog will be available at: /blog`);

  rl.close();
}

createNewBlogPost().catch(console.error);
