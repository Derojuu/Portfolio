
import { Button } from "../ui/button";
import { Moon, Sun } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  toggleTheme: () => void;
  sections: Array<{ id: string; label: string; icon: any }>;
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export const Header = ({ darkMode, toggleTheme, sections, activeSection, setActiveSection }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="font-bold text-xl">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Abdulwaris
          </span>
        </div>
        
        <nav className="hidden md:flex space-x-8">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                  activeSection === section.id
                    ? 'bg-primary text-primary-foreground shadow-lg'
                    : 'hover:bg-muted hover:scale-105'
                }`}
              >
                <Icon className="h-4 w-4" />
                <span>{section.label}</span>
              </button>
            );
          })}
        </nav>
        
        <Button
          variant="outline"
          size="icon"
          onClick={toggleTheme}
          className="transition-all duration-200 hover:scale-110"
        >
          {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </Button>
      </div>
    </header>
  );
};

