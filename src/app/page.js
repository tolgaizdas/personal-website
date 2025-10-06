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
        <section>
          <div className="max-w-5xl mx-auto px-8 py-10">
            <Introduction
              information={information}
              introduction={introduction}
            />
          </div>
        </section>
        <section>
          <div className="max-w-5xl mx-auto px-8 custom:pr-[20rem] py-10">
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
