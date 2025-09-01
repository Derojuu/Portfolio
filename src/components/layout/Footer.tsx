
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { Github, Linkedin, Mail, Heart, Code, Coffee, ArrowUp, Sparkles } from 'lucide-react';

interface FooterProps {
  sections: Array<{ id: string; label: string; icon: any }>;
  setActiveSection: (section: string) => void;
}

export const Footer = ({ sections, setActiveSection }: FooterProps) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/Derojuu",
      label: "GitHub",
      color: "hover:text-purple-600 hover:bg-purple-50 dark:hover:bg-purple-900/20"
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/odumboabdulwaris",
      label: "LinkedIn", 
      color: "hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20"
    },
    {
      icon: Mail,
      href: "mailto:odumboabdulwaris@gmail.com",
      label: "Email",
      color: "hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20"
    }
  ];

  return (
    <footer className="relative border-t bg-gradient-to-br from-gray-50 via-white to-blue-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 animate-gradient-slow"></div>
      <div className="absolute top-0 left-1/4 w-48 sm:w-96 h-48 sm:h-96 bg-blue-400/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-0 right-1/4 w-48 sm:w-96 h-48 sm:h-96 bg-purple-400/5 rounded-full blur-3xl animate-float-delayed"></div>
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          {/* Brand Section - Mobile Responsive */}
          <div className="sm:col-span-2 space-y-3 sm:space-y-4 animate-slide-up text-center sm:text-left">
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4 justify-center sm:justify-start">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center animate-pulse">
                <Code className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold gradient-text">Odumbo Abdulwaris</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-md text-sm sm:text-base mx-auto sm:mx-0">
              Full Stack Developer passionate about creating innovative web solutions that make a difference. 
              Currently exploring new opportunities and exciting collaborations.
            </p>
            
            {/* Stats - Mobile Responsive */}
            <div className="flex items-center gap-4 sm:gap-6 text-xs sm:text-sm text-muted-foreground pt-2 justify-center sm:justify-start flex-wrap">
              <div className="flex items-center gap-1">
                <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Available for hire</span>
              </div>
              <div className="flex items-center gap-1">
                <Coffee className="h-3 w-3 sm:h-4 sm:w-4" />
                <span>Powered by coffee</span>
              </div>
            </div>
          </div>

          {/* Quick Navigation - Mobile Responsive */}
          <div className="animate-slide-up-delayed">
            <h3 className="font-semibold mb-3 sm:mb-4 flex items-center gap-2 text-sm sm:text-base justify-center sm:justify-start">
              <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 text-blue-600" />
              Quick Links
            </h3>
            <div className="space-y-1 sm:space-y-2">
              {sections.map((section) => {
                const IconComponent = section.icon;
                return (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-all duration-200 hover:translate-x-1 group w-full justify-center sm:justify-start"
                  >
                    <IconComponent className="h-3 w-3 group-hover:animate-wiggle" />
                    {section.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Social Links - Mobile Responsive */}
          <div className="animate-slide-up-delayed">
            <h3 className="font-semibold mb-3 sm:mb-4 flex items-center gap-2 text-sm sm:text-base justify-center sm:justify-start">
              <Heart className="h-3 w-3 sm:h-4 sm:w-4 text-pink-600 animate-bounce-slow" />
              Let's Connect
            </h3>
            <div className="flex flex-wrap gap-2 sm:gap-3 justify-center sm:justify-start">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <Button
                    key={index}
                    variant="ghost"
                    size="icon"
                    className={`hover-scale transition-all duration-300 ${social.color} w-8 h-8 sm:w-9 sm:h-9`}
                    onClick={() => window.open(social.href, '_blank')}
                    aria-label={social.label}
                  >
                    <IconComponent className="h-3 w-3 sm:h-4 sm:w-4" />
                  </Button>
                );
              })}
            </div>
            
            {/* Back to Top - Mobile Responsive */}
            <Button
              variant="outline"
              size="sm"
              onClick={scrollToTop}
              className="mt-3 sm:mt-4 gap-2 hover-scale bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-900/20 dark:hover:to-purple-900/20 text-xs sm:text-sm w-full sm:w-auto"
            >
              <ArrowUp className="h-3 w-3 sm:h-4 sm:w-4" />
              Back to Top
            </Button>
          </div>
        </div>

        <Separator className="my-6 sm:my-8 bg-gradient-to-r from-transparent via-border to-transparent" />

        {/* Bottom Section - Mobile Responsive */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 animate-fade-in text-center sm:text-left">
          <div className="text-xs sm:text-sm text-muted-foreground">
            <p className="flex items-center gap-1 justify-center sm:justify-start flex-wrap">
              © 2025 Abdulwaris Odumbo. Made with 
              <Heart className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-red-500 animate-pulse mx-0.5" />
              and lots of 
              <Coffee className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-amber-600 mx-0.5" />
            </p>
          </div>
          
          <div className="flex items-center gap-2 sm:gap-4 text-xs text-muted-foreground flex-wrap justify-center">
            <span className="flex items-center gap-1">
              Built with <Code className="h-2.5 w-2.5 sm:h-3 sm:w-3" /> React + TypeScript + Tailwind CSS
            </span>
            <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span>Always improving</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

