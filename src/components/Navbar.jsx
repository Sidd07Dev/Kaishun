import React, { useState } from "react";
import { Menu, X, ChevronDown, User, LogOut } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // custom context

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { user, logout } = useAuth(); // Auth context
  const navigate = useNavigate();

  const links = [
    { name: "Home", to: "/" },
    { name: "Courses", to: "/courses" },
    { name: "Test", to: "/test" },
    { name: "Gallery", to: "/gallery" },
    { name: "Placed Students", to: "/placements" },
    { name: "Faculty", to: "/faculty" },
    { name: "Contact", to: "/contactus" },
  ];

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-blue-600">
          Kai<span className="text-gray-800">shun</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 items-center">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              className="text-gray-700 hover:text-blue-600 transition font-medium"
            >
              {link.name}
            </Link>
          ))}

          {!user ? (
            <Link
              to="/login"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Login
            </Link>
          ) : (
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-2 text-gray-800 hover:text-blue-600"
              >
                <User className="w-5 h-5" />
                {user?.name}
                <ChevronDown className="w-4 h-4" />
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded shadow-lg z-50">
                  <Link
                    to="/student/profile"
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={() => setDropdownOpen(false)}
                  >
                    My Profile
                  </Link>
                  <Link
                    to="/student/tests"
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={() => setDropdownOpen(false)}
                  >
                    My Tests
                  </Link>
                  <Link
                    to="/student/history"
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Test History
                  </Link>
                  <Link
                    to="/student/downloads"
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Downloads
                  </Link>
                  <button
                    onClick={() => {
                      logout();
                      navigate("/");
                    }}
                    className="w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white px-6 pb-4 shadow-lg rounded-b-md">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className="block py-2 text-gray-700 hover:text-blue-600 transition font-medium"
            >
              {link.name}
            </Link>
          ))}
          {!user ? (
            <Link
              to="/login"
              onClick={() => setMenuOpen(false)}
              className="block mt-2 bg-blue-600 text-white text-center py-2 rounded hover:bg-blue-700 transition"
            >
              Login
            </Link>
          ) : (
            <div className="pt-4">
              <Link
                to="/student/profile"
                className="block py-2 text-gray-700 hover:text-blue-600"
                onClick={() => setMenuOpen(false)}
              >
                My Profile
              </Link>
              <Link
                to="/student/tests"
                className="block py-2 text-gray-700 hover:text-blue-600"
                onClick={() => setMenuOpen(false)}
              >
                My Tests
              </Link>
              <Link
                to="/student/history"
                className="block py-2 text-gray-700 hover:text-blue-600"
                onClick={() => setMenuOpen(false)}
              >
                Test History
              </Link>
              <Link
                to="/student/downloads"
                className="block py-2 text-gray-700 hover:text-blue-600"
                onClick={() => setMenuOpen(false)}
              >
                Downloads
              </Link>
              <button
                onClick={() => {
                  logout();
                  setMenuOpen(false);
                  navigate("/");
                }}
                className="block text-left w-full py-2 text-red-600 hover:bg-gray-100"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      )}
    </header>
  );
};

export default Navbar;
