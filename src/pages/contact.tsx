import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Instagram, Send } from "lucide-react";

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
      icon: Mail,
      title: "E-mail",
      value: "fabio.henrique.ss.matos@gmail.com",
      link: "mailto:fabio.henrique.ss.matos@gmail.com",
      description: "Entre em contato por e-mail",
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
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Vamos conversar sobre oportunidades e projetos interessantes!
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
            <Card className="bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 dark:text-white text-center">
                  Vamos Trabalhar Juntos?
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="text-center space-y-4">
                  <p className="text-gray-600 dark:text-gray-300 text-lg">
                    Estou sempre aberto a novas oportunidades e desafios. Se
                    você tem um projeto interessante ou uma vaga que combine com
                    meu perfil, não hesite em entrar em contato!
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                      asChild
                      size="lg"
                      className="bg-orange-500 hover:bg-orange-600 text-white"
                    >
                      <a href="mailto:fabio.henrique.ss.matos@gmail.com">
                        <Send className="h-5 w-5 mr-2" />
                        Enviar E-mail
                      </a>
                    </Button>
                    <Button asChild variant="outline" size="lg">
                      <a
                        href="https://linkedin.com/in/fabio-matos"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Linkedin className="h-5 w-5 mr-2" />
                        LinkedIn
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
