import React from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Mail, Linkedin } from 'lucide-react';

export function ContactSection() {
  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'araxdesignn@gmail.com',
      href: 'mailto:araxdesignn@gmail.com',
      primary: true
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'www.linkedin.com/in/baraniswetha',
      href: 'https://www.linkedin.com/in/baraniswetha',
      primary: true
    }
  ];

  return (
    <section className="py-8 sm:py-12 lg:py-16 space-y-8 sm:space-y-10 lg:space-y-12">
      {/* Header Section */}
      <div className="text-center space-y-3 sm:space-y-4 px-4">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl">Let's Work Together</h2>
        <p className="text-base sm:text-lg text-muted-foreground max-w-xl sm:max-w-2xl mx-auto leading-relaxed">
          I'm always interested in new opportunities and exciting projects. 
          Let's discuss how we can create something amazing together.
        </p>
      </div>

      {/* Contact Information */}
      <div className="w-full max-w-4xl mx-auto px-4">
        <div className="space-y-6 sm:space-y-8">
          <h3 className="text-lg sm:text-xl text-center">Get in Touch</h3>
          
          {/* Responsive Grid Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-2xl mx-auto">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <Card 
                  key={index} 
                  className={`group hover:shadow-lg transition-all duration-300 w-full ${
                    method.primary ? 'ring-2 ring-primary/20 hover:ring-primary/30' : ''
                  }`}
                >
                  <CardContent className="p-4 sm:p-6">
                    <a 
                      href={method.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 sm:gap-4 text-inherit hover:text-primary transition-colors w-full"
                    >
                      {/* Icon Container - Responsive sizing */}
                      <div className={`
                        w-10 h-10 sm:w-12 sm:h-12 
                        rounded-lg flex items-center justify-center flex-shrink-0 
                        transition-transform duration-200 group-hover:scale-105
                        ${method.primary ? 'bg-primary text-primary-foreground' : 'bg-muted'}
                      `}>
                        <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                      </div>
                      
                      {/* Text Content - Responsive and flexible */}
                      <div className="min-w-0 flex-1 space-y-1">
                        <p className="text-sm sm:text-base font-medium leading-tight">
                          {method.label}
                        </p>
                        <p className="text-xs sm:text-sm text-muted-foreground break-all leading-tight">
                          {method.value}
                        </p>
                      </div>
                    </a>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="text-center pt-8 sm:pt-12 border-t border-border px-4 space-y-4">
        <p className="text-sm sm:text-base text-muted-foreground max-w-md mx-auto">
          Thanks for visiting my portfolio. Looking forward to connecting with you!
        </p>
        
        {/* Social Icons */}
        <div className="flex justify-center gap-3 sm:gap-4">
          {contactMethods.slice(0, 2).map((method, index) => {
            const Icon = method.icon;
            return (
              <Button 
                key={index} 
                variant="ghost" 
                size="sm" 
                asChild
                className="hover:bg-primary/10 transition-colors duration-200"
              >
                <a 
                  href={method.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 sm:p-3"
                >
                  <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                </a>
              </Button>
            );
          })}
        </div>
      </div>
    </section>
  );
}