import { Button } from "@/components/ui/button";
import { ArrowLeft, Home, Shield, Zap, Heart, Phone, Mail, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const SupportedLiving = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#4098B8] to-[#3581a5]">
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
                Supported Living
              </h1>
              <p className="text-xl text-white/90 leading-relaxed mb-8">
                Live independently in your community with goal-focused support that builds skills and connections for a fulfilling life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-white text-[#4098B8] hover:bg-gray-100"
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
                <div className="flex flex-col items-center">
                  <div className="w-72 h-72 bg-white/20 rounded-3xl flex items-center justify-center backdrop-blur-sm mb-6">
                    <Home className="w-32 h-32 text-white" />
                  </div>
                  <div className="flex gap-4">
                    <div className="w-16 h-16 bg-white/15 rounded-full flex items-center justify-center">
                      <Shield className="w-8 h-8 text-white/80" />
                    </div>
                    <div className="w-16 h-16 bg-white/15 rounded-full flex items-center justify-center">
                      <Zap className="w-8 h-8 text-white/80" />
                    </div>
                    <div className="w-16 h-16 bg-white/15 rounded-full flex items-center justify-center">
                      <Heart className="w-8 h-8 text-white/80" />
                    </div>
                  </div>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8">About Supported Living</h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Supported Living is a preferred option for individuals with disabilities who want to live independently in the community, without 24/7 support. Our service focuses on your personal goals and aspirations, working with you to increase your independence and build meaningful relationships in your community.
            </p>

            <div className="grid md:grid-cols-2 gap-8 my-12">
              <div className="bg-white p-6 rounded-2xl shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">What We Offer</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#4098B8] rounded-full mt-2"></div>
                    Personalized support plans based on your goals
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#4098B8] rounded-full mt-2"></div>
                    Skills development for independent living
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#4098B8] rounded-full mt-2"></div>
                    Community connection and relationship building
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#4098B8] rounded-full mt-2"></div>
                    Flexible support as needed
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Support Areas</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#4098B8] rounded-full mt-2"></div>
                    Daily living skills and household management
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#4098B8] rounded-full mt-2"></div>
                    Employment and education support
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#4098B8] rounded-full mt-2"></div>
                    Health and wellness coordination
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#4098B8] rounded-full mt-2"></div>
                    Social and recreational activities
                  </li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-6">Your Journey to Independence</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              The Renaissance team works with you to create a personalized support plan that reflects your unique goals and circumstances. We believe in empowering you to make your own choices while providing the right level of support to help you achieve a safe and fulfilling life.
            </p>

            <p className="text-gray-600 leading-relaxed mb-8">
              Our approach is strength-based, focusing on building your existing skills and developing new ones. We're committed to helping you establish meaningful connections within your community and achieve the level of independence that's right for you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Start Your Independent Living Journey</h2>
          <p className="text-xl text-gray-600 mb-8">
            Contact us to learn more about our Supported Living services and how we can help you achieve your independence goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#4098B8] hover:bg-[#3581a5]">
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

export default SupportedLiving;