
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
  title: "Exam Complaint Management System",
  description: "Web-based complaint system for managing and tracking student exam-related issues in higher education institutions.",
  longDescription: "Developed a full-stack complaint management system that allows students to submit, track, and manage exam complaints seamlessly. The system includes role-based authentication, secure file uploads, a dashboard interface for admins/staff, and a MySQL database for persistent storage. Built with Next.js, React, TailwindCSS, and server-side APIs for scalable interactions.",
  tech: ["Next.js", "React", "TailwindCSS", "MySQL", "Node.js", "JWT", "Formidable", "ShadCN UI"],
  status: "Production",
  metrics: "Supports multi-role login, file uploads, and real-time status tracking",  github: "https://github.com/Derojuu/exam-complaint-system",  live: "https://excos.vercel.app",
  image: "/excos.png"
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
  image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=400&fit=crop"
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
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop"
  }
];

export const ProjectsSection = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold">Featured Projects</h2>
        <p className="text-xl text-muted-foreground">Innovative solutions that make a difference</p>
      </div>
      
      <div className="grid gap-8 lg:grid-cols-2">
        {projects.map((project, index) => (
          <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
            <div className="aspect-video bg-gradient-to-br from-blue-600/20 to-purple-600/20 relative overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </CardTitle>
                  <div className="flex items-center gap-4 mt-2">
                    <Badge variant={project.status === 'Production' ? 'default' : 'secondary'}>
                      {project.status}
                    </Badge>
                    <span className="text-sm text-muted-foreground">{project.metrics}</span>
                  </div>
                </div>                <div className="flex gap-2">
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <Github className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={() => window.open(project.live, '_blank')}
                  >
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
              <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">{project.longDescription}</p>
              
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <Badge key={techIndex} variant="outline" className="text-xs">
                    {tech}
                  </Badge>
                ))}              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

