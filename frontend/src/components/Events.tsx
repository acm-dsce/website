import { Card, CardContent } from '@/components/ui/card';
import Reveal from '@/components/Reveal';
import { Badge } from '@/components/ui/badge';

const events = [
  {
    title: "AI & Machine Learning Workshop",
    date: "March 15, 2024",
    type: "Workshop",
    status: "Completed",
    description: "Introduction to AI/ML concepts with hands-on Python programming and real-world applications.",
    attendees: 45,
    highlights: ["Python Programming", "TensorFlow Basics", "Project Development"]
  },
  {
    title: "Hackathon 2024",
    date: "February 20-21, 2024", 
    type: "Competition",
    status: "Completed",
    description: "24-hour coding marathon focusing on innovative solutions for smart city challenges.",
    attendees: 120,
    highlights: ["Team Collaboration", "Innovation", "Problem Solving"]
  },
  {
    title: "Web Development Bootcamp",
    date: "January 10-12, 2024",
    type: "Bootcamp",
    status: "Completed", 
    description: "Complete web development training covering frontend and backend technologies.",
    attendees: 80,
    highlights: ["React.js", "Node.js", "Database Design"]
  },
  {
    title: "Tech Talk: Future of Computing",
    date: "April 25, 2024",
    type: "Seminar",
    status: "Upcoming",
    description: "Industry expert session on emerging trends in quantum computing and distributed systems.",
    attendees: 0,
    highlights: ["Quantum Computing", "Distributed Systems", "Career Guidance"]
  },
  {
    title: "Competitive Programming Contest",
    date: "May 10, 2024",
    type: "Competition", 
    status: "Upcoming",
    description: "Inter-college programming competition with algorithmic problem solving challenges.",
    attendees: 0,
    highlights: ["Algorithms", "Data Structures", "Problem Solving"]
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
            <Reveal>
            <Card 
              key={event.title}
              className={`glass-card card-3d hover:shadow-3d transition-all duration-500 animate-slide-in-right ${
                event.status === 'Upcoming' ? 'ring-2 ring-primary/50' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="grid md:grid-cols-4 gap-6 items-center">
                  <div className="md:col-span-2">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-2xl font-bold text-foreground">{event.title}</h3>
                      <Badge 
                        variant={event.status === 'Upcoming' ? 'default' : 'secondary'}
                        className={event.status === 'Upcoming' ? 'bg-gradient-primary' : ''}
                      >
                        {event.status}
                      </Badge>
                    </div>
                    
                    <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
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

                    <p className="text-muted-foreground mb-4">
                      {event.description}
                    </p>
                  </div>

                  <div className="md:col-span-2">
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

                    {event.status === 'Upcoming' && (
                      <div className="mt-4 p-4 bg-gradient-card rounded-lg">
                        <p className="text-sm text-primary font-semibold">
                          📢 Registration Open! Contact us to participate.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
            </Reveal>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <Reveal>
          <Card className="glass-card card-3d hover:shadow-3d transition-all duration-300">
            <CardContent className="p-8 text-center">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-bold mb-2">Competitions</h3>
              <p className="text-3xl font-bold text-primary mb-2">8+</p>
              <p className="text-muted-foreground">Programming contests and hackathons organized</p>
            </CardContent>
          </Card>
          </Reveal>
          <Reveal delayMs={120}>
          <Card className="glass-card card-3d hover:shadow-3d transition-all duration-300">
            <CardContent className="p-8 text-center">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-xl font-bold mb-2">Workshops</h3>
              <p className="text-3xl font-bold text-primary mb-2">15+</p>
              <p className="text-muted-foreground">Technical workshops and skill development sessions</p>
            </CardContent>
          </Card>
          </Reveal>
          <Reveal delayMs={240}>
          <Card className="glass-card card-3d hover:shadow-3d transition-all duration-300">
            <CardContent className="p-8 text-center">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-bold mb-2">Participants</h3>
              <p className="text-3xl font-bold text-primary mb-2">500+</p>
              <p className="text-muted-foreground">Students participated in our events</p>
            </CardContent>
          </Card>
          </Reveal>
        </div>
      </div>
    </section>
  );
}