import Subsection from './subsection';

const Section = ({ header, subsections }) => {
  // Sort subsections by date (assuming date is in a sortable format like ISO)
  const sortedSubsections = [...subsections].sort((a, b) => new Date(b.date) - new Date(a.date));

  // Determine the number of columns based on the number of subsections
  const gridCols = subsections.length > 2 ? 'lg:grid-cols-3' : subsections.length === 2 ? 'lg:grid-cols-2' : 'lg:grid-cols-1';

  return (
    <div className="mb-8">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
        {header}
      </h1>
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
  );
};

export default Section;
