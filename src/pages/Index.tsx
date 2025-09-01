
import { useState, useEffect } from 'react';
import { Header } from '../components/layout/Header';
import { MobileNavigation } from '../components/layout/MobileNavigation';
import { Footer } from '../components/layout/Footer';
import { AboutSection } from '../components/sections/AboutSection';
import { ExperienceSection } from '../components/sections/ExperienceSection';
import { ProjectsSection } from '../components/sections/ProjectsSection';
import { ContactSection } from '../components/sections/ContactSection';
import { useTheme } from '../hooks/useTheme';
import { sections } from '../data/portfolioData';

const Index = () => {
  const { darkMode, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState('about');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const renderSection = () => {
    switch (activeSection) {
      case 'about':
        return <AboutSection />;
      case 'experience':
        return <ExperienceSection />;
      case 'projects':
        return <ProjectsSection />;
      case 'contact':
        return <ContactSection />;
      default:
        return <AboutSection />;
    }
  };

  return (
    <div className={`min-h-screen bg-background text-foreground transition-all duration-500 ${
      isLoaded ? 'animate-fade-in' : 'opacity-0'
    }`}>
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900 animate-gradient"></div>
        <div className="absolute inset-0 bg-grid opacity-30"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500/10 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-purple-500/10 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-20 w-12 h-12 bg-indigo-500/10 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-40 right-10 w-24 h-24 bg-pink-500/10 rounded-full animate-float" style={{animationDelay: '0.5s'}}></div>
      </div>

      <Header 
        darkMode={darkMode}
        toggleTheme={toggleTheme}
        sections={sections}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      <MobileNavigation 
        sections={sections}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      <main className="container mx-auto px-4 py-12 relative z-10">
        <div className="animate-blur-in">
          {renderSection()}
        </div>
      </main>

      <Footer 
        sections={sections}
        setActiveSection={setActiveSection}
      />
    </div>
  );
};

export default Index;

