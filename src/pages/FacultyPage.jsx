import React from "react";
const faculties = [
    {
      id: 1,
      name: "Dr. Anjali Sharma",
      photo:
        "https://randomuser.me/api/portraits/women/44.jpg",
      designation: "Senior Trainer",
      bio: "Over 15 years of experience in SSC & Banking exams coaching.",
      specializations: ["SSC CGL", "Banking PO", "General Studies"],
    },
    {
      id: 2,
      name: "Mr. Rajesh Kumar",
      photo:
        "https://randomuser.me/api/portraits/men/46.jpg",
      designation: "Subject Expert",
      bio: "Expert in Railway and Technical Exams with 10+ years of teaching.",
      specializations: ["Railway RRB", "Technical Aptitude", "Reasoning"],
    },
    {
      id: 3,
      name: "Ms. Pooja Verma",
      photo:
        "https://randomuser.me/api/portraits/women/55.jpg",
      designation: "Faculty - English & Communication",
      bio: "Specializes in English language & communication skills training.",
      specializations: ["English Language", "Communication", "Interview Prep"],
    },
    // Add more faculty as needed
  ];
  
  const FacultyCard = ({ faculty }) => {
    return (
      <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300">
        <img
          src={faculty.photo}
          alt={faculty.name}
          className="h-32 w-32 rounded-full object-cover mb-4 border-4 border-indigo-300"
          loading="lazy"
        />
        <h3 className="text-xl font-semibold text-indigo-800 mb-1">
          {faculty.name}
        </h3>
        <p className="text-indigo-600 font-medium mb-2">{faculty.designation}</p>
        <p className="text-gray-600 mb-4">{faculty.bio}</p>
        <div className="flex flex-wrap justify-center gap-2">
          {faculty.specializations.map((spec, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-semibold"
            >
              {spec}
            </span>
          ))}
        </div>
      </div>
    );
  };
  
  const FacultyPage = () => {
    return (
      <section className="py-16 bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="mb-12 text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-extrabold text-indigo-700 mb-4">
              Our Expert Faculty
            </h1>
            <p className="text-gray-700 text-lg">
              Learn from our highly experienced and dedicated faculty members,
              who have years of expertise in government exam coaching and
              training.
            </p>
          </div>
  
          {/* Faculty Grid */}
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {faculties.map((faculty) => (
              <FacultyCard key={faculty.id} faculty={faculty} />
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default FacultyPage;
  