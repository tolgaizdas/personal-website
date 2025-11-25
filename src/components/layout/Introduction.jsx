import Image from "next/image";
import { sanitizeHtml } from "../../utils/sanitize";
import ThemeToggle from "../common/ThemeToggle";
import Email from "../links/Email";
import Calendly from "../links/Calendly";
import LinkedIn from "../links/LinkedIn";
import GitHub from "../links/GitHub";
import Scholar from "../links/Scholar";
import Blog from "../links/Blog";
import Separator from "../common/Separator";

const Introduction = ({ information, introduction }) => {
  const [firstName, ...rest] = information.name.split(" ");
  const lastName = rest.join(" ");

  return (
    <div className="flex flex-col md:flex-row w-full h-full justify-center">
      <div className="w-full md:w-[22%] flex items-center justify-center px-6 md:px-4">
        <div className="relative flex flex-col items-center md:items-end">
          <div className="relative overflow-hidden rounded-full bg-white dark:bg-neutral-900">
            <Image
              src="/images/profile.jpeg"
              alt={`${information.name} portrait`}
              width={320}
              height={320}
              className="w-[12rem] h-auto object-cover border-2 border-neutral-800 dark:border-neutral-200 rounded-full"
              priority
            />
          </div>
        </div>
      </div>

      <div className="flex px-8 md:px-4 py-4 text-left flex flex-col justify-center items-center md:items-start">
        <h1 className="mt-4 text-5xl font-black uppercase tracking-[0.1em] text-neutral-800 dark:text-neutral-200 pl-2 -indent-2 break-words text-center md:text-left">
          <span>{firstName}</span>{" "}
          <span className="text-neutral-400 dark:text-neutral-500 ml-[0.1rem]">
            {lastName}
          </span>
        </h1>

        <div className="mt-4 flex flex-wrap items-center gap-3 sm:gap-6 ml-[0.16rem]">
          <Email email={information.email} />
          <LinkedIn linkedinUrl={information.linkedinUrl} />
          <GitHub githubUrl={information.githubUrl} />
          <Scholar scholarUrl={information.scholarUrl} />
          <Blog blogUrl="/blog" />
          <Separator />
          <ThemeToggle />
        </div>

        <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-400 ml-[0.3rem]">
          <a
            className="underline underline-offset-4"
            href={information.calendlyUrl}
            target="_blank"
            rel="noreferrer"
          >
            Book a 1:1 via Calendly
          </a>
        </p>
      </div>
    </div>
  );
};

export default Introduction;
