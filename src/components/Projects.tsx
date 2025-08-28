import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, TrendingUp, Mic, BarChart } from "lucide-react";

const projects = [
  {
    title: "Advanced Demand Forecasting System",
    description: "Enterprise-level demand planning solution integrating multiple forecasting approaches including statistical, ML, and judgmental methods. Features hierarchical forecasting for product families with automatic reconciliation across planning levels.",
    achievements: [
      "25% improvement in forecast accuracy compared to traditional methods",
      "Implemented hierarchical forecasting for product families",
      "Ensemble modeling for enhanced prediction reliability",
      "Automatic reconciliation across planning levels"
    ],
    technologies: ["Python", "Time Series", "Machine Learning", "Hierarchical Forecasting", "Statistical Methods"],
    icon: TrendingUp,
    gradient: "from-blue-500 to-purple-600"
  },
  {
    title: "Customer Service Call Analysis",
    description: "AI-powered solution utilizing OpenAI's Whisper for speech recognition and advanced sentiment analysis on customer service calls. Provides actionable insights for customer experience improvement.",
    achievements: [
      "Automated speech-to-text conversion using Whisper",
      "Real-time sentiment analysis implementation",
      "Actionable insights for customer experience teams",
      "Scalable solution for large call volumes"
    ],
    technologies: ["OpenAI Whisper", "NLP", "Sentiment Analysis", "Python", "Speech Recognition"],
    icon: Mic,
    gradient: "from-green-500 to-teal-600"
  },
  {
    title: "AI-Powered Intelligence Tool",
    description: "Developed using RAG (Retrieval-Augmented Generation) and embeddings for processing market research documents and competitive intelligence. Enables rapid analysis of large document datasets.",
    achievements: [
      "RAG implementation for document processing",
      "Vector embeddings for semantic search",
      "Competitive intelligence automation",
      "40% improvement in data processing efficiency"
    ],
    technologies: ["RAG", "Vector Embeddings", "LLM", "Document Processing", "AI"],
    icon: BarChart,
    gradient: "from-orange-500 to-red-600"
  }
];

const Projects = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl font-bold mb-4">
            Key <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Innovative solutions that drive business impact and technological advancement
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="gradient-card shadow-card hover-lift animate-scale-in group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${project.gradient} bg-opacity-10`}>
                    <project.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button variant="outline" size="icon" className="h-8 w-8">
                      <Github className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="icon" className="h-8 w-8">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                <CardTitle className="text-xl leading-tight">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div className="space-y-3">
                  <h4 className="font-semibold text-sm text-primary">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {project.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="flex gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-sm text-primary">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16 animate-fade-up">
          <Card className="gradient-card shadow-elegant p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Interested in collaborating?</h3>
            <p className="text-muted-foreground mb-6">
              I'm always excited to work on challenging projects that push the boundaries of data science and supply chain optimization.
            </p>
            <Button size="lg" className="gradient-primary hover:shadow-glow transition-smooth">
              Let's Discuss Your Project
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;