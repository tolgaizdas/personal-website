const Introduction = ({ information }) => {
  return (
    <section className="home-intro" aria-labelledby="intro-title">
      <div className="home-intro-content">
        <h1 id="intro-title">Hi, I&apos;m <em>Tolga</em>!</h1>
        <p className="home-deck">
          I&apos;m a computer science master&apos;s student at the University of
          Southern California.
        </p>

        <div className="home-actions" aria-label="Connect">
          <a href={`mailto:${information.email}`}>Email me</a>
        </div>

        <div className="home-social" aria-label="Social links">
          <a href={information.githubUrl} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={information.linkedinUrl} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={information.scholarUrl} target="_blank" rel="noreferrer">
            Google Scholar
          </a>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
