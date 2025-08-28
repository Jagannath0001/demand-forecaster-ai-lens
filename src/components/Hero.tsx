import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download, Mail, Github, Linkedin, MapPin, Phone } from "lucide-react";
// import jagannathPhoto from "@/assets/jagannath-photo.png";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 gradient-hero opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full animate-pulse" />
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-secondary/10 rounded-full animate-pulse delay-1000" />
      <div className="absolute top-1/2 right-20 w-12 h-12 bg-accent/10 rounded-full animate-pulse delay-500" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Text content */}
          <div className="space-y-8 animate-slide-in-left">
            <div className="space-y-4">
              <Badge variant="secondary" className="text-sm px-4 py-2">
                Open to Opportunities
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Jagannath V V
                </span>
              </h1>
              <div className="space-y-2">
                <h2 className="text-2xl lg:text-3xl font-semibold text-muted-foreground">
                  Demand Planning Analyst
                </h2>
                <h3 className="text-xl lg:text-2xl text-muted-foreground">
                  Data Scientist - Supply Chain
                </h3>
              </div>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              Supply Chain Data Scientist with 2+ years of specialized experience in demand 
              planning and forecasting. Developing advanced ML models and achieving 80%+ 
              forecast accuracy for key product categories.
            </p>

            {/* Contact info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                Bengaluru, India
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="w-4 h-4 text-primary" />
                +91 9495487006
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-4 h-4 text-primary" />
                nlrjagan99@gmail.com
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gradient-primary hover:shadow-glow transition-smooth">
                <Mail className="w-4 h-4 mr-2" />
                Contact Me
              </Button>
              <Button variant="outline" size="lg" className="hover-lift">
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </Button>
              <div className="flex gap-2">
                <Button variant="outline" size="icon" className="hover-lift">
                  <Linkedin className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="icon" className="hover-lift">
                  <Github className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Right column - Photo and highlight cards */}
          <div className="relative animate-slide-in-right">
            <Card className="gradient-card shadow-elegant p-8 hover-lift">
              <div className="text-center space-y-6">
                <div className="relative">
                  <div className="w-64 h-64 mx-auto rounded-full overflow-hidden shadow-glow">
                    <img 
                      src="/lovable-uploads/c49ff5f1-a8e8-49f2-a96b-4afbd5aad3ad.png" 
                      alt="Jagannath V V - Data Scientist"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-elegant">
                    2+ Years Experience
                  </div>
                </div>

                {/* Key achievements */}
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="text-center p-4 bg-primary/5 rounded-lg">
                    <div className="text-2xl font-bold text-primary">80%+</div>
                    <div className="text-sm text-muted-foreground">Forecast Accuracy</div>
                  </div>
                  <div className="text-center p-4 bg-secondary/5 rounded-lg">
                    <div className="text-2xl font-bold text-primary">25%</div>
                    <div className="text-sm text-muted-foreground">Improvement</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;