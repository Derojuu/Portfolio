
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Github, ExternalLink, Star, Zap, Users, TrendingUp } from 'lucide-react';

const projects = [
  {
    title: "Exam Complaint Management System",
    description: "Web-based complaint system for managing and tracking student exam-related issues in higher education institutions.",
    longDescription: "Developed a full-stack complaint management system that allows students to submit, track, and manage exam complaints seamlessly. The system includes role-based authentication, secure file uploads, a dashboard interface for admins/staff, and a MySQL database for persistent storage. Built with Next.js, React, TailwindCSS, and server-side APIs for scalable interactions.",
    tech: ["Next.js", "React", "TailwindCSS", "MySQL", "Node.js", "JWT", "Formidable", "ShadCN UI"],
    status: "Production",
    metrics: "Supports multi-role login, file uploads, and real-time status tracking",
    github: "https://github.com/Derojuu/exam-complaint-system",
    live: "https://excos.vercel.app",
    image: "/excos.png",
    featured: true,
    stats: { users: "500+", uptime: "99.9%", rating: "4.8/5" }
  },
  {
    title: "Ticket Management System",
    description: "Full-featured system for submitting, tracking, and managing support tickets with role-based access.",
    longDescription: "Developed a complete ticket management system using HTML, CSS, JavaScript, Node.js, and SQL. The platform allows users to submit tickets, view status updates, and receive notifications, while admins can manage and resolve complaints through a dedicated dashboard. Includes authentication, ticket analytics, and a clean UI for ease of use.",
    tech: ["HTML", "CSS", "JavaScript", "Node.js", "MSSQL"],
    status: "Completed",
    metrics: "Handled 500+ test tickets with efficient tracking and resolution flow",
    github: "https://github.com/Derojuu/ticket-management-system",
    live: "https://your-ticket-system.com",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=400&fit=crop",
    featured: false,
    stats: { tickets: "500+", resolution: "95%", satisfaction: "4.6/5" }
  },
  {
    title: "Real-time Collaboration Tool",
    description: "WebRTC-based collaboration platform with video calls, screen sharing, and synchronized document editing.",
    longDescription: "Built a comprehensive collaboration platform supporting real-time document editing, video conferencing, and screen sharing. Architected with WebRTC for peer-to-peer communication and operational transforms for conflict-free document synchronization.",
    tech: ["React", "WebRTC", "Socket.io", "Node.js", "MongoDB"],
    status: "Beta Testing",
    metrics: "500+ beta users, 4.8/5 rating",
    github: "https://github.com/Derojuu/collab-tool",
    live: "https://your-collab.com",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop",
    featured: true,
    stats: { users: "500+", sessions: "10k+", rating: "4.8/5" }
  }
];

export const ProjectsSection = () => {
  return (
    <div className="space-y-16 animate-fade-in">
      {/* Header Section */}
      <div className="text-center space-y-6 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 via-purple-400/10 to-indigo-400/10 rounded-full blur-3xl"></div>
        <div className="relative z-10 animate-slide-up">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="gradient-text-animated inline-flex items-center gap-3">
              <Zap className="h-12 w-12 animate-bounce-slow" />
              Featured Projects
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground">Innovative solutions that make a difference</p>
          <div className="flex items-center justify-center gap-6 mt-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Users className="h-4 w-4 text-blue-600" />
              <span>1000+ Users</span>
            </div>
            <div className="flex items-center gap-1">
              <TrendingUp className="h-4 w-4 text-green-600" />
              <span>6 Projects</span>
            </div>
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 text-yellow-600" />
              <span>4.8 Rating</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Projects Grid */}
      <div className="grid gap-8 lg:grid-cols-2">
        {projects.map((project, index) => (
          <Card key={index} className={`group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden animate-stagger-${index + 1} ${
            project.featured ? 'ring-2 ring-blue-500/20 bg-gradient-to-br from-blue-50/50 via-white to-purple-50/50 dark:from-blue-900/20 dark:via-gray-800 dark:to-purple-900/20' : ''
          } hover-lift`}>
            
            {/* Project Image with Overlay */}
            <div className="aspect-video bg-gradient-to-br from-blue-600/20 to-purple-600/20 relative overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1 animate-pulse">
                  <Star className="h-3 w-3" />
                  Featured
                </div>
              )}

              {/* Status Badge */}
              <div className="absolute top-4 right-4">
                <Badge variant={project.status === 'Production' ? 'default' : project.status === 'Beta Testing' ? 'secondary' : 'outline'} 
                       className={`${project.status === 'Production' ? 'bg-green-600' : project.status === 'Beta Testing' ? 'bg-blue-600' : ''} animate-pulse`}>
                  {project.status}
                </Badge>
              </div>

              {/* Action Buttons Overlay */}
              <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <Button 
                  variant="secondary" 
                  size="sm" 
                  className="hover-scale bg-white/90 text-gray-900 hover:bg-white"
                  onClick={() => window.open(project.github, '_blank')}
                >
                  <Github className="h-4 w-4 mr-1" />
                  Code
                </Button>
                <Button 
                  size="sm" 
                  className="hover-scale bg-blue-600 hover:bg-blue-700"
                  onClick={() => window.open(project.live, '_blank')}
                >
                  <ExternalLink className="h-4 w-4 mr-1" />
                  Live Demo
                </Button>
              </div>
            </div>
            
            <CardHeader>
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <CardTitle className="text-xl group-hover:text-blue-600 transition-colors mb-2">
                    {project.title}
                  </CardTitle>
                  <p className="text-muted-foreground text-sm mb-3">{project.description}</p>
                  
                  {/* Project Stats */}
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                    {Object.entries(project.stats).map(([key, value]) => (
                      <div key={key} className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                        <span className="capitalize">{key}: {value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed text-sm">{project.longDescription}</p>
              
              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <Badge key={techIndex} variant="outline" className="text-xs hover-scale cursor-pointer group/tech">
                    <span className="group-hover/tech:animate-wiggle">{tech}</span>
                  </Badge>
                ))}
              </div>

              {/* Project Metrics */}
              <div className="pt-3 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>{project.metrics}</span>
                  <div className="flex items-center gap-2">
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="hover-scale p-2"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <Github className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="hover-scale p-2"
                      onClick={() => window.open(project.live, '_blank')}
                    >
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center py-8 animate-slide-up-delayed">
        <Card className="max-w-2xl mx-auto bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-2 hover-lift">
          <CardContent className="pt-8">
            <h3 className="text-2xl font-bold mb-4 gradient-text">Ready to Work Together?</h3>
            <p className="text-muted-foreground mb-6">
              Let's bring your ideas to life with cutting-edge technology and innovative solutions.
            </p>
            <Button size="lg" className="gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover-lift">
              <ExternalLink className="h-5 w-5" />
              Start Your Project
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

