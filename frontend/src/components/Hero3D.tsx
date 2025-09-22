import { Button } from '@/components/ui/button';
import Particles3D from '@/components/Particles3D';
import Reveal from '@/components/Reveal';

export default function Hero3D() {
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
            <p className="text-base md:text-lg text-muted-foreground/90 max-w-3xl mx-auto">
              We bring together students who love building with technology - from AI/ML and coding to web and design - through workshops, talks, hackathons and collaborative projects.
            </p>
          </Reveal>
          <Reveal delayMs={320} repeat>
            <p className="mt-3 text-sm md:text-base text-muted-foreground/80 max-w-2xl mx-auto">
              Explore our events, learn from peers, and contribute to real-world initiatives that push your skills beyond the classroom.
            </p>
          </Reveal>
        </div>
      </div>
    </div>
  );
}