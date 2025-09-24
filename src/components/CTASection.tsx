import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, Download } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        {/* Main CTA */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary-light to-accent p-12 md:p-16 text-center shadow-strong">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-32 -translate-y-32"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-48 translate-y-48"></div>
          </div>

          <div className="relative z-10">
            <h2 className="heading-section text-primary-foreground mb-6">
              Ready to Build Your Garden Suite?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Join hundreds of satisfied customers who have transformed their property 
              with our premium garden suites. Start your journey today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button className="btn-secondary bg-white text-primary hover:bg-white/90 text-lg px-8 py-4 group">
                <Calendar className="mr-2 w-5 h-5" />
                Book Free Consultation
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button className="btn-ghost text-primary-foreground border-white/30 hover:bg-white/10 text-lg px-8 py-4">
                <Download className="mr-2 w-5 h-5" />
                Download Brochure
              </Button>
            </div>

            <p className="text-sm text-primary-foreground/80">
              Free consultation • No obligation • Get your quote in 24 hours
            </p>
          </div>
        </div>

        {/* Secondary CTAs */}
        <div className="grid md:grid-cols-2 gap-8 mt-16">
          <div className="card-premium p-8 text-center group hover:scale-105 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">💰</span>
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Financing Available
            </h3>
            <p className="text-muted-foreground mb-6">
              Flexible payment options and financing solutions to make your garden suite affordable.
            </p>
            <Button className="btn-secondary w-full group-hover:shadow-medium transition-all">
              Explore Financing
            </Button>
          </div>

          <div className="card-premium p-8 text-center group hover:scale-105 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">📞</span>
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Speak with an Expert
            </h3>
            <p className="text-muted-foreground mb-6">
              Have questions? Our garden suite specialists are here to help you every step of the way.
            </p>
            <Button className="btn-secondary w-full group-hover:shadow-medium transition-all">
              Call (555) 123-4567
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;