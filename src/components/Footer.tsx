import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white text-charcoal border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center">
              <img
                src="/images/logo.webp"
                alt="Evolve Board Consulting Logo"
                className="h-6 w-auto"
              />
            </Link>
            <p className="text-neutral-grey text-sm leading-relaxed">
              Strategic Insight. Effective Oversight.
            </p>
            <div className="flex space-x-4 pt-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-grey hover:text-secondary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-grey hover:text-secondary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-grey hover:text-secondary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-charcoal">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-neutral-grey hover:text-primary transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-neutral-grey hover:text-primary transition-colors text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/training" className="text-neutral-grey hover:text-primary transition-colors text-sm">
                  Training Programs
                </Link>
              </li>
              <li>
                <Link to="/consultants" className="text-neutral-grey hover:text-primary transition-colors text-sm">
                  Our Consultants
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-neutral-grey hover:text-primary transition-colors text-sm">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-charcoal">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-neutral-grey hover:text-primary transition-colors text-sm">
                  Board Development
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-neutral-grey hover:text-primary transition-colors text-sm">
                  Governance Audits
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-neutral-grey hover:text-primary transition-colors text-sm">
                  Training Programs
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-neutral-grey hover:text-primary transition-colors text-sm">
                  Strategic Planning
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-charcoal">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-neutral-grey text-sm">
                  1st Floor, C&G Plaza,<br />
                  Mwai Kibaki Road, Mikocheni,<br />
                  Dar es Salaam, Tanzania
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <a href="tel:+255123456789" className="text-neutral-grey hover:text-primary transition-colors text-sm">
                  +255 123 456 789
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <a href="mailto:info@evolveboardconsulting.com" className="text-neutral-grey hover:text-primary transition-colors text-sm">
                  info@evolveboardconsulting.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-neutral-grey text-sm">
              © {new Date().getFullYear()} Evolve Board Consulting. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-neutral-grey hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-neutral-grey hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

