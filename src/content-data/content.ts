import ResumePDF from "../assets/Enrique Alcacer Resume - Software General.pdf";
import CounterType from "../types/CounterType";
import TextInformationType from "../types/TextInformationType";

export const content = {
  AboutMeSection: {
    mainTitleTopWhite: "👋 Hey There,",
    mainTitleBottomWhite: "I am",
    mainTitleGradient: " Enrique Alcacer",
    descriptionText:
      "Welcome to my website! I am a Software Engineer with a Master's in Computer Science from California State University of Sacramento. Besides, I have a BS in Mathematics. If you don't catch me coding, you can find me playing tennis. I hope you enjoy my site as much as I enjoyed developing it.",
    primaryBtnGradientTxt: "Hire Me ➡",
    primaryBtnUrl: "mailto:enrique.alcacer@gmail.com",
    secondaryBtnBracketTxt: "My Portfolio",
    secondaryBtnUrl: "https://github.com/eralcacer",
  },
  MainInformation: {
    name: "Enrique Alcacer",
  },
  ExperienceInformation: {
    experienceTitle: "Enrique's Experience",
    experienceDescTxt:
      "MS in Computer Science with expertise in creating both static and dynamic web apps. Skilled in integrating content management systems for seamless user experiences. Built a scalable event sourcing distributed system using Ethereum's Sepolia Network.",
    downloadBtnTxt: "Enrique's Resume 📂",
    downloadLinkExperience: ResumePDF,
    counterComponet: [
      {
        number: 3,
        txt: "Years of Experience in Software Development.",
      },
      {
        number: 14,
        txt: "Successfully Projects Completed.",
      },
      {
        number: 100,
        txt: "LeetCode Problems Solved.",
      },
    ] as CounterType[],
  },
  EducationComp: {
    educationArr: [
      {
        headline: "California State University of Sacramento",
        txt: "M.S. Computer Science",
        dates: "Jan 2022 - May 2024",
      },
      {
        headline: "Emmanuel University",
        txt: "B.S. Mathematics, additional major in Business Administration with Information Systems Concentration",
        dates: "Aug 2015 - May 2020",
      },
    ] as TextInformationType[],
  },
  ExperienceComp: {
    workArr: [
      {
        headline: "University Enterprises, Inc., Sacramento, CA",
        txt: "Frontend Engineer",
        dates: "May 2022 - Present",
      },
      {
        headline: "Lanaccess, Barcelona, Spain",
        txt: "Mobile App Developer Intern",
        dates: "Jun 2023 - Aug 2023",
      },
    ] as TextInformationType[],
  },
  ProjectsComp: {
    projectsArr: [
      {
        projectName: "whereEV",
        techStack: [
          "JavaScript",
          "Node.js",
          "MongoDB",
          "React",
          "Express.js",
          "AWS",
          "Docker",
        ],
        liveUrl: "https://whereev.app",
        sourceCodeUrl: "",
      },
      {
        projectName: "Data Access Tracker",
        techStack: [
          "JavaScript",
          "Node.js",
          "Express.js",
          "MongoDB",
          "Microservices Architecture",
          "RESTful APIs",
          "Solidity",
          "Blockchain",
        ],
        liveUrl: "",
        sourceCodeUrl: "https://github.com/eralcacer/data-guardian",
      },
      {
        projectName: "Software Development Training",
        techStack: [
          "Java",
          "Spring Boot",
          "JUnit",
          "Mockito",
          "JSON",
          "RESTful API",
        ],
        liveUrl: "",
        sourceCodeUrl: "",
      },
      {
        projectName: "G-Code 3-D Printing Firmware Testing Engineering",
        techStack: [
          "Python",
          "Pytest",
          "Flask",
          "G-Code",
          "Regression Testion",
          "Unit Testing",
          "Coverage Testing",
          "V&V",
        ],
        liveUrl: "",
        sourceCodeUrl: "",
      },
      {
        projectName: "Portfolio Website Template",
        techStack: ["TypeScript", "React", "HTML", "CSS"],
        liveUrl: "https://enriquealcacer.com",
        sourceCodeUrl: "https://github.com/eralcacer/portfolio-web-enrique",
      },
      {
        projectName: "MEVN Chat App",
        techStack: ["Node.js", "MongoDB", "Vue", "Express.js", "Socket.io"],
        liveUrl: "",
        sourceCodeUrl: "",
      },
      {
        projectName: "NLP Chatbot Generative AI",
        techStack: ["Python", "LangChain", "Open AI API", "Google Drive API"],
        liveUrl: "",
        sourceCodeUrl: "",
      },
      {
        projectName: "Network Attacks Multi-Class Classification",
        techStack: [
          "Python",
          "TensorFlow",
          "Keras",
          "Pandas",
          "Numpy",
          "FCNN",
          "CNN",
          "Transformer",
        ],
        liveUrl:
          "https://docs.google.com/presentation/d/18p8OnOeasaBjYPqGCv5uZIcBqFl4CVlDzHzMNyYxeZM/edit?usp=sharing",
        sourceCodeUrl: "",
      },
      {
        projectName: "Multi-Modal Deep Learning for Fake News Detection",
        techStack: [
          "Python",
          "TensorFlow",
          "Keras",
          "Pandas",
          "Numpy",
          "GloVe",
          "Image-GloVe Model",
          "VGG16-GloVe",
        ],
        liveUrl:
          "https://docs.google.com/document/d/1K702SjG7sFJVPvlCZOqm5alc9qSjs100WoiKLVqyic8/edit?usp=sharing",
        sourceCodeUrl: "",
      },
      {
        projectName: "Multi-Modal Co-Attention for Fake News Detection",
        techStack: [
          "Python",
          "TensorFlow",
          "Keras",
          "Pandas",
          "Numpy",
          "Self-Attention",
          "Co-Attention",
          "Cross-Attention",
          "Image-GloVe",
          "MobileNetV2-GloVe",
        ],
        liveUrl:
          "https://docs.google.com/document/d/1IGsP8X-GEeLeHUVEML-9orJOUqKr-s8k9qghK3G0wZo/edit?usp=sharing",
        sourceCodeUrl: "",
      },
      {
        projectName: "Time Series Forcasting LSTM & CNN",
        techStack: [
          "Python",
          "TensorFlow",
          "Keras",
          "Pandas",
          "Numpy",
          "LSTM",
          "CNN",
        ],
        liveUrl:
          "https://docs.google.com/document/d/1FGp8kxk6-3QchJ9EiwAdcQaanOBOothUkB4huxEJJNw/edit?usp=sharing",
        sourceCodeUrl: "",
      },
      {
        projectName: "Heart Disease Dectection NN",
        techStack: [
          "Python",
          "TensorFlow",
          "Pandas",
          "Numpy",
          "FCNN",
          "KNN",
          "SVM",
        ],
        liveUrl:
          "https://docs.google.com/document/d/1faEhAu_QXxumDkauwsBf24SiRVIk5Pb88yQ6N0tmsVs/edit?usp=sharing",
        sourceCodeUrl: "",
      },
      {
        projectName: "Selenium App",
        techStack: ["Java", "Selenium"],
        liveUrl: "",
        sourceCodeUrl: "",
      },
      {
        projectName: "Triviacoin.me",
        techStack: [
          "JavaScript",
          "React",
          "Nginx",
          "Open Trivia API",
          "HTML",
          "CSS",
        ],
        liveUrl: "https://triviacoin.me/",
        sourceCodeUrl: "",
      },
      {
        projectName: "Manhattan Gold Coin",
        techStack: ["JavaScript", "React", "Nginx", "HTML", "CSS"],
        liveUrl: "https://www.manhattangoldcoin.com/",
        sourceCodeUrl: "",
      },
    ],
  },
  FooterSection: {
    profileDescription:
      "Developing quality software with a focus on reusability and efficiency. Skilled in algorithms, data structures, and creating scalable solutions. Let’s build exceptional digital experiences together.",
  },
};
