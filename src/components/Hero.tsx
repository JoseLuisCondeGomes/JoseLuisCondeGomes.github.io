import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-background/60" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-primary rounded-full blur-3xl opacity-20 animate-float" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-secondary rounded-full blur-3xl opacity-15 animate-float" style={{ animationDelay: '-3s' }} />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="text-gradient-primary">Hola, soy</span>
            <br />
            <span className="text-foreground">Jose Luis</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-gradient-secondary">
            Desarrollador Full Stack & Diseñador Creativo
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Transformo ideas en experiencias digitales excepcionales. 
            Especializado en crear aplicaciones web modernas, intuitivas y de alto rendimiento.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button 
              onClick={scrollToProjects}
              size="lg" 
              className="bg-gradient-primary hover:glow-primary transition-smooth text-lg px-8 py-6 rounded-xl"
            >
              Ver mis proyectos
            </Button>
            
            <div className="flex gap-4">
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary/20 hover:border-primary hover:glow-accent transition-smooth p-4 rounded-xl"
                asChild
              >
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5" />
                </a>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary/20 hover:border-primary hover:glow-accent transition-smooth p-4 rounded-xl"
                asChild
              >
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5" />
                </a>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary/20 hover:border-primary hover:glow-accent transition-smooth p-4 rounded-xl"
                asChild
              >
                <a href="mailto:tu-email@ejemplo.com">
                  <Mail className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="animate-bounce">
          <ArrowDown className="w-8 h-8 mx-auto text-primary cursor-pointer" onClick={scrollToProjects} />
        </div>
      </div>
    </section>
  );
};

export default Hero;