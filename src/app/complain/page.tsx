"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ComplainPage() {
  const [complain, setComplain] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (!complain.trim()) {
      setError("Please write a complain.");
      return;
    }

    setError("");

    // Save to localStorage
    const storedComplains = localStorage.getItem("complains");
    const complains = storedComplains ? JSON.parse(storedComplains) : [];
    complains.push({ text: complain, date: new Date().toLocaleString() });
    localStorage.setItem("complains", JSON.stringify(complains));

    setComplain("");
    alert("Complain submitted successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-200 flex flex-col items-center p-6">
      <h1 className="text-2xl font-bold text-black mb-4">Submit Complain</h1>
      <textarea
        value={complain}
        onChange={(e) => setComplain(e.target.value)}
        placeholder="Write your complain here..."
        className="w-full max-w-lg p-3 rounded border border-gray-300 text-black mb-3"
        rows={5}
      />
      {error && <p className="text-red-600 mb-3">{error}</p>}
      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Submit
      </button>
    </div>
  );
}
