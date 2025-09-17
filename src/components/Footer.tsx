import { Button } from "@/components/ui/button";
import { Heart, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="gradient-dark text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">R</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold">Renaissance Group</span>
                <span className="text-white/70">Supporting Disabled People</span>
              </div>
            </div>

            <p className="text-white/80 leading-relaxed max-w-md">
              For over 15 years, we've been dedicated to supporting people with disabilities to achieve 
              their goals and participate fully in their communities. Your life, your choice.
            </p>

            <div className="flex space-x-4">
              <Button variant="glass" size="icon">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="glass" size="icon">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="glass" size="icon">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="glass" size="icon">
                <Linkedin className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#about" className="text-white/70 hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#services" className="text-white/70 hover:text-accent transition-colors">Our Services</a></li>
              <li><a href="#team" className="text-white/70 hover:text-accent transition-colors">Our Team</a></li>
              <li><a href="#stories" className="text-white/70 hover:text-accent transition-colors">Success Stories</a></li>
              <li><a href="#contact" className="text-white/70 hover:text-accent transition-colors">Contact Us</a></li>
              <li><a href="/careers" className="text-white/70 hover:text-accent transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <div>
                  <p className="text-white/90">0800 SUPPORT</p>
                  <p className="text-white/60 text-sm">24/7 Emergency Line</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <div>
                  <p className="text-white/90">info@renaissancegroup.co.nz</p>
                  <p className="text-white/60 text-sm">General Inquiries</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <div>
                  <p className="text-white/90">123 Community Street</p>
                  <p className="text-white/90">Auckland, New Zealand</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-white/70">
              <span>© {currentYear} Renaissance Group. All rights reserved.</span>
              <Heart className="w-4 h-4 text-accent" />
            </div>
            
            <div className="flex space-x-6 text-sm">
              <a href="/privacy" className="text-white/70 hover:text-accent transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-white/70 hover:text-accent transition-colors">
                Terms of Service
              </a>
              <a href="/accessibility" className="text-white/70 hover:text-accent transition-colors">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};