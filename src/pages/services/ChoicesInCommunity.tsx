import { Button } from "@/components/ui/button";
import { ArrowLeft, Users, Heart, Home, Phone, Mail, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const ChoicesInCommunity = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#B75A5E] to-[#a04e4e]">
        <div className="container mx-auto px-6 max-w-6xl">
          <Link
            to="/"
            className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>

          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                Choices in Community
              </h1>
              <p className="text-xl text-white/90 leading-relaxed mb-8">
                Transition from residential care to independent community living with greater choice and control over your supports and services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-white text-[#B75A5E] hover:bg-gray-100"
                >
                  Get Started
                  <ChevronRight className="w-5 h-5" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white/10"
                >
                  Download Brochure
                </Button>
              </div>
            </div>

            <div className="lg:w-1/2 flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Users className="w-32 h-32 text-white" />
                </div>
                <div className="absolute -top-8 -left-12 w-24 h-24 bg-white/10 rounded-full flex items-center justify-center">
                  <Heart className="w-12 h-12 text-white/80" />
                </div>
                <div className="absolute -bottom-8 -right-12 w-28 h-28 bg-white/10 rounded-full flex items-center justify-center">
                  <Home className="w-14 h-14 text-white/80" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">What is Choices in Community Living?</h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Choices in Community Living (CiCL) is an exciting alternative for individuals with high and complex disability needs currently living in a Residential Service. This innovative approach is designed to give more choice and control to individuals and families around supports and services.
            </p>

            <div className="grid md:grid-cols-2 gap-8 my-12">
              <div className="bg-white p-6 rounded-2xl shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Benefits</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#B75A5E] rounded-full mt-2"></div>
                    Greater choice and control over your support services
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#B75A5E] rounded-full mt-2"></div>
                    Family involvement in planning and decision-making
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#B75A5E] rounded-full mt-2"></div>
                    Flexible support arrangements
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#B75A5E] rounded-full mt-2"></div>
                    Community integration opportunities
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Who is it for?</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#B75A5E] rounded-full mt-2"></div>
                    Individuals with high and complex disability needs
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#B75A5E] rounded-full mt-2"></div>
                    Currently living in residential services
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#B75A5E] rounded-full mt-2"></div>
                    Those seeking more independence
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#B75A5E] rounded-full mt-2"></div>
                    Families wanting more involvement
                  </li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Approach</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              We work closely with you and your family to develop a personalized support plan that reflects your goals, preferences, and aspirations. Our team provides ongoing guidance throughout your transition to community living, ensuring you have the tools and resources needed to thrive independently.
            </p>

            <p className="text-gray-600 leading-relaxed mb-8">
              From finding suitable accommodation to connecting with local services and building meaningful relationships in your community, we're here to support every step of your journey toward greater independence and self-determination.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Learn More?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Contact our team to discuss how Choices in Community Living could work for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#B75A5E] hover:bg-[#a04e4e]">
              <Phone className="w-5 h-5 mr-2" />
              Call Us Today
            </Button>
            <Button variant="outline" size="lg">
              <Mail className="w-5 h-5 mr-2" />
              Send an Email
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChoicesInCommunity;