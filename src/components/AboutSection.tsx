export const AboutSection = () => {
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
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal text-gray-900 leading-tight max-w-4xl mx-auto">
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
          <div className="bg-[#d4f26a] rounded-3xl p-8 relative overflow-hidden flex flex-col h-full">
            <h3 className="text-2xl md:text-3xl font-medium text-gray-900 mb-6 leading-tight">
              Experience the Renaissance difference through our community
            </h3>

            <div className="mb-8 flex-grow">
              <div className="relative rounded-2xl overflow-hidden aspect-video bg-black/5">
                <iframe
                  src="https://www.youtube.com/embed/nzZ6WQOEc6Q"
                  title="Renaissance Community Video"
                  className="absolute inset-0 w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <div className="mt-auto">
              <button className="bg-gray-900 text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors font-medium">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Video Card */}
          <div className="bg-gray-900 rounded-3xl p-8 relative overflow-hidden flex flex-col h-full">
            <h3 className="text-2xl md:text-3xl font-medium text-white mb-6 leading-tight">
              Hear from the people we support every day
            </h3>

            <div className="mb-8 flex-grow">
              <div className="relative rounded-2xl overflow-hidden aspect-video bg-white/10">
                <iframe
                  src="https://www.youtube.com/embed/eD9GjylI1G4"
                  title="Renaissance Support Stories"
                  className="absolute inset-0 w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <div className="mt-auto">
              <button className="bg-white/20 backdrop-blur text-white px-6 py-3 rounded-full hover:bg-white/30 transition-colors font-medium border border-white/30">
                Our Stories
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};