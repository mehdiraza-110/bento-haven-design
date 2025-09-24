import { useState } from 'react';
import { ExternalLink, X, ChevronLeft, ChevronRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Modern Family Suite',
    location: 'Vancouver, BC',
    type: 'Two Bedroom',
    size: 'large',
    image: '/api/placeholder/800/600',
    description: 'A spacious two-bedroom suite designed for multi-generational living.',
    features: ['In-law Suite', 'Full Kitchen', 'Private Entrance', 'Garden Views'],
    gallery: ['/api/placeholder/800/600', '/api/placeholder/800/600', '/api/placeholder/800/600'],
  },
  {
    id: 2,
    title: 'Urban Studio',
    location: 'Toronto, ON',
    type: 'Studio',
    size: 'medium',
    image: '/api/placeholder/600/400',
    description: 'Compact yet luxurious studio perfect for rental income.',
    features: ['Murphy Bed', 'Smart Storage', 'Modern Kitchen', 'High Ceilings'],
    gallery: ['/api/placeholder/600/400', '/api/placeholder/600/400'],
  },
  {
    id: 3,
    title: 'Executive Retreat',
    location: 'Calgary, AB',
    type: 'One Bedroom',
    size: 'medium',
    image: '/api/placeholder/600/400',
    description: 'Elegant home office and guest suite combination.',
    features: ['Home Office', 'Guest Bedroom', 'Kitchenette', 'Private Deck'],
    gallery: ['/api/placeholder/600/400', '/api/placeholder/600/400'],
  },
  {
    id: 4,
    title: 'Sustainable Living',
    location: 'Ottawa, ON',
    type: 'Two Bedroom',
    size: 'small',
    image: '/api/placeholder/400/300',
    description: 'Eco-friendly design with solar panels and rainwater collection.',
    features: ['Solar Power', 'Rainwater System', 'Green Roof', 'Energy Star'],
    gallery: ['/api/placeholder/400/300'],
  },
  {
    id: 5,
    title: 'Minimalist Design',
    location: 'Montreal, QC',
    type: 'Studio',
    size: 'small',
    image: '/api/placeholder/400/300',
    description: 'Clean lines and natural materials create a zen-like space.',
    features: ['Natural Wood', 'Floor-to-Ceiling Windows', 'Minimalist Design', 'Built-in Storage'],
    gallery: ['/api/placeholder/400/300'],
  },
  {
    id: 6,
    title: 'Luxury Garden Suite',
    location: 'Victoria, BC',
    type: 'Two Bedroom',
    size: 'large',
    image: '/api/placeholder/800/500',
    description: 'Premium finishes and high-end appliances in this luxury suite.',
    features: ['Premium Finishes', 'High-End Appliances', 'Walk-in Closet', 'Spa Bathroom'],
    gallery: ['/api/placeholder/800/500', '/api/placeholder/800/500', '/api/placeholder/800/500', '/api/placeholder/800/500'],
  },
];

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const closeLightbox = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === selectedProject.gallery.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.gallery.length - 1 : prev - 1
      );
    }
  };

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-6">
            <span className="text-sm font-medium text-primary">🏗️ Recent Projects</span>
          </div>
          <h2 className="heading-section mb-6">
            See Our Garden Suites 
            <span className="text-gradient"> In Action</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every project tells a unique story. Explore our recent builds and see 
            how we've helped families create beautiful, functional living spaces.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-fr">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`
                card-feature group cursor-pointer overflow-hidden
                ${project.size === 'large' ? 'xl:col-span-2 xl:row-span-2' : 
                  project.size === 'medium' ? 'md:col-span-1 md:row-span-1' : ''}
              `}
              onClick={() => openLightbox(project)}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden rounded-xl mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ExternalLink className="w-4 h-4 text-white" />
                </div>
                <div className="absolute top-4 left-4 px-3 py-1 bg-primary/90 backdrop-blur-sm rounded-full text-xs font-medium text-primary-foreground">
                  {project.type}
                </div>
              </div>

              {/* Project Info */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  📍 {project.location}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {project.features.slice(0, 2).map((feature, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-surface-soft text-xs text-muted-foreground rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                  {project.features.length > 2 && (
                    <span className="px-2 py-1 bg-surface-soft text-xs text-muted-foreground rounded-full">
                      +{project.features.length - 2} more
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">Want to see more projects?</p>
          <button className="btn-secondary">
            View Full Portfolio
          </button>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4">
          <div className="relative max-w-4xl w-full">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors z-10"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            <div className="grid md:grid-cols-2 gap-8 bg-card rounded-2xl overflow-hidden shadow-strong">
              {/* Image Gallery */}
              <div className="relative">
                <img
                  src={selectedProject.gallery[currentImageIndex]}
                  alt={selectedProject.title}
                  className="w-full h-64 md:h-96 object-cover"
                />
                
                {selectedProject.gallery.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
                    >
                      <ChevronLeft className="w-6 h-6 text-white" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
                    >
                      <ChevronRight className="w-6 h-6 text-white" />
                    </button>
                    
                    {/* Image Indicators */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                      {selectedProject.gallery.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`w-2 h-2 rounded-full transition-all ${
                            index === currentImageIndex ? 'bg-white w-6' : 'bg-white/50'
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* Project Details */}
              <div className="p-8">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {selectedProject.title}
                  </h3>
                  <p className="text-muted-foreground">
                    📍 {selectedProject.location} • {selectedProject.type}
                  </p>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {selectedProject.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-3">Key Features</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {selectedProject.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button className="btn-hero w-full">
                  Get Quote for Similar Project
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;