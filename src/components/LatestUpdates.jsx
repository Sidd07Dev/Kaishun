import React from "react";
import {
    Briefcase,
    Download,
    CheckCircle,
  } from "lucide-react";
  
  const updates = {
    jobs: [
      {
        title: "SSC CGL 2025 Notification Out",
        date: "24 May 2025",
        link: "#",
      },
      {
        title: "RRB ALP 2025 - 2000 Vacancies",
        date: "22 May 2025",
        link: "#",
      },
    ],
    admitCards: [
      {
        title: "IBPS PO Prelims Admit Card",
        date: "20 May 2025",
        link: "#",
      },
      {
        title: "SSC CHSL Tier 1 Admit Card",
        date: "18 May 2025",
        link: "#",
      },
    ],
    results: [
      {
        title: "Railway NTPC CBT-1 Result",
        date: "17 May 2025",
        link: "#",
      },
      {
        title: "SSC MTS 2024 Final Result",
        date: "15 May 2025",
        link: "#",
      },
    ],
  };
  
  const CardSection = ({ icon: Icon, title, data, color }) => (
    <div className="bg-white shadow rounded-xl p-6 border-t-4" style={{ borderColor: color }}>
      <div className="flex items-center mb-4">
        <Icon className="w-6 h-6 text-white p-1 rounded-full" style={{ backgroundColor: color }} />
        <h3 className="ml-2 text-lg font-semibold text-gray-800">{title}</h3>
      </div>
      <ul className="space-y-3 text-left text-sm">
        {data.map((item, idx) => (
          <li key={idx} className="flex flex-col">
            <a href={item.link} className="text-blue-600 hover:underline font-medium">
              {item.title}
            </a>
            <span className="text-gray-500 text-xs">{item.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
  
  const LatestUpdates = () => {
    return (
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Latest Updates</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <CardSection
              icon={Briefcase}
              title="Job Notifications"
              data={updates.jobs}
              color="#1D4ED8"
            />
            <CardSection
              icon={Download}
              title="Admit Cards"
              data={updates.admitCards}
              color="#059669"
            />
            <CardSection
              icon={CheckCircle}
              title="Exam Results"
              data={updates.results}
              color="#D97706"
            />
          </div>
        </div>
      </section>
    );
  };
  
  export default LatestUpdates;
  