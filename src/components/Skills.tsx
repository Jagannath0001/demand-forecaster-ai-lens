import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  TrendingUp, 
  BarChart3, 
  Cloud, 
  Code, 
  Database,
  Brain,
  Zap
} from "lucide-react";

const skillCategories = [
  {
    title: "Demand Planning & Forecasting",
    icon: TrendingUp,
    color: "text-blue-600",
    skills: [
      { name: "Time Series Analysis", level: 95, tools: ["ARIMA", "SARIMA", "Prophet", "Exponential Smoothing"] },
      { name: "Machine Learning for Forecasting", level: 90, tools: ["Random Forest", "XGBoost"] },
      { name: "Statistical Forecasting", level: 92, tools: ["Demand Sensing", "Demand Shaping"] },
      { name: "S&OP Analytics", level: 88, tools: ["Inventory Optimization"] }
    ]
  },
  {
    title: "Business Intelligence & Visualization",
    icon: BarChart3,
    color: "text-green-600",
    skills: [
      { name: "Power BI", level: 92, tools: ["Dashboard Development", "KPI Tracking"] },
      { name: "Alteryx", level: 85, tools: ["ETL Process Design", "Automation"] },
      { name: "Data Visualization", level: 90, tools: ["Interactive Dashboards"] }
    ]
  },
  {
    title: "Cloud & Development",
    icon: Cloud,
    color: "text-purple-600",
    skills: [
      { name: "AWS", level: 82, tools: ["Cloud Computing"] },
      { name: "GitHub", level: 88, tools: ["Version Control"] },
      { name: "API Development", level: 85, tools: ["Web Scraping", "Process Automation"] }
    ]
  },
  {
    title: "Programming & Data Science",
    icon: Code,
    color: "text-orange-600",
    skills: [
      { name: "Python", level: 95, tools: ["Primary Language"] },
      { name: "SQL", level: 90, tools: ["Database Queries"] },
      { name: "ML/DL Frameworks", level: 88, tools: ["PyTorch", "TensorFlow", "Scikit-learn", "Keras"] },
      { name: "MLOps", level: 80, tools: ["MLflow", "Airflow", "Docker"] }
    ]
  },
  {
    title: "Databases",
    icon: Database,
    color: "text-indigo-600",
    skills: [
      { name: "PostgreSQL", level: 85, tools: ["Relational Database"] },
      { name: "MongoDB", level: 80, tools: ["NoSQL Database"] }
    ]
  },
  {
    title: "Advanced AI & ML",
    icon: Brain,
    color: "text-pink-600",
    skills: [
      { name: "Machine Learning", level: 92, tools: ["Supervised", "Unsupervised"] },
      { name: "Deep Learning", level: 85, tools: ["Neural Networks"] },
      { name: "NLP", level: 88, tools: ["Natural Language Processing"] },
      { name: "LLM & AI Agents", level: 85, tools: ["Agentic AI", "Large Language Models"] }
    ]
  }
];

const Skills = () => {
  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl font-bold mb-4">
            Technical <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive expertise across the data science and supply chain analytics stack
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card 
              key={categoryIndex} 
              className="gradient-card shadow-card hover-lift animate-scale-in"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg bg-primary/10`}>
                    <category.icon className={`w-5 h-5 ${category.color}`} />
                  </div>
                  <span className="text-lg">{category.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                    <div className="flex flex-wrap gap-1">
                      {skill.tools.map((tool, toolIndex) => (
                        <Badge key={toolIndex} variant="secondary" className="text-xs">
                          {tool}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {[
            { label: "Programming Languages", value: "5+", icon: Code },
            { label: "ML Frameworks", value: "8+", icon: Brain },
            { label: "Databases", value: "4+", icon: Database },
            { label: "Years Experience", value: "2+", icon: Zap }
          ].map((stat, index) => (
            <Card key={index} className="text-center p-6 gradient-card shadow-card hover-lift">
              <stat.icon className="w-8 h-8 mx-auto mb-2 text-primary" />
              <div className="text-2xl font-bold text-primary">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;