import React from 'react';
import { Button } from './ui/button';
import { Separator } from './ui/separator';
import { Home, User, Briefcase, FileText, Mail } from 'lucide-react';

interface SidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export function Sidebar({ activeSection, setActiveSection }: SidebarProps) {
  const navigationItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About Me', icon: User },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'resume', label: 'Resume', icon: FileText },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  return (
    <div className="h-screen w-64 bg-card border-r border-border p-6 flex flex-col">
      <div className="mb-8">
        <h2 className="text-xl mb-2">Barani Swetha</h2>
        <p className="text-muted-foreground text-sm">Senior Lead Experience Designer</p>
      </div>
      
      <Separator className="mb-6" />
      
      <nav className="flex-1">
        <ul className="space-y-2">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.id}>
                <Button
                  variant={activeSection === item.id ? "default" : "ghost"}
                  className="w-full justify-start transition-all duration-200"
                  onClick={() => setActiveSection(item.id)}
                >
                  <Icon className="mr-3 h-4 w-4" />
                  {item.label}
                </Button>
              </li>
            );
          })}
        </ul>
      </nav>
      
      <div className="mt-auto pt-6">
        <div className="text-center space-y-2">
          <div className="flex items-center justify-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-xs text-muted-foreground">Available for work</span>
          </div>
          <p className="text-xs text-muted-foreground">
            © 2025 Barani Swetha<br />
            All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
}