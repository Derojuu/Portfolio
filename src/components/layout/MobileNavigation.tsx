
interface MobileNavigationProps {
  sections: Array<{ id: string; label: string; icon: any }>;
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export const MobileNavigation = ({ sections, activeSection, setActiveSection }: MobileNavigationProps) => {
  return (
    <div className="md:hidden border-b bg-background">
      <div className="container mx-auto px-4 py-2">
        <div className="flex space-x-2 overflow-x-auto">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg whitespace-nowrap transition-all duration-200 ${
                  activeSection === section.id
                    ? 'bg-primary text-primary-foreground'
                    : 'hover:bg-muted'
                }`}
              >
                <Icon className="h-4 w-4" />
                <span>{section.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

