import { Button } from "@/components/ui/button";
import { ArrowLeft, Home, Phone, Mail, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const ResidentialServices = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#C2C372] to-[#abb062]">
        <div className="container mx-auto px-6 max-w-6xl">
          <Link
            to="/"
            className="inline-flex items-center text-gray-700 hover:text-gray-900 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>

          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Residential Services
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                24/7 comprehensive care in a safe, supportive home environment with professional staff dedicated to your wellbeing and growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gray-900 text-white hover:bg-gray-800"
                >
                  Get Started
                  <ChevronRight className="w-5 h-5" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-gray-700 text-gray-700 hover:bg-gray-700 hover:text-white"
                >
                  Download Brochure
                </Button>
              </div>
            </div>

            <div className="lg:w-1/2 flex justify-center">
              <div className="relative">
                <div className="flex items-center justify-center">
                  <div className="w-72 h-72 bg-white/30 rounded-3xl flex items-center justify-center backdrop-blur-sm">
                    <Home className="w-32 h-32 text-gray-700" />
                  </div>
                  <div className="absolute top-4 left-4 w-8 h-8 bg-white/50 rounded-full"></div>
                  <div className="absolute top-12 right-4 w-12 h-12 bg-white/50 rounded-full"></div>
                  <div className="absolute bottom-4 left-12 w-6 h-6 bg-white/50 rounded-full"></div>
                  <div className="absolute bottom-12 right-12 w-8 h-8 bg-white/50 rounded-full"></div>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Comprehensive Residential Care</h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Our residential services provide a safe, supportive, and nurturing environment for individuals who require comprehensive care and support in a residential setting. We create homes where individuals can thrive, build relationships, and work toward their personal goals with 24/7 professional support.
            </p>

            <div className="grid md:grid-cols-2 gap-8 my-12">
              <div className="bg-white p-6 rounded-2xl shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Homes Offer</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#C2C372] rounded-full mt-2"></div>
                    24/7 qualified support staff presence
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#C2C372] rounded-full mt-2"></div>
                    Safe and comfortable living environments
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#C2C372] rounded-full mt-2"></div>
                    Personalized care and support plans
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#C2C372] rounded-full mt-2"></div>
                    Community integration opportunities
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Support Areas</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#C2C372] rounded-full mt-2"></div>
                    Daily living skills development
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#C2C372] rounded-full mt-2"></div>
                    Health and medical coordination
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#C2C372] rounded-full mt-2"></div>
                    Social and recreational activities
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#C2C372] rounded-full mt-2"></div>
                    Behavioral and emotional support
                  </li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-6">Creating Home-Like Environments</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              We believe that where you live should feel like home. Our residential services focus on creating warm, welcoming environments where individuals feel valued, respected, and supported to reach their full potential. Each home is designed to promote independence while ensuring safety and comprehensive care.
            </p>

            <p className="text-gray-600 leading-relaxed mb-8">
              Our trained support staff work closely with residents, families, and healthcare professionals to ensure that each person receives the level of care and support they need. We emphasize person-centered approaches that respect individual preferences, promote dignity, and support personal growth and development.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Find Your New Home</h2>
          <p className="text-xl text-gray-600 mb-8">
            Contact us to learn more about our residential services and how we can provide a safe, supportive home environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#C2C372] hover:bg-[#abb062] text-gray-900">
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

export default ResidentialServices;