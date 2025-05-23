const Subsection = ({ header, date, company, location, description }) => {
  const showMetadata = date || company || location;

  return (
    <div className="pb-4 rounded-lg border border-neutral-200 dark:border-neutral-800 shadow-md p-4">
      {header && (
        <h2
          className="text-xl font-medium text-neutral-800 dark:text-neutral-100 mb-2"
          dangerouslySetInnerHTML={{ __html: header }}
        />
      )}
      {showMetadata && (
        <div className="text-sm text-neutral-600 dark:text-neutral-400 mb-2 ml-1">
          <span className="font-medium text-neutral-800 dark:text-neutral-200">
            {date}
          </span>{" "}
          {company ? "|" : ""}
          <span
            className="font-medium text-neutral-800 dark:text-neutral-200 ml-1"
            dangerouslySetInnerHTML={{ __html: company }}
          />{" "}
          {location ? "-" : ""}
          <span className="ml-1 text-neutral-800 dark:text-neutral-200">
            {location}
          </span>
        </div>
      )}
      <ul className="list-disc pl-5 space-y-1">
        {description.map((item, index) => (
          <li
            key={index}
            className="text-gray-700 dark:text-gray-300"
            dangerouslySetInnerHTML={{ __html: item }} // TODO: Using innerHTML can be a security risk. Consider using a library like DOMPurify to avoid this.
          />
        ))}
      </ul>
    </div>
  );
};

export default Subsection;
