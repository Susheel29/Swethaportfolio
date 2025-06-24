import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';
import image_7714b904bfe9bd5bf360c89d6cb7771ec6f430e7 from 'figma:asset/7714b904bfe9bd5bf360c89d6cb7771ec6f430e7.png';
import image_2154f359bef181ed1b642d62c2553b857f910669 from 'figma:asset/2154f359bef181ed1b642d62c2553b857f910669.png';
import image_c0a8de79336440b149ef09f60b5715a7d1a3617d from 'figma:asset/c0a8de79336440b149ef09f60b5715a7d1a3617d.png';
import image_456d1f913ffb11d7adc9130d84899bf3b056e65a from 'figma:asset/456d1f913ffb11d7adc9130d84899bf3b056e65a.png';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface OtherCaseStudiesProps {
  currentCaseStudyId: string;
  onViewCaseStudy: (caseStudyId: string) => void;
}

export function OtherCaseStudies({ currentCaseStudyId, onViewCaseStudy }: OtherCaseStudiesProps) {
  const allCaseStudies = [
    {
      id: 'zooplus',
      title: 'Enhancing Pet E-commerce Experience at Zooplus',
      description: 'Led Catalog UX optimization for Shopping and Order management, focusing on Product Listing and Search Results. End-to-end UX process including research, testing, and prototyping.',
      image: image_456d1f913ffb11d7adc9130d84899bf3b056e65a,
      tags: ['E-commerce UX', 'User Research', 'A/B Testing', 'Wireframing'],
      type: 'E-commerce',
      metrics: ['€80K Value Generated', '€1.3M Projected Annual Impact', 'Cross-functional Leadership']
    },
    {
      id: 'drax',
      title: 'DRAX: Unifying Planning for Global Logistics',
      description: 'Designed comprehensive B2B platform empowering planners to efficiently manage shipments. Synthesized insights from in-depth research into existing tools with high-fidelity prototypes.',
      image: image_2154f359bef181ed1b642d62c2553b857f910669,
      tags: ['B2B Platform', 'Information Architecture', 'Journey Mapping', 'User Studies'],
      type: 'Enterprise Solution',
      metrics: ['Global Logistics Scale', 'MOSCOW Workshops', 'End-to-End UX Process']
    },
    {
      id: 'youth-banking',
      title: 'Youth Banking: Digital Experience for Gen Z',
      description: 'Crafted mobile-first digital banking solution specifically for 18-25 year olds. Conducted thorough research, client workshops, and complete UX design process from wireframing to prototyping.',
      image: image_c0a8de79336440b149ef09f60b5715a7d1a3617d,
      tags: ['Mobile-First Design', 'Gen Z UX', 'Digital Banking', 'User Interviews'],
      type: 'FinTech',
      metrics: ['18-25 Target Demographic', 'Mobile-First Approach', 'Complete UX Process']
    },
    {
      id: 'nymble',
      title: 'Nymble Bot: Enhancing HMI & Mobile Experiences',
      description: 'Led intuitive HMI and mobile app design, updating Recipe Editor with 600+ new recipes and designing Session Analyser. Established user-centric design process with seamless information architecture.',
      image: image_7714b904bfe9bd5bf360c89d6cb7771ec6f430e7,
      tags: ['HMI Design', 'Mobile User Experience', 'IoT Interface', 'Information Architecture'],
      type: 'Product Design',
      metrics: ['40% ↓ Session Setup Time', '600+ New Recipes Enabled', 'Increased User Satisfaction']
    }
  ];

  // Filter out the current case study
  const otherCaseStudies = allCaseStudies.filter(study => study.id !== currentCaseStudyId);

  return (
    <section className="py-16 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl">Explore Other Case Studies</h2>

          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {otherCaseStudies.map((project, index) => (
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
                  <p className="text-sm text-muted-foreground line-clamp-3">{project.description}</p>
                  
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 3).map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="grid grid-cols-1 gap-1">
                      {project.metrics.slice(0, 2).map((metric, metricIndex) => (
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
                    onClick={() => onViewCaseStudy(project.id)}
                  >
                    View Case Study
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}