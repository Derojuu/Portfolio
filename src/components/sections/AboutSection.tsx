
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Download, Mail, Briefcase, Award } from 'lucide-react';

const techStack = [
  { name: 'React', level: 'Expert' },
  { name: 'TypeScript', level: 'Expert' },
  { name: 'Node.js', level: 'Advanced' },
  { name: 'Python', level: 'Advanced' },
  { name: 'Next.js', level: 'Advanced' },
  { name: 'MySQL', level: 'Intermediate' },
  { name: 'Tailwind CSS', level: 'Expert' },
  { name: 'JavaScript', level: 'Expert' },
  { name: 'HTML/CSS', level: 'Expert' },
  { name: 'GitHub', level: 'Advanced' }
];

const achievements = [
  { title: "AWS Certified Developer", year: "2023", issuer: "Amazon Web Services" },
  { title: "React Specialist Certification", year: "2022", issuer: "Meta" },
  { title: "Best Innovation Award", year: "2023", issuer: "Tech Innovation Corp" },
  { title: "Open Source Contributor", year: "2021-Present", issuer: "Various Projects" }
];

export const AboutSection = () => {
  return (
    <div className="space-y-12 animate-fade-in">
      {/* Hero Section */}
      <div className="text-center space-y-6">
        <div className="w-32 h-32 mx-auto bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-4xl font-bold">
          JS
        </div>
        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
          Odumbo Abdulwaris
        </h1>
        <p className="text-2xl md:text-3xl text-muted-foreground font-light">
          Senior Full Stack Developer
        </p>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Passionate software engineer with 5+ years of experience building scalable web applications. 
          I specialize in creating elegant solutions to complex problems using modern technologies.
        </p>
        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <Button size="lg" className="gap-2">
            <Download className="h-4 w-4" />
            Download Resume
          </Button>
          <Button variant="outline" size="lg" className="gap-2">
            <Mail className="h-4 w-4" />
            Get In Touch
          </Button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <Card className="text-center p-6">
          <div className="text-3xl font-bold text-blue-600">5+</div>
          <div className="text-sm text-muted-foreground">Years Experience</div>
        </Card>
        <Card className="text-center p-6">
          <div className="text-3xl font-bold text-green-600">50+</div>
          <div className="text-sm text-muted-foreground">Projects Completed</div>
        </Card>
        <Card className="text-center p-6">
          <div className="text-3xl font-bold text-purple-600">10+</div>
          <div className="text-sm text-muted-foreground">Technologies</div>
        </Card>
        <Card className="text-center p-6">
          <div className="text-3xl font-bold text-orange-600">100K+</div>
          <div className="text-sm text-muted-foreground">Users Impacted</div>
        </Card>
      </div>

      {/* About Me */}
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl">
            <Briefcase className="h-6 w-6" />
            About Me
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-lg text-muted-foreground leading-relaxed">
            I'm a results-driven full-stack developer with a passion for creating innovative web solutions. 
            My expertise spans from crafting intuitive user interfaces to building robust backend systems. 
            I thrive in collaborative environments and am always eager to tackle new challenges.
          </p>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Core Competencies</h3>
            <div className="grid gap-4 md:grid-cols-2">
              {techStack.map((tech, index) => (
                <div key={index} className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                  <span className="font-medium">{tech.name}</span>
                  <Badge variant={tech.level === 'Expert' ? 'default' : tech.level === 'Advanced' ? 'secondary' : 'outline'}>
                    {tech.level}
                  </Badge>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Certifications & Achievements</h3>
            <div className="grid gap-3 md:grid-cols-2">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                  <Award className="h-5 w-5 text-yellow-600" />
                  <div>
                    <div className="font-medium">{achievement.title}</div>
                    <div className="text-sm text-muted-foreground">{achievement.issuer} • {achievement.year}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

