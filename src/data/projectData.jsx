import gymImage from "../assets/gym.png";
import hangImage from "../assets/hangman.png";
import space from "../assets/space.png";
import garden from "../assets/garden.png";
import intern from "../assets/interno.png";
import dog from "../assets/dog.png";
import nike from "../assets/nike.png";

const projectData = [
  {
    title: "Interno - Interior Design",
    stack: "HTML, JavaScript, Tailwind CSS",
    description:
      "Beautifully designed and fully responsive landing page for an interior design company. The project is written in HTML, JavaScript, and Tailwind CSS. The project is fully responsive and has been tested on various devices. You can view the project by clicking the link below.",
    img: intern,
    link: "https://interno-landing.netlify.app/",
    codeLink: "https://github.com/mirage109/Interno",
  },
  {
    title: "Garden Online Shop",
    stack: "JavaScript, React, Redux Toolkit, Routing, CSS",
    description:
      "The Garden Online Shop project is written in JavaScript and React, utilizing Redux Toolkit and other third-party NPM packages. It features a product filtering system that recalculates costs based on the addition/removal of products, as well as integration with the backend and other APIs. Additionally, the project includes a shopping cart for adding and removing items, and sending requests to the backend to perform respective operations.",
    img: garden,
    link: "https://garden-shop.netlify.app/",
    codeLink: "https://github.com/mirage109/Project_gargen",
  },
  {
    title: "Space Expatriate Game",
    stack: "React, TypeScript, MobX, SASS, OOP",
    description:
      "Task was to transfer a board game online. The Space Expatriate Game is a project that my colleagues and I have been working on for 2 months. We are developing it using React, TypeScript, MobX, and conducting Jest tests. Currently in the development phase, we plan to add the possibility for at least 2 players. ",
    img: space,
    link: "https://igmat.github.io/SpaceExpatriateReact/",
    codeLink: "https://github.com/Igmat/SpaceExpatriateReact",
  },
  {
    title: "Gym Website",
    stack:
      "React, Typescript, Vite, Tailwind, Hero Icons, Framer Motion, Form Submit, React Anchor Link ",
    description:
      "The project is written in React, using TypeScript, Vite, and Tailwind. It includes a smooth scroll to the anchor link, a form submit, and a hamburger menu with a smooth animation.",
    img: gymImage,
    link: "https://gym-tailwind-practice.netlify.app/",
    codeLink: "https://github.com/mirage109/gym-typescript",
  },
  {
    title:"Nike Landing Page",
    stack: "React, Tailwind CSS",
    description: "The project is written in React, using Tailwind CSS. Landing page for Nike. You can view the project by clicking the link below.",
    img: nike,
    link: "https://nike-landingp.netlify.app/",
    codeLink: "https://github.com/mirage109/nike"
  },
  {
    title: "Pet Grooming Site",
    stack: "React, Tailwind, Swiper",
    description:
      "The project is written in React, using Tailwind CSS and Swiper. It's learning project for me to practice Tailwind CSS and Swiper. You can view the project by clicking the link below.",
    img:dog,
    link: "https://pet-grooming-1.netlify.app/",
    codeLink: "https://github.com/mirage109/pet-grooming",
  },
  {
    title : "Hangman Game",
    stack: "React, TypeScript, Vite",
    description: "The Hangman Game is a classic word-guessing game where players try to guess a hidden word letter by letter, while avoiding making too many incorrect guesses before completing the word or phrase. It's a popular game for language learning and vocabulary building, often enjoyed by players of all ages. The project is written in React, using TypeScript, and Vite. It includes a game logic, a game board, and a game over screen. You can play the game by clicking the link below.",
    img: hangImage,
    link: "https://hang-man-cheery.netlify.app/",
    codeLink: "https://github.com/mirage109/hang-man"
  }
];

export default projectData;
