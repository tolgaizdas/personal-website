import Image from "next/image";
import Separator from "../common/Separator";
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
      <div
        className="fade-in absolute top-4 right-4"
        style={{ "--enter-delay": "420ms" }}
      >
        <ThemeToggle />
      </div>
      <div className="mb-6 flex items-center justify-center">
        <div
          className="fade-in group relative p-[0.1rem]"
          style={{ "--enter-delay": "160ms" }}
        >
          <div className="absolute inset-0 scale-105 rounded-full border border-black/10 dark:border-white/10" />
          <div className="relative overflow-hidden rounded-full p-2 shadow-[0_16px_45px_rgba(15,23,42,0.1)] dark:bg-white/[0.03]">
            <Image
              src="/images/profile.jpg"
              alt={`${information.name} portrait`}
              width={320}
              height={320}
              className="w-48 h-48 rounded-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] motion-reduce:transition-none"
              priority
            />
          </div>
        </div>
      </div>

      <div className="w-full max-w-3xl text-center">
        <h1
          className="fade-in-up whitespace-nowrap text-5xl font-black uppercase tracking-[0.02em] text-neutral-800 dark:text-neutral-300"
          style={{ "--enter-delay": "240ms" }}
        >
          <span>{firstName}</span>{" "}
          {lastName && (
            <span className="text-neutral-400 dark:text-neutral-500">
              {lastName}
            </span>
          )}
        </h1>

        <div
          className="fade-in-up mt-6 flex flex-wrap items-center justify-center gap-4"
          style={{ "--enter-delay": "320ms" }}
        >
          <Email email={information.email} />
          <LinkedIn linkedinUrl={information.linkedinUrl} />
          <GitHub githubUrl={information.githubUrl} />
          <Scholar scholarUrl={information.scholarUrl} />
        </div>

        <div
          className="fade-in-up mt-6 flex items-center justify-center gap-3 text-sm"
          style={{ "--enter-delay": "400ms" }}
        >
          <a
            className="group inline-flex px-1 py-1 text-neutral-600 dark:text-neutral-400"
            href={information.calendlyUrl}
            target="_blank"
            rel="noreferrer"
          >
            <span className="transition-[transform] duration-200 ease-out group-hover:-translate-y-0.5 group-hover:text-neutral-800 dark:group-hover:text-neutral-200 motion-reduce:transition-none">
              Book a 1:1 meeting
            </span>
          </a>
          <Separator className="h-4 min-h-4 bg-neutral-300/80 dark:bg-neutral-700/80" />
          <Blog blogUrl="/blog" />
        </div>
      </div>
    </div>
  );
};

export default Introduction;
