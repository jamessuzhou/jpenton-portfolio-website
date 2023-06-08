import project1 from "./images/project1-ohmyfood.jpg";
import project2 from "./images/project2-booki.jpg";
import project3 from "./images/project3-nsc.jpg";
import project4 from "./images/pig_game.jpg";
import project5 from "./images/backroads_travel.jpg";

import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaSass,
  FaBootstrap,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";

export const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "My Portfolio" },
  { id: 3, href: "#services", text: "Download My CV" },
];

export const socialLinks = [
  { id: 1, href: "https://www.facebook.com", icon: "fab fa-facebook" },
  { id: 2, href: "https://www.twitter.com", icon: "fab fa-twitter" },
  { id: 3, href: "https://www.instagram.com", icon: "fab fa-instagram" },
];

export const ourServices = [
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    title: "saving money",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.        Asperiores, officia.",
  },
  {
    id: 2,
    icon: "fas fa-tree fa-fw",
    title: "endless hiking",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.        Asperiores, officia.",
  },
  {
    id: 3,
    icon: "fas fa-socks fa-fw",
    title: "amazing comfort",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.        Asperiores, officia.",
  },
];

export const featuredTours = [
  {
    id: 1,
    image: project1,
    icon: [<FaHtml5 />, <FaCss3Alt />, <FaSass />],
    title: "ohmyfood",
    text: "A fully responsive website using html5, css3 and Sass. This website uses several animations, including fade-in, spinners and a slider.",
    link: "https://ohmyfood-uploaded-jpenton.netlify.app",
    github: "https://github.com/jamessuzhou/ohmyfood-website",
  },
  {
    id: 4,
    image: project2,
    icon: [<FaHtml5 />, <FaCss3Alt />],
    title: "Booki",
    text: "This hotel-booking landing page uses html5, css3 and is fully responsive.",
    link: "https://booki-jpenton.netlify.app/",
    github: "https://github.com/jamessuzhou/Booki_website",
  },
  {
    id: 2,
    image: project3,
    icon: [<FaHtml5 />, <FaCss3Alt />, <IoLogoJavascript />, <FaBootstrap />],
    title: "NSC technical test",
    text: "Made as part of technical interview test, this website uses Javascript to create a carousel and to generate the 'latest posts section'. It is fully responsive and uses bootstrap for several sections",
    link: "https://nsc-website-technical-challenge.netlify.app/",
    github: "github.com/jamessuzhou/nsc-website2",
  },
  {
    id: 3,
    image: project4,
    icon: [<FaHtml5 />, <FaCss3Alt />, <IoLogoJavascript />],
    title: "Pig Game",
    text: "An app using a variety of Javascript techniques to generate a dice roll, display, record and update player scores, and then declare a winner. Play state can also be reset",
    link: "https://pig-game-jpenton.netlify.app/",
    github: "https://github.com/jamessuzhou/pig-game",
  },
  {
    id: 5,
    image: project5,
    icon: [<FaHtml5 />, <FaCss3Alt />, <IoLogoJavascript />, <FaReact />],
    title: "Backroads Travel",
    text: "A simple React-based website. Each section is divided into its own component. Fully responsive. ",
    link: "https://backroads-travel-jpenton.netlify.app/",
    github: "https://github.com/jamessuzhou/react-backroads-app",
  },
  // {
  //   id: 6,
  //   image: tour6,
  //   date: "ausgust 26th 2020",
  //   title: "Safari",
  //   text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
  //   location: "india",
  //   length: "6 days",
  //   price: "$2100",
  // },
];
