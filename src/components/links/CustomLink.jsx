import Link from "next/link";

const CustomLink = ({ IconComponent, href, label }) => {
  const size = label === "Calendly" ? "w-6 h-6" : "w-5 h-5";
  const marginLeft = label === "Calendly" ? "ml-[0.1rem]" : "ml-1";

  return (
    <Link
      href={href}
      className="p-1 text-neutral-600 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-200 flex items-center"
      aria-label={label}
    >
      {label == "My Blog" ? (
        <span className="font-semibold">Blog</span>
      ) : (
        <IconComponent className={size} />
      )}
      <span className={`text-sm ${marginLeft} hidden text-nowrap`}>
        {label}
      </span>
    </Link>
  );
};

export default CustomLink;
