import pro1 from "../assets/projects/pro1.webp";
import pro2 from "../assets/projects/pro2.webp";
import pro3 from "../assets/projects/pro3.webp";
import pro4 from "../assets/projects/pro4.webp";

export const HERO_CONTENT = `I'm a passionate software engineer with a strong focus on developing innovative, user-friendly solutions that address real-world challenges. With experience in both web and app development, I specialize in frontend and backend technologies, utilizing languages like Python and Java.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2024 Feb - Present",
    role: "Junior Web Designer",
    company: "Codetrics",
    description: `Collaborating with the team to design and maintain user-friendly web interfaces. Assisting in the development of website layouts using HTML, CSS, and JavaScript. Supporting the creation of responsive designs that work across various devices.`,
    technologies: ["HTML", "CSS", "JavaScript", "Figma", "Adobe illustator","Wordpress"],
  },
  {
    year: "2024 Sept - Present",
    role: "Technical Mentor",
    company: "WeThinkCode_",
    description: `Mentoring  the 2024 cohort's first-year students at WeThinkCode through their tech education journey.
     I simplify complex concepts like Python, Git, Bash, Linux, TDD
     , and SDLC through interactive sessions, ensuring practical understanding and application, and equipping students with vital skills for the dynamic tech landscape. I also collaborate closely with peers, 
     sharing insights from my second-year experience and fostering an inclusive environment where every voice is valued. My mentorship cultivates critical thinking and problem-solving, empowering students to
      excel both academically and professionally.`,
    technologies: ["Python", "Git", "Linux","Bash"],
  },
];


export const PROJECTS = [
  {
    title: "User Management System",
    image: pro1,
    description:
      "Full stack CRUD (Create, Read, Update, Delete) application using Java Spring Boot and React Hooks with functional components. It includes building REST API using Spring and MySQL on the backend, testing with PostMan, and handling REST API in React using Axios.",
    technologies: ["Java", "Spring Boot", "MySQL", "React", "Axios"],
  },
  {
    title: "E-Commerce Platform",
    image: pro2,
    description:
      "A fully functional e-commerce platform developed with Django for the backend and Flutter for the mobile frontend.",
    technologies: ["Django", "Flutter", "PostgreSQL", "REST API"],
  },
  {
    title: "Onika - Personal Assistant",
    image: pro3,
    description:
      "A personalized desktop assistant built using Python and JavaScript. It features memory and voice command functionalities, floating widget integration, and file access through system tray interaction.",
    technologies: ["Python", "JavaScript", "OpenAI API", "Electron"],
  },
  {
    title: "Portfolio Website",
    image: pro4,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information using React and Tailwind CSS for design and responsiveness.",
    technologies: ["React", "Tailwind CSS", "JavaScript"],
  },
];

export const education = {
  institution: "WeThinkCode_",
  degree: "Software Engineering NQF5",
  period: "2023-present"
};

export const certifications = [
  {
    institution: "Udemy",
    certification: "Java Masterclass",
    issued: "July 2024"
  },
  {
    institution: "IBM",
    certification: "SQL",
    issued: "October 2024"
  },
  {
    institution: "AWS",
    certification: "Cloud Practitioner",
    issued: "Expected November 2024"
  }
];


export const CONTACT = {
  phoneNo: "+27 61 628 6954  ",
  email: "mphuthigift764@gmail.com",
};
