
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { Github, Linkedin, Mail } from 'lucide-react';

interface FooterProps {
  sections: Array<{ id: string; label: string; icon: any }>;
  setActiveSection: (section: string) => void;
}

export const Footer = ({ sections, setActiveSection }: FooterProps) => {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="font-semibold mb-4">Odumbo Abdulwaris</h3>
            <p className="text-sm text-muted-foreground">
              Full Stack Developer passionate about creating innovative web solutions.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {section.label}
                </button>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon">
                <Github className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
        <Separator className="my-6" />
        <div className="text-center text-sm text-muted-foreground">
          © 2025 Abdulwaris Odumbo. Built with React, TypeScript, and Tailwind CSS.
        </div>
      </div>
    </footer>
  );
};

