import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import BentoGrid from '../components/BentoGrid';
import ModelsShowcase from '../components/ModelsShowcase';
import ExperienceSection from '../components/ExperienceSection';
import ProjectsSection from '../components/ProjectsSection';
import TestimonialSection from '../components/TestimonialSection';
import VideoSection from '../components/VideoSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <BentoGrid />
      <ModelsShowcase />
      <ExperienceSection />
      <ProjectsSection />
      <TestimonialSection />
      <VideoSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
