import { logos } from "./skills";

type TecType = {
  name: string;
  logo: string;
};

type DemoType = {
  email: string;
  password: string;
};

type ProjectDataType = {
  id: number;
  title: string;
  description: string;
  images: string[];
  tec: TecType[];
  demo: DemoType;
  url: string;
};
const projectsData: ProjectDataType[] = [
  {
    id: 3,
    title: "Dashboard",
    images: [
      "https://res.cloudinary.com/dxiii8jbr/image/upload/v1749981707/totib/ekvvaylj9eb8hwri4tzs.png",
      "https://res.cloudinary.com/dxiii8jbr/image/upload/v1749981707/totib/jqdlrjtrvkpfdtobs9x8.png",
      "https://res.cloudinary.com/dxiii8jbr/image/upload/v1749981648/totib/q74eu5stcsutaumm3q9y.png",
      "https://res.cloudinary.com/dxiii8jbr/image/upload/v1749981648/totib/wyb0qzvq5bbwjvuqlomn.png",
    ], // Remplace par ton image réelle
    description:
      "The project is a full stack e-commerce dashboard application. The frontend is built with React and TypeScript, providing an intuitive interface for managing products, categories, orders, and customers. The backend is developed using Laravel (PHP), handling business logic, API endpoints, and database interactions. The system allows administrators to monitor sales, manage inventory, and analyze performance through real-time statistics.",
    tec: [
      { name: "React", logo: logos.react },
      { name: "Typecript", logo: logos.typscript },
      { name: "PHP", logo: logos.php },
      { name: "Tailwindcss", logo: logos.tailwindcss },
      { name: "laravel", logo: logos.laravel },
      { name: "Mysql", logo: logos.mysql },
    ],
    demo: { email: "demo@ecommerce.com", password: "demo123" },
    url: "https://ecommerce-demo.netlify.app", // Remplace par ton URL
  },
  {
    id: 3,
    title: "E-commerce Website",
    images: ["https://i.imgur.com/Rv8p5U4.png"], // Remplace par ton image réelle
    description:
      "A full-stack e-commerce website that supports product browsing, cart management, order processing, and user authentication. Developed with React, Tailwind CSS, Node.js, Express, and MongoDB. The platform is designed with responsive UI and a secure backend using JWT.",
    tec: [
      { name: "React", logo: logos.react },
      { name: "Typecript", logo: logos.typscript },
      { name: "Tailwindcss", logo: logos.tailwindcss },
      { name: "Nodejs", logo: logos.nodejs },
      { name: "Expressjs", logo: logos.expressjs },
      { name: "MongoDB", logo: logos.mongodb },
      { name: "Prisma", logo: logos.prisma },
    ],
    demo: { email: "demo@ecommerce.com", password: "demo123" },
    url: "https://ecommerce-demo.netlify.app", // Remplace par ton URL
  },
  {
    id: 3,
    title: "Dashboard",
    description:
      "During my internship, I developed a mobile application using React Native, TypeScript, and GraphQL to help visualize and track the revenue performance of hypermarket stores in real time.",
    images: [
      "https://res-console.cloudinary.com/dxiii8jbr/thumbnails/v1/image/upload/v1759753039/dG90aWIva3pja281OXJ1ZzRxbzM0c2t6b2M=/drilldown",
    ],
    tec: [
      { name: "Typecript", logo: logos.typscript },
      { name: "React Native", logo: logos.reactNative },
      { name: "Tailwindcss", logo: logos.tailwindcss },
    ],
    demo: { email: "yousseftaussi894@gmail.com", password: "1234" },
    url: "",
  },
  {
    id: 1,
    title: "Project Manager",
    images: ["https://i.imgur.com/3Nk8Dp1.png"],
    description:
      "A full-stack web application designed to streamline academic project management with role-based access control, real-time collaboration, and task tracking features.",
    tec: [
      { name: "PHP", logo: logos.php },
      { name: "Mysql", logo: logos.mysql },
      { name: "HTML", logo: logos.html },
      { name: "CSS", logo: logos.css },
      { name: "Javascrip", logo: logos.javascrip },
    ],
    demo: { email: "yousseftaussi894@gmail.com", password: "1234" },
    url: "https://wahib.kesug.com/login",
  },
  {
    id: 2,
    title: "Real time chat app ",
    images: [
      "https://i.pinimg.com/736x/c6/48/4e/c6484e14859040e7871229bdd85dca24.jpg",
    ],
    description:
      "Built with Node.js, Express, React, Tailwind CSS, Socket.IO, Sequelize, and more, this real-time chat application offers seamless communication between users. Users can create accounts, add friends, send invitations,",
    tec: [
      { name: "Reactjs", logo: logos.react },
      { name: "Tailwindcss", logo: logos.tailwindcss },
      { name: "Nodejs", logo: logos.nodejs },
      { name: "expressjs", logo: logos.expressjs },
      { name: "Mysql", logo: logos.mysql },
      { name: "Sequelize", logo: logos.sequelize },
      { name: "Socket.io", logo: logos.socketIo },
    ],
    demo: { email: "yousseftaussi894@gmail.com", password: "1234" },
    url: "",
  },
];
export default projectsData;
