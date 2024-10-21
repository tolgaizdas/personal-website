import Title from "../components/title";
import Section from "../components/section";
import ThemeToggle from "../components/theme-toggle";

function generate_a_tag(url, text) {
  return `<a target="_blank" href="${url}" class="text-blue-500 hover:underline dark:text-blue-400">${text}</a>`;
}

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
        company: generate_a_tag(
          "https://www.yildiz.edu.tr/en",
          "Yıldız Technical University"
        ),
        location: "İstanbul, Türkiye",
        description: [
          "<strong>GPA:</strong> 3.59/4",
          "<strong>Relevant Coursework:</strong> Big Data Processing and Analytics, Artificial Intelligence, Image Processing",
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
        company: generate_a_tag(
          "https://www.turktelekom.com.tr/en",
          "Türk Telekom"
        ),
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
        company: generate_a_tag("https://www.sestek.com/", "SESTEK"),
        location: "İstanbul, Türkiye",
        description: [
          "Developed a product that summarizes provided voice input using JavaScript and API.",
          "Added a module to an existing product that allows the user to read sent HTTP data in a web interface, facilitating real-time data analysis and visualization.",
          "Gained valuable information regarding agile software development practices by actively participating in both daily and weekly meetings.",
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
        company: generate_a_tag(
          "https://cosmos.yildiz.edu.tr/",
          "COSMOS AI Research Group"
        ),
        location: "İstanbul, Türkiye",
        description: [
          "Conducting benchmarks on large language models (LLMs) using few-shot learning, contributing to the advancement of model evaluation techniques.",
          "Creating and curating datasets for evaluating text generation models, ensuring high-quality data for accurate model performance assessments.",
          "Fine-tuning LLMs for specific tasks, improving their performance in domain-specific applications.",
          "Writing and maintaining scripts for automated model evaluation and result analysis, leading to improved evaluation efficiency.",
        ],
      },
    ],
  };

  const publications = {
    header: "Publications",
    subsections: [
      {
        header:
          "Undergraduate Project: Occupation Prediction from Twitter Data",
        date: "Jun 2024",
        company: generate_a_tag(
          "https://www.yildiz.edu.tr/en",
          "Yıldız Technical University"
        ),
        location: "İstanbul, Türkiye",
        description: [
          `Developed a ${generate_a_tag(
            "https://github.com/tolgaizdas/Occupation-Prediction",
            "project"
          )} to predict occupations from Turkish tweets under the supervision of ${generate_a_tag(
            "https://scholar.google.com.tr/citations?hl=en&user=GUQMy2UAAAAJ&hl=en",
            "Prof. Banu Diri."
          )}`,
          "Applied machine learning, deep learning, and natural language processing techniques to analyze and classify Twitter data.",
          "The project has been accepted for publication in the Dokuz Eylul University Faculty of Engineering Journal of Science and Engineering (DEU FMD), co-authored by T. Izdas, H. Iskifoglu, and B. Diri.",
        ],
      },
    ],
  };

  const projects = {
    header: "Projects",
    subsections: [
      {
        header: "Emotion Classification with RNN",
        date: "Mar 2024",
        company: "",
        location: "",
        description: [
          `Developed a multi-label text classification ${generate_a_tag(
            "https://github.com/tolgaizdas/Emotion-Classification-with-RNN",
            "project"
          )}
            on a dataset with 6 labels using RNN and GloVe embeddings.`,
          "Implemented a 3-layer GRU model for the classification task.",
          "Achieved ~90% accuracy on 3-layer GRU model.",
        ],
      },
      {
        header: "K-Means Clustering",
        date: "Apr 2022",
        company: "",
        location: "",
        description: [
          `Developed a Java ${generate_a_tag(
            "https://github.com/tolgaizdas/K-Means-Clustering",
            "project"
          )} to implement the k-means clustering algorithm for analyzing and grouping coordinates from a CSV file.`,
          "Created an intuitive GUI that allows users to specify parameters such as the number of iterations and cluster centers for tailored clustering results.",
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

  const accomplishments = {
    header: "Accomplishments",
    subsections: [
      {
        header: "National Science Olympiads in Computer Science",
        date: "May 2019",
        company: `${generate_a_tag(
          "https://tubitak.gov.tr/en",
          "TÜBİTAK"
        )} (Scientific and Technological Research Council of Türkiye)`,
        location: "",
        description: [
          "Ranked 55th out of 600 students in the National Science Olympiads in Computer Science.",
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
          `Completed a ${generate_a_tag(
            "https://github.com/tolgaizdas/Big-Data-Processing",
            "project"
          )} that evaluated the performance of Apache Hadoop in processing large datasets by applying various statistical functions.`,
        ],
      },
      {
        header: "Artificial Intelligence",
        date: "",
        company: "",
        location: "",
        description: [
          "Studied fundamental AI concepts, including search algorithms, optimization methods, gradient descent, and stochastic processes.",
          `Implemented various projects using ${generate_a_tag(
            "https://github.com/tolgaizdas/Image-Generator",
            "Genetic Algorithms"
          )} and ${generate_a_tag(
            "https://github.com/tolgaizdas/AI-Flappy-Bird",
            "Q-Learning"
          )} techniques to solve complex problems and enhance decision-making in AI systems.`,
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
    <div className="pt-4 pb-4 pl-8 pr-8">
      <ThemeToggle />
      <Title {...title} />
      <Section {...education} />
      <Section {...professionalExperience} />
      <Section {...researchExperience} />
      <Section {...publications} />
      <Section {...projects} />
      <Section {...awardsAndHonors} />
      <Section {...accomplishments} />
      <Section {...coursework} />
      <Section {...skills} />
      <Section {...languages} />
    </div>
  );
}
