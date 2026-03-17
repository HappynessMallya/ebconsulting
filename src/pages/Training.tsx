import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, MapPin, Clock, CheckCircle2 } from 'lucide-react';
import SEO from '../components/SEO';
import RevealSection from '../components/RevealSection';

const previousTrainings = [
  {
    title: 'Effective Governance for Audit Committee Chairs',
    subtitle: 'Mastering Leadership & Driving Performance',
    date: '9th & 10th October 2025',
    location: 'Zanzibar, Tanzania',
    image: '/images/eBConsulting-flyer-20250701-scaled.webp',
    description:
      'Moving from what needs to be done (the role of the audit committees) to how to get the job done — effectiveness and performance improvement.',
    whatToExpect: [
      'Best practices in audit committee governance',
      'Roles and responsibilities of the Audit Committee Chair',
      'Strategies for effective audit committee leadership',
      'Effective communication with the Board and External Auditors',
      'Oversight of risk management and internal control systems',
    ],
    whoShouldAttend: ['Chairs of Audit Committee', 'Members of Audit Committee'],
  },
];

export default function Training() {
  return (
    <div className="pt-[72px]">
      <SEO
        title="Training Programmes — Evolve Board Consulting"
        description="Explore Evolve Board Consulting's board training programmes. Specialized governance training for audit committee chairs, board directors, and executives."
        keywords="board training Tanzania, audit committee training, governance training East Africa, board director development"
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
            <h1 className="text-display-lg lg:text-display-xl font-bold text-white leading-tight mb-6 max-w-3xl">
              Governance training for boards that lead with excellence.
            </h1>
            <p className="text-base lg:text-lg text-white/55 max-w-2xl leading-relaxed">
              Our training programmes are designed to build governance literacy, elevate
              board performance, and equip directors with the skills to lead effectively
              in complex, fast-changing environments.
            </p>
          </RevealSection>
        </div>
      </section>

      {/* ─── PREVIOUS TRAINING ───────────────────────────────────────────── */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection className="mb-16">
            <span className="eyebrow mb-4 block">Completed Programmes</span>
            <h2 className="text-display-sm lg:text-display-md font-bold text-ink leading-tight">
              Previous training highlights
            </h2>
          </RevealSection>

          <div className="space-y-12">
            {previousTrainings.map((training, index) => (
              <RevealSection key={index} delay={index * 80}>
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 border border-gray-100 rounded-xl overflow-hidden hover:border-primary/20 hover:shadow-lg transition-all duration-300">
                  {/* Image */}
                  <div className="lg:col-span-2">
                    <div className="aspect-[16/10] lg:aspect-auto lg:h-full min-h-[240px] bg-surface-muted overflow-hidden">
                      <img
                        src={training.image}
                        alt={training.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-3 p-8 lg:p-10">
                    <div className="flex flex-wrap gap-3 mb-5">
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-ink-muted bg-surface-soft border border-gray-200 rounded-full px-3 py-1">
                        <Calendar className="w-3 h-3" />
                        {training.date}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-ink-muted bg-surface-soft border border-gray-200 rounded-full px-3 py-1">
                        <MapPin className="w-3 h-3" />
                        {training.location}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-secondary bg-secondary/10 rounded-full px-3 py-1">
                        Completed
                      </span>
                    </div>

                    <h3 className="text-xl lg:text-2xl font-bold text-ink mb-1.5 leading-tight">
                      {training.title}
                    </h3>
                    <p className="text-sm font-semibold text-primary mb-4">{training.subtitle}</p>
                    <p className="text-sm text-ink-muted leading-relaxed mb-6">
                      {training.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-ink mb-3">
                          What You'll Learn
                        </h4>
                        <ul className="space-y-2">
                          {training.whatToExpect.map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-secondary mt-0.5 flex-shrink-0" />
                              <span className="text-xs text-ink-muted">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-ink mb-3">
                          Who Should Attend
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {training.whoShouldAttend.map((who, i) => (
                            <span
                              key={i}
                              className="text-xs font-medium text-primary bg-primary-50 border border-primary/15 rounded-full px-3 py-1"
                            >
                              {who}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── UPCOMING TRAINING ───────────────────────────────────────────── */}
      <section className="bg-surface-soft py-24 lg:py-28 border-y border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <RevealSection>
            <span className="eyebrow mb-4 block">Upcoming Programmes</span>
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Clock className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-display-sm lg:text-display-md font-bold text-ink mb-5 leading-tight">
              New programmes coming soon
            </h2>
            <p className="text-base text-ink-muted leading-relaxed max-w-xl mx-auto mb-8">
              We are currently developing new training programmes to expand our governance
              education offering. Register your interest below to be notified when new sessions
              are announced.
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
