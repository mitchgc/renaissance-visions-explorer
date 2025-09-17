export const MissionSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Mission Header */}
        <div className="max-w-5xl mx-auto text-center space-y-8 mb-16">
          {/* Mission Badge */}
          <div className="inline-flex items-center justify-center">
            <span className="text-sm font-medium text-gray-600 bg-white px-6 py-2 rounded-full border border-gray-200 uppercase tracking-wider">
              Our Mission
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal text-[#111727] leading-tight max-w-4xl mx-auto">
            Supporting people to live their best life
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            At Renaissance Group, we believe that every person deserves the opportunity to live with dignity, choice, and independence. For over 15 years, we've been dedicated to supporting people with disabilities to achieve their goals and participate fully in their communities.
          </p>
        </div>

        {/* Video Cards */}
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Video Card */}
          <div className="bg-[#C2C372] rounded-3xl p-8 relative overflow-hidden flex flex-col justify-between h-full">
            <h3 className="text-2xl md:text-3xl font-medium text-[#111727] leading-tight self-start mb-8">
              Experience the Renaissance difference
            </h3>

            <div className="flex flex-col items-end justify-end flex-grow space-y-4">
              <div className="relative rounded-2xl overflow-hidden aspect-video bg-black/5 w-full">
                <iframe
                  src="https://www.youtube-nocookie.com/embed/nzZ6WQOEc6Q?rel=0&modestbranding=1&controls=1"
                  title="Renaissance Community Video"
                  className="absolute inset-0 w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>

              <button className="bg-[#111727] text-white px-6 py-3 rounded-full hover:bg-[#1a1f33] transition-colors font-medium self-start">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Video Card */}
          <div className="bg-[#111727] rounded-3xl p-8 relative overflow-hidden flex flex-col justify-between h-full">
            <h3 className="text-2xl md:text-3xl font-medium text-white leading-tight self-start mb-8">
              Hear from the people we support every day
            </h3>

            <div className="flex flex-col items-end justify-end flex-grow space-y-4">
              <div className="relative rounded-2xl overflow-hidden aspect-video bg-white/10 w-full">
                <iframe
                  src="https://www.youtube-nocookie.com/embed/eD9GjylI1G4?rel=0&modestbranding=1&controls=1"
                  title="Renaissance Support Stories"
                  className="absolute inset-0 w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>

              <button className="bg-white/20 backdrop-blur text-white px-6 py-3 rounded-full hover:bg-white/30 transition-colors font-medium border border-white/30 self-start">
                Our Stories
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};