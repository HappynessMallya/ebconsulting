import TrainingDetailCard from '../components/TrainingDetailCard';
import { ArrowRight, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Training() {
  const previousTrainings = [
    {
      title: 'Effective Governance for Audit Committee Chairs',
      subtitle: 'Mastering Leadership & Driving Performance',
      date: '9th and 10th October 2025',
      location: 'ZANZIBAR',
      image: '/images/eBConsulting-flyer-20250701-scaled.webp',
      description:
        'Moving from what needs to be done (the role of the audit committees) to how to get the job done (effectiveness and performance improvement).',
      whatToExpect: [
        'Best practices in audit committees',
        'Roles and responsibilities of the Audit Committee Chair',
        'Strategies for effective audit committee leadership',
        'Effective communication with the Board and External Auditors',
        'Oversight of risk management and internal control systems',
      ],
      whoShouldAttend: [
        'Chairs of Audit Committee',
        'Members of Audit Committee',
      ],
      status: 'previous' as const,
    },
  ];


  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/10 via-white to-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl lg:text-5xl font-bold text-charcoal mb-6">
              Training Highlights
            </h1>
            <p className="text-xl text-neutral-grey leading-relaxed">
              Comprehensive training programs designed to enhance board effectiveness and governance
              capabilities
            </p>
          </div>
        </div>
      </section>

      {/* Previous Training */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-white via-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <span className="inline-block px-4 py-1 bg-primary/10 text-primary font-semibold rounded-full text-sm mb-4">
              Past Programs
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-charcoal mb-4">
              Previous Training
            </h2>
            <p className="text-lg text-neutral-grey max-w-2xl mx-auto">
              Explore our completed training programs and their impact
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            {previousTrainings.map((training, index) => (
              <div
                key={index}
                className="animate-slide-up mb-8"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <TrainingDetailCard {...training} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Training */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <span className="inline-block px-4 py-1 bg-secondary/20 text-secondary font-semibold rounded-full text-sm mb-4">
              Future Programs
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-charcoal mb-4">
              Upcoming Training
            </h2>
            <p className="text-lg text-neutral-grey max-w-2xl mx-auto">
              Stay tuned for our upcoming training programs
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-br from-primary/5 via-white to-secondary/5 rounded-2xl p-8 lg:p-12 shadow-xl border border-primary/10 text-center animate-slide-up">
              <div className="w-24 h-24 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Clock className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-3xl lg:text-4xl font-bold text-charcoal mb-4">
                Coming Soon
              </h3>
              <p className="text-lg text-neutral-grey leading-relaxed mb-6 max-w-2xl mx-auto">
                We are preparing exciting new training programs designed to enhance board effectiveness and governance capabilities.
                Check back soon for updates on our upcoming sessions.
              </p>
              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 mb-8">
                <p className="text-neutral-grey font-medium">
                  Interested in being notified when new training programs are announced?
                </p>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary to-primary-dark text-white rounded-lg font-semibold hover:from-primary-dark hover:to-primary transition-all transform hover:scale-105 shadow-lg"
              >
                Contact Us for Updates
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Reserve Your Seat
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Interested in our training programs? Contact us to reserve your seat or learn more
              about upcoming sessions.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-primary rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

