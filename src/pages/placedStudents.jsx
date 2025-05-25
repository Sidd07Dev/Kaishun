import React from "react";
const placedStudents = [
    {
      id: 1,
      name: "Anjali Singh",
      photo: "https://randomuser.me/api/portraits/women/44.jpg",
      company: "TCS",
      companyLogo:
        "https://upload.wikimedia.org/wikipedia/commons/6/6a/Tata_Consultancy_Services_Logo.svg",
      role: "Software Engineer",
      year: "2024",
      rank: 1,
    },
    {
      id: 2,
      name: "Rohit Kumar",
      photo: "https://randomuser.me/api/portraits/men/32.jpg",
      company: "Infosys",
      companyLogo:
        "https://upload.wikimedia.org/wikipedia/commons/7/79/Infosys_logo.svg",
      role: "System Analyst",
      year: "2024",
      rank: 2,
    },
    {
      id: 3,
      name: "Priya Sharma",
      photo: "https://randomuser.me/api/portraits/women/68.jpg",
      company: "Wipro",
      companyLogo:
        "https://upload.wikimedia.org/wikipedia/commons/2/2b/Wipro_Logo.svg",
      role: "IT Consultant",
      year: "2023",
      rank: 3,
    },
    {
      id: 4,
      name: "Aditya Patel",
      photo: "https://randomuser.me/api/portraits/men/45.jpg",
      company: "IBM",
      companyLogo:
        "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
      role: "Data Analyst",
      year: "2023",
      rank: 4,
    },
    {
      id: 5,
      name: "Sneha Reddy",
      photo: "https://randomuser.me/api/portraits/women/12.jpg",
      company: "Accenture",
      companyLogo:
        "https://upload.wikimedia.org/wikipedia/commons/8/8e/Accenture_logo.svg",
      role: "Business Analyst",
      year: "2024",
      rank: 5,
    },
  ];
  
  const PlacedStudents = () => {
    return (
      <section className="bg-gradient-to-r from-blue-50 to-white pt-14 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          {/* Title and Description */}
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-indigo-700 mb-3">
              Our Top Placed Students
            </h2>
            <p className="max-w-2xl mx-auto text-gray-700 text-lg">
              Celebrating the success stories of our students who have secured
              prestigious roles in leading companies.
            </p>
          </div>
  
          {/* Students Grid */}
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {placedStudents.map((student) => (
              <div
                key={student.id}
                className="bg-white rounded-lg shadow-md p-5 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-24 h-24 mb-4 rounded-full overflow-hidden border-4 border-indigo-300">
                  <img
                    src={student.photo}
                    alt={student.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
  
                <h3 className="text-xl font-semibold text-indigo-800">
                  {student.name}
                </h3>
                <p className="text-indigo-600 font-medium mb-2">
                  Rank #{student.rank}
                </p>
  
                <div className="flex items-center space-x-3 mb-2">
                  <img
                    src={student.companyLogo}
                    alt={student.company}
                    className="h-8 w-auto object-contain"
                    loading="lazy"
                  />
                  <span className="text-gray-700 font-semibold">{student.company}</span>
                </div>
  
                <p className="text-gray-600 italic">{student.role}</p>
                <p className="text-sm text-gray-500 mt-1">Batch {student.year}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default PlacedStudents;
  