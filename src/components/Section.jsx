"use client";

import { useEffect } from "react";
import Subsection from "./Subsection";
import { FaChevronDown } from "react-icons/fa";

const Section = ({ header, subsections, sectionKey, isExpanded, onToggle }) => {
  const sortedSubsections = [...subsections].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  const gridCols =
    subsections.length === 4
      ? "lg:grid-cols-2"
      : subsections.length === 3
      ? "lg:grid-cols-3"
      : subsections.length === 2
      ? "lg:grid-cols-2"
      : "lg:grid-cols-1";

  useEffect(() => {
    document.body.classList.add("overflow-y-scroll");
  }, []);

  return (
    <div className="mb-4">
      <div
        onClick={() => onToggle(sectionKey)}
        className={`group flex justify-between items-center mb-6 pb-2 cursor-pointer
        text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200
        border-b 
        ${
          isExpanded
            ? "border-gray-800 dark:border-gray-300"
            : "border-[#dadada] dark:border-[#242424]"
        }
        hover:border-gray-800 dark:hover:border-gray-300`}
      >
        <h1 className="flex-grow text-2xl font-bold text-gray-900 dark:text-gray-100">
          {header}
        </h1>
        <button
          className="ml-4 p-2"
          aria-label={isExpanded ? "Collapse Section" : "Expand Section"}
        >
          <FaChevronDown
            className={`h-4 w-4 transform transition-transform duration-300 ease-in-out ${
              isExpanded
                ? "rotate-180 text-gray-800 dark:text-gray-200 "
                : "text-gray-600 dark:text-gray-400"
            } group-hover:text-gray-800 dark:group-hover:text-gray-200`}
          />
        </button>
      </div>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isExpanded ? "max-h-[1000px]" : "max-h-0"
        }`}
        aria-hidden={!isExpanded}
      >
        {sortedSubsections.length > 0 ? (
          <div className={`grid gap-4 ${gridCols}`}>
            {sortedSubsections.map((subsection, index) => (
              <Subsection key={index} {...subsection} />
            ))}
          </div>
        ) : (
          <p className="text-gray-600 dark:text-gray-400">
            No subsections available.
          </p>
        )}
      </div>
    </div>
  );
};

export default Section;
