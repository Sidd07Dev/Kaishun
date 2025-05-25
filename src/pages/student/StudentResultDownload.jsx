import React from "react";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { Download, FileText } from "lucide-react";

const dummyResults = [
  {
    id: 1,
    testName: "Logical Reasoning",
    date: "2025-05-20",
    score: "18/20",
    percentage: 90,
    status: "Passed",
    duration: "60 mins",
  },
  {
    id: 2,
    testName: "Quantitative Aptitude",
    date: "2025-05-22",
    score: "14/20",
    percentage: 70,
    status: "Passed",
    duration: "60 mins",
  },
  {
    id: 3,
    testName: "Verbal Ability",
    date: "2025-05-24",
    score: "10/20",
    percentage: 50,
    status: "Failed",
    duration: "45 mins",
  },
];

const StudentResultDownload = () => {
  const generateAdvancedPDF = (result) => {
    const doc = new jsPDF();

    // Watermark
    doc.setFontSize(50);
    doc.setTextColor(220, 220, 220);
    doc.text("Kaishun", 35, 160, { angle: 45 });

    // Header
    doc.setFontSize(22);
    doc.setTextColor(40, 40, 90);
    doc.text("Test Result Report", 14, 22);

    doc.setFontSize(12);
    doc.setTextColor(80, 80, 80);
    doc.text("Kaishun Institute Of Study", 14, 30);
    doc.text(`Date: ${new Date().toLocaleDateString()}`, 160, 30);

    // Details section
    autoTable(doc, {
      startY: 40,
      styles: { fillColor: [245, 245, 255] },
      head: [["Field", "Value"]],
      body: [
        ["Name", "John Doe"],
        ["Test Name", result.testName],
        ["Test Date", result.date],
        ["Score", result.score],
        ["Percentage", `${result.percentage}%`],
        ["Duration", result.duration],
        ["Status", result.status],
      ],
      headStyles: {
        fillColor: [0, 102, 204],
        textColor: 255,
        halign: "center",
      },
      bodyStyles: {
        textColor: 30,
        halign: "left",
      },
    });

    // Signature
    doc.setFontSize(12);
    doc.setTextColor(50, 50, 50);
    const finalY = doc.lastAutoTable.finalY + 20;
    doc.text("Authorized Signature", 14, finalY);
    doc.line(14, finalY + 2, 80, finalY + 2); // signature line

        // Watermark
        doc.setFontSize(50);
        doc.setTextColor(220, 220, 220);
        doc.text("Kaishun", 35, 160, { angle: 45 });
    // Footer
    doc.setFontSize(10);
    doc.setTextColor(120);
    doc.text(
      "This is a system generated result, no signature is required.",
      14,
      doc.internal.pageSize.height - 12
    );
    doc.text(
      "For official use only. Property of Kaishun Institute of Study.",
      14,
      doc.internal.pageSize.height - 6
    );

    doc.save(`Result_${result.testName.replace(/\s/g, "_")}.pdf`);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 bg-gradient-to-r from-blue-50 to-white pt-24 pb-16">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-indigo-700 mb-6">
          📄 My Test Results
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {dummyResults.map((result) => (
            <div
              key={result.id}
              className="bg-white shadow-lg border-l-4 rounded-lg p-6 border-indigo-600 hover:border-indigo-800 transition duration-300"
            >
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-2">
                  <FileText className="text-indigo-600" />
                  <h3 className="text-lg font-semibold text-gray-800">
                    {result.testName}
                  </h3>
                </div>
                <span
                  className={`text-sm px-2 py-1 rounded-full font-medium ${
                    result.status === "Passed"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  {result.status}
                </span>
              </div>

              <div className="text-sm text-gray-600 space-y-1 mb-4">
                <p>
                  <strong>Date:</strong> {result.date}
                </p>
                <p>
                  <strong>Score:</strong> {result.score}
                </p>
                <p>
                  <strong>Percentage:</strong> {result.percentage}%
                </p>
                <p>
                  <strong>Duration:</strong> {result.duration}
                </p>
              </div>

              <button
                onClick={() => generateAdvancedPDF(result)}
                className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md font-medium"
              >
                <Download size={18} /> Download Result PDF
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentResultDownload;
