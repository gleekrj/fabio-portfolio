export interface Project {
    title: string;
    summary: string;
    description: string;
    site?: string;
    github?: string;
    images: string[];
    videoUrl?: string;
    launchDate: string;
    date: string;
    technologies: string[];
}

const projectsData: Project[] = [
    {
        title: "Game Hub - Hub de Jogos Interativo",
        summary: "Plataforma web que organiza e exibe informações de jogos com filtros inteligentes e interface moderna.",
        description: "Problema: Gamers precisam de uma forma rápida e intuitiva de descobrir e avaliar jogos antes de comprar ou baixar. Solução: Desenvolvi um hub de jogos em React.js 18 e TypeScript que integra com a API do rawg.io, permitindo filtrar por plataforma e gênero, buscar títulos específicos e visualizar detalhes como trailer, imagens e pontuação no Metacritic. Resultado: Interface responsiva com Chakra UI, gerenciamento eficiente de dados com React Query e hooks personalizados, oferecendo uma experiência fluida e informativa para os usuários.",
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
        date: "11/07/2025",
        technologies: ["React.js 18", "TypeScript", "React Query", "Chakra UI", "rawg.io API"]
    },
    {
        title: "BEWEAR - E-commerce Moderno com Next.js",
        summary: "Loja virtual completa com carrinho, autenticação e pagamentos integrados via Stripe.",
        description: "Problema: Pequenos negócios precisam de plataformas de e-commerce funcionais e escaláveis sem depender de soluções prontas limitadas. Solução: Desenvolvi do zero um e-commerce com Next.js e TypeScript, incluindo catálogo de produtos, carrinho de compras, autenticação obrigatória e integração com Stripe para pagamentos. Usei Drizzle ORM para persistência, Zod para validações e Shadcn/ui para interface reutilizável. Resultado: Aplicação escalável, responsiva e otimizada para mobile, pronta para uso real e adaptável às necessidades específicas do cliente.",
        site: "https://bewear-wheat.vercel.app",
        github: "https://github.com/gleekrj/bewear",
        images: ["https://res.cloudinary.com/diun304co/image/upload/v1760726284/portfolio/images/bewear_01_mevnsc.png",
            "https://res.cloudinary.com/diun304co/image/upload/v1760726283/portfolio/images/bewear_02_uqngyg.png",
            "https://res.cloudinary.com/diun304co/image/upload/v1760726282/portfolio/images/bewear_03_art0rr.png",
            "https://res.cloudinary.com/diun304co/image/upload/v1760726286/portfolio/images/bewear_04_z5ov7k.png",
            "https://res.cloudinary.com/diun304co/image/upload/v1760726285/portfolio/images/bewear_05_ovjpel.png",
            "https://res.cloudinary.com/diun304co/image/upload/v1760726283/portfolio/images/bewear_06_lw3d7z.png"
        ],
        videoUrl: "https://res.cloudinary.com/diun304co/video/upload/v1760725674/portfolio/videos/walkthrough_bewear_cqm1bf.mp4",
        launchDate: "Setembro 2025",
        date: "20/09/2025",
        technologies: ["Next.js", "TypeScript", "Drizzle ORM", "Shadcn/ui", "Zod", "Stripe", "React", "Node.js", "Tailwind CSS", "ESLint", "Vercel"]
    },
    {
        title: "Portfólio Pessoal de Fábio Matos",
        summary: "Site profissional moderno e responsivo para apresentação de projetos e serviços.",
        description: "Problema: Profissionais de tecnologia precisam de uma presença digital que demonstre competência técnica e seja fácil de navegar. Solução: Desenvolvi um portfólio completo em React com TypeScript, React Router para navegação, Framer Motion para animações e Tailwind CSS para estilização moderna. O site apresenta projetos detalhados, seção de habilidades técnicas e formulário de contato. Resultado: Plataforma profissional totalmente responsiva, com navegação intuitiva e carregamento otimizado, servindo como vitrine efetiva para clientes e recrutadores.",
        site: "https://fabio-portfolio-kappa.vercel.app/",
        github: "https://github.com/gleekrj/fabio-portfolio",
        images: ["https://res.cloudinary.com/diun304co/image/upload/v1760887069/portfolio/images/Portfolio_01_lalzlg.png",
            "https://res.cloudinary.com/diun304co/image/upload/v1760887071/portfolio/images/Portfolio_02_w9yzbx.png",
            "https://res.cloudinary.com/diun304co/image/upload/v1760887075/portfolio/images/Portfolio_03_yokuvc.png",
            "https://res.cloudinary.com/diun304co/image/upload/v1760887078/portfolio/images/Portfolio_04_eqqoso.png",
            "https://res.cloudinary.com/diun304co/image/upload/v1760887081/portfolio/images/Portfolio_05_ccvjyr.png",
            "https://res.cloudinary.com/diun304co/image/upload/v1760887086/portfolio/images/Portfolio_06_flyzcz.png"
        ],
        videoUrl: "https://res.cloudinary.com/diun304co/video/upload/v1760887101/portfolio/videos/Portfolio_FabioMatos_gdee7e.mp4",
        launchDate: "Outubro 2025",
        date: "07/10/2025",
        technologies: ["React", "React Router", "TypeScript", "Node.js", "Tailwind CSS", "Vite", "Framer Motion", "Cloudinary", "Vercel"]
    },
    {
        title: "Desafio GDash - Climate Data System",
        summary: "Sistema completo de coleta, processamento e visualização de dados climáticos, com pipelines automatizados e APIs REST integradas.",
        description: "Problema: Profissionais de tecnologia precisam de uma presença digital que demonstre competência técnica e seja fácil de navegar. Solução: Desenvolvi um portfólio completo em React com TypeScript, React Router para navegação, Framer Motion para animações e Tailwind CSS para estilização moderna. O site apresenta projetos detalhados, seção de habilidades técnicas e formulário de contato. Resultado: Plataforma profissional totalmente responsiva, com navegação intuitiva e carregamento otimizado, servindo como vitrine efetiva para clientes e recrutadores.",
        site: "https://desafio-gdash-2025-frontend-production.up.railway.app/",
        github: "https://github.com/gleekrj/desafio-gdash-2025",
        images: ["https://res.cloudinary.com/diun304co/image/upload/v1765546907/portfolio/images/Desafio_GDash_1_tesslx.png",
            "https://res.cloudinary.com/diun304co/image/upload/v1765546907/portfolio/images/Desafio_GDash_2_bystys.png",
            "https://res.cloudinary.com/diun304co/image/upload/v1765546907/portfolio/images/Desafio_GDash_3_i7tmw5.jpg",
            "https://res.cloudinary.com/diun304co/image/upload/v1765546908/portfolio/images/Desafio_GDash_4_boqid8.png",
            "https://res.cloudinary.com/diun304co/image/upload/v1765546907/portfolio/images/Desafio_GDash_5_mblvqa.png",
            "https://res.cloudinary.com/diun304co/image/upload/v1765546907/portfolio/images/Desafio_GDash_6_ckszgt.png"
        ],
        launchDate: "Novembro 2025",
        date: "28/11/2025",
        technologies: ["React", "Vite", "TypeScript", "NestJS", "Node.js", "Python", "Go", "Docker", "Docker Compose", "MongoDB", "RabbitMQ", "Swagger", "Tailwind CSS", "ESLint"]
    }
];

export const projects: Project[] = projectsData.sort((a, b) => {
    const [dayA, monthA, yearA] = a.date.split('/').map(Number);
    const [dayB, monthB, yearB] = b.date.split('/').map(Number);

    const dateA = new Date(yearA, monthA - 1, dayA);
    const dateB = new Date(yearB, monthB - 1, dayB);

    return dateB.getTime() - dateA.getTime();
});
