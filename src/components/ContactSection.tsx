import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from "lucide-react";
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

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8 animate-fade-up">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-primary/5 transition-colors">
                  <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                    <p className="text-muted-foreground">0800 SUPPORT (0800 787 7678)</p>
                    <p className="text-sm text-muted-foreground">Available 24/7 for emergencies</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-primary/5 transition-colors">
                  <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Email</h4>
                    <p className="text-muted-foreground">info@renaissancegroup.co.nz</p>
                    <p className="text-sm text-muted-foreground">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-primary/5 transition-colors">
                  <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Address</h4>
                    <p className="text-muted-foreground">123 Community Street</p>
                    <p className="text-muted-foreground">Auckland, New Zealand</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-primary/5 transition-colors">
                  <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Office Hours</h4>
                    <p className="text-muted-foreground">Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p className="text-muted-foreground">Saturday: 9:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="gradient-card p-6 rounded-2xl">
              <h4 className="text-lg font-semibold text-foreground mb-3">Quick Response Guarantee</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                We understand that reaching out for support can be a big step. That's why we guarantee 
                to respond to all inquiries within 24 hours. Our team is here to listen, understand, 
                and help you find the right solutions.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-scale-in">
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