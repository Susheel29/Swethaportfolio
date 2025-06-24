import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { User, Target, Award, Lightbulb, Coffee, Heart, Zap } from 'lucide-react';

export function AboutSection() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const softSkills = [
    'Quick Learning', 'Critical Thinking', 'Problem Solving', 'Analytical Thinking',
    'Task Management', 'Collaboration', 'Communication', 'Storytelling', 'Teamwork'
  ];

  const designSkills = [
    'User Research', 'Benchmarking', 'Secondary Research', 'Product Design',
    'User Interface Design', 'Usability Testing', 'UX Mapping', 'Information Architecture',
    'User Flows', 'Wireframing', 'Prototyping', 'Design Systems', 'Visual Design'
  ];

  const leadershipSkills = [
    'Project Leadership', 'Team Collaboration', 'Communication', 'Business Acumen',
    'Workshop Facilitation', 'Client Communication'
  ];

  const tools = [
    'Figma', 'Adobe CC', 'Photoshop', 'After Effects', 'Illustrator', 
    'Analytics', 'Miro', 'Mural', 'Jira'
  ];

  const funFacts = [
    { emoji: '☕', text: 'Fueled by endless cups of coffee' },
    { emoji: '🎨', text: 'Sketching ideas on napkins since 2019' },
    { emoji: '🔍', text: 'User research detective by day' },
    { emoji: '💡', text: 'Idea generator by night' }
  ];

  return (
    <div className="w-full space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-3xl">About Me</h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Hey there! 👋 I'm a Senior Lead Experience Designer who's obsessed with creating digital experiences 
          that make people's lives easier (and maybe even spark a little joy). From logistics puzzles to banking breakthroughs, 
          I love turning complex problems into simple, delightful solutions.
        </p>
      </div>

      {/* Fun Facts */}
      <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl p-6">
        <h3 className="text-lg mb-4 text-center">Quick Fun Facts ✨</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {funFacts.map((fact, index) => (
            <div key={index} className="text-center space-y-2">
              <div className="text-2xl">{fact.emoji}</div>
              <p className="text-xs text-muted-foreground">{fact.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* My Journey */}
        <Card 
          className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          onMouseEnter={() => setHoveredCard('journey')}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <CardContent className="p-6 space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative">
                <User className="h-5 w-5 text-primary" />
                {hoveredCard === 'journey' && (
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                )}
              </div>
              <h3 className="text-lg">My Journey 🚀</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Started as a curious design intern with a Bachelor's in Industrial Design from VIT Vellore (8.7 CGPA - yes, I was that student! 🤓). 
              Fast forward through late nights, countless prototypes, and more coffee than advisable, I've grown into someone who 
              gets genuinely excited about turning user pain points into "aha!" moments. From youth banking apps to European e-commerce giants, 
              my mission remains the same: <strong>make technology more human</strong>.
            </p>
          </CardContent>
        </Card>

        {/* My Approach */}
        <Card 
          className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          onMouseEnter={() => setHoveredCard('approach')}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <CardContent className="p-6 space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative">
                <Target className="h-5 w-5 text-primary" />
                {hoveredCard === 'approach' && (
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                )}
              </div>
              <h3 className="text-lg">My Approach 🎯</h3>
            </div>
            <div className="space-y-3">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Think of me as a design detective 🕵️‍♀️ - I dig deep into user research, connect the dots between business goals and user needs, 
                and craft solutions that actually work in the real world (not just in pretty mockups).
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                <Badge variant="outline" className="text-xs flex items-center gap-1">
                  <Heart className="h-3 w-3" />
                  User-obsessed
                </Badge>
                <Badge variant="outline" className="text-xs flex items-center gap-1">
                  <Zap className="h-3 w-3" />
                  Data-driven
                </Badge>
                <Badge variant="outline" className="text-xs flex items-center gap-1">
                  <Coffee className="h-3 w-3" />
                  Results-focused
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Skills Section */}
      <div className="space-y-8 pb-16">
        <div className="text-center space-y-2">
          <h3 className="text-2xl">Skills & Superpowers 💪</h3>
          <p className="text-sm text-muted-foreground">The tools and talents I bring to every project</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Soft Skills */}
          <Card className="group hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Lightbulb className="h-5 w-5 text-primary" />
                </div>
                <h4 className="text-lg">Soft Skills ✨</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {softSkills.map((skill, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Design Skills */}
          <Card className="group hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Target className="h-5 w-5 text-primary" />
                </div>
                <h4 className="text-lg">Design Skills 🎨</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {designSkills.map((skill, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Leadership & Collaboration */}
          <Card className="group hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Award className="h-5 w-5 text-primary" />
                </div>
                <h4 className="text-lg">Leadership & Collaboration 🤝</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {leadershipSkills.map((skill, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Tools */}
          <Card className="group hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <User className="h-5 w-5 text-primary" />
                </div>
                <h4 className="text-lg">Favorite Tools 🛠️</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool, index) => (
                  <Badge 
                    key={index} 
                    variant="outline" 
                    className="text-xs hover:bg-secondary hover:border-secondary transition-colors cursor-default"
                  >
                    {tool}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}