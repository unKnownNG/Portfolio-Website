import { FaYoutube, FaFacebook } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

export const SKILL_DATA = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
] as const;

export const SOCIALS = [
  {
    name: "Instagram",
    icon: RxInstagramLogo,
    link: "https://instagram.com",
  },
  {
    name: "Facebook",
    icon: FaFacebook,
    link: "https://facebook.com",
  },
  {
    name: "Twitter",
    icon: RxTwitterLogo,
    link: "https://twitter.com",
  },
] as const;

export const FRONTEND_SKILL = [
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Pyhton",
    image: "python-5.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Solidity",
    image: "solidity.svg",
    width: 60,
    height: 60,
  },
  {
    skill_name: "Rust",
    image: "rust.svg",
    width: 80,
    height: 80,
  },
] as const;

export const BACKEND_SKILL = [
  {
    skill_name: "C",
    image: "c.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "C++",
    image: "cpp.svg",
    width: 55,
    height: 55,
  },
  {
    skill_name: "PostgreSQL",
    image: "postgresql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "MySQL",
    image: "mysql.png",
    width: 70,
    height: 70,
  },
] as const;

export const FULLSTACK_SKILL = [
  
  {
    skill_name: "Docker",
    image: "docker.png",
    width: 70,
    height: 70,
  },

  {
    skill_name: "Figma",
    image: "figma.png",
    width: 50,
    height: 50,
  },
] as const;

export const OTHER_SKILL = [
  {
    skill_name: "Git",
    image: "git.svg",
    width: 50,
    height: 50,
  },
  
] as const;

export const PROJECTS = [
  {
    title: "MySQL Database Manager App",
    description:
      'The MySQL Database Manager App is a lightweight database administration tool developed to simplify interaction with MySQL databases. It provides a user-friendly interface for performing core database operations such as creating databases and tables, inserting, updating, deleting records, and executing SQL queries. The application abstracts repetitive SQL tasks while still allowing direct query execution, making it suitable for learning, rapid testing, and basic database management without relying on heavy third-party tools.',
    image: "/projects/db_manager.jpg",
    link: "https://github.com/unKnownNG/MySQL-Database-Manager",
  },
  {
    title: "ClusterX",
    description:
      'The Cluster App is a Python-based desktop dashboard built using CustomTkinter to centrally monitor and manage data from multiple Arduino and ESP-based boards. It aggregates real-time sensor and status data from several microcontrollers into a single, structured interface, enabling simultaneous visualization and comparison across devices. The application simplifies multi-board debugging, monitoring, and system-level analysis by providing a unified view of distributed hardware nodes.',
    image: "/projects/cluster.jpeg",
    link: "https://github.com/unKnownNG/Cluster-X",
  },
  {
    title: "PGPA Website",
    description:
      'The PGPA App is an academic performance management application designed to calculate and track a student’s Program Grade Point Average (PGPA) efficiently. The app allows users to input subject-wise grades and credit values, automatically computes weighted averages, and presents the final PGPA in a clear and structured format. It focuses on accuracy, ease of use, and eliminating manual calculation errors, making it useful for students to monitor academic progress over multiple semesters.',
    image: "/projects/pgpa.jpeg",
    link: "https://github.com/unKnownNG/PGPA#",
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Community",
    data: [
      {
        name: "YouTube",
        icon: FaYoutube,
        link: "https://youtube.com",
      },
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com",
      },
      {
        name: "Discord",
        icon: RxDiscordLogo,
        link: "https://discord.com",
      },
    ],
  },
  {
    title: "Social Media",
    data: [
      {
        name: "Instagram",
        icon: RxInstagramLogo,
        link: "https://instagram.com",
      },
      {
        name: "Twitter",
        icon: RxTwitterLogo,
        link: "https://twitter.com",
      },
      {
        name: "Linkedin",
        icon: RxLinkedinLogo,
        link: "https://linkedin.com",
      },
    ],
  },
  {
    title: "About",
    data: [
      {
        name: "Become Sponsor",
        icon: null,
        link: "https://youtube.com",
      },
      {
        name: "Learning about me",
        icon: null,
        link: "https://example.com",
      },
      {
        name: "Contact Me",
        icon: null,
        link: "mailto:contact@example.com",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "About me",
    link: "#about-me",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Projects",
    link: "#projects",
  },
] as const;

export const LINKS = {
  sourceCode: "https://github.com/unknownng",
};
