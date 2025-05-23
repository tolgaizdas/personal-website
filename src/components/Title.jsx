import { FaEnvelope, FaCalendar } from "react-icons/fa";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaGoogleScholar } from "react-icons/fa6";
import ThemeToggle from "./ThemeToggle";

const Title = ({
  name,
  email,
  calendlyUrl,
  linkedinUrl,
  githubUrl,
  scholarUrl,
}) => {
  // sticky -> sticky top-0 z-10
  // border -> border-b border-neutral-300 dark:border-neutral-700
  return (
    <header
      className="sticky top-0 z-10 mb-4 border-b bg-[#f0f0f0] text-[#333333] border-neutral-300
      dark:bg-[#181818] dark:text-[#ececec] dark:border-neutral-700"
    >
      <div className="flex flex-col-reverse gap-2 sm:h-14 justify-between items-center max-w-7xl mx-auto p-4 sm:p-8 sm:flex-row">
        {/* Left Side */}
        <div className="flex gap-2 w-auto sm:w-20 sm:gap-4">
          <a
            href={`mailto:${email}`}
            className="p-1 text-neutral-600 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-200 transition-colors"
            aria-label="Email"
          >
            <FaEnvelope className="w-5 h-5" style={{ marginTop: "1px" }} />
          </a>
          <a
            href={calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1 text-neutral-600 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-200 transition-colors"
            aria-label="Calendly"
          >
            <FaCalendar className="w-5 h-5" />
          </a>
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1 text-neutral-600 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-200 transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="w-5 h-5" style={{ marginTop: "1px" }} />
          </a>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1 text-neutral-600 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-200 transition-colors"
            aria-label="GitHub"
          >
            <FaGithub className="w-5 h-5" />
          </a>
          <a
            href={scholarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1 text-neutral-600 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-200 transition-colors"
            aria-label="Google Scholar"
          >
            <FaGoogleScholar className="w-5 h-5" />
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
