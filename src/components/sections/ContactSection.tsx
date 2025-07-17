
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";
import { Mail, Linkedin, Github, Download, MapPin } from 'lucide-react';

export const ContactSection = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold">Let's Work Together</h2>
        <p className="text-xl text-muted-foreground">Ready to bring your ideas to life</p>
      </div>
      
      <div className="grid gap-8 lg:grid-cols-2 max-w-6xl mx-auto">
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Get In Touch</CardTitle>
            <CardDescription>
              I'm always interested in new opportunities and exciting projects.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center space-x-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors cursor-pointer group">
              <Mail className="h-6 w-6 text-blue-600 group-hover:scale-110 transition-transform" />
              <div>
                <h3 className="font-medium">Email</h3>
                <p className="text-muted-foreground">odumboabdulwaris@gmail.com</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors cursor-pointer group">
              <Linkedin className="h-6 w-6 text-blue-600 group-hover:scale-110 transition-transform" />
              <div>
                <h3 className="font-medium">LinkedIn</h3>
                <p className="text-muted-foreground">linkedin.com/in/odumboabdulwaris</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors cursor-pointer group">
              <Github className="h-6 w-6 text-blue-600 group-hover:scale-110 transition-transform" />
              <div>
                <h3 className="font-medium">GitHub</h3>
                <p className="text-muted-foreground">github.com/Derojuu</p>
              </div>
            </div>

            <Separator />

            <div className="space-y-4">
              <h3 className="font-medium">Available For</h3>
              <div className="grid grid-cols-2 gap-2">
                <Badge variant="secondary" className="justify-center py-2">Full-time Roles</Badge>
                <Badge variant="secondary" className="justify-center py-2">Remote</Badge>
                <Badge variant="secondary" className="justify-center py-2">Freelance</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Current Status</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="p-6 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20 rounded-lg border border-green-200 dark:border-green-800">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="font-medium text-green-700 dark:text-green-300">Open to Opportunities</span>
              </div>
              <p className="mt-2 text-sm text-green-600 dark:text-green-400">
                Currently exploring new full-time and freelance opportunities
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Response Time</h4>
              <div className="text-sm text-muted-foreground">
                I typically respond to emails within 24 hours and am available for calls during PST business hours.
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Location</h4>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                Lagos, Nigeria (Open to remote work)
              </div>
            </div>

            <Separator />

            <div className="text-center">
              <Button size="lg" className="w-full gap-2">
                <Download className="h-4 w-4" />
                Download Resume (PDF)
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

