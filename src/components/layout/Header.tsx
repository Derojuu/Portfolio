
import { Button } from "../ui/button";
import { Moon, Sun, Sparkles } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  toggleTheme: () => void;
  sections: Array<{ id: string; label: string; icon: any }>;
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export const Header = ({ darkMode, toggleTheme, sections, activeSection, setActiveSection }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60 animate-slide-down">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="font-bold text-2xl group cursor-pointer animate-slide-left">
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent animate-gradient inline-flex items-center gap-2 group-hover:scale-105 transition-transform">
            <Sparkles className="h-6 w-6 text-blue-600 animate-bounce-slow" />
            Abdulwaris
          </span>
        </div>
        
        <nav className="hidden md:flex space-x-2 animate-slide-down">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 relative group hover-lift animate-stagger-${index + 1} ${
                  activeSection === section.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                    : 'hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-600 dark:hover:from-blue-900/30 dark:hover:to-purple-900/30'
                }`}
              >
                <Icon className={`h-4 w-4 transition-all duration-300 ${
                  activeSection === section.id ? 'animate-wiggle' : 'group-hover:scale-110'
                }`} />
                <span className="font-medium">{section.label}</span>
                {activeSection === section.id && (
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 opacity-20 animate-pulse"></div>
                )}
              </button>
            );
          })}
        </nav>
        
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleTheme}
          className="rounded-full hover:bg-gradient-to-r hover:from-yellow-50 hover:to-orange-50 dark:hover:from-yellow-900/30 dark:hover:to-orange-900/30 transition-all duration-300 animate-slide-right hover-scale group"
        >
          {darkMode ? (
            <Sun className="h-5 w-5 text-yellow-500 group-hover:rotate-180 transition-transform duration-500" />
          ) : (
            <Moon className="h-5 w-5 text-blue-600 group-hover:rotate-12 transition-transform duration-300" />
          )}
        </Button>
      </div>
    </header>
  );
};

