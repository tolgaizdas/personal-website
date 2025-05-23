"use client";

import Title from "../components/Title";
import SocialMedia from "../components/SocialMedia";
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
} from "./sections";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1">
        <Title {...information} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
          <Section {...aboutMe} />
          <SocialMedia {...information} />
          <Section {...projects} />
          <Section {...publications} />
          <Section {...certifications} />
        </div>
        <TopButton />
      </div>
      <Footer />
    </div>
  );
}
