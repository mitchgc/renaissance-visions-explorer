import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Home, Users, Clock } from "lucide-react";
import communityIcon from "@/assets/community-icon.jpg";
import supportIcon from "@/assets/support-icon.jpg";
import respiteIcon from "@/assets/respite-icon.jpg";

const services = [
  {
    title: "Choices in Community",
    description: "Choices in Community Living (CiCL) is an exciting alternative for individuals with high and complex disability needs currently living in a Residential Service. CiCL is designed to give more choice and control to individuals and families around supports and services.",
    icon: communityIcon,
    color: "from-primary to-primary-glow",
    features: ["Individual choice", "Family involvement", "Flexible support", "Community integration"]
  },
  {
    title: "Supported Living",
    description: "Our Supported Living service provides people with disabilities the opportunity to live independently in their own home while receiving the support they need to achieve their goals and live their best life.",
    icon: supportIcon,
    color: "from-accent to-yellow-400",
    features: ["Independent living", "Personal goals", "24/7 support available", "Skill development"]
  },
  {
    title: "Respite Care",
    description: "Respite care provides short-term relief for primary caregivers, allowing them to take a break while ensuring their loved one receives quality care in a supportive environment.",
    icon: respiteIcon,
    color: "from-purple-500 to-pink-500",
    features: ["Short-term care", "Caregiver relief", "Quality support", "Flexible scheduling"]
  }
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-gradient-to-br from-background to-muted/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <div className="inline-flex items-center space-x-2 glass-card px-4 py-2 rounded-full mb-6">
            <Heart className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">What we do</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-display font-bold text-foreground mb-6">
            Promoting equity, choice, independence, control, and 
            <span className="text-primary"> participation</span> for all people in our community.
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative bg-white rounded-3xl p-8 shadow-card hover:shadow-elegant transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Service Icon */}
              <div className="relative mb-6">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} p-4 mb-4`}>
                  <img 
                    src={service.icon} 
                    alt={`${service.title} icon`}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                  <ArrowRight className="w-3 h-3 text-white" />
                </div>
              </div>

              <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <div className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <Button 
                variant="outline" 
                className="w-full group-hover:border-primary group-hover:text-primary"
              >
                Learn more
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center glass-card p-8 rounded-3xl">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Ready to explore your options?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Every person is unique, and so are their support needs. Let's work together to create a support plan that's right for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">
              Schedule a consultation
              <Users className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg">
              Download our brochure
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};