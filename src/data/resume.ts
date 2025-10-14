export interface ResumeData {
    title: string;
    summary: string;
    skills: {
        frontend: string[];
        backend: string[];
        mobile: string[];
        testing: string[];
        devops: string[];
        database: string[];
        languages: string[];
    };
    experience: {
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
    title: "Sou um Desenvolvedor Fullstack e me encontro atualmente no Rio de Janeiro, Brasil",
    summary: "Desenvolvedor Fullstack Júnior com experiência prática em projetos voluntários utilizando React.js, Next.js, Node.js, React Native e Java. Inglês fluente. Forte capacidade de aprendizado, atenção à qualidade do código e experiência colaborativa em times ágeis.\n\nMais de 15 anos de atuação em TI, incluindo papéis de Agile Master, Product Owner e Analista de Requisitos, que fortalecem minha comunicação técnica, visão de produto e entrega de valor — diferenciais aplicados hoje à minha carreira em desenvolvimento de software.",
    skills: {
        frontend: ["React.js", "Next.js", "JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "Tailwind CSS"],
        backend: ["Node.js", "Express", "REST APIs", "Java (OOP, Spring Boot básico)"],
        mobile: ["React Native"],
        testing: ["Jest (básico)", "JUnit (conceitos)", "MVC", "microsserviços (conceitos)", "cache (em estudo)"],
        devops: ["Git/GitHub", "CI/CD (GitHub Actions, Jenkins básico)", "deploy em Vercel/Heroku"],
        database: ["SQL Server", "Oracle", "PostgreSQL", "MySQL", "MongoDB (básico)"],
        languages: ["Português (nativo)", "Inglês/English (Avançado - B2)"]
    },
    experience: [
        {
            title: "Fullstack Developer (Voluntário)",
            company: "Pipoca Ágil – Plataforma de Turismo Sustentável",
            period: "Jul/2025 – Presente",
            description: [
                "Desenvolvimento frontend (React.js + TypeScript) e APIs REST em Node.js.",
                "Deploy inicial em ambiente cloud e integração contínua com GitHub."
            ]
        },
        {
            title: "Fullstack Developer (Voluntário)",
            company: "Pipoca Ágil – Aplicativo Saúde",
            period: "Ago/2024 – Out/2024",
            description: [
                "Criação de telas em React Native e consumo de APIs REST.",
                "Integração com backend Node.js e otimização de performance."
            ]
        },
        {
            title: "Agile Master",
            company: "Ideale.io",
            period: "2024–2025",
            description: [
                "Liderança ágil em clientes como Unimed GO e Ipiranga.",
                "Colaboração direta com equipes de desenvolvimento, reforçando práticas técnicas."
            ]
        },
        {
            title: "Agile Master",
            company: "Dinsmore Compass – Cliente B3",
            period: "2022–2023",
            description: [
                "Adoção de BDD e melhoria de cadência de entregas.",
                "Contato próximo com equipes técnicas."
            ]
        },
        {
            title: "Agile Master",
            company: "Alterdata",
            period: "2021–2022",
            description: [
                "Introdução de métricas e melhoria de performance em squads de desenvolvimento."
            ]
        }
    ],
    education: [
        {
            degree: "Bacharel em Informática",
            institution: "Estácio de Sá",
            year: "06/2005"
        },
        {
            degree: "MBA – Governança, Projetos e Sistemas de TI",
            institution: "UFRJ",
            year: "06/2015"
        }
    ],
    certifications: [
        "PSM (Professional Scrum Master)",
        "Certified Scrum Product Owner (CSPO - Scrum Alliance)",
        "Kanban (KMP1/KMP2)"
    ]
};
