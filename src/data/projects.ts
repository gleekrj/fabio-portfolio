export interface Project {
    title: string;
    summary: string;
    description: string;
    site?: string;
    github?: string;
    images: string[];
    videoUrl?: string;
    launchDate: string;
    technologies: string[];
}

export const projects: Project[] = [
    {
        title: "Game Hub - Hub de Jogos Interativo",
        summary: "Frontend de um hub de jogos desenvolvido em React.js e TypeScript, permitindo filtrar jogos por plataforma e gênero, buscar títulos específicos e acessar detalhes como trailer, imagens, pontuação no Metacritic e indicação de 'vale a pena jogar'.",
        description: "O Game Hub é um projeto frontend que organiza e exibe informações de jogos de forma intuitiva. Nele, o usuário pode filtrar jogos por plataforma e gênero, pesquisar por jogos específicos, visualizar detalhes do jogo, incluindo trailer, imagens e pontuação no Metacritic, e conferir se o jogo é recomendado ou não, de forma rápida e visual. Desenvolvido com React.js 18 + TypeScript, utiliza hooks personalizados para maior modularidade e manutenção do código, React Query para manipulação eficiente de dados da API e Chakra UI como framework de interface.",
        site: "https://game-hub2-omega.vercel.app/",
        github: "https://github.com/gleekrj/game-hub2",
        images: [
            "https://res.cloudinary.com/diun304co/image/upload/v1760651133/portfolio/images/GameHub_01_yfprvy.png",
            "https://res.cloudinary.com/diun304co/image/upload/v1760651133/portfolio/images/GameHub_02_srvvtn.png",
            "https://res.cloudinary.com/diun304co/image/upload/v1760651133/portfolio/images/GameHub_03_mmdlrb.png",
            "https://res.cloudinary.com/diun304co/image/upload/v1760651133/portfolio/images/GameHub_04_jrpvik.png",
            "https://res.cloudinary.com/diun304co/image/upload/v1760651133/portfolio/images/GameHub_05_uys7fy.png"
        ],
        videoUrl: "https://res.cloudinary.com/diun304co/video/upload/v1760651199/portfolio/videos/GameHub_Video_klg9w6.mp4",
        launchDate: "Julho 2025",
        technologies: ["React.js 18", "TypeScript", "React Query", "Chakra UI", "rawg.io API"]
    },
    {
        title: "Plataforma de Turismo Sustentável",
        summary: "Plataforma web para turismo sustentável desenvolvida com React.js e TypeScript",
        description: "Desenvolvimento de uma plataforma completa de turismo sustentável utilizando React.js com TypeScript no frontend e Node.js no backend. A aplicação permite que usuários descubram destinos sustentáveis, façam reservas e contribuam para o turismo responsável.",
        site: "https://pipoca-agil-turismo.vercel.app",
        github: "https://github.com/pipoca-agil/plataforma-turismo-sustentavel",
        images: ["/project-turismo.jpg"],
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
        images: ["/project-saude.jpg"],
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
        images: ["/project-portfolio.jpg"],
        launchDate: "Janeiro 2025",
        technologies: ["React 19", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"]
    }
];
