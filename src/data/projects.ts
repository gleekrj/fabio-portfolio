export interface Project {
    title: string;
    summary: string;
    description: string;
    site?: string;
    github?: string;
    image: string;
    videoUrl?: string;
    launchDate: string;
    technologies: string[];
}

export const projects: Project[] = [
    {
        title: "Plataforma de Turismo Sustentável",
        summary: "Plataforma web para turismo sustentável desenvolvida com React.js e TypeScript",
        description: "Desenvolvimento de uma plataforma completa de turismo sustentável utilizando React.js com TypeScript no frontend e Node.js no backend. A aplicação permite que usuários descubram destinos sustentáveis, façam reservas e contribuam para o turismo responsável.",
        site: "https://pipoca-agil-turismo.vercel.app",
        github: "https://github.com/pipoca-agil/plataforma-turismo-sustentavel",
        image: "/project-turismo.jpg",
        videoUrl: "https://youtube.com/watch?v=example1",
        launchDate: "Julho 2025",
        technologies: ["React.js", "TypeScript", "Node.js", "Express", "PostgreSQL", "Tailwind CSS"]
    },
    {
        title: "Aplicativo de Saúde",
        summary: "Aplicativo mobile para gestão de saúde desenvolvido com React Native",
        description: "Aplicativo móvel desenvolvido em React Native para gestão de informações de saúde pessoal. Permite que usuários acompanhem métricas de saúde, agendem consultas e tenham acesso a informações médicas importantes de forma organizada e segura.",
        site: undefined,
        github: "https://github.com/pipoca-agil/app-saude",
        image: "/project-saude.jpg",
        videoUrl: "https://youtube.com/watch?v=example2",
        launchDate: "Outubro 2024",
        technologies: ["React Native", "JavaScript", "Node.js", "Express", "MongoDB"]
    },
    {
        title: "Portfólio Pessoal",
        summary: "Portfólio profissional desenvolvido com React 19 e TypeScript",
        description: "Portfólio pessoal moderno e responsivo desenvolvido com as mais recentes tecnologias web. Inclui animações fluidas, tema escuro/claro, design responsivo e otimizações de performance. Demonstra habilidades em React 19, TypeScript, Tailwind CSS e Framer Motion.",
        site: "https://fabio-portfolio.vercel.app",
        github: "https://github.com/fabio-matos/portfolio",
        image: "/project-portfolio.jpg",
        launchDate: "Janeiro 2025",
        technologies: ["React 19", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"]
    }
];
