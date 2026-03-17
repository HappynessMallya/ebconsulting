import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { path: '/about', label: 'About' },
  { path: '/services', label: 'Services' },
  { path: '/consultants', label: 'Leadership' },
  { path: '/training', label: 'Training' },
  { path: '/careers', label: 'Careers' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-[0_1px_24px_rgba(0,0,0,0.08)]'
          : 'bg-white border-b border-gray-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">

          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center group" aria-label="Evolve Board Consulting home">
            <img
              src="/images/logo.webp"
              alt="Evolve Board Consulting"
              className="h-5 w-auto transition-opacity duration-200 group-hover:opacity-85"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative text-[13.5px] font-medium pb-0.5 transition-colors duration-200 ${
                  isActive(link.path)
                    ? 'text-primary'
                    : 'text-ink-muted hover:text-ink'
                }`}
              >
                {link.label}
                {isActive(link.path) && (
                  <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-secondary rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* Right: CTA + Mobile toggle */}
          <div className="flex items-center gap-4">
            <Link
              to="/contact"
              className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white text-[13.5px] font-semibold rounded hover:bg-primary-dark transition-colors duration-200"
            >
              Get in Touch
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden flex items-center justify-center w-9 h-9 text-ink-muted hover:text-ink transition-colors"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div
        className={`lg:hidden bg-white border-t border-gray-100 overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 py-5 space-y-1" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                isActive(link.path)
                  ? 'text-primary bg-primary-50'
                  : 'text-ink-muted hover:text-ink hover:bg-surface-soft'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-3">
            <Link
              to="/contact"
              className="flex items-center justify-center w-full px-4 py-3 bg-primary text-white text-sm font-semibold rounded hover:bg-primary-dark transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
