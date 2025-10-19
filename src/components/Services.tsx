import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Smartphone, Globe, FileText } from "lucide-react";

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

interface Service {
  icon: typeof Code;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: Globe,
    title: "Landing Pages Modernas",
    description:
      "Sites responsivos e otimizados com React, Next.js e Tailwind CSS, prontos para converter visitantes em clientes.",
  },
  {
    icon: Code,
    title: "APIs e Integrações",
    description:
      "Desenvolvimento de APIs REST em Node.js e integrações com serviços externos para automatizar processos.",
  },
  {
    icon: Smartphone,
    title: "Aplicativos Mobile",
    description:
      "Apps funcionais em React Native, com foco em usabilidade e desempenho para iOS e Android.",
  },
  {
    icon: FileText,
    title: "Consultoria e Documentação",
    description:
      "Análise de requisitos, documentação técnica e orientação estratégica para projetos de software.",
  },
];

export const Services = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Serviços
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Ofereço soluções completas em desenvolvimento web e mobile, do
              planejamento à entrega final.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {services.map((service) => (
              <motion.div key={service.title} variants={itemVariants}>
                <Card className="h-full hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600">
                  <CardHeader>
                    <service.icon className="h-12 w-12 text-orange-500 dark:text-orange-400 mb-4" />
                    <CardTitle className="text-xl text-gray-900 dark:text-white">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
