# Personal website

A Next.js personal site with a homepage, blog, and Cloudflare Pages configuration.

## Local development

```bash
npm install
npm run dev
```

Open <http://localhost:3000>. Run `npm run build` to check the production build. Do not run a production build while `next dev` is using the same `.next` directory.

## Blog posts

Posts live in `src/data/blogs/`. Each post has an `index.js` for metadata and a `content.md` for the article. After adding a post directory, import it and add it to `rawBlogs` in `src/utils/blog.js`.

## Cloudflare Pages

`npm run pages:build` builds the Pages output. `npm run preview` builds and previews it locally; `npm run deploy` builds and deploys it with Wrangler. The Pages settings are in `wrangler.toml`.
