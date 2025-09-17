import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Users, Heart, Home, Phone, Mail } from "lucide-react";

export default function AboutUs() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            {/* Mission Header */}
            <div className="max-w-5xl mx-auto text-center space-y-8 mb-16">
              {/* Mission Badge */}
              <div className="inline-flex items-center justify-center">
                <span className="text-sm font-medium text-gray-600 bg-white px-6 py-2 rounded-full border border-gray-200 uppercase tracking-wider">
                  About Us
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal text-[#111727] leading-tight max-w-4xl mx-auto">
                Empowering independence for over 20 years
              </h1>

              {/* Description */}
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                From a garage in 2001 to one of New Zealand's most successful Supported Living providers, Renaissance has now assisted 1000's of people to live their dream of independence and community participation.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="text-center mb-16">
              <span className="inline-block px-6 py-2 bg-[#B75A5E] text-white text-sm font-medium rounded-full mb-6">
                OUR STORY
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">From humble beginnings</h2>
            </div>

            <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
              <p className="leading-relaxed">
                Renaissance was born in 2001 from very humble beginnings…..a garage to be precise! The decision to establish Renaissance and provide the service in the way we do was greatly inspired by a group of young disabled people from Auckland, in particular, Martin Williams. Martin was determined to live in his own place and never have to go into institutional care again. He didn't let his muscular dystrophy stop him from attaining his dream, which in 2001 became a reality. Martins struggle with bureaucracy from every angle in his fight to achieve what for most people would be considered the 'norm', made the founders Barry de Geest and Carmel Henry very angry. It took two years for Martin, his family, his friends and numerous support people to get the house and the supports in place. Sadly Martin passed away, but not before achieving his dream.
              </p>

              <p className="leading-relaxed">
                It was Martin Williams determination that turned the founders anger into a decision to set up a Supported Living service then and there. Their dream was to make the process of growing up, leaving home to go flatting, having friends, socialising, working and settling down with someone you love, just as common and acceptable for disabled people as it is for the rest of the population.
              </p>

              <p className="leading-relaxed font-medium text-gray-800">
                So, from a garage, to one of the most successful providers of Supported Living services in New Zealand, Renaissance has now assisted 1000's of people to live their dream.
              </p>

              <p className="leading-relaxed">
                We thank all the disabled people and the families we work with for your determination and courage. A big thank you to our great team who continue to be passionate about what we are trying to achieve and for striving to make our dream a reality for all!
              </p>
            </div>
          </div>
        </section>

        {/* Vision and Mission Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="text-center mb-16">
              <span className="inline-block px-6 py-2 bg-[#4098B8] text-white text-sm font-medium rounded-full mb-6">
                OUR VISION AND MISSION
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">What guides us</h2>
            </div>

            <div className="space-y-16">
              {/* Vision */}
              <div className="text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-[#B75A5E] mb-6">Renaissance Vision</h3>
                <p className="text-xl md:text-2xl text-gray-800 leading-relaxed max-w-4xl mx-auto font-medium">
                  "To promote equity, choice, independence and participation for all people in our community."
                </p>
              </div>

              {/* Mission */}
              <div className="text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-[#4098B8] mb-6">Renaissance Mission</h3>
                <p className="text-lg md:text-xl text-gray-800 leading-relaxed max-w-5xl mx-auto">
                  "As a team we strive for professionalism in all that we do. Our goal is to provide excellent service to our clients through respect, inclusion and innovation thus working alongside our clients so that they can lead and live positive, independent and meaningful lives."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-6 max-w-6xl">
            {/* Section Header */}
            <div className="text-center mb-20">
              <span className="inline-block px-6 py-2 bg-[#C2C372] text-gray-800 text-sm font-medium rounded-full mb-6">
                OUR VALUES
              </span>

              <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8 max-w-4xl mx-auto leading-tight">
                What drives us every day
              </h2>

              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
                The principles that guide everything we do and shape our approach to supporting disabled people in our community.
              </p>
            </div>

            {/* Values List */}
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-center p-6 bg-white rounded-lg shadow-sm border-l-4 border-[#B75A5E]">
                  <div className="w-12 h-12 bg-[#B75A5E] rounded-lg flex items-center justify-center mr-4">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Respect</h3>
                    <p className="text-gray-600 text-sm">Valuing every individual's dignity and worth</p>
                  </div>
                </div>

                <div className="flex items-center p-6 bg-white rounded-lg shadow-sm border-l-4 border-[#4098B8]">
                  <div className="w-12 h-12 bg-[#4098B8] rounded-lg flex items-center justify-center mr-4">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Inclusion</h3>
                    <p className="text-gray-600 text-sm">Ensuring everyone belongs and participates</p>
                  </div>
                </div>

                <div className="flex items-center p-6 bg-white rounded-lg shadow-sm border-l-4 border-[#C2C372]">
                  <div className="w-12 h-12 bg-[#C2C372] rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Innovation</h3>
                    <p className="text-gray-600 text-sm">Continuously improving our approach</p>
                  </div>
                </div>

                <div className="flex items-center p-6 bg-white rounded-lg shadow-sm border-l-4 border-yellow-500">
                  <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Excellence</h3>
                    <p className="text-gray-600 text-sm">Striving for the highest quality in everything</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="flex items-center p-6 bg-white rounded-lg shadow-sm border-l-4 border-indigo-500 max-w-md w-full">
                  <div className="w-12 h-12 bg-indigo-500 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Professionalism</h3>
                    <p className="text-gray-600 text-sm">Maintaining high ethical standards</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-white">
          <div className="container mx-auto px-6 max-w-4xl text-center">
            <span className="inline-block px-6 py-2 bg-gray-800 text-white text-sm font-medium rounded-full mb-6">
              GET IN TOUCH
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Ready to Learn More?</h2>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              Contact our team to discuss how Renaissance can support you or your loved one on the journey to independence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-[#B75A5E] hover:bg-[#a04e4e] text-white px-8 py-6 text-base rounded-full transform transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Us Today
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-[#B75A5E] text-[#B75A5E] hover:bg-[#B75A5E] hover:text-white px-8 py-6 text-base rounded-full transform transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
              >
                <Mail className="w-5 h-5 mr-2" />
                Send an Email
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}