
import React from "react";

import { useState } from "react";
import { Eye, EyeOff, User, AtSign, Lock } from "lucide-react";

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const validateEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!form.name.trim()) {
      setError("Name is required.");
      return;
    }
    if (!form.email.trim()) {
      setError("Email is required.");
      return;
    }
    if (!validateEmail(form.email)) {
      setError("Please enter a valid email.");
      return;
    }
    if (!form.password) {
      setError("Password is required.");
      return;
    }
    if (form.password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }
    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);
    try {
      await new Promise((r) => setTimeout(r, 1500));
      alert(`Registered successfully as ${form.name}`);
      setForm({ name: "", email: "", password: "", confirmPassword: "" });
    } catch {
      setError("Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left image panel */}
      <div className="hidden md:flex w-1/2 bg-gradient-to-tr from-indigo-600 to-indigo-400 items-center justify-center p-12">
        <img
          src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
          alt="Coaching or learning"
          className="rounded-lg shadow-lg object-cover max-w-full max-h-full"
        />
      </div>

      {/* Right form panel */}
      <div className="flex w-full md:w-1/2 bg-white justify-center items-center p-8">
        <div className="max-w-md w-full">
          <h2 className="text-4xl font-extrabold text-indigo-700 mb-8 text-center">
            Create Your Account
          </h2>

          {error && (
            <div
              role="alert"
              className="bg-red-100 text-red-700 px-4 py-2 rounded mb-4 border border-red-400"
            >
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate>
            {/* Name */}
            <label
              htmlFor="name"
              className="block text-gray-700 font-semibold mb-2"
            >
              Full Name
            </label>
            <div className="relative mb-6">
              <User className="absolute left-3 top-3 text-indigo-400" />
              <input
                type="text"
                id="name"
                name="name"
                placeholder="John Doe"
                value={form.name}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 border border-indigo-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
                autoComplete="name"
              />
            </div>

            {/* Email */}
            <label
              htmlFor="email"
              className="block text-gray-700 font-semibold mb-2"
            >
              Email Address
            </label>
            <div className="relative mb-6">
              <AtSign className="absolute left-3 top-3 text-indigo-400" />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 border border-indigo-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
                autoComplete="email"
              />
            </div>

            {/* Password */}
            <label
              htmlFor="password"
              className="block text-gray-700 font-semibold mb-2"
            >
              Password
            </label>
            <div className="relative mb-6">
              <Lock className="absolute left-3 top-3 text-indigo-400" />
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Enter password"
                value={form.password}
                onChange={handleChange}
                className="w-full pl-10 pr-10 py-3 border border-indigo-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
                autoComplete="new-password"
              />
              <button
                type="button"
                className="absolute right-3 top-3 text-indigo-500 hover:text-indigo-700 focus:outline-none"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            {/* Confirm Password */}
            <label
              htmlFor="confirmPassword"
              className="block text-gray-700 font-semibold mb-2"
            >
              Confirm Password
            </label>
            <div className="relative mb-8">
              <Lock className="absolute left-3 top-3 text-indigo-400" />
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm password"
                value={form.confirmPassword}
                onChange={handleChange}
                className="w-full pl-10 pr-10 py-3 border border-indigo-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
                autoComplete="new-password"
              />
              <button
                type="button"
                className="absolute right-3 top-3 text-indigo-500 hover:text-indigo-700 focus:outline-none"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                aria-label={
                  showConfirmPassword ? "Hide password" : "Show password"
                }
              >
                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 rounded-md text-white font-semibold transition ${
                loading
                  ? "bg-indigo-400 cursor-not-allowed"
                  : "bg-indigo-600 hover:bg-indigo-700"
              }`}
            >
              {loading ? "Registering..." : "Register"}
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <a
              href="/login"
              className="text-indigo-600 hover:underline font-semibold"
            >
              Login here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;

