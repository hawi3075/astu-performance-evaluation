"use client";
import Image from "next/image";

export default function TopNav() {
  return (
    <nav className="bg-white shadow-md flex items-center justify-between px-6 py-3">
      {/* Left: Logo */}
      <div className="flex items-center gap-3">
        <Image src="/astu-logo.png" alt="ASTU Logo" width={40} height={40} />
        <span className="text-lg font-bold">ASTU Performance Evaluation</span>
      </div>

      {/* Center: Nav Links */}
      <div className="flex gap-6">
        <a href="#" className="text-black hover:underline">
          Complain
        </a>
        <a href="#" className="text-black hover:underline">
          Comment
        </a>
        <a href="#" className="text-black hover:underline">
          Result
        </a>
      </div>

      {/* Right: Profile */}
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-gray-400 rounded-full"></div>
        <span className="text-sm font-medium text-black">Profile</span>
      </div>
    </nav>
  );
}
