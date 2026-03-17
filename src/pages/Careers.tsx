import { Mail, Send, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';
import SEO from '../components/SEO';
import RevealSection from '../components/RevealSection';

export default function Careers() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setEmail('');
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="pt-[72px]">
      <SEO
        title="Careers — Evolve Board Consulting"
        description="Join Evolve Board Consulting — a team of governance professionals transforming board leadership across East Africa."
        keywords="governance careers Tanzania, board consulting jobs, Evolve Board Consulting careers"
      />

      {/* ─── PAGE HERO ───────────────────────────────────────────────────── */}
      <section className="relative bg-navy py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-dot-grid" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection>
            <div className="flex items-center gap-3 mb-6">
              <span className="block w-8 h-px bg-secondary flex-shrink-0" />
              <span className="eyebrow">Careers</span>
            </div>
            <h1 className="text-display-lg lg:text-display-xl font-bold text-white leading-tight mb-6 max-w-3xl">
              Build your career in governance advisory.
            </h1>
            <p className="text-base lg:text-lg text-white/55 max-w-xl leading-relaxed">
              We're building an exceptional team of governance professionals committed to
              transforming board leadership across East Africa.
            </p>
          </RevealSection>
        </div>
      </section>

      {/* ─── COMING SOON ─────────────────────────────────────────────────── */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection>
            <div className="text-center mb-10">
              <div className="w-16 h-16 bg-primary/8 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <span className="eyebrow mb-4 block">Open Positions</span>
              <h2 className="text-display-sm font-bold text-ink mb-5 leading-tight">
                Opportunities coming soon
              </h2>
              <p className="text-base text-ink-muted leading-relaxed">
                We don't currently have any open positions listed, but we're always interested in
                hearing from talented governance professionals. Register below to be notified when
                new opportunities are available.
              </p>
            </div>

            <div className="bg-surface-soft border border-gray-100 rounded-xl p-8">
              {submitted ? (
                <div className="text-center py-4">
                  <CheckCircle2 className="w-10 h-10 text-green-500 mx-auto mb-3" />
                  <p className="text-sm font-semibold text-ink mb-1">You're on the list</p>
                  <p className="text-xs text-ink-muted">We'll notify you when new roles are available.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <label htmlFor="career-email" className="block text-xs font-semibold uppercase tracking-wider text-ink-muted mb-2">
                    Email Address
                  </label>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      id="career-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      required
                      className="flex-1 px-4 py-3 bg-white border border-gray-200 rounded text-sm text-ink placeholder-ink-subtle focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-colors"
                    />
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white text-sm font-semibold rounded hover:bg-primary-dark transition-colors flex-shrink-0"
                    >
                      Notify Me
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              )}
            </div>

            <div className="mt-8 pt-8 border-t border-gray-100 text-center">
              <p className="text-sm text-ink-muted">
                For immediate enquiries, email us at{' '}
                <a
                  href="mailto:boards@ebconsulting.co.tz"
                  className="text-primary font-semibold hover:text-primary-dark transition-colors"
                >
                  boards@ebconsulting.co.tz
                </a>
              </p>
            </div>
          </RevealSection>
        </div>
      </section>
    </div>
  );
}
