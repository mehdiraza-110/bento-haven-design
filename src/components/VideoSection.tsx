import { useState } from 'react';
import { Play, X } from 'lucide-react';

const VideoSection = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="section-padding bg-gradient-to-br from-charcoal to-charcoal/90">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
            <span className="text-sm font-medium text-white">🎥 Watch Our Story</span>
          </div>
          <h2 className="heading-section mb-6 text-white">
            See How We Build Your
            <span className="text-gradient bg-gradient-to-r from-primary-light to-accent bg-clip-text text-transparent">
              {" "}Dream Suite
            </span>
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Take a behind-the-scenes look at our factory and installation process. 
            See the craftsmanship and attention to detail that goes into every garden suite.
          </p>
        </div>

        {/* Video Container */}
        <div className="relative max-w-4xl mx-auto">
          <div className="relative aspect-video rounded-3xl overflow-hidden shadow-strong">
            {/* Video Thumbnail */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-charcoal/40">
              <div className="absolute inset-0 bg-charcoal/60"></div>
              
              {/* Play Button */}
              <button
                onClick={() => setIsVideoOpen(true)}
                className="absolute inset-0 flex items-center justify-center group"
              >
                <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300 shadow-glow">
                  <Play className="w-10 h-10 text-white ml-1" fill="white" />
                </div>
              </button>

              {/* Content Overlay */}
              <div className="absolute bottom-8 left-8 right-8">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  Factory to Home: The Complete Journey
                </h3>
                <p className="text-white/90 text-lg">
                  Watch how precision manufacturing meets beautiful design • 3:45 mins
                </p>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-br from-primary/30 to-transparent rounded-full blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-br from-accent/30 to-transparent rounded-full blur-2xl"></div>
          </div>

          {/* Video Stats */}
          <div className="grid grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏭</span>
              </div>
              <div className="text-lg font-semibold text-white mb-1">Climate Controlled</div>
              <div className="text-sm text-white/70">Factory Environment</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <div className="text-lg font-semibold text-white mb-1">Rapid Assembly</div>
              <div className="text-sm text-white/70">Professional Installation</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✨</span>
              </div>
              <div className="text-lg font-semibold text-white mb-1">Quality Assured</div>
              <div className="text-sm text-white/70">Every Step Inspected</div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-4xl mx-4">
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute -top-12 right-0 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>
            <div className="aspect-video rounded-2xl overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="Garden Suite Installation Process"
                className="w-full h-full"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default VideoSection;