import { Button } from "@/components/ui/button";
import { MessageSquare, Calendar, FileText } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gray-50 flex items-center">
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Your Life,<br />
                <span className="relative">
                  Your Choice
                  <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" fill="none">
                    <path d="M2 6C50 2 150 2 198 6" stroke="#EF6B73" strokeWidth="3" strokeLinecap="round"/>
                  </svg>
                </span>
              </h1>

              <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                Dream big. Take risks. Live your way. With the right support, anything is possible.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Button
                size="lg"
                className="bg-[#EF6B73] hover:bg-[#e85961] text-white px-8 py-6 text-base rounded-full"
              >
                Talk to us
              </Button>
            </div>

            {/* Feature Icons */}
            <div className="flex gap-6 pt-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gray-800 flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">Build</div>
                  <div className="text-sm text-gray-600">Community</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gray-800 flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">Share</div>
                  <div className="text-sm text-gray-600">Events</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gray-800 flex items-center justify-center">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">Get</div>
                  <div className="text-sm text-gray-600">Information</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Profile Images and Stats */}
          <div className="relative">
            {/* Profile Images */}
            <div className="relative flex justify-center items-center">
              {/* Main center image */}
              <div className="relative z-20">
                <div className="w-72 h-72 rounded-full overflow-hidden bg-purple-200">
                  <img
                    src={heroImage}
                    alt="Professional woman"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>

              {/* Top right image */}
              <div className="absolute -top-8 right-0 z-10">
                <div className="w-48 h-48 rounded-full overflow-hidden bg-orange-200">
                  <img
                    src={heroImage}
                    alt="Smiling man"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>

              {/* Bottom right image */}
              <div className="absolute -bottom-8 right-8 z-10">
                <div className="w-40 h-40 rounded-full overflow-hidden bg-rose-200">
                  <img
                    src={heroImage}
                    alt="Professional woman smiling"
                    className="w-full h-full object-cover object-bottom"
                  />
                </div>
              </div>
            </div>

            {/* Stats Card */}
            <div className="absolute bottom-0 right-0 bg-gray-800 text-white rounded-2xl p-6 shadow-2xl">
              <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                <div>
                  <div className="text-3xl font-bold">25M+</div>
                  <div className="text-sm text-gray-400">Community</div>
                  <div className="text-sm text-gray-400">Members</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">4.9</div>
                  <div className="text-sm text-gray-400">Ratings</div>
                  <div className="text-sm text-gray-400">From Users</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">98%</div>
                  <div className="text-sm text-gray-400">Positive</div>
                  <div className="text-sm text-gray-400">Feedback</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">14K+</div>
                  <div className="text-sm text-gray-400">Meet and</div>
                  <div className="text-sm text-gray-400">Communicate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};