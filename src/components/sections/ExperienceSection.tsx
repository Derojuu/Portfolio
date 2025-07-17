
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { Badge } from "../ui/badge";
import { Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
  title: "IT Support & Network Technician",
  company: "Lagos Internal Revenue Service (LIRS)",
  period: "2023 - Present",
  location: "Lagos, Nigeria",
  description: "Delivered comprehensive IT support services across hardware, software, and networking domains. Ensured seamless connectivity, resolved technical issues promptly, and supported various departments with system maintenance and administrative tasks.",
  achievements: [
    "Managed hardware diagnostics and repairs across 100+ devices, including desktops and printers",
    "Configured and maintained local area networks (LAN), ensuring stable and secure connectivity for staff",
    "Provided first-line technical support, reducing downtime by 70% through efficient troubleshooting"
  ],
  tech: ["Computer Hardware", "LAN/WAN Networking", "Windows OS", "Microsoft Office", "Helpdesk Support", "Cabling & Routing"]
},

  {
  title: "IT & Software Development Trainee",
  company: "NIIT Education and Training Centre",
  period: "2020 - 2022",
  location: "Lagos, Nigeria",
  description: "Completed intensive hands-on training in software development and IT fundamentals. Gained practical experience in front-end and back-end technologies while building projects that demonstrate logical thinking, problem-solving, and user-focused design.",
  achievements: [
    "Built several mini-projects using HTML, CSS, JavaScript, and Python to demonstrate core programming concepts",
    "Developed strong foundational skills in databases with SQL and integrated simple applications with data layers",
    "Practiced logic-building exercises and algorithm design to enhance programming efficiency and clarity"
  ],
  tech: ["HTML", "CSS", "JavaScript", "Python", "SQL", "Problem Solving", "Git"]
}



  
];

export const ExperienceSection = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold">Professional Experience</h2>
        <p className="text-xl text-muted-foreground">Building impactful solutions across diverse industries</p>
      </div>
      
      <div className="space-y-8 max-w-4xl mx-auto">
        {experiences.map((experience, index) => (
          <Card key={index} className="relative overflow-hidden">
            <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-blue-600 to-purple-600"></div>
            <CardHeader className="pl-8">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                <div>
                  <CardTitle className="text-xl">{experience.title}</CardTitle>
                  <CardDescription className="text-lg font-semibold text-blue-600">
                    {experience.company}
                  </CardDescription>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-1 text-sm text-muted-foreground mb-1">
                    <Calendar className="h-4 w-4" />
                    {experience.period}
                  </div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    {experience.location}
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pl-8 space-y-4">
              <p className="text-muted-foreground leading-relaxed">{experience.description}</p>
              
              <div>
                <h4 className="font-semibold mb-2">Key Achievements:</h4>
                <ul className="space-y-1">
                  {experience.achievements.map((achievement, achievementIndex) => (
                    <li key={achievementIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {experience.tech.map((tech, techIndex) => (
                  <Badge key={techIndex} variant="outline" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

