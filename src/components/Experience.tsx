import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building } from "lucide-react";

const experiences = [
  {
    title: "Data Scientist",
    company: "Theta Direct Innovation (Startup)",
    location: "Bengaluru, India",
    period: "Oct 2023 – Present",
    type: "Full-time",
    achievements: [
      "Developed Demand forecasting models using multiple ML algorithms and achieving 80%+ forecast accuracy for key product categories",
      "Specialized in Time Series forecasting using state-of-the-art techniques including ensemble methods, hierarchical forecasting, and probabilistic forecasting",
      "Created AI-powered intelligence tool using RAG and embeddings for processing market research documents and competitive intelligence",
      "Built executive-level demand planning dashboards in Power BI featuring forecast accuracy metrics, demand variability analysis, and inventory optimization KPIs",
      "Automated ETL processes for demand data integration from multiple sources, improving data processing efficiency by 40%"
    ],
    tags: ["Machine Learning", "Time Series", "Power BI", "ETL", "Forecasting"]
  },
  {
    title: "Data Analyst Intern",
    company: "Truwave Software",
    location: "USA (Remote)",
    period: "Jan 2023 – Apr 2023",
    type: "Internship",
    achievements: [
      "Utilized SQL, Alteryx, and web scraping for efficient data extraction and transformation",
      "Utilized Whisper for speech recognition (OpenAI) and sentiment analysis on customer service calls",
      "Created interactive dashboards and reports using Power BI"
    ],
    tags: ["SQL", "Alteryx", "OpenAI", "Sentiment Analysis", "Power BI"]
  }
];

const Experience = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl font-bold mb-4">
            Professional <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building impactful solutions in demand planning and data science
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className="gradient-card shadow-card hover-lift animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="space-y-2">
                    <CardTitle className="text-2xl text-primary">{exp.title}</CardTitle>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Building className="w-4 h-4" />
                      <span className="font-semibold">{exp.company}</span>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2 sm:items-center">
                    <Badge variant="secondary" className="w-fit">
                      <Calendar className="w-3 h-3 mr-1" />
                      {exp.period}
                    </Badge>
                    <Badge variant="outline" className="w-fit">
                      <MapPin className="w-3 h-3 mr-1" />
                      {exp.location}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  {exp.achievements.map((achievement, achievementIndex) => (
                    <div key={achievementIndex} className="flex gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <p className="text-muted-foreground leading-relaxed">{achievement}</p>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;