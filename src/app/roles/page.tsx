// src/app/roles/page.tsx
"use client";

import React from "react";

interface Role {
  role: string;
  description: string;
  permissions: string;
}

const rolesData: Role[] = [
  { role: "Administrator", description: "Full access to all features and data.", permissions: "All" },
  { role: "Manager", description: "Access to manage team members and their performance.", permissions: "Team Management" },
  { role: "Employee", description: "Access to personal performance data and goals.", permissions: "Self-Service" },
];

export default function Roles() {
  return (
    <div className="min-h-screen bg-gray-200 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow p-6">
        <h2 className="text-lg font-bold mb-6">Acme Co</h2>
        <nav className="space-y-4 text-gray-700">
          <a href="#" className="flex items-center space-x-2 hover:text-blue-600">
            <span>🏠</span>
            <span>Home</span>
          </a>
          <a href="#" className="flex items-center space-x-2 hover:text-blue-600">
            <span>📝</span>
            <span>Reviews</span>
          </a>
          <a href="#" className="flex items-center space-x-2 hover:text-blue-600">
            <span>🏆</span>
            <span>Goals</span>
          </a>
          <a href="#" className="flex items-center space-x-2 hover:text-blue-600">
            <span>👥</span>
            <span>People</span>
          </a>
          <a href="#" className="flex items-center space-x-2 bg-gray-200 px-3 py-2 rounded">
            <span>⚙️</span>
            <span>Settings</span>
          </a>
        </nav>
        <div className="mt-auto text-gray-500 text-sm">Admin</div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-2">Roles & Permissions</h1>
        <p className="text-gray-600 mb-6">Manage roles and permissions for your organization</p>

        <div className="bg-white shadow rounded-lg overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left text-black font-medium">Role</th>
                <th className="px-6 py-3 text-left text-black font-medium">Description</th>
                <th className="px-6 py-3 text-left text-black font-medium">Permissions</th>
                <th className="px-6 py-3 text-left text-black font-medium">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {rolesData.map((role) => (
                <tr key={role.role} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-black">{role.role}</td>
                  <td className="px-6 py-4 text-black">{role.description}</td>
                  <td className="px-6 py-4 text-black">{role.permissions}</td>
                  <td className="px-6 py-4 text-blue-600 hover:underline cursor-pointer">Edit</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <button className="mt-6 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Create Role
        </button>
      </main>
    </div>
  );
}
