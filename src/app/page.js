import Title from '../components/title';
import Section from '../components/section';
import ThemeToggle from '../components/theme-toggle';

export default function Home() {
  const title = {
    name: "Tolga İzdaş",
    location: "İstanbul, Türkiye",
    email: "tolgaizdas@gmail.com",
    githubUrl: "https://github.com/tolgaizdas",
    linkedinUrl: "https://linkedin.com/in/tolgaizdas",
  };

  const education = {
    header: "Education",
    subsections: [
      {
        header: "Bachelor of Science in Computer Engineering",
        date: "Expected Jun 2025",
        company: "Yıldız Technical University",
        location: "İstanbul, Türkiye",
        description: [
          "<strong>GPA:</strong> 3.59/4",
        ],
      },
    ],
  };

  const experience = {
    header: "Experience",
    subsections: [
      {
        header: "Software Engineer Intern",
        date: "Jul - Sep 2024",
        company: "Türk Telekom",
        location: "İzmir, Türkiye",
        description: [],
      },
      {
        header: "Software Engineer Intern",
        date: "Jul - Aug 2023",
        company: "SESTEK",
        location: "İstanbul, Türkiye",
        description: [
          "Developed a product that summarizes provided voice input using JavaScript and API.",
          "Added a module to an existing product that allows the user to read sent HTTP data in a web interface.",
          "Gained valuable information regarding agile software development practices by actively participating in both daily and weekly meetings."
        ],
      },
    ],
  };

  const accomplishments = {
    header: "Accomplishments",
    subsections: [
      {
        header: "STAR Intern Researcher Scholarship",
        date: "Jul 2024",
        company: "TÜBİTAK (Scientific and Technological Research Council of Türkiye)",
        location: "",
        description: ["Awarded a scholarship as a research intern in the project titled “New Approaches for Text Representation and Text Generation with Neural Language Models” conducted by Prof. Mehmet Fatih Amasyalı at Yıldız Technical University Computer Engineering Department."],
      },
      {
        header: "National Science Olympiads in Computer Science",
        date: "May 2019",
        company: "TÜBİTAK (Scientific and Technological Research Council of Türkiye)",
        location: "",
        description: [
          "Ranked 55/600th in the National Science Olympiad in the category of Computer Science.",
        ],
      },
    ],
  };

  const skills = {
    header: "Skills",
    subsections: [
      {
        header: "",
        date: "",
        company: "",
        location: "",
        description: [
          "<strong>Technologies:</strong> Python, Java, C, SQL, JavaScript, Jupyter Notebook, MATLAB",
          "<strong>Libraries:</strong> TensorFlow, PyTorch, NumPy, Pandas, Keras, scikit-learn, Java Swing, Matplotlib",
          "<strong>Tools:</strong> Git, Google Colab, Kaggle, PyCharm",
        ],
      },
    ],
  };

  const languages = {
    header: "Languages",
    subsections: [
      {
        header: "",
        date: "",
        company: "",
        location: "",
        description: [
          "<strong>Turkish:</strong> Native",
          "<strong>English:</strong> Advanced (TOEFL iBT: 98/120)",
        ],
      },
    ],
  };

  return (
    <div className="p-10">
      <ThemeToggle />
      <Title {...title} />
      <Section {...education} />
      <Section {...experience} />
      <Section {...accomplishments} />
      <Section {...skills} />
      <Section {...languages} />
    </div>
  );
}
