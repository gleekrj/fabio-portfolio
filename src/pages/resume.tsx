import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, MapPin } from "lucide-react";
import { resumeData } from "@/data/resume";

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

export const Resume = () => {
  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Currículo
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
              {resumeData.title}
            </p>
            <div className="flex items-center justify-center text-gray-500 dark:text-gray-400 mb-6">
              <MapPin className="h-5 w-5 mr-2" />
              <span>Rio de Janeiro, Brasil</span>
            </div>
            <div className="max-w-3xl mx-auto bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500 p-6 rounded-r-lg">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                <strong className="text-orange-600 dark:text-orange-400">
                  Profissional com 15 anos de experiência em TI
                </strong>
                , especializado em análise de sistemas e desenvolvedor full
                stack. Combino visão estratégica com execução técnica para
                entregar soluções que funcionam.
              </p>
            </div>
          </motion.div>

          {/* Summary */}
          <motion.div variants={itemVariants} className="mb-12">
            <Card className="bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 dark:text-white">
                  Resumo Profissional
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose prose-gray dark:prose-invert max-w-none">
                  {resumeData.summary.map((paragraph, paragraphIndex) => (
                    <p
                      key={paragraphIndex}
                      className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4"
                    >
                      {paragraph.map((segment, segmentIndex) =>
                        segment.bold ? (
                          <strong key={segmentIndex}>{segment.text}</strong>
                        ) : (
                          <span key={segmentIndex}>{segment.text}</span>
                        )
                      )}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Dev Experience */}
          <motion.div variants={itemVariants} className="mb-12">
            <Card className="bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 dark:text-white">
                  Experiência em Desenvolvimento
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {resumeData.DevExperience.map((exp, index) => (
                    <div
                      key={index}
                      className="border-l-4 border-orange-500 pl-6"
                    >
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {exp.title}
                      </h3>
                      <p className="text-orange-500 dark:text-orange-400 font-medium">
                        {exp.company}
                      </p>
                      <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">
                        {exp.period}
                      </p>
                      <ul className="space-y-1">
                        {exp.description.map((desc, descIndex) => (
                          <li
                            key={descIndex}
                            className="text-gray-600 dark:text-gray-300 flex items-start"
                          >
                            <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                            {desc}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Other Experience */}

          <motion.div variants={itemVariants} className="mb-12">
            <Card className="bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 dark:text-white">
                  Experiência em Outras Áreas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {resumeData.OtherExperience.map((exp, index) => (
                    <div
                      key={index}
                      className="border-l-4 border-orange-500 pl-6"
                    >
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {exp.title}
                      </h3>
                      <p className="text-orange-500 dark:text-orange-400 font-medium">
                        {exp.company}
                      </p>
                      <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">
                        {exp.period}
                      </p>
                      <ul className="space-y-1">
                        {exp.description.map((desc, descIndex) => (
                          <li
                            key={descIndex}
                            className="text-gray-600 dark:text-gray-300 flex items-start"
                          >
                            <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                            {desc}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Skills */}
          <motion.div variants={itemVariants} className="mb-12">
            <Card className="bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 dark:text-white">
                  Habilidades Técnicas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {Object.entries(resumeData.skills).map(
                    ([category, skills]) => (
                      <div key={category}>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 capitalize">
                          {category}
                        </h3>
                        <ul className="space-y-2">
                          {skills.map((skill, index) => (
                            <li
                              key={index}
                              className="flex items-center text-gray-600 dark:text-gray-300"
                            >
                              <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 flex-shrink-0"></span>
                              {skill}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Education */}
          <motion.div variants={itemVariants} className="mb-12">
            <Card className="bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 dark:text-white">
                  Formação Acadêmica, Certificações e Cursos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Formação Acadêmica
                    </h3>
                    <div className="space-y-4">
                      {resumeData.education.map((edu, index) => (
                        <div
                          key={index}
                          className="border-l-4 border-orange-500 pl-6"
                        >
                          <h4 className="font-medium text-gray-900 dark:text-white">
                            {edu.degree}
                          </h4>
                          <p className="text-orange-500 dark:text-orange-400">
                            {edu.institution}
                          </p>
                          <p className="text-gray-500 dark:text-gray-400 text-sm">
                            {edu.year}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Certificações e Cursos
                    </h3>
                    <ul className="space-y-2">
                      {resumeData.certifications.map((cert, index) => (
                        <li
                          key={index}
                          className="text-gray-600 dark:text-gray-300 flex items-center"
                        >
                          <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 flex-shrink-0"></span>
                          {cert}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className="flex flex-col items-center gap-4 mt-8">
              <p className="text-center text-gray-600 dark:text-gray-300">
                Confira meu currículo completo ou conecte-se comigo no LinkedIn
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-orange-500 hover:bg-orange-600 text-white"
                >
                  <a
                    href="http://github.com/gleekrj/portfolio-files/raw/main/FabioMatos_Curriculo.pdf"
                    download
                  >
                    <Download className="h-5 w-5 mr-2" />
                    Baixar CV
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-orange-500 text-orange-500 hover:bg-orange-50 dark:hover:bg-orange-900/20"
                >
                  <a
                    href="https://www.linkedin.com/in/fabio-matos/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
