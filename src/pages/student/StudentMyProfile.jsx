import React, { useState } from "react";
import {
  User,
  Mail,
  Phone,
  Calendar,
  GraduationCap,
  Home,
  Edit,
  Save,
  X,
} from "lucide-react";

const StudentMyProfile = () => {
  const initialStudent = {
    name: "Rohit Kumar",
    email: "rohit.kumar@example.com",
    phone: "+91 9876543210",
    dob: "2002-04-15",
    course: "MCA - Master of Computer Applications",
    rollNumber: "MCA2025-032",
    address: "Hostel Block B, IGIT Sarang, Odisha",
    admissionYear: "2023",
    profileImg:
      "https://ui-avatars.com/api/?name=Rohit+Kumar&background=0D8ABC&color=fff",
  };

  const [student, setStudent] = useState(initialStudent);
  const [editMode, setEditMode] = useState(false);
  const [editedStudent, setEditedStudent] = useState(initialStudent);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedStudent({ ...editedStudent, [name]: value });
  };

  const handleSave = () => {
    setStudent(editedStudent);
    setEditMode(false);
  };

  const handleCancel = () => {
    setEditedStudent(student);
    setEditMode(false);
  };

  return (
    <div className="min-h-screen bg-indigo-50 py-10 px-4 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-xl max-w-3xl w-full p-8">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-indigo-500 shadow-md">
            <img
              src={student.profileImg}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex-1">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-indigo-700 flex items-center gap-2">
                <User className="w-6 h-6 text-indigo-500" />
                {student.name}
              </h2>
              {!editMode ? (
                <button
                  onClick={() => setEditMode(true)}
                  className="text-indigo-600 hover:text-indigo-800"
                >
                  <Edit className="w-5 h-5" />
                </button>
              ) : (
                <div className="flex gap-2">
                  <button
                    onClick={handleSave}
                    className="text-green-600 hover:text-green-800"
                  >
                    <Save className="w-5 h-5" />
                  </button>
                  <button
                    onClick={handleCancel}
                    className="text-red-600 hover:text-red-800"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              )}
            </div>

            <div className="space-y-3 text-gray-700">
              {[
                { icon: GraduationCap, label: "Roll No", key: "rollNumber" },
                { icon: Mail, label: "Email", key: "email" },
                { icon: Phone, label: "Phone", key: "phone" },
                { icon: Calendar, label: "Date of Birth", key: "dob" },
                { icon: GraduationCap, label: "Course", key: "course" },
                { icon: Calendar, label: "Admission Year", key: "admissionYear" },
                { icon: Home, label: "Address", key: "address" },
              ].map(({ icon: Icon, label, key }) => (
                <div key={key} className="flex items-center gap-2">
                  <Icon className="w-5 h-5 text-indigo-500" />
                  <span className="font-medium w-40">{label}:</span>
                  {editMode ? (
                    <input
                      type="text"
                      name={key}
                      value={editedStudent[key]}
                      onChange={handleChange}
                      className="flex-1 px-2 py-1 border border-indigo-300 rounded-md"
                    />
                  ) : (
                    <span>{student[key]}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentMyProfile;