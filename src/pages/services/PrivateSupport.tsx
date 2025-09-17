import { Button } from "@/components/ui/button";
import { ArrowLeft, HandHeart, Users, Shield, Phone, Mail, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const PrivateSupport = () => {
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
                Private Support
              </h1>
              <p className="text-xl text-white/90 leading-relaxed mb-8">
                Self-funded disability support tailored exactly to your needs and preferences. Premium, personalized care on your terms.
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
                <div className="flex items-center justify-center">
                  <div className="w-80 h-80 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <HandHeart className="w-32 h-32 text-white" />
                  </div>
                  <div className="absolute -top-4 -left-8 w-16 h-16 bg-white/15 rounded-full flex items-center justify-center">
                    <Users className="w-8 h-8 text-white/80" />
                  </div>
                  <div className="absolute -bottom-4 -right-8 w-20 h-20 bg-white/15 rounded-full flex items-center justify-center">
                    <Shield className="w-10 h-10 text-white/80" />
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Premium Private Support Services</h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              At Renaissance Group, we aim to serve. If you have disability support budgets under Enabling Good Lives or Individualised Funding, you can access our range of service options. Our Private Support services offer premium, personalized care that is completely tailored to your individual needs and preferences.
            </p>

            <div className="grid md:grid-cols-2 gap-8 my-12">
              <div className="bg-white p-6 rounded-2xl shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Premium Benefits</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#4098B8] rounded-full mt-2"></div>
                    Completely personalized support plans
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#4098B8] rounded-full mt-2"></div>
                    Choice of highly qualified support workers
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#4098B8] rounded-full mt-2"></div>
                    Flexible scheduling and availability
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#4098B8] rounded-full mt-2"></div>
                    Premium service standards
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Service Areas</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#4098B8] rounded-full mt-2"></div>
                    Personal care and assistance
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#4098B8] rounded-full mt-2"></div>
                    Community access and participation
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#4098B8] rounded-full mt-2"></div>
                    Household and lifestyle support
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#4098B8] rounded-full mt-2"></div>
                    Specialized therapeutic services
                  </li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-6">Your Choice, Your Way</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Private Support gives you complete control over your care arrangements. You choose when, where, and how support is provided, ensuring that services align perfectly with your lifestyle, preferences, and goals.
            </p>

            <p className="text-gray-600 leading-relaxed mb-8">
              Our experienced team works with you to develop a comprehensive support package that meets your exact requirements. Whether you need occasional assistance or comprehensive daily support, we provide the flexibility and quality you deserve with the dignity and respect you expect.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Experience Premium Support</h2>
          <p className="text-xl text-gray-600 mb-8">
            Contact us to learn more about our Private Support services and how we can create a personalized support plan for you.
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

export default PrivateSupport;