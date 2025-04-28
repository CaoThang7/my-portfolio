import { FaJs, FaJava, FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiExpress,
  SiNestjs,
  SiHtml5,
  SiCss3,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiFirebase,
  SiAmazon,
  SiCloudflare,
  SiGooglecloud,
} from "react-icons/si";

export const cards = [
  {
    key: "languages",
    title: "Languages",
    items: [
      {
        icon: <FaJs className="text-yellow-400 text-4xl" />,
        label: "JavaScript",
      },
      {
        icon: <SiTypescript className="text-blue-500 text-4xl" />,
        label: "TypeScript",
      },
      { icon: <FaJava className="text-blue-700 text-4xl" />, label: "Java" },
    ],
  },
  {
    title: "Frontend",
    items: [
      { icon: <FaReact className="text-cyan-400 text-4xl" />, label: "React" },
      {
        icon: <FaReact className="text-cyan-400 text-4xl" />,
        label: "React Native",
      },
      {
        icon: <SiNextdotjs className="text-[var(--text-primary)] text-4xl" />,
        label: "NextJS",
      },
      { icon: <SiHtml5 className="text-orange-500 text-4xl" />, label: "HTML" },
      { icon: <SiCss3 className="text-blue-400 text-4xl" />, label: "CSS" },
    ],
  },
  {
    title: "Backend",
    items: [
      {
        icon: <FaNodeJs className="text-green-500 text-4xl" />,
        label: "NodeJS",
      },
      {
        icon: <SiExpress className="text-[var(--text-primary)] text-4xl" />,
        label: "Express",
      },
      { icon: <SiNestjs className="text-red-500 text-4xl" />, label: "NestJS" },
    ],
  },
  {
    key: "database",
    title: "Database",
    items: [
      {
        icon: <SiPostgresql className="text-blue-400 text-4xl" />,
        label: "PostgreSQL",
      },
      { icon: <SiMysql className="text-blue-500 text-4xl" />, label: "MySQL" },
      {
        icon: <SiMongodb className="text-green-500 text-4xl" />,
        label: "MongoDB",
      },
      {
        icon: <SiFirebase className="text-orange-400 text-4xl" />,
        label: "Firebase",
      },
    ],
  },
  {
    key: "cloud",
    title: "Cloud Services",
    items: [
      {
        icon: <SiAmazon className="text-[#FF9900] text-4xl" />,
        label: "AWS",
      },
      {
        icon: <SiCloudflare className="text-[#F38020] text-4xl" />,
        label: "Cloudflare",
      },
      {
        icon: <SiGooglecloud className="text-[#4285F4] text-4xl" />,
        label: "Google Cloud",
      },
    ],
  },
];
