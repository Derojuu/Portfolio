
import { useState } from 'react';
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
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
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

      <main className="container mx-auto px-4 py-12">
        {renderSection()}
      </main>

      <Footer 
        sections={sections}
        setActiveSection={setActiveSection}
      />
    </div>
  );
};

export default Index;

