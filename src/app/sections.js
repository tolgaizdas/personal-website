function anchor(url, text) {
  return `<a target="_blank" href="${url}" class="text-blue-600 hover:text-blue-800 hover:dark:text-blue-300 dark:text-blue-400">${text}</a>`;
}

export const information = {
  name: "Tolga İzdaş",
  location: "İstanbul, Türkiye",
  email: "tolga@tolgaizdas.com",
  githubUrl: "https://github.com/tolgaizdas",
  linkedinUrl: "https://linkedin.com/in/tolgaizdas",
  scholarUrl: "https://scholar.google.com/citations?user=GXujHFgAAAAJ&hl=en",
  calendlyUrl: "https://calendly.com/tolgaizdas",
};

export const aboutMe = {
  header: "About Me",
  subsections: [
    {
      header: "",
      date: "",
      company: "",
      location: "",
      description: [
        `I am a senior Computer Engineering student at ${anchor(
          "https://www.yildiz.edu.tr/en",
          "Yıldız Technical University",
        )}.`,
        `Here is my ${anchor(
          "/tolgaizdas-cv.pdf",
          "resume",
        )} (Updated March 2025).`,
      ],
    },
  ],
};

export const education = {
  header: "Education",
  subsections: [
    {
      header: "Bachelor of Science in Computer Engineering",
      date: "Expected Jun 2025",
      company: anchor(
        "https://www.yildiz.edu.tr/en",
        "Yıldız Technical University",
      ),
      location: "İstanbul, Türkiye",
      description: [
        "<strong>GPA:</strong> 3.64/4",
        "<strong>Relevant Coursework:</strong> Big Data Processing and Analytics, Artificial Intelligence, Image Processing",
      ],
    },
  ],
};

export const professionalExperience = {
  header: "Professional Experience",
  subsections: [
    {
      header: "Software Engineer Intern",
      date: "Jul - Sep 2024",
      company: anchor("https://www.turktelekom.com.tr/en", "Türk Telekom"),
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
      company: anchor("https://www.sestek.com/", "SESTEK"),
      location: "İstanbul, Türkiye",
      description: [
        "Developed a product that summarizes provided voice input using JavaScript and API.",
        "Added a module to an existing product that allows the user to read sent HTTP data in a web interface, facilitating real-time data analysis and visualization.",
        "Gained valuable information regarding agile software development practices by actively participating in both daily and weekly meetings.",
      ],
    },
  ],
};

export const researchExperience = {
  header: "Research Experience",
  subsections: [
    {
      header: "Research Scholar",
      date: "Jul 2024 - Present",
      company: anchor(
        "https://cosmos.yildiz.edu.tr/",
        "COSMOS AI Research Group",
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

export const publications = {
  header: "Publications",
  subsections: [
    {
      header: "Refereed Journal Publications",
      date: "",
      company: "",
      location: "",
      description: [
        `<span class="font-medium">T. İzdaş</span>, H. İskifoğlu, and B. Diri, \“${anchor("https://dergipark.org.tr/en/download/article-file/4155848", "Occupation Prediction from Twitter Data")}\", <i>DEUFMD</i>, vol. 27, no. 80, pp. 267–271, 2025, doi: 10.21205/deufmd.2025278013.`,
      ],
    },
  ],
};

export const projects = {
  header: "Projects",
  subsections: [
    {
      header: "COSMOS LLM Evaluation Tool",
      date: "",
      company: "",
      location: "",
      description: [
        `Developed a ${anchor(
          "https://github.com/tolgaizdas/cosmos-eval",
          "tool",
        )} to evaluate LLMs such as GPT, BERT, LLaMA on various tasks with few-shot learning support.`,
        "Implemented custom evaluation metrics for accuracy and perplexity.",
      ],
    },
    {
      header: "Occupation Prediction from Twitter Data",
      date: "",
      company: "",
      location: "",
      description: [
        `Developed an NLP ${anchor(
          "https://github.com/tolgaizdas/Occupation-Prediction",
          "project",
        )} to analyze and classify social media data.`,
        "Used ML models such as Logistic Regression, SVM, Random Forest, CNN, and RNN to explore the impact of dataset size on model performance, achieving 89% accuracy in classification tasks.",
      ],
    },
  ],
};

export const awardsAndHonors = {
  header: "Awards & Honors",
  subsections: [
    {
      header: "STAR Intern Researcher Scholarship",
      date: "Jul 2024",
      company: `${anchor(
        "https://tubitak.gov.tr/en",
        "TÜBİTAK",
      )} (Scientific and Technological Research Council of Türkiye)`,
      location: "",
      description: [
        `Awarded a scholarship as a research intern in the project titled 
        'New Approaches for Text Representation and Text Generation with Neural Language Models' 
        conducted by ${anchor(
          "https://scholar.google.com.tr/citations?user=qTUSAy0AAAAJ&hl=en",
          "Prof. Mehmet Fatih Amasyalı",
        )} 
        at Yıldız Technical University Computer Engineering Department.`,
      ],
    },
  ],
};

export const accomplishments = {
  header: "Accomplishments",
  subsections: [
    {
      header: "National Science Olympiads in Computer Science",
      date: "May 2019",
      company: `${anchor(
        "https://tubitak.gov.tr/en",
        "TÜBİTAK",
      )} (Scientific and Technological Research Council of Türkiye)`,
      location: "",
      description: [
        "Ranked 55th out of 600 students in the National Science Olympiads in Computer Science.",
      ],
    },
  ],
};

export const coursework = {
  header: "Coursework",
  subsections: [
    {
      header: "Big Data Processing and Analytics",
      date: "",
      company: "",
      location: "",
      description: [
        "Gained hands-on experience with distributed systems, large-scale data processing, and recommender systems.",
        `Completed a ${anchor(
          "https://github.com/tolgaizdas/Big-Data-Processing",
          "project",
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
        `Implemented various projects using ${anchor(
          "https://github.com/tolgaizdas/Image-Generator",
          "Genetic Algorithms",
        )} and ${anchor(
          "https://github.com/tolgaizdas/AI-Flappy-Bird",
          "Q-Learning",
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
    {
      header: "Information Retrieval and Web Search Engines",
      date: "",
      company: "",
      location: "",
      description: [
        "Investigated web mining techniques to analyze and extract valuable insights from social media data.",
        "Implemented IR algorithms to effectively extract relevant information and enhance search functionalities.",
      ],
    },
  ],
};

export const skills = {
  header: "Skills",
  subsections: [
    {
      header: "",
      date: "",
      company: "",
      location: "",
      description: [
        "<span class='font-medium'>Technologies:</span> Python, Java, C, SQL, JavaScript,   MATLAB",
        "<span class='font-medium'>Libraries:</span> TensorFlow, PyTorch, Pandas, Keras, scikit-learn, Matplotlib, Apache Hadoop, Apache Spark, Django, FastAPI, Java Swing",
        "<span class='font-medium'>Tools:</span> Git",
      ],
    },
  ],
};

export const languages = {
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

export const certifications = {
  header: "Certifications",
  subsections: [
    {
      header: "",
      date: "",
      company: "",
      location: "",
      description: [
        `Red Hat System Administration I & II - 
      ${anchor(
        "https://www.redhat.com/en/services/training/rh124-red-hat-system-administration-i",
        "RH124",
      )} & 
      ${anchor(
        "https://www.redhat.com/en/services/training/rh134-red-hat-system-administration-ii",
        "RH134",
      )}`,
        `
      Red Hat OpenShift I: Containers & Kubernetes - 
      ${anchor(
        "https://www.redhat.com/en/services/training/red-hat-openshift-administration-i-operating-a-production-cluster",
        "DO180",
      )}
      `,
      ],
    },
  ],
};
