import { CheckCircle, Users, Clipboard, Hammer, Truck } from 'lucide-react';
import experienceImage from '@/assets/experience-process.jpg';

const steps = [
  {
    icon: Users,
    title: 'Consultation',
    description: 'Meet with our design team to discuss your vision and requirements.',
  },
  {
    icon: Clipboard,
    title: 'Design & Planning',
    description: 'Custom plans created and permits handled by our expert team.',
  },
  {
    icon: Hammer,
    title: 'Factory Build',
    description: 'Your suite is built in our controlled factory environment.',
  },
  {
    icon: Truck,
    title: 'Installation',
    description: 'Professional installation completed in just a few days.',
  },
];

const ExperienceSection = () => {
  return (
    <section className="section-padding bg-surface-soft">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-6">
              <span className="text-sm font-medium text-primary">⚡ Our Process</span>
            </div>
            
            <h2 className="heading-section mb-6">
              From Design to Build –
              <span className="text-gradient"> A Seamless Process</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8">
              We've streamlined every step of the journey, from initial consultation 
              to final installation. Our process ensures quality, efficiency, and 
              complete peace of mind.
            </p>

            {/* Process Steps */}
            <div className="space-y-6">
              {steps.map((step, index) => {
                const Icon = step.icon;
                
                return (
                  <div key={index} className="flex items-start gap-4 group">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary to-primary-light rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {index + 1}. {step.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mt-12 pt-8 border-t border-border">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">4-8</div>
                <div className="text-sm text-muted-foreground">Weeks Total Timeline</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">98%</div>
                <div className="text-sm text-muted-foreground">Customer Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-strong">
              <img
                src={experienceImage}
                alt="Garden Suite Installation Process"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent"></div>
            </div>

            {/* Floating Cards */}
            <div className="absolute -bottom-8 -left-8 card-premium p-6 max-w-xs">
              <div className="flex items-center gap-3 mb-3">
                <CheckCircle className="w-6 h-6 text-success" />
                <span className="font-semibold text-foreground">Quality Assured</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Every component is inspected and tested before installation.
              </p>
            </div>

            <div className="absolute -top-8 -right-8 card-premium p-6 max-w-xs">
              <div className="flex items-center gap-3 mb-3">
                <Truck className="w-6 h-6 text-primary" />
                <span className="font-semibold text-foreground">On-Time Delivery</span>
              </div>
              <p className="text-sm text-muted-foreground">
                95% of projects completed on or ahead of schedule.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;