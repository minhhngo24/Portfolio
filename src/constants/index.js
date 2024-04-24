import {
  mobile,
  backend,
  creator,
  web,
  aws,
  python,
  java,
  nextjs,
  terraform,
  kubernetes,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  l3,
  threejs,
  sd,
  trendify,
  pc
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  // {
  //   id: "contact",
  //   title: "Let's connect",
  // },

];export const connectLinks = [
  {
    id: "contact",
    title: "Let's connect",
  },
];

const services = [
  {
    title: "Software Engineer",
    icon: web,
  },
  {
    title: "Full Stack Developer",
    icon: mobile,
  },
  {
    title: "Data Analyst",
    icon: backend,
  },
];

const technologies = [
  {
    name: "python",
    icon: python,
  },
  {
    name: "java",
    icon: java,
  },
  {
    name: "HTML",
    icon: html,
  },
  {
    name: "CSS ",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  {
    name: "Three JS",
    icon: threejs,
  },
  // {
  //   name: "git",
  //   icon: git,
  // },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "docker",
    icon: docker,
  },
  // {
  //   name: "Terraform",
  //   icon: terraform,
  // },
  {
    name: "Kubernetes",
    icon: kubernetes,
  },
];

const experiences = [
  {
    title: "Software Engineer Intern",
    company_name: "L3Harris",
    icon: l3,
    iconBg: "#383E56",
    date: "May 2023 - August 2023",
    points: [
      "Collaboratively engaged in the design of an UI using JavaScript, React, Python and REST APIs to Improved data analysis and user interaction",
      "Implemented serverless architecture on AWS (Lambda, Elastic Container Service) using Docker and Terraform for resource deployment and management, enhancing scalability and minimizing infrastructure overhead.",
      "Developed a GUI testing tool to optimize software evaluation offering parallel execution and cross-platform testing.",
    ],
  },
];

const projects1 = [
  {
    name: "Photovoltaic Performance Analysis",
    description:
      "The local dashboard for solar school performance analysis is designed to allow clients to comprehensively evaluate their time series data on-site, with an integrates interactive maps to enhance user engagement. The project was moved to a private Bitbucket repository with restricted external access. Consequently, following the release of our final product by my team, we are now unable to gain entry to the project.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Dash",
        color: "green-text-gradient",
      },
      {
        name: "Folium",
        color: "pink-text-gradient",
      },
    ],
    image: sd,
    source_code_link: "https://github.com"
  },
]

const projects = [
  {
    name: "Trendify",
    description:
      "The full-stack application for accessing in-depth insights into a user's Spotify listening history offers users to display their most, played artists and songs.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Node.JS",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: trendify,
    source_code_link: "https://github.com/cirillojon/Trendify-App",
  },
  {
    name: "Professor Contacts",
    description:
      "A website that allows users to log in, sign up, and perform standard CRUD operations, along with a search feature that retrieves contacts from the database and presents them in a table for efficient data management.",
    tags: [
      {
        name: "NodeJs",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: pc,
    source_code_link: "https://github.com/cirillojon/Professor-Contacts",
  },
];

export { services, technologies, experiences, projects, projects1 };
