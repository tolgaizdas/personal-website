const Subsection = ({ header, date, company, location, description }) => {
  const showMetadata = date || company || location;

  return (
    <div className="pb-4 rounded-lg">
      <h2
        className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2"
        dangerouslySetInnerHTML={{ __html: header }}
      />
      {showMetadata && (
        <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
          <span className="font-medium text-gray-800 dark:text-gray-200">
            {date}
          </span>{" "}
          {company ? "|" : ""}
          <span
            className="font-medium text-gray-800 dark:text-gray-200 ml-1"
            dangerouslySetInnerHTML={{ __html: company }}
          />{" "}
          {location ? "-" : ""}
          <span className="ml-1 text-gray-800 dark:text-gray-200">
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
