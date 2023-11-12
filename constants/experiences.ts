export const experiences = [
  {
    company: "Lyon",
    position: "Software Developer Intern",
    description:
      "In my previous role, I played a key role in resolving front-end issues by offering and implementing effective solutions. One noteworthy achievement involved the successful implementation of reusable toast components throughout the entire web application. This initiative streamlined the presentation of crucial information, contributing significantly to the overall consistency and efficiency of the user interface.",
  },
  {
    company: "Supafaya",
    position: "Software Engineer Intern",
    description:
      "During my tenure, I assumed a leadership role by guiding a team of student interns within the company. My responsibilities extended to implementing various UI enhancements in the web application, including a comprehensive rebranding of the landing page. This strategic overhaul notably resulted in a higher user retention percentage, reflecting the positive impact on the overall user experience. Additionally, I actively contributed to the identification and resolution of widespread issues, playing a key role in debugging and maintaining the integrity of the entire website.",
  },
  {
    company: "ARW",
    position: "Web Devlopment Team Head",
    description:
      "In a leadership capacity, I spearheaded the development of a website catering to the entire student body of DLSU. To ensure a robust infrastructure, I successfully established distinct development and production databases and servers. Additionally, I facilitated the seamless integration of the domain name with the production servers. The website operated efficiently, handling a substantial load of more than 30,000 unique page views with smooth performance, underscoring the success of the project.",
  },
];

export interface ExperienceType {
  company: string;
  position: string;
  description: string;
}
