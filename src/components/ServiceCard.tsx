import { Link } from 'react-router-dom';
import { LucideIcon, ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  link?: string;
}

export default function ServiceCard({ icon: Icon, title, description, link = '/services' }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-primary-light/20 h-full flex flex-col group">
      <div className="mb-4">
        <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-all">
          <Icon className="h-7 w-7 text-primary group-hover:text-primary-dark transition-colors" />
        </div>
      </div>
      <h3 className="text-xl font-semibold text-charcoal mb-3 group-hover:text-primary transition-colors">{title}</h3>
      <p className="text-neutral-grey text-sm leading-relaxed mb-4 flex-grow">{description}</p>
      {link && (
        <Link
          to={link}
          className="inline-flex items-center text-primary font-medium hover:text-secondary transition-colors text-sm mt-auto group/link"
        >
          Learn More
          <ArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
        </Link>
      )}
    </div>
  );
}

