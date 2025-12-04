import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';
import ImageUploadPlaceholder from './ImageUploadPlaceholder';

interface TrainingCardProps {
  title: string;
  date?: string;
  image?: string;
  description?: string;
  link?: string;
}

export default function TrainingCard({ title, date, image, description, link }: TrainingCardProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="aspect-video bg-gray-100 relative overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        ) : (
          <ImageUploadPlaceholder />
        )}
      </div>
      <div className="p-6">
        {date && (
          <div className="flex items-center text-sm text-neutral-grey mb-3">
            <Calendar className="h-4 w-4 mr-2" />
            {date}
          </div>
        )}
        <h3 className="text-xl font-semibold text-charcoal mb-3">{title}</h3>
        {description && (
          <p className="text-neutral-grey text-sm leading-relaxed mb-4">{description}</p>
        )}
        {link && (
          <Link
            to={link}
            className="inline-flex items-center text-primary font-medium hover:text-primary-dark transition-colors text-sm"
          >
            Reserve Your Seat
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        )}
      </div>
    </div>
  );
}

