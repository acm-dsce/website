import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Members', href: '/members' },
  { name: 'Events', href: '#events' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Contact', href: '#contact' }
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
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
    };

    window.addEventListener('scroll', handleScroll);
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
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'glass-card shadow-3d' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src="/acm-logo.png" alt="ACM Logo" className="w-10 h-10 rounded-full" />
            <div>
              <div className="font-bold text-xl gradient-text">ACM DSCE</div>
              <div className="text-xs text-muted-foreground">Student Chapter</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNav(item.href)}
                className={`text-base font-medium transition-colors duration-200 hover:text-primary ${
                  item.href.startsWith('#')
                    ? (location.pathname === '/' && activeSection === item.href.slice(1)
                        ? 'text-primary border-b-2 border-primary'
                        : 'text-muted-foreground')
                    : (location.pathname.startsWith(item.href)
                        ? 'text-primary border-b-2 border-primary'
                        : 'text-muted-foreground')
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* CTA removed */}

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
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
          <div className="md:hidden glass-card mt-2 py-4 rounded-lg">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNav(item.href)}
                    className={`text-left px-4 py-2 text-base font-medium transition-colors duration-200 hover:text-primary ${
                      item.href.startsWith('#')
                        ? (location.pathname === '/' && activeSection === item.href.slice(1)
                            ? 'text-primary'
                            : 'text-muted-foreground')
                        : (location.pathname.startsWith(item.href)
                            ? 'text-primary'
                            : 'text-muted-foreground')
                    }`}
                >
                  {item.name}
                </button>
              ))}
              {/* CTA removed */}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}