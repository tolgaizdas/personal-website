"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Title from "@/components/layout/Title";
import { information } from "./content";

export default function NotFound() {
  const pathname = usePathname();
  const [isBlogPath, setIsBlogPath] = useState(false);

  useEffect(() => {
    // Resolve the requested URL after hydration of the shared static 404.
    setIsBlogPath(pathname === "/blog" || pathname?.startsWith("/blog/") === true);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Title
        {...information}
        hideBorder
        sectionLabel={isBlogPath ? "Blog" : undefined}
        sectionHref={isBlogPath ? "/blog" : undefined}
      />
      <main className="flex-1">
        <section className="page-container">
          <div className="border-t border-neutral-300/80 pt-7 text-center dark:border-neutral-700/80 sm:pt-9">
            <div className="fade-in-up" style={{ "--enter-delay": "360ms" }}>
              <h1 className="mb-4 text-2xl font-bold text-neutral-900 dark:text-neutral-100">
                Oops!..
              </h1>
              <p className="mb-6 text-neutral-600 dark:text-neutral-400">
                {isBlogPath
                  ? "The blog post you're looking for doesn't exist."
                  : "The page you're looking for doesn't exist."}
              </p>
              <Link
                href={isBlogPath ? "/blog" : "/"}
                className="group inline-flex px-1 py-1 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
              >
                <span className="transition-transform duration-200 ease-out group-hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:transform-none">
                  {isBlogPath ? "Back to blog" : "Go home"}
                </span>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
