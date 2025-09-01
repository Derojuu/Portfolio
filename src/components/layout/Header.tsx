
import { Button } from "../ui/button";
import { Moon, Sun, Sparkles, Menu, X } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  darkMode: boolean;
  toggleTheme: () => void;
  sections: Array<{ id: string; label: string; icon: any }>;
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export const Header = ({ darkMode, toggleTheme, sections, activeSection, setActiveSection }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60 animate-slide-down">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex justify-between items-center">
        {/* Logo - Mobile Responsive */}
        <div className="font-bold text-lg sm:text-xl lg:text-2xl group cursor-pointer animate-slide-left">
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent animate-gradient inline-flex items-center gap-1 sm:gap-2 group-hover:scale-105 transition-transform">
            <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-blue-600 animate-bounce-slow" />
            <span className="hidden xs:inline">Abdulwaris</span>
            <span className="xs:hidden">OA</span>
          </span>
        </div>
        
        {/* Desktop Navigation - Hidden on Mobile */}
        <nav className="hidden lg:flex space-x-1 xl:space-x-2 animate-slide-down">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`flex items-center space-x-1 xl:space-x-2 px-3 xl:px-6 py-2 xl:py-3 rounded-full transition-all duration-300 relative group hover-lift animate-stagger-${index + 1} text-sm xl:text-base ${
                  activeSection === section.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                    : 'hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-600 dark:hover:from-blue-900/30 dark:hover:to-purple-900/30'
                }`}
              >
                <Icon className={`h-4 w-4 transition-all duration-300 ${
                  activeSection === section.id ? 'animate-wiggle' : 'group-hover:scale-110'
                }`} />
                <span className="font-medium hidden xl:inline">{section.label}</span>
                {activeSection === section.id && (
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 opacity-20 animate-pulse"></div>
                )}
              </button>
            );
          })}
        </nav>
        
        {/* Mobile Menu Button & Theme Toggle */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="rounded-full hover:bg-gradient-to-r hover:from-yellow-50 hover:to-orange-50 dark:hover:from-yellow-900/30 dark:hover:to-orange-900/30 transition-all duration-300 animate-slide-right hover-scale group w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10"
          >
            {darkMode ? (
              <Sun className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-500 group-hover:rotate-180 transition-transform duration-500" />
            ) : (
              <Moon className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 group-hover:rotate-12 transition-transform duration-300" />
            )}
          </Button>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden hover-scale w-8 h-8 sm:w-9 sm:h-9 rounded-full"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? 
              <X className="h-4 w-4 sm:h-5 sm:w-5 animate-spin" /> : 
              <Menu className="h-4 w-4 sm:h-5 sm:w-5 animate-pulse" />
            }
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-lg border-b shadow-lg animate-slide-down">
          <nav className="container mx-auto py-4 px-4 sm:px-6">
            <div className="grid gap-2 sm:gap-3">
              {sections.map((section, index) => {
                const Icon = section.icon;
                return (
                  <button
                    key={section.id}
                    onClick={() => {
                      setActiveSection(section.id);
                      setIsMenuOpen(false);
                    }}
                    className={`w-full flex items-center justify-start gap-3 px-4 sm:px-6 py-3 sm:py-4 rounded-xl transition-all duration-300 animate-stagger-${index + 1} text-sm sm:text-base ${
                      activeSection === section.id 
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg' 
                        : 'hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-900/20 dark:hover:to-purple-900/20'
                    }`}
                  >
                    <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                    <span className="font-medium">{section.label}</span>
                  </button>
                );
              })}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

