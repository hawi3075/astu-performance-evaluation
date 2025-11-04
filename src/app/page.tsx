"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const [role, setRole] = useState<"Admin" | "Employee" | "Manager">("Admin");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!username || !password) {
      setError("Please insert username and password");
      return;
    }

    setError(""); // clear error

    // Redirect based on role
    if (role === "Admin") {
      router.push("/admin-dashboard");
    } else if (role === "Manager") {
      router.push("/manager-dashboard");
    } else if (role === "Employee") {
      router.push("/employee-dashboard");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200">
      {/* Logo */}
      <img src="/astu-logo.png" alt="ASTU Logo" className="w-24 h-24 mb-4" />

      {/* Title */}
      <h1 className="text-2xl font-bold mb-6 text-gray-800 text-center">
        ASTU E-PERFORMANCE MANAGER
      </h1>

      {/* Login Box */}
      <div className="bg-white shadow-lg rounded-2xl p-8 w-96">
        <h2 className="text-center mb-6 font-semibold text-gray-700 text-lg">
          For {role}
        </h2>

        <input
          type="text"
          placeholder={`${role} ID / Username`}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 mb-4 focus:ring-2 focus:ring-indigo-400 focus:outline-none text-gray-800"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 mb-2 focus:ring-2 focus:ring-indigo-400 focus:outline-none text-gray-800"
        />

        {/* Error Message */}
        {error && (
          <p className="text-red-600 text-sm mb-4 text-center">{error}</p>
        )}

        {/* Sign In Button */}
        <button
          onClick={handleLogin}
          className="w-full bg-indigo-600 text-white font-medium py-2 rounded-lg mb-4 hover:bg-indigo-700 transition"
        >
          Sign in
        </button>

        {/* Role Switch Buttons */}
        <div className="flex gap-3 mb-4">
          <button
            onClick={() => setRole("Employee")}
            className={`flex-1 py-2 rounded-lg font-medium transition ${
              role === "Employee"
                ? "bg-green-600 text-white"
                : "bg-green-100 text-green-700 hover:bg-green-200"
            }`}
          >
            Employee
          </button>
          <button
            onClick={() => setRole("Manager")}
            className={`flex-1 py-2 rounded-lg font-medium transition ${
              role === "Manager"
                ? "bg-purple-600 text-white"
                : "bg-purple-100 text-purple-700 hover:bg-purple-200"
            }`}
          >
            Manager
          </button>
          <button
            onClick={() => setRole("Admin")}
            className={`flex-1 py-2 rounded-lg font-medium transition ${
              role === "Admin"
                ? "bg-blue-600 text-white"
                : "bg-blue-100 text-blue-700 hover:bg-blue-200"
            }`}
          >
            Admin
          </button>
        </div>

        {/* Forgot Password */}
        <p className="text-sm text-blue-600 text-center cursor-pointer hover:underline">
          Forgot password?
        </p>
      </div>
    </div>
  );
}
