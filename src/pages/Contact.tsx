import { useState } from 'react';
import { MapPin, Phone, Mail, Send, CheckCircle2, Clock } from 'lucide-react';
import SEO from '../components/SEO';
import RevealSection from '../components/RevealSection';

type FormData = {
  name: string;
  organization: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

const initialForm: FormData = {
  name: '',
  organization: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
};

const contactDetails = [
  {
    icon: MapPin,
    label: 'Office',
    lines: [
      '1st Floor, C&G Plaza',
      'Mwai Kibaki Road, Mikocheni',
      'Dar es Salaam, Tanzania',
    ],
  },
  {
    icon: Phone,
    label: 'Phone',
    lines: ['+255 754 000 091', '+255 673 290 000', '+255 745 719 942'],
    links: ['tel:+255754000091', 'tel:+255673290000', 'tel:+255745719942'],
  },
  {
    icon: Mail,
    label: 'Email',
    lines: ['mike.sallu@ebconsulting.co.tz', 'boards@ebconsulting.co.tz'],
    links: [
      'mailto:mike.sallu@ebconsulting.co.tz',
      'mailto:boards@ebconsulting.co.tz',
    ],
  },
  {
    icon: Clock,
    label: 'Office Hours',
    lines: ['Monday – Friday', '8:00 AM – 5:00 PM EAT'],
  },
];

const subjectOptions = [
  'Board Development Planning',
  'Board Training Programme',
  'Performance Evaluation',
  'Governance Audit',
  'Strategic Planning',
  'General Enquiry',
  'Other',
];

export default function Contact() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate submission (replace with actual API/email service integration)
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <div className="pt-[72px]">
      <SEO
        title="Contact Us — Evolve Board Consulting"
        description="Get in touch with Evolve Board Consulting. We're based in Dar es Salaam, Tanzania and serve organizations across East Africa."
        keywords="contact evolve board consulting, governance advisory Tanzania, board consulting enquiry"
      />

      {/* ─── PAGE HERO ───────────────────────────────────────────────────── */}
      <section className="relative bg-navy py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-dot-grid" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection>
            <div className="flex items-center gap-3 mb-6">
              <span className="block w-8 h-px bg-secondary flex-shrink-0" />
              <span className="eyebrow">Contact Us</span>
            </div>
            <h1 className="text-display-lg lg:text-display-xl font-bold text-white leading-tight mb-6 max-w-3xl">
              Let's start a conversation.
            </h1>
            <p className="text-base lg:text-lg text-white/55 max-w-xl leading-relaxed">
              Whether you're exploring governance options, planning a board training, or ready to
              engage our services — we'd love to hear from you.
            </p>
          </RevealSection>
        </div>
      </section>

      {/* ─── CONTACT MAIN ────────────────────────────────────────────────── */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-20">

            {/* Contact Info Panel */}
            <div className="lg:col-span-2">
              <RevealSection>
                <span className="eyebrow mb-4 block">Get in Touch</span>
                <h2 className="text-display-sm font-bold text-ink mb-6 leading-tight">
                  We're ready to help
                </h2>
                <p className="text-sm text-ink-muted leading-relaxed mb-10">
                  Our team is based in Dar es Salaam and works with organizations across
                  Tanzania, Kenya, Uganda, and beyond. Reach out to explore how we can support
                  your governance journey.
                </p>

                <div className="space-y-8">
                  {contactDetails.map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-9 h-9 bg-primary/8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                        <item.icon className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold uppercase tracking-wider text-ink-subtle mb-1.5">
                          {item.label}
                        </div>
                        {item.links
                          ? item.lines.map((line, j) => (
                              <a
                                key={j}
                                href={item.links![j]}
                                className="block text-sm text-ink-muted hover:text-primary transition-colors duration-200"
                              >
                                {line}
                              </a>
                            ))
                          : item.lines.map((line, j) => (
                              <div key={j} className="text-sm text-ink-muted">
                                {line}
                              </div>
                            ))}
                      </div>
                    </div>
                  ))}
                </div>
              </RevealSection>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <RevealSection delay={100}>
                {submitted ? (
                  <div className="flex flex-col items-center justify-center text-center py-20 px-8 bg-surface-soft rounded-xl border border-gray-100">
                    <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle2 className="w-8 h-8 text-green-500" />
                    </div>
                    <h3 className="text-xl font-bold text-ink mb-3">Message received</h3>
                    <p className="text-sm text-ink-muted max-w-sm leading-relaxed mb-6">
                      Thank you for reaching out to Evolve Board Consulting. A member of our team will respond to your enquiry within one business day.
                    </p>
                    <button
                      onClick={() => { setSubmitted(false); setForm(initialForm); }}
                      className="text-sm font-semibold text-primary hover:text-primary-dark transition-colors"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Full Name */}
                      <div>
                        <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-ink-muted mb-2">
                          Full Name <span className="text-secondary">*</span>
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={form.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          className="w-full px-4 py-3 bg-surface-soft border border-gray-200 rounded text-sm text-ink placeholder-ink-subtle focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-colors"
                        />
                      </div>

                      {/* Organization */}
                      <div>
                        <label htmlFor="organization" className="block text-xs font-semibold uppercase tracking-wider text-ink-muted mb-2">
                          Organization
                        </label>
                        <input
                          id="organization"
                          name="organization"
                          type="text"
                          value={form.organization}
                          onChange={handleChange}
                          placeholder="Company or Institution"
                          className="w-full px-4 py-3 bg-surface-soft border border-gray-200 rounded text-sm text-ink placeholder-ink-subtle focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-colors"
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-ink-muted mb-2">
                          Email Address <span className="text-secondary">*</span>
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          className="w-full px-4 py-3 bg-surface-soft border border-gray-200 rounded text-sm text-ink placeholder-ink-subtle focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-colors"
                        />
                      </div>

                      {/* Phone */}
                      <div>
                        <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-ink-muted mb-2">
                          Phone Number
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+255 700 000 000"
                          className="w-full px-4 py-3 bg-surface-soft border border-gray-200 rounded text-sm text-ink placeholder-ink-subtle focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-colors"
                        />
                      </div>
                    </div>

                    {/* Subject */}
                    <div>
                      <label htmlFor="subject" className="block text-xs font-semibold uppercase tracking-wider text-ink-muted mb-2">
                        Subject / Service Interest <span className="text-secondary">*</span>
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        value={form.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-surface-soft border border-gray-200 rounded text-sm text-ink focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-colors appearance-none"
                      >
                        <option value="" disabled>Select a subject…</option>
                        {subjectOptions.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-ink-muted mb-2">
                        Message <span className="text-secondary">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Tell us about your organization and how we can help…"
                        className="w-full px-4 py-3 bg-surface-soft border border-gray-200 rounded text-sm text-ink placeholder-ink-subtle focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={submitting}
                      className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-white text-sm font-semibold rounded hover:bg-primary-dark disabled:opacity-70 disabled:cursor-not-allowed transition-colors duration-200"
                    >
                      {submitting ? (
                        <>
                          <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending…
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </RevealSection>
            </div>
          </div>
        </div>
      </section>

      {/* ─── MAP ─────────────────────────────────────────────────────────── */}
      <section className="h-80 bg-surface-muted border-t border-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center bg-surface-muted">
          <div className="text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <p className="text-sm font-medium text-ink mb-1">C&G Plaza, Mikocheni</p>
            <p className="text-xs text-ink-muted">Dar es Salaam, Tanzania</p>
            <a
              href="https://maps.google.com/?q=Mikocheni+Dar+es+Salaam+Tanzania"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 text-xs font-semibold text-primary hover:text-primary-dark transition-colors"
            >
              Open in Google Maps →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
