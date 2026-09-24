import Image from "next/image";

const Introduction = ({ information }) => {
  const firstName = information.name.split(" ")[0];

  return (
    <section className="home-intro" aria-labelledby="intro-title">
      <div className="home-intro-content">
        <h1 id="intro-title">I am <em>{firstName}</em>.</h1>
        <p className="home-deck">
          A computer science master&apos;s student at the University of Southern
          California.
        </p>

        <div className="home-actions" aria-label="Get in touch">
          <a href={information.calendlyUrl} target="_blank" rel="noreferrer">
            Book a meeting
          </a>
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
      <Image
        className="home-photo"
        src="/images/profile.jpg"
        alt="Tolga Izdas in front of the Golden Gate Bridge"
        width={300}
        height={300}
        priority
      />
    </section>
  );
};

export default Introduction;
