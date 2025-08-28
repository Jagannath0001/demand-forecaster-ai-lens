import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";

const education = [
  {
    degree: "Masters in Data Science",
    institution: "Christ (Deemed to be University)",
    location: "Bangalore, India",
    period: "2021 – 2023",
    type: "Masters",
    icon: "🎓"
  },
  {
    degree: "Bachelor's in Computer Application",
    institution: "Gurudev Arts and Science College, Kannur University",
    location: "Kannur, India", 
    period: "2017 – 2020",
    type: "Bachelor's",
    icon: "💻"
  }
];

const certifications = [
  "Fine Tuning Large Language Model",
  "Applied Machine Learning In Python",
  "Prompt Engineering with Llama 2&3",
  "Data Visualization Using R",
  "Alteryx Foundation Micro-Credential",
  "Tableau Desktop Professional Certificate"
];

const Education = () => {
  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl font-bold mb-4">
            Education & <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Certifications</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Continuous learning and academic excellence in data science and technology
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Education */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold flex items-center gap-3 mb-6">
              <GraduationCap className="w-6 h-6 text-primary" />
              Academic Background
            </h3>
            {education.map((edu, index) => (
              <Card 
                key={index} 
                className="gradient-card shadow-card hover-lift animate-slide-in-left"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{edu.icon}</span>
                        <Badge variant="secondary">{edu.type}</Badge>
                      </div>
                      <CardTitle className="text-xl text-primary">{edu.degree}</CardTitle>
                      <p className="font-semibold text-muted-foreground">{edu.institution}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col sm:flex-row gap-2 sm:items-center">
                    <Badge variant="outline" className="w-fit">
                      <Calendar className="w-3 h-3 mr-1" />
                      {edu.period}
                    </Badge>
                    <Badge variant="outline" className="w-fit">
                      <MapPin className="w-3 h-3 mr-1" />
                      {edu.location}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Certifications */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold flex items-center gap-3 mb-6">
              <Award className="w-6 h-6 text-primary" />
              Professional Certifications
            </h3>
            <Card className="gradient-card shadow-card hover-lift animate-slide-in-right">
              <CardContent className="p-6">
                <div className="grid gap-4">
                  {certifications.map((cert, index) => (
                    <div 
                      key={index} 
                      className="flex items-center gap-3 p-3 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                      <span className="font-medium">{cert}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Additional learning highlight */}
            <Card className="gradient-primary text-primary-foreground shadow-glow">
              <CardContent className="p-6 text-center">
                <h4 className="text-xl font-bold mb-2">Continuous Learning</h4>
                <p className="text-primary-foreground/90">
                  Committed to staying current with the latest developments in AI, 
                  machine learning, and supply chain technologies through ongoing 
                  professional development and certification programs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Academic achievements summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { label: "Advanced Degrees", value: "2", description: "Masters & Bachelor's" },
            { label: "Certifications", value: "6+", description: "Professional Certificates" },
            { label: "Specializations", value: "4+", description: "ML, AI, Data Viz, LLM" }
          ].map((stat, index) => (
            <Card key={index} className="text-center p-6 gradient-card shadow-card hover-lift">
              <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="font-semibold mb-1">{stat.label}</div>
              <div className="text-sm text-muted-foreground">{stat.description}</div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;