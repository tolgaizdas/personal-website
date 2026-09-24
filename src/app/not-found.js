"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Title from "@/components/layout/Title";
import Footer from "@/components/layout/Footer";
import { information } from "./content";

export default function NotFound() {
  const pathname = usePathname();
  const [isBlogPath, setIsBlogPath] = useState(false);

  useEffect(() => {
    setIsBlogPath(
      pathname === "/blog" || pathname?.startsWith("/blog/") === true,
    );
  }, [pathname]);

  return (
    <>
      <Title {...information} sectionLabel={isBlogPath ? "Blog" : undefined} />
      <main className="wrap not-found-main">
        <section className="not-found">
          <h1>Page not found</h1>
          <p>
            {isBlogPath
              ? "The blog post you're looking for doesn't exist."
              : "The page you're looking for doesn't exist."}
          </p>
          <Link className="back-link" href={isBlogPath ? "/blog" : "/"}>
            {isBlogPath ? "Back to blog" : "Go home"}
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
