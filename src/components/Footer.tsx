import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';

const serviceLinks = [
  'Board Development Planning',
  'Board Training Programs',
  'Corporate Governance Audits',
  'Strategic Planning',
  'Board Performance Evaluations',
  'Diversity & Inclusion Consulting',
];

const quickLinks = [
  { path: '/about', label: 'About Us' },
  { path: '/services', label: 'Our Services' },
  { path: '/consultants', label: 'Leadership' },
  { path: '/training', label: 'Training' },
  { path: '/careers', label: 'Careers' },
  { path: '/contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

          {/* Column 1 — Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-5">
              <img
                src="/images/logo.webp"
                alt="Evolve Board Consulting"
                className="h-8 w-auto brightness-0 invert opacity-90"
              />
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-[240px]">
              Building highly effective and ethical boards through governance excellence and strategic leadership.
            </p>
            <div className="flex gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 flex items-center justify-center rounded border border-white/10 text-white/40 hover:text-white hover:border-white/30 transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter / X"
                className="w-8 h-8 flex items-center justify-center rounded border border-white/10 text-white/40 hover:text-white hover:border-white/30 transition-colors"
              >
                <Twitter className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Column 2 — Quick Links */}
          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-white/60 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Services */}
          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-5">
              Services
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-sm text-white/60 hover:text-white transition-colors duration-200"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Contact */}
          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-5">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-white/60 leading-relaxed">
                  1st Floor, C&G Plaza,<br />
                  Mwai Kibaki Road, Mikocheni,<br />
                  Dar es Salaam, Tanzania
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                <div className="space-y-1">
                  <a href="tel:+255754000091" className="block text-sm text-white/60 hover:text-white transition-colors">
                    +255 754 000 091
                  </a>
                  <a href="tel:+255673290000" className="block text-sm text-white/60 hover:text-white transition-colors">
                    +255 673 290 000
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                <div className="space-y-1">
                  <a href="mailto:mike.sallu@ebconsulting.co.tz" className="block text-sm text-white/60 hover:text-white transition-colors">
                    mike.sallu@ebconsulting.co.tz
                  </a>
                  <a href="mailto:boards@ebconsulting.co.tz" className="block text-sm text-white/60 hover:text-white transition-colors">
                    boards@ebconsulting.co.tz
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} Evolve Board Consulting. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="text-xs text-white/30 hover:text-white/60 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-xs text-white/30 hover:text-white/60 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
