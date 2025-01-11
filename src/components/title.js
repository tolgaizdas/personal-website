import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";

const Title = ({ name, email, githubUrl, linkedinUrl }) => {
  // sticky -> sticky top-0 z-10
  return (
    <header className="sticky top-0 z-10 mb-4 border-b border-gray-200 dark:border-gray-700 bg-gray-50/75 dark:bg-gray-800/75 backdrop-blur-md backdrop-filter">
      <div className="flex flex-col-reverse gap-2 sm:h-14 justify-between items-center max-w-7xl mx-auto p-4 sm:p-8 sm:flex-row">
        {/* Left Side */}
        <div className="flex gap-2 w-auto sm:w-20 sm:gap-4">
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="w-5 h-5" />
          </a>
          <a
            href={`mailto:${email}`}
            className="p-1 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
            aria-label="Email"
          >
            <FaEnvelope className="w-5 h-5" />
          </a>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
            aria-label="GitHub"
          >
            <FaGithub className="w-5 h-5" />
          </a>
        </div>

        {/* Center */}
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 whitespace-nowrap">
          {name}
        </h1>

        {/* Right Side */}
        <div className="hidden justify-end w-auto sm:w-20 sm:flex">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Title;
