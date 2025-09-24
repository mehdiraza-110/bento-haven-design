import { Button } from '@/components/ui/button';
import { ArrowRight, Bed, Bath, Square } from 'lucide-react';
import modelsImage from '@/assets/models-showcase.jpg';

const models = [
  {
    name: 'Studio Suite',
    price: 'From $89,000',
    beds: 0,
    baths: 1,
    sqft: 450,
    features: ['Murphy Bed', 'Kitchenette', 'Full Bath', 'Smart Storage'],
    popular: false,
  },
  {
    name: 'One Bedroom',
    price: 'From $129,000',
    beds: 1,
    baths: 1,
    sqft: 650,
    features: ['Separate Bedroom', 'Full Kitchen', 'Living Area', 'Covered Deck'],
    popular: true,
  },
  {
    name: 'Two Bedroom',
    price: 'From $169,000',
    beds: 2,
    baths: 2,
    sqft: 950,
    features: ['Master Suite', 'Guest Room', 'Open Kitchen', 'Large Deck'],
    popular: false,
  },
];

const ModelsShowcase = () => {
  return (
    <section id="models" className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-6">
            <span className="text-sm font-medium text-primary">🏠 Our Models</span>
          </div>
          <h2 className="heading-section mb-6">
            Find Your Perfect 
            <span className="text-gradient"> Garden Suite</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from our collection of thoughtfully designed models, each optimized 
            for comfort, efficiency, and style.
          </p>
        </div>

        {/* Hero Image */}
        <div className="relative rounded-3xl overflow-hidden mb-16 shadow-strong">
          <img
            src={modelsImage}
            alt="Garden Suite Models"
            className="w-full h-[400px] md:h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent"></div>
          <div className="absolute bottom-8 left-8 right-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Multiple Configurations Available
            </h3>
            <p className="text-white/90 text-lg max-w-2xl">
              All models can be customized to fit your specific needs and lot requirements.
            </p>
          </div>
        </div>

        {/* Models Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {models.map((model, index) => (
            <div
              key={index}
              className={`
                card-premium p-8 group cursor-pointer hover:scale-105 transition-all duration-300
                ${model.popular ? 'ring-2 ring-primary/30 shadow-glow' : ''}
              `}
            >
              {/* Popular Badge */}
              {model.popular && (
                <div className="absolute -top-3 left-6 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}

              {/* Model Header */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">{model.name}</h3>
                <p className="text-3xl font-bold text-primary">{model.price}</p>
              </div>

              {/* Specs */}
              <div className="flex items-center gap-6 mb-6 pb-6 border-b border-border">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Bed className="w-4 h-4" />
                  <span className="text-sm">{model.beds} bed{model.beds !== 1 ? 's' : ''}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Bath className="w-4 h-4" />
                  <span className="text-sm">{model.baths} bath{model.baths !== 1 ? 's' : ''}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Square className="w-4 h-4" />
                  <span className="text-sm">{model.sqft} sqft</span>
                </div>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h4 className="font-semibold text-foreground mb-3">Key Features</h4>
                <ul className="space-y-2">
                  {model.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <Button className="w-full btn-hero group-hover:shadow-glow transition-all">
                Learn More
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-16 text-center">
          <div className="card-premium p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Need Something Custom?
            </h3>
            <p className="text-muted-foreground mb-6">
              Every garden suite can be customized to your specific needs. Our design team 
              will work with you to create the perfect space.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-hero">
                Custom Design Consultation
              </Button>
              <Button className="btn-secondary">
                View Floor Plans
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModelsShowcase;