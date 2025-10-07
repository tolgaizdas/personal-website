"use client";

import Section from "../components/layout/sections/Section";
import TopButton from "../components/common/TopButton";
import Footer from "../components/layout/Footer";
import Introduction from "../components/layout/Introduction";
import { information, aboutMe, publications, projects } from "./content";

export default function Home() {
  const introduction = aboutMe.subsections?.[0];

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <section className="pt-10">
          <div className="page-container">
            <Introduction
              information={information}
              introduction={introduction}
            />
          </div>
        </section>
        <section className="pt-10 pb-16">
          <div className="page-container space-y-12">
            <Section {...projects} />
            <Section {...publications} />
          </div>
        </section>
      </main>

      <Footer />
      <TopButton />
    </div>
  );
}
