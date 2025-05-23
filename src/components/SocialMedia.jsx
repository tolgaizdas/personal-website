import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaGoogleScholar } from "react-icons/fa6";

const SocialMedia = ({ linkedinUrl, githubUrl, scholarUrl }) => {
  return (
    <div className="flex justify-center items-center gap-4 mb-8">
      <a
        href={linkedinUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="p-1 text-neutral-600 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-200 transition-colors"
        aria-label="LinkedIn"
      >
        <FaLinkedin className="w-5 h-5" />
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
  );
};

export default SocialMedia;
