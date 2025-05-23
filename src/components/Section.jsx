"use client";

import { useEffect } from "react";
import Subsection from "./Subsection";
import { FaChevronDown } from "react-icons/fa";

const Section = ({ header, subsections }) => {
  const sortedSubsections = [...subsections].sort(
    (a, b) => new Date(b.date) - new Date(a.date),
  );

  const gridCols =
    subsections.length === 4
      ? "lg:grid-cols-2"
      : subsections.length === 3
        ? "lg:grid-cols-3"
        : subsections.length === 2
          ? "lg:grid-cols-2"
          : "lg:grid-cols-1";

  return (
    <div className="mb-8">
      <h1 className="flex-grow text-2xl font-semibold text-neutral-900 dark:text-neutral-100 mb-4">
        {header}
      </h1>
      {sortedSubsections.length > 0 ? (
        <div className={`grid gap-4 ${gridCols}`}>
          {sortedSubsections.map((subsection, index) => (
            <Subsection key={index} {...subsection} />
          ))}
        </div>
      ) : (
        <p className="text-neutral-600 dark:text-neutral-400">
          No subsections available.
        </p>
      )}
    </div>
  );
};

export default Section;
