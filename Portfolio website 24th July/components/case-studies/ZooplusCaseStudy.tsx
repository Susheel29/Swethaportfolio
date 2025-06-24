import React from 'react';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { ArrowLeft, Calendar, Users, Target, TrendingUp, Eye, TestTube, RefreshCw } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import image_282acdecaa201525d4eda29f5375a1c262fb4bac from 'figma:asset/282acdecaa201525d4eda29f5375a1c262fb4bac.png';
import layoutOptionsImage from 'figma:asset/e09b4e207fc07a33d9dba8f907f6a15704264450.png';
import contentPrioritizationImage from 'figma:asset/59667f318a73cc951718ed9d34784a57e7ed9640.png';
import heroImage from 'figma:asset/456d1f913ffb11d7adc9130d84899bf3b056e65a.png';
import finalDesignImage from 'figma:asset/2888b50de4417ac5a8624fe0217e76da0a0f491c.png';
import ideationImage from 'figma:asset/f7d3a24c8b05e5b5e5d7acdae1d2b7c7b1c5f3a1.png';
import designIterationsImage from 'figma:asset/34ddf32434c5a4e8def7d298b1a0c2b971af4504.png';
import layoutAnalysisImage from 'figma:asset/05f367bbb92baea082d00103b84e86c412c7d380.png';
import desktopFinalImage from 'figma:asset/060a85da8b8a482f862917ff0abff7b19e0fdc04.png';
import mobileFinalImage from 'figma:asset/ad0b86cf244bd29ddcf1d675c639f9c387629712.png';

import { OtherCaseStudies } from '../OtherCaseStudies';

interface ZooplusCaseStudyProps {
  onBackToPortfolio: () => void;
  onViewCaseStudy: (caseStudyId: string) => void;
  currentCaseStudyId: string;
}

export function ZooplusCaseStudy({ onBackToPortfolio, onViewCaseStudy, currentCaseStudyId }: ZooplusCaseStudyProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 bg-background/95 backdrop-blur-sm border-b z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
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
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="secondary" className="w-fit">E-commerce UX</Badge>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl">Enhancing Pet E-commerce Experience at Zooplus</h1>
              <p className="text-base sm:text-lg text-muted-foreground">
                Transformed product listing pages to show all variants as individual articles, 
                improving product discoverability and driving measurable conversion improvements 
                through iterative design and comprehensive user testing.
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-primary" />
                  <span className="text-sm">3 months</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-primary" />
                  <span className="text-sm">Cross-functional team</span>
                </div>
                <div className="flex items-center gap-2">
                  <Target className="h-4 w-4 text-primary" />
                  <span className="text-sm">Product Listings</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-primary" />
                  <span className="text-sm">€80K Value Generated</span>
                </div>
              </div>
            </div>
            
            {/* Hero Image - Flexible container that adapts to image dimensions */}
            <div className="case-study-image-container">
              <ImageWithFallback
                src={heroImage}
                alt="Zooplus E-commerce Product Listings"
                className="case-study-hero-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problem Definition */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl mb-8">Problem Definition: Elevating Product Listings for Variant Visibility</h2>
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">The Challenge</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Product listing pages displayed only the default variant of each product, limiting visibility 
                    into the full range of available options like sizes, colors, or pricing tiers.
                  </p>
                  <p className="text-muted-foreground">
                    This increased cognitive load and negatively impacted conversion rates as customers had to 
                    take multiple steps to discover all product variants.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Customer Pain Points</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Filters returned irrelevant or misleading results</li>
                    <li>• Had to click into each product to find desired variant</li>
                    <li>• Variant-level differences weren't visible at listing level</li>
                    <li>• Frustrating and time-consuming discovery process</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="bg-card border rounded-lg p-6">
              <h4 className="mb-4 flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                Voice of the Customer
              </h4>
              <blockquote className="text-muted-foreground italic border-l-4 border-primary pl-4">
                "When I apply a filter, I expect to see the actual item that fits — not just the general product. 
                I don't want to guess what's inside."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Discovery */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl mb-8">Strategic Discovery: Aligning Stakeholders & Systems</h2>
          <div className="space-y-8">
            <p className="text-base sm:text-lg text-muted-foreground">
              Began with strategic planning to understand how product cards functioned across the entire digital ecosystem.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="pt-6">
                  <h4 className="mb-2">RACI Mapping & System Audit</h4>
                  <p className="text-sm text-muted-foreground">
                    Created RACI matrix to align cross-functional responsibilities and identified 
                    every location where product cards appeared.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <h4 className="mb-2">Visual Audit</h4>
                  <p className="text-sm text-muted-foreground">
                    Collected screenshots across domains to establish shared understanding 
                    of current inconsistencies.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <h4 className="mb-2">Component Analysis</h4>
                  <p className="text-sm text-muted-foreground">
                    Created matrix comparing UI elements across teams to identify 
                    critical vs. optional features.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Benchmarking */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl mb-8">Competitive Benchmarking: Learning from the Landscape</h2>
          <div className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Analyzed 12 direct and indirect competitors across mobile and desktop interfaces, 
                  focusing on product card layouts, interaction patterns, and information hierarchy.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Competitive Analysis</Badge>
                  <Badge variant="outline">Interaction Patterns</Badge>
                  <Badge variant="outline">Benchmarking</Badge>
                </div>
              </div>
              
              {/* Competitive Analysis Image - Flexible container */}
              <div className="case-study-image-container">
                <ImageWithFallback
                  src={image_282acdecaa201525d4eda29f5375a1c262fb4bac}
                  alt="Competitive Analysis Process"
                  className="case-study-content-image"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card className="text-center">
                <CardContent className="pt-4">
                  <div className="text-2xl mb-2">📱</div>
                  <h4 className="text-sm mb-1">Mobile & Desktop</h4>
                  <p className="text-xs text-muted-foreground">Interface Analysis</p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="pt-4">
                  <div className="text-2xl mb-2">🎯</div>
                  <h4 className="text-sm mb-1">CTA Placement</h4>
                  <p className="text-xs text-muted-foreground">Button Optimization</p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="pt-4">
                  <div className="text-2xl mb-2">🏷️</div>
                  <h4 className="text-sm mb-1">Badge Usage</h4>
                  <p className="text-xs text-muted-foreground">Information Hierarchy</p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="pt-4">
                  <div className="text-2xl mb-2">🖱️</div>
                  <h4 className="text-sm mb-1">Hover Behaviors</h4>
                  <p className="text-xs text-muted-foreground">Interactive Affordances</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Ideation */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl mb-8">Ideation: From Concept to Direction</h2>
          
          <div className="space-y-8">
            <p className="text-base sm:text-lg text-muted-foreground">
              With benchmark findings in hand, I moved into ideation to explore how an 
              <strong> Article-Based Product Card</strong> might function.
            </p>

            {/* Content Prioritization Image - Full width flexible container */}
            <div className="case-study-full-image-container">
              <ImageWithFallback
                src={contentPrioritizationImage}
                alt="Content and attribute prioritization framework showing various UI elements and their importance levels for product cards"
                className="case-study-full-image"
              />
            </div>

            {/* Layout Exploration */}
            <div className="space-y-6">
              <h3 className="text-xl">🧱 Layout Exploration</h3>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Developed early wireframes to establish base structure: image ratio, content blocks, and interaction zones. 
                  Explored three distinct directions for how articles could be represented:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card>
                    <CardContent className="pt-6">
                      <h4 className="mb-2">1. Minimalist Grid Layout</h4>
                      <p className="text-sm text-muted-foreground">
                        Clean UI with low information density, focusing on essential elements only.
                      </p>
                      <div className="mt-3">
                        <Badge variant="outline" className="text-xs">Clean UI</Badge>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="pt-6">
                      <h4 className="mb-2">2. Variant-Rich Card</h4>
                      <p className="text-sm text-muted-foreground">
                        Higher data exposure enabling richer product comparison capabilities.
                      </p>
                      <div className="mt-3">
                        <Badge variant="outline" className="text-xs">Rich Comparison</Badge>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="pt-6">
                      <h4 className="mb-2">3. Contextual Popout Model</h4>
                      <p className="text-sm text-muted-foreground">
                        Minimalist default state that becomes expandable on user interaction.
                      </p>
                      <div className="mt-3">
                        <Badge variant="outline" className="text-xs">Expandable</Badge>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <p className="text-sm text-muted-foreground italic">
                  Each direction balanced <strong>clarity, density, and scalability</strong> differently.
                </p>
                
                {/* Layout Options Image - Full width flexible container */}
                <div className="case-study-full-image-container">
                  <ImageWithFallback
                    src={layoutOptionsImage}
                    alt="Mobile Layout Options and Design Iterations - Prioritization, Layout Options, Components and Archive sections showing various product card designs"
                    className="case-study-full-image"
                  />
                </div>
              </div>
            </div>

            {/* Stakeholder Collaboration */}
            <div className="space-y-6">
              <h3 className="text-xl">🧑‍💼 Stakeholder Collaboration</h3>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  I presented the three directions to key stakeholders across <strong>Product, Design, and Engineering</strong> 
                  to evaluate each concept comprehensively.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Cross-functional Review</Badge>
                  <Badge variant="outline">Technical Feasibility</Badge>
                  <Badge variant="outline">Data Availability</Badge>
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-lg">Evaluation Criteria</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card>
                    <CardContent className="pt-4">
                      <h5 className="text-sm mb-2">Data Availability</h5>
                      <p className="text-xs text-muted-foreground">
                        Assessed which designs could be supported by existing data infrastructure.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="pt-4">
                      <h5 className="text-sm mb-2">Technical Feasibility</h5>
                      <p className="text-xs text-muted-foreground">
                        Evaluated implementation complexity and development timeline requirements.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="pt-4">
                      <h5 className="text-sm mb-2">Content Consistency</h5>
                      <p className="text-xs text-muted-foreground">
                        Ensured consistent experience across different domains and product types.
                      </p>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
                  <p className="text-muted-foreground">
                    <strong>Outcome:</strong> Designs that relied heavily on missing or inconsistent data were eliminated. 
                    Together, we finalized a hybrid approach that balanced <strong>data density with usability</strong>.
                  </p>
                </div>
              </div>
            </div>

            {/* Prioritization & Design Refinement */}
            <div className="space-y-6">
              <h3 className="text-xl">🎯 Prioritization & Design Refinement</h3>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Once the direction was chosen, I prioritized content elements using a <strong>content hierarchy model</strong> 
                  to ensure optimal user experience.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardContent className="pt-6">
                      <h4 className="mb-2">Content Prioritization</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        Determined which attributes (title, image, price, discount, color, size, badges) 
                        needed the most visual weight.
                      </p>
                      <div className="flex flex-wrap gap-1">
                        <Badge variant="outline" className="text-xs">Visual Hierarchy</Badge>
                        <Badge variant="outline" className="text-xs">Content Strategy</Badge>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="pt-6">
                      <h4 className="mb-2">Usability Optimization</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        Ensured scannability, contrast, and click affordances worked effectively 
                        in both vertical and horizontal card formats.
                      </p>
                      <div className="flex flex-wrap gap-1">
                        <Badge variant="outline" className="text-xs">Scannability</Badge>
                        <Badge variant="outline" className="text-xs">Accessibility</Badge>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="bg-card border rounded-lg p-6">
                  <h4 className="mb-4">Unified Card System</h4>
                  <p className="text-muted-foreground mb-4">
                    After several design iterations and cross-team feedback loops, we aligned on a unified card system:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-12 bg-primary/10 rounded border"></div>
                      <div>
                        <h5 className="text-sm">Vertical Card</h5>
                        <p className="text-xs text-muted-foreground">For grid/listing pages</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-6 bg-primary/10 rounded border"></div>
                      <div>
                        <h5 className="text-sm">Horizontal Card</h5>
                        <p className="text-xs text-muted-foreground">For modules like "Related Products"</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Final Design Image - Full width flexible container */}
                <div className="case-study-full-image-container">
                  <ImageWithFallback
                    src={finalDesignImage}
                    alt="Final Zooplus product listing page showing article-based cards with enhanced visual hierarchy, clear pricing, and improved product information display"
                    className="case-study-full-image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Usability Testing */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl mb-8 flex items-center gap-2">
            <TestTube className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
            Usability Testing: Validating & Refining Design
          </h2>
          
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Methodology</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• <strong>Round 1:</strong> 9 customers (5 UK, 4 Spain) - Laptop</li>
                    <li>• <strong>Round 2:</strong> 5 customers (UK) - Mobile</li>
                    <li>• <strong>Age Range:</strong> 30-70 (majority female)</li>
                    <li>• <strong>Duration:</strong> 45-minute sessions</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Key Tasks</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Find dry dog food</li>
                    <li>• Explore product listings</li>
                    <li>• Identify the best deal</li>
                    <li>• Add product to cart</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* User Feedback */}
            <div className="space-y-6">
              <h3 className="text-xl">What Users Valued Most</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { element: 'Price', mentions: 12 },
                  { element: 'Product Image', mentions: 12 },
                  { element: 'Price per Kilo', mentions: 8 },
                  { element: 'Delivery Info', mentions: 4 }
                ].map((item, index) => (
                  <Card key={index} className="text-center">
                    <CardContent className="pt-4">
                      <div className="text-2xl text-primary mb-2">{item.mentions}</div>
                      <p className="text-sm">{item.element}</p>
                      <p className="text-xs text-muted-foreground">mentions</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="bg-card border rounded-lg p-6">
                <blockquote className="text-muted-foreground italic border-l-4 border-primary pl-4 mb-4">
                  "The price per kilo helps me decide what's really the better deal — not just what's cheaper upfront."
                </blockquote>
                <cite className="text-sm text-muted-foreground">– Participant, Spain</cite>
              </div>
            </div>

            {/* Usability Scores */}
            <div className="space-y-6">
              <h3 className="text-xl">Usability Scores</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { metric: 'Find Product Info', score: '4.4 / 5', status: '✅' },
                  { metric: 'Information Clarity', score: '3.8 / 5', status: '🟠' },
                  { metric: 'Delivery Info Help', score: '4.27 / 5', status: '✅' },
                  { metric: 'Add to Cart Ease', score: '5 / 5', status: '✅' }
                ].map((item, index) => (
                  <Card key={index} className="text-center">
                    <CardContent className="pt-4">
                      <div className="text-lg mb-1">{item.status}</div>
                      <h4 className="text-sm mb-1">{item.metric}</h4>
                      <p className="text-xs text-muted-foreground">{item.score}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Pain Points */}
            <div className="space-y-4">
              <h3 className="text-xl">Key Pain Points Identified</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="pt-6">
                    <h4 className="mb-2">Variant Misunderstanding</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Users interpreted "variants" only as flavors, not sizes or formats, leading to confusion about available options.
                    </p>
                    <blockquote className="text-xs italic text-muted-foreground border-l-2 border-muted pl-2">
                      "I thought '2 variants available' meant different flavors — I didn't click because I wasn't interested in more flavors."
                    </blockquote>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6">
                    <h4 className="mb-2">Abo Icon Confusion</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      The subscription (Abo) icon wasn't clear to users, who wanted more explicit messaging about subscription benefits.
                    </p>
                    <blockquote className="text-xs italic text-muted-foreground border-l-2 border-muted pl-2">
                      "What does this icon mean? Is it telling me something important about the product?"
                    </blockquote>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation & Results */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl mb-8 flex items-center gap-2">
            <RefreshCw className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
            Implementation & Results
          </h2>
          
          <div className="space-y-8">
            {/* Final Implementation Images */}
            <div className="space-y-6">
              <h3 className="text-xl">Final Implementation</h3>
              <p className="text-muted-foreground">
                The article-based product cards were successfully implemented across desktop and mobile platforms, 
                resulting in improved user experience and measurable business impact.
              </p>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Desktop Implementation */}
                <div className="space-y-4">
                  <h4 className="text-lg">Desktop Implementation</h4>
                  <div className="case-study-image-container">
                    <ImageWithFallback
                      src={desktopFinalImage}
                      alt="Desktop final implementation showing the product listing page with article-based cards and enhanced visual hierarchy"
                      className="case-study-content-image"
                    />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Desktop view featuring the final product listing page with article-based cards and enhanced visual hierarchy.
                  </p>
                </div>
                
                {/* Mobile Implementation */}
                <div className="space-y-4">
                  <h4 className="text-lg">Mobile Implementation</h4>
                  <div className="case-study-image-container">
                    <ImageWithFallback
                      src={mobileFinalImage}
                      alt="Mobile final implementation displaying the mobile-optimized version with streamlined cards and improved touch targets"
                      className="case-study-content-image"
                    />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Mobile-optimized version with streamlined cards and improved touch targets for better usability.
                  </p>
                </div>
              </div>
            </div>

            {/* Results & Impact */}
            <div className="space-y-6">
              <h3 className="text-xl">Results & Impact</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <div className="text-3xl text-primary mb-2">€80K</div>
                    <h4 className="mb-1">Value Generated</h4>
                    <p className="text-sm text-muted-foreground">Immediate measurable value from implementation</p>
                  </CardContent>
                </Card>
                
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <div className="text-3xl text-primary mb-2">€1.3M</div>
                    <h4 className="mb-1">Projected Annual Impact</h4>
                    <p className="text-sm text-muted-foreground">Expected value over full year deployment</p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
                <h4 className="mb-3 flex items-center gap-2">
                  <Eye className="h-5 w-5 text-primary" />
                  Key Learnings
                </h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• <strong>User Mental Models:</strong> Understanding how customers categorize and compare products is crucial for information architecture</li>
                  <li>• <strong>Data-Driven Design:</strong> Balancing user needs with technical constraints requires close collaboration across disciplines</li>
                  <li>• <strong>Iterative Testing:</strong> Multiple rounds of usability testing revealed insights that shaped the final design direction</li>
                  <li>• <strong>Cross-Platform Consistency:</strong> Maintaining design coherence across desktop and mobile required careful consideration of each platform's strengths</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Case Studies */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <OtherCaseStudies 
            currentCaseStudyId={currentCaseStudyId}
            onViewCaseStudy={onViewCaseStudy}
          />
        </div>
      </section>
    </div>
  );
}