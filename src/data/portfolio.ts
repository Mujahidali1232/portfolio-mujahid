import { LucideIcon } from "lucide-react";
import { 
  Palette, 
  Layout, 
  Server, 
  Globe
} from "lucide-react";

export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  tech: string[];
  link: string;
  github: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Skill {
  name: string;
  level: number; // 1-100
  category: "frontend" | "backend" | "tools";
  image: string;
  url: string;
}

export const DATA = {
  profile: {
    name: "Mujahid Ali",
    role: "Frontend Developer",
    tagline: "Building seamless digital experiences with modern web technologies.",
    about: "Self-driven and detail-oriented Frontend Developer with a proven track record of delivering high-quality, scalable web interfaces. Committed to writing clean code, optimizing performance, and creating seamless user experiences.",
    experience: "1+",
    projects_completed: "30+",
    clients: "24+",
    email: "aleemujahid445@gmail.com",
    phone: "+92 3063358996",
    location: "Karachi, Pakistan",
    social: {
      github: "https://github.com/",
      linkedin: "https://linkedin.com/",
      twitter: "https://twitter.com/",
    }
  },
  skills: [
    {
      name: "React.js",
      level: 90,
      category: "frontend",
      image: "reactlogo.png",
      url: "https://reactjs.org/"
    },
    {
      name: "Next.js",
      level: 85,
      category: "frontend",
      image: "next..svg",
      url: "https://nextjs.org/"
    },
    {
      name: "TypeScript",
      level: 80,
      category: "frontend",
      image: "tslogo.png",
      url: "https://www.typescriptlang.org/"
    },
    {
      name: "Tailwind CSS",
      level: 95,
      category: "frontend",
      image: "tslogo.jfif",
      url: "https://tailwindcss.com/"
    },
    {
      name: "JavaScript",
      level: 90,
      category: "frontend",
      image: "js.jfif",
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
    },
    {
      name: "Material UI",
      level: 85,
      category: "frontend",
      image: "mui.jfif",
      url: "https://mui.com/"
    },
    {
      name: "Vite",
      level: 85,
      category: "tools",
      image: "vite.png",
      url: "https://vitejs.dev/"
    },
    {
      name: "PHP",
      level: 60,
      category: "backend",
      image: "php.jfif",
      url: "https://www.php.net/"
    },
    {
      name: "MySQL",
      level: 60,
      category: "backend",
      image: "sql.png",
      url: "https://www.mysql.com/"
    },
    {
      name: "WordPress",
      level: 70,
      category: "tools",
      image: "press.jfif",
      url: "https://wordpress.org/"
    },
    {
      name: "CSS",
      level: 70,
      category: "tools",
      image: "css.png",
      url: "https://developer.mozilla.org/en-US/docs/Web/CSS"
    },
    {
      name: "ChatGPT",
      level: 95,
      category: "tools",
      image: "gpt.svg",
      url: "https://chat.openai.com/"
    }
  ],
  services: [
    {
      id: 1,
      title: "Frontend Development",
      description: "Building responsive, interactive, and pixel-perfect user interfaces using React, Next.js, and Tailwind CSS.",
      icon: Layout
    },
    {
      id: 2,
      title: "Web Application",
      description: "Developing robust and scalable web applications with modern architecture and best practices.",
      icon: Globe
    },
    {
      id: 3,
      title: "UI Implementation",
      description: "Translating Figma/Adobe XD designs into clean, semantic, and accessible code.",
      icon: Palette
    },
    {
      id: 4,
      title: "API Integration",
      description: "Seamlessly integrating RESTful APIs to connect your frontend with powerful backend services.",
      icon: Server
    }
  ],
  projects: [
    {
      id: 1,
      title: "Hotel Booking App",
      category: "Web Application",
      description: "A responsive hotel booking application with intuitive search functionality and modern UI.",
      image: "hotel.png",
      tech: ["React.js", "TypeScript", "TailwindCSS", "Vite"],
      link: "https://hotel-booking-app-ji4l-fxed06wn6-mujahid-ali-s-projects.vercel.app/",
      github: "https://github.com/Mujahidali1232"
    },
    {
      id: 2,
      title: "React Admin Panel",
      category: "Dashboard",
      description: "A fully functional admin panel to streamline administrative workflows with data visualization.",
      image: "admin.png",
      tech: ["React.js", "JavaScript", "TailwindCSS"],
      link: "https://case-study-qfw4.vercel.app/",
      github: "https://github.com/Mujahidali1232"
    },
    {
      id: 3,
      title: "Case Study",
      category: "Design Implementation",
      description: "A visually engaging case study project focused on responsive layouts and seamless image integration.",
      image: "kitchen.png",
      tech: ["React.js", "TypeScript", "Material UI", "Tailwind CSS"],
      link: "https://vercel.com/mujahid-ali-s-projects/case-study",
      github: "https://github.com/Mujahidali1232"
    },
    {
      id: 4,
      title: "Todo App",
      category: "Web Application",
      description: "A simple and effective Todo app built with React to manage your daily tasks efficiently.",
      image: "todo.jpg",
      tech: ["React.js", "JavaScript", "CSS"],
      link: "https://todo-app-delta-gilt-46.vercel.app/",
      github: "https://github.com/Mujahidali1232"
    }
  ]
};
