// ContactPage.jsx
import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { toast } from "react-toastify";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) {
        toast.success("Message sent successfully!");
        setForm({ name: "", email: "", phone: "", message: "" });
      } else toast.error(data.message || "Submission failed.");
    } catch {
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Header */}
      <div className="bg-indigo-600 text-white py-16 text-center">
        <h1 className="text-4xl font-bold">Get in Touch</h1>
        <p className="mt-2 text-lg">We’re here to help you on your government job journey.</p>
      </div>

      {/* Main Section */}
      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10">
        {/* Info */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-indigo-700">SS Coaching Centre</h2>
          <p className="flex items-center"><MapPin className="mr-2 text-indigo-600" /> IGIT Road, Bhubaneswar, Odisha 751030</p>
          <p className="flex items-center"><Phone className="mr-2 text-indigo-600" /> +91-9876543210, +91-9123456789</p>
          <p className="flex items-center"><Mail className="mr-2 text-indigo-600" /> support@sscoaching.com</p>
          <p className="text-gray-600">Office Hours: Mon–Sat, 8 AM – 6 PM</p>

          <div className="space-x-4 mt-4">
            <a href="#" className="text-blue-600 hover:underline">Facebook</a>
            <a href="#" className="text-pink-600 hover:underline">Instagram</a>
            <a href="#" className="text-red-600 hover:underline">YouTube</a>
            <a href="#" className="text-green-600 hover:underline">WhatsApp</a>
          </div>
        </div>

        {/* Contact Form */}
        <form className="bg-white p-6 rounded-xl shadow-lg space-y-4" onSubmit={handleSubmit}>
          <h3 className="text-xl font-bold text-indigo-700 mb-2">Send us a message</h3>
          <input
            name="name" type="text" required placeholder="Your Name"
            value={form.name} onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded focus:outline-indigo-500"
          />
          <input
            name="email" type="email" required placeholder="Your Email"
            value={form.email} onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded focus:outline-indigo-500"
          />
          <input
            name="phone" type="tel" required placeholder="Phone Number"
            value={form.phone} onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded focus:outline-indigo-500"
          />
          <textarea
            name="message" required placeholder="Your Message"
            value={form.message} onChange={handleChange}
            className="w-full p-3 h-32 border border-gray-300 rounded focus:outline-indigo-500"
          />
          <button
            type="submit"
            className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Google Maps */}
      <div className="w-full">
        <iframe
          title="SS Coaching Location"
          className="w-full h-[400px] border-0"
          src="https://www.google.com/maps/embed?...YOUR_LOCATION..."
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}
