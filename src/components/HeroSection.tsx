import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Users, Home } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Gradient Overlay */}
      <div className="absolute inset-0 gradient-hero opacity-95"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-accent/20 animate-float"></div>
      <div className="absolute top-40 right-20 w-16 h-16 rounded-full bg-primary-glow/30 animate-float-delay"></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 rounded-full bg-accent/40 animate-float"></div>
      
      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Hero Content */}
          <div className="space-y-8 animate-fade-up">
            {/* Hiring Notice */}
            <div className="inline-flex items-center space-x-2 glass-card px-4 py-2 rounded-full">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
              <span className="text-white text-sm font-medium">Support Workers wanted in all areas</span>
              <ArrowRight className="w-4 h-4 text-accent" />
            </div>

            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-display font-bold text-white leading-tight">
                Your Life, <br />
                <span className="text-accent">Your Choice</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-white/90 leading-relaxed max-w-2xl">
                Living independently in the community can be challenging, but at Renaissance we believe that life is an amazing journey. With the right support around you, 
                <span className="text-accent font-semibold"> anything is possible!</span>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up-delay">
              <Button variant="glass" size="xl" className="group">
                Talk to us today
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="xl" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                View our services
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 animate-scale-in">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Users className="w-8 h-8 text-accent" />
                </div>
                <div className="text-3xl font-bold text-white">500+</div>
                <div className="text-white/70 text-sm">People Supported</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Home className="w-8 h-8 text-accent" />
                </div>
                <div className="text-3xl font-bold text-white">25+</div>
                <div className="text-white/70 text-sm">Community Homes</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Heart className="w-8 h-8 text-accent" />
                </div>
                <div className="text-3xl font-bold text-white">15+</div>
                <div className="text-white/70 text-sm">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-scale-in">
            <div className="relative z-10">
              <img
                src={heroImage}
                alt="People with disabilities enjoying activities together in a community space"
                className="rounded-3xl shadow-elegant w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"></div>
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -top-6 -left-6 glass-card p-4 rounded-2xl animate-float">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span className="text-white font-medium">Community Living</span>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 glass-card p-4 rounded-2xl animate-float-delay">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-accent rounded-full"></div>
                <span className="text-white font-medium">Your Independence</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};