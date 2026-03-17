import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown, Shield, TrendingUp, Users, Award, BookOpen, CheckCircle2, Globe } from 'lucide-react';
import SEO from '../components/SEO';
import RevealSection from '../components/RevealSection';

const heroImages = [
  '/images/hero1.jpg',
  '/images/hero2.jpg',
  '/images/hero3.jpg',
];

const stats = [
  { value: '35+', label: 'Years of Experience', description: 'Decades of proven governance expertise' },
  { value: '50+', label: 'Organizations Served', description: 'Across East Africa and beyond' },
  { value: '100+', label: 'Training Programmes', description: 'Delivered to boards and executives' },
  { value: '500+', label: 'Board Members Trained', description: 'Across industries and sectors' },
];

const services = [
  {
    icon: Users,
    title: 'Board Development',
    description: 'Comprehensive planning and execution to build high-performing, accountable boards.',
  },
  {
    icon: BookOpen,
    title: 'Board Training',
    description: 'Specialized programmes elevating director capabilities and governance literacy.',
  },
  {
    icon: CheckCircle2,
    title: 'Performance Evaluations',
    description: 'Rigorous assessments to identify gaps and optimize board effectiveness.',
  },
  {
    icon: Shield,
    title: 'Governance Audits',
    description: 'Independent corporate governance audits aligned to international best practices.',
  },
  {
    icon: TrendingUp,
    title: 'Strategic Planning',
    description: 'Guiding boards and executives to align strategy with mission and long-term value.',
  },
  {
    icon: Globe,
    title: 'Diversity & Inclusion',
    description: 'Building boards that reflect diverse perspectives for better decision-making.',
  },
];

const pillars = [
  {
    number: '01',
    title: 'Deep Expertise',
    description:
      'Over 35 years of hands-on experience in governance, auditing, risk management, and board leadership across East Africa and internationally.',
  },
  {
    number: '02',
    title: 'Proven Impact',
    description:
      'A verifiable track record with 50+ organizations strengthened through tailored governance solutions, training, and board performance improvements.',
  },
  {
    number: '03',
    title: 'Ethical Foundation',
    description:
      'All engagements are grounded in integrity, professionalism, and a commitment to building institutions that serve society with transparency.',
  },
];

const partners: { type: 'image' | 'text'; src?: string; ext?: string; name: string }[] = [
  { type: 'image', src: '/images/partner1.png',  name: 'Client 1' },
  { type: 'image', src: '/images/partner2.webp', name: 'Client 2' },
  { type: 'image', src: '/images/partner3.png',  name: 'Client 3' },
  { type: 'image', src: '/images/partner4.png',  name: 'Client 4' },
  { type: 'image', src: '/images/partner5.png',  name: 'Client 5' },
  { type: 'image', src: '/images/partner6.png',  name: 'Client 6' },
  { type: 'image', src: '/images/partner7.jpeg', name: 'Client 7' },
  { type: 'image', src: '/images/partner8.jpeg',  name: 'Client 8' },
  { type: 'image', src: '/images/partner9.png',  name: 'Client 9' },
  { type: 'text',  name: '4C PROTRADE LIMITED' },
];

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [prevSlide, setPrevSlide] = useState<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrevSlide(activeSlide);
      setActiveSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [activeSlide]);

  return (
    <div className="pt-[72px]">
      <SEO
        title="Evolve Board Consulting — Governance & Strategy Advisory"
        description="Evolve Board Consulting is a leading governance and strategy advisory firm helping organizations across East Africa build highly effective, ethical boards."
        keywords="board consulting, corporate governance, board development, governance training, East Africa, Tanzania"
      />

      {/* ─── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[92vh] flex items-center bg-navy overflow-hidden">

        {/* Slideshow images — fading layers */}
        {heroImages.map((src, i) => (
          <div
            key={src}
            className="absolute inset-0 transition-opacity duration-1000"
            style={{ opacity: i === activeSlide ? 1 : 0 }}
          >
            <img
              src={src}
              alt=""
              aria-hidden="true"
              className="w-full h-full object-cover object-center"
            />
          </div>
        ))}

        {/* Dark overlay for text legibility */}
        <div className="absolute inset-0 bg-navy/70" />
        {/* Subtle blue tint overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/30 via-transparent to-navy/80" />
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-navy to-transparent" />

        {/* Content — centered */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">

            {/* Eyebrow */}
            <div className="flex items-center justify-center gap-3 mb-8 animate-fade-in">
              <span className="block w-8 h-px bg-secondary flex-shrink-0" />
              <span className="eyebrow">Governance &amp; Strategy Advisory</span>
              <span className="block w-8 h-px bg-secondary flex-shrink-0" />
            </div>

            {/* Headline */}
            <h1 className="text-[2.8rem] sm:text-6xl lg:text-7xl xl:text-[5.25rem] font-bold text-white leading-[1.06] tracking-[-0.025em] mb-7 animate-slide-up text-balance">
              Building Highly{' '}
              <span className="text-primary-light">Effective</span> and Ethical Boards.
            </h1>

            {/* Subtitle */}
            <p
              className="text-base sm:text-lg lg:text-xl text-white/60 max-w-2xl leading-relaxed mb-10 animate-slide-up"
              style={{ animationDelay: '0.1s' }}
            >
              We partner with listed companies, public institutions, and donor-funded organizations
              across East Africa to strengthen governance, accountability, and strategic leadership.
            </p>

            {/* CTAs */}
            <div
              className="flex flex-col xs:flex-row justify-center gap-4 animate-slide-up"
              style={{ animationDelay: '0.2s' }}
            >
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-secondary text-white text-sm font-semibold rounded hover:bg-secondary-dark transition-colors duration-200 shadow-lg shadow-secondary/30"
              >
                Explore Our Services
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-white/25 text-white text-sm font-semibold rounded hover:border-white/50 hover:bg-white/8 transition-all duration-200"
              >
                About Our Firm
              </Link>
            </div>
          </div>
        </div>

        {/* Slide dots */}
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
          {heroImages.map((_, i) => (
            <button
              key={i}
              onClick={() => { setPrevSlide(activeSlide); setActiveSlide(i); }}
              aria-label={`Go to slide ${i + 1}`}
              className={`transition-all duration-300 rounded-full ${
                i === activeSlide
                  ? 'w-6 h-1.5 bg-secondary'
                  : 'w-1.5 h-1.5 bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 animate-pulse-slow">
          <ChevronDown className="w-4 h-4 text-white/30" />
        </div>
      </section>

      {/* ─── STATISTICS BAR ───────────────────────────────────────────────── */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-gray-100">
            {stats.map((stat, i) => (
              <RevealSection key={i} delay={i * 80} className="px-6 lg:px-10 py-10">
                <div className="text-[2.4rem] lg:text-[2.8rem] font-bold text-primary leading-none mb-1.5 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-ink mb-1">{stat.label}</div>
                <div className="text-xs text-ink-muted hidden sm:block">{stat.description}</div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ABOUT PREVIEW ───────────────────────────────────────────────── */}
      <section className="bg-surface-soft py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left — Content */}
            <RevealSection>
              <span className="eyebrow mb-4 block">Who We Are</span>
              <h2 className="text-display-md lg:text-display-lg font-bold text-ink mb-6 leading-tight">
                A firm built on governance excellence
              </h2>
              <p className="text-base text-ink-muted leading-relaxed mb-5">
                Evolve Board Consulting is a professional advisory firm comprising highly qualified
                specialists in corporate governance, strategy, and board leadership. We serve listed
                companies, private enterprises, government entities, and donor-funded organizations
                across East Africa.
              </p>
              <p className="text-base text-ink-muted leading-relaxed mb-8">
                Our work is grounded in three core principles — <strong className="text-ink font-semibold">Integrity</strong>,{' '}
                <strong className="text-ink font-semibold">Innovation</strong>, and{' '}
                <strong className="text-ink font-semibold">Professionalism</strong> — ensuring every
                engagement delivers lasting, measurable impact.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-primary text-sm font-semibold hover:text-primary-dark transition-colors group"
              >
                Learn about our firm
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </RevealSection>

            {/* Right — Visual accent blocks */}
            <RevealSection delay={150}>
              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-primary rounded-lg p-8 flex flex-col justify-end min-h-[220px]">
                    <div className="text-4xl font-bold text-white mb-1">35+</div>
                    <div className="text-primary-100 text-sm font-medium">Years combined experience in governance</div>
                  </div>
                  <div className="bg-white rounded-lg p-8 border border-gray-100 flex flex-col justify-end min-h-[220px] shadow-sm">
                    <div className="text-4xl font-bold text-ink mb-1">50+</div>
                    <div className="text-ink-muted text-sm font-medium">Organizations served across East Africa</div>
                  </div>
                  <div className="bg-white rounded-lg p-8 border border-gray-100 flex flex-col justify-end min-h-[160px] shadow-sm">
                    <div className="text-4xl font-bold text-ink mb-1">100+</div>
                    <div className="text-ink-muted text-sm font-medium">Board training programmes delivered</div>
                  </div>
                  <div className="bg-secondary rounded-lg p-8 flex flex-col justify-end min-h-[160px]">
                    <div className="text-4xl font-bold text-white mb-1">15+</div>
                    <div className="text-white/80 text-sm font-medium">Specialized governance services</div>
                  </div>
                </div>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* ─── SERVICES PREVIEW ────────────────────────────────────────────── */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection className="mb-16 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <div>
              <span className="eyebrow mb-4 block">What We Offer</span>
              <h2 className="text-display-md lg:text-display-lg font-bold text-ink leading-tight">
                Comprehensive governance<br className="hidden lg:block" /> solutions
              </h2>
            </div>
            <Link
              to="/services"
              className="flex-shrink-0 inline-flex items-center gap-2 text-primary text-sm font-semibold hover:text-primary-dark transition-colors group"
            >
              View all 15 services
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </RevealSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-100 border border-gray-100 rounded-xl overflow-hidden">
            {services.map((service, i) => (
              <RevealSection key={i} delay={i * 60}>
                <div className="bg-white p-8 h-full group hover:bg-primary-50 transition-colors duration-300 cursor-default">
                  <div className="w-10 h-10 rounded-lg bg-primary/8 flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors">
                    <service.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-base font-semibold text-ink mb-2.5">{service.title}</h3>
                  <p className="text-sm text-ink-muted leading-relaxed">{service.description}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE US ───────────────────────────────────────────────── */}
      <section className="bg-navy py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-grid opacity-60" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection className="mb-16">
            <span className="eyebrow mb-4 block text-secondary">Why Choose Us</span>
            <h2 className="text-display-md lg:text-display-lg font-bold text-white leading-tight max-w-2xl">
              What sets Evolve Board Consulting apart
            </h2>
          </RevealSection>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">
            {pillars.map((pillar, i) => (
              <RevealSection key={i} delay={i * 100}>
                <div className="border-t border-white/10 pt-8">
                  <div className="text-5xl font-bold text-white/10 mb-5 leading-none tracking-tight">
                    {pillar.number}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">{pillar.title}</h3>
                  <p className="text-sm text-white/50 leading-relaxed">{pillar.description}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── LEADERSHIP SPOTLIGHT ────────────────────────────────────────── */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Photo */}
            <RevealSection className="order-2 lg:order-1">
              <div className="relative">
                <div className="aspect-[4/5] rounded-xl overflow-hidden bg-surface-muted max-w-[440px]">
                  <img
                    src="/images/Mike-2.png"
                    alt="Dr. Mike Sallu — Principal Consultant, Evolve Board Consulting"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                {/* Floating credential card */}
                <div className="absolute -bottom-4 -right-4 lg:right-4 bg-white border border-gray-100 shadow-xl rounded-lg p-5 max-w-[220px]">
                  <div className="flex items-center gap-2.5 mb-3">
                    <Award className="w-4 h-4 text-secondary flex-shrink-0" />
                    <span className="text-xs font-semibold text-ink">Credentials</span>
                  </div>
                  <div className="space-y-1.5">
                    {['FCPA', 'BCom Accounting', 'PhD — Intercultural Studies', 'Former Partner, PwC'].map((cred) => (
                      <div key={cred} className="text-[11px] text-ink-muted leading-snug">{cred}</div>
                    ))}
                  </div>
                </div>
              </div>
            </RevealSection>

            {/* Content */}
            <RevealSection delay={120} className="order-1 lg:order-2">
              <span className="eyebrow mb-4 block">Our Leadership</span>
              <h2 className="text-display-md lg:text-display-lg font-bold text-ink mb-2 leading-tight">
                Dr. Mike Sallu
              </h2>
              <p className="text-base text-secondary font-semibold mb-6">Principal Consultant &amp; Founder</p>
              <span className="section-rule mb-7 block" />

              <p className="text-base text-ink-muted leading-relaxed mb-5">
                Dr. Mike Sallu is a seasoned business leader and governance expert with over{' '}
                <strong className="text-ink font-semibold">35 years of experience</strong> spanning
                corporate governance, strategy, HR management, accounting, risk management, and
                finance across Africa and beyond.
              </p>
              <p className="text-base text-ink-muted leading-relaxed mb-8">
                He serves as <strong className="text-ink font-semibold">Chairman of Old Mutual General Insurance Kenya</strong>,
                is a former Partner at PwC, and was the Leader of Assurance &amp; Advisory at PwC Tanzania.
                A member of the Chartered Governance Institute (UK &amp; Ireland) and the Institute of
                Directors Tanzania, Dr. Sallu brings unmatched credibility to every engagement.
              </p>

              <Link
                to="/consultants"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white text-sm font-semibold rounded hover:bg-primary-dark transition-colors duration-200"
              >
                View Full Profile
                <ArrowRight className="w-4 h-4" />
              </Link>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* ─── CLIENTS / PARTNERS ──────────────────────────────────────────── */}
      <section className="bg-surface-soft py-20 lg:py-24 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection className="text-center mb-12">
            <span className="eyebrow mb-4 block">Our Clients</span>
            <h2 className="text-display-sm lg:text-display-md font-bold text-ink mb-4">
              Trusted by leading organizations
            </h2>
            <p className="text-base text-ink-muted max-w-xl mx-auto">
              We have the privilege of working with prominent institutions across East Africa —
              from listed companies and banks to government bodies and NGOs.
            </p>
          </RevealSection>

          {/* Carousel — overflows the section for edge-to-edge feel */}
          <div className="relative overflow-hidden -mx-4 sm:-mx-6 lg:-mx-8">
            {/* Left fade mask */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-surface-soft to-transparent z-10 pointer-events-none" />
            {/* Right fade mask */}
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-surface-soft to-transparent z-10 pointer-events-none" />

            <div className="marquee-track px-0">
              {/* Render the list twice for seamless infinite loop */}
              {[...partners, ...partners].map((partner, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 bg-white border border-gray-100 rounded-xl mx-3 flex items-center justify-center"
                  style={{ width: '180px', height: '100px' }}
                >
                  {partner.type === 'image' ? (
                    <img
                      src={partner.src}
                      alt={partner.name}
                      className="max-h-16 max-w-[140px] w-auto object-contain px-3"
                    />
                  ) : (
                    <span className="text-[12px] font-black tracking-widest text-primary uppercase text-center leading-tight px-4">
                      {partner.name}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIAL ─────────────────────────────────────────────────── */}
      <section className="bg-white py-24 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <RevealSection>
            <div className="w-12 h-12 bg-primary/8 rounded-full flex items-center justify-center mx-auto mb-8">
              <span className="text-primary text-2xl font-serif leading-none">"</span>
            </div>
            <blockquote className="text-xl lg:text-2xl font-medium text-ink leading-[1.55] mb-8 text-balance">
              Evolve Board Consulting transformed how our board approaches governance. Their deep expertise,
              structured methodology, and commitment to excellence delivered measurable improvements in
              our board's effectiveness and accountability.
            </blockquote>
            <div className="inline-flex flex-col items-center gap-1">
              <span className="text-sm font-semibold text-ink">Board Chairperson</span>
              <span className="text-xs text-ink-subtle">Leading Financial Institution, East Africa</span>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ─── CTA BANNER ──────────────────────────────────────────────────── */}
      <section className="bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-grid opacity-50" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <RevealSection>
              <h2 className="text-display-sm lg:text-display-md font-bold text-white leading-tight mb-4">
                Ready to strengthen your board's governance?
              </h2>
              <p className="text-white/60 text-base leading-relaxed">
                Speak with our team today to explore how Evolve Board Consulting can support your organization's governance journey.
              </p>
            </RevealSection>
            <RevealSection delay={100} className="flex lg:justify-end">
              <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-primary text-sm font-semibold rounded hover:bg-white/90 transition-colors duration-200"
                >
                  Contact Us Today
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-white/25 text-white text-sm font-semibold rounded hover:border-white/50 hover:bg-white/5 transition-all duration-200"
                >
                  View Our Services
                </Link>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>
    </div>
  );
}
