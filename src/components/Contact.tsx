import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  Send,
  Download,
  Calendar,
  MessageSquare
} from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 px-6" id="contact">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl font-bold mb-4">
            Let's <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to discuss opportunities or collaborate on exciting data science projects? 
            I'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 animate-slide-in-left">
            <div>
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm currently open to new opportunities in data science, machine learning, 
                and supply chain analytics. Whether you're looking for a passionate data scientist 
                or want to discuss potential collaborations, I'm here to help.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <Card className="gradient-card shadow-card hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-muted-foreground">nlrjagan99@gmail.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="gradient-card shadow-card hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">Phone</p>
                      <p className="text-muted-foreground">+91 9495487006</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="gradient-card shadow-card hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">Location</p>
                      <p className="text-muted-foreground">Bengaluru, India</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h4 className="font-semibold">Connect with me</h4>
              <div className="flex gap-4">
                <Button variant="outline" className="hover-lift">
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </Button>
                <Button variant="outline" className="hover-lift">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </Button>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-4">
              <h4 className="font-semibold">Quick Actions</h4>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button className="gradient-primary hover:shadow-glow transition-smooth">
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </Button>
                <Button variant="outline" className="hover-lift">
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule Meeting
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-in-right">
            <Card className="gradient-card shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-primary" />
                  Send Message
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">First Name</label>
                    <Input placeholder="Your first name" className="transition-smooth focus:shadow-card" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Last Name</label>
                    <Input placeholder="Your last name" className="transition-smooth focus:shadow-card" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input type="email" placeholder="your.email@example.com" className="transition-smooth focus:shadow-card" />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Subject</label>
                  <Input placeholder="What would you like to discuss?" className="transition-smooth focus:shadow-card" />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Message</label>
                  <Textarea 
                    placeholder="Tell me about your project, opportunity, or just say hello!" 
                    rows={5}
                    className="transition-smooth focus:shadow-card resize-none"
                  />
                </div>
                
                <Button className="w-full gradient-primary hover:shadow-glow transition-smooth" size="lg">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-16 animate-fade-up">
          <Card className="gradient-primary text-primary-foreground shadow-glow p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Make an Impact?</h3>
            <p className="text-primary-foreground/90 mb-6 leading-relaxed">
              With 2+ years of experience in demand planning and data science, I bring proven expertise 
              in machine learning, forecasting, and supply chain optimization. Let's discuss how I can 
              contribute to your team's success.
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              <Badge variant="secondary" className="bg-primary-foreground/20 text-primary-foreground">
                80%+ Forecast Accuracy
              </Badge>
              <Badge variant="secondary" className="bg-primary-foreground/20 text-primary-foreground">
                25% Improvement Achieved
              </Badge>
              <Badge variant="secondary" className="bg-primary-foreground/20 text-primary-foreground">
                40% Efficiency Gain
              </Badge>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;