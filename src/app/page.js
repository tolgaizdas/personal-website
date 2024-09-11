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
          "<strong>Relevant Coursework:</strong> Big Data Processing and Analytics, Artificial Intelligence, Image Processing"
        ],
      },
    ],
  };

  const professionalExperience = {
    header: "Professional Experience",
    subsections: [
      {
        header: "Software Engineer Intern",
        date: "Jul - Sep 2024",
        company: "<a href='https://www.turktelekom.com.tr/en' class='underline'>Türk Telekom</a>",
        location: "İzmir, Türkiye",
        description: [
          "Designed a database for the company inventory from scratch using SQLite.",
          "Implemented an interface and database operations, including authorization and data integrity measures, using the Django framework.",
          "Improved the data retrieval and processing speeds, contributing to more efficient inventory management.",
       ],
      },
      {
        header: "Software Engineer Intern",
        date: "Jul - Aug 2023",
        company: "<a href='https://www.sestek.com/' class='underline'>SESTEK</a>",
        location: "İstanbul, Türkiye",
        description: [
          "Developed a product that summarizes provided voice input using JavaScript and API.",
          "Added a module to an existing product that allows the user to read sent HTTP data in a web interface, facilitating real-time data analysis and visualization.",
          "Gained valuable information regarding agile software development practices by actively participating in both daily and weekly meetings."
        ],
      },
    ],
  };

  const researchExperience = {
    header: "Research Experience",
    subsections: [
      {
        header: "Research Scholar",
        date: "Jul 2024 - Present",
        company: "<a href='https://cosmos.yildiz.edu.tr/' class='underline'>COSMOS AI Research Group</a>",
        location: "İstanbul, Türkiye",
        description: [
          "Conducting benchmarks on large language models (LLMs) using few-shot learning, contributing to the advancement of model evaluation techniques.",
          "Creating and curating datasets for evaluating text generation models, ensuring high-quality data for accurate model performance assessments.",
          "Writing and maintaining scripts for automated model evaluation and result analysis, leading to improved evaluation efficiency.",
        ],
      },
    ],
  };
    
  const projects = {
    header: "Projects",
    subsections: [
      {
        header: "Undergraduate Project: Occupation Prediction from Twitter Data",
        date: "Jun 2024",
        company: "<a href='https://www.yildiz.edu.tr/en' class='underline'>Yıldız Technical University</a>",
        location: "İstanbul, Türkiye",
        description: [
          "Developed a project to predict occupations from Turkish tweets under the supervision of Prof. Banu Diri.",
          "Applied machine learning, deep learning, and natural language processing techniques to analyze and classify Twitter data.",
          "The project has been submitted for publication and is under review.",
        ],
      },
    ],
  };

  const awardsAndHonors = {
    header: "Awards & Honors",
    subsections: [
      {
        header: "STAR Intern Researcher Scholarship",
        date: "Jul 2024",
        company: "<a href='https://tubitak.gov.tr/en' class='underline'>TÜBİTAK</a> (Scientific and Technological Research Council of Türkiye)",
        location: "",
        description: ["Awarded a scholarship as a research intern in the project titled “New Approaches for Text Representation and Text Generation with Neural Language Models” conducted by <a href='https://scholar.google.com.tr/citations?user=qTUSAy0AAAAJ&hl=en' class='underline'>Prof. Mehmet Fatih Amasyalı</a> at <a href='https://www.yildiz.edu.tr/en' class='underline'>Yıldız Technical University</a> Computer Engineering Department."],
      },
    ],
  };

  const accomplishments = {
    header: "Accomplishments",
    subsections: [
      {
        header: "National Science Olympiads in Computer Science",
        date: "May 2019",
        company: "<a href='https://tubitak.gov.tr/en' class='underline'>TÜBİTAK</a> (Scientific and Technological Research Council of Türkiye)",
        location: "",
        description: [
          "Ranked 55th among 600 students in the National Science Olympiads in Computer Science.",
        ],
      },
    ],
  };

  const coursework = {
    header: "Coursework",
    subsections: [
      {
        header: "Big Data Processing and Analytics",
        date: "",
        company: "",
        location: "",
        description: [
          "Gained hands-on experience with distributed systems, large-scale data processing, and recommender systems.",
          "Completed a project that evaluated the performance of Apache Hadoop in processing large datasets by applying various statistical functions."
        ],
      },
      {
        header: "Artificial Intelligence",
        date: "",
        company: "",
        location: "",
        description: [
          "Studied fundamental AI concepts, including search algorithms, optimization methods, gradient descent, and stochastic processes.",
          "Implemented various projects using Genetic Algorithms and Q-Learning techniques to solve complex problems and enhance decision-making in AI systems."
        ],
      },
      {
        header: "Image Processing",
        date: "",
        company: "",
        location: "",
        description: [
          "Explored core image processing techniques such as filtering, segmentation, and edge detection.",
          "Implemented algorithms for image recognition, classification, and enhancement, and engaged in various related projects."
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
      <Section {...professionalExperience} />
      <Section {...researchExperience} />
      <Section {...projects} />
      <Section {...awardsAndHonors} />
      <Section {...accomplishments} />
      <Section {...coursework} />
      <Section {...skills} />
      <Section {...languages} />
    </div>
  );
}
