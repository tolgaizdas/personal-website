import Link from "next/link";

const CustomLink = ({ IconComponent, href, label }) => {
  return (
    <Link
      href={href}
      className="p-1 text-neutral-600 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-200 transition-colors flex items-center"
      aria-label={label}
    >
      <IconComponent className="w-5 h-5" />
      <span className="text-sm ml-1 hidden sm:inline text-nowrap">{label}</span>
    </Link>
  );
};

export default CustomLink;
