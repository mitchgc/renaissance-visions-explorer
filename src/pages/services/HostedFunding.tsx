import { Button } from "@/components/ui/button";
import { ArrowLeft, Coins, Phone, Mail, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const HostedFunding = () => {
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
                Hosted Funding
              </h1>
              <p className="text-xl text-white/90 leading-relaxed mb-8">
                We handle the admin so you can control your personal disability budget your way. Focus on your goals while we manage the paperwork.
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
                <div className="flex flex-col items-center">
                  <div className="w-72 h-72 bg-white/20 rounded-3xl flex items-center justify-center backdrop-blur-sm">
                    <Coins className="w-32 h-32 text-white" />
                  </div>
                  <div className="flex gap-3 mt-6">
                    <div className="w-24 h-6 bg-white/30 rounded-full"></div>
                    <div className="w-16 h-6 bg-white/30 rounded-full"></div>
                    <div className="w-32 h-6 bg-white/30 rounded-full"></div>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8">About Hosted Funding</h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Hosted Funding is an excellent option for people who want to have control and manage their personal budget under Enabling Good Lives or Choices in Community Living. We take care of all the administrative responsibilities while you maintain full control over how your funding is used.
            </p>

            <div className="grid md:grid-cols-2 gap-8 my-12">
              <div className="bg-white p-6 rounded-2xl shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">What We Handle</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#B75A5E] rounded-full mt-2"></div>
                    Financial administration and reporting
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#B75A5E] rounded-full mt-2"></div>
                    Compliance with funding requirements
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#B75A5E] rounded-full mt-2"></div>
                    Invoice processing and payments
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#B75A5E] rounded-full mt-2"></div>
                    Budget monitoring and reporting
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">You Control</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#B75A5E] rounded-full mt-2"></div>
                    Choice of support providers
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#B75A5E] rounded-full mt-2"></div>
                    How and when services are delivered
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#B75A5E] rounded-full mt-2"></div>
                    Budget allocation decisions
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#B75A5E] rounded-full mt-2"></div>
                    Goals and outcomes planning
                  </li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-6">Simplifying Budget Management</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Managing your own disability funding can be complex and time-consuming. Our Hosted Funding service removes these barriers by handling all the administrative tasks while ensuring you retain complete control over your support choices and how your budget is spent.
            </p>

            <p className="text-gray-600 leading-relaxed mb-8">
              We provide regular budget reports, ensure compliance with all funding requirements, and offer guidance when needed. This approach gives you the freedom to focus on achieving your goals while having confidence that all administrative aspects are professionally managed.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Take Control of Your Budget</h2>
          <p className="text-xl text-gray-600 mb-8">
            Contact us to learn more about our Hosted Funding services and how we can simplify your budget management.
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

export default HostedFunding;