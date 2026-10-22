import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Palette, Rocket, Users } from "lucide-react";

const About = () => {
  const skills = [
    { category: "Frontend", items: ["React", "Vue.js", "TypeScript", "Tailwind CSS", "Next.js"] },
    { category: "Backend", items: ["Node.js", "Python", "Laravel", "PostgreSQL", "MongoDB"] },
    { category: "Tools", items: ["Git", "Docker", "AWS", "Figma", "Webpack"] },
    { category: "Mobile", items: ["React Native", "Flutter", "iOS", "Android"] }
  ];

  const values = [
    {
      icon: <Code className="w-8 h-8 text-primary" />,
      title: "Código Limpio",
      description: "Escribo código mantenible, escalable y bien documentado siguiendo las mejores prácticas."
    },
    {
      icon: <Palette className="w-8 h-8 text-primary" />,
      title: "Diseño Centrado",
      description: "Creo interfaces intuitivas que ofrecen experiencias de usuario excepcionales."
    },
    {
      icon: <Rocket className="w-8 h-8 text-primary" />,
      title: "Innovación",
      description: "Siempre busco nuevas tecnologías y enfoques para resolver problemas complejos."
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Colaboración",
      description: "Trabajo efectivamente en equipos multidisciplinarios para lograr objetivos comunes."
    }
  ];

  return (
    <section id="about" className="py-20 px-6 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient-secondary">Sobre Mí</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Soy un desarrollador apasionado con más de 5 años de experiencia creando 
            soluciones digitales innovadoras. Mi enfoque combina habilidades técnicas 
            sólidas con un ojo creativo para el diseño.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Personal Story */}
          <div className="space-y-6 animate-slide-up">
            <h3 className="text-2xl font-bold text-gradient-primary">Mi Historia</h3>
            <div className="prose prose-invert max-w-none">
              <p className="text-muted-foreground leading-relaxed">
                Comencé mi viaje en el desarrollo web hace más de 5 años, cuando descubrí 
                la magia de transformar ideas en realidades digitales. Lo que empezó como 
                curiosidad se convirtió en pasión, y esa pasión en mi carrera profesional.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                A lo largo de mi trayectoria, he tenido la oportunidad de trabajar en 
                proyectos diversos, desde startups emergentes hasta empresas consolidadas, 
                siempre enfocándome en crear experiencias que marquen la diferencia.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Cuando no estoy programando, me encontrarás explorando nuevas tecnologías, 
                contribuyendo a proyectos open source, o disfrutando de una buena taza de 
                café mientras planeo mi próximo proyecto creativo.
              </p>
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-6 animate-slide-up" style={{ animationDelay: '200ms' }}>
            <h3 className="text-2xl font-bold text-gradient-primary">Habilidades Técnicas</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {skills.map((skillGroup, index) => (
                <Card key={index} className="border-border/50 backdrop-blur-sm hover:shadow-card transition-smooth">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-primary mb-3">{skillGroup.category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in">
          {values.map((value, index) => (
            <Card 
              key={index} 
              className="text-center border-border/50 backdrop-blur-sm hover:shadow-card hover:glow-accent transition-smooth group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="mb-4 flex justify-center group-hover:animate-bounce">
                  {value.icon}
                </div>
                <h4 className="font-semibold text-lg mb-2 group-hover:text-gradient-primary transition-smooth">
                  {value.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;