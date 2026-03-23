import Link from "next/link";

const CustomLink = ({ IconComponent, href, label }) => {
  return (
    <Link
      href={href}
      className="inline-flex h-11 w-11 items-center justify-center text-neutral-600 transition-[transform] duration-200 ease-out hover:-translate-y-0.5 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-200 motion-reduce:transition-none"
      aria-label={label}
    >
      <IconComponent className="h-5 w-5" />
    </Link>
  );
};

export default CustomLink;
