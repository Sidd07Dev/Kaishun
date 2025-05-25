import React from "react";
import CampaignCarousel from "../components/CampaignCarousel";
const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1581092795366-9444b1f44561?auto=format&fit=crop&w=800&q=80",
      alt: "Classroom learning session",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1573164574572-cb89e39749a0?auto=format&fit=crop&w=800&q=80",
      alt: "Group discussion among students",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1555529669-3a89fc4abf0e?auto=format&fit=crop&w=800&q=80",
      alt: "Exam preparation materials",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
      alt: "Teacher explaining a topic",
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
      alt: "Students taking notes",
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
      alt: "Library with study resources",
    },
  ];
  
  const Gallery = () => {
 
    
    return (
      <section className="bg-gradient-to-r from-blue-50 to-white pt-14 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          {/* Title & Description */}
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-indigo-700 mb-3">
              Gallery
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600 text-lg">
              Take a glimpse of our vibrant learning environment and community
              through moments captured in our gallery.
            </p>
          </div>
  
          {/* Image Grid */}
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {galleryImages.map((img) => (
              <div
                key={img.id}
                className="overflow-hidden rounded-lg shadow-lg cursor-pointer transform hover:scale-105 transition-transform duration-300"
                title={img.alt}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
     
      </section>
    );
  };
  
  export default Gallery;
  