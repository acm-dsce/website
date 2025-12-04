import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { ExternalLink, Github, Linkedin, User, Crown, Users } from 'lucide-react';
import Reveal from '@/components/Reveal';

const members = [
  // Leadership Team
  {
    name: "Disha N G",
    role: "Chair",
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
    role: "Membership Chair",
    linkedin: "https://www.linkedin.com/in/bharath-kumar-b-d/",
    github: "https://github.com/shaizmd"
  },
  // Members with GitHub and LinkedIn
  {
    name: "Chandana G",
    role: "Chapter Member",
    linkedin: "https://www.linkedin.com/in/chandana-g-820a70275",
    github: "https://github.com/Chandana-107"
  },
  {
    name: "Khushi Agrawal",
    role: "Chapter Member",
    linkedin: "https://www.linkedin.com/in/khushiagrawal028",
    github: "https://github.com/khushiiagrawal"
  },
  {
    name: "Prakruthi S",
    role: "Chapter Member",
    linkedin: "https://www.linkedin.com/in/prakruthi-shivakumar",
    github: "https://github.com/PRAKRUTHI04/"
  },
  {
    name: "Gaargi L",
    role: "Chapter Member",
    linkedin: "https://www.linkedin.com/in/gaargi-l-774b162a1",
    github: "https://github.com/crucinex"
  },
  {
    name: "Pallavi P Kamath",
    role: "Chapter Member",
    linkedin: "https://www.linkedin.com/in/pallavi-p-kamath",
    github: "https://github.com/Pulse-23"
  },
  {
    name: "Hamsa G",
    role: "Chapter Member",
    linkedin: "https://www.linkedin.com/in/hamsagg19/",
    github: "https://github.com/hamsagg19"
  },
  {
    name: "Disha T P",
    role: "Chapter Member",
    linkedin: "https://www.linkedin.com/in/disha-p-866b762a1",
    github: "https://github.com/dishaprasanna01"
  },
  {
    name: "Mohammed Shaiz",
    role: "Chapter Member",
    linkedin: "https://www.linkedin.com/in/shaizmd/",
    github: "https://github.com/shaizmd"
  },
  // New Members (without social links)
  {
    name: "Aman Agarwal",
    role: "Chapter Member"
  },
  {
    name: "Latha Anuj",
    role: "Chapter Member"
  },
  {
    name: "Deepshree Buchade",
    role: "Chapter Member"
  },
  {
    name: "Karthik Devadiga",
    role: "Chapter Member"
  },
  {
    name: "Kusumika Dutta",
    role: "Chapter Member"
  },
  {
    name: "Bhavani K",
    role: "Chapter Member"
  },
  {
    name: "Shalini K B",
    role: "Chapter Member"
  },
  {
    name: "Ayush Kashyap",
    role: "Chapter Member"
  },
  {
    name: "Prathima Mabel J",
    role: "Chapter Member"
  },
  {
    name: "Aruna Mg",
    role: "Chapter Member"
  },
  {
    name: "Annapurna Patil",
    role: "Chapter Member"
  },
  {
    name: "Reshma S",
    role: "Chapter Member"
  },
  {
    name: "Anupama Vijaykumar",
    role: "Chapter Member"
  }
];

export default function Members() {
  const leadershipMembers = members.filter(member => 
    ['Chair', 'Secretary', 'Membership Chair'].includes(member.role)
  );

  const regularMembers = members.filter(member => 
    !['Chair', 'Secretary', 'Membership Chair'].includes(member.role)
  );

  const renderMemberCard = (member: any, index: number, isLeadership = false) => (
    <Reveal key={member.name} delayMs={index * 80}>
      <Card className={`glass-card card-3d hover:shadow-3d transition-all duration-500 animate-fade-in-up ${
        isLeadership ? 'ring-2 ring-primary/30' : ''
      }`}>
        <CardContent className="p-6">
          <div className="text-center">
            <div className="relative mb-4">
              <Avatar className="w-20 h-20 mx-auto mb-4 shadow-3d">
                <AvatarFallback className={`text-lg font-bold ${
                  isLeadership 
                    ? 'bg-gradient-primary text-white' 
                    : 'bg-gradient-to-br from-primary/20 to-primary/10 text-primary'
                }`}>
                  <User className="w-10 h-10" />
                </AvatarFallback>
              </Avatar>
              {isLeadership && (
                <Badge className="absolute -top-2 -right-2 bg-gradient-primary text-white text-xs px-2 py-1">
                  <Crown className="w-3 h-3 mr-1" />
                  {member.role === 'Chair' ? 'Chair' : member.role === 'Secretary' ? 'Sec' : 'MC'}
                </Badge>
              )}
            </div>
            
            <h3 className="text-lg font-bold text-foreground mb-1">{member.name}</h3>
            <p className={`font-semibold text-sm mb-4 ${
              isLeadership ? 'text-primary' : 'text-muted-foreground'
            }`}>
              {member.role}
            </p>

            {(member.linkedin || member.github) && (
              <div className="flex justify-center gap-3 mt-4">
                {member.linkedin && (
                  <a 
                    href={member.linkedin.startsWith('http') ? member.linkedin : `https://${member.linkedin}`}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-blue-100 hover:bg-blue-200 dark:bg-blue-900/20 dark:hover:bg-blue-900/40 transition-colors"
                    aria-label={`${member.name}'s LinkedIn profile`}
                  >
                    <Linkedin className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  </a>
                )}
                {member.github && (
                  <a 
                    href={member.github.startsWith('http') ? member.github : `https://${member.github}`}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors"
                    aria-label={`${member.name}'s GitHub profile`}
                  >
                    <Github className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                  </a>
                )}
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </Reveal>
  );

  return (
    <section id="members" className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Team</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet the passionate students leading ACM DSCE and driving innovation in computing.
          </p>
        </Reveal>
        
        {/* Stats section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <Reveal>
            <Card className="glass-card card-3d hover:shadow-3d transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">{members.length}</div>
                <div className="text-sm text-muted-foreground">Team Members</div>
              </CardContent>
            </Card>
          </Reveal>
          <Reveal delayMs={100}>
            <Card className="glass-card card-3d hover:shadow-3d transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">3</div>
                <div className="text-sm text-muted-foreground">Leadership Roles</div>
              </CardContent>
            </Card>
          </Reveal>
          <Reveal delayMs={200}>
            <Card className="glass-card card-3d hover:shadow-3d transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">25+</div>
                <div className="text-sm text-muted-foreground">Events Organized</div>
              </CardContent>
            </Card>
          </Reveal>
          <Reveal delayMs={300}>
            <Card className="glass-card card-3d hover:shadow-3d transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">5</div>
                <div className="text-sm text-muted-foreground">Years Active</div>
              </CardContent>
            </Card>
          </Reveal>
        </div>

        {/* Leadership Section */}
        <div className="mb-16">
          <Reveal className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Crown className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-bold">
                Leadership <span className="gradient-text">Team</span>
              </h3>
              <Crown className="w-6 h-6 text-primary" />
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The dedicated leaders driving our chapter's vision and initiatives.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {leadershipMembers.map((member, index) => renderMemberCard(member, index, true))}
          </div>
        </div>

        {/* Regular Members */}
        <div>
          <Reveal className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Users className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-bold">
                Chapter <span className="gradient-text">Members</span>
              </h3>
              <Users className="w-6 h-6 text-primary" />
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The talented individuals contributing to our community's growth and success.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {regularMembers.map((member, index) => renderMemberCard(member, index, false))}
          </div>
        </div>
      </div>
    </section>
  );
}