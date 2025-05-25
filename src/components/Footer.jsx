import React from 'react';
import { Link } from 'react-router-dom';
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Company Info */}
        <div className="space-y-4">
          <h1 className="text-3xl font-extrabold text-white tracking-wide">
            JobPrep Centre
          </h1>
          <p className="text-sm leading-relaxed">
            Empowering your government job dreams with expert coaching, latest
            study material, and practice tests.
          </p>
          <div className="flex space-x-4 mt-4">
            <a
              href="#"
              className="p-2 rounded-full bg-gray-800 hover:bg-indigo-600 transition"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-gray-800 hover:bg-pink-500 transition"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-gray-800 hover:bg-blue-600 transition"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-gray-800 hover:bg-sky-400 transition"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-6">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <a
                href="#courses"
                className="hover:text-indigo-500 transition-colors"
              >
                Courses
              </a>
            </li>
            <li>
              <a
                href="#notifications"
                className="hover:text-indigo-500 transition-colors"
              >
                Job Notifications
              </a>
            </li>
            <li>
              <a
                href="#results"
                className="hover:text-indigo-500 transition-colors"
              >
                Exam Results
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-indigo-500 transition-colors"
              >
                Contact Us
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-indigo-500 transition-colors">
                FAQ
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-6">Contact Info</h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-indigo-500" />
              <span>IGIT College Road, Sarang, Odisha</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-indigo-500" />
              <span>+91 98765 43210</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-indigo-500" />
              <span>info@jobcoachcenter.in</span>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-6">Newsletter</h3>
          <p className="text-sm mb-4">
            Subscribe to get the latest updates on courses, tests, and job
            alerts.
          </p>
          <form className="flex flex-col space-y-3">
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-3 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-md font-semibold transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} JobPrep Centre. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
