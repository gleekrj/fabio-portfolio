import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const About = () => {
  const aboutText = `Meu nome é Fábio Matos, tenho 44 anos e sou desenvolvedor Fullstack. Moro aqui no Rio de Janeiro e estou em busca de oportunidades onde eu possa colocar em prática tudo que venho construindo nos últimos anos.

Minha trajetória em TI tem mais de 15 anos, mas confesso que passei a maior parte desse tempo "do outro lado da mesa" — fui Agile Master, Product Owner, Scrum Master e Analista de Requisitos em empresas como B3, Petrobras, TV Globo, Bradesco e outras. Trabalhei direto com times de desenvolvimento, ajudei a estruturar processos, facilitei entregas e aprendi muito sobre como software se constrói de verdade.

Mas chegou um momento em que olhar o código sendo escrito não era mais suficiente. Eu queria escrever também. Então, em 2024, decidi mergulhar de cabeça no desenvolvimento. Comecei com React, Node.js e Java, fiz projetos voluntários pela Pipoca Ágil (um aplicativo de saúde em React Native e uma plataforma de turismo sustentável com React + TypeScript) e fui aprendendo na prática mesmo — fazendo, errando, refatorando, testando.

Hoje trabalho com React.js, Next.js, Node.js, Express, TypeScript, Tailwind CSS e tenho uma base sólida em bancos relacionais (PostgreSQL, MySQL, SQL Server) e conceitos de MongoDB. Também conheço Java com Spring Boot no nível básico, uso Git/GitHub diariamente, já mexi com CI/CD (GitHub Actions e Jenkins) e faço deploy em Vercel e Heroku. Ah, e falo inglês fluente (B2), o que ajuda bastante na hora de ler documentação ou trocar ideia com a comunidade.

O que me diferencia? Eu diria que é a combinação de visão técnica com visão de produto. Sei pensar no usuário final, entendo o valor de uma entrega bem feita e consigo transitar bem entre o time de negócio e o time de dev. Aprendo rápido, me adapto fácil a novos contextos e gosto de trabalhar em times colaborativos — aqueles onde todo mundo ajuda todo mundo.

Estou procurando posições júnior em Fullstack, Frontend ou Backend. Sei que ainda tenho muito a aprender, mas também sei que trago uma bagagem diferente, que pode agregar bastante ao time. Tenho consciência de que a senioridade técnica vem com tempo e prática, mas posso garantir comprometimento, vontade de crescer e uma entrega consistente desde o primeiro dia.

Se você está montando um time que valoriza pessoas que aprendem rápido, que se comunicam bem e que topam encarar desafios, acho que a gente pode se dar muito bem.`;

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12"
          >
            Sobre Mim
          </motion.h1>

          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
          >
            {/* Photo */}
            <div className="flex justify-center lg:justify-end">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="w-80 h-80 overflow-hidden bg-gradient-to-br from-blue-500 to-orange-500 border-0">
                  <CardContent className="p-0 h-full flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="text-8xl font-bold mb-4">FM</div>
                      <div className="text-xl opacity-90">Fábio Matos</div>
                      <div className="text-sm opacity-75 mt-2">
                        Desenvolvedor Fullstack
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Text */}
            <div className="space-y-6">
              <motion.div variants={itemVariants}>
                <Card className="bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600">
                  <CardContent className="p-8">
                    <div className="prose prose-gray dark:prose-invert max-w-none">
                      {aboutText.split("\n\n").map((paragraph, index) => (
                        <motion.p
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1, duration: 0.5 }}
                          className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6"
                        >
                          {paragraph}
                        </motion.p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
