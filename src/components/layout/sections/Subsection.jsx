import { sanitizeHtml } from "../../../utils/sanitize";

const Subsection = ({ header, date, company, location, description }) => {
  const showMetadata = date || company || location;

  return (
    <div className="pb-4 rounded-lg">
      {header && (
        <h2
          className="text-xl font-light text-neutral-800 dark:text-neutral-100 mb-2"
          dangerouslySetInnerHTML={{ __html: sanitizeHtml(header) }}
        />
      )}
      {showMetadata && (
        <div className="text-sm text-neutral-600 dark:text-neutral-400 mb-2 ml-1">
          <span className="font-light text-neutral-800 dark:text-neutral-200">
            {date}
          </span>{" "}
          {company ? "|" : ""}
          <span
            className="font-light text-neutral-800 dark:text-neutral-200 ml-1"
            dangerouslySetInnerHTML={{ __html: sanitizeHtml(company) }}
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
            dangerouslySetInnerHTML={{ __html: sanitizeHtml(item) }}
          />
        ))}
      </ul>
    </div>
  );
};

export default Subsection;
