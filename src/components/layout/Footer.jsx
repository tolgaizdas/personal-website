const Footer = ({ enterDelay }) => {
  const currentYear = new Date().getFullYear();
  const fontSize = "0.75rem";
  const className = [
    "text-center text-gray-900 dark:text-gray-100 flex-wrap p-2",
    enterDelay ? "fade-in" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <footer
      className={className}
      style={{
        fontSize,
        ...(enterDelay ? { "--enter-delay": enterDelay } : {}),
      }}
    >
      &copy; {currentYear} Tolga Izdas. All Rights Reserved.
    </footer>
  );
};

export default Footer;
