import Navigation from '@/components/Navigation';
import Hero3D from '@/components/Hero3D';
import About from '@/components/About';
import Members from '@/components/Members';
import Events from '@/components/Events';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main>
        <section id="home">
          <Hero3D />
        </section>
        
        <About />
        <Members />
        <Events />
        <Gallery />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="bg-primary py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold text-primary-foreground mb-4">ACM DSCE</h3>
              <p className="text-primary-foreground/80 text-sm">
                Advancing computing as a science and profession at Dayananda Sagar College of Engineering.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-primary-foreground mb-3">Quick Links</h4>
              <div className="space-y-2 text-sm">
                <a href="#about" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">About ACM</a>
                <a href="#members" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">Our Team</a>
                <a href="#events" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">Events</a>
                <a href="#contact" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">Contact</a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-primary-foreground mb-3">Events</h4>
              <div className="space-y-2 text-sm">
                <div className="text-primary-foreground/80">Workshops</div>
                <div className="text-primary-foreground/80">Hackathons</div>
                <div className="text-primary-foreground/80">Tech Talks</div>
                <div className="text-primary-foreground/80">Competitions</div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-primary-foreground mb-3">Contact Info</h4>
              <div className="space-y-2 text-sm text-primary-foreground/80">
                <div>📧 acm@dsce.edu.in</div>
                <div>📍 DSCE, Bangalore</div>
                <div>🕒 Mon-Fri: 10AM-4PM</div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/20 pt-8 text-center">
            <p className="text-primary-foreground/80 text-sm">
              © 2024 ACM Student Chapter, Dayananda Sagar College of Engineering. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
