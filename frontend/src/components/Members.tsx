import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { ExternalLink, Github, Linkedin, User } from 'lucide-react';

const members = [
  {
    name: "Lochan T N",
    role: "Chairperson",
    linkedin: "https://www.linkedin.com/in/lochan87/",
    github: "https://github.com/lochan87"
  },
  {
    name: "Disha N G",
    role: "Vice-Chair",
    linkedin: "https://www.linkedin.com/in/dishang07/",
    github: "https://github.com/Dishang07"
  },
  {
    name: "Anurag Jain",
    role: "Secretary",
    linkedin: "https://linkedin.com/in/me-jain-anurag/",
    github: "https://github.com/me-jain-anurag/"
  },
  {
    name: "Bharath Kumar B D",
    role: "Treasurer",
    linkedin: "https://www.linkedin.com/in/bharath-kumar-b-d/",
    github: "https://github.com/shaizmd"
  },
  {
    name: "Chandana G",
    role: "Member",
    linkedin: "https://www.linkedin.com/in/chandana-g-820a70275",
    github: "https://github.com/Chandana-107"
  },
  {
    name: "Gautham Krishna Vijayan",
    role: "Member",
    linkedin: "https://linkedin.com/in/gautham-krishna-84aaa3275/",
    github: "https://github.com/Gauthamkv14"
  },
  {
    name: "Dwarampudi Sowmith Reddy",
    role: "Member",
    linkedin: "https://www.linkedin.com/in/sowmith-reddy-dwarampudi-7b9665321/",
    github: "https://github.com/DwarampudiSowmithReddy3"
  },
  {
    name: "Khushi Agrawal",
    role: "Member",
    linkedin: "https://www.linkedin.com/in/khushiagrawal028",
    github: "https://github.com/khushiiagrawal"
  },
  {
    name: "Manaswini G",
    role: "Member",
    linkedin: "https://linkedin.com/in/manaswini-g-1b5057265",
    github: "https://github.com/Manaswini27"
  },
  {
    name: "Prakruthi S",
    role: "Member",
    linkedin: "https://www.linkedin.com/in/prakruthi-shivakumar",
    github: "https://github.com/PRAKRUTHI04/"
  },
  {
    name: "Gaargi L",
    role: "Member",
    linkedin: "https://www.linkedin.com/in/gaargi-l-774b162a1",
    github: "https://github.com/crucinex"
  },
  {
    name: "Pallavi P Kamath",
    role: "Member",
    linkedin: "https://www.linkedin.com/in/pallavi-p-kamath",
    github: "https://github.com/Pulse-23"
  },
  {
    name: "Hamsa G",
    role: "Member",
    linkedin: "https://www.linkedin.com/in/hamsagg19/",
    github: "https://github.com/hamsagg19"
  },
  {
    name: "Niharika N",
    role: "Member",
    linkedin: "https://in.linkedin.com/in/niharika-nandakumar-298bb2325",
    github: "https://github.com/niharika-007"
  },
  {
    name: "Disha T P",
    role: "Member",
    linkedin: "https://www.linkedin.com/in/disha-p-866b762a1",
    github: "https://github.com/dishaprasanna01"
  },
  {
    name: "Mohammed Shaiz T",
    role: "Member",
    linkedin: "https://www.linkedin.com/in/shaizmd/",
    github: "https://github.com/shaizmd"
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {members.map((member, index) => (
            <Card 
              key={member.name} 
              className="glass-card card-3d hover:shadow-3d transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <Avatar className="w-24 h-24 mx-auto mb-4 shadow-3d">
                    <AvatarFallback className="text-xl font-bold bg-gradient-to-br from-primary/20 to-primary/10 text-primary">
                      <User className="w-12 h-12" />
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-bold text-foreground">{member.name}</h3>
                  <p className="text-primary font-semibold">{member.role}</p>
                </div>

                <div className="flex justify-center gap-4 mt-4">
                  <a 
                    href={member.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-blue-100 hover:bg-blue-200 dark:bg-blue-900/20 dark:hover:bg-blue-900/40 transition-colors"
                    aria-label={`${member.name}'s LinkedIn`}
                  >
                    <Linkedin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </a>
                  <a 
                    href={member.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors"
                    aria-label={`${member.name}'s GitHub`}
                  >
                    <Github className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                  </a>
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