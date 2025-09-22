import { Button } from '@/components/ui/button';
import heroBg from '@/assets/hero-bg.jpg';

export default function Hero3D() {
  return (
    <div className="relative min-h-screen bg-gradient-hero overflow-hidden">
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Vue Three.js hero mount point */}
      <div id="vue-hero" className="absolute inset-0"></div>

      <div className="relative z-10 flex min-h-screen items-center justify-center px-6">
        <div className="text-center max-w-4xl mx-auto">
          <div className="floating-3d mb-8">
            <img src="/acm-logo.png" alt="ACM Logo" className="w-24 h-24 mx-auto rounded-full shadow-glow" />
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="gradient-text">ACM</span>
            <br />
            <span className="text-foreground">Student Chapter</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">Dayananda Sagar College of Engineering</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300 card-3d px-8 py-3 text-lg">Join ACM</Button>
            <Button variant="outline" size="lg" className="glass-card hover:shadow-3d transition-all duration-300 card-3d px-8 py-3 text-lg">Learn More</Button>
          </div>
        </div>
      </div>
    </div>
  );
}