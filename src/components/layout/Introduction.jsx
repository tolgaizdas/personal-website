import Image from "next/image";
import ThemeToggle from "../common/ThemeToggle";
import Email from "../links/Email";
import LinkedIn from "../links/LinkedIn";
import GitHub from "../links/GitHub";
import Scholar from "../links/Scholar";
import Blog from "../links/Blog";

const Introduction = ({ information, introduction }) => {
  const [firstName, ...rest] = information.name.split(" ");
  const lastName = rest.join(" ");

  return (
    <div className="relative flex flex-col w-full h-full items-center justify-center dark:bg-neutral-900 px-6 md:px-16 transform scale-120">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>
      <div className="mb-6 flex items-center justify-center">
        <div className="relative overflow-hidden rounded-full dark:bg-neutral-900 shadow-xl">
          <Image
            src="/images/profile.jpg"
            alt={`${information.name} portrait`}
            width={320}
            height={320}
            className="w-48 h-48 rounded-full object-cover border-2 border-neutral-800 dark:border-neutral-300"
            priority
          />
        </div>
      </div>

      <div className="w-full max-w-3xl text-center">
        <h1 className="text-5xl font-black uppercase tracking-[0.02em] text-neutral-800 dark:text-neutral-300">
          <span>{firstName}</span>{" "}
          {lastName && (
            <span className="block ml-3 sm:ml-0 sm:inline text-neutral-400 dark:text-neutral-500 mt-2 sm:mt-0">
              {lastName}
            </span>
          )}
        </h1>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
          <Email email={information.email} />
          <LinkedIn linkedinUrl={information.linkedinUrl} />
          <GitHub githubUrl={information.githubUrl} />
          <Scholar scholarUrl={information.scholarUrl} />
          <Blog blogUrl="/blog" />
        </div>

        <p className="mt-6 text-sm text-neutral-600 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-200">
          <a
            className="underline-offset-4"
            href={information.calendlyUrl}
            target="_blank"
            rel="noreferrer"
          >
            Book a 1:1 meeting
          </a>
        </p>
      </div>
    </div>
  );
};

export default Introduction;
