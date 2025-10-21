import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Instagram, Send } from "lucide-react";

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

export const Contact = () => {
  const contactInfo = [
    {
      icon: Github,
      title: "Github",
      value: "@gleekrj",
      link: "https://github.com/gleekrj",
      description: "Confira meus projetos no Github",
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "@fabio-matos",
      link: "https://linkedin.com/in/fabio-matos",
      description: "Conecte-se comigo no LinkedIn",
    },
    {
      icon: Instagram,
      title: "Instagram",
      value: "@gleekrj",
      link: "https://www.instagram.com/gleekrj/",
      description: "Siga-me no Instagram",
    },
  ];

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Entre em Contato
            </h1>
            <p className="text-2xl font-semibold text-orange-500 dark:text-orange-400 mb-4">
              Precisa de um desenvolvedor confiável para seu projeto?
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Estou disponível para freelas e oportunidades fixas. Vamos
              conversar sobre como posso ajudar a transformar sua ideia em
              realidade.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          >
            {contactInfo.map((contact) => (
              <motion.div
                key={contact.title}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="h-full bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6 text-center">
                    <contact.icon className="h-12 w-12 text-orange-500 dark:text-orange-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {contact.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {contact.description}
                    </p>
                    <Button asChild variant="outline" className="w-full">
                      <a
                        href={contact.link}
                        target={
                          contact.link.startsWith("http") ? "_blank" : "_self"
                        }
                        rel={
                          contact.link.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                      >
                        {contact.value}
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 border-orange-200 dark:border-orange-700">
              <CardHeader>
                <CardTitle className="text-3xl text-gray-900 dark:text-white text-center">
                  Vamos Trabalhar Juntos?
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="text-center space-y-6">
                  <p className="text-gray-700 dark:text-gray-200 text-lg font-medium">
                    Se você está procurando um desenvolvedor que entende de
                    negócio, se comunica bem e entrega soluções práticas, chegou
                    ao lugar certo.
                  </p>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      Entre em contato para:
                    </p>
                    <ul className="text-left text-gray-700 dark:text-gray-200 space-y-2 max-w-md mx-auto">
                      <li className="flex items-start">
                        <span className="text-orange-500 mr-2">✓</span>
                        Solicitar um orçamento para seu projeto
                      </li>
                      <li className="flex items-start">
                        <span className="text-orange-500 mr-2">✓</span>
                        Discutir oportunidades de colaboração
                      </li>
                      <li className="flex items-start">
                        <span className="text-orange-500 mr-2">✓</span>
                        Esclarecer dúvidas sobre serviços
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-col gap-4 items-center pt-4">
                    <p className="text-base sm:text-xl md:text-2xl font-semibold text-orange-600 dark:text-orange-400 break-all px-4">
                      fabio.henrique.ss.matos@gmail.com
                    </p>
                    <Button
                      asChild
                      size="lg"
                      className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8"
                    >
                      <a href="mailto:fabio.henrique.ss.matos@gmail.com">
                        <Send className="h-5 w-5 mr-2" />
                        Fale Comigo Agora
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
