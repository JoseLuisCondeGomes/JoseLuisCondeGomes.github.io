import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import spvending from "@/assets/images/SPVending-manager.png";

const Projects = () => {
  const projects = [
    {
      title: "SPVending Manager",
      description: "Aplicación web que permite la gestión de empresas de padel, clubs, maquinas y administradores hecha con React, Node.js. Incluye arquitectura hexagonal y funciones CRUD hacia una API en Springboot.",
      image: spvending,
      tech: ["React","Typescript" , "Node.js", "Docker"],
      liveUrl: "#",
      githubUrl: "https://github.com/JoseLuCG/SPVending-manager",
      featured: true
    },
    {
      title: "Bloomly",
      description: "Aplicación de interacción social en la que los usuarios interactuan en función de sus intereses o localización.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
      tech: ["Vue.js", "Firebase", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "AI-Powered Dashboard",
      description: "Dashboard de analíticas potenciado por IA con visualizaciones interactivas y predicciones en tiempo real para empresas.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      tech: ["Next.js", "Python", "TensorFlow", "D3.js"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Social Media App",
      description: "Red social centrada en compartir experiencias creativas. Incluye chat en tiempo real, stories y sistema de likes.",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=500&h=300&fit=crop",
      tech: ["React Native", "Socket.io", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Blockchain Wallet",
      description: "Wallet segura para criptomonedas con interfaz intuitiva y soporte para múltiples blockchains. Enfoque en seguridad y UX.",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=500&h=300&fit=crop",
      tech: ["TypeScript", "Web3.js", "Ethereum", "React"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Learning Platform",
      description: "Plataforma educativa online con cursos interactivos, sistema de progreso y certificaciones automáticas.",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=500&h=300&fit=crop",
      tech: ["Laravel", "Vue.js", "MySQL", "Redis"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient-primary">Mis Proyectos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Una selección de proyectos que demuestran mis habilidades técnicas y creatividad
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className={`group relative overflow-hidden border-border/50 backdrop-blur-sm transition-smooth hover:shadow-elevated hover:glow-accent ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-smooth group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
                
                {project.featured && (
                  <Badge className="absolute top-4 right-4 bg-gradient-secondary text-white border-0">
                    Destacado
                  </Badge>
                )}
              </div>

              <CardHeader>
                <CardTitle className="text-xl font-bold group-hover:text-gradient-primary transition-smooth">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-4 pt-4">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 border-primary/20 hover:border-primary hover:glow-accent transition-smooth"
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Ver Demo
                    </a>
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-primary/20 hover:border-primary hover:glow-accent transition-smooth"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;