import { Link } from 'react-router-dom';
import { ArrowRight, Award, Briefcase, GraduationCap, Globe, CheckCircle2 } from 'lucide-react';
import SEO from '../components/SEO';
import RevealSection from '../components/RevealSection';

const credentials = [
  { label: 'FCPA', detail: 'Fellow Certified Public Accountant' },
  { label: 'BCom', detail: 'Bachelor of Commerce — Accounting' },
  { label: 'PhD', detail: 'Doctor of Philosophy — Intercultural Studies' },
];

const memberships = [
  {
    icon: Award,
    title: 'Chartered Governance Institute',
    detail: 'UK & Ireland — Member',
  },
  {
    icon: Briefcase,
    title: 'Institute of Directors Tanzania',
    detail: 'IoDT — Member',
  },
  {
    icon: Globe,
    title: 'National Board of Accountants and Auditors(NBAA)',
    detail: 'Board Member',
  },
];

const experienceAreas = [
  'Corporate Governance & Board Leadership',
  'Accounting & External Auditing',
  'Risk Management Frameworks',
  'HR Management & Organizational Development',
  'Strategic Planning & Business Leadership',
  'Financial Management & Advisory',
  'Compliance & Regulatory Affairs',
  'Intercultural Organizational Studies',
];

const careerHighlights = [
  {
    role: 'Lead Consultant & Founder',
    org: 'Evolve Board Consulting',
    detail: 'Leading governance and strategy advisory firm serving East Africa.',
    current: true,
  },
  {
    role: 'Chairman',
    org: 'Old Mutual General Insurance Kenya',
    detail: 'Non-executive board chairmanship at one of Kenya\'s leading insurers.',
    current: true,
  },
  {
    role: 'Former Partner — Assurance & Advisory',
    org: 'PricewaterhouseCoopers (PwC) Tanzania',
    detail: 'Led Assurance & Advisory practice for PwC in Tanzania.',
    current: false,
  },
  {
    role: 'Governance Board Member',
    org: 'PwC Africa',
    detail: 'Served on PwC Africa\'s governance board, contributing to regional leadership.',
    current: false,
  },
];

export default function Consultants() {
  return (
    <div className="pt-[72px]">
      <SEO
        title="Leadership — Dr. Mike Sallu | Evolve Board Consulting"
        description="Meet Dr. Mike Sallu — Lead Consultant at Evolve Board Consulting. Over 35 years of governance, strategy, and board leadership experience across East Africa."
        keywords="Dr Mike Sallu, governance consultant Tanzania, board leadership expert, PwC Tanzania, Old Mutual Kenya"
      />

      {/* ─── PAGE HERO ───────────────────────────────────────────────────── */}
      <section className="relative bg-navy py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-dot-grid" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection>
            <div className="flex items-center gap-3 mb-6">
              <span className="block w-8 h-px bg-secondary flex-shrink-0" />
              <span className="eyebrow">Our Leadership</span>
            </div>
            <h1 className="text-display-lg lg:text-display-xl font-bold text-white leading-tight mb-6 max-w-3xl">
              Leadership rooted in decades of governance expertise.
            </h1>
            <p className="text-base lg:text-lg text-white/55 max-w-2xl leading-relaxed">
              Evolve Board Consulting is led by one of East Africa's most respected governance
              and board advisory professionals — Dr. Mike Sallu.
            </p>
          </RevealSection>
        </div>
      </section>

      {/* ─── DR. SALLU PROFILE ───────────────────────────────────────────── */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-20 items-start">

            {/* Left — Photo & Credentials */}
            <div className="lg:col-span-2">
              <RevealSection>
                <div className="sticky top-24">
                  {/* Photo */}
                  <div className="aspect-[3/4] rounded-xl overflow-hidden bg-surface-muted mb-6">
                    <img
                      src="/images/Mike-2.png"
                      alt="Dr. Mike Sallu — Lead Consultant, Evolve Board Consulting"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>

               
                  {/* Contact CTA */}
                  <Link
                    to="/contact"
                    className="flex items-center justify-center gap-2 w-full px-5 py-3 bg-primary text-white text-sm font-semibold rounded hover:bg-primary-dark transition-colors"
                  >
                    Engage Dr. Sallu
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </RevealSection>
            </div>

            {/* Right — Bio & Details */}
            <div className="lg:col-span-3 space-y-12">
              {/* Name & Title */}
              <RevealSection delay={80}>
                <h2 className="text-display-md lg:text-display-lg font-bold text-ink mb-2 leading-tight">
                  Dr. Mike Sallu
                </h2>
                <p className="text-base text-secondary font-semibold mb-5">Lead Consultant &amp; Founder</p>
                <span className="section-rule block mb-7" />
                <p className="text-base text-ink-muted leading-relaxed mb-4">
                  Dr. Mike Sallu is a seasoned consultant and business leader with over{' '}
                  <strong className="text-ink font-semibold">35 years of experience</strong> across
                  corporate governance, strategy, HR management, accounting, auditing, risk
                  management, and finance in East Africa and internationally.
                </p>
                <p className="text-base text-ink-muted leading-relaxed mb-4">
                  A former Partner at PwC and Leader of Assurance &amp; Advisory at PwC Tanzania,
                  Dr. Sallu brings the rigour of a Big Four professional background combined with
                  deep board-level experience. He currently serves as{' '}
                  <strong className="text-ink font-semibold">Chairman of Old Mutual General Insurance Kenya</strong>,
                  one of Kenya's leading insurance groups.
                </p>
                <p className="text-base text-ink-muted leading-relaxed">
                  Dr. Sallu is a Member of the Chartered Governance Institute (UK &amp; Ireland) and
                  the Institute of Directors Tanzania — demonstrating a career-long commitment to
                  professional governance excellence. His PhD in Intercultural Studies enriches his
                  approach to organizational transformation and cross-cultural board dynamics.
                </p>
              </RevealSection>

            
              {/* Memberships */}
              <RevealSection delay={200}>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-ink mb-6">Professional Memberships</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {memberships.map((mem, i) => (
                    <div
                      key={i}
                      className="bg-surface-soft border border-gray-100 rounded-xl p-5 text-center hover:border-primary/25 hover:shadow-md transition-all duration-200"
                    >
                      <div className="w-10 h-10 bg-primary/8 rounded-full flex items-center justify-center mx-auto mb-3">
                        <mem.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="text-xs font-semibold text-ink mb-1 leading-snug">{mem.title}</div>
                      <div className="text-[11px] text-ink-subtle">{mem.detail}</div>
                    </div>
                  ))}
                </div>
              </RevealSection>
            </div>
          </div>
        </div>
      </section>

      {/* ─── GOVERNANCE PHILOSOPHY ───────────────────────────────────────── */}
      <section className="bg-surface-soft py-24 lg:py-28 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection>
            <div className="max-w-3xl mx-auto text-center">
              <span className="eyebrow mb-4 block">Governance Philosophy</span>
              <blockquote className="text-xl lg:text-2xl font-medium text-ink leading-[1.55] mb-7 text-balance border-l-0">
                Dr. Sallu's governance approach is known for balancing compliance with value-driven leadership and cultural transformation to build highly effective and ethical boards."
              </blockquote>
              </div>
          </RevealSection>
        </div>
      </section>

      {/* ─── CTA ─────────────────────────────────────────────────────────── */}
      <section className="bg-white py-20 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <RevealSection>
            <h2 className="text-display-md font-bold text-ink mb-5 leading-tight">
              Work with Dr. Sallu and the Evolve team
            </h2>
            <p className="text-base text-ink-muted mb-8 max-w-xl mx-auto leading-relaxed">
              Whether you need a one-off governance audit, ongoing board advisory, or a full
              board development programme, we're ready to help.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-primary text-white text-sm font-semibold rounded hover:bg-primary-dark transition-colors"
              >
                Get in Touch
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-gray-200 text-ink text-sm font-semibold rounded hover:border-primary hover:text-primary transition-colors"
              >
                View Our Services
              </Link>
            </div>
          </RevealSection>
        </div>
      </section>
    </div>
  );
}
