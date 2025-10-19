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
        description: "O Game Hub é um projeto frontend criado para organizar e exibir informações de jogos de forma intuitiva e dinâmica. Nele, o usuário pode filtrar jogos por plataforma e gênero, pesquisar títulos específicos e visualizar detalhes como trailer, imagens e pontuação no Metacritic, além de conferir um indicador visual que mostra se o jogo “vale a pena jogar”. O frontend foi desenvolvido com React.js 18 e TypeScript, utilizando hooks personalizados para facilitar a manutenção e React Query para gerenciar os dados obtidos da API do rawg.io. A interface foi construída com Chakra UI, garantindo um visual limpo e responsivo.",
        site: "https://game-hub2-omega.vercel.app/",
        github: "https://github.com/gleekrj/game-hub2",
        images: [
            "https://res.cloudinary.com/diun304co/image/upload/v1760651133/game_hub/images/GameHub_01_yfprvy.png",
            "https://res.cloudinary.com/diun304co/image/upload/v1760651133/game_hub/images/GameHub_02_srvvtn.png",
            "https://res.cloudinary.com/diun304co/image/upload/v1760651133/game_hub/images/GameHub_03_mmdlrb.png",
            "https://res.cloudinary.com/diun304co/image/upload/v1760651133/game_hub/images/GameHub_04_jrpvik.png",
            "https://res.cloudinary.com/diun304co/image/upload/v1760651133/game_hub/images/GameHub_05_uys7fy.png"
        ],
        videoUrl: "https://res.cloudinary.com/diun304co/video/upload/v1760651199/game_hub/videos/GameHub_Video_klg9w6.mp4",
        launchDate: "Julho 2025",
        technologies: ["React.js 18", "TypeScript", "React Query", "Chakra UI", "rawg.io API"]
    },
    {
        title: "BEWEAR - E-commerce Moderno com Next.js",
        summary: "Um e-commerce completo foi desenvolvido com autenticação, carrinho e integração com pagamentos via Stripe. O projeto foi construído com tecnologias modernas do ecossistema React e otimizado para mobile, priorizando escalabilidade e boas práticas de desenvolvimento.",
        description: "O BEWEAR é um e-commerce desenvolvido do zero para demonstrar a construção de uma aplicação real e escalável com Next.js e TypeScript. A aplicação permite que o usuário explore produtos, adicione itens ao carrinho e realize compras utilizando o Stripe em modo de teste. Conta com autenticação obrigatória para concluir pedidos e validações de formulário feitas com Zod. O projeto utiliza Drizzle ORM para modelagem e persistência dos dados, Shadcn/ui para criação de componentes de interface reutilizáveis e foi otimizado para dispositivos móveis, garantindo uma experiência fluida e moderna.",
        site: "https://bewear-wheat.vercel.app",
        github: "https://github.com/gleekrj/bewear",
        images: ["https://res.cloudinary.com/diun304co/image/upload/v1760726284/bewear/images/bewear_01_mevnsc.png",
            "https://res.cloudinary.com/diun304co/image/upload/v1760726283/bewear/images/bewear_02_uqngyg.png",
            "https://res.cloudinary.com/diun304co/image/upload/v1760726282/bewear/images/bewear_03_art0rr.png",
            "https://res.cloudinary.com/diun304co/image/upload/v1760726286/bewear/images/bewear_04_z5ov7k.png",
            "https://res.cloudinary.com/diun304co/image/upload/v1760726285/bewear/images/bewear_05_ovjpel.png",
            "https://res.cloudinary.com/diun304co/image/upload/v1760726283/bewear/images/bewear_06_lw3d7z.png"
        ],
        videoUrl: "https://res.cloudinary.com/diun304co/video/upload/v1760725674/bewear/videos/walkthrough_bewear_cqm1bf.mp4",
        launchDate: "Setembro 2025",
        technologies: ["Next.js", "TypeScript", "Drizzle ORM", "Shadcn/ui", "Zod", "Stripe", "React", "Node.js", "Tailwind CSS", "ESLint", "Vercel"]
    },
    {
        title: "Portfólio Pessoal de Fábio Matos",
        summary: "Um portfólio moderno e responsivo, projetado para apresentar meus projetos, habilidades e experiências como desenvolvedor, com foco em clareza, usabilidade e estética profissional.",
        description: "Este portfólio foi desenvolvido como uma vitrine do meu trabalho e aprendizado em desenvolvimento web. Ele apresenta projetos detalhados, descrevendo tecnologias utilizadas, desafios superados e soluções implementadas. A interface é intuitiva, responsiva e otimizada para diferentes dispositivos, garantindo que visitantes possam navegar facilmente e conhecer meu perfil profissional de forma completa. Além disso, o portfólio serve como uma demonstração prática das minhas habilidades em frontend, backend e integração de APIs.",
        site: "https://fabio-portfolio-kappa.vercel.app/",
        github: "https://github.com/gleekrj/fabio-portfolio",
        images: ["/project-portfolio.jpg"],
        launchDate: "Outubro 2025",
        technologies: ["React", "React Router", "TypeScript", "Node.js", "Tailwind CSS", "Vite", "Framer Motion", "Cloudinary", "Vercel"]
    }
];
