import ThemeToggle from "../common/ThemeToggle";
import Link from "next/link";
import Email from "../links/Email";
import LinkedIn from "../links/LinkedIn";
import GitHub from "../links/GitHub";
import Scholar from "../links/Scholar";
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
      dark:bg-[#171717] dark:text-[#ececec]"
      style={{ "--enter-delay": "100ms" }}
    >
      <div className="border-b border-neutral-200/70 dark:border-neutral-800/60 page-container flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 sm:gap-2 py-6 sm:py-8 min-h-[3.5rem]">
        {/* Left Side - Name aligned with section titles */}
        <h1
          className="fade-in-up text-2xl font-semibold text-neutral-900 dark:text-neutral-100 leading-[1.8rem] sm:leading-[2rem] text-nowrap"
          style={{ "--enter-delay": "180ms" }}
        >
          <Link
            href="/"
            className="group inline-flex px-1 py-1 -mx-1 -my-1 text-neutral-900 dark:text-neutral-100"
          >
            <span className="transition-[transform] duration-200 ease-out group-hover:-translate-y-0.5 group-hover:text-neutral-800 dark:group-hover:text-neutral-200 motion-reduce:transition-none">
              {name}
            </span>
          </Link>
        </h1>

        {/* Right Side - Contact buttons, social buttons, separator, and theme toggle */}
        <div
          className="fade-in-up flex items-center gap-5 mt-0 sm:mt-[5px] ml-0 sm:ml-4"
          style={{ "--enter-delay": "240ms" }}
        >
          <div className="flex items-center gap-3">
            <div className="-ml-[0.66rem] sm:ml-0">
              <Email email={email} />
            </div>
            <LinkedIn linkedinUrl={linkedinUrl} />
            <GitHub githubUrl={githubUrl} />
            <Scholar scholarUrl={scholarUrl} />
          </div>
          <Separator />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Title;
