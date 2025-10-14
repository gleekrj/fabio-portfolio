import {
    FaReact,
    FaNodeJs,
    FaJs,
    FaHtml5,
    FaCss3Alt,
    FaJava,
    FaGitAlt,
    FaGithub,
    FaJenkins,
    FaDatabase
} from 'react-icons/fa';
import {
    SiNextdotjs,
    SiTypescript,
    SiTailwindcss,
    SiExpress,
    SiVercel,
    SiOracle,
    SiPostgresql,
    SiMysql,
    SiMongodb
} from 'react-icons/si';

export interface Technology {
    name: string;
    icon: React.ComponentType<{ className?: string }>;
}

export const technologies: Technology[] = [
    { name: "React.js", icon: FaReact },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "JavaScript", icon: FaJs },
    { name: "TypeScript", icon: SiTypescript },
    { name: "HTML5", icon: FaHtml5 },
    { name: "CSS3", icon: FaCss3Alt },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "Node.js", icon: FaNodeJs },
    { name: "Express", icon: SiExpress },
    { name: "Java", icon: FaJava },
    { name: "React Native", icon: FaReact },
    { name: "Git", icon: FaGitAlt },
    { name: "GitHub", icon: FaGithub },
    { name: "Jenkins", icon: FaJenkins },
    { name: "Vercel", icon: SiVercel },
    { name: "SQL Server", icon: FaDatabase },
    { name: "Oracle", icon: SiOracle },
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "MySQL", icon: SiMysql },
    { name: "MongoDB", icon: SiMongodb }
];
