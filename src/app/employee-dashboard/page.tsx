// src/app/employee-dashboard/page.tsx
"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function EmployeeDashboard() {
  const router = useRouter();

  // Dummy download function
  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob(["Performance Result PDF content"], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "performance_result.txt";
    document.body.appendChild(element);
    element.click();
  };

  return (
    <main className="min-h-screen bg-gray-200">
      {/* Top Navigation */}
      <nav className="bg-blue-500 shadow-md flex items-center justify-between px-6 py-3">
        <div className="flex items-center gap-3">
          <Image src="/astu-logo.png" alt="ASTU Logo" width={40} height={40} />
          <span className="text-lg font-bold text-white">
            ASTU Employee Dashboard
          </span>
        </div>
        <div className="flex items-center gap-6">
          <button onClick={() => router.push("/complain")} className="text-white hover:underline">
            Complain
          </button>
          <button onClick={() => router.push("/comment")} className="text-white hover:underline">
            Comment
          </button>
          <button onClick={() => router.push("/result")} className="text-white hover:underline">
            Result
          </button>
          <button onClick={() => router.push("/profile")} className="text-white hover:underline">
            Profile
          </button>
        </div>
      </nav>

      {/* Dashboard Content */}
      <div className="flex flex-col lg:flex-row gap-6 p-6">
        {/* Left Column */}
        <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold text-black mb-4">Tasks</h2>
          <div className="flex flex-col gap-4">
            <button
              onClick={() => router.push("/individual-evaluation")}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              Start Task
            </button>
            <button
              onClick={() => router.push("/peer-evaluation")}
              className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
            >
              Select Peer
            </button>
            <button
              onClick={() => router.push("/result")}
              className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600"
            >
              Check Result
            </button>
            <button
              onClick={handleDownload}
              className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600"
            >
              Download
            </button>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold text-black mb-4">Profile Info</h2>
          <p className="text-black mb-2"><strong>Name:</strong> John Doe</p>
          <p className="text-black mb-2"><strong>Department:</strong> IT</p>
          <p className="text-black mb-2"><strong>Position:</strong> Developer</p>
          <p className="text-black mb-2"><strong>Email:</strong> johndoe@example.com</p>
        </div>
      </div>
    </main>
  );
}
