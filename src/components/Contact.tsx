import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí implementarías la lógica real de envío
    toast({
      title: "¡Mensaje enviado!",
      description: "Te responderé tan pronto como sea posible.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "condegomesjoseluis@gmail.com",
      href: "mailto:tu-email@ejemplo.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Teléfono",
      value: "+34 658 94 62 94",
      href: "tel:+34658946294"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Ubicación",
      value: "Ourense, España",
      href: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient-primary">¡Hablemos!</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente? Me encantaría conocer tus ideas y 
            explorar cómo podemos trabajar juntos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-border/50 backdrop-blur-sm shadow-elevated animate-slide-up">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gradient-secondary">
                Envíame un mensaje
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Nombre</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Tu nombre completo"
                    required
                    className="border-border/50 focus:border-primary transition-smooth"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="tu-email@ejemplo.com"
                    required
                    className="border-border/50 focus:border-primary transition-smooth"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Mensaje</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Cuéntame sobre tu proyecto..."
                    required
                    rows={5}
                    className="border-border/50 focus:border-primary transition-smooth resize-none"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-primary hover:glow-primary transition-smooth text-lg py-6"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Enviar Mensaje
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8 animate-slide-up" style={{ animationDelay: '200ms' }}>
            <div>
              <h3 className="text-2xl font-bold text-gradient-secondary mb-6">
                Información de Contacto
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Estoy siempre abierto a discutir nuevas oportunidades, 
                proyectos interesantes o simplemente charlar sobre tecnología. 
                No dudes en contactarme a través de cualquiera de estos medios.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <Card 
                  key={index}
                  className="border-border/50 backdrop-blur-sm hover:shadow-card hover:glow-accent transition-smooth group cursor-pointer"
                >
                  <CardContent className="p-6">
                    <a 
                      href={info.href}
                      className="flex items-center space-x-4 group-hover:text-primary transition-smooth"
                    >
                      <div className="text-primary group-hover:animate-bounce">
                        {info.icon}
                      </div>
                      <div>
                        <p className="font-medium text-sm text-muted-foreground">
                          {info.label}
                        </p>
                        <p className="text-lg font-semibold">
                          {info.value}
                        </p>
                      </div>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* CTA */}
            <Card className="border-border/50 backdrop-blur-sm bg-gradient-to-r from-primary/10 to-secondary/10">
              <CardContent className="p-6 text-center">
                <h4 className="font-bold text-lg mb-2">¿Prefieres una videollamada?</h4>
                <p className="text-muted-foreground mb-4">
                  Agenda una reunión gratuita de 30 minutos para discutir tu proyecto
                </p>
                <Button 
                  variant="outline" 
                  className="border-primary/20 hover:border-primary hover:glow-accent transition-smooth"
                >
                  Programar Reunión
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;