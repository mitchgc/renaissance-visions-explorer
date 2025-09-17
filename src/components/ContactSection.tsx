import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, MapPin, Clock, Send, MessageCircle } from "lucide-react";
import { useState } from "react";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-background to-primary/5">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <div className="inline-flex items-center space-x-2 glass-card px-4 py-2 rounded-full mb-6">
            <MessageCircle className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Get in touch</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Ready to start your journey?
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're here to answer your questions and help you explore how our services can support you or your loved one. 
            Reach out today for a friendly, no-obligation conversation.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-16">
          {/* Contact Information */}
          <div className="lg:col-span-2 space-y-8 animate-fade-up">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-primary/5 transition-colors">
                  <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Papakura</h4>
                    <a
                      href="https://maps.app.goo.gl/vjRZNYRG5qdCWXPU7"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors block"
                    >
                      29 Grove Road, Papakura
                    </a>
                    <p className="text-muted-foreground">Phone: 09 250 4346</p>
                    <p className="text-sm text-muted-foreground">Hours: 8:00 AM - 4:30 PM</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-primary/5 transition-colors">
                  <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Rosedale</h4>
                    <a
                      href="https://maps.google.com/?q=101+Apollo+Drive,+Rosedale,+Auckland"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors block"
                    >
                      Unit I, 101 Apollo Drive
                    </a>
                    <p className="text-muted-foreground">Phone: 09 250 4346</p>
                    <p className="text-sm text-muted-foreground">By appointment</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-primary/5 transition-colors">
                  <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Hamilton</h4>
                    <a
                      href="https://maps.google.com/?q=169+London+Street,+Hamilton"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors block"
                    >
                      Office 5.2, 169 London Street
                    </a>
                    <p className="text-muted-foreground">Phone: 07 444 5245</p>
                    <p className="text-sm text-muted-foreground">By appointment</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-primary/5 transition-colors">
                  <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Urgent After Hours Support</h4>
                    <p className="text-muted-foreground">09 390 0066</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3 animate-scale-in">
            <div className="bg-white rounded-3xl p-8 shadow-elegant">
              <h3 className="text-2xl font-bold text-foreground mb-6">Send us a message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      required
                      className="h-12"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      required
                      className="h-12"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                      className="h-12"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Service of Interest
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full h-12 px-3 rounded-lg border border-input bg-background focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    >
                      <option value="">Select a service</option>
                      <option value="community-living">Choices in Community Living</option>
                      <option value="supported-living">Supported Living</option>
                      <option value="respite-care">Respite Care</option>
                      <option value="general-inquiry">General Inquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your needs or ask any questions you have..."
                    required
                    className="min-h-32 resize-none"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="hero" size="lg" type="submit" className="flex-1">
                    Send Message
                    <Send className="w-5 h-5" />
                  </Button>
                  <Button variant="outline" size="lg" type="button">
                    Call Instead
                    <Phone className="w-5 h-5" />
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};