"use client";

import { useState, useEffect, useRef } from "react";
import Subsection from "./Subsection";
import { FaChevronDown } from "react-icons/fa";

const Section = ({ header, subsections, sectionKey, isExpanded, onToggle }) => {
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

  // States and refs for handling the animation
  const [height, setHeight] = useState(isExpanded ? "auto" : "0");
  const contentRef = useRef(null);

  // Apply a CSS class to the document body to prevent scrollbar jumps
  useEffect(() => {
    // Add a class to the body to always show scrollbar
    document.body.classList.add("overflow-y-scroll");
  }, []);

  useEffect(() => {
    if (isExpanded) {
      // Get the scrollHeight to determine the full height of the content
      const contentHeight = contentRef.current.scrollHeight;
      setHeight(`${contentHeight}px`);

      // After transition is complete, set height to auto to handle content changes
      const timer = setTimeout(() => {
        setHeight("auto");
      }, 300); // Match this timing with the CSS transition duration

      return () => clearTimeout(timer);
    } else {
      // First set a fixed height to enable the animation
      if (contentRef.current) {
        // Set height to actual height before animating to zero
        const contentHeight = contentRef.current.scrollHeight;
        setHeight(`${contentHeight}px`);

        // Force a reflow before setting height to 0
        contentRef.current.offsetHeight;

        // Use requestAnimationFrame to ensure browser has processed the fixed height
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setHeight("0");
          });
        });
      }
    }
  }, [isExpanded]);

  return (
    <div className="mb-4">
      {/* Header container with bottom border that spans full width */}
      <div
        onClick={() => onToggle(sectionKey)}
        className={`group flex justify-between items-center mb-6 pb-2 cursor-pointer
        text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200
        border-b 
        ${
          isExpanded
            ? "border-gray-800 dark:border-gray-300"
            : "border-gray-300 dark:border-gray-700"
        }
        hover:border-gray-800 dark:hover:border-gray-300`}
      >
        <h1 className="flex-grow text-2xl font-bold text-gray-900 dark:text-gray-100">
          {header}
        </h1>
        {/* Collapse/Expand Button */}
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

      {/* Animated content container */}
      <div
        ref={contentRef}
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ height }}
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
