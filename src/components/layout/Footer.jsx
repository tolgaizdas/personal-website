const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="wrap">
        <p>&copy; {currentYear} Tolga Izdas. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
