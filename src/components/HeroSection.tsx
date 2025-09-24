import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import heroImage from '@/assets/hero-home.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Modern Garden Suite"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/60 via-charcoal/40 to-charcoal/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
            <span className="text-sm font-medium">🏡 Premium Garden Suites</span>
          </div>

          {/* Main Headline */}
          <h1 className="heading-hero mb-6 text-balanced">
            Modern Living
            <span className="text-gradient bg-gradient-to-r from-primary-light to-accent bg-clip-text text-transparent">
              {" "}Reimagined
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto text-balanced">
            Sustainable, energy-efficient modular homes designed for modern living. 
            From consultation to installation in weeks, not months.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button className="btn-hero text-lg px-8 py-4 group">
              Get Started
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button className="btn-secondary text-lg px-8 py-4 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20">
              View Models
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-light mb-2">500+</div>
              <div className="text-sm text-white/80">Homes Built</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-light mb-2">4-8</div>
              <div className="text-sm text-white/80">Weeks Build</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-light mb-2">100%</div>
              <div className="text-sm text-white/80">Sustainable</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-light mb-2">15yr</div>
              <div className="text-sm text-white/80">Warranty</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;