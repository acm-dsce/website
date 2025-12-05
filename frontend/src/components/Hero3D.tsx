import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Particles3D from '@/components/Particles3D';
import Reveal from '@/components/Reveal';
import { Users, Rocket } from 'lucide-react';

export default function Hero3D() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      <div className="bg-grid"></div>
      <div className="bg-vignette"></div>
      <Particles3D />

      {/* Vue Three.js hero mount point */}
      <div id="vue-hero" className="absolute inset-0"></div>

      <div className="relative z-10 flex min-h-screen items-center justify-center px-6">
        <div className="text-center max-w-4xl mx-auto">
          <Reveal repeat>
            <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight mb-4 md:mb-6">
              <span className="text-[hsl(var(--royal-blue))]">ACM</span>
            </h1>
          </Reveal>
          <Reveal delayMs={80} repeat>
            <div className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">Student Chapter</div>
          </Reveal>
          <Reveal delayMs={160} repeat>
            <p className="text-lg md:text-xl text-muted-foreground mb-4">Dayananda Sagar College of Engineering</p>
          </Reveal>
          <Reveal delayMs={240} repeat>
            <p className="text-base md:text-lg text-muted-foreground/90 max-w-3xl mx-auto mb-6">
              We bring together students who love building with technology, from AIML to coding, web development and design, through workshops, talks, hackathons and collaborative projects.
            </p>
          </Reveal>
          <Reveal delayMs={320} repeat>
            <div className="inline-block px-6 py-4 rounded-xl bg-gradient-card backdrop-blur-sm mb-8">
              <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
                <span className="text-sm md:text-base font-medium text-foreground">💻 Hackathons</span>
                <span className="text-muted-foreground">•</span>
                <span className="text-sm md:text-base font-medium text-foreground">💡 Workshops</span>
                <span className="text-muted-foreground">•</span>
                <span className="text-sm md:text-base font-medium text-foreground">🏆 Competitions</span>
                <span className="text-muted-foreground">•</span>
                <span className="text-sm md:text-base font-medium text-foreground">🤝🏽 Collaborations</span>
              </div>
            </div>
          </Reveal>
          <Reveal delayMs={400} repeat>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
              <Button
                onClick={() => navigate('/members')}
                className="group bg-gradient-primary hover:bg-gradient-primary/90 text-white px-8 py-6 md:px-10 md:py-7 rounded-xl text-lg md:text-xl font-bold transition-all duration-300 shadow-2xl hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:scale-[1.02] border-2 border-white/20 hover:border-white/30 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                <Users className="w-6 h-6 md:w-7 md:h-7 mr-3 relative z-10" />
                <span className="relative z-10">Meet Our Team</span>
              </Button>
              
              <Button
                onClick={() => {
                  const eventsSection = document.getElementById('events');
                  if (eventsSection) {
                    eventsSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="group bg-gradient-primary hover:bg-gradient-primary/90 text-white px-8 py-6 md:px-10 md:py-7 rounded-xl text-lg md:text-xl font-bold transition-all duration-300 shadow-2xl hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:scale-[1.02] border-2 border-white/20 hover:border-white/30 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                <Rocket className="w-6 h-6 md:w-7 md:h-7 mr-3 group-hover:rotate-6 transition-transform duration-300 relative z-10" />
                <span className="relative z-10">Explore Events</span>
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}