import { Link } from 'react-router-dom';
import { Calendar, MapPin, Users, CheckCircle, ArrowRight } from 'lucide-react';

interface TrainingDetailCardProps {
  title: string;
  subtitle?: string;
  date: string;
  location: string;
  image?: string;
  description?: string;
  whatToExpect?: string[];
  whoShouldAttend?: string[];
  link?: string;
  status?: 'previous' | 'upcoming';
}

export default function TrainingDetailCard({
  title,
  subtitle,
  date,
  location,
  image,
  description,
  whatToExpect,
  whoShouldAttend,
  link,
  status = 'upcoming',
}: TrainingDetailCardProps) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        {/* Image Section */}
        {image && (
          <div className="relative aspect-video lg:aspect-auto bg-white overflow-hidden group">
            <img 
              src={image} 
              alt={title} 
              className="w-full h-full object-contain lg:object-cover transition-transform duration-300 group-hover:scale-105" 
            />
            {status === 'previous' && (
              <div className="absolute top-4 right-4 px-4 py-2 bg-primary text-white rounded-full text-xs font-semibold shadow-lg z-10">
                ✓ Completed
              </div>
            )}
            {/* Optional: Click to view larger */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
          </div>
        )}

        {/* Content Section */}
        <div className="p-6 lg:p-8 flex flex-col">
          {/* Header */}
          <div className="mb-4">
            {status === 'previous' && (
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold mb-3">
                Past Training
              </span>
            )}
            <h3 className="text-2xl lg:text-3xl font-bold text-charcoal mb-2 leading-tight">{title}</h3>
            {subtitle && (
              <p className="text-lg text-secondary font-semibold mb-3">{subtitle}</p>
            )}
          </div>

          {description && (
            <p className="text-neutral-grey leading-relaxed mb-6 text-sm lg:text-base">{description}</p>
          )}

          {/* Date & Location */}
          <div className="flex flex-wrap gap-4 mb-6 pb-6 border-b border-gray-200">
            <div className="flex items-center text-neutral-grey bg-primary/5 rounded-lg px-3 py-2">
              <Calendar className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
              <span className="text-sm font-medium">{date}</span>
            </div>
            <div className="flex items-center text-neutral-grey bg-secondary/10 rounded-lg px-3 py-2">
              <MapPin className="h-4 w-4 text-secondary mr-2 flex-shrink-0" />
              <span className="text-sm font-medium">{location}</span>
            </div>
          </div>

          {/* What to Expect */}
          {whatToExpect && whatToExpect.length > 0 && (
            <div className="mb-6 flex-grow">
              <h4 className="text-base font-semibold text-charcoal mb-3 flex items-center">
                <CheckCircle className="h-5 w-5 text-primary mr-2" />
                What to Expect
              </h4>
              <ul className="space-y-2">
                {whatToExpect.map((item, index) => (
                  <li key={index} className="flex items-start text-neutral-grey">
                    <span className="text-primary mr-2 mt-1">•</span>
                    <span className="text-sm leading-relaxed flex-1">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Who Should Attend */}
          {whoShouldAttend && whoShouldAttend.length > 0 && (
            <div className="mb-6">
              <h4 className="text-base font-semibold text-charcoal mb-3 flex items-center">
                <Users className="h-5 w-5 text-primary mr-2" />
                Who Should Attend
              </h4>
              <div className="flex flex-wrap gap-2">
                {whoShouldAttend.map((item, index) => (
                  <span
                    key={index}
                    className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          {link && status === 'upcoming' && (
            <div className="mt-auto pt-6 border-t border-gray-200">
              <p className="text-sm text-neutral-grey mb-4 font-medium">
                Reserve your seat. Limited seats available.
              </p>
              <Link
                to={link}
                className="inline-flex items-center w-full justify-center px-6 py-3 bg-gradient-to-r from-primary to-primary-dark text-white rounded-lg font-semibold hover:from-primary-dark hover:to-primary transition-all transform hover:scale-105 shadow-md"
              >
                Reserve Your Seat
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

