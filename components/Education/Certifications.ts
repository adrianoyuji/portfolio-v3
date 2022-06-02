export interface Certificate {
  title: string;
  period: string;
  institution_name: string;
  institution_url: string;
  certificate_link?: string;
}
const certifications: Certificate[] = [
  {
    title: "Bachelor's Degree in Computer Engineering",
    period: "January 2015 - June 2021",
    institution_name: "Federal University of Grande Dourados",
    institution_url: "https://portal.ufgd.edu.br/",
  },
  {
    title: "Web Programming with Python and JavaScript",
    period: "October 2021 - December 2021",
    institution_name: "Harvard's CS50w",
    institution_url: "https://cs50.harvard.edu/web/2020/",
    certificate_link:
      "https://certificates.cs50.io/f822bb8a-c0f8-41e2-a4cc-8a68ed01592e.pdf?size=letter",
  },
  {
    title: "React + Redux Course: Fundamentals from the Absolute Zero",
    period: "July 2020 - September 2020",
    institution_name: "Udemy by Cod3r",
    institution_url: "https://www.udemy.com/course/react-redux-pt/",
    certificate_link:
      "https://www.udemy.com/certificate/UC-28a199be-538b-4b3b-94cc-1da3c7ca27c3/",
  },
  {
    title: "Advanced English Course",
    period: "January 2014 - January 2018",
    institution_name: "Wizard by Pearson",
    institution_url: "https://www.wizard.com.br/",
  },
];

export default certifications;
