"use client";

import { useState } from "react";
import Title from "../components/Title";
import Section from "../components/Section";
import TopButton from "../components/TopButton";
import Footer from "../components/Footer";
import {
  title,
  aboutMe,
  publications,
  projects,
  awardsAndHonors,
  coursework,
  certifications,
} from "./sections";

export default function Home() {
  const [expandedSection, setExpandedSection] = useState("aboutMe");

  const toggleSection = (sectionKey) => {
    setExpandedSection(expandedSection === sectionKey ? null : sectionKey);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1">
        <Title {...title} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
          <Section
            {...aboutMe}
            sectionKey="aboutMe"
            isExpanded={expandedSection === "aboutMe"}
            onToggle={toggleSection}
          />
          <Section
            {...projects}
            sectionKey="projects"
            isExpanded={expandedSection === "projects"}
            onToggle={toggleSection}
          />
          <Section
            {...coursework}
            sectionKey="coursework"
            isExpanded={expandedSection === "coursework"}
            onToggle={toggleSection}
          />
          <Section
            {...awardsAndHonors}
            sectionKey="awardsAndHonors"
            isExpanded={expandedSection === "awardsAndHonors"}
            onToggle={toggleSection}
          />
          <Section
            {...publications}
            sectionKey="publications"
            isExpanded={expandedSection === "publications"}
            onToggle={toggleSection}
          />
          <Section
            {...certifications}
            sectionKey="certifications"
            isExpanded={expandedSection === "certifications"}
            onToggle={toggleSection}
          />
        </div>
        <TopButton />
      </div>
      <Footer />
    </div>
  );
}
