interface TextSegment {
    text: string;
    bold?: boolean;
}

export interface ResumeData {
    title: string;
    summary: TextSegment[][];
    skills: {
        frontend: string[];
        backend: string[];
        mobile: string[];
        testing: string[];
        devops: string[];
        database: string[];
        languages: string[];
    };
    DevExperience: {
        title: string;
        company: string;
        period: string;
        description: string[];
    }[];
    OtherExperience: {
        title: string;
        company: string;
        period: string;
        description: string[];
    }[];
    education: {
        degree: string;
        institution: string;
        year: string;
    }[];
    certifications: string[];
}

export const resumeData: ResumeData = {
    title: "Desenvolvedor Fullstack — Entregando soluções práticas e escaláveis para freelas e empresas.",
    summary: [
        [
            { text: "Desenvolvedor Fullstack com experiência prática em " },
            { text: "React.js, Node.js, React Native e Java", bold: true },
            { text: ", entregando projetos completos que incluem " },
            { text: "interfaces responsivas, APIs REST e integrações entre front e backend", bold: true },
            { text: "." }
        ],
        [
            { text: "Com mais de " },
            { text: "15 anos de experiência em TI", bold: true },
            { text: ", incluindo análise de sistemas, gestão ágil e trabalho direto com times de desenvolvimento, combino " },
            { text: "visão de produto com execução técnica", bold: true },
            { text: " para entregar valor real." }
        ],
        [
            { text: "Aprendo rápido, aplico " },
            { text: "boas práticas de código", bold: true },
            { text: " e busco sempre " },
            { text: "soluções simples, eficazes e escaláveis", bold: true },
            { text: ". " },
            { text: "Disponível para projetos freelance e oportunidades fixas", bold: true },
            { text: "." }
        ],
        [
            { text: "Inglês fluente (B2)", bold: true },
            { text: " — Rio de Janeiro, Brasil." }
        ]
    ],
    skills: {
        frontend: ["React.js", "Next.js", "JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "Tailwind CSS"],
        backend: ["Node.js", "Express", "REST APIs", "Java"],
        mobile: ["React Native"],
        testing: ["Jest (básico)", "JUnit (conceitos)", "MVC", "microsserviços (conceitos)", "cache (em estudo)"],
        devops: ["Git/GitHub", "CI/CD (GitHub Actions, Jenkins básico)", "deploy em Vercel/Heroku"],
        database: ["SQL Server", "Oracle", "PostgreSQL", "MySQL", "MongoDB (básico)"],
        languages: ["Inglês/English (Avançado - B2)", "Português (nativo)", "Espanhol (básico)"]
    },
    DevExperience: [
        {
            title: "Fullstack Developer (Voluntário)",
            company: "Pipoca Ágil - Plataforma de Turismo Sustentável",
            period: "Jul/2025 - Presente",
            description: [
                "Desenvolvimento de componentes front-end interativos e APIs de integração",
                "Implementação de funcionalidades com persistência de dados e versionamento no Git.",
                "Colaboração em equipe multidisciplinar, revisão de código e deploy em ambiente de produção."
            ]
        },
        {
            title: "Fullstack Developer (Voluntário)",
            company: "Pipoca Ágil - Aplicativo Saúde",
            period: "Ago/2024 - Out/2024",
            description: [
                "Desenvolvimento de telas e fluxos de usuário em React Native, consumo de APIs REST e tratamento de dados locais.",
                "Apoio à integração com backend e melhorias de performance no app."
            ]
        }],
    OtherExperience: [
        {
            title: "Analista de Sistemas / Agile Master",
            company: "Ideale Tech",
            period: "Out/2024 - Ago/2025",
            description: [
                "Atuação com equipes técnicas em clientes como Unimed GO, Ipiranga e Vivest, integrando práticas ágeis e visão de produto.",
                "Colaboração direta com desenvolvedores, ampliando repertório técnico e entendimento de arquitetura de sistemas."
            ]
        },
        {
            title: "Agile Master",
            company: "Dinsmore Compass (Cliente B3)",
            period: "Mar/2022 - Jul/2023",
            description: [
                "Apoio técnico a times de desenvolvimento na adoção de práticas BDD e melhoria de entregas.",
                "Experiência próxima a DEVs reforçando entendimento de pipelines, automação e métricas de performance."
            ]
        },
        {
            title: "Agile Master",
            company: "Alterdata Software",
            period: "Out/2021 - Jan/2022",
            description: [
                "Acompanhamento de squads de desenvolvimento e melhoria de processos.",
                "Aplicação de métricas ágeis e suporte técnico ao ciclo de entrega contínua."
            ]
        }
    ],
    education: [
        {
            degree: "Bacharel em Informática",
            institution: "Estácio de Sá",
            year: "01/2001 - 06/2005"
        },
        {
            degree: "MBA - Governança, Projetos e Sistemas de TI",
            institution: "Escola Politécnica da UFRJ",
            year: "01/2014 - 06/2015"
        }
    ],
    certifications: [
        "Professional Scrum Master (PSM I - Scrum.org)",
        "Certified Scrum Product Owner (CSPO - Scrum Alliance)",
        "Kanban System Design (KSD/KMP1 - Kanban University)",
        "Kanban Systems Improvement (KSI / KMP2 - Kanban University)",
        "Bootcamp - E-commerce com React e Node.js (Full Stack Club)",
        "React 18 Intermediate Topics (Code With Mosh)",
        "Java OOP - Formação Aprenda a Programar com Orientação a Objetos (Alura)",
    ]
};
