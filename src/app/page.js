import Title from "../components/title";
import Section from "../components/section";
import ThemeToggle from "../components/theme-toggle";
import Link from "next/link";

const linkClass = "text-blue-500 hover:underline dark:text-blue-400";
function generate_a_tag(url, text) {
  return `<a target="_blank" href="${url}" class="${linkClass}">${text}</a>`;
}

export default function Home() {
  const title = {
    name: "Tolga İzdaş",
    location: "İstanbul, Türkiye",
    email: "tolgaizdas@gmail.com",
    githubUrl: "https://github.com/tolgaizdas",
    linkedinUrl: "https://linkedin.com/in/tolgaizdas",
  };

  const aboutMe = {
    header: "About Me",
    subsections: [
      {
        header: "",
        date: "",
        company: "",
        location: "",
        description: [
          `I am a senior Computer Engineering student at ${generate_a_tag(
          "https://www.yildiz.edu.tr/en",
          "Yıldız Technical University"
        )}.`,
          `${generate_a_tag("/tolgaizdas-resume.pdf", "My Resume")}`,
        ],
      },
    ],
  };

  const projects = {
    header: "Projects",
    subsections: [
      {
        header: "COSMOS LLM Evaluation Tool",
        date: "",
        company: "",
        location: "",
        description: [
          "Developed a tool to evaluate large language models such as GPT, BERT, and LLAMA on a variety of tasks with support for few-shot learning.",
          "Implemented custom evaluation metrics for accuracy and perplexity, enhancing the tool's functionality and user experience.",
        ],
      },
      {
        header: "Big Data Processing",
        date: "",
        company: "",
        location: "",
        description: [
          `Completed a ${generate_a_tag(
            "https://github.com/tolgaizdas/Big-Data-Processing",
            "project"
          )} that evaluated the performance of Apache Hadoop in processing large datasets by applying various statistical functions.`,
          "Analyzed the impact of replication factor on the performance of Hadoop.",
        ],
      },
      {
        header: "Occupation Prediction",
        date: "",
        company: "",
        location: "",
        description: [
          `Developed a ${generate_a_tag(
            "https://github.com/tolgaizdas/Occupation-Prediction",
            "project"
          )} to predict occupations from Turkish tweets under the supervision of ${generate_a_tag(
            "https://scholar.google.com.tr/citations?hl=en&user=GUQMy2UAAAAJ&hl=en",
            "Prof. Banu Diri"
          )}.`,
          "Applied machine learning, deep learning, and natural language processing techniques to analyze and classify Twitter data.",
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
          "Implemented big data processing algorithms using Apache Hadoop.",
        ],
      },
      {
        header: "Artificial Intelligence",
        date: "",
        company: "",
        location: "",
        description: [
          "Studied fundamental AI concepts, including search algorithms, optimization methods, gradient descent, and stochastic processes.",
          "Worked on large language models such as GPT and BERT.",
        ],
      },
      {
        header: "Image Processing",
        date: "",
        company: "",
        location: "",
        description: [
          "Explored core image processing techniques such as filtering, segmentation, and edge detection.",
          "Implemented algorithms for image recognition, classification, and enhancement, and engaged in various related projects.",
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
        company: `${generate_a_tag(
          "https://tubitak.gov.tr/en",
          "TÜBİTAK"
        )} (Scientific and Technological Research Council of Türkiye)`,
        location: "",
        description: [
          `Awarded a scholarship as a research intern in the project titled 
          'New Approaches for Text Representation and Text Generation with Neural Language Models' 
          conducted by ${generate_a_tag(
            "https://scholar.google.com.tr/citations?user=qTUSAy0AAAAJ&hl=en",
            "Prof. Mehmet Fatih Amasyalı"
          )} 
          at Yıldız Technical University Computer Engineering Department.`,
        ],
      },
    ],
  };

  const publications = {
    header: "Publications",
    subsections: [
      {
        header: "",
        date: "",
        company: "",
        location: "",
        description: [
          `T. Izdas, H. Iskifoglu, and B. Diri (2024). 
          Occupation Prediction from Twitter Data. 
          Dokuz Eylul University Faculty of Engineering Journal of Science and Engineering (DEU FMD). 
          (Accepted, pending publication)`,
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

  return (
    <div className="pt-4 pb-4 pl-8 pr-8">
      <ThemeToggle />
      <Title {...title} />
      <Section {...aboutMe} />
      <Section {...projects} />
      <Section {...coursework} />
      <Section {...awardsAndHonors} />
      <Section {...publications} />
      <Section {...skills} />
    </div>
  );
}
