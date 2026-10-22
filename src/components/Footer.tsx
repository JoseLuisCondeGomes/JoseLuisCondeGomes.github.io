import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-border/50 bg-secondary/20 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gradient-primary">Tu Nombre</h3>
            <p className="text-muted-foreground">
              Desarrollador Full Stack especializado en crear experiencias digitales 
              excepcionales que combinan funcionalidad y diseño.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Enlaces Rápidos</h4>
            <nav className="flex flex-col space-y-2">
              <a 
                href="#projects" 
                className="text-muted-foreground hover:text-primary transition-smooth"
              >
                Proyectos
              </a>
              <a 
                href="#about" 
                className="text-muted-foreground hover:text-primary transition-smooth"
              >
                Sobre Mí
              </a>
              <a 
                href="#contact" 
                className="text-muted-foreground hover:text-primary transition-smooth"
              >
                Contacto
              </a>
              <a 
                href="/blog" 
                className="text-muted-foreground hover:text-primary transition-smooth"
              >
                Blog
              </a>
            </nav>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Conecta Conmigo</h4>
            <div className="flex space-x-4">
              <Button 
                variant="outline" 
                size="sm"
                className="border-primary/20 hover:border-primary hover:glow-accent transition-smooth"
                asChild
              >
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4" />
                </a>
              </Button>
              
              <Button 
                variant="outline" 
                size="sm"
                className="border-primary/20 hover:border-primary hover:glow-accent transition-smooth"
                asChild
              >
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-4 h-4" />
                </a>
              </Button>
              
              <Button 
                variant="outline" 
                size="sm"
                className="border-primary/20 hover:border-primary hover:glow-accent transition-smooth"
                asChild
              >
                <a href="mailto:tu-email@ejemplo.com">
                  <Mail className="w-4 h-4" />
                </a>
              </Button>
            </div>
            
            <p className="text-sm text-muted-foreground">
              <strong>Email:</strong> tu-email@ejemplo.com<br />
              <strong>Ubicación:</strong> Madrid, España
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border/50">
          <p className="text-muted-foreground text-sm flex items-center gap-2">
            © {currentYear} Tu Nombre. Hecho con 
            <Heart className="w-4 h-4 text-red-500 animate-pulse" /> 
            y mucho café ☕
          </p>
          
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <button 
              onClick={scrollToTop}
              className="text-muted-foreground hover:text-primary transition-smooth text-sm"
            >
              Volver arriba ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;