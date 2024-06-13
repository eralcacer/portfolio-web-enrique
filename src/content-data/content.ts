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
        number: 20,
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
  FooterSection: {
    profileDescription:
      "Developing quality software with a focus on reusability and efficiency. Skilled in algorithms, data structures, and creating scalable solutions. Let’s build exceptional digital experiences together.",
  },
};
