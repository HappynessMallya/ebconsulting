import { useState } from 'react';
import { ChevronDown, ChevronUp, Award, Briefcase, BookOpen, Users } from 'lucide-react';
import ImageUploadPlaceholder from '../components/ImageUploadPlaceholder';

interface AccordionSectionProps {
  title: string;
  icon: React.ElementType;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

function AccordionSection({ title, icon: Icon, children, defaultOpen = false }: AccordionSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
        aria-expanded={isOpen}
      >
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-secondary/30 rounded-lg flex items-center justify-center">
            <Icon className="h-5 w-5 text-primary" />
          </div>
          <h3 className="text-lg font-semibold text-charcoal">{title}</h3>
        </div>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-neutral-grey" />
        ) : (
          <ChevronDown className="h-5 w-5 text-neutral-grey" />
        )}
      </button>
      {isOpen && (
        <div className="px-6 py-4 border-t border-gray-100 animate-fade-in">
          {children}
        </div>
      )}
    </div>
  );
}

export default function Consultants() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/10 via-white to-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl lg:text-5xl font-bold text-charcoal mb-6">
              Our Consultants
            </h1>
            <p className="text-xl text-neutral-grey leading-relaxed">
              Meet our team of experienced governance professionals
            </p>
          </div>
        </div>
      </section>

      {/* Dr. Sallu Profile */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
              {/* Photo */}
              <div className="lg:col-span-1">
                <div className="aspect-[3/4] bg-gray-100 rounded-xl overflow-hidden shadow-lg">
                  <img
                    src="/images/Mike-2.webp"
                    alt="Dr. Mike Sallu - Principal Consultant"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Bio & Details */}
              <div className="lg:col-span-2">
                <div className="animate-fade-in">
                  <h2 className="text-3xl lg:text-4xl font-bold text-charcoal mb-2">
                    Dr. Mike Sallu
                  </h2>
                  <p className="text-xl text-primary font-semibold mb-6">Principal Consultant</p>
                  <div className="prose prose-lg max-w-none mb-8">
                    <p className="text-neutral-grey leading-relaxed mb-4">
                      Dr. Mike Sallu is a distinguished governance expert with extensive experience
                      in corporate governance, board development, and strategic oversight. With a
                      deep understanding of governance best practices and regulatory requirements,
                      Dr. Sallu has helped numerous organizations across East Africa enhance their
                      governance frameworks and achieve excellence in board effectiveness.
                    </p>
                    <p className="text-neutral-grey leading-relaxed mb-4">
                      His expertise spans board development planning, performance evaluations,
                      director recruitment, and strategic planning. Dr. Sallu is known for his
                      practical approach to governance challenges and his ability to translate
                      complex governance concepts into actionable strategies.
                    </p>
                    <p className="text-neutral-grey leading-relaxed">
                      As Principal Consultant at Evolve Board Consulting, Dr. Sallu leads our team
                      in delivering world-class governance advisory services that drive sustainable
                      organizational success.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Accordion Sections */}
            <div className="mt-12 space-y-4">
              <AccordionSection
                title="Experience"
                icon={Briefcase}
                defaultOpen={true}
              >
                <div className="space-y-4 text-neutral-grey">
                  <div>
                    <h4 className="font-semibold text-charcoal mb-2">Principal Consultant</h4>
                    <p className="text-sm">Evolve Board Consulting | Current</p>
                    <p className="text-sm mt-1">
                      Leading governance advisory services and board development programs across
                      East Africa.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal mb-2">Governance Advisor</h4>
                    <p className="text-sm">Various Organizations | 10+ Years</p>
                    <p className="text-sm mt-1">
                      Provided strategic governance guidance to boards of leading financial
                      institutions, corporations, and non-profit organizations.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal mb-2">Board Member</h4>
                    <p className="text-sm">Multiple Organizations</p>
                    <p className="text-sm mt-1">
                      Served on boards of various organizations, bringing practical governance
                      experience and strategic insight.
                    </p>
                  </div>
                </div>
              </AccordionSection>

              <AccordionSection title="Sectors Served" icon={Users}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-charcoal mb-2">Financial Services</h4>
                    <p className="text-sm text-neutral-grey">
                      Banks, insurance companies, and financial institutions
                    </p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-charcoal mb-2">Manufacturing</h4>
                    <p className="text-sm text-neutral-grey">
                      Industrial and manufacturing organizations
                    </p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-charcoal mb-2">Healthcare</h4>
                    <p className="text-sm text-neutral-grey">
                      Hospitals, healthcare providers, and medical institutions
                    </p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-charcoal mb-2">Non-Profit</h4>
                    <p className="text-sm text-neutral-grey">
                      NGOs, foundations, and charitable organizations
                    </p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-charcoal mb-2">Technology</h4>
                    <p className="text-sm text-neutral-grey">
                      Tech companies and digital transformation organizations
                    </p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-charcoal mb-2">Energy & Utilities</h4>
                    <p className="text-sm text-neutral-grey">
                      Energy companies and utility providers
                    </p>
                  </div>
                </div>
              </AccordionSection>

              <AccordionSection title="Publications / Articles" icon={BookOpen}>
                <div className="space-y-4 text-neutral-grey">
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold text-charcoal mb-1">
                      "Effective Board Governance in East Africa"
                    </h4>
                    <p className="text-sm">Governance Journal | 2023</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold text-charcoal mb-1">
                      "Strategic Planning for Board Success"
                    </h4>
                    <p className="text-sm">Corporate Governance Review | 2022</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold text-charcoal mb-1">
                      "Risk Management and Board Oversight"
                    </h4>
                    <p className="text-sm">Governance Quarterly | 2021</p>
                  </div>
                </div>
              </AccordionSection>

              <AccordionSection title="Current Governance Engagements" icon={Award}>
                <div className="space-y-4 text-neutral-grey">
                  <div>
                    <h4 className="font-semibold text-charcoal mb-2">
                      Board Development Program
                    </h4>
                    <p className="text-sm">
                      Leading comprehensive board development initiative for a leading financial
                      institution, focusing on strategic oversight and risk management.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal mb-2">
                      Governance Audit & Review
                    </h4>
                    <p className="text-sm">
                      Conducting governance audit for a major manufacturing corporation to assess
                      compliance and identify improvement opportunities.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal mb-2">
                      Director Training Program
                    </h4>
                    <p className="text-sm">
                      Delivering specialized training programs for board members across multiple
                      organizations in the region.
                    </p>
                  </div>
                </div>
              </AccordionSection>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Consultants Placeholder */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold text-charcoal mb-6">
              Our Team
            </h2>
            <p className="text-lg text-neutral-grey mb-8">
              We are expanding our team of governance experts. Additional consultant profiles will
              be added soon.
            </p>
            <div className="bg-white rounded-xl p-8 shadow-md">
              <p className="text-neutral-grey">
                Interested in joining our team? Visit our{' '}
                <a href="/careers" className="text-primary hover:text-primary-dark font-semibold">
                  Careers page
                </a>{' '}
                to learn more.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

