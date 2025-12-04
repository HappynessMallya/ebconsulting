import ServiceCard from '../components/ServiceCard';
import {
  Users,
  GraduationCap,
  ClipboardCheck,
  UserPlus,
  ArrowRight,
  TrendingUp,
  DollarSign,
  Calendar,
  FileCheck,
  Target,
  Users2,
  AlertTriangle,
  UserCheck,
  BookOpen,
  Search,
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    {
      icon: Users,
      title: 'Board Development Planning',
      description:
        'Comprehensive board development planning to enhance governance effectiveness and strategic oversight capabilities.',
    },
    {
      icon: GraduationCap,
      title: 'Board Training Programs',
      description:
        'Specialized training programs designed to build board member competencies and governance knowledge.',
    },
    {
      icon: ClipboardCheck,
      title: 'Board Performance Evaluations',
      description:
        'Objective assessments of board performance to identify strengths and areas for improvement.',
    },
    {
      icon: UserPlus,
      title: 'Director Recruitment & Selection',
      description:
        'Expert assistance in identifying, recruiting, and selecting qualified board members.',
    },
    {
      icon: TrendingUp,
      title: 'Board Succession Planning',
      description:
        'Strategic planning for board member succession to ensure continuity and effectiveness.',
    },
    {
      icon: DollarSign,
      title: 'Board Remuneration Surveys',
      description:
        'Comprehensive surveys and benchmarking for board compensation and remuneration practices.',
    },
    {
      icon: Calendar,
      title: 'Board Retreats',
      description:
        'Facilitated board retreats focused on strategic planning, team building, and governance enhancement.',
    },
    {
      icon: FileCheck,
      title: 'Corporate Governance Audits',
      description:
        'Thorough audits of governance practices to ensure compliance and identify improvement opportunities.',
    },
    {
      icon: Target,
      title: 'Strategic Planning',
      description:
        'Strategic planning services to guide organizational direction and long-term success.',
    },
    {
      icon: Users2,
      title: 'Diversity & Inclusion Consulting',
      description:
        'Expert guidance on building diverse and inclusive boards that reflect stakeholder interests.',
    },
    {
      icon: AlertTriangle,
      title: 'Regulatory & Compliance Advisory',
      description:
        'Advisory services to help organizations navigate regulatory requirements and compliance obligations.',
    },
    {
      icon: Search,
      title: 'Crisis Management & Risk Oversight',
      description:
        'Support for boards in managing crises and establishing effective risk oversight frameworks.',
    },
    {
      icon: UserCheck,
      title: 'Executive Coaching & Leadership Development',
      description:
        'Coaching and development programs for executives and board members to enhance leadership capabilities.',
    },
    {
      icon: BookOpen,
      title: 'Best Practice Governance Guidance',
      description:
        'Guidance on implementing governance best practices tailored to your organization.',
    },
    {
      icon: FileCheck,
      title: 'Corporate Governance Research',
      description:
        'Research and analysis on governance trends, practices, and regulatory developments.',
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/10 via-white to-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl lg:text-5xl font-bold text-charcoal mb-6">
              Our Services
            </h1>
            <p className="text-xl text-neutral-grey leading-relaxed">
              Comprehensive governance solutions designed to enhance board effectiveness and
              organizational success
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Enhance Your Governance?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Contact us to discuss how our services can help your organization achieve governance
              excellence.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-primary rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
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

