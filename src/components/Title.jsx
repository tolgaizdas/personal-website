import { FaEnvelope } from "react-icons/fa";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaGoogleScholar } from "react-icons/fa6";
import { IoMdCalendar } from "react-icons/io";
import ThemeToggle from "./ThemeToggle";
import Link from "next/link";

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
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 sm:gap-2 px-8 p-8 md:px-0 md:py-8 min-h-[3.5rem]">
        {/* Left Side - Name aligned with section titles */}
        <h1 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100 leading-[1.8rem] sm:leading-[2rem]">
          <Link href="/">{name}</Link>
        </h1>

        {/* Right Side - Contact buttons, social buttons, separator, and theme toggle */}
        <div className="flex items-center gap-4 mt-0 sm:mt-[5px]">
          {/* Contact Buttons */}
          <div className="flex gap-2 sm:gap-4">
            <Link
              href={`mailto:${email}`}
              className="p-1 text-neutral-600 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-200 transition-colors flex items-center"
              aria-label="Email"
            >
              <FaEnvelope className="w-5 h-5" />
            </Link>
            <Link
              href={calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 text-neutral-600 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-200 transition-colors flex items-center"
              aria-label="Calendly"
            >
              <IoMdCalendar className="w-6 h-6" />
            </Link>
          </div>

          {/* Separator Line */}
          <div className="h-6 min-h-[1.5rem] w-px bg-neutral-300 dark:bg-neutral-700 flex-shrink-0"></div>

          {/* Social Media Buttons */}
          <div className="flex gap-2 sm:gap-4">
            <Link
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 text-neutral-600 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-200 transition-colors flex items-center"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-5 h-5" />
            </Link>
            <Link
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 text-neutral-600 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-200 transition-colors flex items-center"
              aria-label="GitHub"
            >
              <FaGithub className="w-5 h-5" />
            </Link>
            <Link
              href={scholarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 text-neutral-600 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-200 transition-colors flex items-center"
              aria-label="Google Scholar"
            >
              <FaGoogleScholar className="w-5 h-5" />
            </Link>
          </div>

          {/* Separator Line */}
          <div className="h-6 min-h-[1.5rem] w-px bg-neutral-300 dark:bg-neutral-700 flex-shrink-0"></div>

          <div className="flex gap-2 sm:gap-4">
            <Link
              href="/blog"
              className="p-1 text-neutral-600 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-200 transition-colors flex items-center text-center font-bold"
              aria-label="Blog"
            >
              My Blog
            </Link>
          </div>

          {/* Separator Line */}
          <div className="h-6 min-h-[1.5rem] w-px bg-neutral-300 dark:bg-neutral-700 flex-shrink-0"></div>

          {/* Theme Toggle */}
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Title;
