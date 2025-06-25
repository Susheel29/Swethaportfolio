import React from 'react';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { ArrowLeft, Calendar, Users, Target, TrendingUp, Search, BarChart3, MessageSquare, User, Heart, Smartphone, Award, Facebook, Instagram, Twitter, Youtube, GraduationCap, Building2, UserCheck, Users2 } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { OtherCaseStudies } from '../OtherCaseStudies';
import exampleImage from 'figma:asset/caa4cfcfce9c6439138c716263070ea7e36b36d6.png';
import kickoffImage from '../figma/workshopactivitiesandprocess3.png';
import interviewsImage from 'figma:asset/2a0dd07c56f0235f59ba103acc04c88728efd244.png';
import definitionImage from '../figma/designbriefanddevelopment4.png';
import mvpImage from '../figma/finalmvpdesign5.png';
import image_c0a8de79336440b149ef09f60b5715a7d1a3617d from '../figma/yallafinance3.png';
import image_8183a527f56abb433da4c87d1940c4e88f12a3ac from '../figma/exploratoryresearch2.png';
import riseAwardImage from '../figma/recognition6.png';

interface YouthBankingCaseStudyProps {
  onBackToPortfolio: () => void;
  onViewCaseStudy: (caseStudyId: string) => void;
  currentCaseStudyId: string;
}

export function YouthBankingCaseStudy({ onBackToPortfolio, onViewCaseStudy, currentCaseStudyId }: YouthBankingCaseStudyProps) {
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
            <div className="space-y-6">
              <Badge variant="secondary" className="w-fit">Mobile Banking</Badge>
              <h1 className="text-4xl lg:text-5xl">Yalla Finance: Digital Banking Experience for Gen Z</h1>
              <p className="text-lg text-muted-foreground">
                Bridged the youth finance gap in Jordan with Yalla Finance: a sleek app empowering young adults 
                with budgeting tools, referral rewards, and seamless spending control tailored for Jordanian youth culture.
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-primary" />
                  <span className="text-sm">Feb '23 - Sept '23</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-primary" />
                  <span className="text-sm">Youth Banking</span>
                </div>
                <div className="flex items-center gap-2">
                  <Target className="h-4 w-4 text-primary" />
                  <span className="text-sm">Gen Z Focus</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-primary" />
                  <span className="text-sm">Mobile-First</span>
                </div>
              </div>
            </div>
            
            <div className="aspect-video rounded-xl overflow-hidden">
              <ImageWithFallback
                src={image_c0a8de79336440b149ef09f60b5715a7d1a3617d}
                alt="Yalla Finance Mobile Banking App"
                className="w-full h-full object-cover"
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
              Led the end-to-end UX design process for Yalla Finance, focusing on understanding Jordanian youth 
              behavior and financial needs through comprehensive research and strategic design approaches.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                'UX Workshops',
                'Strategic Design', 
                'Secondary Research',
                'User Surveys',
                'User Interviews',
                'Data Synthesis',
                'Presentations',
                'Persona Development',
                'Empathy Mapping',
                'Card Sorting',
                'Information Architecture',
                'Wireframing'
              ].map((method, index) => (
                <Badge key={index} variant="outline" className="justify-center p-2">
                  {method}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Project Approach & Methodology */}
      <section className="py-16 px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl mb-8">Project Approach & Methodology</h2>
          
          <div className="space-y-8">
            <p className="text-lg text-muted-foreground">
              Our comprehensive approach combined strategic workshops, extensive research, and iterative design 
              to create a youth banking solution tailored specifically for Jordan's unique cultural and demographic landscape.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5 text-primary" />
                    Research Foundation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• <strong>Market Analysis:</strong> Jordan demographic and economic research</li>
                    <li>• <strong>Youth Behavior:</strong> Banking habits and digital preferences study</li>
                    <li>• <strong>Cultural Context:</strong> Understanding Jordanian youth culture</li>
                    <li>• <strong>Digital Patterns:</strong> Device usage and social media trends</li>
                    <li>• <strong>Financial Literacy:</strong> Educational landscape assessment</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageSquare className="h-5 w-5 text-primary" />
                    User-Centered Research
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• <strong>21 Participants:</strong> Youth (18-25), educators, bank professionals</li>
                    <li>• <strong>Structured Interviews:</strong> Deep behavioral and cultural insights</li>
                    <li>• <strong>Survey Design:</strong> Quantitative validation of assumptions</li>
                    <li>• <strong>Pain Point Analysis:</strong> Current banking experience gaps</li>
                    <li>• <strong>Feature Prioritization:</strong> User-driven requirement gathering</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Key Project Insights */}
            <div className="bg-card border rounded-lg p-6">
              <h4 className="mb-4 flex items-center gap-2">
                <Target className="h-5 w-5 text-primary" />
                Key Project Insights
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h5 className="mb-2">Market Opportunity</h5>
                  <p className="text-sm text-muted-foreground">
                    63% of Jordan's population is youth, with 64.3% of 18-25 year olds lacking bank accounts - 
                    representing a massive untapped market for digital banking solutions.
                  </p>
                </div>
                <div>
                  <h5 className="mb-2">Mobile-First Imperative</h5>
                  <p className="text-sm text-muted-foreground">
                    63.65% of youth primarily use mobile phones, making mobile-first design essential 
                    for reaching and engaging the target demographic.
                  </p>
                </div>
                <div>
                  <h5 className="mb-2">Cultural Integration</h5>
                  <p className="text-sm text-muted-foreground">
                    Social features and referral systems align with Jordan's socially-connected youth culture, 
                    particularly strong social media engagement patterns.
                  </p>
                </div>
                <div>
                  <h5 className="mb-2">Educational Foundation</h5>
                  <p className="text-sm text-muted-foreground">
                    High financial literacy rates create opportunities for sophisticated features while 
                    maintaining the need for intuitive, youth-focused interface design.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Development Phases */}
      <section className="py-16 px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl mb-8">Project Development Process</h2>
          
          <div className="space-y-8">
            <p className="text-lg text-muted-foreground">
              The Yalla Finance project followed a structured, user-centered design process spanning 8 months, 
              from initial market research through comprehensive design definition and strategic planning.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card className="border-2 border-primary bg-primary/5">
                <CardContent className="pt-6">
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm mb-3">
                    ✓
                  </div>
                  <h4 className="mb-2">Discovery & Research</h4>
                  <p className="text-sm text-muted-foreground">
                    Market analysis, demographic research, and cultural insights to understand Jordan's youth banking landscape.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-2 border-primary bg-primary/5">
                <CardContent className="pt-6">
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm mb-3">
                    ✓
                  </div>
                  <h4 className="mb-2">Strategic Alignment</h4>
                  <p className="text-sm text-muted-foreground">
                    Cross-functional workshops to align stakeholders, define scope, and establish project foundations.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-2 border-primary bg-primary/5">
                <CardContent className="pt-6">
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm mb-3">
                    ✓
                  </div>
                  <h4 className="mb-2">User Research</h4>
                  <p className="text-sm text-muted-foreground">
                    In-depth interviews, surveys, and behavioral analysis with 21 participants across key demographics.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-2 border-primary bg-primary/5">
                <CardContent className="pt-6">
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm mb-3">
                    ✓
                  </div>
                  <h4 className="mb-2">Design Definition</h4>
                  <p className="text-sm text-muted-foreground">
                    Comprehensive design brief, personas, user journeys, and strategic direction development.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Process Methodology */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Phase 1-2: Foundation</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Market landscape analysis</li>
                    <li>• Stakeholder workshop planning</li>
                    <li>• Cross-functional team alignment</li>
                    <li>• Project scope definition</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Phase 3: User Insights</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Interview question crafting</li>
                    <li>• Participant recruitment</li>
                    <li>• Data collection & synthesis</li>
                    <li>• Insight validation</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Phase 4: Design Strategy</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• UX objectives definition</li>
                    <li>• Persona development</li>
                    <li>• Design brief creation</li>
                    <li>• Strategic direction setting</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="bg-card border rounded-lg p-6">
              <h4 className="mb-4">Project Foundation Complete</h4>
              <p className="text-muted-foreground mb-4">
                The foundational research and definition phases established a comprehensive understanding of Jordan's 
                youth banking opportunity, user needs, and design direction. This systematic approach ensured that 
                subsequent design and development work would be grounded in real user insights and market realities.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Market Research ✓</Badge>
                <Badge variant="outline">User Insights ✓</Badge>
                <Badge variant="outline">Strategic Foundation ✓</Badge>
                <Badge variant="outline">Design Brief ✓</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Discovery Section */}
      <section className="py-16 px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl mb-8 flex items-center gap-2">
            <Search className="h-8 w-8 text-primary" />
            Discovery
          </h2>
          
          <div className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <h3 className="text-2xl">Exploratory Research</h3>
                <p className="text-muted-foreground">
                  Kicked off the project with deep user research, delving into Jordanian youth culture to uncover 
                  behavioral patterns and insights that fueled the app's design.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Youth Culture Research</Badge>
                  <Badge variant="outline">Behavioral Analysis</Badge>
                  <Badge variant="outline">Market Insights</Badge>
                </div>
              </div>
              <div className="aspect-video rounded-lg overflow-hidden">
                <ImageWithFallback
                  src={image_8183a527f56abb433da4c87d1940c4e88f12a3ac}
                  alt="Research and Discovery Process"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Jordan Market Research */}
      <section className="py-16 px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl mb-8">Jordan Youth Banking Landscape</h2>
          
          <div className="space-y-8">
            <p className="text-lg text-muted-foreground max-w-3xl">
              Our research revealed critical insights about Jordan's unique demographic composition and the 
              significant opportunity in youth banking services.
            </p>

            {/* Key Statistics from the Image */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <Card>
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                          <Users className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="text-2xl text-primary">63%</h4>
                          <p className="text-sm text-muted-foreground">of Jordan's population is youth</p>
                        </div>
                      </div>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <p>• 42.2% of Jordanians are 14 or younger</p>
                        <p>• 31.4% are 15-29 years old</p>
                        <p>• Total population of 11 million</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                          <BarChart3 className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="text-2xl text-primary">35.7%</h4>
                          <p className="text-sm text-muted-foreground">Youth with Bank Accounts (18-25 years)</p>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Significant opportunity to capture the remaining 64.3% of unbanked youth 
                        through digital-first solutions.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Social Media Usage Insight */}
              <div className="space-y-4">
                <Card className="border-2 border-primary/20 bg-gradient-to-br from-blue-50 to-purple-50">
                  <CardContent className="pt-8 pb-8">
                    <div className="text-center space-y-6">
                      <div className="space-y-4">
                        <h4 className="text-2xl text-primary">Social Media Dominance</h4>
                        <p className="text-lg text-foreground max-w-2xl mx-auto">
                          Jordanian youth between the ages of 18 and 35 make up the largest segment of social media users
                        </p>
                      </div>
                      
                      {/* Social Media Icons */}
                      <div className="flex justify-center items-center gap-6 pt-4">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-500 text-white shadow-lg">
                          <Facebook className="w-6 h-6" />
                        </div>
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg">
                          <Instagram className="w-6 h-6" />
                        </div>
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-400 text-white shadow-lg">
                          <Twitter className="w-6 h-6" />
                        </div>
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-red-500 text-white shadow-lg">
                          <Youtube className="w-6 h-6" />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <p className="text-sm text-muted-foreground italic text-center">
                  Social media engagement patterns highlight the importance of digital-first solutions for Jordan's youth market
                </p>
              </div>
            </div>

            {/* Device Usage Statistics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card className="text-center">
                <CardContent className="pt-4">
                  <div className="text-2xl text-primary mb-2">📱</div>
                  <h4 className="text-lg mb-1">63.65%</h4>
                  <p className="text-xs text-muted-foreground">Cell Phone</p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="pt-4">
                  <div className="text-2xl text-primary mb-2">💻</div>
                  <h4 className="text-lg mb-1">35.01%</h4>
                  <p className="text-xs text-muted-foreground">Laptop & Desktop</p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="pt-4">
                  <div className="text-2xl text-primary mb-2">📱</div>
                  <h4 className="text-lg mb-1">1.20%</h4>
                  <p className="text-xs text-muted-foreground">Tablets</p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="pt-4">
                  <div className="text-2xl text-primary mb-2">🎮</div>
                  <h4 className="text-lg mb-1">0.15%</h4>
                  <p className="text-xs text-muted-foreground">Other Devices</p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-card border rounded-lg p-6">
              <h4 className="mb-4 flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-primary" />
                Key Discovery Insights
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h5 className="mb-2">Mobile-First Opportunity</h5>
                  <p className="text-sm text-muted-foreground">
                    With 63.65% of youth primarily using cell phones, a mobile-first banking solution 
                    aligns perfectly with user behavior and device preferences.
                  </p>
                </div>
                <div>
                  <h5 className="mb-2">Social Media Integration</h5>
                  <p className="text-sm text-muted-foreground">
                    Jordanian youth between 18-35 make up the largest segment of social media users, 
                    presenting opportunities for social features and referral systems.
                  </p>
                </div>
                <div>
                  <h5 className="mb-2">Financial Education Need</h5>
                  <p className="text-sm text-muted-foreground">
                    High financial literacy rates (education in 3,387 schools) create an educated user base 
                    ready for sophisticated financial tools and features.
                  </p>
                </div>
                <div>
                  <h5 className="mb-2">Untapped Market</h5>
                  <p className="text-sm text-muted-foreground">
                    64.3% of 18-25 year olds lack bank accounts, representing a significant market 
                    opportunity for digital banking solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Kickoff */}
      <section className="py-16 px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl mb-8">The Kickoff</h2>
          
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-lg text-muted-foreground">
                To align and create a common understanding towards project scope, I was part of planning 
                the kick-off workshop. We collaborated to develop the workshop after completing individual 
                tasks, using different points of view and creativity.
              </p>
              <p className="text-muted-foreground">
                This strategy demonstrated good coordination and resulted in a well-rounded kick-off event 
                that established clear project foundations and team alignment.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Workshop Planning</Badge>
                <Badge variant="outline">Stakeholder Alignment</Badge>
                <Badge variant="outline">Collaborative Strategy</Badge>
              </div>
            </div>

            {/* Workshop Activities */}
            <div className="space-y-6">
              <h3 className="text-2xl">Workshop Activities & Process</h3>
              <div className="space-y-4">
                <ImageWithFallback
                  src={kickoffImage} 
                  alt="Yalla Finance Kickoff Workshop - Brainstorming Sessions and Planning Activities" 
                  className="w-full rounded-lg border"
                />
                <p className="text-sm text-muted-foreground italic text-center">
                  Collaborative workshop sessions featuring design thinking activities, concept development, 
                  and strategic planning exercises
                </p>
              </div>
            </div>

            {/* Workshop Outcomes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="h-5 w-5 text-primary" />
                    Cross-functional Collaboration
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Individual task completion before group activities</li>
                    <li>• Integration of diverse perspectives and viewpoints</li>
                    <li>• Creative problem-solving approaches</li>
                    <li>• Coordinated team efforts and alignment</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5 text-primary" />
                    Project Foundation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Clear project scope definition</li>
                    <li>• Stakeholder expectations alignment</li>
                    <li>• Strategic direction establishment</li>
                    <li>• Team coordination framework</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Key Achievements */}
            <div className="bg-card border rounded-lg p-6">
              <h4 className="mb-4 flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                Kickoff Workshop Achievements
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h5 className="mb-2">Strategic Alignment</h5>
                  <p className="text-sm text-muted-foreground">
                    Established common understanding of project goals, user needs, 
                    and business objectives across all team members.
                  </p>
                </div>
                <div>
                  <h5 className="mb-2">Creative Synthesis</h5>
                  <p className="text-sm text-muted-foreground">
                    Combined individual insights and diverse perspectives into 
                    cohesive project direction and design strategy.
                  </p>
                </div>
                <div>
                  <h5 className="mb-2">Coordinated Approach</h5>
                  <p className="text-sm text-muted-foreground">
                    Developed structured methodology for research, design, and 
                    development phases with clear responsibilities.
                  </p>
                </div>
              </div>
            </div>

            {/* Workshop Methods */}
            <div className="space-y-6">
              <h3 className="text-xl">Workshop Methods & Tools</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Card className="text-center">
                  <CardContent className="pt-4">
                    <div className="text-2xl mb-2">🧩</div>
                    <h4 className="text-sm mb-1">Design Thinking</h4>
                    <p className="text-xs text-muted-foreground">Problem framing</p>
                  </CardContent>
                </Card>
                
                <Card className="text-center">
                  <CardContent className="pt-4">
                    <div className="text-2xl mb-2">💡</div>
                    <h4 className="text-sm mb-1">Brainstorming</h4>
                    <p className="text-xs text-muted-foreground">Idea generation</p>
                  </CardContent>
                </Card>
                
                <Card className="text-center">
                  <CardContent className="pt-4">
                    <div className="text-2xl mb-2">🗺️</div>
                    <h4 className="text-sm mb-1">Journey Mapping</h4>
                    <p className="text-xs text-muted-foreground">User flow planning</p>
                  </CardContent>
                </Card>
                
                <Card className="text-center">
                  <CardContent className="pt-4">
                    <div className="text-2xl mb-2">🎯</div>
                    <h4 className="text-sm mb-1">Goal Setting</h4>
                    <p className="text-xs text-muted-foreground">Success metrics</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interviews and Surveys */}
      <section className="py-16 px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl mb-8">Interviews and Surveys</h2>
          
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-lg text-muted-foreground">
                Crafted insightful interview questions and surveys, transcribed interviews to capture user voices, 
                and synthesised key findings to fuel informed design decisions.
              </p>
              <p className="text-muted-foreground">
                Additionally, I actively participated and interviewed users, gaining firsthand understanding 
                of their needs and behaviors within the Jordanian youth banking context.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">User Interviews</Badge>
                <Badge variant="outline">Survey Design</Badge>
                <Badge variant="outline">Data Synthesis</Badge>
                <Badge variant="outline">Voice Capture</Badge>
              </div>
            </div>

            {/* Interview Participants Breakdown */}
            <div className="space-y-6">
              <h3 className="text-2xl">Research Participants</h3>
              <div className="space-y-4">
                {/* Custom Participants Breakdown */}
                <div className="bg-white rounded-lg border p-8">
                  <div className="text-center space-y-6">
                    <h4 className="text-2xl text-primary mb-6">21 Total Participants</h4>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                      {/* Youth 18-21 */}
                      <div className="text-center space-y-4">
                        <div className="flex justify-center">
                          <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                            <UserCheck className="w-8 h-8 text-blue-600" />
                          </div>
                        </div>
                        <div>
                          <h5 className="text-3xl text-blue-600 mb-1">7</h5>
                          <p className="text-sm text-foreground">Youth</p>
                          <p className="text-xs text-muted-foreground">(18-21 years)</p>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          Banking habits & digital preferences
                        </p>
                      </div>

                      {/* Youth 22-25 */}
                      <div className="text-center space-y-4">
                        <div className="flex justify-center">
                          <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                            <Users2 className="w-8 h-8 text-green-600" />
                          </div>
                        </div>
                        <div>
                          <h5 className="text-3xl text-green-600 mb-1">7</h5>
                          <p className="text-sm text-foreground">Youth</p>
                          <p className="text-xs text-muted-foreground">(22-25 years)</p>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          Financial goals & challenges
                        </p>
                      </div>

                      {/* Educators */}
                      <div className="text-center space-y-4">
                        <div className="flex justify-center">
                          <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center">
                            <GraduationCap className="w-8 h-8 text-purple-600" />
                          </div>
                        </div>
                        <div>
                          <h5 className="text-3xl text-purple-600 mb-1">1</h5>
                          <p className="text-sm text-foreground">Educator</p>
                          <p className="text-xs text-muted-foreground">&nbsp;</p>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          Educational context & insights
                        </p>
                      </div>

                      {/* Bank Employees */}
                      <div className="text-center space-y-4">
                        <div className="flex justify-center">
                          <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center">
                            <Building2 className="w-8 h-8 text-orange-600" />
                          </div>
                        </div>
                        <div>
                          <h5 className="text-3xl text-orange-600 mb-1">6</h5>
                          <p className="text-sm text-foreground">Bank</p>
                          <p className="text-xs text-muted-foreground">Employees</p>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          Industry perspectives
                        </p>
                      </div>
                    </div>

                    {/* Summary */}
                    <div className="pt-6 border-t border-gray-200">
                      <p className="text-sm text-muted-foreground">
                        Comprehensive participant mix ensuring diverse perspectives from target users, 
                        educational stakeholders, and banking industry professionals
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Research Process */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              

            </div>

            {/* Key Research Insights */}
            <div className="bg-card border rounded-lg p-6">
              <h4 className="mb-4 flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                Key Research Insights
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h5 className="mb-2">Youth Behavior Patterns</h5>
                  <p className="text-sm text-muted-foreground">
                    Identified distinct differences between younger (18-21) and older (22-25) youth segments 
                    in terms of financial maturity and banking expectations.
                  </p>
                </div>
                <div>
                  <h5 className="mb-2">Educational Context</h5>
                  <p className="text-sm text-muted-foreground">
                    Educator insights revealed the importance of financial literacy integration 
                    and the need for educational banking features.
                  </p>
                </div>
                <div>
                  <h5 className="mb-2">Industry Perspective</h5>
                  <p className="text-sm text-muted-foreground">
                    Bank employee feedback provided crucial understanding of existing systems, 
                    customer service challenges, and digital transformation opportunities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Definition Workshop */}
      <section className="py-16 px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl mb-8">The Definition Workshop</h2>
          
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-lg text-muted-foreground">
                I took part in planning the definition workshop to define design objectives, 
                develop a comprehensive design brief and understand client's vision.
              </p>
              <p className="text-muted-foreground">
                This collaborative workshop established the foundation for our design direction, 
                ensuring alignment between user needs, business goals, and technical constraints.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Design Objectives</Badge>
                <Badge variant="outline">Design Brief</Badge>
                <Badge variant="outline">Client Vision</Badge>
                <Badge variant="outline">Strategic Planning</Badge>
              </div>
            </div>

            {/* Workshop Activities */}
            <div className="space-y-6">
              <h3 className="text-2xl">Workshop Activities & Deliverables</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { activity: 'UX Objective', icon: '🎯' },
                  { activity: 'Design Target', icon: '🎨' },
                  { activity: 'Persona', icon: '👤' },
                  { activity: 'UX Metrics', icon: '📊' },
                  { activity: 'Empathy Map', icon: '💭' },
                  { activity: 'Design Brief', icon: '📋' },
                  { activity: 'Design Direction', icon: '🧭' },
                  { activity: 'Mood Board', icon: '🎨' },
                  { activity: 'Brainstorming', icon: '💡' },
                  { activity: 'Concept Creation', icon: '✨' },
                  { activity: 'Rapid Wire-framing', icon: '📐' },
                  { activity: 'Rapid UX Audit', icon: '🔍' }
                ].map((item, index) => (
                  <Card key={index} className="text-center">
                    <CardContent className="pt-4">
                      <div className="text-2xl mb-2">{item.icon}</div>
                      <h4 className="text-xs">{item.activity}</h4>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Design Brief Documentation */}
            <div className="space-y-6">
              <h3 className="text-2xl">Design Brief Development</h3>
              <div className="space-y-4">
                <ImageWithFallback
                  src={definitionImage} 
                  alt="Design Brief comparison showing Presented Version in the Workshop and Feedback/Suggestions from the Workshop side by side" 
                  className="w-full rounded-lg"
                />
                <p className="text-sm text-muted-foreground italic text-center">
                  Side-by-side comparison of the original design brief presented in the workshop and the refined version 
                  incorporating stakeholder feedback and suggestions from collaborative discussions
                </p>
              </div>
            </div>

            {/* Workshop Outcomes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5 text-primary" />
                    Design Objectives Defined
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Clear product vision and value proposition</li>
                    <li>• Target user segments and personas</li>
                    <li>• Key UX objectives and success metrics</li>
                    <li>• Design principles and constraints</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="h-5 w-5 text-primary" />
                    Client Vision Alignment
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Business goals and user needs integration</li>
                    <li>• Feature scope and prioritization</li>
                    <li>• Brand direction and mood board creation</li>
                    <li>• Technical feasibility considerations</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Key Achievements */}
            <div className="bg-card border rounded-lg p-6">
              <h4 className="mb-4 flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                Definition Workshop Achievements
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h5 className="mb-2">Strategic Foundation</h5>
                  <p className="text-sm text-muted-foreground">
                    Established comprehensive design brief with clear objectives, target users, 
                    and success metrics aligned with business goals.
                  </p>
                </div>
                <div>
                  <h5 className="mb-2">Creative Direction</h5>
                  <p className="text-sm text-muted-foreground">
                    Developed mood boards, design principles, and visual direction that 
                    resonated with Jordanian youth culture and banking expectations.
                  </p>
                </div>
                <div>
                  <h5 className="mb-2">Rapid Prototyping</h5>
                  <p className="text-sm text-muted-foreground">
                    Created initial wireframes and conducted UX audit to validate concepts 
                    and identify potential design challenges early in the process.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Challenge Reframed */}
      <section className="py-20 px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-12">
            {/* Section Title */}
            <h2 className="text-3xl text-foreground mb-16">The Challenge Reframed</h2>
            
            {/* Main Statement */}
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl text-[#F59E0B] leading-tight">
                Create positive experiences
              </h1>
              <p className="text-2xl md:text-3xl text-foreground">
                relevant to the youth and young adults.
              </p>
            </div>
            
            {/* Heart Card */}
            <div className="flex justify-center pt-8">
              <Card className="w-full max-w-2xl border-2 border-border/50 shadow-lg">
                <CardContent className="py-16 px-8">
                  <div className="text-center space-y-8">
                    {/* Heart Icon */}
                    <div className="flex justify-center">
                      <div className="w-24 h-24 bg-red-500 rounded-full flex items-center justify-center shadow-lg">
                        <Heart className="w-12 h-12 text-white fill-white" />
                      </div>
                    </div>
                    
                    {/* Message */}
                    <h3 className="text-2xl md:text-3xl text-foreground leading-relaxed">
                      Make the App Lovable at the first Swipe!
                    </h3>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* The MVP */}
      <section className="py-16 px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl mb-8 flex items-center gap-2">
            <Smartphone className="h-8 w-8 text-primary" />
            The MVP
          </h2>
          
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-lg text-muted-foreground">
                We got the sign off for <strong>200+ unique features</strong>. From the revamp to the new features, 
                I played significant roles in creating multiple flows and gave my peers reviews on their flows.
              </p>
              <p className="text-muted-foreground">
                In the new features, I owned the <strong>Budget buddy flow</strong>, <strong>Aha Onboarding</strong>, 
                <strong>Neo bank</strong> and <strong>Fin-verse flows</strong>.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Budget Buddy</Badge>
                <Badge variant="outline">Aha Onboarding</Badge>
                <Badge variant="outline">Neo Bank</Badge>
                <Badge variant="outline">Fin-verse</Badge>
              </div>
            </div>

            {/* MVP Showcase */}
            <div className="space-y-6">
              <h3 className="text-2xl">Final MVP Design</h3>
              <div className="space-y-4">
                <ImageWithFallback
                  src={mvpImage} 
                  alt="Yalla Finance MVP - Mobile App Interface Designs showing Budget Categories, Profile, and Rewards features" 
                  className="w-full rounded-lg border"
                />
                <p className="text-sm text-muted-foreground italic text-center">
                  Final MVP designs showcasing Budget Buddy, Profile Management, and Rewards system 
                  tailored for Jordanian youth banking experience
                </p>
              </div>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5 text-primary" />
                    My Owned Flows
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• <strong>Budget Buddy:</strong> Intelligent spending tracking and categorization system</li>
                    <li>• <strong>Aha Onboarding:</strong> Engaging first-time user experience design</li>
                    <li>• <strong>Neo Bank:</strong> Modern digital banking interface and interactions</li>
                    <li>• <strong>Fin-verse:</strong> Gamified financial education and rewards platform</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    Collaborative Impact
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• <strong>200+ Features:</strong> Comprehensive MVP with extensive functionality</li>
                    <li>• <strong>Peer Reviews:</strong> Quality assurance through collaborative design reviews</li>
                    <li>• <strong>Flow Creation:</strong> Multiple user journey design and optimization</li>
                    <li>• <strong>Team Leadership:</strong> Guided design decisions across feature teams</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* MVP Achievements */}
            <div className="bg-card border rounded-lg p-6">
              <h4 className="mb-4 flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                MVP Achievements
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h5 className="mb-2">Comprehensive Feature Set</h5>
                  <p className="text-sm text-muted-foreground">
                    Successfully delivered 200+ unique features covering the full spectrum of 
                    youth banking needs from budgeting to rewards and financial education.
                  </p>
                </div>
                <div>
                  <h5 className="mb-2">User-Centered Design</h5>
                  <p className="text-sm text-muted-foreground">
                    Every flow was designed with Jordanian youth culture in mind, ensuring 
                    cultural relevance and intuitive user experiences.
                  </p>
                </div>
                <div>
                  <h5 className="mb-2">Design Leadership</h5>
                  <p className="text-sm text-muted-foreground">
                    Led critical user flows while maintaining design consistency and quality 
                    through peer reviews and collaborative design processes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RISE Award Recognition */}
      <section className="py-16 px-8 bg-gradient-to-r from-amber-50 to-yellow-50 border-t border-amber-200">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-8">
            {/* Award Announcement */}
            <div className="space-y-4">
              <div className="flex justify-center">
                <div className="w-16 h-16 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full flex items-center justify-center shadow-lg">
                  <Award className="w-8 h-8 text-white" />
                </div>
              </div>
              <h2 className="text-3xl mb-4">Recognition & Impact</h2>
              <div className="max-w-2xl mx-auto">
                <Card className="border-2 border-amber-200 bg-white/80 backdrop-blur-sm">
                  <CardContent className="py-8 px-6">
                    <h3 className="text-2xl mb-4 text-amber-700">
                      🏆 Bagged the RISE Award for Engaging Experience Design Category
                    </h3>
                    <p className="text-muted-foreground">
                      The Yalla Finance project was recognized for its outstanding contribution to engaging 
                      user experience design, highlighting the successful integration of cultural research, 
                      user-centered design, and innovative financial solutions for Jordan's youth market.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Award Ceremony Image */}
            <div className="space-y-4">
              <ImageWithFallback
                src={riseAwardImage} 
                alt="RISE Award Ceremony - Team receiving Engaging Experience Design Category award for Yalla Finance project" 
                className="w-full max-w-4xl mx-auto rounded-lg border border-amber-200 shadow-lg"
              />
              <p className="text-sm text-muted-foreground italic">
                RISE Award ceremony recognizing excellence in Engaging Experience Design Category 
                for the Yalla Finance youth banking application
              </p>
            </div>

            {/* Award Impact */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <Card className="border-amber-200 bg-white/60">
                <CardContent className="pt-6 text-center">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="h-6 w-6 text-amber-600" />
                  </div>
                  <h4 className="mb-2">Industry Recognition</h4>
                  <p className="text-sm text-muted-foreground">
                    Validated our user-centered approach and cultural integration in fintech design
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-amber-200 bg-white/60">
                <CardContent className="pt-6 text-center">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-6 w-6 text-amber-600" />
                  </div>
                  <h4 className="mb-2">Team Achievement</h4>
                  <p className="text-sm text-muted-foreground">
                    Recognized collaborative excellence in research, design, and strategic execution
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-amber-200 bg-white/60">
                <CardContent className="pt-6 text-center">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="h-6 w-6 text-amber-600" />
                  </div>
                  <h4 className="mb-2">Design Impact</h4>
                  <p className="text-sm text-muted-foreground">
                    Demonstrated measurable success in creating engaging experiences for underserved markets
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Other Case Studies */}
      <OtherCaseStudies currentCaseStudyId={currentCaseStudyId} onViewCaseStudy={onViewCaseStudy} />
    </div>
  );
}
