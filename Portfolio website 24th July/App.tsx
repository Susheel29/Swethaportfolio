import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './components/ui/button';
import { useIsMobile } from './components/ui/use-mobile';
import { Sidebar } from './components/Sidebar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ResumeSection } from './components/ResumeSection';
import { ContactSection } from './components/ContactSection';
import { BackToTop } from './components/BackToTop';
import { ZooplusCaseStudy } from './components/case-studies/ZooplusCaseStudy';
import { DraxCaseStudy } from './components/case-studies/DraxCaseStudy';
import { YouthBankingCaseStudy } from './components/case-studies/YouthBankingCaseStudy';
import { NymbleCaseStudy } from './components/case-studies/NymbleCaseStudy';

type ViewType = 'portfolio' | 'zooplus' | 'drax' | 'youth-banking' | 'nymble';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewType>('portfolio');
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const isScrolling = useRef(false);
  
  // Section refs
  const homeRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const resumeRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  const sectionRefs = {
    home: homeRef,
    about: aboutRef,
    projects: projectsRef,
    resume: resumeRef,
    contact: contactRef
  };

  // Scroll to section function
  const scrollToSection = useCallback((sectionId: string) => {
    const sectionRef = sectionRefs[sectionId as keyof typeof sectionRefs];
    if (sectionRef?.current) {
      isScrolling.current = true;
      setActiveSection(sectionId);
      setIsMobileMenuOpen(false); // Close mobile menu when navigating
      
      sectionRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });

      // Reset scrolling flag after animation
      setTimeout(() => {
        isScrolling.current = false;
      }, 1000);
    }
  }, []);

  // Navigate to case study
  const navigateToCaseStudy = useCallback((caseStudyId: string) => {
    setCurrentView(caseStudyId as ViewType);
    setIsMobileMenuOpen(false); // Close mobile menu when navigating to case study
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Navigate back to portfolio
  const navigateToPortfolio = useCallback(() => {
    setCurrentView('portfolio');
    setActiveSection('home');
    setIsMobileMenuOpen(false); // Close mobile menu
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Close mobile menu when clicking outside or on escape
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (isMobileMenuOpen && !target.closest('.mobile-menu') && !target.closest('.mobile-menu-button')) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.addEventListener('click', handleClickOutside);
      document.body.classList.add('menu-open'); // Use CSS class instead of inline styles
    } else {
      document.body.classList.remove('menu-open');
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('click', handleClickOutside);
      document.body.classList.remove('menu-open');
    };
  }, [isMobileMenuOpen]);

  // Set up scroll detection for portfolio view
  useEffect(() => {
    if (currentView !== 'portfolio') return;

    const handleScroll = () => {
      // Don't update active section during programmatic scrolling
      if (isScrolling.current) return;

      const sections = Object.entries(sectionRefs);
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      // Find the section that's currently in view
      let currentSection = 'home';
      
      for (const [sectionId, ref] of sections) {
        if (ref.current) {
          const element = ref.current;
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            currentSection = sectionId;
            break;
          }
        }
      }

      if (currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };

    // Throttle scroll events
    let timeoutId: NodeJS.Timeout;
    const throttledScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleScroll, 50);
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    
    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener('scroll', throttledScroll);
      clearTimeout(timeoutId);
    };
  }, [activeSection, currentView]);

  // Case study components mapping
  const caseStudyComponents = {
    'zooplus': ZooplusCaseStudy,
    'drax': DraxCaseStudy,
    'youth-banking': YouthBankingCaseStudy,
    'nymble': NymbleCaseStudy
  };

  // Mobile Header Component
  const MobileHeader = () => (
    <header className="fixed top-0 left-0 right-0 h-16 bg-card border-b border-border flex items-center justify-between px-4 z-50 md:hidden">
      <div className="min-w-0 flex-1">
        <h2 className="text-lg truncate">Barani Swetha</h2>
        <p className="text-xs text-muted-foreground truncate">Senior Lead Experience Designer</p>
      </div>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="mobile-menu-button flex-shrink-0 ml-2"
      >
        {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>
    </header>
  );

  // Desktop Sidebar Component with Fixed Positioning
  const DesktopSidebar = () => (
    <div className="fixed left-0 top-0 h-screen w-64 z-40 hidden md:block">
      <Sidebar 
        activeSection={activeSection} 
        setActiveSection={scrollToSection}
      />
    </div>
  );

  // Mobile Menu Overlay Component
  const MobileMenuOverlay = () => (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 md:hidden ${
          isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      />
      
      {/* Sidebar Overlay */}
      <div className={`mobile-menu fixed left-0 top-0 h-screen w-64 transform transition-transform duration-300 ease-in-out z-50 md:hidden ${
        isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <Sidebar 
          activeSection={activeSection} 
          setActiveSection={scrollToSection}
        />
      </div>
    </>
  );

  // Render case study view
  if (currentView !== 'portfolio') {
    const CaseStudyComponent = caseStudyComponents[currentView];
    
    if (!CaseStudyComponent) {
      // Fallback if case study not found
      return (
        <div className="min-h-screen bg-background flex items-center justify-center overflow-x-hidden">
          <div className="text-center px-4 max-w-md">
            <h1 className="text-2xl mb-4">Case Study Not Found</h1>
            <button 
              onClick={navigateToPortfolio}
              className="px-4 py-2 bg-primary text-primary-foreground rounded-md"
            >
              Back to Portfolio
            </button>
          </div>
          <BackToTop />
        </div>
      );
    }
    
    return (
      <div className="min-h-screen bg-background overflow-x-hidden">
        {/* Mobile Header for case studies */}
        {isMobile && <MobileHeader />}
        
        <div className={`${isMobile ? 'pt-16' : ''} overflow-x-hidden`}>
          <CaseStudyComponent 
            onBackToPortfolio={navigateToPortfolio}
            onViewCaseStudy={navigateToCaseStudy}
            currentCaseStudyId={currentView}
          />
        </div>
        
        {/* Mobile Menu Overlay for case studies */}
        {isMobile && <MobileMenuOverlay />}
        
        <BackToTop />
      </div>
    );
  }

  // Render portfolio view
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Desktop Fixed Sidebar */}
      <DesktopSidebar />
      
      {/* Mobile Header - Only visible on mobile */}
      {isMobile && <MobileHeader />}
      
      {/* Mobile Menu Overlay - Only on mobile */}
      {isMobile && <MobileMenuOverlay />}
      
      {/* Main Content */}
      <main className={`${
        !isMobile 
          ? 'main-content-desktop md:ml-64' 
          : 'main-content-mobile pt-16'
      } overflow-x-hidden`}>
        {/* Hero Section */}
        <section 
          ref={homeRef}
          className="min-h-screen flex items-center justify-center section-padding"
          id="home"
        >
          <div className="content-container">
            <HeroSection onViewProjects={() => scrollToSection('projects')} />
          </div>
        </section>

        {/* About Section */}
        <section 
          ref={aboutRef}
          className="min-h-screen flex items-center justify-center section-padding"
          id="about"
        >
          <div className="content-container">
            <AboutSection />
          </div>
        </section>

        {/* Projects Section */}
        <section 
          ref={projectsRef}
          className="min-h-screen flex items-center justify-center section-padding"
          id="projects"
        >
          <div className="content-container">
            <ProjectsSection onViewCaseStudy={navigateToCaseStudy} />
          </div>
        </section>

        {/* Resume Section */}
        <section 
          ref={resumeRef}
          className="min-h-screen flex items-center justify-center section-padding"
          id="resume"
        >
          <div className="content-container">
            <ResumeSection />
          </div>
        </section>

        {/* Contact Section */}
        <section 
          ref={contactRef}
          className="min-h-screen flex items-center justify-center section-padding"
          id="contact"
        >
          <div className="content-container">
            <ContactSection />
          </div>
        </section>
      </main>
      
      {/* Back to Top Button */}
      <BackToTop />
    </div>
  );
}