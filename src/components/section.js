// components/Section.js
import Subsection from './subsection';

const Section = ({ header, subsections }) => {
  // Sort subsections by date (assuming date is in a sortable format like ISO)
  const sortedSubsections = [...subsections].sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className="mb-8">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
        {header}
      </h1>
      {sortedSubsections.length > 0 ? (
        sortedSubsections.map((subsection, index) => (
          <Subsection key={index} {...subsection} />
        ))
      ) : (
        <p className="text-gray-600 dark:text-gray-400">
          No subsections available.
        </p>
      )}
    </div>
  );
};

export default Section;
