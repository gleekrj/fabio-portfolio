import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import avatar from "@/assets/avatar.png";

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
  const aboutText = `Meu nome é Fábio Matos, sou desenvolvedor Fullstack e tenho 15 anos de experiência em TI. Nos últimos anos, fiz a transição de Analista de Sistemas para desenvolvedor, e hoje aplico toda essa bagagem em projetos práticos e bem estruturados.

Passei mais de uma década trabalhando como Agile Master, Product Owner e Analista de Requisitos em empresas como B3, Petrobras, TV Globo e Bradesco. Essa vivência me ensinou a traduzir necessidades em soluções reais, a entender o valor de uma boa entrega e a trabalhar bem com times de desenvolvimento. Eu sabia o que precisava ser construído — agora, sei como construir.

Em 2024, decidi mergulhar no código. Comecei com React, Node.js e Java, e desde então tenho desenvolvido projetos voluntários e pessoais que envolvem desde landing pages até aplicativos mobile e APIs completas. Trabalho com React.js, Next.js, Node.js, TypeScript, Tailwind CSS, PostgreSQL, MySQL e React Native. Também tenho experiência com Git/GitHub, CI/CD, deploy em Vercel e Heroku, além de inglês fluente.

O que me diferencia é a combinação única de visão técnica e visão de produto. Sei pensar no problema antes de pensar no código, entendo o impacto de cada decisão e consigo transitar bem entre negócio e desenvolvimento. Sou paciente, organizado e gosto de resolver problemas de forma simples e eficaz.

Estou disponível para projetos freelance e oportunidades fixas. Se você precisa de um desenvolvedor que entende não só de código, mas também de contexto, que se comunica bem e que entrega com consistência, vamos conversar.`;

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
                <Card className="w-80 overflow-hidden bg-gradient-to-br from-blue-500 to-orange-500 border-0">
                  <CardContent className="p-6 flex flex-col items-center justify-center">
                    <div className="w-56 h-56 rounded-full overflow-hidden mb-6 border-4 border-white shadow-xl bg-gradient-to-br from-orange-500 to-blue-500">
                      <img
                        src={avatar}
                        alt="Fábio Matos"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-center text-white">
                      <div className="text-xl font-bold mb-2">Fábio Matos</div>
                      <div className="text-sm opacity-90">
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
