import { Leaf, Zap, Clock, CreditCard, Ruler, Shield } from 'lucide-react';

const features = [
  {
    icon: Leaf,
    title: 'Sustainable Materials',
    description: 'Eco-friendly construction with renewable materials and minimal environmental impact.',
    size: 'large', // Takes up 2 columns
    gradient: 'from-green-500/10 to-primary/10',
  },
  {
    icon: Zap,
    title: 'Energy Efficient',
    description: 'Solar-ready with superior insulation and smart home integration.',
    size: 'medium',
    gradient: 'from-yellow-500/10 to-orange-500/10',
  },
  {
    icon: Clock,
    title: 'Quick Installation',
    description: 'Factory-built modules installed in weeks, not months.',
    size: 'medium',
    gradient: 'from-blue-500/10 to-primary/10',
  },
  {
    icon: CreditCard,
    title: 'Flexible Financing',
    description: 'Affordable payment plans and financing options available.',
    size: 'small',
    gradient: 'from-purple-500/10 to-pink-500/10',
  },
  {
    icon: Ruler,
    title: 'Custom Designs',
    description: 'Tailored to your space and lifestyle needs.',
    size: 'small',
    gradient: 'from-indigo-500/10 to-blue-500/10',
  },
  {
    icon: Shield,
    title: 'Premium Quality',
    description: '15-year warranty with professional installation and ongoing support.',
    size: 'large',
    gradient: 'from-red-500/10 to-primary/10',
  },
];

const BentoGrid = () => {
  return (
    <section className="section-padding bg-surface-soft">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-6">
            <span className="text-sm font-medium text-primary">✨ Why Choose Us</span>
          </div>
          <h2 className="heading-section mb-6">
            Everything You Need for 
            <span className="text-gradient"> Modern Living</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From sustainable materials to smart home technology, our garden suites are designed 
            to exceed your expectations in every aspect.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-fr">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            
            return (
              <div
                key={index}
                className={`
                  card-bento group cursor-pointer
                  ${feature.size === 'large' ? 'lg:col-span-2' : feature.size === 'medium' ? 'lg:col-span-1' : 'lg:col-span-1'}
                  ${feature.size === 'large' ? 'lg:row-span-1' : ''}
                  bg-gradient-to-br ${feature.gradient}
                  hover:scale-105 hover:shadow-glow
                `}
              >
                {/* Icon */}
                <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-primary to-primary-light rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7 text-primary-foreground" />
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">Ready to explore your options?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-hero">
              Schedule Consultation
            </button>
            <button className="btn-secondary">
              Download Brochure
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;