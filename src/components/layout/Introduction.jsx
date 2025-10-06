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
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start gap-10 lg:gap-16">
      <div className="self-center">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">
          <div className="flex-1 w-full">
            <h1 className="text-3xl font-semibold text-neutral-900 dark:text-neutral-100">
              Hi, I'm {information.name.split(" ")[0]}!
            </h1>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <Email email={information.email} />
              <Calendly calendlyUrl={information.calendlyUrl} />
              <LinkedIn linkedinUrl={information.linkedinUrl} />
              <GitHub githubUrl={information.githubUrl} />
              <Scholar scholarUrl={information.scholarUrl} />
              <Blog blogUrl={information.blogUrl} />
              <Separator />
              <ThemeToggle />
            </div>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-neutral-700 dark:text-neutral-200">
              {introduction.description.map((item, index) => (
                <p
                  key={index}
                  dangerouslySetInnerHTML={{
                    __html: sanitizeHtml(item),
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="relative flex-shrink-0">
        <div className="absolute inset-0 translate-x-6 translate-y-6 rounded-[2rem] bg-gradient-to-br from-blue-400/50 via-purple-400/40 to-emerald-400/40 blur-2xl dark:from-blue-500/30 dark:via-purple-500/30 dark:to-emerald-500/30"></div>
        <div className="relative overflow-hidden rounded-[2rem] bg-white shadow-xl dark:bg-neutral-900">
          <Image
            src="/images/profile.jpeg"
            alt={`${information.name} portrait`}
            width={400}
            height={400}
            className="w-[16rem] h-auto object-cover"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Introduction;
