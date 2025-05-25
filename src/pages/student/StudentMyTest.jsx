import React from 'react';
import { FileText, PlayCircle, CheckCircle, XCircle, Eye } from 'lucide-react';

const dummyTests = [
  {
    id: 1,
    name: "Logical Reasoning Test",
    date: "2025-05-20",
    status: "completed",
    score: "18/20",
  },
  {
    id: 2,
    name: "Quantitative Aptitude",
    date: "2025-05-22",
    status: "not_attempted",
    score: null,
  },
  {
    id: 3,
    name: "Verbal Ability",
    date: "2025-05-23",
    status: "completed",
    score: "15/20",
  },
];

const StudentMyTest = () => {
  const handleStartTest = (testId) => {
    alert(`Redirecting to start test ID: ${testId}`);
    // You can use navigate(`/test/start/${testId}`) if using react-router
  };

  const handleViewResult = (testId) => {
    alert(`Viewing result for test ID: ${testId}`);
    // You can navigate to `/test/result/${testId}`
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8 bg-gradient-to-r from-blue-50 to-white pt-24 pb-16">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-indigo-700 mb-6">🧪 My Tests</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {dummyTests.map((test) => (
            <div
              key={test.id}
              className="bg-white shadow-lg rounded-xl p-6 border-l-4 transition duration-300 hover:shadow-xl
              border-indigo-600 hover:border-indigo-800"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <FileText className="text-indigo-600" size={24} />
                  <h2 className="text-xl font-semibold text-gray-800">{test.name}</h2>
                </div>
                <span className={`text-sm px-3 py-1 rounded-full font-medium 
                  ${test.status === 'completed' ? 'bg-green-100 text-green-700' :
                    'bg-red-100 text-red-600'}`}>
                  {test.status === 'completed' ? (
                    <div className="flex items-center gap-1">
                      <CheckCircle size={16} /> Attempted
                    </div>
                  ) : (
                    <div className="flex items-center gap-1">
                      <XCircle size={16} /> Not Attempted
                    </div>
                  )}
                </span>
              </div>

              <div className="text-gray-600 text-sm mb-3">
                <p>Date Assigned: <span className="font-medium text-gray-800">{test.date}</span></p>
                {test.status === 'completed' && (
                  <p>Score: <span className="font-bold text-green-600">{test.score}</span></p>
                )}
              </div>

              <div className="flex justify-end">
                {test.status === 'not_attempted' ? (
                  <button
                    onClick={() => handleStartTest(test.id)}
                    className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md font-medium transition"
                  >
                    <PlayCircle size={18} /> Start Test
                  </button>
                ) : (
                  <button
                    onClick={() => handleViewResult(test.id)}
                    className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md font-medium transition"
                  >
                    <Eye size={18} /> View Result
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentMyTest;
