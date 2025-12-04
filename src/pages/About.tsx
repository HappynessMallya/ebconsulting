import { Quote, Target, Eye, Award, TrendingUp, Users } from 'lucide-react';
import ImageUploadPlaceholder from '../components/ImageUploadPlaceholder';

export default function About() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/10 via-white to-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl lg:text-5xl font-bold text-charcoal mb-6">
              About Evolve Board Consulting
            </h1>
            <p className="text-xl text-neutral-grey leading-relaxed">
              Leading governance advisory firm specializing in board development, training, and
              strategic oversight.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
            <div className="animate-slide-in">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mr-4">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-charcoal">Our Mission</h2>
              </div>
              <p className="text-lg text-neutral-grey leading-relaxed mb-4">
                To empower organizations across East Africa with world-class governance practices
                that drive sustainable growth, ethical leadership, and stakeholder value creation.
              </p>
              <p className="text-lg text-neutral-grey leading-relaxed">
                We are committed to building stronger boards that make better decisions, manage risk
                effectively, and create lasting positive impact in their communities and industries.
              </p>
            </div>
            <div className="animate-slide-in" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mr-4">
                  <Eye className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-charcoal">Our Vision</h2>
              </div>
              <p className="text-lg text-neutral-grey leading-relaxed mb-4">
                To be the premier governance advisory firm in East Africa, recognized for our
                expertise, integrity, and transformative impact on organizational governance.
              </p>
              <p className="text-lg text-neutral-grey leading-relaxed">
                We envision a future where every organization in the region operates with
                excellence in governance, setting new standards for accountability, transparency,
                and strategic oversight.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote from Dr. Sallu */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <Quote className="h-12 w-12 text-primary mx-auto mb-6" />
            <blockquote className="text-2xl lg:text-3xl text-charcoal font-medium mb-6 italic text-center leading-relaxed">
              "Effective governance is not just about compliance—it's about creating frameworks
              that enable organizations to thrive, innovate, and serve their stakeholders with
              excellence. At Evolve Board Consulting, we believe that strong governance is the
              foundation of sustainable success."
            </blockquote>
            <p className="text-center text-neutral-grey text-lg font-semibold">
              — Dr. Mike Sallu, Principal Consultant
            </p>
          </div>
        </div>
      </section>

      {/* Photo Area */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="aspect-video bg-gray-100 rounded-xl overflow-hidden">
                <ImageUploadPlaceholder label="Team Photo" />
              </div>
              <div className="aspect-video bg-gray-100 rounded-xl overflow-hidden">
                <ImageUploadPlaceholder label="Office Photo" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline / Impact Highlights */}
      <section className="py-16 lg:py-24 bg-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl lg:text-4xl font-bold text-charcoal mb-4">
                Our Impact
              </h2>
              <p className="text-lg text-neutral-grey">
                Key milestones and governance impact highlights
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-md text-center animate-slide-up">
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-charcoal mb-2">50+</h3>
                <p className="text-neutral-grey">Organizations Served</p>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-md text-center animate-slide-up" style={{ animationDelay: '0.1s' }}>
                <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-charcoal mb-2">100+</h3>
                <p className="text-neutral-grey">Training Programs Delivered</p>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-md text-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-charcoal mb-2">500+</h3>
                <p className="text-neutral-grey">Board Members Trained</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Governance Impact Highlights */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl lg:text-4xl font-bold text-charcoal mb-4">
                Governance Excellence
              </h2>
            </div>
            <div className="space-y-6 animate-fade-in">
              <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-primary">
                <h3 className="text-xl font-semibold text-charcoal mb-2">
                  Enhanced Board Effectiveness
                </h3>
                <p className="text-neutral-grey leading-relaxed">
                  Our comprehensive board development programs have helped organizations improve
                  decision-making processes, enhance strategic oversight, and strengthen board
                  dynamics.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-primary">
                <h3 className="text-xl font-semibold text-charcoal mb-2">
                  Regulatory Compliance
                </h3>
                <p className="text-neutral-grey leading-relaxed">
                  We assist organizations in navigating complex regulatory environments, ensuring
                  full compliance with governance standards and best practices.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-primary">
                <h3 className="text-xl font-semibold text-charcoal mb-2">
                  Strategic Alignment
                </h3>
                <p className="text-neutral-grey leading-relaxed">
                  Our strategic planning services help boards align governance practices with
                  organizational objectives, driving sustainable growth and value creation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

