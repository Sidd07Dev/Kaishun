import React from "react";
import { useState } from "react";
import { ChevronLeft, ChevronRight, MessageSquare } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "SSC Aspirant",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text:
      "The mock tests and expert guidance helped me improve my score drastically. Highly recommend!",
  },
  {
    id: 2,
    name: "Amit Kumar",
    role: "Railway Exam Candidate",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    text:
      "The daily practice sets were really helpful to build my confidence. Great faculty support!",
  },
  {
    id: 3,
    name: "Sneha Reddy",
    role: "Banking Aspirant",
    image: "https://randomuser.me/api/portraits/women/46.jpg",
    text:
      "I cleared my IBPS exam with good marks thanks to the detailed study materials and tests.",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const length = testimonials.length;

  const nextTestimonial = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevTestimonial = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8 text-gray-800 flex justify-center items-center gap-2">
          <MessageSquare className="w-6 h-6 text-indigo-600" />
          What Our Students Say
        </h2>

        <div className="relative bg-white rounded-lg shadow-md p-8">
          {testimonials.map((t, index) =>
            index === current ? (
              <div key={t.id} className="transition-opacity duration-500">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                />
                <p className="text-gray-700 italic text-lg mb-4">"{t.text}"</p>
                <h3 className="text-xl font-semibold text-gray-900">{t.name}</h3>
                <p className="text-indigo-600">{t.role}</p>
              </div>
            ) : null
          )}

          {/* Controls */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-indigo-100 text-indigo-600 rounded-full p-2 hover:bg-indigo-200 transition"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-indigo-100 text-indigo-600 rounded-full p-2 hover:bg-indigo-200 transition"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
