import { Button } from "@/components/ui/button";
import { Heart, Home, Users, Shield, Zap, ChevronRight, HandHeart, Globe, Coins } from "lucide-react";
import { Link } from "react-router-dom";

export const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 bg-gray-100 text-gray-600 text-sm font-medium rounded-full mb-6">
            OUR SERVICES
          </span>

          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8 max-w-4xl mx-auto leading-tight">
            How we support you
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We promote equity, choice, independence, and control through personalized support that helps you live your goals and build community connections.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Service 1: Choices in Community */}
          <Link to="/services/choices-in-community" className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer block">
            <div className="flex flex-col lg:flex-row">
              {/* Visual Side */}
              <div className="lg:w-1/2 bg-gradient-to-br from-[#B75A5E] to-[#a04e4e] p-8 flex items-center justify-center min-h-[320px]">
                <div className="relative">
                  <div className="flex items-center justify-center">
                    <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <Users className="w-16 h-16 text-white" />
                    </div>
                    <div className="absolute -top-4 -left-8 w-16 h-16 bg-white/10 rounded-full flex items-center justify-center">
                      <Heart className="w-8 h-8 text-white/80" />
                    </div>
                    <div className="absolute -bottom-4 -right-8 w-20 h-20 bg-white/10 rounded-full flex items-center justify-center">
                      <Home className="w-10 h-10 text-white/80" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="lg:w-1/2 p-8">
                <h3 className="text-2xl font-bold text-[#111727] mb-4">
                  Choices in Community
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Transition from residential care to independent community living with greater choice and control.
                </p>
              </div>
            </div>
          </Link>

          {/* Service 2: Supported Living */}
          <Link to="/services/supported-living" className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer block">
            <div className="flex flex-col lg:flex-row">
              {/* Visual Side */}
              <div className="lg:w-1/2 bg-gradient-to-br from-[#4098B8] to-[#3581a5] p-8 flex items-center justify-center min-h-[320px]">
                <div className="relative">
                  <div className="flex flex-col items-center">
                    <div className="w-28 h-28 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm mb-4">
                      <Home className="w-14 h-14 text-white" />
                    </div>
                    <div className="flex gap-3">
                      <div className="w-12 h-12 bg-white/15 rounded-full flex items-center justify-center">
                        <Shield className="w-6 h-6 text-white/80" />
                      </div>
                      <div className="w-12 h-12 bg-white/15 rounded-full flex items-center justify-center">
                        <Zap className="w-6 h-6 text-white/80" />
                      </div>
                      <div className="w-12 h-12 bg-white/15 rounded-full flex items-center justify-center">
                        <Heart className="w-6 h-6 text-white/80" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="lg:w-1/2 p-8">
                <h3 className="text-2xl font-bold text-[#111727] mb-4">
                  Supported Living
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Live independently in your community with goal-focused support that builds skills and connections.
                </p>
              </div>
            </div>
          </Link>

          {/* Service 3: Very High Needs Funding */}
          <Link to="/services/very-high-needs-funding" className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer block">
            <div className="flex flex-col lg:flex-row">
              {/* Visual Side */}
              <div className="lg:w-1/2 bg-gradient-to-br from-[#C2C372] to-[#abb062] p-8 flex items-center justify-center min-h-[320px]">
                <div className="relative">
                  <div className="flex items-center justify-center">
                    <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <Globe className="w-12 h-12 text-white" />
                    </div>
                    <div className="absolute top-0 left-0 w-8 h-8 bg-white/30 rounded-full"></div>
                    <div className="absolute top-4 right-0 w-6 h-6 bg-white/30 rounded-full"></div>
                    <div className="absolute bottom-0 left-4 w-10 h-10 bg-white/30 rounded-full"></div>
                    <div className="absolute bottom-4 right-4 w-8 h-8 bg-white/30 rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="lg:w-1/2 p-8">
                <h3 className="text-2xl font-bold text-[#111727] mb-4">
                  Very High Needs Funding
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Specialized vocational programs that build community participation and employment pathways.
                </p>
              </div>
            </div>
          </Link>

          {/* Service 4: Hosted Funding */}
          <Link to="/services/hosted-funding" className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer block">
            <div className="flex flex-col lg:flex-row">
              {/* Visual Side */}
              <div className="lg:w-1/2 bg-gradient-to-br from-[#B75A5E] to-[#a04e4e] p-8 flex items-center justify-center min-h-[320px]">
                <div className="relative">
                  <div className="flex flex-col items-center">
                    <div className="w-28 h-28 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                      <Coins className="w-14 h-14 text-white" />
                    </div>
                    <div className="flex gap-2 mt-4">
                      <div className="w-16 h-4 bg-white/30 rounded-full"></div>
                      <div className="w-12 h-4 bg-white/30 rounded-full"></div>
                      <div className="w-20 h-4 bg-white/30 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="lg:w-1/2 p-8">
                <h3 className="text-2xl font-bold text-[#111727] mb-4">
                  Hosted Funding
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We handle the admin so you can control your personal disability budget your way.
                </p>
              </div>
            </div>
          </Link>

          {/* Service 5: Private Support */}
          <Link to="/services/private-support" className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer block">
            <div className="flex flex-col lg:flex-row">
              {/* Visual Side */}
              <div className="lg:w-1/2 bg-gradient-to-br from-[#4098B8] to-[#3581a5] p-8 flex items-center justify-center min-h-[320px]">
                <div className="relative">
                  <div className="flex items-center justify-center">
                    <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <HandHeart className="w-16 h-16 text-white" />
                    </div>
                    <div className="absolute -top-2 -left-4 w-12 h-12 bg-white/15 rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-white/80" />
                    </div>
                    <div className="absolute -bottom-2 -right-4 w-16 h-16 bg-white/15 rounded-full flex items-center justify-center">
                      <Shield className="w-8 h-8 text-white/80" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="lg:w-1/2 p-8">
                <h3 className="text-2xl font-bold text-[#111727] mb-4">
                  Private Support
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Self-funded disability support tailored exactly to your needs and preferences.
                </p>
              </div>
            </div>
          </Link>

          {/* Service 6: Residential Services */}
          <Link to="/services/residential-services" className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer block">
            <div className="flex flex-col lg:flex-row">
              {/* Visual Side */}
              <div className="lg:w-1/2 bg-gradient-to-br from-[#C2C372] to-[#abb062] p-8 flex items-center justify-center min-h-[320px]">
                <div className="relative">
                  <div className="flex items-center justify-center">
                    <div className="w-28 h-28 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                      <Home className="w-14 h-14 text-white" />
                    </div>
                    <div className="absolute top-2 left-2 w-6 h-6 bg-white/30 rounded-full"></div>
                    <div className="absolute top-8 right-2 w-8 h-8 bg-white/30 rounded-full"></div>
                    <div className="absolute bottom-2 left-8 w-4 h-4 bg-white/30 rounded-full"></div>
                    <div className="absolute bottom-8 right-8 w-6 h-6 bg-white/30 rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="lg:w-1/2 p-8">
                <h3 className="text-2xl font-bold text-[#111727] mb-4">
                  Residential Services
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  24/7 comprehensive care in a safe, supportive home environment with professional staff.
                </p>
              </div>
            </div>
          </Link>
        </div>


      </div>
    </section>
  );
};