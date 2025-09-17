import { Button } from "@/components/ui/button";
import { Heart, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, ChevronRight, ExternalLink } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="gradient-dark text-black">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-black">
              Our Services
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-black/70 hover:text-accent transition-colors flex items-center group">
                  <span className="w-1 h-1 bg-black/30 rounded-full mr-3 group-hover:bg-accent transition-colors"></span>
                  Community Living
                </a>
              </li>
              <li>
                <a href="#services" className="text-black/70 hover:text-accent transition-colors flex items-center group">
                  <span className="w-1 h-1 bg-black/30 rounded-full mr-3 group-hover:bg-accent transition-colors"></span>
                  Supported Living
                </a>
              </li>
              <li>
                <a href="#services" className="text-black/70 hover:text-accent transition-colors flex items-center group">
                  <span className="w-1 h-1 bg-black/30 rounded-full mr-3 group-hover:bg-accent transition-colors"></span>
                  Respite Care
                </a>
              </li>
              <li>
                <a href="#services" className="text-black/70 hover:text-accent transition-colors flex items-center group">
                  <span className="w-1 h-1 bg-black/30 rounded-full mr-3 group-hover:bg-accent transition-colors"></span>
                  Day Programs
                </a>
              </li>
              <li>
                <a href="#services" className="text-black/70 hover:text-accent transition-colors flex items-center group">
                  <span className="w-1 h-1 bg-black/30 rounded-full mr-3 group-hover:bg-accent transition-colors"></span>
                  Skills Development
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-black">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-black/70 hover:text-accent transition-colors flex items-center group">
                  <span className="w-1 h-1 bg-black/30 rounded-full mr-3 group-hover:bg-accent transition-colors"></span>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-black/70 hover:text-accent transition-colors flex items-center group">
                  <span className="w-1 h-1 bg-black/30 rounded-full mr-3 group-hover:bg-accent transition-colors"></span>
                  About Us
                </a>
              </li>
              <li>
                <a href="#values" className="text-black/70 hover:text-accent transition-colors flex items-center group">
                  <span className="w-1 h-1 bg-black/30 rounded-full mr-3 group-hover:bg-accent transition-colors"></span>
                  Our Values
                </a>
              </li>
              <li>
                <a href="#team" className="text-black/70 hover:text-accent transition-colors flex items-center group">
                  <span className="w-1 h-1 bg-black/30 rounded-full mr-3 group-hover:bg-accent transition-colors"></span>
                  Our Team
                </a>
              </li>
              <li>
                <a href="#contact" className="text-black/70 hover:text-accent transition-colors flex items-center group">
                  <span className="w-1 h-1 bg-black/30 rounded-full mr-3 group-hover:bg-accent transition-colors"></span>
                  Contact
                </a>
              </li>
              <li>
                <a href="/careers" className="text-black/70 hover:text-accent transition-colors flex items-center group">
                  <span className="w-1 h-1 bg-black/30 rounded-full mr-3 group-hover:bg-accent transition-colors"></span>
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Locations */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-black">
              Our Locations
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-black/90 font-medium mb-2">Auckland</h4>
                <a
                  href="https://maps.app.goo.gl/vjRZNYRG5qdCWXPU7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black/60 text-sm hover:text-accent transition-colors flex items-center group"
                >
                  <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
                  Papakura Office
                  <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
                <a
                  href="https://maps.google.com/?q=101+Apollo+Drive,+Rosedale,+Auckland"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black/60 text-sm hover:text-accent transition-colors flex items-center group mt-2"
                >
                  <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
                  Rosedale Office
                  <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
                <p className="text-black/60 text-sm mt-2 ml-6">09 250 4346</p>
              </div>

              <div>
                <h4 className="text-black/90 font-medium mb-2">Hamilton</h4>
                <a
                  href="https://maps.google.com/?q=169+London+Street,+Hamilton"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black/60 text-sm hover:text-accent transition-colors flex items-center group"
                >
                  <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
                  London Street
                  <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
                <p className="text-black/60 text-sm mt-2 ml-6">07 444 5245</p>
              </div>

              <div className="pt-3 border-t border-black/10">
                <div className="flex items-center">
                  <Phone className="w-4 h-4 text-accent mr-2" />
                  <div>
                    <p className="text-black/90 text-sm font-medium">After Hours</p>
                    <p className="text-black/60 text-sm">09 390 0066</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-black/10 bg-white">
        <div className="container mx-auto px-6 py-8">
          <div className="flex items-center justify-center">
            <div className="flex items-center space-x-2 text-black/60 text-sm">
              <span>© {currentYear} Renaissance Group</span>
              <span className="text-black/30">•</span>
              <span>All rights reserved</span>
              <Heart className="w-4 h-4 text-primary ml-2" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};