interface Company {
  name: string;
  href: string;
  logo: string;
}

interface Description {
  heading: string;
  bullets?: string[];
}

export interface Experience {
  company: Company;
  position: string;
  duration: string;
  description: Description;
  availability: "Full-time" | "Part-time" | "Freelance" | "Intern";
}

const experiences: Experience[] = [
  {
    company: {
      href: "https://www.elumini.com.br/en/",
      name: "Elumini Outdoing IT",
      logo: "/images/elumini.jpeg",
    },
    position: "Frontend Developer",
    duration: "April 2021 - Current",
    availability: "Full-time",
    description: {
      heading:
        "Allocated at Oi S.A., one of the largest companies focused in telecommunication services in Brazil.",
      bullets: [
        "Responsible for developing and evolving Oi Fibra's sales channel, which receives millions accesses daily",
        "Always concerned with developing a platform meeting the requirements of SEO, Information Security, Accessibility and Performance.",
        "Daily SCRUM meetings for task alignment and progression",
        "ReactJs, Next.js, SASS and TypeScript were the main technologies used.",
        "Responsible for mentoring and assisting other less experienced developers on the team.",
      ],
    },
  },
  {
    company: {
      href: "https://teachlearn.com.br/",
      name: "TeachLearn",
      logo: "/images/tech-learn.webp",
    },
    position: "FullStack Developer",
    duration: "April 2021 - May 2021",
    availability: "Freelance",
    description: {
      heading:
        "TeachLearn is an EdTech plaftorm focused on evolving both personal and professional lifes of their users through online courses/events.",
      bullets: [
        "I was responsible for developing a platform that allowed the school admins to register the attendees of said courses/events by uploading an Excel file so those attendees could generate and validate their certification.",
        "I developed the Backend in Node.js with Express.js and JavaScript utilizing a Multi Tenant Database architecture with PostgreSQL's schemas feature to allow maximum performance and maintability to the code base.",
        "Developed the Frontend in React, NextJs and Typescript with a very robust library called Material UI that speed up the development process by proving easy and usable components to the platform.",
      ],
    },
  },
  {
    company: {
      href: "http://softwarebistro.com.br/",
      name: "Software Bistrô",
      logo: "/images/softwarebistro.jpeg",
    },
    position: "Web Developer",
    duration: "June 2020 - March 2021",
    availability: "Full-time",
    description: {
      heading:
        "Developed responsive web and mobile applications using ReactJs and React-Native on a regular basis. Creating new API endpoints using NodeJs to communicate with front-end apps.",
      bullets: [
        "Worked with a small team of 3 developers and used SCRUM and Kanban as agile methodologies.",
        "Developed an Android and iOS food ordering app from scratch using JavaScript, React Native and Expo",
        "Developed a Web System to manage small companies and restaurants using Next.Js and TypeScript. Building APIs to store and send data to the user’s dish menu.",
      ],
    },
  },
  {
    company: {
      href: "http://softwarebistro.com.br/",
      name: "Software Bistrô",
      logo: "/images/softwarebistro.jpeg",
    },
    position: "Frontend Software Developer",
    duration: "Feb 2020 - June 2020",
    availability: "Intern",
    description: {
      heading:
        "Web and Mobile JavaScript frontend developer. Experience with ReactJS and React Native and GIT as version controller.",
      bullets: [
        "Worked with a small team of 3 developers and used SCRUM and Kanban as agile methodologies.",
        "Developed an Android Application from scratch using JavaScript and React Native, and some Java modules when needed.",
        "The final product was a Digital Menu for restaurants with UI and UX always in mind. Performance and scalability were our focus during development.",
      ],
    },
  },
];

export default experiences;
