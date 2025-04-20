import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const fontSize = "0.75rem";
  return (
    <footer
      className="text-center text-gray-900 dark:text-gray-100 flex-wrap p-2"
      style={{ fontSize }}
    >
      &copy; {currentYear} Tolga İzdaş. All Rights Reserved.
    </footer>
  );
};

export default Footer;
