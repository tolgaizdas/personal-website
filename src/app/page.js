"use client";

import Title from "../components/Title";
import Section from "../components/Section";
import TopButton from "../components/TopButton";
import Footer from "../components/Footer";
import {
  information,
  aboutMe,
  publications,
  projects,
  awardsAndHonors,
  coursework,
  certifications,
  skills,
} from "./sections";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1">
        <Title {...information} />
        <div className="max-w-2xl p-8 py-0 md:px-0">
          <Section {...aboutMe} />
          <Section {...skills} />
          <Section {...projects} />
          <Section {...publications} />
          <Section {...certifications} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
