import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';
import Zooplus from './figma/zooplus1.png';
import Dhldrax from './figma/dhldrax2.png';
import Yallafinance from './figma/yallafinance3.png';
import Nymble from './figma/nymble4.png';
import image_7714b904bfe9bd5bf360c89d6cb7771ec6f430e7 from 'figma:asset/7714b904bfe9bd5bf360c89d6cb7771ec6f430e7.png';
import image_d53c3b51c232a06a42df6309791396c831c4da07 from 'figma:asset/d53c3b51c232a06a42df6309791396c831c4da07.png';
import image_c4672df7d52b05f07dc0bddb2bdba50a04ae0f79 from 'figma:asset/c4672df7d52b05f07dc0bddb2bdba50a04ae0f79.png';
import image_9a5715e15a3ecfbfaf60ff59a8b33b7536c49c07 from 'figma:asset/9a5715e15a3ecfbfaf60ff59a8b33b7536c49c07.png';
import image_2154f359bef181ed1b642d62c2553b857f910669 from 'figma:asset/2154f359bef181ed1b642d62c2553b857f910669.png';
import image_c0a8de79336440b149ef09f60b5715a7d1a3617d from 'figma:asset/c0a8de79336440b149ef09f60b5715a7d1a3617d.png';
import image_456d1f913ffb11d7adc9130d84899bf3b056e65a from 'figma:asset/456d1f913ffb11d7adc9130d84899bf3b056e65a.png';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProjectsSectionProps {
  onViewCaseStudy?: (caseStudyId: string) => void;
}

export function ProjectsSection({ onViewCaseStudy }: ProjectsSectionProps) {
  const projects = [
    {
      id: 'zooplus',
      title: 'Enhancing Pet E-commerce Experiences at Zooplus - Article based product listing',
      description: 'Led Catalog UX optimization for Shopping and Order management, focusing on Product Listing and Search Results. End-to-end UX process including research, testing, and prototyping.',
      image: Zooplus,
      tags: ['E-commerce User Experience', 'User Research', 'A/B Testing', 'Wireframing'],
      type: 'E-commerce',
      metrics: ['€80K Value Generated', '€1.3M Projected Annual Impact', 'Client Leadership Collaboration']
    },
    {
      id: 'drax',
      title: 'DRAX: Seamless Global Logistics Through Unified Planning ',
      description: 'Designed comprehensive B2B platform empowering planners to efficiently manage shipments. Synthesized insights from in-depth research into existing tools with high-fidelity prototypes.',
      image: Dhldrax,
      tags: ['B2B Platform', 'Information Architecture', 'Journey Mapping', 'User Studies'],
      type: 'Enterprise Solution',
      metrics: ['Global Logistics Scale', 'MOSCOW Workshops', 'End-to-End UX Process']
    },
    {
      id: 'youth-banking',
      title: 'Youth Banking in Jordan: Digital Experiences for Gen Z',
      description: 'Crafted mobile-first digital banking solution specifically for 18-25 year olds. Conducted thorough research, client workshops, and complete UX design process from wireframing to prototyping.',
      image: Yallafinance,
      tags: ['Mobile-First Design', 'UX for GenZ', 'Digital Banking', 'User Interviews'],
      type: 'FinTech',
      metrics: ['18-25 Target Demographic', 'Mobile-First Approach', 'Complete UX Process']
    },
    {
      id: 'nymble',
      title: 'Nymble (now Posha) Bot: Enhancing HMI & Mobile Experiences',
      description: 'Led intuitive HMI and mobile app design, updating Recipe Editor with 600+ new recipes and designing Session Analyser. Established user-centric design process with seamless information architecture.',
      image: Nymble,
      tags: ['HMI Design', 'Mobile User Experience', 'IoT Interface', 'Information Architecture'],
      type: 'Product Design',
      metrics: ['40% ↓ Session Setup Time', '600+ New Recipes Enabled', 'Increased User Satisfaction']
    }
  ];

  const testimonials = [
    {
      quote: "Exceptional designer with team spirit and outstanding individual contributor in projects. She is dedicated and continuously thrive to learn new skills and a committed person to train new members.",
      author: "Sundarapandian Chellakkannu",
      role: "Senior Manager - Wongdoody"
    },
    {
      quote: "Barani is a great designer who is diligent, smart and take ownership in all the projects or activities she participates. She has grown alot since the time she joined and for the better.",
      author: "Beenish Fathima",
      role: "Manager - Wongdoody"
    }
  ];

  const handleViewCaseStudy = (projectId: string) => {
    if (onViewCaseStudy) {
      onViewCaseStudy(projectId);
    }
  };

  return (
    <div className="w-full space-y-12">
      {/* Projects Overview */}
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl">Featured Projects</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <Badge variant="secondary">{project.type}</Badge>
                </div>
                <CardTitle className="text-lg">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 pt-0">
                <p className="text-sm text-muted-foreground">{project.description}</p>
                
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="grid grid-cols-1 gap-1">
                    {project.metrics.map((metric, metricIndex) => (
                      <p key={metricIndex} className="text-xs text-primary">
                        {metric}
                      </p>
                    ))}
                  </div>
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full" 
                  size="sm"
                  onClick={() => handleViewCaseStudy(project.id)}
                >
                  View Case Study
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="space-y-8 pb-16">
        <div className="text-center space-y-4">
          <h3 className="text-2xl">What People Say</h3>
          <p className="text-muted-foreground">
            Feedback from colleagues, clients, and collaborators.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6">
              <CardContent className="space-y-4 p-0">
                <p className="text-sm leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="text-sm">{testimonial.author}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
