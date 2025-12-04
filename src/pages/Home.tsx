import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import SEO from '../components/SEO';
import ServiceCard from '../components/ServiceCard';
import TrainingDetailCard from '../components/TrainingDetailCard';
import {
  Users,
  GraduationCap,
  ClipboardCheck,
  TrendingUp,
  Award,
  MapPin,
  Quote,
  ArrowRight,
  // BriefcaseBusiness,
} from 'lucide-react';

export default function Home() {
  const services = [
    {
      icon: Users,
      title: 'Board Development',
      description: 'Comprehensive board development planning to enhance governance effectiveness.',
    },
    {
      icon: GraduationCap,
      title: 'Training Programs',
      description: 'Specialized training programs for board members and executives.',
    },
    {
      icon: ClipboardCheck,
      title: 'Performance Evaluation',
      description: 'Board performance evaluations to ensure optimal governance outcomes.',
    },
    {
      icon: TrendingUp,
      title: 'Strategic Planning',
      description: 'Strategic planning services to guide organizational direction.',
    },
  ];

  const trainingHighlights = [
    {
      title: 'Effective Governance for Audit Committee Chairs',
      subtitle: 'Mastering Leadership & Driving Performance',
      date: '9th & 10th Oct 2025 - Zanzibar',
      image: '/images/eBConsulting-flyer-20250701-scaled.webp',
      description: 'Moving from what needs to be done to how to get the job done (effectiveness and performance improvement).',
      status: 'previous',
    },
  ];

  const valueProps = [
    {
      icon: Award,
      title: 'Board Governance Expertise',
      description: 'Deep knowledge of governance best practices and regulatory requirements.',
    },
    {
      icon: TrendingUp,
      title: 'Proven Experience',
      description: 'Years of experience working with boards across various industries.',
    },
    {
      icon: MapPin,
      title: 'East Africa Coverage',
      description: 'Strong presence and understanding of the East African business landscape.',
    },
  ];

  return (
    <div className="pt-20">
      <SEO
        title="Home"
        description="Evolve Board Consulting - Strategic Insight. Effective Oversight. Leading governance advisory firm specializing in board development, training, and strategic oversight."
        keywords="board consulting, corporate governance, board development, governance training, East Africa"
      />
      {/* Hero Section */}
      <HeroSection
        title="Evolve Board Consulting"
        subtitle="Strategic Insight. Effective Oversight."
        primaryCTA={{ text: 'Work With Us', link: '/contact' }}
        secondaryCTA={{ text: 'Explore Services', link: '/services' }}
      />

      {/* About Summary */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-white via-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="inline-block px-4 py-1 bg-primary/10 text-primary font-semibold rounded-full text-sm mb-6">
              Who We Are
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-charcoal mb-6">
              About Evolve Board Consulting
            </h2>
            <p className="text-lg text-neutral-grey leading-relaxed mb-8">
              Evolve Board Consulting is a leading governance advisory firm specializing in board
              development, training, and strategic oversight. We partner with organizations to
              enhance their governance practices and drive sustainable success.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-all transform hover:scale-105 shadow-md hover:shadow-lg"
            >
              Learn More
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <span className="inline-block px-4 py-1 bg-secondary/20 text-secondary font-semibold rounded-full text-sm mb-4">
              What We Offer
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-charcoal mb-4">
              Our Services
            </h2>
            <p className="text-lg text-neutral-grey max-w-2xl mx-auto">
              Comprehensive governance solutions tailored to your organization's needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center text-primary font-semibold hover:text-primary-dark transition-colors"
            >
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Training Highlights */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <span className="inline-block px-4 py-1 bg-primary/10 text-primary font-semibold rounded-full text-sm mb-4">
              Training Programs
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-charcoal mb-4">
              Training Highlights
            </h2>
            <p className="text-lg text-neutral-grey max-w-2xl mx-auto">
              Explore our completed training programs and stay updated on upcoming sessions
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            {trainingHighlights.map((training, index) => (
              <div key={index} className="animate-slide-up mb-8" style={{ animationDelay: `${index * 0.1}s` }}>
                <TrainingDetailCard
                  title={training.title}
                  subtitle={training.subtitle}
                  date={training.date}
                  location="Zanzibar"
                  image={training.image}
                  description={training.description}
                  whatToExpect={[
                    'Best practices in audit committees',
                    'Roles and responsibilities of the Audit Committee Chair',
                    'Strategies for effective audit committee leadership',
                    'Effective communication with the Board and External Auditors',
                    'Oversight of risk management and internal control systems',
                  ]}
                  whoShouldAttend={[
                    'Chairs of Audit Committee',
                    'Members of Audit Committee',
                  ]}
                  status="previous"
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/training"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary to-primary-dark text-white rounded-lg font-semibold hover:from-primary-dark hover:to-primary transition-all transform hover:scale-105 shadow-lg"
            >
              View All Training Programs
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/10 via-primary/5 to-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <span className="inline-block px-4 py-1 bg-white/80 text-primary font-semibold rounded-full text-sm mb-4">
              Our Advantage
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-charcoal mb-4">
              Why Choose Us
            </h2>
            <p className="text-lg text-neutral-grey max-w-2xl mx-auto">
              What sets Evolve Board Consulting apart
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-5xl mx-auto">
            {valueProps.map((prop, index) => (
              <div
                key={index}
                className="text-center bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <prop.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-3">{prop.title}</h3>
                <p className="text-neutral-grey leading-relaxed">{prop.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Placeholder */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <Quote className="h-12 w-12 text-primary mx-auto mb-6" />
            <blockquote className="text-xl lg:text-2xl text-charcoal font-medium mb-6 italic">
              "Evolve Board Consulting has been instrumental in transforming our governance
              practices. Their expertise and guidance have been invaluable."
            </blockquote>
            <p className="text-neutral-grey">— Board Chair, Leading Financial Institution</p>
          </div>
        </div>
      </section>

      {/* Featured Consultant */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/5 via-white to-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <span className="inline-block px-4 py-1 bg-secondary/20 text-secondary font-semibold rounded-full text-sm mb-4">
                Meet Our Expert
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-charcoal mb-4">
                Featured Consultant
              </h2>
              <p className="text-neutral-grey max-w-2xl mx-auto">
                Leading governance expertise to transform your organization
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden animate-slide-up">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Image Section */}
                <div className="relative h-64 lg:h-auto bg-gradient-to-br from-primary/20 to-secondary/20">
                  <img
                    src="/images/Mike-2.webp"
                    alt="Dr. Mike Sallu - Principal Consultant"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
                </div>
                {/* Content Section */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="mb-4">
                    <h3 className="text-3xl font-bold text-charcoal mb-2">Dr. Mike Sallu</h3>
                    <p className="text-lg text-secondary font-semibold mb-4">Principal Consultant</p>
                    <div className="w-16 h-1 bg-secondary rounded-full mb-6"></div>
                  </div>
                  <p className="text-neutral-grey leading-relaxed mb-6">
                    Dr. Mike Sallu brings extensive experience in corporate governance and board
                    development, with a proven track record of helping organizations achieve excellence
                    in governance practices.
                  </p>
                  <div className="flex flex-wrap gap-3 mb-6">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                      Board Development
                    </span>
                    <span className="px-3 py-1 bg-secondary/20 text-secondary-dark text-xs font-medium rounded-full">
                      Strategic Planning
                    </span>
                    <span className="px-3 py-1 bg-primary-light/30 text-primary-dark text-xs font-medium rounded-full">
                      Governance Training
                    </span>
                  </div>
                  <Link
                    to="/consultants"
                    className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-all transform hover:scale-105 shadow-md hover:shadow-lg w-fit"
                  >
                    View Full Profile
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary via-primary-dark to-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Enhance Your Governance?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Contact us today to discuss how we can help your organization achieve governance
              excellence.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-secondary text-white rounded-lg font-semibold hover:bg-secondary-dark transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl"
            >
              Contact Us Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

