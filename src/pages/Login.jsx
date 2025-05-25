import React, { useState } from "react";
import { Eye, EyeOff, AtSign, Lock } from "lucide-react";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const { login: loginUser } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!email.trim()) {
      setError("Email is required.");
      return;
    }
    if (!validateEmail(email)) {
      setError("Please enter a valid email.");
      return;
    }
    if (!password.trim()) {
      setError("Password is required.");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    setLoading(true);
    try {
      await new Promise((r) => setTimeout(r, 1500)); // Simulate backend

      const dummyUser = {
        email,
        name: "John Doe",
        role: "student",
        token: "dummy-auth-token",
      };

      loginUser(dummyUser);
      alert(`Logged in successfully as ${dummyUser.name}`);
    } catch {
      setError("Login failed. Please check your credentials.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Panel */}
      <div className="hidden md:flex w-1/2 bg-gradient-to-tr from-indigo-600 to-indigo-400 items-center justify-center p-12">
        <img
          src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
          alt="Study"
          className="rounded-lg shadow-lg object-cover max-w-full max-h-full"
        />
      </div>

      {/* Right Panel */}
      <div className="flex w-full md:w-1/2 bg-white justify-center items-center p-8">
        <div className="max-w-md w-full">
          <h2 className="text-4xl font-extrabold text-indigo-700 mb-8 text-center">
            Login to Your Account
          </h2>

          {error && (
            <div className="bg-red-100 text-red-700 px-4 py-2 rounded mb-4 border border-red-400" role="alert">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate>
            {/* Email */}
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
              Email Address
            </label>
            <div className="relative mb-6">
              <AtSign className="absolute left-3 top-3 text-indigo-400" />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-indigo-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                autoComplete="username"
                required
              />
            </div>

            {/* Password */}
            <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">
              Password
            </label>
            <div className="relative mb-6">
              <Lock className="absolute left-3 top-3 text-indigo-400" />
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-10 py-3 border border-indigo-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                autoComplete="current-password"
                required
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

            {/* Remember Me */}
            <div className="flex items-center mb-8">
              <input
                type="checkbox"
                id="rememberMe"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-indigo-300 rounded"
              />
              <label htmlFor="rememberMe" className="ml-2 block text-gray-700 cursor-pointer">
                Remember me
              </label>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 rounded-md text-white font-semibold transition ${
                loading ? "bg-indigo-400 cursor-not-allowed" : "bg-indigo-600 hover:bg-indigo-700"
              }`}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          {/* Forgot Password */}
          <p className="mt-6 text-center text-sm text-gray-600">
            Forgot your password?{" "}
            <a href="/forgot-password" className="text-indigo-600 hover:underline font-semibold">
              Reset here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
