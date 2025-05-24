import { FaEnvelope } from "react-icons/fa";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaGoogleScholar } from "react-icons/fa6";
import { IoMdCalendar } from "react-icons/io";
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
      className="sticky top-0 z-10 mb-12 border-b bg-[#f0f0f0] text-[#333333] border-neutral-300
      dark:bg-[#181818] dark:text-[#ececec] dark:border-neutral-700"
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto p-8 md:px-0 md:py-8 min-h-[3.5rem]">
        {/* Left Side - Name aligned with section titles */}
        <h1 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
          {name}
        </h1>

        {/* Right Side - Social buttons, separator, and theme toggle */}
        <div className="flex items-center gap-4 mt-[6px]">
          {/* Social Media Buttons */}
          <div className="flex gap-2 sm:gap-4">
            <a
              href={`mailto:${email}`}
              className="p-1 text-neutral-600 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-200 transition-colors"
              aria-label="Email"
            >
              <FaEnvelope className="w-5 h-5" style={{ marginTop: "2px" }} />
            </a>
            <a
              href={calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 text-neutral-600 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-200 transition-colors"
              aria-label="Calendly"
            >
              <IoMdCalendar
                className="w-6 h-6"
                style={{ marginBottom: "1px" }}
              />
            </a>
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 text-neutral-600 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-200 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-5 h-5" style={{ marginTop: "2px" }} />
            </a>
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 text-neutral-600 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-200 transition-colors"
              aria-label="GitHub"
            >
              <FaGithub className="w-5 h-5" style={{ marginTop: "2px" }} />
            </a>
            <a
              href={scholarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 text-neutral-600 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-200 transition-colors"
              aria-label="Google Scholar"
            >
              <FaGoogleScholar
                className="w-5 h-5"
                style={{ marginTop: "2px" }}
              />
            </a>
          </div>

          {/* Separator Line */}
          <div className="h-6 w-px bg-neutral-300 dark:bg-neutral-700"></div>

          {/* Theme Toggle */}
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Title;
