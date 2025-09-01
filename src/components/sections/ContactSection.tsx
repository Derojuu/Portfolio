
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";
import { Mail, Linkedin, Github, Download, MapPin, Send, Phone, Calendar, Clock, MessageCircle, Heart, Globe } from 'lucide-react';

export const ContactSection = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "odumboabdulwaris@gmail.com",
      action: "mailto:odumboabdulwaris@gmail.com",
      color: "text-red-600",
      bgColor: "from-red-50 to-pink-50 dark:from-red-950/20 dark:to-pink-950/20"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "linkedin.com/in/odumboabdulwaris",
      action: "https://linkedin.com/in/odumboabdulwaris",
      color: "text-blue-600",
      bgColor: "from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20"
    },
    {
      icon: Github,
      title: "GitHub",
      value: "github.com/Derojuu",
      action: "https://github.com/Derojuu",
      color: "text-purple-600",
      bgColor: "from-purple-50 to-indigo-50 dark:from-purple-950/20 dark:to-indigo-950/20"
    }
  ];

  const availability = [
    { label: "Full-time Roles", available: true },
    { label: "Remote Work", available: true },
    { label: "Freelance Projects", available: true },
    { label: "Consulting", available: true },
    { label: "Part-time", available: false }
  ];

  return (
    <div className="space-y-16 animate-fade-in">
      {/* Header Section */}
      <div className="text-center space-y-6 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-400/10 via-purple-400/10 to-blue-400/10 rounded-full blur-3xl"></div>
        <div className="relative z-10 animate-slide-up">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="gradient-text-animated inline-flex items-center gap-3">
              <MessageCircle className="h-12 w-12 animate-bounce-slow" />
              Let's Connect
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground">Ready to bring your ideas to life</p>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-green-600 font-medium">Available for new opportunities</span>
          </div>
        </div>
      </div>
      
      <div className="grid gap-8 lg:grid-cols-2 max-w-6xl mx-auto">
        {/* Contact Methods */}
        <Card className="lg:col-span-1 hover-lift bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 dark:from-gray-800 dark:via-blue-900/10 dark:to-purple-900/10 border-2 animate-slide-up">
          <CardHeader className="text-center">
            <div className="mx-auto w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mb-4 animate-pulse">
              <Send className="h-8 w-8 text-white" />
            </div>
            <CardTitle className="text-2xl">Get In Touch</CardTitle>
            <CardDescription className="text-lg">
              I'm always excited to discuss new opportunities and innovative projects.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <div 
                  key={index} 
                  className={`flex items-center space-x-4 p-4 rounded-xl bg-gradient-to-r ${method.bgColor} border hover:shadow-lg transition-all duration-300 cursor-pointer group hover-scale animate-stagger-${index + 1}`}
                  onClick={() => window.open(method.action, '_blank')}
                >
                  <div className={`p-3 bg-white/80 rounded-full group-hover:bg-white transition-colors ${method.color}`}>
                    <IconComponent className="h-6 w-6 group-hover:animate-wiggle" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 dark:text-white">{method.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 group-hover:text-gray-800 dark:group-hover:text-gray-100 transition-colors">
                      {method.value}
                    </p>
                  </div>
                  <Send className="h-5 w-5 text-gray-400 group-hover:text-blue-600 transition-colors opacity-0 group-hover:opacity-100" />
                </div>
              );
            })}

            <Separator className="my-6" />

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-xl border">
                <Clock className="h-6 w-6 mx-auto mb-2 text-green-600" />
                <div className="text-2xl font-bold text-green-700 dark:text-green-300">24h</div>
                <div className="text-xs text-green-600 dark:text-green-400">Response Time</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 rounded-xl border">
                <Globe className="h-6 w-6 mx-auto mb-2 text-blue-600" />
                <div className="text-2xl font-bold text-blue-700 dark:text-blue-300">GMT+1</div>
                <div className="text-xs text-blue-600 dark:text-blue-400">Timezone</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Status & Availability */}
        <Card className="hover-lift bg-gradient-to-br from-white via-purple-50/30 to-pink-50/30 dark:from-gray-800 dark:via-purple-900/10 dark:to-pink-900/10 border-2 animate-slide-up-delayed">
          <CardHeader className="text-center">
            <div className="mx-auto w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mb-4 animate-pulse">
              <Calendar className="h-8 w-8 text-white" />
            </div>
            <CardTitle className="text-2xl">Current Status</CardTitle>
            <CardDescription className="text-lg">
              Availability and work preferences
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Status Banner */}
            <div className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-xl border-2 border-green-200 dark:border-green-700/50 hover-lift">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse shadow-lg shadow-green-500/50"></div>
                <span className="font-bold text-green-700 dark:text-green-300 text-lg">Open to Opportunities</span>
                <Heart className="h-5 w-5 text-green-600 animate-bounce-slow" />
              </div>
              <p className="text-green-600 dark:text-green-400 leading-relaxed">
                Currently exploring new full-time positions and exciting freelance projects. Let's build something amazing together!
              </p>
            </div>

            {/* Availability Grid */}
            <div className="space-y-3">
              <h4 className="font-semibold text-lg flex items-center gap-2">
                <Badge className="bg-blue-600">Available For</Badge>
              </h4>
              <div className="grid gap-2">
                {availability.map((item, index) => (
                  <div key={index} className={`flex items-center justify-between p-3 rounded-lg border transition-all duration-200 hover-scale ${
                    item.available 
                      ? 'bg-green-50 border-green-200 dark:bg-green-950/20 dark:border-green-700/50' 
                      : 'bg-gray-50 border-gray-200 dark:bg-gray-800/50 dark:border-gray-600/50 opacity-60'
                  }`}>
                    <span className={`font-medium ${item.available ? 'text-green-700 dark:text-green-300' : 'text-gray-500'}`}>
                      {item.label}
                    </span>
                    <div className={`w-3 h-3 rounded-full ${item.available ? 'bg-green-500 animate-pulse' : 'bg-gray-400'}`}></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Location */}
            <div className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-xl border">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-blue-600" />
                Location & Work Style
              </h4>
              <div className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                <p>📍 Lagos, Nigeria</p>
                <p>🌍 Remote work preferred</p>
                <p>✈️ Open to relocation for the right opportunity</p>
              </div>
            </div>

            <Separator />

            {/* CTA Button */}
            <div className="space-y-3">
              <Button 
                size="lg" 
                className="w-full gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover-lift text-lg py-6"
                onClick={() => window.open('mailto:odumboabdulwaris@gmail.com', '_blank')}
              >
                <Mail className="h-5 w-5" />
                Send me an Email
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="w-full gap-2 hover-lift"
                onClick={() => window.open('#', '_blank')}
              >
                <Download className="h-5 w-5" />
                Download Resume (PDF)
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Footer Message */}
      <div className="text-center py-8 animate-slide-up-delayed">
        <Card className="max-w-2xl mx-auto bg-gradient-to-br from-pink-50 to-purple-50 dark:from-pink-900/20 dark:to-purple-900/20 border-2 hover-lift">
          <CardContent className="pt-8">
            <h3 className="text-2xl font-bold mb-4 gradient-text">Looking Forward to Hearing From You!</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Whether you have a project in mind, want to collaborate, or just want to say hello, 
              I'd love to connect and explore how we can work together to create something exceptional.
            </p>
            <div className="flex items-center justify-center gap-2">
              <Heart className="h-5 w-5 text-pink-600 animate-bounce-slow" />
              <span className="text-sm text-muted-foreground">Made with passion for great code</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

