import React from "react";
import { FileStack, ClipboardCheck, GraduationCap } from "lucide-react";

const features = [
  {
    icon: FileStack,
    title: "Daily Practice Sets",
    description:
      "Get daily updated practice questions to build consistency and improve speed.",
  },
  {
    icon: ClipboardCheck,
    title: "Mock Tests",
    description:
      "Take full-length and sectional mocks designed as per latest exam patterns.",
  },
  {
    icon: GraduationCap,
    title: "Expert Faculty",
    description:
      "Learn from experienced teachers who have mentored thousands of aspirants.",
  },
];

const Features = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Our Key Features
        </h2>
        <p className="text-gray-600 mb-12 max-w-xl mx-auto">
          Designed to provide every student the best possible preparation strategy.
        </p>

        <div className="grid gap-8 md:grid-cols-3 sm:grid-cols-2">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-blue-50 hover:bg-blue-100 transition rounded-xl p-6 shadow-sm text-center"
            >
              <feature.icon className="text-blue-600 w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
