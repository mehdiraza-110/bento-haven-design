import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-white">
      {/* Rounded Top Border */}
      <div className="bg-gradient-to-r from-primary to-primary-light h-1"></div>
      
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-light rounded-xl flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">GS</span>
              </div>
              <span className="text-xl font-bold">Garden Suites</span>
            </div>
            <p className="text-white/80 mb-6 leading-relaxed">
              Creating beautiful, sustainable modular homes that enhance your property 
              and lifestyle. Quality craftsmanship meets modern design.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#models" className="text-white/80 hover:text-primary transition-colors">Our Models</a></li>
              <li><a href="#features" className="text-white/80 hover:text-primary transition-colors">Features</a></li>
              <li><a href="#projects" className="text-white/80 hover:text-primary transition-colors">Recent Projects</a></li>
              <li><a href="#process" className="text-white/80 hover:text-primary transition-colors">Our Process</a></li>
              <li><a href="#financing" className="text-white/80 hover:text-primary transition-colors">Financing</a></li>
              <li><a href="#warranty" className="text-white/80 hover:text-primary transition-colors">Warranty</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/80 hover:text-primary transition-colors">Design Consultation</a></li>
              <li><a href="#" className="text-white/80 hover:text-primary transition-colors">Custom Design</a></li>
              <li><a href="#" className="text-white/80 hover:text-primary transition-colors">Permits & Planning</a></li>
              <li><a href="#" className="text-white/80 hover:text-primary transition-colors">Installation</a></li>
              <li><a href="#" className="text-white/80 hover:text-primary transition-colors">Maintenance</a></li>
              <li><a href="#" className="text-white/80 hover:text-primary transition-colors">Support</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-white/80">(555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-white/80">info@gardensuites.com</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5" />
                <span className="text-white/80">
                  123 Builder Street<br />
                  Vancouver, BC V6B 1A1
                </span>
              </div>
            </div>

            {/* Newsletter */}
            <div className="mt-8">
              <h4 className="font-semibold mb-4">Stay Updated</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
                <button className="px-6 py-2 bg-primary hover:bg-primary-light rounded-full font-medium transition-colors">
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © {currentYear} Garden Suites. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-white/60 hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="text-white/60 hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="text-white/60 hover:text-primary transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;