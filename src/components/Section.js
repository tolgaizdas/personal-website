"use client";

import { useState } from "react";
import Subsection from "./Subsection";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Section = ({ header, subsections }) => {
  // State to track whether the section is collapsed or expanded
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Sort subsections by date (assuming date is in a sortable format like ISO)
  const sortedSubsections = [...subsections].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  // Determine the number of columns based on the number of subsections
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
      {/* Header container with bottom border that spans full width */}
      <div
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="group flex justify-between items-center mb-6 pb-2 cursor-pointer
        text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200
        border-b border-gray-200 dark:border-gray-700 
        hover:border-gray-800 dark:hover:border-gray-200 transition-colors"
      >
        <h1 className="flex-grow text-2xl font-bold text-gray-900 dark:text-gray-100">
          {header}
        </h1>
        {/* Collapse/Expand Button */}
        <button
          className="ml-4 p-2"
          aria-label={isCollapsed ? "Expand Section" : "Collapse Section"}
        >
          {isCollapsed ? (
            <FaChevronUp className="h-4 w-4" />
          ) : (
            <FaChevronDown className="h-4 w-4" />
          )}
        </button>
      </div>

      {/* Conditionally render subsections based on isCollapsed */}
      {!isCollapsed && sortedSubsections.length > 0 ? (
        <div className={`grid gap-4 ${gridCols}`}>
          {sortedSubsections.map((subsection, index) => (
            <Subsection key={index} {...subsection} />
          ))}
        </div>
      ) : (
        !isCollapsed && (
          <p className="text-gray-600 dark:text-gray-400">
            No subsections available.
          </p>
        )
      )}
    </div>
  );
};

export default Section;
