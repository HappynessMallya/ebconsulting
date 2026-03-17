import { Link } from 'react-router-dom';
import {
  ArrowRight, ChevronRight,
  ClipboardCheck, ArrowUpDown, UserPlus, BarChart3, Shield, BookOpen, Search,
  GraduationCap, Compass, Users2, Users,
  TrendingUp, AlertTriangle, FileCheck,
} from 'lucide-react';
import SEO from '../components/SEO';
import RevealSection from '../components/RevealSection';

const categories = [
  {
    id: 'advisory',
    eyebrow: '01',
    label: 'Corporate Governance & Board Advisory',
    headline: 'Strengthening boards through expert governance advisory',
    description:
      'We provide tailored solutions to help boards function effectively and align with international best practices — from board evaluations, board training to recruitment and succession planning.',
    services: [
      {
        icon: ClipboardCheck,
        title: 'Board Performance Evaluations',
        description:
          'Rigorous, evidence-based assessments of board and individual director effectiveness, with clear, actionable improvement recommendations.',
      },
      {
        icon: ArrowUpDown,
        title: 'Board Succession Planning',
        description:
          'Forward-looking succession frameworks that ensure leadership continuity and smooth transitions at the board level.',
      },
      {
        icon: UserPlus,
        title: 'Director Recruitment & Selection',
        description:
          'Expert-led identification and assessment of qualified director candidates aligned to board skills matrices and strategic requirements.',
      },
      {
        icon: BarChart3,
        title: 'Board Remuneration Surveys',
        description:
          'Independent benchmarking of director and executive remuneration against sector peers and international governance standards.',
      },
      {
        icon: Shield,
        title: 'Corporate Governance Audits',
        description:
          'Comprehensive, independent audits of governance practices benchmarked against international codes and regulatory best practices.',
      },
      {
        icon: BookOpen,
        title: 'Best Practice Governance Guidance',
        description:
          'Ongoing advisory support to help boards embed international governance best practices into their structures and culture.',
      },
      {
        icon: Search,
        title: 'Corporate Governance Research',
        description:
          'Bespoke research delivering cutting-edge governance insights, benchmarking reports, and tailored best practice guidance.',
      },
    ],
  },
  {
    id: 'training',
    eyebrow: '02',
    label: 'Board Training & Development',
    headline: 'Building capable, confident, high-performing boards',
    description:
      'We design and deliver programmes that enhance the knowledge, skills, and performance of boards and directors — from structured training to immersive retreats.',
    services: [
      {
        icon: GraduationCap,
        title: 'Board Training Programmes',
        description:
          'Tailored, high-impact training designed to deepen directors\' governance knowledge, leadership competencies, and regulatory understanding.',
      },
      {
        icon: Compass,
        title: 'Board Retreats',
        description:
          'Facilitated governance retreats that align the board on strategy, refresh governance frameworks, and strengthen board culture and cohesion.',
      },
      {
        icon: Users2,
        title: 'Diversity & Inclusion Consulting',
        description:
          'Strategic advisory on achieving diverse, inclusive boards that bring varied perspectives and improve overall decision-making quality.',
      },
      {
        icon: Users,
        title: 'Executive Coaching & Leadership Development',
        description:
          'One-on-one and cohort coaching for board chairs, directors, and executives — developing governance acumen and strategic leadership.',
      },
    ],
  },
  {
    id: 'strategy',
    eyebrow: '03',
    label: 'Strategy, Risk & Compliance Advisory',
    headline: 'Aligning strategy, resilience, and regulatory compliance',
    description:
      'We partner with organizations to strengthen strategy, build institutional resilience, and ensure ongoing alignment with regulatory and governance frameworks.',
    services: [
      {
        icon: TrendingUp,
        title: 'Strategic Planning',
        description:
          'Board-level facilitation of organizational strategy — translating vision into actionable plans with clear governance and accountability structures.',
      },
      {
        icon: FileCheck,
        title: 'Regulatory & Compliance Advisory',
        description:
          'Expert guidance on regulatory compliance, corporate law obligations, and governance codes relevant to listed, private, and public sector entities.',
      },
      {
        icon: AlertTriangle,
        title: 'Crisis Management & Risk Oversight',
        description:
          'Board-level crisis governance frameworks and risk oversight structures that strengthen organizational resilience and response capability.',
      },
    ],
  },
];

const approach = [
  {
    step: '01',
    title: 'Assessment',
    description:
      'We begin by reviewing your existing governance frameworks, board effectiveness, and structural gaps — giving us a clear picture of where you are.',
  },
  {
    step: '02',
    title: 'Strategy',
    description:
      'We design governance solutions tailored specifically to your organization\'s needs, context, regulatory environment, and strategic objectives.',
  },
  {
    step: '03',
    title: 'Implementation',
    description:
      'We guide boards and executives through change and improvement — bringing deep expertise, tools, and structured delivery to every engagement.',
  },
  {
    step: '04',
    title: 'Impact',
    description:
      'We measure governance performance and strengthen long-term sustainability — ensuring our work delivers lasting, measurable value.',
  },
];

export default function Services() {
  return (
    <div className="pt-[72px]">
      <SEO
        title="Our Services — Evolve Board Consulting"
        description="Explore Evolve Board Consulting's governance services: Board Advisory, Training & Development, and Strategy, Risk & Compliance Advisory."
        keywords="board development, governance audit, board training, strategic planning, board performance evaluation, Tanzania"
      />

      {/* ─── PAGE HERO ───────────────────────────────────────────────────── */}
      <section className="relative bg-navy py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-dot-grid" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection>
            <div className="flex items-center gap-3 mb-6">
              <span className="block w-8 h-px bg-secondary flex-shrink-0" />
              <span className="eyebrow">Our Services</span>
            </div>
            <h1 className="text-display-lg lg:text-display-xl font-bold text-white leading-tight mb-6 max-w-3xl">
              Governance solutions built for your organization.
            </h1>
            
            {/* Quick category nav */}
            <div className="flex flex-wrap gap-3">
              {categories.map((cat) => (
                <a
                  key={cat.id}
                  href={`#${cat.id}`}
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-white/8 border border-white/15 rounded text-sm text-white/70 hover:bg-white/12 hover:text-white transition-all duration-200"
                >
                  <ChevronRight className="w-3 h-3" />
                  {cat.label}
                </a>
              ))}
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ─── SERVICE CATEGORIES ──────────────────────────────────────────── */}
      {categories.map((category, catIdx) => (
        <section
          key={category.id}
          id={category.id}
          className={catIdx % 2 === 0 ? 'bg-white py-24 lg:py-32' : 'bg-surface-soft py-24 lg:py-32 border-y border-gray-100'}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Category header */}
            <RevealSection className="mb-16 pb-12 border-b border-gray-100">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-[11px] font-bold tracking-widest text-secondary/60 uppercase">{category.eyebrow}</span>
                    <span className="w-px h-4 bg-gray-200" />
                    <span className="eyebrow">{category.label}</span>
                  </div>
                  <h2 className="text-display-sm lg:text-display-md font-bold text-ink leading-tight">
                    {category.headline}
                  </h2>
                </div>
                <div className="lg:pt-2">
                  <p className="text-base text-ink-muted leading-relaxed">{category.description}</p>
                </div>
              </div>
            </RevealSection>

            {/* Services grid */}
            <div className={`grid grid-cols-1 md:grid-cols-2 ${category.services.length >= 6 ? 'lg:grid-cols-3' : 'lg:grid-cols-2 xl:grid-cols-4'} gap-5`}>
              {category.services.map((service, i) => (
                <RevealSection key={i} delay={i * 60}>
                  <div className="group border border-gray-100 rounded-xl p-7 h-full hover:border-primary/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-white">
                    <div className="w-10 h-10 rounded-lg bg-primary/8 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <service.icon className="w-5 h-5 text-primary group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-base font-semibold text-ink mb-3 leading-snug">{service.title}</h3>
                    <p className="text-sm text-ink-muted leading-relaxed">{service.description}</p>
                  </div>
                </RevealSection>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* ─── OUR APPROACH ────────────────────────────────────────────────── */}
      <section className="bg-navy py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-grid opacity-50" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection className="mb-16">
            <span className="eyebrow mb-4 block text-secondary">Our Approach</span>
            <h2 className="text-display-md font-bold text-white max-w-2xl leading-tight">
              We place boards and governance excellence at the center of our consulting model
            </h2>
          </RevealSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
            {approach.map((phase, i) => (
              <RevealSection key={phase.step} delay={i * 100}>
                <div className={`relative border-t-2 pt-8 pr-8 pb-8 ${i === 0 ? 'border-secondary' : 'border-white/15'}`}>
                  {/* Connector line */}
                  {i < approach.length - 1 && (
                    <div className="hidden lg:block absolute top-[-2px] right-0 w-[1px] h-4 bg-white/15" />
                  )}
                  <div className="text-5xl font-black text-white/8 mb-5 leading-none">{phase.step}</div>
                  <h3 className="text-base font-bold text-white mb-3">{phase.title}</h3>
                  <p className="text-sm text-white/45 leading-relaxed">{phase.description}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─────────────────────────────────────────────────────────── */}
      <section className="bg-white py-20 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <RevealSection>
            <span className="eyebrow mb-4 block">Get Started</span>
            <h2 className="text-display-md font-bold text-ink mb-5 leading-tight">
              Discuss your governance needs
            </h2>
            <p className="text-base text-ink-muted mb-8 max-w-xl mx-auto leading-relaxed">
              Every engagement begins with a conversation. Contact us to explore which services
              are most relevant to your organization's governance priorities.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white text-sm font-semibold rounded hover:bg-primary-dark transition-colors"
            >
              Request a Consultation
              <ArrowRight className="w-4 h-4" />
            </Link>
          </RevealSection>
        </div>
      </section>
    </div>
  );
}
