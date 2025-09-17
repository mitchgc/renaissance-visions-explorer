import { Button } from "@/components/ui/button";
import { Star, Users, Award, Heart, Target, Shield } from "lucide-react";

export const AboutSection = () => {
  const values = [
    {
      icon: Heart,
      title: "Compassion",
      description: "We approach every interaction with empathy and understanding"
    },
    {
      icon: Star,
      title: "Excellence",
      description: "We strive for the highest standards in everything we do"
    },
    {
      icon: Users,
      title: "Inclusion",
      description: "We believe everyone deserves to be valued and included"
    },
    {
      icon: Target,
      title: "Empowerment",
      description: "We help people achieve their goals and live independently"
    },
    {
      icon: Shield,
      title: "Trust",
      description: "We build lasting relationships based on respect and reliability"
    },
    {
      icon: Award,
      title: "Quality",
      description: "We deliver services that make a real difference in people's lives"
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full -translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full translate-x-48 translate-y-48"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="space-y-8 animate-fade-up">
            <div className="inline-flex items-center space-x-2 glass-card px-4 py-2 rounded-full">
              <Users className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">About Renaissance Group</span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-display font-bold text-foreground">
              Supporting people to live their 
              <span className="text-primary"> best life</span>
            </h2>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                At Renaissance Group, we believe that every person deserves the opportunity to live with dignity, 
                choice, and independence. For over 15 years, we've been dedicated to supporting people with 
                disabilities to achieve their goals and participate fully in their communities.
              </p>
              
              <p>
                Our approach is person-centered, meaning we work with each individual to understand their unique 
                needs, preferences, and aspirations. We don't believe in one-size-fits-all solutions – instead, 
                we create tailored support plans that evolve with each person's journey.
              </p>
              
              <p>
                From our headquarters in New Zealand, we've built a reputation for delivering quality, 
                compassionate support that truly makes a difference. Our team of dedicated professionals 
                shares our vision of a more inclusive society where everyone has the opportunity to thrive.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg">
                Learn about our team
              </Button>
              <Button variant="outline" size="lg">
                Read success stories
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="space-y-6 animate-scale-in">
            <div className="grid grid-cols-2 gap-6">
              <div className="glass-card p-6 rounded-2xl text-center">
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-muted-foreground">People Supported</div>
              </div>
              <div className="glass-card p-6 rounded-2xl text-center">
                <div className="text-4xl font-bold text-accent mb-2">15+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="glass-card p-6 rounded-2xl text-center">
                <div className="text-4xl font-bold text-primary mb-2">25+</div>
                <div className="text-sm text-muted-foreground">Community Homes</div>
              </div>
              <div className="glass-card p-6 rounded-2xl text-center">
                <div className="text-4xl font-bold text-accent mb-2">98%</div>
                <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
              </div>
            </div>

            <div className="gradient-card p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To promote equity, choice, independence, control, and participation for all people 
                in our community by providing innovative, person-centered support services that 
                empower individuals to live their best life.
              </p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-display font-bold text-foreground mb-4">
            Our Core Values
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            These values guide everything we do and shape how we interact with the people we support, 
            their families, and our community.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="group p-6 rounded-2xl border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-card hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {value.title}
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};