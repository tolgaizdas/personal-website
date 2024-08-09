// components/Subsection.js
const Subsection = ({ header, date, company, location, description }) => {
    const showMetadata = date || company || location;

    return (
      <div className="mb-4 p-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
          {header}
        </h2>
        {
            showMetadata &&
        <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
          <span className="font-medium text-gray-800 dark:text-gray-200">{date}</span> {company ? "|" : ""}
          <span className="font-medium text-gray-800 dark:text-gray-200 ml-1">{company}</span> {location ? "-" : ""}
          <span className="ml-1 text-gray-800 dark:text-gray-200">{location}</span>
        </div>
        }
        <ul className="list-disc pl-5 space-y-1">
          {description.map((item, index) => (
            <li key={index} className="text-gray-700 dark:text-gray-300">{item}</li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default Subsection;
  