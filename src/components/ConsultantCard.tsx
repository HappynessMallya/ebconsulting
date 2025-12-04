import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ImageUploadPlaceholder from './ImageUploadPlaceholder';

interface ConsultantCardProps {
  name: string;
  title: string;
  image?: string;
  bio: string;
  link?: string;
}

export default function ConsultantCard({ name, title, image, bio, link }: ConsultantCardProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
      <div className="aspect-[4/5] bg-gray-100 relative overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
          />
        ) : (
          <ImageUploadPlaceholder />
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-charcoal mb-1">{name}</h3>
        <p className="text-primary text-sm font-medium mb-3">{title}</p>
        <p className="text-neutral-grey text-sm leading-relaxed mb-4 line-clamp-3">{bio}</p>
        {link && (
          <Link
            to={link}
            className="inline-flex items-center text-primary font-medium hover:text-primary-dark transition-colors text-sm"
          >
            View Profile
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        )}
      </div>
    </div>
  );
}

