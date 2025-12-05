import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Reveal from '@/components/Reveal';
import { Badge } from '@/components/ui/badge';
import { FileText, X, ExternalLink, Calendar, Users } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const acmReports = [
  {
    year: '2024-25',
    title: 'ACM Report 2024-25',
    filename: 'ACM report 24-25-1.pdf',
    description: 'A comprehensive year featuring Code Rush competitive programming contest, Cypherquest 2k25 zonal hackathon, TechTrek hackathon, and various workshops. Highlights include multi-college collaborations, tech innovation challenges, and community building initiatives.',
    highlights: ['Code Rush', 'Cypherquest 2k25', 'TechTrek', 'Workshops', 'Multi-College Events']
  },
  {
    year: '2023-24',
    title: 'ACM Report 2023-24',
    filename: 'ACMreport2324.pdf',
    description: 'An active year filled with technical workshops, coding competitions, hackathons, and guest lectures. The chapter organized multiple events focusing on skill development, innovation, and fostering a strong tech community.',
    highlights: ['Hackathons', 'Workshops', 'Competitions', 'Guest Lectures', 'Tech Talks']
  },
  {
    year: '2022-23',
    title: 'ACM Report 2022-23',
    filename: 'ACMreport23.pdf',
    description: 'A productive year marked by various technical events, coding challenges, and collaborative projects. The chapter continued to grow its membership and organized impactful events for the student community.',
    highlights: ['Technical Events', 'Coding Challenges', 'Collaborations', 'Community Growth']
  },
  {
    year: '2021-22',
    title: 'ACM Report 2021-22',
    filename: 'ACM_student_chapter_2021-22-min.pdf',
    description: 'A year of adaptation and innovation with hybrid events combining online and offline activities. Featured workshops on emerging technologies, competitive programming sessions, and networking events.',
    highlights: ['Hybrid Events', 'Emerging Tech', 'Competitive Programming', 'Networking']
  },
  {
    year: '2020-21',
    title: 'ACM Report 2020-21',
    filename: 'ACM_report_2020-21_1-min.pdf',
    description: 'A challenging year that saw the chapter pivot to virtual events. Organized online workshops, webinars, coding competitions, and maintained strong community engagement despite the pandemic.',
    highlights: ['Virtual Events', 'Online Workshops', 'Webinars', 'Community Engagement']
  },
  {
    year: '2019-20',
    title: 'ACM Report 2019-20',
    filename: 'ACM_report-19-20_1.pdf',
    description: 'A successful year with diverse technical events including hackathons, workshops on cutting-edge technologies, guest speaker sessions, and collaborative projects with industry partners.',
    highlights: ['Hackathons', 'Industry Partnerships', 'Guest Speakers', 'Tech Workshops']
  },
  {
    year: '2018-19',
    title: 'ACM Report 2018-19',
    filename: 'ACM_report-2018-19.pdf',
    description: 'The foundational year establishing the chapter\'s presence with inaugural events, workshops, and competitions. Set the stage for future growth and community building initiatives.',
    highlights: ['Inaugural Events', 'Chapter Establishment', 'Workshops', 'Community Building']
  }
];

const events = [
  {
    title: "Code Rush",
    date: "November 7, 2025",
    type: "Competition",
    status: "Completed",
    description: "CODE RUSH - A Coding Challenge by DSCE ACM Student Chapter! An exciting 2-hour competitive programming contest designed to test your skills and challenge your intellect. The event featured algorithmic challenges hosted on the Virtual Judge platform, where participants battled against the clock to solve complex programming problems.",
    attendees: "60+",
    highlights: ["Competitive Programming", "Virtual Judge", "Problem Solving", "Algorithms", "2-Hour Challenge"],
    images: [
      { src: "/code-rush/WhatsApp Image 2025-11-10 at 22.19.35.jpeg", alt: "Code Rush Event - Event highlights" },
      { src: "/code-rush/IMG_2315.JPG", alt: "Code Rush Event - Competition in progress" },
      { src: "/code-rush/IMG_2319.JPG", alt: "Code Rush Event - Participants coding" },
      { src: "/code-rush/IMG_2324.JPG", alt: "Code Rush Event - Event activities" }
      
    ]
  },
  {
    title: "Cypherquest 2k25",
    date: "April 25-26, 2025",
    type: "Hackathon",
    status: "Completed",
    description: "ACM Zonal Level 24-Hour Hackathon organized by DSCE ACM Student Chapter in collaboration with ACM DSATM Student Chapter at Dayananda Sagar Academy of Technology and Management (DSATM). Over 35+ colleges participated, showcasing an incredible display of creativity, problem-solving, and tech innovation.",
    attendees: "35+ Colleges",
    highlights: ["24-Hour Hackathon", "Zonal Level", "Multi-College", "Tech Innovation", "Collaboration"],
    images: [
      { src: "/dsatm/dsatm-2.jpeg", alt: "Cypherquest 2k25 - Participants working on projects" },
      { src: "/dsatm/dsatm-3.jpeg", alt: "Cypherquest 2k25 - Team collaboration and coding" },
      { src: "/dsatm/dsatm-4.jpeg", alt: "Cypherquest 2k25 - Event activities" },
      { src: "/dsatm/dsatm-5.jpeg", alt: "Cypherquest 2k25 - Participants presenting" },
      { src: "/dsatm/dsatm-6.jpeg", alt: "Cypherquest 2k25 - Hackathon moments" },
      { src: "/dsatm/dsatm-7.jpeg", alt: "Cypherquest 2k25 - Winners and awards ceremony" }
    ]
  },
  {
    title: "TechTrek 2025",
    date: "March 29, 2025",
    type: "Hackathon",
    status: "Completed",
    description: "An unforgettable 8-hour open-theme hackathon organized by the DSCE ACM Student Chapter at Dayananda Sagar College of Engineering. The event provided participants with an exhilarating experience to showcase their creativity and technical skills.",
    attendees: "80+",
    highlights: ["8-Hour Hackathon", "Open-Theme", "DSCE ACM", "Innovation", "Tech Skills"],
    images: [
      { src: "/tech-track/10.JPG", alt: "TechTrek 2025 - Project presentations and demos" },
      { src: "/tech-track/tech-track.jpeg", alt: "TechTrek 2025 - Event opening and welcome" },
      { src: "/tech-track/9.JPG", alt: "TechTrek 2025 - Participants coding and developing" },
      { src: "/tech-track/11.JPG", alt: "TechTrek 2025 - Closing ceremony and team photos" }
    ]
  }
];

export default function Events() {
  const [showPreviousEvents, setShowPreviousEvents] = useState(false);

  const handleReportClick = (filename: string) => {
    window.open(`/${filename}`, '_blank');
  };

  const toggleModal = (isOpen: boolean) => {
    setShowPreviousEvents(isOpen);
    // Prevent background scrolling when modal is open
    if (isOpen) {
      // Save current scroll position
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
      // Prevent iOS bounce scrolling
      document.body.style.touchAction = 'none';
      // Store scroll position for restoration
      document.body.setAttribute('data-scroll-y', scrollY.toString());
    } else {
      // Restore scroll position
      const scrollY = document.body.getAttribute('data-scroll-y');
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY));
      }
      document.body.removeAttribute('data-scroll-y');
    }
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      // Reset body styles if component unmounts while modal is open
      if (showPreviousEvents) {
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        document.body.style.overflow = '';
        document.body.style.touchAction = '';
        document.body.removeAttribute('data-scroll-y');
      }
    };
  }, [showPreviousEvents]);

  return (
    <section id="events" className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Events</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the exciting workshops, competitions, and seminars that define our ACM chapter.
          </p>
        </Reveal>

        <div className="space-y-8">
          {events.map((event, index) => (
            <Reveal key={event.title}>
            <Card 
              className={`glass-card card-3d hover:shadow-3d transition-all duration-500 animate-slide-in-right ${
                event.status === 'Upcoming' ? 'ring-2 ring-primary/50' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s`, transform: 'translateZ(0)', willChange: 'transform' }}
            >
              <CardContent className="p-8">
                <div className="grid md:grid-cols-12 gap-8 items-start">
                  <div className="md:col-span-6 space-y-6">
                    <div className="flex items-center gap-3">
                      <h3 className="text-2xl font-bold text-foreground">{event.title}</h3>
                      <Badge 
                        variant={event.status === 'Upcoming' ? 'default' : 'secondary'}
                        className={event.status === 'Upcoming' ? 'bg-gradient-primary' : ''}
                      >
                        {event.status}
                      </Badge>
                    </div>
                    
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        📅 {event.date}
                      </span>
                      <Badge variant="outline">{event.type}</Badge>
                      {event.status === 'Completed' && (
                        <span className="flex items-center gap-1">
                          👥 {event.attendees} attendees
                        </span>
                      )}
                    </div>

                    <p className="text-muted-foreground">
                      {event.description}
                    </p>

                    {/* Key Highlights - Hidden on tablet, shown on desktop */}
                    <div className="hidden lg:block">
                      <h4 className="font-semibold text-foreground mb-3">Key Highlights</h4>
                      <div className="flex flex-wrap gap-2">
                        {event.highlights.map((highlight) => (
                          <Badge 
                            key={highlight} 
                            variant="secondary" 
                            className="bg-gradient-card text-primary"
                          >
                            {highlight}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {event.status === 'Upcoming' && (
                      <div className="p-4 bg-gradient-card rounded-lg">
                        <p className="text-sm text-primary font-semibold">
                          📢 Registration Open! Contact us to participate.
                        </p>
                      </div>
                    )}
                  </div>

                  {event.status === 'Completed' && event.images && event.images.length > 0 && (
                    <div className="md:col-span-6 w-full relative">
                      <Carousel 
                        className="w-full"
                        opts={{
                          align: "start",
                          loop: true,
                        }}
                      >
                        <CarouselContent className="-ml-0">
                          {event.images.map((image, imgIndex) => (
                            <CarouselItem key={imgIndex} className="pl-0">
                              <div className="relative w-full aspect-[3/2] rounded-lg overflow-hidden border border-border/50 shadow-lg">
                                <img 
                                  src={image.src} 
                                  alt={image.alt}
                                  className="w-full h-full object-cover"
                                  loading="lazy"
                                  style={{ transform: 'translateZ(0)' }}
                                />
                              </div>
                            </CarouselItem>
                          ))}
                        </CarouselContent>
                        <CarouselPrevious className="left-2 md:left-4 z-10 bg-black/20 hover:bg-black/35 border border-white/20 text-white/90 hover:text-white shadow-md backdrop-blur-md disabled:opacity-20 h-9 w-9 opacity-70 hover:opacity-100 transition-opacity" />
                        <CarouselNext className="right-2 md:right-4 z-10 bg-black/20 hover:bg-black/35 border border-white/20 text-white/90 hover:text-white shadow-md backdrop-blur-md disabled:opacity-20 h-9 w-9 opacity-70 hover:opacity-100 transition-opacity" />
                      </Carousel>
                      
                      {/* Key Highlights - Shown on tablet, hidden on desktop */}
                      <div className="mt-6 lg:hidden">
                        <h4 className="font-semibold text-foreground mb-3">Key Highlights</h4>
                        <div className="flex flex-wrap gap-2">
                          {event.highlights.map((highlight) => (
                            <Badge 
                              key={highlight} 
                              variant="secondary" 
                              className="bg-gradient-card text-primary"
                            >
                              {highlight}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
            </Reveal>
          ))}
        </div>

        {/* Previous Events Button */}
        <Reveal className="text-center mt-16">
          <Button 
            onClick={() => toggleModal(true)}
            className="bg-gradient-primary hover:bg-gradient-primary/90 text-white px-16 py-6 rounded-xl text-xl font-bold transition-all duration-300 shadow-2xl hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:scale-110 border-2 border-white/20 hover:border-white/40 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            <FileText className="w-7 h-7 mr-3 relative z-10" />
            <span className="relative z-10">View Previous Events</span>
          </Button>
        </Reveal>

        {/* Previous Events Modal */}
        {showPreviousEvents && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-start sm:items-center justify-center p-2 sm:p-4 overflow-y-auto" onClick={() => toggleModal(false)}>
            <div className="bg-background border border-border rounded-xl sm:rounded-2xl max-w-4xl w-full my-4 sm:my-0 max-h-[calc(100vh-2rem)] sm:max-h-[90vh] overflow-hidden shadow-2xl flex flex-col" onClick={(e) => e.stopPropagation()}>
              <div className="p-4 sm:p-6 border-b border-border flex items-start sm:items-center justify-between bg-gradient-to-r from-background to-muted/30 flex-shrink-0">
                <div className="flex-1 pr-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                    Previous <span className="gradient-text">ACM Reports</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-1">Click on any report to view in a new tab</p>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => toggleModal(false)}
                  className="hover:bg-muted flex-shrink-0"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>
              
              <div className="p-4 sm:p-6 overflow-y-auto flex-1 min-h-0">
                <div className="space-y-4">
                  {acmReports.map((report, index) => (
                    <Card
                      key={report.year}
                      className="glass-card hover:shadow-lg transition-all duration-300 cursor-pointer group border-border hover:border-primary/50"
                      onClick={() => handleReportClick(report.filename)}
                    >
                      <CardContent className="p-4 sm:p-6">
                        <div className="flex flex-col sm:flex-row gap-4">
                          <div className="flex-shrink-0">
                            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-primary rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                              <FileText className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                            </div>
                          </div>
                          
                          <div className="flex-1 space-y-2 sm:space-y-3 min-w-0">
                            <div className="flex items-start justify-between gap-2 sm:gap-4">
                              <div className="flex-1 min-w-0">
                                <h4 className="text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-1 break-words">
                                  {report.title}
                                </h4>
                                <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-muted-foreground mb-2 flex-wrap">
                                  <span className="flex items-center gap-1">
                                    <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                                    Academic Year {report.year}
                                  </span>
                                </div>
                              </div>
                              <div className="text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0">
                                <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                              </div>
                            </div>
                            
                            <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                              {report.description}
                            </p>
                            
                            {report.highlights && report.highlights.length > 0 && (
                              <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-2">
                                {report.highlights.map((highlight) => (
                                  <Badge 
                                    key={highlight} 
                                    variant="secondary" 
                                    className="bg-gradient-card text-primary text-xs"
                                  >
                                    {highlight}
                                  </Badge>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}