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
        header: "Research Scholar",
        date: "Jul 2024 - Present",
        company: "COSMOS AI Research Group",
        location: "İstanbul, Türkiye",
        description: [
          "Performing benchmarks on LLMs using few-shot learning.",
          "Creating datasets for evaluating text generation models.",
          "Writing scripts for automated model evaluation and result analysis.",
        ],
      },
      {
        header: "Software Engineer Intern",
        date: "Jul 2024 - Present",
        company: "Türk Telekom",
        location: "İzmir, Türkiye",
        description: [
          "Designed a database for the company inventory from scratch using SQLite.",
          "Implemented an interface and database operations, including authorization and data integrity measures, using the Django framework.",
       ],
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

  const projects = {
    header: "Projects",
    subsections: [
      {
        header: "Occupation Prediction from Twitter Data",
        date: "Jun 2024",
        company: "Yıldız Technical University",
        location: "",
        description: ["Under the supervision of Prof. Banu Diri, an undergraduate project, which is in the process of being published as an article, was developed to predict occupations on Turkish tweets using machine learning and deep learning methods along with natural language processing techniques."],
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
          "<strong>Libraries:</strong> TensorFlow, PyTorch, NumPy, Pandas, Keras, scikit-learn, Java Swing, Matplotlib, Apache Hadoop, Django",
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
      <Section {...projects} />
      <Section {...accomplishments} />
      <Section {...skills} />
      <Section {...languages} />
    </div>
  );
}
