import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Particles3D from '@/components/Particles3D';
import Reveal from '@/components/Reveal';
import { Users, Rocket, ArrowDown, ArrowRight } from 'lucide-react';

export default function Hero3D() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      {/* Animated colorful diagonal stripes — the main visual element */}
      <div className="animated-stripes animated-stripes--vivid"></div>

      {/* Vignette for depth */}
      <div className="bg-vignette"></div>

      {/* 3D particles */}
      <Particles3D />

      {/* Vue Three.js hero mount point */}
      <div id="vue-hero" className="absolute inset-0"></div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 sm:px-6 pt-24 md:pt-28">
        <div className="w-full max-w-3xl mx-auto">

          {/* Glass card */}
          <div className="hero-glass-card rounded-3xl px-6 py-6 sm:px-10 sm:py-12 md:px-12 md:py-14 text-center">

            {/* College name — small label */}
            <Reveal repeat>
              <p className="text-xs sm:text-sm tracking-[0.2em] uppercase text-muted-foreground mb-6 font-medium">
                Dayananda Sagar College of Engineering
              </p>
            </Reveal>

            {/* ACM — big, bold, glowing */}
            <Reveal repeat>
              <h1 className="text-7xl sm:text-8xl md:text-9xl font-extrabold tracking-tight leading-none mb-3 gradient-text drop-shadow-lg">
                ACM
              </h1>
            </Reveal>

            <Reveal delayMs={80} repeat>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-8 text-foreground/90">
                Student Chapter
              </h2>
            </Reveal>

            {/* Thin separator */}
            <Reveal delayMs={120} repeat>
              <div className="mx-auto w-24 h-0.5 bg-gradient-primary rounded-full mb-8"></div>
            </Reveal>

            {/* Description */}
            <Reveal delayMs={160} repeat>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed">
                Building a community of students passionate about technology — through hackathons, workshops, competitions and collaborative projects.
              </p>
            </Reveal>

            {/* Membership CTA */}
            <Reveal delayMs={240} repeat>
              <div
                onClick={() => navigate('/membership')}
                className="cursor-pointer group mx-auto max-w-md rounded-xl px-5 py-3 flex items-center justify-between gap-3 border border-primary/20 bg-primary/10 hover:bg-primary/10 hover:border-primary/40 transition-all duration-300 mb-8"
              >
                <div>
                  <p className="text-base sm:text-lg font-semibold text-foreground">
                    Want to become an ACM Member?
                  </p>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Get 50% reimbursement — exclusive to DSCE
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-primary flex-shrink-0 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </Reveal>

            {/* Buttons */}
            <Reveal delayMs={320} repeat>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  onClick={() => navigate('/members')}
                  className="group bg-gradient-primary hover:opacity-90 text-white px-8 py-6 rounded-xl text-base sm:text-lg font-bold transition-all duration-300 shadow-xl hover:shadow-glow hover:scale-[1.02] border-2 border-white/10 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                  <Users className="w-5 h-5 sm:w-6 sm:h-6 mr-2.5 relative z-10" />
                  <span className="relative z-10">Meet Our Team</span>
                </Button>

                <Button
                  onClick={() => {
                    const el = document.getElementById('events');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  variant="outline"
                  className="group px-8 py-6 rounded-xl text-base sm:text-lg font-bold transition-all duration-300 border-2 border-primary/40 hover:border-primary text-foreground hover:bg-primary/5 hover:scale-[1.02]"
                >
                  <Rocket className="w-5 h-5 sm:w-6 sm:h-6 mr-2.5 group-hover:rotate-6 transition-transform duration-300" />
                  Explore Events
                </Button>
              </div>
            </Reveal>
          </div>

          {/* Scroll hint */}
          <Reveal delayMs={500} repeat>
            <div className="flex justify-center mt-10">
              <button
                onClick={() => {
                  const el = document.getElementById('about');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="flex flex-col items-center gap-1.5 text-muted-foreground/50 hover:text-muted-foreground transition-colors duration-300 animate-bounce"
                aria-label="Scroll down"
              >
                <ArrowDown className="w-5 h-5" />
              </button>
            </div>
          </Reveal>

        </div>
      </div>
    </div>
  );
}
