import React from 'react';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { ArrowLeft, Calendar, Users, Target, TrendingUp, Search, BarChart3, MessageSquare, User, Settings, Truck, Award } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { OtherCaseStudies } from '../OtherCaseStudies';
import dhldrax from '../figma/dhldrax.png';
import research from '../figma/researchprocessandfindings2.png';
import journey from '../figma/journeyanalysis3.png';
import ideate from '../figma/ideate4.png';
import moscow from '../figma/moscowworkshop5.png';
import final from '../figma/finalproductinterface6.png';
import instaAwardImage from '../figma/certificate7.png';

interface DraxCaseStudyProps {
  onBackToPortfolio: () => void;
  onViewCaseStudy: (caseStudyId: string) => void;
  currentCaseStudyId: string;
}

export function DraxCaseStudy({ onBackToPortfolio, onViewCaseStudy, currentCaseStudyId }: DraxCaseStudyProps) {
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
              <Badge variant="secondary" className="w-fit">Logistics</Badge>
              <h1 className="text-4xl lg:text-5xl">DRAX: Unifying Planning for Global Logistics</h1>
              <p className="text-lg text-muted-foreground">
                DRAX is a comprehensive platform aimed at empowering planners to efficiently plan shipments 
                across global logistics operations with streamlined workflows and intelligent allocation systems.
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-primary" />
                  <span className="text-sm">Sept '23 - Mar '24</span>
                </div>
                <div className="flex items-center gap-2">
                  <Truck className="h-4 w-4 text-primary" />
                  <span className="text-sm">Logistics Platform</span>
                </div>
                <div className="flex items-center gap-2">
                  <Target className="h-4 w-4 text-primary" />
                  <span className="text-sm">B2B Solution</span>
                </div>
                <div className="flex items-center gap-2">
                  <Settings className="h-4 w-4 text-primary" />
                  <span className="text-sm">Route Optimization</span>
                </div>
              </div>
            </div>
            
            <div className="aspect-video rounded-xl overflow-hidden">
              <ImageWithFallback
                src={dhldrax}
                alt="DRAX Dispatch Route Allocation System Interface"
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
              Led the end-to-end UX design process for DRAX, focusing on understanding planner workflows 
              across different regions and creating unified solutions for complex logistics operations.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                'UXD',
                'Secondary Research', 
                'User Interviews',
                'User Journey Maps',
                'Business Process Mapping',
                'Persona Development',
                'Wire-framing',
                'Interaction Design',
                'UI Design',
                'In-Depth Documentation'
              ].map((method, index) => (
                <Badge key={index} variant="outline" className="justify-center p-2">
                  {method}
                </Badge>
              ))}
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
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl">Interviews and User Journey Maps</h3>
                <p className="text-lg text-muted-foreground">
                  Conducted cross-regional planner interviews, analyzed transcripts to define user 
                  workflows, and created UIMs depicting task groupings within planning phases.
                </p>
                <p className="text-muted-foreground">
                  The research process involved detailed conversations with planners from different regional 
                  operations, allowing us to understand the nuanced differences in logistics planning approaches 
                  while identifying common patterns that could be unified in the DRAX platform.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Cross-Regional Research</Badge>
                  <Badge variant="outline">Workflow Analysis</Badge>
                  <Badge variant="outline">Task Mapping</Badge>
                  <Badge variant="outline">User Journey Mapping</Badge>
                  <Badge variant="outline">Transcript Analysis</Badge>
                  <Badge variant="outline">Planning Phases</Badge>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MessageSquare className="h-5 w-5 text-primary" />
                      Interview Process
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Conducted interviews with 12+ planners across 4 regions</li>
                      <li>• Recorded and transcribed all sessions for detailed analysis</li>
                      <li>• Identified regional variations in planning approaches</li>
                      <li>• Documented pain points and inefficiencies in current workflows</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BarChart3 className="h-5 w-5 text-primary" />
                      Journey Mapping
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Created User Journey Maps (UIMs) for each region</li>
                      <li>• Defined task groupings within planning phases</li>
                      <li>• Mapped dependencies between different planning stages</li>
                      <li>• Identified opportunities for workflow optimization</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Discovery Research Image */}
            <div className="space-y-6">
              <h3 className="text-2xl">Research Process & Findings</h3>
              <div>
                <ImageWithFallback
                  src={research}
                  alt="DRAX Discovery Phase - User Journey Maps and Interview Analysis showing cross-regional planner workflows and task groupings"
                  className="w-full"
                />
                <p className="text-sm text-muted-foreground italic text-center mt-4">
                  Comprehensive user journey mapping across different regions showing planner workflows, 
                  task dependencies, and optimization opportunities
                </p>
              </div>
            </div>

            {/* Research Insights */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageSquare className="h-5 w-5 text-primary" />
                    Cross-Regional Insights
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Regional variations in planning workflows and priorities</li>
                    <li>• Common pain points across different logistics operations</li>
                    <li>• Diverse tool usage and system integration challenges</li>
                    <li>• Inconsistent data formats and communication methods</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5 text-primary" />
                    Workflow Analysis
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Defined core planning phases and task groupings</li>
                    <li>• Identified bottlenecks in current allocation processes</li>
                    <li>• Mapped dependencies between different planning stages</li>
                    <li>• Documented decision-making criteria and constraints</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Key Discovery Insights */}
            <div className="bg-card border rounded-lg p-6">
              <h4 className="mb-4 flex items-center gap-2">
                <Target className="h-5 w-5 text-primary" />
                Key Discovery Insights
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h5 className="mb-2">Regional Complexity</h5>
                  <p className="text-sm text-muted-foreground">
                    Different regions have varying planning approaches, requiring a flexible 
                    yet unified system architecture to accommodate diverse workflows.
                  </p>
                </div>
                <div>
                  <h5 className="mb-2">Task Dependencies</h5>
                  <p className="text-sm text-muted-foreground">
                    Planning phases are highly interdependent, with decisions in one stage 
                    significantly impacting subsequent allocation and routing processes.
                  </p>
                </div>
                <div>
                  <h5 className="mb-2">Information Gaps</h5>
                  <p className="text-sm text-muted-foreground">
                    Planners often work with incomplete information, requiring intelligent 
                    defaults and progressive disclosure of planning options.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Define Section */}
      <section className="py-16 px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl mb-8">Define</h2>
          
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl">Synthesis</h3>
                <p className="text-lg text-muted-foreground">
                  By analyzing trends across all regions' user journeys, we identified the core phases 
                  and functionalities that shaped the final product.
                </p>
                <p className="text-muted-foreground">
                  This comprehensive analysis revealed common patterns in planning workflows while 
                  highlighting regional nuances that needed to be accommodated in the unified system.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Pattern Analysis</Badge>
                  <Badge variant="outline">Core Phases</Badge>
                  <Badge variant="outline">Functionality Mapping</Badge>
                </div>
              </div>
            </div>

            {/* Synthesis Documentation */}
            <div className="space-y-6">
              <h3 className="text-2xl">Journey Analysis & Core Functionality</h3>
              <div className="space-y-4">
                <ImageWithFallback
                  src={journey}
                  alt="DRAX Define Phase - User Journey Analysis and Core Functionality Mapping showing synthesis of regional planning workflows"
                  className="w-full"
                />
                <p className="text-sm text-muted-foreground italic text-center">
                  Synthesis of cross-regional user journeys revealing core planning phases, 
                  key functionalities, and unified workflow patterns
                </p>
              </div>
            </div>

            {/* Define Outcomes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5 text-primary" />
                    Core Planning Phases
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• <strong>Route Planning:</strong> Initial route optimization and allocation</li>
                    <li>• <strong>Resource Assignment:</strong> Vehicle and driver allocation</li>
                    <li>• <strong>Schedule Coordination:</strong> Time slot management and coordination</li>
                    <li>• <strong>Execution Monitoring:</strong> Real-time tracking and adjustments</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Settings className="h-5 w-5 text-primary" />
                    Key Functionalities
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• <strong>Unified Dashboard:</strong> Centralized planning interface</li>
                    <li>• <strong>Smart Allocation:</strong> AI-powered route and resource optimization</li>
                    <li>• <strong>Real-time Updates:</strong> Live status and exception handling</li>
                    <li>• <strong>Regional Flexibility:</strong> Customizable workflows per region</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Synthesis Results */}
            <div className="bg-card border rounded-lg p-6">
              <h4 className="mb-4 flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-primary" />
                Synthesis Results
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h5 className="mb-2">Unified Framework</h5>
                  <p className="text-sm text-muted-foreground">
                    Developed a comprehensive framework that accommodates regional variations 
                    while maintaining consistency in core planning workflows.
                  </p>
                </div>
                <div>
                  <h5 className="mb-2">Priority Features</h5>
                  <p className="text-sm text-muted-foreground">
                    Identified must-have features that address universal pain points across 
                    all regions and planning scenarios.
                  </p>
                </div>
                <div>
                  <h5 className="mb-2">Scalable Architecture</h5>
                  <p className="text-sm text-muted-foreground">
                    Created a scalable system architecture that can adapt to different 
                    regional requirements and future expansion needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ideate Section */}
      <section className="py-16 px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl mb-8">Ideate</h2>
          
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl">Wire-framing and The Golden Thread</h3>
                <p className="text-lg text-muted-foreground">
                  To find the most efficient user flow, I drew the Golden Thread for the tool. 
                  Once this got finalized, I went on to create wireframes.
                </p>
                <p className="text-muted-foreground">
                  The Golden Thread helped identify the critical path through the planning process, 
                  ensuring seamless transitions between different phases of logistics coordination.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Golden Thread</Badge>
                  <Badge variant="outline">User Flow</Badge>
                  <Badge variant="outline">Wireframing</Badge>
                  <Badge variant="outline">Critical Path</Badge>
                </div>
              </div>
            </div>

            {/* Wireframing Process */}
            <div className="space-y-6">
              <h3 className="text-2xl">Golden Thread & Wireframe Development</h3>
              <div className="space-y-4">
                <ImageWithFallback
                  src={ideate}
                  alt="DRAX Ideate Phase - Golden Thread User Flow and Wireframe Development showing efficient planning workflows"
                  className="w-full"
                />
                <p className="text-sm text-muted-foreground italic text-center">
                  Golden Thread user flow mapping and initial wireframe concepts showing 
                  the most efficient path through logistics planning workflows
                </p>
              </div>
            </div>

            {/* Ideation Process */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5 text-primary" />
                    Golden Thread Approach
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Mapped critical decision points in planning workflow</li>
                    <li>• Identified optimal sequence of planning activities</li>
                    <li>• Eliminated redundant steps and streamlined processes</li>
                    <li>• Created clear handoffs between planning phases</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Settings className="h-5 w-5 text-primary" />
                    Wireframe Strategy
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Progressive information disclosure for complex data</li>
                    <li>• Contextual actions based on planning phase</li>
                    <li>• Flexible layout adapting to different screen sizes</li>
                    <li>• Quick access to frequently used planning functions</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Design Principles */}
            <div className="space-y-6">
              <h3 className="text-xl">Design Principles & Methods</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Card className="text-center">
                  <CardContent className="pt-4">
                    <div className="text-2xl mb-2">🧵</div>
                    <h4 className="text-sm mb-1">Golden Thread</h4>
                    <p className="text-xs text-muted-foreground">Critical path mapping</p>
                  </CardContent>
                </Card>
                
                <Card className="text-center">
                  <CardContent className="pt-4">
                    <div className="text-2xl mb-2">📐</div>
                    <h4 className="text-sm mb-1">Wireframing</h4>
                    <p className="text-xs text-muted-foreground">Interface structure</p>
                  </CardContent>
                </Card>
                
                <Card className="text-center">
                  <CardContent className="pt-4">
                    <div className="text-2xl mb-2">🔄</div>
                    <h4 className="text-sm mb-1">User Flow</h4>
                    <p className="text-xs text-muted-foreground">Workflow optimization</p>
                  </CardContent>
                </Card>
                
                <Card className="text-center">
                  <CardContent className="pt-4">
                    <div className="text-2xl mb-2">⚡</div>
                    <h4 className="text-sm mb-1">Efficiency</h4>
                    <p className="text-xs text-muted-foreground">Streamlined processes</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Ideation Outcomes */}
            <div className="bg-card border rounded-lg p-6">
              <h4 className="mb-4 flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                Ideation Outcomes
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h5 className="mb-2">Optimal Flow</h5>
                  <p className="text-sm text-muted-foreground">
                    Established the most efficient sequence of planning activities, 
                    reducing cognitive load and improving decision-making speed.
                  </p>
                </div>
                <div>
                  <h5 className="mb-2">Interface Structure</h5>
                  <p className="text-sm text-muted-foreground">
                    Created wireframes that support complex logistics planning while 
                    maintaining clarity and ease of use across different scenarios.
                  </p>
                </div>
                <div>
                  <h5 className="mb-2">Scalable Design</h5>
                  <p className="text-sm text-muted-foreground">
                    Developed a flexible wireframe structure that can accommodate 
                    regional variations and future feature enhancements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Product Section */}
      <section className="py-16 px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl mb-8">The Product</h2>
          
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl">Synthesis</h3>
                <p className="text-lg text-muted-foreground">
                  We had already conducted a MOSCOW workshop with the client. In parallel, 
                  we created use case tables that helped us achieve simplicity from a lot 
                  of confusing concepts.
                </p>
                <p className="text-muted-foreground">
                  This collaborative approach ensured that the final product balanced business 
                  requirements with user needs while maintaining technical feasibility.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">MOSCOW Workshop</Badge>
                  <Badge variant="outline">Use Case Tables</Badge>
                  <Badge variant="outline">Simplification</Badge>
                  <Badge variant="outline">Concept Clarity</Badge>
                </div>
              </div>
            </div>

            {/* Product Development Process */}
            <div className="space-y-6">
              <h3 className="text-2xl">MOSCOW Workshop & Use Case Development</h3>
              <div className="space-y-4">
                <ImageWithFallback
                  src={moscow}
                  alt="DRAX Product Development - MOSCOW Workshop and Use Case Tables showing requirement prioritization and concept simplification"
                  className="w-full"
                />
                <p className="text-sm text-muted-foreground italic text-center">
                  MOSCOW workshop outcomes and use case table development showing requirement 
                  prioritization and concept simplification process
                </p>
              </div>
            </div>

            {/* Final Product Interface */}
            <div className="space-y-6">
              <h3 className="text-2xl">Final Product Interface</h3>
              <div className="space-y-4">
                <ImageWithFallback
                  src={final}
                  alt="DRAX Final Product - Dispatch Route Allocation System showing logistics planning dashboard with shipment management and route optimization features"
                  className="w-full rounded-lg border"
                />
                <p className="text-sm text-muted-foreground italic text-center">
                  Final DRAX interface showing comprehensive logistics planning dashboard with 
                  shipment management, route allocation, and real-time tracking capabilities
                </p>
              </div>
            </div>

            {/* Product Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Truck className="h-5 w-5 text-primary" />
                    Core Features
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• <strong>Unified Dashboard:</strong> Centralized planning and monitoring interface</li>
                    <li>• <strong>Route Optimization:</strong> AI-powered allocation and scheduling</li>
                    <li>• <strong>Real-time Tracking:</strong> Live shipment status and updates</li>
                    <li>• <strong>Exception Handling:</strong> Automated alerts and resolution workflows</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Settings className="h-5 w-5 text-primary" />
                    Technical Implementation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• <strong>Scalable Architecture:</strong> Supports multiple regions and operations</li>
                    <li>• <strong>Integration Ready:</strong> APIs for existing logistics systems</li>
                    <li>• <strong>Responsive Design:</strong> Works across desktop and mobile devices</li>
                    <li>• <strong>Data Visualization:</strong> Clear charts and analytics for decision-making</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Product Impact */}
            <div className="bg-card border rounded-lg p-6">
              <h4 className="mb-4 flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                Product Impact & Results
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h5 className="mb-2">Unified Experience</h5>
                  <p className="text-sm text-muted-foreground">
                    Successfully created a single platform that accommodates diverse regional 
                    planning workflows while maintaining consistency and efficiency.
                  </p>
                </div>
                <div>
                  <h5 className="mb-2">Simplified Complexity</h5>
                  <p className="text-sm text-muted-foreground">
                    Transformed complex logistics concepts into intuitive interfaces through 
                    systematic use case analysis and collaborative design workshops.
                  </p>
                </div>
                <div>
                  <h5 className="mb-2">Scalable Solution</h5>
                  <p className="text-sm text-muted-foreground">
                    Delivered a robust platform architecture that can grow with business needs 
                    and adapt to future logistics optimization requirements.
                  </p>
                </div>
              </div>
            </div>

            {/* Project Methods */}
            <div className="space-y-6">
              <h3 className="text-xl">Project Methods & Deliverables</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Card className="text-center">
                  <CardContent className="pt-4">
                    <div className="text-2xl mb-2">🎯</div>
                    <h4 className="text-sm mb-1">MOSCOW</h4>
                    <p className="text-xs text-muted-foreground">Requirement prioritization</p>
                  </CardContent>
                </Card>
                
                <Card className="text-center">
                  <CardContent className="pt-4">
                    <div className="text-2xl mb-2">📋</div>
                    <h4 className="text-sm mb-1">Use Cases</h4>
                    <p className="text-xs text-muted-foreground">Scenario documentation</p>
                  </CardContent>
                </Card>
                
                <Card className="text-center">
                  <CardContent className="pt-4">
                    <div className="text-2xl mb-2">🎨</div>
                    <h4 className="text-sm mb-1">UI Design</h4>
                    <p className="text-xs text-muted-foreground">Interface development</p>
                  </CardContent>
                </Card>
                
                <Card className="text-center">
                  <CardContent className="pt-4">
                    <div className="text-2xl mb-2">📖</div>
                    <h4 className="text-sm mb-1">Documentation</h4>
                    <p className="text-xs text-muted-foreground">Comprehensive specs</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insta Award Recognition */}
      <section className="py-16 px-8 bg-gradient-to-r from-orange-50 to-amber-50 border-t border-orange-200">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-8">
            {/* Award Announcement */}
            <div className="space-y-4">
              <div className="flex justify-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-amber-500 rounded-full flex items-center justify-center shadow-lg">
                  <Award className="w-8 h-8 text-white" />
                </div>
              </div>
              <h2 className="text-3xl mb-4">Recognition & Achievement</h2>
              <div className="max-w-2xl mx-auto">
                <Card className="border-2 border-orange-200 bg-white/80 backdrop-blur-sm">
                  <CardContent className="py-8 px-6">
                    <h3 className="text-2xl mb-4 text-orange-700">
                      🏆 Bagged the Insta Award for the month of March
                    </h3>
                    <p className="text-muted-foreground">
                      The DRAX project was recognized with the Insta Award for March 2024, highlighting 
                      exceptional design work with team spirit and outstanding individual contribution 
                      to logistics platform development.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Award Certificate */}
            <div className="space-y-4">
              <img 
                src={instaAwardImage} 
                alt="Insta Award Certificate of Appreciation - March 2024 recognition for exceptional designer with team spirit and outstanding individual contribution from WONGDOODY + Infosys" 
                className="w-full max-w-4xl mx-auto rounded-lg border border-orange-200 shadow-lg"
              />
              <p className="text-sm text-muted-foreground italic">
                Certificate of Appreciation from WONGDOODY + Infosys recognizing exceptional design 
                excellence and outstanding team contribution for March 2024
              </p>
            </div>

            {/* Award Impact */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <Card className="border-orange-200 bg-white/60">
                <CardContent className="pt-6 text-center">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="h-6 w-6 text-orange-600" />
                  </div>
                  <h4 className="mb-2">Design Excellence</h4>
                  <p className="text-sm text-muted-foreground">
                    Recognized for exceptional design skills and innovative approach to complex logistics challenges
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-orange-200 bg-white/60">
                <CardContent className="pt-6 text-center">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-6 w-6 text-orange-600" />
                  </div>
                  <h4 className="mb-2">Team Spirit</h4>
                  <p className="text-sm text-muted-foreground">
                    Acknowledged for outstanding team collaboration and mentoring new members
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-orange-200 bg-white/60">
                <CardContent className="pt-6 text-center">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="h-6 w-6 text-orange-600" />
                  </div>
                  <h4 className="mb-2">Continuous Growth</h4>
                  <p className="text-sm text-muted-foreground">
                    Celebrated for dedication to learning new skills and professional development
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
