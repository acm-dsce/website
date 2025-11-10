import { Card, CardContent } from '@/components/ui/card';
import Reveal from '@/components/Reveal';
import { Badge } from '@/components/ui/badge';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const events = [
  {
    title: "Code Rush",
    date: "November 7, 2025",
    type: "Competition",
    status: "Completed",
    description: "Competitive programming contest organized by DSCE ACM Student Chapter featuring algorithmic challenges on Virtual Judge platform.",
    attendees: "60+",
    highlights: ["Competitive Programming", "Virtual Judge", "Problem Solving", "Algorithms"],
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

                    <div>
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
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}