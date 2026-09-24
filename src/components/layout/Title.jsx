import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

const Title = ({ name, sectionLabel }) => {
  return (
    <header className="site-header">
      <div className="wrap header-inner">
        <Link className="brand" href="/">
          {name}
        </Link>
        <nav aria-label="Main">
          <Link href="/" aria-current={!sectionLabel ? "page" : undefined}>
            Home
          </Link>
          <span className="nav-blog-group">
            <Link
              href="/blog"
              aria-current={sectionLabel === "Blog" ? "page" : undefined}
            >
              Blog
            </Link>
            <span className="nav-separator" aria-hidden="true" />
            <ThemeToggle />
          </span>
        </nav>
      </div>
    </header>
  );
};

export default Title;
