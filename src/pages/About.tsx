import { Link } from 'react-router-dom';
import { ArrowRight, Target, Eye, Compass } from 'lucide-react';
import SEO from '../components/SEO';
import RevealSection from '../components/RevealSection';

const pvm = [
  {
    icon: Target,
    label: 'Our Purpose',
    text: 'To contribute to the improvement of boards\' effectiveness for the economic growth of East Africa.',
  },
  {
    icon: Eye,
    label: 'Our Vision',
    text: 'To become a key strategic advisor for boards in East Africa on matters of governance, people, and culture.',
  },
  {
    icon: Compass,
    label: 'Our Mission',
    text: 'To provide relevant, up-to-date, and practical board development programs, and to offer cutting-edge advice to boards on governance, people, and culture.',
  },
];

const values = [
  {
    number: '01',
    title: 'Commitment',
    description:
      'We honor our commitment to clients, to each other, and to the firm. We take ownership of our work and hold ourselves accountable for results.',
  },
  {
    number: '02',
    title: 'Teamwork',
    description:
      'We recognize that people drive success. We work together — as a firm and with our clients — to share knowledge, foster innovation, solve problems, and deliver quality results.',
  },
  {
    number: '03',
    title: 'Integrity',
    description:
      'We behave with the highest degree of professionalism, integrity, and courtesy in our actions with each other and our clients.',
  },
  {
    number: '04',
    title: 'Trust',
    description:
      'We are honest and maintain open communication with our clients and with each other within the firm.',
  },
];

const stats = [
  { value: '35+', label: 'Years of experience in governance, strategy, and board leadership' },
  { value: '50+', label: 'Organizations served across East Africa and beyond' },
  { value: '200+', label: 'Board members and executives trained' },
];


export default function About() {
  return (
    <div className="pt-[72px]">
      <SEO
        title="About Us — Evolve Board Consulting"
        description="Learn about Evolve Board Consulting — our purpose, vision, mission, and core values. A professional advisory firm building effective, ethical boards across East Africa."
        keywords="about evolve board consulting, governance advisory, corporate governance Tanzania, board leadership purpose vision mission"
      />

      {/* ─── PAGE HERO ───────────────────────────────────────────────────── */}
      <section className="relative bg-navy py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-dot-grid" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection>
            <div className="flex items-center gap-3 mb-6">
              <span className="block w-8 h-px bg-secondary flex-shrink-0" />
              <span className="eyebrow">About Our Firm</span>
            </div>
            <h1 className="text-display-lg lg:text-display-xl font-bold text-white leading-tight mb-6 max-w-3xl">
              A governance firm built on purpose, expertise, and trust.
            </h1>
            <p className="text-base lg:text-lg text-white/55 max-w-2xl leading-relaxed">
              Evolve is a professional consulting firm that offers specialized governance advisory services to listed and private companies, public sector entities,
              and donor-funded organizations. The firm comprises highly qualified, skilled, and
              experienced professionals, who are uniquely placed to provide relevant solutions
              to different organisations.
            </p>
          </RevealSection>
        </div>
      </section>

      {/* ─── WHO WE ARE ──────────────────────────────────────────────────── */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <RevealSection>
              <span className="eyebrow mb-4 block">Our Story</span>
              <h2 className="text-display-md font-bold text-ink leading-tight mb-6">
                Uniquely positioned to deliver governance impact
              </h2>
              <p className="text-base text-ink-muted leading-relaxed mb-5">
                Evolve Board Consulting was founded to address a critical gap in the East African
                governance landscape — the need for specialized, high-quality advisory services
                that combine global best practices with deep local context.
              </p>
              <p className="text-base text-ink-muted leading-relaxed mb-5">
                Our firm comprises highly qualified professionals who have led governance
                transformations at major institutions across Africa. We work with listed companies,
                Private Companies, public sector entities, and donor-funded organizations to
                build the governance infrastructure that enables sustainable, ethical success.
              </p>
              <p className="text-base text-ink-muted leading-relaxed">
                We are not generalists. Governance is what we do — exclusively and exceptionally.
              </p>
            </RevealSection>

            <RevealSection delay={150}>
              <div className="rounded-xl overflow-hidden aspect-[4/3] w-full">
                <img
                  src="/images/Training 3.jpg"
                  alt="Evolve Board Consulting — governance training in action"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* ─── PURPOSE / VISION / MISSION ──────────────────────────────────── */}
      <section className="bg-surface-soft py-24 lg:py-32 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection className="mb-16 text-center">
            <span className="eyebrow mb-4 block">What Drives Us</span>
            <h2 className="text-display-md font-bold text-ink leading-tight">
              Purpose, Vision &amp; Mission
            </h2>
          </RevealSection>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {pvm.map((item, i) => (
              <RevealSection key={i} delay={i * 100}>
                <div className="relative bg-white rounded-xl border border-gray-100 p-8 lg:p-10 h-full overflow-hidden group hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                  {/* Large number watermark */}
                  <span className="absolute top-4 right-6 text-[80px] font-black text-gray-50 leading-none select-none group-hover:text-primary/5 transition-colors">
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  <div className="w-11 h-11 bg-primary rounded-lg flex items-center justify-center mb-6">
                    <item.icon className="w-5 h-5 text-white" />
                  </div>

                  <h3 className="text-xs font-bold uppercase tracking-widest text-secondary mb-3">
                    {item.label}
                  </h3>
                  <p className="text-base text-ink leading-relaxed font-medium relative z-10">
                    {item.text}
                  </p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── IMPACT STATS ────────────────────────────────────────────────── */}
      <section className="bg-primary py-24 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-grid opacity-40" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection className="mb-16 text-center">
            <span className="eyebrow mb-4 block text-secondary">Our Impact</span>
            <h2 className="text-display-md font-bold text-white leading-tight">
              Measurable results, lasting impact
            </h2>
          </RevealSection>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12">
            {stats.map((stat, i) => (
              <RevealSection key={i} delay={i * 80}>
                <div className="border-t border-white/15 pt-6">
                  <div className="text-[3rem] lg:text-[3.5rem] font-bold text-white leading-none mb-3 tracking-tight">
                    {stat.value}
                  </div>
                  <p className="text-sm text-white/50 leading-relaxed">{stat.label}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CORE VALUES ─────────────────────────────────────────────────── */}
      <section className="bg-navy py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-grid opacity-50" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection className="mb-16">
            <span className="eyebrow mb-4 block text-secondary">Core Values</span>
            <h2 className="text-display-md font-bold text-white leading-tight max-w-2xl">
              The principles that guide everything we do
            </h2>
          </RevealSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, i) => (
              <RevealSection key={i} delay={i * 80}>
                <div className="border border-white/10 rounded-xl p-8 hover:border-secondary/40 hover:bg-white/3 transition-all duration-300 group">
                  <div className="flex items-start gap-5">
                    <span className="text-4xl font-black text-white/8 leading-none flex-shrink-0 group-hover:text-secondary/20 transition-colors">
                      {value.number}
                    </span>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-3">{value.title}</h3>
                      <p className="text-sm text-white/50 leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHO WE WORK WITH ────────────────────────────────────────────── */}
      <section className="bg-white py-24 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <RevealSection>
              <span className="eyebrow mb-4 block">Who We Work With</span>
              <h2 className="text-display-md font-bold text-ink leading-tight mb-6">
                Serving organizations across sectors
              </h2>
              <p className="text-base text-ink-muted leading-relaxed mb-8">
                Our clients span the full spectrum of organizational types — from publicly listed
                companies and financial institutions, parastatals,
                NGOs, and donor-funded organisations.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white text-sm font-semibold rounded hover:bg-primary-dark transition-colors group"
              >
                Start a Conversation
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </RevealSection>

            <RevealSection delay={120}>
              <div className="grid grid-cols-2 gap-3">
                {[
                  'Listed Companies', 'Private Companies',
                  'Financial Institutions',
                  'Parastatals',
                  'Donor-Funded Organisations', 'Healthcare Organisations',
                  'Educational Institutions', "Manufacturing and Other Sectors",
                ].map((sector) => (
                  <div
                    key={sector}
                    className="bg-surface-soft border border-gray-100 rounded-lg px-4 py-3 text-sm font-medium text-ink hover:border-primary/30 hover:text-primary transition-colors duration-200"
                  >
                    {sector}
                  </div>
                ))}
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* ─── CTA ─────────────────────────────────────────────────────────── */}
      <section className="bg-surface-soft border-t border-gray-100 py-20 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <RevealSection>
            <span className="eyebrow mb-4 block">Partner With Us</span>
            <h2 className="text-display-md font-bold text-ink mb-5 leading-tight">
              Ready to elevate your governance?
            </h2>
            <p className="text-base text-ink-muted mb-8 max-w-xl mx-auto leading-relaxed">
              Let's discuss how Evolve Board Consulting can help your organization build a board
              that drives accountability, transparency, and long-term value.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-primary text-white text-sm font-semibold rounded hover:bg-primary-dark transition-colors"
              >
                Contact Us
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-gray-200 text-ink text-sm font-semibold rounded hover:border-primary hover:text-primary transition-colors"
              >
                Explore Services
              </Link>
            </div>
          </RevealSection>
        </div>
      </section>
    </div>
  );
}
