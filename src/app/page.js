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
        company: "<a href='https://www.yildiz.edu.tr/en' class='underline'>Yıldız Technical University</a>",
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
        company: "<a href='https://cosmos.yildiz.edu.tr/' class='underline'>COSMOS AI Research Group</a>",
        location: "İstanbul, Türkiye",
        description: [
          "Performing benchmarks on LLMs using few-shot learning.",
          "Creating datasets for evaluating text generation models.",
          "Writing scripts for automated model evaluation and result analysis.",
        ],
      },
      {
        header: "Software Engineer Intern",
        date: "Jul - Sep 2024",
        company: "<a href='https://www.turktelekom.com.tr/en' class='underline'>Türk Telekom</a>",
        location: "İzmir, Türkiye",
        description: [
          "Designed a database for the company inventory from scratch using SQLite.",
          "Implemented an interface and database operations, including authorization and data integrity measures, using the Django framework.",
       ],
      },
      {
        header: "Software Engineer Intern",
        date: "Jul - Aug 2023",
        company: "<a href='https://www.sestek.com/' class='underline'>SESTEK</a>",
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
        company: "<a href='https://tubitak.gov.tr/en' class='underline'>TÜBİTAK</a> (Scientific and Technological Research Council of Türkiye)",
        location: "",
        description: ["Awarded a scholarship as a research intern in the project titled “New Approaches for Text Representation and Text Generation with Neural Language Models” conducted by <a href='https://scholar.google.com.tr/citations?user=qTUSAy0AAAAJ&hl=en' class='underline'>Prof. Mehmet Fatih Amasyalı</a> at <a href='https://www.yildiz.edu.tr/en' class='underline'>Yıldız Technical University</a> Computer Engineering Department."],
      },
      {
        header: "National Science Olympiads in Computer Science",
        date: "May 2019",
        company: "<a href='https://tubitak.gov.tr/en' class='underline'>TÜBİTAK</a> (Scientific and Technological Research Council of Türkiye)",
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
        company: "<a href='https://www.yildiz.edu.tr/en' class='underline'>Yıldız Technical University</a>",
        location: "",
        description: ["Under the supervision of <a href='https://scholar.google.com.tr/citations?user=GUQMy2UAAAAJ&hl=en' class='underline'>Prof. Banu Diri</a>, an undergraduate project was developed to predict occupations on Turkish tweets using machine learning, deep learning, and natural language processing techniques, and has been submitted for publication."],
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
          "<strong>English:</strong> Advanced | TOEFL iBT: 98/120",
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
