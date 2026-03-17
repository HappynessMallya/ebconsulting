import { Link } from 'react-router-dom';
import { ArrowRight, Clock } from 'lucide-react';
import SEO from '../components/SEO';
import RevealSection from '../components/RevealSection';

export default function Training() {
  return (
    <div className="pt-[72px]">
      <SEO
        title="Training Programmes — Evolve Board Consulting"
        description="Evolve Board Consulting's board training programmes. Specialized governance training for audit committee chairs, board directors, and executives."
        keywords="board training Tanzania, governance training East Africa, board director development"
      />

      {/* ─── PAGE HERO ───────────────────────────────────────────────────── */}
      <section className="relative bg-navy py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-dot-grid" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection>
            <div className="flex items-center gap-3 mb-6">
              <span className="block w-8 h-px bg-secondary flex-shrink-0" />
              <span className="eyebrow">Training Programmes</span>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ─── NO PROGRAMMES YET ───────────────────────────────────────────── */}
      <section className="bg-white py-32 lg:py-40">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <RevealSection>
            <div className="w-20 h-20 bg-primary/8 rounded-full flex items-center justify-center mx-auto mb-8">
              <Clock className="w-9 h-9 text-primary" />
            </div>
            <span className="eyebrow mb-4 block">Upcoming Programmes</span>
            <h2 className="text-display-sm lg:text-display-md font-bold text-ink mb-5 leading-tight">
              No training programmes yet
            </h2>
            <p className="text-base text-ink-muted leading-relaxed max-w-md mx-auto mb-10">
              We are currently developing new training programmes. Register your interest
              and we will notify you as soon as new sessions are announced.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-white text-sm font-semibold rounded hover:bg-primary-dark transition-colors"
            >
              Register Your Interest
              <ArrowRight className="w-4 h-4" />
            </Link>
          </RevealSection>
        </div>
      </section>

      {/* ─── CTA ─────────────────────────────────────────────────────────── */}
      <section className="bg-navy relative overflow-hidden py-20 lg:py-24">
        <div className="absolute inset-0 bg-dot-grid opacity-50" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <RevealSection>
            <h2 className="text-display-sm lg:text-display-md font-bold text-white mb-5">
              Bring our training to your organization
            </h2>
            <p className="text-base text-white/50 leading-relaxed mb-8">
              We offer customized in-house training tailored specifically to your board's
              needs, schedule, and governance priorities.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-primary text-sm font-semibold rounded hover:bg-white/90 transition-colors"
            >
              Enquire About Custom Training
              <ArrowRight className="w-4 h-4" />
            </Link>
          </RevealSection>
        </div>
      </section>
    </div>
  );
}
