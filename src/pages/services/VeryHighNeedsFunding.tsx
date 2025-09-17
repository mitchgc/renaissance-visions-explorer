import { Button } from "@/components/ui/button";
import { ArrowLeft, Globe, Phone, Mail, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const VeryHighNeedsFunding = () => {
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
                Very High Needs Funding
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                Specialized vocational programs that build community participation and employment pathways for individuals with complex support needs.
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
                  <div className="w-64 h-64 bg-white/30 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <Globe className="w-32 h-32 text-gray-700" />
                  </div>
                  <div className="absolute top-0 left-0 w-12 h-12 bg-white/50 rounded-full"></div>
                  <div className="absolute top-8 right-0 w-8 h-8 bg-white/50 rounded-full"></div>
                  <div className="absolute bottom-0 left-8 w-16 h-16 bg-white/50 rounded-full"></div>
                  <div className="absolute bottom-8 right-8 w-10 h-10 bg-white/50 rounded-full"></div>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Very High Needs Funding Programs</h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Our Very High Needs Funding services are designed to support individuals with complex disability needs to develop vocational skills and build meaningful connections within their community. Most communities have a wide variety of resources available, and establishing links into these local networks is an integral part of developing long-term connections.
            </p>

            <div className="grid md:grid-cols-2 gap-8 my-12">
              <div className="bg-white p-6 rounded-2xl shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Vocational Programs</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#C2C372] rounded-full mt-2"></div>
                    Skills assessment and development planning
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#C2C372] rounded-full mt-2"></div>
                    Supported employment opportunities
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#C2C372] rounded-full mt-2"></div>
                    Work experience placements
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#C2C372] rounded-full mt-2"></div>
                    Employer engagement and education
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Community Integration</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#C2C372] rounded-full mt-2"></div>
                    Local resource mapping and connection
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#C2C372] rounded-full mt-2"></div>
                    Social and recreational participation
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#C2C372] rounded-full mt-2"></div>
                    Volunteer opportunities
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#C2C372] rounded-full mt-2"></div>
                    Long-term relationship building
                  </li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-6">Building Pathways to Employment</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              We understand that individuals with very high needs require specialized approaches to vocational development. Our programs are designed to identify and build upon individual strengths while addressing specific challenges and barriers to employment and community participation.
            </p>

            <p className="text-gray-600 leading-relaxed mb-8">
              Through partnerships with local employers, community organizations, and service providers, we create comprehensive support networks that enable long-term success and meaningful participation in community life. Our goal is to strengthen opportunities for genuine inclusion and build lasting connections that enhance quality of life.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Explore Your Opportunities</h2>
          <p className="text-xl text-gray-600 mb-8">
            Contact us to learn more about our Very High Needs Funding programs and how we can support your vocational and community participation goals.
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

export default VeryHighNeedsFunding;