import React from 'react';
import { Button } from './ui/button';
import { ArrowRight, Award, Calendar, Download } from 'lucide-react';

interface HeroSectionProps {
  onViewProjects: () => void;
}

export function HeroSection({ onViewProjects }: HeroSectionProps) {
  const handleResumeDownload = () => {
    window.open('https://docs.google.com/document/d/1ZFtpXreEp8amP3ZxHPh2OyFN4g3xUINh/edit?usp=sharing&ouid=100819053367971633038&rtpof=true&sd=true', '_blank');
  };

  return (
    <div className="w-full space-y-8">
      {/* Main Hero Content */}
      <div className="space-y-6">
        <div className="space-y-4">
          <div className="text-4xl">👋</div>
          <h1 className="text-4xl lg:text-5xl tracking-tight">
            Hi, I'm <span className="text-primary">Barani Swetha</span>
          </h1>
          <h2 className="text-2xl lg:text-3xl text-muted-foreground">
            Product Designer
          </h2>
        </div>
        
        <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
          I craft intuitive digital experiences that solve real problems. 
          From user research to pixel-perfect designs, I help businesses 
          create products that users love and stakeholders trust.
        </p>
      </div>

      {/* Stats */}
      <div className="flex flex-wrap gap-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
            <Calendar className="h-5 w-5 text-primary" />
          </div>
          <div>
            <div className="text-2xl">3+</div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
            <Award className="h-5 w-5 text-primary" />
          </div>
          <div>
            <div className="text-2xl">5+</div>
            <div className="text-sm text-muted-foreground">Awards Won</div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="pt-4 flex flex-wrap gap-4">
        <Button 
          onClick={onViewProjects}
          className="group inline-flex items-center gap-2 px-6 py-3"
          size="lg"
        >
          View My Projects
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
        
        <Button 
          onClick={handleResumeDownload}
          variant="outline"
          className="group inline-flex items-center gap-2 px-6 py-3"
          size="lg"
        >
          Download Full Resume
          <Download className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
