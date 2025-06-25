import React from 'react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { ArrowLeft, Clock, DollarSign, Globe, User, Smartphone, BarChart3, Users, Target, Briefcase, Home, Utensils, MapPin, Shield, GraduationCap, Palette, Layers, Pen, Monitor, Lightbulb, Settings, MessageSquare, Code, ChefHat, Eye, Cog, Heart, Zap, Sparkles, CheckCircle } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import nymbleHeroImage from '../figma/intro1.png';
import nymbleTimelineImage from '../figma/journeyofnymble2.png';
import competitorAnalysisImage from '../figma/competitoranalysis1.png';
import dataAnalysisImage1 from '../figma/dataanalysis2.png';
import dataAnalysisImage2 from '../figma/dataanalysis3.png';
import userPersonaImage from '../figma/userpersona4.png';
import customerJourneyMapImage from '../figma/customerjourneymap5.png';
import lowFidelityWireframes from '../figma/lowfidwireframe6.png';
import highFidelityWireframes from '../figma/highfidwireframes7.png';
import keyScreens1 from '../figma/keyscreens8.png';
import keyScreens2 from '../figma/keyscreens9.png';
import keyScreens3 from '../figma/keyscreens10.png';
import learningsImage from '../figma/learnings11.png';
import recipeVisualizerImage from '../figma/learnings11.png';
import detailedUserPersonaImage from '../figma/learnings11.png';
import empathyMapImage from 'figma:asset/7df2c226a139a3e5f5c7b90737c8ade0cb768bbf.png';
import rapidPrototypingImage from 'figma:asset/3dc613bd8f897d51ac7303c1ee004ff919584256.png';
import highFidelityPrototype1 from 'figma:asset/3b143bf1603da6e60a980bf9c19aa2113b0e7ad0.png';
import highFidelityPrototype2 from 'figma:asset/b0b9328252c19f244b16285bb620309ba1a7b871.png';
import highFidelityPrototype3 from 'figma:asset/30d4124350da0789accafc2e1a94db788eac8868.png';
import { OtherCaseStudies } from '../OtherCaseStudies';

interface NymbleCaseStudyProps {
  onBackToPortfolio: () => void;
  onViewCaseStudy: (caseStudyId: string) => void;
  currentCaseStudyId: string;
}

// Custom label component for pie charts
const CustomLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }: any) => {
  const RADIAN = Math.PI / 180;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text 
      x={x} 
      y={y} 
      fill="white" 
      textAnchor="middle" 
      dominantBaseline="central"
      fontSize={18}
      fontWeight="600"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export function NymbleCaseStudy({ onBackToPortfolio, onViewCaseStudy, currentCaseStudyId }: NymbleCaseStudyProps) {
  // Usability testing data
  const usabilityData = [
    {
      name: 'Easy to understand',
      data: [
        { name: 'Easy', value: 96, color: '#2563eb' },
        { name: 'Difficult', value: 4, color: '#cbd5e1' }
      ]
    },
    {
      name: 'Want to use again',
      data: [
        { name: 'Yes', value: 80, color: '#2563eb' },
        { name: 'No', value: 20, color: '#cbd5e1' }
      ]
    },
    {
      name: 'Mobile version needed',
      data: [
        { name: 'Yes', value: 40, color: '#2563eb' },
        { name: 'No', value: 60, color: '#cbd5e1' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 bg-background/95 backdrop-blur-sm border-b z-50">
        <div className="max-w-6xl mx-auto px-8 py-4">
          <Button
            variant="ghost"
            onClick={onBackToPortfolio}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Portfolio
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content on the left */}
            <div className="space-y-8">
              {/* Badges */}
              <div className="flex flex-wrap gap-3">
                <Badge variant="secondary" className="px-4 py-2 text-sm">
                  Food Tech
                </Badge>
                <Badge variant="secondary" className="px-4 py-2 text-sm">
                  Feb '22 - Sept '22
                </Badge>
              </div>

              {/* Title */}
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-6xl">Designing companion apps and internal tools</h1>
                
                <p className="text-xl text-muted-foreground leading-relaxed">
                  I designed and owned the entire user journey of Nymble Bot (Their cooking robot) end to 
                  end. The goal is to provide the users with a seamless and delightful experience.
                </p>
              </div>

              {/* What did I do section */}
              <div className="space-y-6">
                <h2 className="text-2xl">What did I do?</h2>
                <p className="text-muted-foreground leading-relaxed">
                  UXD / Secondary research / User Interviews / User Journey Maps / Business Process 
                  Mapping / Persona / Wire-framing / Interaction Design / UI Design / In-Depth 
                  Documentation
                </p>
              </div>
            </div>
            
            {/* Image on the right */}
            <div className="order-first lg:order-last">
              <img 
                src={nymbleHeroImage} 
                alt="Nymble cooking robot with various food icons and cooking utensils floating around it, representing the smart cooking ecosystem and user experience design" 
                className="w-full max-w-lg mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-16 px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl mb-8">What I Did</h2>
          <div className="space-y-8">
            <p className="text-lg text-muted-foreground">
              Led the comprehensive UX research and design process for Nymble's cooking robot ecosystem, 
              focusing on creating intuitive interactions between users and their smart kitchen companion 
              through both physical HMI and mobile app interfaces.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                'User Research',
                'Persona Development',
                'Journey Mapping',
                'HMI Design',
                'Mobile App User Experience',
                'Interaction Design',
                'Usability Testing',
                'Design Systems',
                'Prototyping',
                'User Interface Design'
              ].map((method, index) => (
                <Badge key={index} variant="outline" className="justify-center p-2">
                  {method}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Nymble Section */}
      <section className="py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image on the left */}
            <div className="order-2 lg:order-1">
              <img 
                src={nymbleTimelineImage} 
                alt="Nymble Company Timeline - From prototyping in 2016-2018 to beta deliveries, showing the journey of the smart cooking robot development" 
                className="w-full rounded-lg border shadow-lg"
              />
            </div>
            
            {/* Content on the right */}
            <div className="order-1 lg:order-2 space-y-8">
              <h2 className="text-3xl">Nymble: Fresh, Fast, and Easy Home Cooking</h2>
              
              {/* Problem */}
              <div className="space-y-4">
                <h3 className="text-xl text-[rgba(0,0,0,1)]">Problem</h3>
                <p className="text-muted-foreground">
                  Cooking every day is stressful, expensive, and time-consuming. Meal kits aren't the answer - 
                  they're pricey and still require an hour in the kitchen.
                </p>
              </div>

              {/* Solution */}
              <div className="space-y-4">
                <h3 className="text-xl text-primary">Solution</h3>
                <p className="text-muted-foreground">
                  Nymble, your countertop cooking robot. Makes fresh meals in just 10 minutes, 
                  using ingredients you choose from your local store.
                </p>
              </div>

              {/* Benefits */}
              <div className="space-y-4">
                <h3 className="text-xl">Benefits</h3>
                <div className="grid grid-cols-1 gap-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="mb-1">Saves you time</h4>
                      <p className="text-sm text-muted-foreground">Forget spending an hour cooking!</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <DollarSign className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="mb-1">Saves you money</h4>
                      <p className="text-sm text-muted-foreground">No expensive meal kits needed.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <User className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="mb-1">Easy to use</h4>
                      <p className="text-sm text-muted-foreground">Anyone can cook with Nymble, even kids!</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Globe className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="mb-1">Wide variety of recipes</h4>
                      <p className="text-sm text-muted-foreground">Hundreds to choose from, including international and chef-crafted dishes.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Tabs Section */}
      <section className="py-16 px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="nymble-app" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="nymble-app" className="flex items-center gap-2">
                <Smartphone className="h-4 w-4" />
                Nymble App
              </TabsTrigger>
              <TabsTrigger value="session-analyser" className="flex items-center gap-2">
                <BarChart3 className="h-4 w-4" />
                Session Analyser
              </TabsTrigger>
            </TabsList>

            {/* Nymble App Tab */}
            <TabsContent value="nymble-app" className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-3xl">Nymble Mobile Application</h2>
                <p className="text-lg text-muted-foreground">
                  A comprehensive mobile experience that puts the power of smart cooking at your fingertips.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Key Features</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div>
                        <h4 className="mb-2">Recipe Discovery</h4>
                        <p className="text-sm text-muted-foreground">Browse hundreds of recipes with smart filtering and personalized recommendations</p>
                      </div>
                      <div>
                        <h4 className="mb-2">Remote Control</h4>
                        <p className="text-sm text-muted-foreground">Start, monitor, and control your Nymble robot from anywhere</p>
                      </div>
                      <div>
                        <h4 className="mb-2">Meal Planning</h4>
                        <p className="text-sm text-muted-foreground">Plan your weekly meals and generate automatic shopping lists</p>
                      </div>
                      <div>
                        <h4 className="mb-2">Real-time Monitoring</h4>
                        <p className="text-sm text-muted-foreground">Live updates on cooking progress with smart notifications</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Design Highlights</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div>
                        <h4 className="mb-2">Intuitive Navigation</h4>
                        <p className="text-sm text-muted-foreground">Clean, gesture-based interface designed for effortless use</p>
                      </div>
                      <div>
                        <h4 className="mb-2">Visual Status Indicators</h4>
                        <p className="text-sm text-muted-foreground">Clear progress tracking with animated cooking stages</p>
                      </div>
                      <div>
                        <h4 className="mb-2">Smart Notifications</h4>
                        <p className="text-sm text-muted-foreground">Contextual alerts that keep you informed without being intrusive</p>
                      </div>
                      <div>
                        <h4 className="mb-2">Accessibility First</h4>
                        <p className="text-sm text-muted-foreground">Designed for users of all technical skill levels and abilities</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Competitor Analysis Section */}
              <div className="space-y-6">
                <h3 className="text-2xl">Competitor Analysis</h3>
                <p className="text-lg text-muted-foreground">
                  Understanding the competitive landscape to identify opportunities and differentiate Nymble's mobile experience.
                </p>
                
                <div className="space-y-4">
                  <img 
                    src={competitorAnalysisImage} 
                    alt="Competitor Analysis - Comprehensive comparison of food delivery and cooking apps including Mellow, Swiggy, Uber Eats, DoorDash, and Oliver, showing competitor types, market positioning, strengths, and weaknesses across different categories and user value propositions" 
                    className="w-full rounded-lg border shadow-lg"
                  />
                  <p className="text-sm text-muted-foreground italic text-center">
                    Detailed competitive analysis examining market positioning, strengths, weaknesses, and opportunities 
                    across food delivery platforms and smart cooking solutions
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Key Insights</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Most competitors focus on food delivery rather than cooking automation</li>
                        <li>• Limited integration between smart appliances and mobile experiences</li>
                        <li>• Opportunity for personalized recipe recommendations</li>
                        <li>• Gap in real-time cooking monitoring and control</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Differentiation Strategy</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Focus on automated cooking vs. manual preparation</li>
                        <li>• Seamless hardware-software integration</li>
                        <li>• 10-minute meal preparation time</li>
                        <li>• Local ingredient sourcing flexibility</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Competitive Advantages</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Unique robotic cooking technology</li>
                        <li>• Cost-effective compared to meal kits</li>
                        <li>• Hands-free cooking experience</li>
                        <li>• Scalable recipe library with chef partnerships</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Data Analysis Section */}
              <div className="space-y-6">
                <h3 className="text-2xl">Data Analysis</h3>
                <p className="text-lg text-muted-foreground">
                  Comprehensive user research data and behavioral insights that informed our design decisions and product strategy.
                </p>
                
                <div className="space-y-8">
                  {/* First Data Analysis Image */}
                  <div className="space-y-4">
                    <img 
                      src={dataAnalysisImage1} 
                      alt="User Research Data Analysis - Comprehensive study showing most tedious aspects of cooking (washing utensils, chopping/prepping, bringing/setting dishes, preparing), interest in Nymble across different annual income brackets, and issues with eating healthy (time availability, taste preferences), along with participant interview photos" 
                      className="w-full rounded-lg border shadow-lg"
                    />
                    <p className="text-sm text-muted-foreground italic text-center">
                      Primary research findings from 60 participants across India, US, and UK showing cooking pain points, 
                      interest levels by income demographic, and health-related cooking challenges
                    </p>
                  </div>

                  {/* Second Data Analysis Image */}
                  <div className="space-y-4">
                    <img 
                      src={dataAnalysisImage2} 
                      alt="Comparative Data Analysis - Regional comparison between Within India and Outside India showing meal sourcing preferences (take-out/eating outside, meal delivery, cooking at home), typical home cooked meal descriptions, and essential features required for cooking solutions with detailed percentage breakdowns" 
                      className="w-full rounded-lg border shadow-lg"
                    />
                    <p className="text-sm text-muted-foreground italic text-center">
                      Regional behavioral analysis comparing cooking habits and preferences between Indian and international markets, 
                      revealing key insights for feature prioritization and market adaptation
                    </p>
                  </div>

                  {/* Data Insights Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Research Methodology</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>• <strong>60 participants interviewed</strong> across 3 countries (India, US, UK)</li>
                          <li>• <strong>Mixed demographics:</strong> 30 from India, 20 from US, 10 from UK</li>
                          <li>• <strong>Income analysis:</strong> Segmented by annual income brackets</li>
                          <li>• <strong>Behavioral patterns:</strong> Regional cooking habit comparison</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Key Research Findings</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>• <strong>Top pain point:</strong> Washing utensils identified as most tedious cooking aspect</li>
                          <li>• <strong>Income correlation:</strong> Higher income brackets show increased interest in Nymble</li>
                          <li>• <strong>Health challenges:</strong> Time availability is primary barrier to healthy eating</li>
                          <li>• <strong>Regional differences:</strong> Cooking preferences vary significantly by geography</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>

              {/* User Persona Section */}
              <div className="space-y-6">
                <h3 className="text-2xl">User Persona</h3>
                <p className="text-lg text-muted-foreground">
                  Detailed user personas developed from our research data to guide design decisions and feature prioritization.
                </p>
                
                {/* User Persona Image */}
                <div className="space-y-4">
                  <img 
                    src={userPersonaImage} 
                    alt="User Personas - Kenneth Bastain (28 years old, single, studio apartment California, Computer Systems analyst $5K) and Reena Agarwal (32 years old, Joint flex Bangalore, Event marketing Head $7K firm, Salary $6k per month, Married with two kids) showing their values, goals, frustrations, and personalities with detailed behavioral insights and motivations" 
                    className="w-full rounded-lg border shadow-lg"
                  />
                  <p className="text-sm text-muted-foreground italic text-center">
                    Two primary user personas developed from extensive research: Kenneth Bastain representing the tech-savvy professional segment 
                    and Reena Agarwal representing the busy parent demographic, with detailed insights into their values, goals, and frustrations
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Primary Personas</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div>
                          <h5 className="mb-1">Kenneth Bastain</h5>
                          <p className="text-sm text-muted-foreground">28, Single, Computer Systems Analyst - Values efficiency and smart technology integration</p>
                        </div>
                        <div>
                          <h5 className="mb-1">Reena Agarwal</h5>
                          <p className="text-sm text-muted-foreground">32, Married with kids, Event Marketing Head - Needs time-saving solutions for family meals</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Common Pain Points</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Time-intensive cooking preparation</li>
                        <li>• Cleanup and utensil washing burden</li>
                        <li>• Limited healthy eating options</li>
                        <li>• Inconsistent meal quality</li>
                        <li>• Lack of cooking variety</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Shared Goals</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Save time on daily meal preparation</li>
                        <li>• Maintain healthy eating habits</li>
                        <li>• Enjoy variety in home-cooked meals</li>
                        <li>• Reduce kitchen cleanup time</li>
                        <li>• Control ingredient quality and sourcing</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                {/* Personality Buckets */}
                <div className="space-y-6">
                  <h4 className="text-xl">Personality Buckets We Mapped</h4>
                  <p className="text-muted-foreground">
                    Through our research, we identified six distinct personality types that represent our target user base, 
                    each with unique motivations, preferences, and barriers to adoption.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center gap-2">
                          <Target className="h-5 w-5 text-primary" />
                          Technocrats (US)
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          Love new tech, analytical decision makers, interested in Nymble's functionality.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center gap-2">
                          <Home className="h-5 w-5 text-primary" />
                          Old-Fashioned/Large Families (India)
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          Skeptical of automation, prefer home-cooked meals, low tech adoption.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center gap-2">
                          <Briefcase className="h-5 w-5 text-primary" />
                          Workaholics (A & B)
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          Busy professionals, prioritize convenience (A: health-focused, B: taste-focused). 
                          Both A & B in India & US, A enjoys cooking but lacks time, B dislikes cooking.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center gap-2">
                          <MapPin className="h-5 w-5 text-primary" />
                          Millennial Urbanites (Under 45-50)
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          Busy city dwellers, value easy instructions, feedback, and community.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center gap-2">
                          <Shield className="h-5 w-5 text-primary" />
                          Restricted Diets
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          Manage specific dietary needs (vegan, gluten-free, etc.), cook often for control.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center gap-2">
                          <GraduationCap className="h-5 w-5 text-primary" />
                          Sponsored (Students & Housewives)
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          Financially dependent, students (US/UK) more enthusiastic than Indian students. 
                          Housewives skeptical.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>

              {/* Customer Journey Map Section */}
              <div className="space-y-6">
                <h3 className="text-2xl">Customer Journey Map</h3>
                <p className="text-lg text-muted-foreground">
                  Detailed journey mapping for our primary persona Reena Agarwal, showing her path from awareness to adoption and the key touchpoints, emotions, and opportunities for improvement.
                </p>
                
                <div className="space-y-4">
                  <img 
                    src={customerJourneyMapImage} 
                    alt="Customer Journey Map for Reena Agarwal - showing journey phases (Awareness, Explore, Selection, Testing) with corresponding actions, mindsets and emotions, and opportunities and insights across each phase. The map details her busy lifestyle challenges, meal kit subscriptions, cooking attempts, and emotional journey from guilt to disappointment, with specific touchpoints and improvement opportunities identified" 
                    className="w-full rounded-lg border shadow-lg"
                  />
                  <p className="text-sm text-muted-foreground italic text-center">
                    Comprehensive customer journey map for Reena Agarwal showing her progression through awareness, exploration, 
                    selection, and testing phases, with detailed insights into her actions, emotions, and key decision points
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Journey Insights</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• <strong>Awareness Phase:</strong> Realizes impact of fast food on health, seeks alternatives</li>
                        <li>• <strong>Exploration Phase:</strong> Tries meal subscriptions and family cooking routines</li>
                        <li>• <strong>Selection Phase:</strong> Evaluates options based on convenience and customization</li>
                        <li>• <strong>Testing Phase:</strong> Experiences frustration with time-consuming solutions</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Key Opportunities</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• <strong>Easy decision making:</strong> Simplified onboarding and selection process</li>
                        <li>• <strong>Dietary customization:</strong> Vegan, vegetarian, and gluten-free options</li>
                        <li>• <strong>Seamless experience:</strong> Intuitive app interface and controls</li>
                        <li>• <strong>24/7 support:</strong> Comprehensive customer assistance and guidance</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Design System Section */}
              <div className="space-y-6">
                <h3 className="text-2xl flex items-center gap-2">
                  <Palette className="h-6 w-6 text-primary" />
                  Design System
                </h3>
                <p className="text-lg text-muted-foreground">
                  Typography and color palette that forms the foundation of Nymble's visual identity and user interface design.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Typography</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h5 className="mb-2">Font Family</h5>
                        <p className="text-sm text-muted-foreground mb-3">Inter - A modern, highly legible typeface designed for user interfaces</p>
                        <div className="space-y-2 text-sm">
                          <div>
                            <span className="text-muted-foreground">Regular:</span> 
                            <span className="ml-2">Body text, descriptions, secondary information</span>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Medium:</span> 
                            <span className="ml-2">Headings, navigation, important labels</span>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Semibold:</span> 
                            <span className="ml-2">Primary headings, call-to-action buttons</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Color Palette</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-3">
                        <div className="flex items-center gap-3">
                          <div className="w-6 h-6 rounded" style={{ backgroundColor: '#FDE8C4' }}></div>
                          <div>
                            <p className="text-sm">#FDE8C4</p>
                            <p className="text-xs text-muted-foreground">Warm Cream</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-6 h-6 rounded" style={{ backgroundColor: '#F7A699' }}></div>
                          <div>
                            <p className="text-sm">#F7A699</p>
                            <p className="text-xs text-muted-foreground">Coral Pink</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-6 h-6 rounded" style={{ backgroundColor: '#D3DFED' }}></div>
                          <div>
                            <p className="text-sm">#D3DFED</p>
                            <p className="text-xs text-muted-foreground">Soft Blue</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-6 h-6 rounded" style={{ backgroundColor: '#000000' }}></div>
                          <div>
                            <p className="text-sm">#000000</p>
                            <p className="text-xs text-muted-foreground">Pure Black</p>
                          </div>
                        </div>
                      </div>
                      <div className="pt-2">
                        <p className="text-xs text-muted-foreground">
                          Colors selected for accessibility, brand warmth, and optimal contrast ratios across all interface elements.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Low Fidelity Wireframes Section */}
              <div className="space-y-6">
                <h3 className="text-2xl flex items-center gap-2">
                  <Layers className="h-6 w-6 text-primary" />
                  Low Fidelity Wireframes
                </h3>
                <p className="text-lg text-muted-foreground">
                  Initial wireframe concepts exploring the core user flows and information architecture for the Nymble mobile application.
                </p>
                
                <div className="space-y-4">
                  <img 
                    src={lowFidelityWireframes} 
                    alt="Low Fidelity Wireframes - Initial wireframe concepts showing user authentication flow, recipe preview flow, profile screen, recipe progress flow, prepping flow, and recipe search flow with basic layout structures, navigation patterns, and content organization for the Nymble mobile application" 
                    className="w-full rounded-lg border shadow-lg"
                  />
                  <p className="text-sm text-muted-foreground italic text-center">
                    Early wireframe explorations focusing on user flow mapping, content hierarchy, and basic interaction patterns 
                    across key application screens including authentication, recipe browsing, cooking progress, and user profiles
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Key User Flows</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• <strong>User Authentication:</strong> Streamlined sign-up and login process</li>
                        <li>• <strong>Recipe Discovery:</strong> Browse, search, and preview recipe options</li>
                        <li>• <strong>Cooking Progress:</strong> Step-by-step cooking guidance and monitoring</li>
                        <li>• <strong>Profile Management:</strong> User preferences and cooking history</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Design Principles</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• <strong>Simplicity:</strong> Clean, uncluttered interface design</li>
                        <li>• <strong>Accessibility:</strong> Clear navigation and readable content</li>
                        <li>• <strong>Efficiency:</strong> Minimal steps to complete key tasks</li>
                        <li>• <strong>Consistency:</strong> Unified interaction patterns throughout</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* High Fidelity Wireframes Section */}
              <div className="space-y-6">
                <h3 className="text-2xl flex items-center gap-2">
                  <Pen className="h-6 w-6 text-primary" />
                  High Fidelity Wireframes
                </h3>
                <p className="text-lg text-muted-foreground">
                  Detailed wireframes incorporating the Nymble design system, brand colors, and refined user interface elements.
                </p>
                
                <div className="space-y-4">
                  <img 
                    src={highFidelityWireframes} 
                    alt="High Fidelity Wireframes - Detailed wireframes showing user authentication flow, recipe preview flow, profile screen, recipe progress flow, prepping flow, and recipe search flow with final visual design, Nymble branding, color palette implementation, typography, and polished user interface elements" 
                    className="w-full rounded-lg border shadow-lg"
                  />
                  <p className="text-sm text-muted-foreground italic text-center">
                    Refined wireframes with complete visual design implementation, incorporating Nymble's brand identity, 
                    color palette, typography, and final interface elements across all major user flows
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Visual Enhancements</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• <strong>Brand Integration:</strong> Consistent use of Nymble colors and typography</li>
                        <li>• <strong>Visual Hierarchy:</strong> Clear content prioritization and scanning patterns</li>
                        <li>• <strong>Interactive Elements:</strong> Defined button states and feedback mechanisms</li>
                        <li>• <strong>Food Imagery:</strong> Appetizing recipe photos and visual cooking cues</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Advanced Features</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• <strong>Progress Tracking:</strong> Visual cooking stage indicators and timers</li>
                        <li>• <strong>Recipe Customization:</strong> Dietary filters and portion adjustments</li>
                        <li>• <strong>Smart Recommendations:</strong> Personalized recipe suggestions</li>
                        <li>• <strong>Social Integration:</strong> Recipe sharing and community features</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Key Screens Section */}
              <div className="space-y-6">
                <h3 className="text-2xl flex items-center gap-2">
                  <Monitor className="h-6 w-6 text-primary" />
                  Key Screens
                </h3>
                <p className="text-lg text-muted-foreground">
                  Final mobile application screens showcasing the complete user experience across core functionality, user management, and system feedback.
                </p>
                
                <div className="space-y-8">
                  {/* First Set: Home, Search, Recipe Preview */}
                  <div className="space-y-4">
                    <img 
                      src={keyScreens1} 
                      alt="Key App Screens - Home Screen with all-in-one place vital user experience showing Our Cuisines, Your Favourites, Our Collections, Create a recipe, Try Something New, and Choose by Ingredients sections. Search screen with time efficient filters and recipe database. Recipe preview screen showing ingredients needed, prep and cooking checklists to start cooking with the bot" 
                      className="w-full rounded-lg border shadow-lg"
                    />
                    <p className="text-sm text-muted-foreground italic text-center">
                      Core navigation and recipe discovery screens: Home screen with comprehensive feature access, 
                      advanced Search with intelligent filters, and detailed Recipe preview with ingredient preparation guidance
                    </p>
                  </div>

                  {/* Second Set: Recipe Progress, Profile, Cart */}
                  <div className="space-y-4">
                    <img 
                      src={keyScreens2} 
                      alt="Additional Key Screens - Recipe Progress screen showing cooking process with live monitoring indicated when error occurs and direct support contact. Profile screen with user information, subscription details, account management, recipes, orders, settings, help and support sections. Cart screen enabling spice pods and ingredients purchase through Nymble with free delivery for first 3 orders" 
                      className="w-full rounded-lg border shadow-lg"
                    />
                    <p className="text-sm text-muted-foreground italic text-center">
                      User management and cooking monitoring: Recipe Progress with live status updates and error handling, 
                      comprehensive Profile management, and integrated Cart for ingredient and spice pod purchasing
                    </p>
                  </div>

                  {/* Third Set: Error and Confirmation Screens */}
                  <div className="space-y-4">
                    <img 
                      src={keyScreens3} 
                      alt="System Feedback Screens - Error screens showing subscription termination message and offline connectivity status with clear user guidance. Confirmation screens including order placement confirmation and food ready notification with completion celebration, designed to keep users informed and make them feel safe" 
                      className="w-full rounded-lg border shadow-lg"
                    />
                    <p className="text-sm text-muted-foreground italic text-center">
                      System feedback and user communication: Error screens with clear messaging and actionable guidance, 
                      and Confirmation screens providing positive reinforcement and cooking completion celebration
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Navigation & Discovery</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• <strong>Centralized Home:</strong> All features accessible from single dashboard</li>
                        <li>• <strong>Smart Search:</strong> Time-efficient filters and recipe database access</li>
                        <li>• <strong>Recipe Preview:</strong> Complete ingredient lists and preparation guidance</li>
                        <li>• <strong>Visual Hierarchy:</strong> Clear content organization and user flow</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">User Management</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• <strong>Live Monitoring:</strong> Real-time cooking progress and error detection</li>
                        <li>• <strong>Profile Control:</strong> Comprehensive account and subscription management</li>
                        <li>• <strong>Integrated Commerce:</strong> Seamless ingredient and spice pod ordering</li>
                        <li>• <strong>Support Access:</strong> Direct help and customer service integration</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">System Feedback</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• <strong>Clear Error Handling:</strong> Simple, actionable error messages</li>
                        <li>• <strong>Positive Reinforcement:</strong> Celebration of cooking achievements</li>
                        <li>• <strong>Status Communication:</strong> Transparent system and connectivity updates</li>
                        <li>• <strong>User Confidence:</strong> Design that makes users feel safe and informed</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Learnings Section */}
              <div className="space-y-6">
                <h3 className="text-2xl flex items-center gap-2">
                  <Lightbulb className="h-6 w-6 text-primary" />
                  Learnings
                </h3>
                <p className="text-lg text-muted-foreground">
                  Key insights and professional growth gained through the comprehensive design and development process of the Nymble mobile application.
                </p>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  {/* Content on the left */}
                  <div className="order-2 lg:order-1 space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                          <Users className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <h4 className="mb-2">Research & User Studies</h4>
                          <p className="text-sm text-muted-foreground">Gained expertise in user research, data categorization, and curation.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                          <Users className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <h4 className="mb-2">Collaboration</h4>
                          <p className="text-sm text-muted-foreground">Learned valuable lessons from experienced professionals.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                          <Monitor className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <h4 className="mb-2">Design for Development</h4>
                          <p className="text-sm text-muted-foreground">Successfully created developer-friendly interfaces, minimizing development effort. (This involved discussions with developers and understanding development processes.)</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                          <Target className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <h4 className="mb-2">Integration</h4>
                          <p className="text-sm text-muted-foreground">Mastered integrating feedback and perspectives from various teams.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                          <Lightbulb className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <h4 className="mb-2">Foundational Experience</h4>
                          <p className="text-sm text-muted-foreground">Established valuable guidelines for my future design career.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Image on the right */}
                  <div className="order-1 lg:order-2">
                    <img 
                      src={learningsImage} 
                      alt="Mobile app interface screens showing Creator's Recipe with Chef Dorian Hunter, Sweet potato gnocchi, Chicken Chili, and Coffee Pasta recipes. Welcome screen with onboarding flow, My Profile section with account management options including My Recipes, My Orders, Settings, Help & Support. Cooking Process screen showing Chicken Butter Masala recipe with step-by-step instructions and progress tracking. Additional screens show macro instructions for prawns preparation and cooking process details" 
                      className="w-full rounded-lg border shadow-lg"
                    />
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Session Analyser Tab */}
            <TabsContent value="session-analyser" className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-3xl flex items-center gap-2">
                  <Settings className="h-6 w-6 text-primary" />
                  Building Internal Tool: A Mindset shift for product people
                </h2>
                <p className="text-lg text-muted-foreground">
                  It is a common pattern at many software companies: the customer-facing products and features are clean, polished, and thoughtfully designed, while behind the scenes, the people who sell, implement, and support customers struggle to get their work done. It's easy to treat the UX of such internal tools as an afterthought and rely on documentation and training to fill the gaps in what is, in truth, poor product quality. It's often tempting to dedicate the best people and all of our time to work on customer-facing problems while leaving coworkers to fend for themselves.
                </p>
              </div>

              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">Problem Brief</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      The Nymble bot connects a lot of diverse teams. A few of these are the Software team, Engineering, Robotics, Vision, Design, Marketing and Bizops. With Beta Trials coming up, it's high time that we build a tool that give's access to the data that each team requires efficiently. With just a few prototypes out in the alpha trials, the teams had to go through a long process to fetch, analyze and edit/respond to data. Nymble will be releasing 50 bots for the beta trials, which equals ton loads of data to be fetched, analyzed and troubleshoot. As the start-up is growing exponentially for the beta trials, It also means there will be more people who need access to specific data related to their domain. Therefore, It is high time at Nymble to build an internal tool that facilitates all this requirements.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">Initial Problem Statement</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      To design an internal tool for Nymble's employees to create recipes and analyze recipe sessions using the data provided by the Nymble bot.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="mb-2">Primary User</h4>
                        <p className="text-sm text-muted-foreground">Chefs, Engineers, Industrial designers and technicians</p>
                      </div>
                      <div>
                        <h4 className="mb-2">Secondary User</h4>
                        <p className="text-sm text-muted-foreground">Team leads and co-founders</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* The Recipe visualizer Section */}
                <div className="space-y-6">
                  <h3 className="text-2xl">The Recipe visualizer</h3>
                  <p className="text-lg text-muted-foreground">
                    Since the recipe editor was developed earlier, a version of it was still available for me take a look and analyze. I got the chance to talk to people and consolidate the process behind this version that was called the Recipe visualizer.
                  </p>
                  
                  <div className="space-y-4">
                    <img 
                      src={recipeVisualizerImage} 
                      alt="Recipe Visualizer Interface - Shows the existing recipe editing interface with multiple screens displaying recipe creation workflows, debug interfaces, and various tool screens. The image includes pain points and explanations: Creating Recipe - recipes are created on Airtable and user cannot edit or analyse it here, Debug recipes are not distinguished - there are live and debug recipes with no separation causing errors, Preset recipe integration - needs to be added to recipes for kitchen teams, No room for improvement - Vision team needs space for machine learning models in current design" 
                      className="w-full rounded-lg border shadow-lg"
                    />
                    <p className="text-sm text-muted-foreground italic text-center">
                      Analysis of the existing Recipe Visualizer showing current workflow screens, identified pain points, 
                      and areas for improvement in recipe creation, debugging, and team collaboration processes
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Key Pain Points Identified</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>• <strong>Creating Recipe:</strong> Recipes are created on Airtable and user cannot edit or analyse it here</li>
                          <li>• <strong>Debug recipes are not distinguished:</strong> There are live and debug recipes with no separation causing errors</li>
                          <li>• <strong>Preset recipe integration:</strong> Feature needs to be added to recipes for kitchen teams</li>
                          <li>• <strong>No room for improvement:</strong> Vision team needs space for machine learning models in current design</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Current Workflow Issues</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>• Fragmented workflow across multiple platforms</li>
                          <li>• Lack of clear separation between testing and production</li>
                          <li>• Limited collaboration features for cross-functional teams</li>
                          <li>• No integrated analysis capabilities for recipe performance</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* User Persona Section */}
                <div className="space-y-6">
                  <h3 className="text-2xl flex items-center gap-2">
                    <MessageSquare className="h-6 w-6 text-primary" />
                    User Persona
                  </h3>
                  <p className="text-lg text-muted-foreground">
                    Understanding the diverse team members who will be using the internal tool through interviews and insights gathering to inform our design decisions.
                  </p>
                  
                  {/* Interviews Section */}
                  <div className="space-y-6">
                    <h4 className="text-xl">Interviews</h4>
                    <p className="text-muted-foreground">
                      We conducted interviews with key team members across different departments to understand their specific needs and pain points.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                      <Card>
                        <CardHeader>
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center">
                              <Code className="h-6 w-6 text-teal-600" />
                            </div>
                            <div>
                              <CardTitle className="text-lg">Raghav Parwal</CardTitle>
                              <p className="text-sm text-muted-foreground">Engineering</p>
                            </div>
                          </div>
                        </CardHeader>
                      </Card>

                      <Card>
                        <CardHeader>
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                              <Cog className="h-6 w-6 text-blue-600" />
                            </div>
                            <div>
                              <CardTitle className="text-lg">Shubham Sharma</CardTitle>
                              <p className="text-sm text-muted-foreground">Firmware</p>
                            </div>
                          </div>
                        </CardHeader>
                      </Card>

                      <Card>
                        <CardHeader>
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
                              <ChefHat className="h-6 w-6 text-orange-600" />
                            </div>
                            <div>
                              <CardTitle className="text-lg">Siddarth Yerra</CardTitle>
                              <p className="text-sm text-muted-foreground">KitchenOps</p>
                            </div>
                          </div>
                        </CardHeader>
                      </Card>

                      <Card>
                        <CardHeader>
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                              <Eye className="h-6 w-6 text-purple-600" />
                            </div>
                            <div>
                              <CardTitle className="text-lg">Tushar Kumar</CardTitle>
                              <p className="text-sm text-muted-foreground">Vision</p>
                            </div>
                          </div>
                        </CardHeader>
                      </Card>
                    </div>
                  </div>

                  {/* Insights Section */}
                  <div className="space-y-6">
                    <h4 className="text-xl">Insights</h4>
                    <p className="text-muted-foreground">
                      Key insights gathered from interviews about requirements for both Recipe editor and Session Analyser tools.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg flex items-center gap-2">
                            <Pen className="h-5 w-5 text-primary" />
                            Recipe Editor
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-3 text-sm text-muted-foreground">
                            <li className="flex items-start gap-2">
                              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                              <span>Freedom to create and innovate</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                              <span>Scalable design</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                              <span>Easily understandable by a Layman</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                              <span>Simple due to evolving AI/ML Models</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                              <span>Minimize Developer Effort</span>
                            </li>
                          </ul>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg flex items-center gap-2">
                            <BarChart3 className="h-5 w-5 text-primary" />
                            Session Analyser
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-3 text-sm text-muted-foreground">
                            <li className="flex items-start gap-2">
                              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                              <span>Prioritize failed sessions</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                              <span>Efficiency is the goal</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                              <span>Proper Demarcation of instructions</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                              <span>KitchenOps team is use this a lot</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                              <span>Support delegation for future updates</span>
                            </li>
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>

                {/* Detailed User Persona Section */}
                <div className="space-y-6">
                  <h3 className="text-2xl flex items-center gap-2">
                    <User className="h-6 w-6 text-primary" />
                    User Persona
                  </h3>
                  <p className="text-lg text-muted-foreground">
                    Detailed personas for our internal tool users, including their frustrations, needs, values, goals, and brand associations.
                  </p>
                  
                  <div className="space-y-4">
                    <img 
                      src={detailedUserPersonaImage} 
                      alt="Detailed User Personas - Shows three team member profiles: Raghav Parwal (25 years old, 2 min technology, married, software engineer, frustrations with quality control and time management, needs high quality code and data, values innovation and scalability, goals include getting personal caret decisions and learns aggressively, personality sincere, friendly, passionate, brand associations with Apple, Starbucks, Nike), Shubham Sharma (28 years old, B.Sc technology, single, frustrations with lack of time inefficiency and requirements, needs flexibility and quality work, values innovation and dedication, goals include finding skills for team delegation and systematic debugging, brand associations with Apple, Twitter, Mercedes), and Tushar Kumar (26 years old, B.tech, single, frustrations with lack of time, inefficiency, and requirements, needs systematic debugging and innovation, values punctuality and discipline, goals include innovation and streamlining processes, brand associations with Apple, Starbucks, and Nike, personality outgoing, innovative, passionate)" 
                      className="w-full rounded-lg border shadow-lg"
                    />
                    <p className="text-sm text-muted-foreground italic text-center">
                      Comprehensive user personas showing detailed profiles of Raghav Parwal (Engineering), Shubham Sharma (Firmware), 
                      and Tushar Kumar (Vision team), including their frustrations, needs, values, goals, personality traits, and brand associations
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Common Frustrations</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>• Lack of time for quality work</li>
                          <li>• Inefficiency in current processes</li>
                          <li>• Requirements not being met effectively</li>
                          <li>• Quality control and time management issues</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Shared Values</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>• Innovation and scalability</li>
                          <li>• High quality deliverables</li>
                          <li>• Systematic approaches to problems</li>
                          <li>• Punctuality and discipline</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Common Goals</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>• Systematic debugging processes</li>
                          <li>• Team delegation and collaboration</li>
                          <li>• Learning and skill development</li>
                          <li>• Streamlining workflows</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Empathy Map and Customer Journey Map Section */}
                <div className="space-y-6">
                  <h3 className="text-2xl flex items-center gap-2">
                    <Heart className="h-6 w-6 text-primary" />
                    Empathy Map and Customer Journey Map
                  </h3>
                  <p className="text-lg text-muted-foreground">
                    Understanding the emotional and functional journey of our primary user Raghav Parwal through empathy mapping and detailed journey analysis.
                  </p>
                  
                  <div className="space-y-4">
                    <img 
                      src={empathyMapImage} 
                      alt="Empathy Map and Customer Journey Map for Raghav Parwal - Shows empathy map sections for Think and Feel (frustrated due to long debugging process, burdened by the quantity of bugs to fix, likes feedback occasionally, feels better knowing when debugging results due to problem faced), Say and Do (likes to discuss more than debug everyday, gets upset over posts to satisfy mess, gives quality over quantity, puts quality to schedule demanding, talks a lot about debugging with solutions), Hear (hears specialized talks from all through-out and not at one place, has multiple debugging session, has multiple works going on at same time), See (seeing separated files from all through-out and not at one place, has work management or session due to debugging), Pain (frustration and scattered information), and Gain (end result will be positive user feedback and increase in sales). Also includes detailed customer journey map showing phases (Awareness, Experiment, Evaluation, Selection) with corresponding touchpoints, actions, mindsets and emotions, opportunities and insights for each phase" 
                      className="w-full rounded-lg border shadow-lg"
                    />
                    <p className="text-sm text-muted-foreground italic text-center">
                      Comprehensive empathy map exploring Raghav's thoughts, feelings, actions, and observations, 
                      alongside his complete customer journey from awareness to selection with detailed touchpoints and emotional states
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Empathy Insights</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>• <strong>Think & Feel:</strong> Frustrated by long debugging processes and quantity of bugs</li>
                          <li>• <strong>See & Hear:</strong> Scattered information across multiple platforms creates confusion</li>
                          <li>• <strong>Say & Do:</strong> Values quality over quantity, seeks collaborative debugging solutions</li>
                          <li>• <strong>Pain Points:</strong> Information fragmentation and debugging inefficiency</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Journey Opportunities</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>• <strong>Awareness:</strong> Clear problem identification and solution positioning</li>
                          <li>• <strong>Experiment:</strong> Easy trial access and supportive onboarding</li>
                          <li>• <strong>Evaluation:</strong> Comprehensive feature demonstration and comparison</li>
                          <li>• <strong>Selection:</strong> Streamlined adoption process with team buy-in</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Rapid Prototyping Section */}
                <div className="space-y-6">
                  <h3 className="text-2xl flex items-center gap-2">
                    <Zap className="h-6 w-6 text-primary" />
                    Rapid Prototyping
                  </h3>
                  <p className="text-lg text-muted-foreground">
                    Early wireframe concepts and rapid prototyping to validate design ideas and user workflows for the internal session analyser tool.
                  </p>
                  
                  <div className="space-y-4">
                    <img 
                      src={rapidPrototypingImage} 
                      alt="Rapid Prototyping Wireframes - Shows low-fidelity wireframe sketches for the internal tool including list views with filtering options, detail screens with data visualization, dashboard layouts with multiple data panels, session analysis interfaces with charts and graphs, user management screens, and workflow navigation patterns. The wireframes demonstrate basic layout structures, content organization, and user interaction patterns across 6 different screen concepts" 
                      className="w-full rounded-lg border shadow-lg"
                    />
                    <p className="text-sm text-muted-foreground italic text-center">
                      Low-fidelity wireframe sketches exploring various interface concepts including list views, 
                      data visualization layouts, dashboard designs, and workflow navigation patterns for the session analyser tool
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Wireframe Concepts</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>• <strong>List Views:</strong> Session lists with filtering and sorting options</li>
                          <li>• <strong>Detail Screens:</strong> Comprehensive session analysis with data visualization</li>
                          <li>• <strong>Dashboard Layouts:</strong> Multi-panel interfaces for data overview</li>
                          <li>• <strong>Chart Interfaces:</strong> Data visualization for session performance analysis</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Design Validation</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>• <strong>Quick Iteration:</strong> Rapid exploration of multiple layout options</li>
                          <li>• <strong>User Workflow:</strong> Validation of navigation patterns and information hierarchy</li>
                          <li>• <strong>Content Organization:</strong> Testing different approaches to data presentation</li>
                          <li>• <strong>Interaction Patterns:</strong> Early validation of user interaction models</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* High Fidelity Prototypes Section */}
                <div className="space-y-6">
                  <h3 className="text-2xl flex items-center gap-2">
                    <Sparkles className="h-6 w-6 text-primary" />
                    High fidelity prototypes
                  </h3>
                  <p className="text-lg text-muted-foreground">
                    Final high-fidelity prototypes showcasing the complete internal tool interface with detailed data visualization, session analysis capabilities, and admin controls.
                  </p>
                  
                  <div className="space-y-8">
                    {/* First High Fidelity Prototype */}
                    <div className="space-y-4">
                      <img 
                        src={highFidelityPrototype1} 
                        alt="High Fidelity Prototype - Session Analysis Interface showing Mattar Paneer recipe analysis with detailed food imaging, heat map visualization, bot processing timeline with colored segments, visual score indicators, and comprehensive data panels displaying cooking parameters, temperature readings, and session metadata for debugging and quality assessment" 
                        className="w-full rounded-lg border shadow-lg"
                      />
                      <p className="text-sm text-muted-foreground italic text-center">
                        Session Analysis Interface featuring comprehensive food imaging analysis with heat map visualization, 
                        detailed timeline tracking, and visual scoring systems for quality assessment and debugging
                      </p>
                    </div>

                    {/* Second High Fidelity Prototype */}
                    <div className="space-y-4">
                      <img 
                        src={highFidelityPrototype2} 
                        alt="High Fidelity Prototype - Recipe Creation Interface showing Timeline View for Breakfast Potatoes with Sausage recipe creation workflow, displaying ingredient specifications (Vegetable Oil, Red Potato, Salt), cooking instruction steps with parameters, dispense oil instructions, frying instructions with temperature and duration controls, and create instructions panel with action parameters and description fields" 
                        className="w-full rounded-lg border shadow-lg"
                      />
                      <p className="text-sm text-muted-foreground italic text-center">
                        Recipe Creation Interface with intuitive timeline view showing ingredient specifications, 
                        step-by-step cooking instructions, and comprehensive parameter controls for recipe development and testing
                      </p>
                    </div>

                    {/* Third High Fidelity Prototype */}
                    <div className="space-y-4">
                      <img 
                        src={highFidelityPrototype3} 
                        alt="High Fidelity Prototype - Admin Controls Interface showing Proto admin dashboard with manage protos and recipe blocks sections, proto details table displaying user information (Proto ID, User ID, User Name, Registered On, Region, Debug status), filtering options, and administrative controls for managing prototype deployments and user access across different regions" 
                        className="w-full rounded-lg border shadow-lg"
                      />
                      <p className="text-sm text-muted-foreground italic text-center">
                        Admin Controls Interface providing comprehensive prototype management with user tracking, 
                        regional deployment controls, and debug status monitoring for efficient internal tool administration
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Session Analysis Features</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>• <strong>Visual Data Analysis:</strong> Heat map visualization for food cooking analysis</li>
                          <li>• <strong>Timeline Tracking:</strong> Detailed cooking process progression with color coding</li>
                          <li>• <strong>Quality Scoring:</strong> Visual indicators for session success and quality metrics</li>
                          <li>• <strong>Debug Information:</strong> Comprehensive metadata and parameter readings</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Recipe Creation Tools</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>• <strong>Ingredient Management:</strong> Detailed specification controls for recipe components</li>
                          <li>• <strong>Step-by-Step Builder:</strong> Intuitive workflow for creating cooking instructions</li>
                          <li>• <strong>Parameter Controls:</strong> Precise cooking temperature and duration settings</li>
                          <li>• <strong>Real-time Preview:</strong> Visual feedback for recipe development process</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Admin Management</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>• <strong>User Management:</strong> Comprehensive user tracking and access control</li>
                          <li>• <strong>Regional Controls:</strong> Geographic deployment and monitoring capabilities</li>
                          <li>• <strong>Debug Management:</strong> Status tracking and troubleshooting tools</li>
                          <li>• <strong>Data Filtering:</strong> Advanced filtering and search functionality</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Usability Testing Section */}
                <div className="space-y-6">
                  <h3 className="text-2xl flex items-center gap-2">
                    <CheckCircle className="h-6 w-6 text-primary" />
                    Usability Testing
                  </h3>
                  <p className="text-lg text-muted-foreground">
                    Now that we knew what information we needed to surface, we needed to evaluate how and where we surfaced this information. Usability testing provided us with insight into how well we were meeting user's expectations. With all the employees given their own time to test the product and get back to us with their feedback, I was able to collect quite some information.
                  </p>

                  <div className="space-y-6">
                    <h4 className="text-xl">A few key insights were:</h4>
                    
                    <div className="grid grid-cols-1 gap-4">
                      <div className="space-y-1">
                        <p className="text-muted-foreground">1. <strong>96%</strong> people found it easy to understand and navigate through the app</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-muted-foreground">2. <strong>80%</strong> people wanted to use it again and showed interest in using the features in their day to day life.</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-muted-foreground">3. <strong>40%</strong> of the users wanted the project to also be made for mobiles</p>
                      </div>
                    </div>

                    {/* Pie Charts */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      {usabilityData.map((item, index) => (
                        <Card key={index}>
                          <CardHeader>
                            <CardTitle className="text-center text-lg">
                              {item.name === 'Easy to understand' && 'Easy to understand and navigate'}
                              {item.name === 'Want to use again' && 'Want to use it again'}
                              {item.name === 'Mobile version needed' && 'Mobile version needed'}
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="h-48 w-full">
                              <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                  <Pie
                                    data={item.data}
                                    cx="50%"
                                    cy="50%"
                                    labelLine={false}
                                    label={CustomLabel}
                                    outerRadius={80}
                                    fill="#8884d8"
                                    dataKey="value"
                                  >
                                    {item.data.map((entry, idx) => (
                                      <Cell key={`cell-${idx}`} fill={entry.color} />
                                    ))}
                                  </Pie>
                                </PieChart>
                              </ResponsiveContainer>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Testing Methodology</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>• <strong>Internal testing:</strong> All employees given access to test the product</li>
                          <li>• <strong>Self-paced evaluation:</strong> Users tested in their own time and context</li>
                          <li>• <strong>Comprehensive feedback:</strong> Collected detailed user insights and suggestions</li>
                          <li>• <strong>Cross-functional input:</strong> Feedback from diverse team members and roles</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Key Outcomes</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>• <strong>High usability score:</strong> 96% found the interface intuitive and easy to navigate</li>
                          <li>• <strong>Strong adoption intent:</strong> 80% expressed interest in regular usage</li>
                          <li>• <strong>Mobile demand:</strong> 40% requested mobile version for enhanced accessibility</li>
                          <li>• <strong>Validation success:</strong> Design meets user expectations and workflow needs</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">Project Conclusion</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      The Nymble Session Analyser project successfully transformed fragmented internal workflows into a unified, efficient platform. Through comprehensive user research, iterative design, and thorough usability testing, we created an internal tool that not only meets current operational needs but also scales with the company's growth trajectory.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <h4 className="mb-2">Impact Achieved</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Consolidated multiple platforms into single, efficient interface</li>
                          <li>• Reduced debugging time and improved team collaboration</li>
                          <li>• Enhanced data accessibility across Engineering, Vision, and Kitchen teams</li>
                          <li>• Established scalable foundation for beta trial operations</li>
                        </ul>
                      </div>
                      <div className="space-y-3">
                        <h4 className="mb-2">Future Opportunities</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Mobile version development based on user demand</li>
                          <li>• Advanced analytics and machine learning integration</li>
                          <li>• Enhanced real-time collaboration features</li>
                          <li>• Expanded automation capabilities for routine tasks</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Other Case Studies */}
      <OtherCaseStudies currentCaseStudyId={currentCaseStudyId} onViewCaseStudy={onViewCaseStudy} />
    </div>
  );
}
