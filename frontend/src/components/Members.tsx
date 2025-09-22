import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import member1 from '@/assets/member-1.jpg';
import member2 from '@/assets/member-2.jpg';

const members = [
  {
    name: "Arjun Sharma",
    role: "President",
    year: "4th Year",
    department: "Computer Science",
    image: member1,
    skills: ["Python", "AI/ML", "React"],
    bio: "Leading the chapter with passion for artificial intelligence and machine learning."
  },
  {
    name: "Priya Patel",
    role: "Vice President",
    year: "3rd Year", 
    department: "Information Science",
    image: member2,
    skills: ["Java", "Web Dev", "UI/UX"],
    bio: "Focused on web development and creating amazing user experiences."
  },
  {
    name: "Rohit Kumar",
    role: "Technical Lead",
    year: "3rd Year",
    department: "Computer Science",
    image: member1,
    skills: ["C++", "DSA", "Competitive Programming"],
    bio: "Passionate about algorithms and competitive programming."
  },
  {
    name: "Sneha Reddy",
    role: "Event Coordinator",
    year: "2nd Year",
    department: "Information Science",
    image: member2,
    skills: ["Project Management", "Communication", "Leadership"],
    bio: "Organizing impactful events and building community connections."
  },
  {
    name: "Karthik Nair",
    role: "Secretary",
    year: "3rd Year",
    department: "Computer Science", 
    image: member1,
    skills: ["Documentation", "Node.js", "Database"],
    bio: "Maintaining records and developing backend solutions."
  },
  {
    name: "Ananya Singh",
    role: "Treasurer",
    year: "2nd Year",
    department: "Information Science",
    image: member2,
    skills: ["Finance", "Excel", "Analytics"],
    bio: "Managing finances and analyzing chapter growth metrics."
  }
];

export default function Members() {
  return (
    <section id="members" className="py-20 px-6 bg-muted/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Team</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet the passionate students leading ACM DSCE and driving innovation in computing.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member, index) => (
            <Card 
              key={member.name} 
              className="glass-card card-3d hover:shadow-3d transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 shadow-3d"
                  />
                  <h3 className="text-xl font-bold text-foreground">{member.name}</h3>
                  <p className="text-primary font-semibold">{member.role}</p>
                  <p className="text-sm text-muted-foreground">
                    {member.year} • {member.department}
                  </p>
                </div>

                <p className="text-sm text-muted-foreground mb-4 text-center">
                  {member.bio}
                </p>

                <div className="flex flex-wrap gap-2 justify-center">
                  {member.skills.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="secondary" 
                      className="bg-gradient-card text-primary"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Join CTA removed */}
      </div>
    </section>
  );
}