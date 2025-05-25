import React from "react";
import { BookOpen, FileText, ShieldCheck, BarChart4, Users, Timer } from "lucide-react";

const highlights = [
  {
    icon: BookOpen,
    title: "Expert Faculty",
    description: "Experienced educators who specialize in government exam patterns.",
  },
  {
    icon: FileText,
    title: "Structured Test Series",
    description: "Regular mock tests based on the latest syllabus and exam trends.",
  },
  {
    icon: ShieldCheck,
    title: "Doubt Clearing Sessions",
    description: "Dedicated time slots for resolving all your subject doubts.",
  },
  {
    icon: BarChart4,
    title: "Performance Tracking",
    description: "Detailed analysis to help you track improvement over time.",
  },
  {
    icon: Users,
    title: "Personal Mentorship",
    description: "1-on-1 mentoring to boost your focus and strategy.",
  },
  {
    icon: Timer,
    title: "Time Management Training",
    description: "Learn how to manage your time effectively during exams.",
  },
];

const CourseHighlights = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Course Highlights</h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Everything you need to crack government job exams — curated by experts, focused on success.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="bg-white shadow hover:shadow-lg rounded-2xl p-6 transition duration-300 border-t-4 border-blue-600"
            >
              <item.icon className="text-blue-600 w-10 h-10 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseHighlights;
