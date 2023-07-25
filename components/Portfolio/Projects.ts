export interface Project {
  title: string;
  description: { heading: string; bullets: string[] };
  technologies: string[];
  thumbnail: string;
  project_url: string;
  duration: string;
  company_name: string;
}
const projects: Project[] = [
  {
    title: "Portal Oi Nova Fibra",
    description: {
      heading:
        "I was the main responsible for developing and maintaing the new sales channel of Oi's main product, this website had to showcase all the details and information necessary to convince any customer to purchase the product.",
      bullets: [
        "The selected frontend technologies were TypeScript, React, NextJS, SASS and ContextAPI, in order to maximize page load performance.",
        "Lead a team of 5 front-end developers delegating tasks, helping through difficulties and reviewing their output in order to achieve the best outcome.",
        "A strong communication with the Product Owner was vital in order to extract the maximum amount of information in favor of delivering the expected result.",
        "We achieved a website that is 4x faster to load than the previous legacy one using less resources on their cloud containers.",
      ],
    },
    technologies: ["React", "TypeScript", "Next.js", "SASS", "SEO", "HTML"],
    thumbnail: "/images/portaloinovafibra.png",
    project_url: "https://www.oi.com.br/internet",
    duration: "April 2021 - August 2022",
    company_name: "Elumini Outdoing IT",
  },
  {
    title: "Certificate Generator",
    description: {
      heading:
        "As the name implies, it's an application that generates and validates certificates of the many courses and events that TeachLearn offers.",
      bullets: [
        "As different organizations and tutors would use this app, a multi-tenant architecture was necessary in order to improve API response times.",
        "Fully functional role system, users and admins have different permissions.",
        "The backend generated and stored the certificates as PDF files.",
        "JWT tokens were used to ensure a safe authentication method.",
      ],
    },
    technologies: [
      "React",
      "TypeScript",
      "PostgreSQL",
      "Node.js",
      "JavaScript",
    ],
    thumbnail: "/images/certificationgenerator.png",
    project_url: "https://certificados.teachlearn.com.br/",
    duration: "April 2021 - May 2021",
    company_name: "TeachLearn",
  },
  {
    title: "Bistrô Menu",
    description: {
      heading:
        "Bistrô Menu is a digital menu, it replaces the traditional printed menu reducing long-term costs. I was responsible for developing the application’s frontend making sure it was responsible and could show and update its food items when requested.",
      bullets: [
        "It makes API requests on the restaurants Firebase database. This project was developed using React Native and JavaScript focusing on android tablets, it also features a lock task mode which requires Java modules to work.",
        "Studied the behavior of several users to further improve the experience and usability of the interface.",
        "Released a fully functional Android App that is able to send orders to another API, reducing the restaurant cost on waiters.",
      ],
    },
    technologies: [
      "JavaScript",
      "React Native",
      "React",
      "Firebase",
      "Java",
      "Android",
    ],
    thumbnail: "/images/bistromenu.png",
    project_url:
      "https://play.google.com/store/apps/details?id=br.com.softwarebistro.menu",
    duration: "June 2020 - Present",
    company_name: "Software Bistrô",
  },
  {
    title: "Bistrô Admin",
    description: {
      heading:
        "Bistrô Admin is a management dashboard that allows restaurants to register dishes, handle delivery areas, manage other apps of the Bistrô ecosystem, receive orders from other apps like Bistrô Menu and Bistrô Delivery App and many other features.",
      bullets: [
        "This application was developed using React, TypeScript and Material UI.",
        "I was responsible for evolving and maintaing this application in order to deliver new features that appeared as new clients needed them.",
        "Kept a close contact with most clients in order to understand what could be improved on the application to increase the software usability.",
        "Did minor NodeJS API development in order to speed software development of the squad.",
      ],
    },
    technologies: [
      "TypeScript",
      "MaterialUI",
      "React",
      "SPA",
      "Node.js",
      "Firebase",
    ],
    thumbnail: "/images/bistroadmin.png",
    project_url: "https://admin.softwarebistro.com.br/",
    duration: "June 2020 - March 2021",
    company_name: "Software Bistrô",
  },
  {
    title: "Bistrô Delivery App",
    description: {
      heading:
        "Bistrô Delivery App is an android and iOS app that orders food from a single restaurant. I was responsible for developing the application’s frontend making sure it was responsible and could render its food items, create and account, save favorites, addresses etc.",
      bullets: [
        "It makes API requests on the restaurants Firebase database and the company’s own API in order to make user authentication and food orders. This project was developed using React-Native, Expo and JavaScript.",
        "The ﬁnal product was responsible for reducing the amount of fees a restaurant would pay to other marketplace applications, increasing the fidelity of their customers though the app usage.",
      ],
    },
    technologies: [
      "JavaScript",
      "React Native",
      "React",
      "Firebase",
      "Expo",
      "TypeScript",
    ],
    thumbnail: "/images/bistrodeliveryapp.png",
    project_url: "http://softwarebistro.com.br/",
    duration: "June 2020 - March 2021",
    company_name: "Software Bistrô",
  },
];

export default projects;
