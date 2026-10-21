import HeroImage from "/assets/hero-img.webp";

export const profileData = {
  name: "Kruthika Naidu",
  shortName: "Kruthika",
  title: "FULL STACK DEVELOPER AND AI DEVELOPER",
  handle: "kruthikanaidu",
  status: "Available",
  contactText: "Contact Me",
  avatarUrl: "./assets/kruthika-profile.jpeg",
  tagline: "Innovation in code, intelligence in action.",
  heroGreeting: "Hi I'm Kruthika Naidu",
  heroDescription:
    "Innovative and goal-driven B.Tech Computer Science student specializing in full-stack web development and Artificial Intelligence integration.",
  about:
    "Innovative and goal-driven B.Tech Computer Science student specializing in full-stack web development and Artificial Intelligence integration. Hands-on experience building scalable web applications with Modern React ecosystems, RESTful APIs, and machine learning workflows.",
  stats: [
    { label: "Projects Built", value: "5+" },
    { label: "Learning Focus", value: "AI + Web" },
    { label: "Current Role", value: "Student" }
  ],
  email: "naidukruthika2006@gmail.com",
  github: "https://github.com/naidukruthika2006",
  linkedin: "https://linkedin.com/in/kruthika-naidu",
  instagram: "https://www.instagram.com/kruthika___naidu",
  contactMessage: "Let’s build something impactful together"
};

const Image = {
  HeroImage,
};

export default Image;

import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/reactjs.png";
import Tools3 from "/assets/tools/nextjs.png";
import Tools4 from "/assets/tools/tailwind.png";
import Tools5 from "/assets/tools/bootstrap.png";
import Tools6 from "/assets/tools/js.png";
import Tools7 from "/assets/tools/nodejs.png";
import Tools8 from "/assets/tools/github.png";
import Tools9 from "/assets/tools/ai.png";
import Tools10 from "/assets/tools/canva.png";
import Tools11 from "/assets/tools/figma.png";
import Tools12 from "/assets/tools/kotlin.png";
import Tools13 from "/assets/tools/firebase.png";
import Tools14 from "/assets/tools/html.png";
import Tools15 from "/assets/tools/css.png";
import Tools16 from "/assets/tools/ts.png";
import Tools17 from "/assets/tools/php.png";
import Tools18 from "/assets/tools/vite.png";
import Tools19 from "/assets/tools/mysql.png";


export const listTools = [
  { id: 1, gambar: Tools14, nama: "HTML5", ket: "Markup Language", dad: "100" },
  { id: 2, gambar: Tools15, nama: "CSS3", ket: "Styling", dad: "200" },
  { id: 3, gambar: Tools6, nama: "JavaScript (ES6+)", ket: "Language", dad: "300" },
  { id: 4, gambar: Tools2, nama: "React.js", ket: "Frontend Library", dad: "400" },
  { id: 5, gambar: Tools4, nama: "Tailwind CSS", ket: "CSS Framework", dad: "500" },
  { id: 6, gambar: Tools7, nama: "Node.js", ket: "Runtime Environment", dad: "600" },
  { id: 7, gambar: Tools17, nama: "Express.js", ket: "Backend Framework", dad: "700" },
  { id: 8, gambar: Tools18, nama: "Vite", ket: "Build Tool", dad: "800" },
  { id: 9, gambar: Tools13, nama: "MongoDB", ket: "Database", dad: "900" },
  { id: 10, gambar: Tools19, nama: "MySQL", ket: "Relational Database", dad: "1000" },
  { id: 11, gambar: Tools8, nama: "Git & GitHub", ket: "Version Control", dad: "1100" },
  { id: 12, gambar: Tools1, nama: "Postman", ket: "API Testing", dad: "1200" },
  { id: 13, gambar: Tools9, nama: "Python", ket: "Programming Language", dad: "1300" },
  { id: 14, gambar: Tools9, nama: "NumPy", ket: "Data Science", dad: "1400" },
  { id: 15, gambar: Tools9, nama: "Pandas", ket: "Data Analysis", dad: "1500" },
  { id: 16, gambar: Tools9, nama: "OpenAI API / LLM", ket: "AI Integration", dad: "1600" },
  { id: 17, gambar: Tools9, nama: "Prompt Engineering", ket: "AI Interaction", dad: "1700" },
  { id: 18, gambar: Tools1, nama: "RESTful APIs", ket: "Integration", dad: "1800" },
  { id: 19, gambar: Tools16, nama: "FastAPI / Flask", ket: "Python APIs", dad: "1900" }
];

import Proyek1 from "/assets/proyek/clinic-thumb.svg";
import Proyek2 from "/assets/proyek/echo-thumb.svg";
import Proyek3 from "/assets/proyek/proyek3.webp";
import Proyek4 from "/assets/proyek/proyek4.webp";
import Proyek5 from "/assets/proyek/proyek5.webp";
import Proyek6 from "/assets/proyek/proyek6.webp";

export const listProyek = [
  {
    id: 1,
    image: Proyek1,
    title: "Clinic Queue and Patient Flow Management",
    subtitle: "Web-based healthcare system to streamline patient flow and reduce waiting confusion.",
    fullDescription:
      "The Clinic Queue and Patient Flow Manager is a web-based application designed to streamline patient flow and reduce waiting time confusion in healthcare clinics. Many clinics still rely on manual registers or basic token systems, which often lead to overcrowding, inefficient patient handling, and poor communication between patients, staff, and doctors. This project addresses these issues by providing a simple, role-based digital solution.",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://naidukruthika2006.github.io/clinic-queue-and-patient-flow-management/",
    dad: "100",
  },
  {
    id: 2,
    image: Proyek2,
    title: "Echo",
    subtitle: "Inclusive digital communication project focused on cultural discovery and ISL storytelling.",
    fullDescription:
      "Implemented cultural discovery modules showcasing stories, literature, and visual expression rather than standard grammar lessons. Designed and built responsive UI components to deliver an intuitive user experience centered around inclusive digital communication. Leveraged modern web technologies to translate the visual nuances and rich identity of ISL into an interactive digital format.",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://naidukruthika2006.github.io/echo/",
    dad: "200",
  },
  {
    id: 3,
    image: Proyek3,
    title: "YUVA",
    category: "Hackathon · NEC College",
    subtitle:
      "CIVIC is a civic-tech app that helps residents discover local services, resources, and community support in one place, combining a modern frontend with a Prisma-powered backend.",
    fullDescription:
      "CIVIC is a civic-tech app that helps residents discover local services, resources, and community support in one place, combining a modern frontend with a Prisma-powered backend.",
    tags: ["Civic Tech", "Prisma", "Community Services"],
    borderColor: "#29D8EE",
    gradient: "linear-gradient(145deg, #29D8EE, #17102B)",
    url: "https://naidukruthika2006.github.io/YUVA/",
    dad: "300",
  }
];
