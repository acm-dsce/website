import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Events', href: '#events' },
  { name: 'Membership', href: '/membership' },
  { name: 'Contact', href: '#contact' }
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          
          // Update active section based on scroll position (only for hash sections)
          const sections = navItems
            .filter(item => item.href.startsWith('#'))
            .map(item => item.href.slice(1));
          const current = sections.find(section => {
            const element = document.getElementById(section);
            if (element) {
              const rect = element.getBoundingClientRect();
              return rect.top <= 100 && rect.bottom >= 100;
            }
            return false;
          });
          
          if (current) {
            setActiveSection(current);
          }
          
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (href: string) => {
    if (href.startsWith('#')) {
      if (location.pathname !== '/') {
        navigate('/' + href);
      } else {
        const element = document.getElementById(href.slice(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      navigate(href);
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 py-0.5 transition-all duration-300 !rounded-none will-change-transform ${
      isScrolled ? 'bg-background/95 shadow-lg border-b border-border/50' : 'bg-transparent'
    }`} style={{ transform: 'translateZ(0)' }}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0 flex items-center">
              <img 
                src="/acm-logo.png" 
                alt="ACM Logo" 
                className="w-20 h-20 mt-0 md:w-20 md:h-20 object-contain" 
              />
            </div>
            <div className="flex flex-col justify-center">
              <div className={`font-bold text-xl md:text-2xl leading-tight transition-colors duration-300 ${
                isScrolled ? 'gradient-text' : 'gradient-text'
              }`}>ACM DSCE</div>
              <div className={`text-xs md:text-sm font-medium transition-colors duration-300 ${
                isScrolled ? 'text-foreground/70' : 'text-muted-foreground'
              }`}>Student Chapter</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNav(item.href)}
                className={`text-base lg:text-lg font-medium transition-colors duration-200 hover:text-primary px-1 lg:px-2 py-1 ${
                  item.href.startsWith('#')
                    ? (location.pathname === '/' && activeSection === item.href.slice(1)
                        ? 'text-primary border-b-2 border-primary'
                        : isScrolled ? 'text-foreground' : 'text-muted-foreground')
                    : (location.pathname.startsWith(item.href)
                        ? 'text-primary border-b-2 border-primary'
                        : isScrolled ? 'text-foreground' : 'text-muted-foreground')
                }`}
              >
                {item.name}
              </button>
            ))}
            <Button
              onClick={() => handleNav('/members')}
              className={`ml-2 lg:ml-6 font-semibold px-4 lg:px-6 py-2 lg:py-2.5 text-sm lg:text-base rounded-lg transition-all duration-200 ${
                location.pathname === '/members'
                  ? 'bg-gradient-primary text-white shadow-lg hover:shadow-xl'
                  : 'bg-primary text-white hover:bg-primary/90 shadow-md hover:shadow-lg'
              }`}
            >
              Our Team
            </Button>
          </div>

          {/* CTA removed */}

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 transition-colors duration-300 ${
              isScrolled ? 'text-foreground' : 'text-muted-foreground'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className={`md:hidden mt-3 py-5 rounded-xl border border-border/50 shadow-2xl backdrop-blur-xl ${
            isScrolled ? 'bg-background/98' : 'bg-background/95'
          }`}>
            <div className="flex flex-col space-y-1 px-2">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNav(item.href)}
                  className={`text-left py-3 px-4 text-base font-medium transition-all duration-200 rounded-lg ${
                    item.href.startsWith('#')
                      ? (location.pathname === '/' && activeSection === item.href.slice(1)
                          ? 'text-primary bg-primary/10 border-l-4 border-primary'
                          : 'text-foreground hover:text-primary hover:bg-muted/50')
                      : (location.pathname.startsWith(item.href)
                          ? 'text-primary bg-primary/10 border-l-4 border-primary'
                          : 'text-foreground hover:text-primary hover:bg-muted/50')
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <Button
                onClick={() => handleNav('/members')}
                className={`w-full mt-4 font-semibold px-6 py-3 rounded-lg transition-all duration-200 ${
                  location.pathname === '/members'
                    ? 'bg-gradient-primary text-white shadow-lg hover:shadow-xl'
                    : 'bg-gradient-primary text-white hover:bg-gradient-primary/90 shadow-md hover:shadow-lg'
                }`}
              >
                Our Team
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}