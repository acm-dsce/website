import { useMemo } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { ExternalLink, Github, Linkedin, User, Crown, Users, GraduationCap } from 'lucide-react';
import Reveal from '@/components/Reveal';

type Member = {
  name: string;
  role: string;
  linkedin: string;
  github: string;
  isFaculty: boolean;
};

const members: Member[] = [
  // Leadership Team
  {
    name: "Lochan T N",
    role: "Vice-Chair",
    linkedin: "https://www.linkedin.com/in/lochan87/",
    github: "https://github.com/lochan87",
    isFaculty: false
  },
  {
    name: "Disha N G",
    role: "Chairperson",
    linkedin: "https://www.linkedin.com/in/dishang07/",
    github: "https://github.com/Dishang07",
    isFaculty: false
  },
  {
    name: "Anurag Jain",
    role: "Secretary",
    linkedin: "https://www.linkedin.com/in/me-jain-anurag/",
    github: "https://github.com/me-jain-anurag/",
    isFaculty: false
  },
  {
    name: "Bharath Kumar B D",
    role: "Membership Chair",
    linkedin: "https://www.linkedin.com/in/bharath-kumar-b-d-53a08a37b/",
    github: "https://github.com/shaizmd",
    isFaculty: false
  },
  // Members with GitHub and LinkedIn
  {
    name: "Chandana G",
    role: "Chapter Member",
    linkedin: "https://www.linkedin.com/in/chandana-g-820a70275",
    github: "https://github.com/Chandana-107",
    isFaculty: false
  },
  {
    name: "Khushi Agrawal",
    role: "Chapter Member",
    linkedin: "https://www.linkedin.com/in/khushiagrawal028",
    github: "https://github.com/khushiiagrawal",
    isFaculty: false
  },
  {
    name: "Prakruthi S",
    role: "Chapter Member",
    linkedin: "https://www.linkedin.com/in/prakruthi-shivakumar",
    github: "https://github.com/PRAKRUTHI04/",
    isFaculty: false
  },
  {
    name: "Gaargi L",
    role: "Chapter Member",
    linkedin: "https://www.linkedin.com/in/gaargi-l-774b162a1",
    github: "https://github.com/crucinex",
    isFaculty: false
  },
  {
    name: "Pallavi P Kamath",
    role: "Chapter Member",
    linkedin: "https://www.linkedin.com/in/pallavi-p-kamath",
    github: "https://github.com/Pulse-23",
    isFaculty: false
  },
  {
    name: "Hamsa G",
    role: "Chapter Member",
    linkedin: "https://www.linkedin.com/in/hamsagg19/",
    github: "https://github.com/hamsagg19",
    isFaculty: false
  },
  {
    name: "Disha T P",
    role: "Chapter Member",
    linkedin: "https://www.linkedin.com/in/disha-p-866b762a1",
    github: "https://github.com/dishaprasanna01",
    isFaculty: false
  },
  {
    name: "Mohammed Shaiz",
    role: "Chapter Member",
    linkedin: "https://www.linkedin.com/in/shaizmd/",
    github: "https://github.com/shaizmd",
    isFaculty: false
  },
  {
    name: "Gautham Krishna",
    role: "Chapter Member",
    linkedin: "https://www.linkedin.com/in/gautham-krishna-84aaa3275/",
    github: "https://github.com/Gauthamkv14",
    isFaculty: false
  },
  // Student Members
  {
    name: "Aman Agarwal",
    role: "Chapter Member",
    linkedin: "https://www.linkedin.com/in/aman-agarwal-6013a7316/",
    github: "https://github.com/amanagarwal-28",
    isFaculty: false
  },
  {
    name: "Deepshree Buchade",
    role: "Chapter Member",
    linkedin: "",
    github: "",
    isFaculty: false
  },
  {
    name: "Karthik Devadiga",
    role: "Chapter Member",
    linkedin: "https://www.linkedin.com/in/karthik-devadiga-20ab9629a/",
    github: "https://github.com/karthikdevadiga006",
    isFaculty: false
  },
  {
    name: "Ayush Kashyap",
    role: "Chapter Member",
    linkedin: "",
    github: "",
    isFaculty: false
  },
  {
    name: "Aruna Mg",
    role: "Chapter Member",
    linkedin: "",
    github: "",
    isFaculty: false
  },
  {
    name: "Anupama Vijaykumar",
    role: "Chapter Member",
    linkedin: "",
    github: "",
    isFaculty: false
  },
  // Faculty Members
   {
    name: "Annapurna Patil",
    role: "Faculty Advisor",
    linkedin: "",
    github: "",
    isFaculty: true
  },
   {
    name: "Rajeshwari Janthakal",
    role: "Faculty Advisor",
    linkedin: "",
    github: "",
    isFaculty: true
  },
   {
    name: "Madhura J",
    role: "Faculty Advisor",
    linkedin: "",
    github: "",
    isFaculty: true
  },
  {
    name: "Latha Anuj",
    role: "Faculty Advisor",
    linkedin: "",
    github: "",
    isFaculty: true
  },
  {
    name: "Bhavani K",
    role: "Faculty Advisor",
    linkedin: "",
    github: "",
    isFaculty: true
  },
  {
    name: "Shalini K B",
    role: "Faculty Advisor",
    linkedin: "",
    github: "",
    isFaculty: true
  },
  {
    name: "Prathima Mabel J",
    role: "Faculty Advisor",
    linkedin: "",
    github: "",
    isFaculty: true
  },
  {
    name: "Reshma S",
    role: "Faculty Advisor",
    linkedin: "",
    github: "",
    isFaculty: true
  },
  {
    name: "Kusumika Dutta",
    role: "Faculty Advisor",
    linkedin: "",
    github: "",
    isFaculty: true
  }
];

export default function Members() {
  const { leadershipMembers, studentMembers, facultyMembers } = useMemo(() => {
    const leadership = members.filter(member => 
      ['Chairperson', 'Vice-Chair', 'Secretary', 'Membership Chair'].includes(member.role)
    );
    
    const students = members.filter(member => 
      !['Chairperson', 'Vice-Chair', 'Secretary', 'Membership Chair'].includes(member.role) && !member.isFaculty
    );
    
    const faculty = members.filter(member => member.isFaculty);
    
    return {
      leadershipMembers: leadership,
      studentMembers: students,
      facultyMembers: faculty
    };
  }, []);

  const renderMemberCard = useMemo(() => {
    return (member: Member, index: number, type: 'leadership' | 'student' | 'faculty') => (
      <Reveal key={`${type}-${member.name}`} delayMs={Math.floor(index / 2) * 15}>
        <Card className={`glass-card card-3d hover:shadow-3d transition-all duration-300 ${
          type === 'leadership' ? 'ring-2 ring-primary/30' : 
          type === 'faculty' ? 'ring-2 ring-primary/30' : ''
        }`}>
          <CardContent className="p-6">
            <div className="text-center">
              <div className="relative mb-4">
                <Avatar className="w-20 h-20 mx-auto mb-4 shadow-3d">
                  <AvatarFallback className={`text-lg font-bold ${
                    type === 'leadership' 
                      ? 'bg-gradient-primary text-white' 
                      : type === 'faculty'
                      ? 'bg-gradient-primary text-white'
                      : 'bg-gradient-to-br from-primary/20 to-primary/10 text-primary'
                  }`}>
                    <User className="w-10 h-10" />
                  </AvatarFallback>
                </Avatar>
                {type === 'leadership' && (
                  <Badge className="absolute -top-2 -right-2 bg-gradient-primary text-white text-xs px-2 py-1">
                    <Crown className="w-3 h-3 mr-1" />
                    {member.role === 'Chairperson' ? 'Chair' : member.role === 'Vice-Chair' ? 'VC' : member.role === 'Secretary' ? 'Sec' : 'MC'}
                  </Badge>
                )}
              
              </div>
              
              <h3 className="text-lg font-bold text-foreground mb-1">{member.name}</h3>
              <p className={`font-semibold text-sm mb-4 ${
                type === 'leadership' ? 'text-primary' : 
                type === 'faculty' ? 'text-primary' : 'text-muted-foreground'
              }`}>
                {member.role}
              </p>

              {type !== 'faculty' && (
                <div className="flex justify-center gap-3 mt-4">
                  <a 
                    href={member.linkedin && member.linkedin !== '' ? (member.linkedin.startsWith('http') ? member.linkedin : `https://${member.linkedin}`) : '#'}
                    target={member.linkedin && member.linkedin !== '' ? '_blank' : '_self'}
                    rel={member.linkedin && member.linkedin !== '' ? 'noopener noreferrer' : ''}
                    onClick={(e) => {
                      if (!member.linkedin || member.linkedin === '') {
                        e.preventDefault();
                      }
                    }}
                    className="p-2 rounded-full bg-blue-100 hover:bg-blue-200 dark:bg-blue-900/20 dark:hover:bg-blue-900/40 transition-colors"
                    aria-label={`${member.name}'s LinkedIn profile`}
                  >
                    <Linkedin className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  </a>
                  <a 
                    href={member.github && member.github !== '' ? (member.github.startsWith('http') ? member.github : `https://${member.github}`) : '#'}
                    target={member.github && member.github !== '' ? '_blank' : '_self'}
                    rel={member.github && member.github !== '' ? 'noopener noreferrer' : ''}
                    onClick={(e) => {
                      if (!member.github || member.github === '') {
                        e.preventDefault();
                      }
                    }}
                    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors"
                    aria-label={`${member.name}'s GitHub profile`}
                  >
                    <Github className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                  </a>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </Reveal>
    );
  }, []);

  return (
    <section id="members" className="relative py-20 px-6 bg-background overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid opacity-30"></div>
      <div className="absolute inset-0 bg-vignette"></div>
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-primary/5 via-transparent to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-96 bg-gradient-to-t from-primary/5 via-transparent to-transparent"></div>
      
      {/* Animated gradient orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="relative z-10 max-w-6xl mx-auto">
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
                <div className="text-sm text-muted-foreground">Total Members</div>
              </CardContent>
            </Card>
          </Reveal>
          <Reveal delayMs={100}>
            <Card className="glass-card card-3d hover:shadow-3d transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">{leadershipMembers.length}</div>
                <div className="text-sm text-muted-foreground">Leadership Roles</div>
              </CardContent>
            </Card>
          </Reveal>
          <Reveal delayMs={200}>
            <Card className="glass-card card-3d hover:shadow-3d transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">{leadershipMembers.length + studentMembers.length}</div>
                <div className="text-sm text-muted-foreground">Students</div>
              </CardContent>
            </Card>
          </Reveal>
          <Reveal delayMs={300}>
            <Card className="glass-card card-3d hover:shadow-3d transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">{facultyMembers.length}</div>
                <div className="text-sm text-muted-foreground">Faculty Advisors</div>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {leadershipMembers.map((member, index) => renderMemberCard(member, index, 'leadership'))}
          </div>
        </div>

        {/* Faculty Section */}
        <div className="mb-16">
          <Reveal className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <GraduationCap className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-bold">
                Faculty <span className="gradient-text">Advisors</span>
              </h3>
              <GraduationCap className="w-6 h-6 text-primary" />
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Distinguished faculty members guiding our academic and professional journey.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {facultyMembers.map((member, index) => renderMemberCard(member, index, 'faculty'))}
          </div>
        </div>

        {/* Student Members */}
        <div>
          <Reveal className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Users className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-bold">
                Student <span className="gradient-text">Members</span>
              </h3>
              <Users className="w-6 h-6 text-primary" />
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The talented students contributing to our community's growth and success.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {studentMembers.map((member, index) => renderMemberCard(member, index, 'student'))}
          </div>
        </div>
      </div>
    </section>
  );
}