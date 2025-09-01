
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Download, Mail, Briefcase, Award, Star, Zap, Code, Users } from 'lucide-react';

const techStack = [
  { name: 'React', level: 'Expert', icon: '⚛️' },
  { name: 'TypeScript', level: 'Expert', icon: '📘' },
  { name: 'Node.js', level: 'Advanced', icon: '🟢' },
  { name: 'Python', level: 'Advanced', icon: '🐍' },
  { name: 'Next.js', level: 'Advanced', icon: '▲' },
  { name: 'MySQL', level: 'Intermediate', icon: '🐬' },
  { name: 'Tailwind CSS', level: 'Expert', icon: '🎨' },
  { name: 'JavaScript', level: 'Expert', icon: '💛' },
  { name: 'HTML/CSS', level: 'Expert', icon: '🌐' },
  { name: 'GitHub', level: 'Advanced', icon: '🐙' },
  { name: 'MSSQL', level: 'Advanced', icon: '🔷' }
];

const achievements = [
  { title: 'Full Stack Excellence', description: 'Mastered end-to-end development', icon: '🏆' },
  { title: 'Project Leadership', description: 'Led 6+ successful projects', icon: '👥' },
  { title: 'Innovation Focus', description: 'Implemented cutting-edge solutions', icon: '💡' },
  { title: 'Client Satisfaction', description: '98% client satisfaction rate', icon: '⭐' }
];

export const AboutSection = () => {
  return (
    <div className="space-y-16 animate-fade-in">
      {/* Hero Section with Enhanced Animation */}
      <div className="text-center space-y-8 py-16 relative">
        {/* Animated Background Glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-indigo-400/20 rounded-full blur-3xl animate-pulse-slow"></div>
        
        <div className="relative z-10">
          {/* Animated Avatar */}
          <div className="w-40 h-40 mx-auto mb-8 relative group">
            <div className="w-full h-full bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-full flex items-center justify-center text-white text-5xl font-bold animate-float hover-scale cursor-pointer">
              OA
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full animate-pulse opacity-20"></div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
            <span className="gradient-text-animated">
              Hello, I'm
            </span>
            <br />
            <span className="bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              Odumbo Abdulwaris
            </span>
          </h1>
          
          <div className="animate-slide-up-delayed">
            <p className="text-2xl md:text-4xl text-muted-foreground font-light mb-4">
              <span className="gradient-text inline-flex items-center gap-2">
                <Zap className="h-8 w-8 animate-bounce-slow" />
                Full Stack Developer
              </span>
            </p>
            <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
              Passionate software engineer with 5+ years of experience building scalable web applications. 
              I specialize in creating elegant solutions to complex problems using modern technologies.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Button size="lg" className="gap-2 hover-lift hover-glow group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                <Download className="h-5 w-5 group-hover:animate-bounce" />
                Download Resume
              </Button>
              <Button variant="outline" size="lg" className="gap-2 hover-lift hover-glow group border-2">
                <Mail className="h-5 w-5 group-hover:animate-wiggle" />
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-stagger-1">
        {[
          { value: '5+', label: 'Years Experience', color: 'blue', icon: <Star className="h-6 w-6" /> },
          { value: '6+', label: 'Projects Completed', color: 'green', icon: <Code className="h-6 w-6" /> },
          { value: '10+', label: 'Technologies', color: 'purple', icon: <Zap className="h-6 w-6" /> },
          { value: '1000+', label: 'Users Impacted', color: 'orange', icon: <Users className="h-6 w-6" /> }
        ].map((stat, index) => (
          <Card key={index} className="text-center p-6 hover-lift hover-glow group cursor-pointer bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border-2">
            <div className={`text-4xl font-bold text-${stat.color}-600 mb-2 group-hover:scale-110 transition-transform flex items-center justify-center gap-2`}>
              <div className="group-hover:animate-bounce">{stat.icon}</div>
              {stat.value}
            </div>
            <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
          </Card>
        ))}
      </div>

      {/* Enhanced About Me Section */}
      <Card className="max-w-6xl mx-auto hover-lift animate-stagger-2 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 dark:from-gray-800 dark:via-blue-900/20 dark:to-purple-900/20 border-2">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-3xl">
            <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg animate-pulse">
              <Briefcase className="h-8 w-8 text-white" />
            </div>
            <span className="gradient-text">About Me</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-8">
          <p className="text-lg text-muted-foreground leading-relaxed">
            I'm a results-driven full-stack developer with a passion for creating innovative web solutions. 
            My expertise spans from crafting intuitive user interfaces to building robust backend systems. 
            I thrive in collaborative environments and am always eager to tackle new challenges.
          </p>
          
          {/* Tech Stack with Enhanced Design */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold flex items-center gap-2">
              <Award className="h-6 w-6 text-yellow-500 animate-spin-slow" />
              Core Competencies
            </h3>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {techStack.map((tech, index) => (
                <div key={index} className="flex justify-between items-center p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl hover-scale cursor-pointer group border hover:border-blue-300 transition-all">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl group-hover:scale-125 transition-transform">{tech.icon}</span>
                    <span className="font-medium">{tech.name}</span>
                  </div>
                  <Badge variant={tech.level === 'Expert' ? 'default' : tech.level === 'Advanced' ? 'secondary' : 'outline'} 
                        className={tech.level === 'Expert' ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white' : ''}>
                    {tech.level}
                  </Badge>
                </div>
              ))}
            </div>
          </div>

          {/* Key Achievements */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold flex items-center gap-2">
              <Star className="h-6 w-6 text-yellow-500 animate-pulse" />
              Key Achievements
            </h3>
            <div className="grid gap-4 md:grid-cols-2">
              {achievements.map((achievement, index) => (
                <div key={index} className="p-6 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-xl hover-lift group border hover:border-yellow-300 transition-all cursor-pointer">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl group-hover:animate-bounce">{achievement.icon}</div>
                    <div>
                      <h4 className="font-semibold text-lg group-hover:text-blue-600 transition-colors">{achievement.title}</h4>
                      <p className="text-muted-foreground">{achievement.description}</p>
                    </div>
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

