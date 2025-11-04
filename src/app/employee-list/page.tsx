"use client";

import { useEffect, useState } from "react";

interface Employee {
  id: number;
  name: string;
  department: string;
  position: string;
  phone: string;
  status: string;
}

export default function EmployeeList() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Read employees from localStorage only
    const stored = localStorage.getItem("employees");
    if (stored) {
      setEmployees(JSON.parse(stored));
    }
    setLoading(false);
  }, []);

  return (
    <div className="min-h-screen bg-gray-200">
      {/* Navbar */}
      <nav
        className="px-6 py-3 flex justify-between items-center"
        style={{ backgroundColor: "#005bb5" }}
      >
        <div className="flex items-center space-x-4">
          <img src="/astu-logo.png" alt="ASTU Logo" className="h-10" />
          <span className="text-lg font-bold text-white">
            Employee Management
          </span>
        </div>
        <div className="flex space-x-6">
          <a href="/dashboard" className="text-white hover:underline">
            Dashboard
          </a>
          <a href="/employee-list" className="text-white hover:underline">
            Employees
          </a>
          <a href="/departments" className="text-white hover:underline">
            Departments
          </a>
          <a href="/reports" className="text-white hover:underline">
            Reports
          </a>
        </div>
      </nav>

      {/* Page Title */}
      <div className="p-6">
        <h1 className="text-2xl font-bold text-gray-800">Employee Data List</h1>
      </div>

      {/* Table */}
      <div className="p-6">
        {loading ? (
          <p className="text-gray-800">Loading employees...</p>
        ) : employees.length === 0 ? (
          <p className="text-gray-800">No employees found...</p>
        ) : (
          <div className="overflow-x-auto bg-white shadow rounded-lg">
            <table className="min-w-full border border-gray-300">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-3 border text-left text-black">Employee Name</th>
                  <th className="p-3 border text-left text-black">Department</th>
                  <th className="p-3 border text-left text-black">Position</th>
                  <th className="p-3 border text-left text-black">Phone Number</th>
                  <th className="p-3 border text-left text-black">Status</th>
                  <th className="p-3 border text-left text-black">View Details</th>
                </tr>
              </thead>
              <tbody>
                {employees.map((emp) => (
                  <tr key={emp.id} className="hover:bg-gray-50">
                    <td className="p-3 border text-black">{emp.name}</td>
                    <td className="p-3 border text-black">{emp.department}</td>
                    <td className="p-3 border text-black">{emp.position}</td>
                    <td className="p-3 border text-black">{emp.phone}</td>
                    <td className="p-3 border text-black">{emp.status}</td>
                    <td className="p-3 border text-black">
                      <button
                        className="text-blue-600 hover:underline"
                        onClick={() => window.location.href = `/employee/${emp.id}`}
                      >
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-gray-200 text-center p-4 mt-10 text-sm text-gray-600">
        © {new Date().getFullYear()} ASTU. All rights reserved.
      </footer>
    </div>
  );
}
