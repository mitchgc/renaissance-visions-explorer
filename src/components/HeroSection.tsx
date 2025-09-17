import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gray-50 flex items-center">
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="space-y-4">
                <p className="text-sm text-gray-500 uppercase tracking-wider font-medium opacity-0" style={{ animation: 'fadeUp 0.8s ease-out 0.5s forwards' }}>
                  We provide you
                </p>
                <h1 className="text-5xl lg:text-6xl font-bold text-[#111727] leading-relaxed">
                  <span className="inline-block opacity-0" style={{ animation: 'fadeUp 0.8s ease-out 0.5s forwards' }}>Choice today.</span>
                  <br />
                  <span className="inline-block opacity-0 mt-4" style={{ animation: 'fadeUp 0.8s ease-out 0.5s forwards' }}>
                    Independence tomorrow.
                  </span>
                </h1>
              </div>

              <p className="text-lg text-gray-600 leading-loose max-w-xl opacity-0" style={{ animation: 'fadeUp 0.8s ease-out 0.5s forwards' }}>
                Disability support services that help you live your life to the fullest in your community. Dream big, take risks, live your way - with the right support, anything is possible.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-start gap-4 opacity-0" style={{ animation: 'fadeUp 0.8s ease-out 0.5s forwards' }}>
              <Button
                size="lg"
                className="bg-[#B75A5E] hover:bg-[#a04e4e] text-white px-8 py-6 text-base rounded-full transform transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Our Services
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#B75A5E] text-[#B75A5E] hover:bg-[#B75A5E] hover:text-white px-8 py-6 text-base rounded-full transform transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Talk to Us
              </Button>
            </div>
          </div>

          {/* Right Side - Gallery and Stats */}
          <div className="relative grid grid-cols-2 gap-8 h-[500px]">
            {/* Large main image - top left */}
            <div className="row-span-2 rounded-[3rem] overflow-hidden bg-gradient-to-br from-blue-100 to-blue-200 opacity-0" style={{ animation: 'fadeUp 0.8s ease-out 0.5s forwards' }}>
              <img
                src={heroImage}
                alt="Community support and activities"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Top right image */}
            <div className="rounded-[3rem] overflow-hidden bg-gradient-to-br from-purple-100 to-purple-200 opacity-0" style={{ animation: 'fadeUp 0.8s ease-out 0.5s forwards' }}>
              <img
                src={heroImage}
                alt="Independent living support"
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Bottom right - Stats Card */}
            <div className="bg-[#F0F1F2] text-gray-800 rounded-[3rem] p-6 flex flex-col justify-center opacity-0" style={{ animation: 'fadeUp 0.8s ease-out 0.5s forwards' }}>
              <div className="space-y-4">
                <div>
                  <div className="text-2xl font-bold text-gray-800">Over 20 years</div>
                  <div className="text-sm text-gray-800 leading-tight">Empowering Independence</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-800">Thousands of people</div>
                  <div className="text-sm text-gray-800 leading-tight">Living Their Best Lives</div>
                </div>
              </div>
            </div>

            {/* Floating accent elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#4098B8] rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-[#B75A5E] rounded-full opacity-30 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};