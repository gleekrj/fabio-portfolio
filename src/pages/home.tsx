import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Globe, Github, Calendar, Play, Expand, Send } from "lucide-react";
import { technologies } from "@/data/technologies";
import { projects } from "@/data/projects";
import { Services } from "@/components/Services";
import { Link } from "react-router-dom";

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

export const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Olá, eu sou o{" "}
              <span className="text-orange-500 dark:text-orange-400">
                Fábio Matos
              </span>
            </h1>
            <p className="text-2xl sm:text-3xl font-semibold text-gray-700 dark:text-gray-200 max-w-3xl mx-auto leading-relaxed mb-8">
              Transformo ideias em aplicações{" "}
              <span className="text-orange-500 dark:text-orange-400">
                simples
              </span>
              ,{" "}
              <span className="text-orange-500 dark:text-orange-400">
                funcionais
              </span>{" "}
              e{" "}
              <span className="text-orange-500 dark:text-orange-400">
                prontas{" "}
              </span>
              para o mercado
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
              Com 15 anos de experiência em análise de sistemas e foco em
              desenvolvimento full stack, entrego soluções completas que
              resolvem problemas reais.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                asChild
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8"
              >
                <Link to="/contact">
                  <Send className="h-5 w-5 mr-2" />
                  Peça um Orçamento
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-lg px-8"
              >
                <a href="#projects">Ver Projetos</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <Services />

      {/* Technologies Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2
              variants={itemVariants}
              className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12"
            >
              Habilidades
            </motion.h2>
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-3 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-4"
            >
              {technologies.map((tech) => (
                <motion.div key={tech.name} variants={itemVariants}>
                  <Card className="h-24 flex flex-col items-center justify-center p-3 hover:shadow-lg transition-shadow duration-300 bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600">
                    <CardContent className="flex flex-col items-center justify-center h-full p-0 gap-1">
                      <tech.icon className="h-8 w-8 text-orange-500 dark:text-orange-400" />
                      <span className="text-xs font-medium text-gray-700 dark:text-gray-300 text-center leading-tight">
                        {tech.name}
                      </span>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Projetos Recentes
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Confira alguns dos projetos que desenvolvi, desde aplicações web
                completas até integrações e soluções mobile.
              </p>
            </motion.div>
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {projects.map((project) => (
                <motion.div key={project.title} variants={itemVariants}>
                  <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600">
                    <div className="aspect-video overflow-hidden bg-gradient-to-br from-blue-500 to-orange-500 flex items-center justify-center relative">
                      {project.images[0] &&
                      project.images[0].startsWith("http") ? (
                        <img
                          src={project.images[0]}
                          alt={project.title}
                          className="w-full h-full object-cover absolute inset-0"
                        />
                      ) : (
                        <div className="text-white text-center">
                          <div className="text-4xl font-bold mb-2">FM</div>
                          <div className="text-sm opacity-90">
                            {project.title}
                          </div>
                        </div>
                      )}
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                        {project.summary}
                      </p>
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                        <Calendar className="h-4 w-4 mr-2" />
                        {project.launchDate}
                      </div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300 text-xs rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-2 py-1 bg-gray-100 dark:bg-gray-600 text-gray-600 dark:text-gray-400 text-xs rounded-full">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>
                      <div className="flex gap-2">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button
                              variant="outline"
                              size="sm"
                              className="flex-1 cursor-pointer"
                            >
                              <Play className="h-4 w-4 mr-2" />
                              Ver Detalhes
                            </Button>
                          </DialogTrigger>
                          <DialogContent
                            className="max-w-4xl max-h-[90vh] overflow-y-auto p-4 sm:p-6"
                            aria-describedby={undefined}
                          >
                            <DialogHeader>
                              <DialogTitle className="text-2xl font-bold text-gray-900 dark:text-white">
                                {project.title}
                              </DialogTitle>
                            </DialogHeader>
                            <div className="space-y-4">
                              {project.videoUrl && (
                                <Dialog modal={false}>
                                  <DialogTrigger asChild>
                                    <div className="relative aspect-video rounded-lg overflow-hidden bg-black cursor-pointer group">
                                      <video
                                        src={project.videoUrl}
                                        controls
                                        className="w-full h-full"
                                      >
                                        Seu navegador não suporta vídeos.
                                      </video>
                                      <div className="absolute top-2 right-2 bg-black/50 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                                        <Expand className="h-4 w-4 text-white" />
                                      </div>
                                    </div>
                                  </DialogTrigger>
                                  <DialogContent
                                    className="!max-w-[95vw] !w-[95vw] sm:!max-w-[60vw] sm:!w-[60vw] max-h-[95vh] p-2"
                                    aria-describedby={undefined}
                                  >
                                    <DialogTitle className="sr-only">
                                      Vídeo do projeto {project.title}
                                    </DialogTitle>
                                    <video
                                      src={project.videoUrl}
                                      controls
                                      autoPlay
                                      className="w-full h-full rounded-lg"
                                    >
                                      Seu navegador não suporta vídeos.
                                    </video>
                                  </DialogContent>
                                </Dialog>
                              )}
                              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                                <Calendar className="h-4 w-4 mr-2" />
                                Lançado em {project.launchDate}
                              </div>
                              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                {project.description}
                              </p>
                              <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech) => (
                                  <span
                                    key={tech}
                                    className="px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300 text-sm rounded-full"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                              <div className="relative px-12">
                                <Carousel className="w-full">
                                  <CarouselContent>
                                    {project.images.map((image, index) => (
                                      <CarouselItem key={index}>
                                        <Dialog modal={false}>
                                          <DialogTrigger asChild>
                                            <div className="aspect-video rounded-lg overflow-hidden bg-gradient-to-br from-blue-500 to-orange-500 flex items-center justify-center relative cursor-pointer group">
                                              {image.startsWith("http") ? (
                                                <>
                                                  <img
                                                    src={image}
                                                    alt={`${project.title} - ${
                                                      index + 1
                                                    }`}
                                                    className="w-full h-full object-cover absolute inset-0"
                                                  />
                                                  <div className="absolute top-2 right-2 bg-black/50 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10">
                                                    <Expand className="h-4 w-4 text-white" />
                                                  </div>
                                                </>
                                              ) : (
                                                <div className="text-white text-center">
                                                  <div className="text-6xl font-bold mb-2">
                                                    FM
                                                  </div>
                                                  <div className="text-lg opacity-90">
                                                    {project.title}
                                                  </div>
                                                </div>
                                              )}
                                            </div>
                                          </DialogTrigger>
                                          <DialogContent
                                            className="!max-w-[95vw] !w-[95vw] sm:!max-w-[60vw] sm:!w-[60vw] max-h-[95vh] p-2"
                                            aria-describedby={undefined}
                                          >
                                            <DialogTitle className="sr-only">
                                              Imagem {index + 1} do projeto{" "}
                                              {project.title}
                                            </DialogTitle>
                                            <img
                                              src={image}
                                              alt={`${project.title} - ${
                                                index + 1
                                              }`}
                                              className="w-full h-full object-contain rounded-lg"
                                            />
                                          </DialogContent>
                                        </Dialog>
                                      </CarouselItem>
                                    ))}
                                  </CarouselContent>
                                  <CarouselPrevious />
                                  <CarouselNext />
                                </Carousel>
                              </div>
                              <div className="flex gap-2 pt-4">
                                {project.github && (
                                  <Button asChild variant="outline" size="sm">
                                    <a
                                      href={project.github}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                    >
                                      <Github className="h-4 w-4 mr-2" />
                                      Código
                                    </a>
                                  </Button>
                                )}
                                {project.site && (
                                  <Button asChild variant="default" size="sm">
                                    <a
                                      href={project.site}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                    >
                                      <Globe className="h-4 w-4 mr-2" />
                                      Acessar Projeto
                                    </a>
                                  </Button>
                                )}
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>
                        {project.github && (
                          <Button asChild size="icon" variant="outline">
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              title="Código"
                            >
                              <Github className="h-4 w-4" />
                            </a>
                          </Button>
                        )}
                        {project.site && (
                          <Button asChild size="icon">
                            <a
                              href={project.site}
                              target="_blank"
                              rel="noopener noreferrer"
                              title="Acessar Projeto"
                            >
                              <Globe className="h-4 w-4" />
                            </a>
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
