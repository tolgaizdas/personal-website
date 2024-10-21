"use client";

import { useState } from "react";
import Subsection from "./subsection";
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Section = ({ header, subsections }) => {
  // State to track whether the section is collapsed or expanded
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Sort subsections by date (assuming date is in a sortable format like ISO)
  const sortedSubsections = [...subsections].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  // Determine the number of columns based on the number of subsections
  const gridCols =
    subsections.length > 2
      ? "lg:grid-cols-3"
      : subsections.length === 2
      ? "lg:grid-cols-2"
      : "lg:grid-cols-1";

  // Toggle the collapsed state
  const toggleCollapse = () => setIsCollapsed(!isCollapsed);

  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <h1
          className="text-2xl font-bold text-gray-900 dark:text-gray-100 cursor-pointer"
          onClick={toggleCollapse} // Make the header clickable
        >
          {header + " "}
          {/* Collapse/Expand Button */}
          <button
            onClick={toggleCollapse} // Button also toggles collapse
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 focus:outline-none"
            aria-label={isCollapsed ? 'Expand Section' : 'Collapse Section'}
          >
            {/* FontAwesome icons for up and down arrows */}
            {isCollapsed ? (
              <FaChevronUp className="h-4 w-4" />
            ) : (
              <FaChevronDown className="h-4 w-4" />
            )}
          </button>
        </h1>
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
