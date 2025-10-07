import ThemeToggle from "../common/ThemeToggle";
import Link from "next/link";
import Email from "../links/Email";
import Calendly from "../links/Calendly";
import LinkedIn from "../links/LinkedIn";
import GitHub from "../links/GitHub";
import Scholar from "../links/Scholar";
import Blog from "../links/Blog";
import Separator from "../common/Separator";

const Title = ({
  name,
  email,
  calendlyUrl,
  linkedinUrl,
  githubUrl,
  scholarUrl,
}) => {
  // sticky -> sticky top-0 z-10
  // border -> border-b border-neutral-200/70 dark:border-neutral-800/60
  return (
    <header
      className="mb-12 bg-[#f0f0f0] text-[#333333] 
      dark:bg-[#181818] dark:text-[#ececec]"
    >
      <div className="border-b border-neutral-200/70 dark:border-neutral-800/60 page-container flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 sm:gap-2 py-6 sm:py-8 min-h-[3.5rem]">
        {/* Left Side - Name aligned with section titles */}
        <h1 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100 leading-[1.8rem] sm:leading-[2rem] text-nowrap">
          <Link href="/">{name}</Link>
        </h1>

        {/* Right Side - Contact buttons, social buttons, separator, and theme toggle */}
        <div className="flex items-center gap-4 mt-0 sm:mt-[5px]">
          <Email email={email} />
          <Calendly calendlyUrl={calendlyUrl} />
          <LinkedIn linkedinUrl={linkedinUrl} />
          <GitHub githubUrl={githubUrl} />
          <Scholar scholarUrl={scholarUrl} />
          <Separator />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Title;
