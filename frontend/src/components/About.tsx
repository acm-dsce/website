import { Card, CardContent } from '@/components/ui/card';
import Reveal from '@/components/Reveal';

export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">ACM</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The Association for Computing Machinery is the world's largest educational and scientific computing society.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <Reveal className="space-y-6">
            <h3 className="text-3xl font-bold text-foreground">Our Mission</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              ACM brings together computing educators, researchers, and professionals to inspire dialogue, 
              share resources, and address the field's challenges. We advance computing as a science 
              and profession through education, research, and public policy.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At DSCE, our student chapter provides opportunities for networking, professional development, 
              and technical growth in the field of computing and technology.
            </p>
          </Reveal>
          
          <div className="grid grid-cols-2 gap-4">
            <Reveal>
            <Card className="glass-card card-3d hover:shadow-3d transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Active Members</div>
              </CardContent>
            </Card>
            </Reveal>
            <Reveal delayMs={100}>
            <Card className="glass-card card-3d hover:shadow-3d transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">25+</div>
                <div className="text-sm text-muted-foreground">Events Hosted</div>
              </CardContent>
            </Card>
            </Reveal>
            <Reveal delayMs={200}>
            <Card className="glass-card card-3d hover:shadow-3d transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">10+</div>
                <div className="text-sm text-muted-foreground">Workshops</div>
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
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Reveal>
          <Card className="glass-card card-3d hover:shadow-3d transition-all duration-300">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Education</h3>
              <p className="text-muted-foreground">
                Providing quality educational opportunities through workshops, seminars, and technical talks.
              </p>
            </CardContent>
          </Card>
          </Reveal>
          <Reveal delayMs={120}>
          <Card className="glass-card card-3d hover:shadow-3d transition-all duration-300">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Networking</h3>
              <p className="text-muted-foreground">
                Building connections with professionals, researchers, and peers in the computing field.
              </p>
            </CardContent>
          </Card>
          </Reveal>
          <Reveal delayMs={240}>
          <Card className="glass-card card-3d hover:shadow-3d transition-all duration-300">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Innovation</h3>
              <p className="text-muted-foreground">
                Fostering innovation and research in computing through collaborative projects and competitions.
              </p>
            </CardContent>
          </Card>
          </Reveal>
        </div>
      </div>
    </section>
  );
}