import { uid } from "uid";
import { GrYoga } from "react-icons/gr";
import { FaBook, FaDumbbell } from "react-icons/fa";
import { GiGymBag } from "react-icons/gi";
import Img1 from "../assets/banner1.png";
import Img2 from "../assets/banner2.png";

export const menuData = [
  {
    id: uid(),
    title: "Home",
    link: "/",
  },
  {
    id: uid(),
    title: "For Students",
    link: "/",
  },
  {
    id: uid(),
    title: "Resource",
    link: "/",
  },
  {
    id: uid(),
    title: "About Us",
    link: "/",
  },
  {
    id: uid(),
    title: "Contact Us",
    link: "/",
  },
];

export const whyChooseUsData = [
  {
    id: uid(),
    title: "One-on-one Teaching",
    description:
      "All of our special education experts have a degree in special education.",
    icon: <GrYoga />,
    bgColor: "#0063ff",
    delay: 0.3,
  },
  {
    id: uid(),
    title: "24/7 Tutor Availability",
    description:
      "Our tutors are always available to respond as quick as possible for you.",
    icon: <FaDumbbell />,
    bgColor: "#73bc00",
    delay: 0.6,
  },
  {
    id: uid(),
    title: "Interactive Whiteboard",
    description:
      "Our digital whiteboard equipped with audio and video chat fetures.",
    icon: <GiGymBag />,
    bgColor: "#fa6400",
    delay: 0.9,
  },
  {
    id: uid(),
    title: "Affordable Pricesg",
    description: "Choose an expert tutor based on your budget and per hour.",
    icon: <GiGymBag />,
    bgColor: "#fe6baa",
    delay: 0.9,
  },
];

export const Banner1Data = [
  {
    id: uid(),
    image: Img1,
    tag: "CUSTOMIZE WITH YOUR SCHEDULE",
    title: "Personalized Professional Online Tutor on Your Schedule",
    subtitle:
      "Our scheduling system allows you to select based on your free time. Lorem ipsum demo text for template. Keep track of your students class and tutoring schedules, and never miss your lectures. The best online class scheduling system with easy accessibility.Lorem ipsum is a placeholder text commonly used to demonstrate the visual form",
    link: "#",
  },
];

export const Banner2Data = [
  {
    id: uid(),
    image: Img2,
    tag: "CUSTOMIZE WITH YOUR SCHEDULE",
    title: "Talented and Qualified Tutors to Serve You for Help",
    subtitle:
      "Our scheduling system allows you to select based on your free time. Lorem ipsum demo text for template. Keep track of your students class and tutoring schedules, and never miss your lectures. The best online class scheduling system with easy accessibility.Lorem ipsum is a placeholder text commonly used to demonstrate the visual form",
    link: "#",
  },
];

export const subjectCardData = [
  {
    id: uid(),
    name: "Engineering",
    icon: <FaBook />,
    color: "#0063fe",
    delay: 0.2,
  },
  {
    id: uid(),
    name: "English",
    icon: <FaBook />,
    color: "#00c986",
    delay: 0.3,
  },
  {
    id: uid(),
    name: "Programing",
    icon: <FaBook />,
    color: "#922aee",
    delay: 0.4,
  },
  {
    id: uid(),
    name: "Science",
    icon: <FaBook />,
    color: "#ea7516",
    delay: 0.5,
  },
  {
    id: uid(),
    name: "History",
    icon: <FaBook />,
    color: "#075267",
    delay: 0.6,
  },
  {
    id: uid(),
    name: "Psychology",
    icon: <FaBook />,
    color: "#986d1d",
    delay: 0.7,
  },
  {
    id: uid(),
    name: "Web design",
    icon: <FaBook />,
    color: "#b93838",
    delay: 0.8,
  },
  {
    id: uid(),
    name: "See all",
    icon: <FaBook />,
    color: "#464646",
    delay: 0.9,
  },
];

export const TestimonialsData = [
  {
    id: uid(),
    name: "Victor",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, quod. Odio nostrum, ab placeat quia, molestias vero facere est officiis exercitationem aut cupiditate adipisci asperiores officia iure minus ullam! Provident.",
    img: "https://picsum.photos/101/101",
  },
  {
    id: uid(),
    name: "Satya Nadella",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, quod. Odio nostrum, ab placeat quia, molestias vero facere est officiis exercitationem aut cupiditate adipisci asperiores officia iure minus ullam! Provident.",
    img: "https://picsum.photos/102/102",
  },
  {
    id: uid(),
    name: "Virat Kohli",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, quod. Odio nostrum, ab placeat quia, molestias vero facere est officiis exercitationem aut cupiditate adipisci asperiores officia iure minus ullam! Provident.",
    img: "https://picsum.photos/104/104",
  },
  {
    id: uid(),
    name: "Sachin Tendulkar",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, quod. Odio nostrum, ab placeat quia, molestias vero facere est officiis exercitationem aut cupiditate adipisci asperiores officia iure minus ullam! Provident.",
    img: "https://picsum.photos/103/103",
  },
  {
    id: uid(),
    name: "Victor",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, quod. Odio nostrum, ab placeat quia, molestias vero facere est officiis exercitationem aut cupiditate adipisci asperiores officia iure minus ullam! Provident.",
    img: "https://picsum.photos/101/101",
  },
  {
    id: uid(),
    name: "Sachin Tendulkar",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, quod. Odio nostrum, ab placeat quia, molestias vero facere est officiis exercitationem aut cupiditate adipisci asperiores officia iure minus ullam! Provident.",
    img: "https://picsum.photos/103/103",
  },
];
