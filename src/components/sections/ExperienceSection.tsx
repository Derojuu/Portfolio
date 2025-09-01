
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { Badge } from "../ui/badge";
import { Calendar, MapPin, Trophy, TrendingUp, Briefcase, Star, Award, CheckCircle } from 'lucide-react';

const experiences = [
  {
    title: "IT Support & Network Technician",
    company: "Lagos Internal Revenue Service (LIRS)",
    period: "2023 - Present",
    location: "Lagos, Nigeria",
    type: "Full-time",
    description: "Delivered comprehensive IT support services across hardware, software, and networking domains. Ensured seamless connectivity, resolved technical issues promptly, and supported various departments with system maintenance and administrative tasks.",
    achievements: [
      "Managed hardware diagnostics and repairs across 100+ devices, including desktops and printers",
      "Configured and maintained local area networks (LAN), ensuring stable and secure connectivity for staff",
      "Provided first-line technical support, reducing downtime by 70% through efficient troubleshooting"
    ],
    tech: ["Computer Hardware", "LAN/WAN Networking", "Windows OS", "Microsoft Office", "Helpdesk Support", "Cabling & Routing"],
    highlight: "Current Role",
    metrics: "100+ devices managed • 70% downtime reduction • 500+ support tickets resolved",
    icon: Briefcase
  },
  {
    title: "IT & Software Development Trainee",
    company: "NIIT Education and Training Centre", 
    period: "2020 - 2022",
    location: "Lagos, Nigeria",
    type: "Training",
    description: "Completed intensive hands-on training in software development and IT fundamentals. Gained practical experience in front-end and back-end technologies while building projects that demonstrate logical thinking, problem-solving, and user-focused design.",
    achievements: [
      "Built several mini-projects using HTML, CSS, JavaScript, and Python to demonstrate core programming concepts",
      "Developed strong foundational skills in databases with SQL and integrated simple applications with data layers",
      "Practiced logic-building exercises and algorithm design to enhance programming efficiency and clarity"
    ],
    tech: ["HTML", "CSS", "JavaScript", "Python", "SQL", "Problem Solving", "Git"],
    highlight: "Foundation Builder",
    metrics: "15+ projects completed • Full-stack development mastery • Problem-solving expertise",
    icon: Award
  }
];

export const ExperienceSection = () => {
  return (
    <div className="space-y-12 md:space-y-16 animate-fade-in px-4 sm:px-6 lg:px-8">
      {/* Header Section - Mobile Responsive */}
      <div className="text-center space-y-4 md:space-y-6 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-green-400/10 via-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
        <div className="relative z-10 animate-slide-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4">
            <span className="gradient-text-animated inline-flex items-center gap-2 md:gap-3 flex-wrap justify-center">
              <Trophy className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 animate-bounce-slow" />
              <span className="whitespace-nowrap">Professional Journey</span>
            </span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground px-4 sm:px-0">Building impactful solutions across diverse industries</p>
          <div className="flex items-center justify-center gap-3 sm:gap-4 md:gap-6 mt-3 md:mt-4 text-xs sm:text-sm text-muted-foreground flex-wrap">
            <div className="flex items-center gap-1">
              <TrendingUp className="h-3 w-3 sm:h-4 sm:w-4 text-blue-600" />
              <span className="whitespace-nowrap">3+ Years Experience</span>
            </div>
            <div className="flex items-center gap-1">
              <Star className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-600" />
              <span className="whitespace-nowrap">500+ Projects Delivered</span>
            </div>
            <div className="flex items-center gap-1">
              <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600" />
              <span className="whitespace-nowrap">100% Success Rate</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Timeline - Mobile Responsive */}
      <div className="space-y-8 md:space-y-12 max-w-5xl mx-auto">
        {experiences.map((experience, index) => {
          const IconComponent = experience.icon;
          return (
            <div key={index} className="relative animate-stagger-${index + 1}">
              {/* Timeline Line - Hidden on Mobile */}
              <div className="absolute left-4 sm:left-6 top-12 sm:top-16 w-0.5 h-full bg-gradient-to-b from-blue-600 to-purple-600 opacity-20 hidden sm:block"></div>
              
              {/* Timeline Node - Hidden on Mobile */}
              <div className="absolute left-2.5 sm:left-4 top-6 sm:top-8 w-3 sm:w-5 h-3 sm:h-5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-2 sm:border-4 border-white dark:border-gray-900 animate-pulse hidden sm:block"></div>
              
              <Card className={`sm:ml-12 md:ml-16 group hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 overflow-hidden ${
                experience.highlight === 'Current Role' ? 'ring-1 sm:ring-2 ring-blue-500/30 bg-gradient-to-br from-blue-50/50 via-white to-green-50/50 dark:from-blue-900/20 dark:via-gray-800 dark:to-green-900/20' : 
                'bg-gradient-to-br from-purple-50/50 via-white to-blue-50/50 dark:from-purple-900/20 dark:via-gray-800 dark:to-blue-900/20'
              } hover-lift`}>
                
                <CardHeader className="space-y-3 sm:space-y-4 p-4 sm:p-6">
                  <div className="flex flex-col gap-3 sm:gap-4">
                    <div className="space-y-2 flex-1">
                      <div className="flex items-start gap-2 sm:gap-3">
                        <div className="p-1.5 sm:p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white flex-shrink-0">
                          <IconComponent className="h-4 w-4 sm:h-5 sm:w-5" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <CardTitle className="text-lg sm:text-xl group-hover:text-blue-600 transition-colors leading-tight">
                            {experience.title}
                          </CardTitle>
                          <CardDescription className="text-base sm:text-lg font-semibold gradient-text">
                            {experience.company}
                          </CardDescription>
                        </div>
                      </div>
                      
                      {/* Highlight Badge - Mobile Responsive */}
                      <Badge 
                        variant={experience.highlight === 'Current Role' ? 'default' : 'secondary'}
                        className={`w-fit text-xs ${experience.highlight === 'Current Role' ? 'bg-green-600 animate-pulse' : 'bg-purple-600'}`}
                      >
                        {experience.highlight}
                      </Badge>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground flex-wrap">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
                          <span className="font-medium">{experience.period}</span>
                        </div>
                        <Badge variant="outline" className="text-xs">{experience.type}</Badge>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="h-3 w-3 sm:h-4 sm:w-4" />
                        <span>{experience.location}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4 sm:space-y-6 p-4 sm:p-6 pt-0">
                  <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">{experience.description}</p>
                  
                  {/* Metrics - Mobile Responsive */}
                  <div className="p-3 sm:p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg border">
                    <div className="text-sm font-medium text-muted-foreground mb-1">Key Metrics</div>
                    <div className="text-xs sm:text-sm leading-relaxed">{experience.metrics}</div>
                  </div>
                  
                  {/* Achievements - Mobile Responsive */}
                  <div>
                    <h4 className="font-semibold mb-2 sm:mb-3 flex items-center gap-2 text-sm sm:text-base">
                      <Award className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-600" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-1 sm:space-y-2">
                      {experience.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm text-muted-foreground group/item">
                          <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-1.5 sm:mt-2 group-hover/item:animate-pulse flex-shrink-0"></div>
                          <span className="leading-relaxed group-hover/item:text-foreground transition-colors">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Tech Stack - Mobile Responsive */}
                  <div>
                    <h4 className="font-semibold mb-2 sm:mb-3 flex items-center gap-2 text-sm sm:text-base">
                      <Star className="h-3 w-3 sm:h-4 sm:w-4 text-blue-600" />
                      Technologies & Skills
                    </h4>
                    <div className="flex flex-wrap gap-1 sm:gap-2">
                      {experience.tech.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs hover-scale cursor-pointer group/tech">
                          <span className="group-hover/tech:animate-wiggle">{tech}</span>
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          );
        })}
      </div>

      {/* Call to Action - Mobile Responsive */}
      <div className="text-center py-6 md:py-8 animate-slide-up-delayed">
        <Card className="max-w-2xl mx-4 sm:mx-auto bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 border-2 hover-lift">
          <CardContent className="pt-6 sm:pt-8 p-4 sm:p-6">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 gradient-text">Let's Build Something Amazing</h3>
            <p className="text-muted-foreground mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
              With proven experience in IT support and software development, I'm ready to tackle your next challenge.
            </p>
            <div className="flex items-center justify-center gap-3 sm:gap-4 flex-wrap">
              <Badge className="bg-green-600 text-xs sm:text-sm">Available for Projects</Badge>
              <Badge variant="outline" className="text-xs sm:text-sm">Remote Friendly</Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

