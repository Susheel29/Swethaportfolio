import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Download, Calendar, MapPin, Award, GraduationCap, Briefcase } from 'lucide-react';

export function ResumeSection() {
  const workExperience = [
    {
      company: "Wongdoody Infosys",
      position: "Senior Lead Experience Designer",
      location: "Bangalore",
      duration: "September 2022 - Present",
      type: "Full-time",
      highlights: [
        "Diverse UX design experience across logistics, banking, automotive, and e-commerce",
        "Promoted to Senior Lead role for contributions. Led strategic redesign of product cards for a leading European pet e-commerce company, yielding a 1.1% increase in cart additions (99% statistical significance) and a 1% increase in converted visitor share (95% statistical significance), projected to generate €1,335/week in incremental revenue",
        "Drove end-to-end UX design for a youth banking application, incorporating user research, feature prioritization, and IA redesign to expand demographic and revenue. Conceptualized and delivered key banking features (Neo banking, Budget buddy, gamified referrals), significantly expanding project scope",
        "Designed an efficient route planning platform for a logistics company, facilitating client workshops and developing user-centric workflows",
        "Presented case studies and facilitated design workshops at various events",
        "Led design strategy and execution for multiple Creative PoD projects focused on accessibility and future screen evaluation",
        "Contributed to business development through PoCs and RFPs, and conducted multiple client visits"
      ]
    },
    {
      company: "Nymble labs",
      position: "Product Designer",
      location: "Bangalore", 
      duration: "February 2022 - September 2022",
      type: "Full-time",
      highlights: [
        "Led end-to-end design of Nymble Bot, creating intuitive HMI and mobile apps, establishing a user-centric design process and transforming the mobile/companion app through user research and revamped information architecture for a seamless user experience",
        "Optimized the Recipe Editor, enabling 600+ new recipes, and designed the Session Analyser, reducing issue analysis time by 40%",
        "Managed the Nymble application lifecycle from UI/UX design to development and QA, ensuring on-time delivery",
        "Pioneered user-centric features (recipe customization, personalization, multi-user sync), resulting in an increase in user satisfaction"
      ]
    },
    {
      company: "Humming Sparrow Digital Solutions",
      position: "Product Design Intern",
      location: "Remote",
      duration: "July 2021 - December 2022", 
      type: "Internship",
      highlights: [
        "Led the end-to-end design of 'Aarogyam Connect,' a patient-centric medical application. Drove the project from initial concept through final design, ensuring a user-friendly and efficient platform",
        "Conceptualized and designed 'Suvidya,' an innovative education platform, optimizing user experience and streamlining learning processes"
      ]
    }
  ];

  const education = {
    institution: "Vellore Institute of Technology, Vellore",
    degree: "Bachelor's Degree - B.Des in Industrial Design",
    duration: "2018 - 2022",
    gpa: "8.7 CGPA"
  };

  const achievements = [
    "Won the RISE award for Youth banking app in the Category Engaging Experience",
    "Won the Insta award twice for best performing employee in 2024", 
    "Won C.D. Naidu Young Scientist award in 2019 organized by Fast Track Research Initiative",
    "President of the IDSA VIT student chapter (Industrial Design Society of America) in the year 2019-2020",
    "Selected for the finals of the nationwide competition TOYOTATHON-2021 organized by the Ministry of Educations Innovation Cell initiated by Hon'ble Prime Minister, Shri.Narendra Modi"
  ];

  return (
    <div className="w-full space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-3xl">Resume</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          A comprehensive overview of my professional experience, education, and achievements in UX design and product development.
        </p>
        <Button 
          variant="outline"
          className="mt-4 group"
          onClick={() => window.open('https://docs.google.com/document/d/1ZFtpXreEp8amP3ZxHPh2OyFN4g3xUINh/edit?usp=sharing&ouid=100819053367971633038&rtpof=true&sd=true', '_blank')}
        >
          <Download className="mr-2 h-4 w-4" />
          Download Full Resume
        </Button>
      </div>

      {/* Work Experience */}
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <Briefcase className="h-5 w-5 text-primary" />
          <h3 className="text-2xl">Work Experience</h3>
        </div>
        
        <div className="space-y-6">
          {workExperience.map((job, index) => (
            <Card key={index}>
              <CardHeader className="pb-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <CardTitle className="text-lg">{job.position}</CardTitle>
                    <p className="text-primary">{job.company}</p>
                  </div>
                  <div className="flex flex-col sm:items-end gap-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      {job.duration}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      {job.location}
                    </div>
                    <Badge variant="secondary" className="text-xs w-fit">
                      {job.type}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {job.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Education */}
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <GraduationCap className="h-5 w-5 text-primary" />
          <h3 className="text-2xl">Education</h3>
        </div>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h4 className="text-lg">{education.degree}</h4>
                <p className="text-primary">{education.institution}</p>
                <p className="text-sm text-muted-foreground mt-1">GPA: {education.gpa}</p>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                {education.duration}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Achievements */}
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <Award className="h-5 w-5 text-primary" />
          <h3 className="text-2xl">Achievements &amp; Recognition</h3>
        </div>
        
        <div className="grid grid-cols-1 gap-4">
          {achievements.map((achievement, index) => (
            <Card key={index}>
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <Award className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-sm">{achievement}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}