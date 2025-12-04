import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  primaryCTA?: { text: string; link: string };
  secondaryCTA?: { text: string; link: string };
  backgroundImage?: string;
}

export default function HeroSection({
  title,
  subtitle,
  primaryCTA,
  secondaryCTA,
  backgroundImage,
}: HeroSectionProps) {
  return (
    <section
      className="relative min-h-[700px] flex items-center justify-center overflow-hidden"
      style={
        backgroundImage
          ? {
              backgroundImage: `linear-gradient(135deg, rgba(62, 81, 158, 0.85), rgba(255, 148, 31, 0.75)), url(${backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }
          : undefined
      }
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-white to-secondary/30"></div>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative z-10">
        <div className="max-w-5xl mx-auto text-center animate-fade-in">
          {/* Badge */}
          <div className="inline-block px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full mb-6 shadow-lg">
            <span className="text-sm font-semibold text-primary">
              Leading Governance Excellence
            </span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-primary via-primary-dark to-secondary bg-clip-text text-transparent">
              {title}
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl lg:text-3xl text-neutral-grey mb-10 max-w-3xl mx-auto font-medium">
            {subtitle}
          </p>
          
          {(primaryCTA || secondaryCTA) && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {primaryCTA && (
                <Link
                  to={primaryCTA.link}
                  className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary to-primary-dark text-white rounded-xl font-semibold hover:from-primary-dark hover:to-primary transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl"
                >
                  {primaryCTA.text}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              )}
              {secondaryCTA && (
                <Link
                  to={secondaryCTA.link}
                  className="group inline-flex items-center px-8 py-4 bg-white/95 backdrop-blur-sm text-primary border-2 border-primary rounded-xl font-semibold hover:bg-white hover:border-primary-dark transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  {secondaryCTA.text}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
      
      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/80 to-transparent" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-secondary rounded-full opacity-60 animate-pulse"></div>
      <div className="absolute top-40 right-20 w-3 h-3 bg-primary rounded-full opacity-40 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-secondary rounded-full opacity-50 animate-pulse" style={{ animationDelay: '1s' }}></div>
    </section>
  );
}

