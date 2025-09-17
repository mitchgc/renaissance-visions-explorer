import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote: "You're only limited by what you think.",
    author: "Barry de Geest"
  },
  {
    quote: "They have always been the only organisation I can rely on to help me live independently.",
    author: "Alan"
  },
  {
    quote: "Renaissance is a good company, they have patience with their clients and are very resourceful.",
    author: "Steven"
  },
  {
    quote: "You all make a difference in my life, and I thank you.",
    author: "Debra"
  },
  {
    quote: "Because of this superb governance Amy has a joyful life, full of interesting experiences, extending her abilities under the watchful eyes of her carers.",
    author: "Arthur (father)"
  }
];

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Header */}
          <div className="inline-flex items-center justify-center mb-12">
            <span className="text-sm font-medium text-gray-600 bg-gray-50 px-6 py-2 rounded-full border border-gray-200 uppercase tracking-wider">
              What People Say
            </span>
          </div>

          {/* Testimonial Card */}
          <div className="bg-[#C2C372] rounded-3xl p-12 relative overflow-hidden min-h-[300px] flex flex-col justify-center">
            {/* Quote */}
            <blockquote className="text-2xl md:text-3xl lg:text-4xl font-light text-[#111727] leading-relaxed mb-8">
              "{testimonials[currentIndex].quote}"
            </blockquote>

            {/* Author */}
            <p className="text-lg font-medium text-[#111727]">
              — {testimonials[currentIndex].author}
            </p>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="bg-white/20 backdrop-blur text-[#111727] p-3 rounded-full hover:bg-white/30 transition-colors border border-white/30"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentIndex ? 'bg-[#111727]' : 'bg-white/50'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="bg-white/20 backdrop-blur text-[#111727] p-3 rounded-full hover:bg-white/30 transition-colors border border-white/30"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};