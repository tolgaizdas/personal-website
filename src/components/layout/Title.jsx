import Link from "next/link";

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
          <Link
            href="/blog"
            aria-current={sectionLabel === "Blog" ? "page" : undefined}
          >
            Blog
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Title;
