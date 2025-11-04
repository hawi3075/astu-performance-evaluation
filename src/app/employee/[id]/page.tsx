"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

interface EmployeeFull {
  id: number;
  name: string;
  gender?: string;
  dob?: string;
  phone?: string;
  country?: string;
  region?: string;
  photo?: string;
  position?: string;
  level?: string;
  experience?: string;
  fieldOfStudy?: string;
  department?: string;
  instName?: string;
  emergencyName?: string;
  emergencyRelation?: string;
  emergencyContact?: string;
  emergencyJob?: string;
  status?: string;
}

export default function EmployeeDetail() {
  const { id } = useParams();
  const router = useRouter();
  const [employee, setEmployee] = useState<EmployeeFull | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("employees");
    if (stored) {
      const employees = JSON.parse(stored);
      const emp = employees.find((e: EmployeeFull) => e.id === Number(id));
      if (emp) setEmployee(emp);
    }
  }, [id]);

  if (!employee) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-200 text-black">
        <p className="text-xl">Employee not found</p>
        <button
          onClick={() => router.push("/employee-list")}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Back to List
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-200 p-6 text-black">
      <button
        onClick={() => router.push("/employee-list")}
        className="mb-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Back to Employee List
      </button>

      <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto text-black">
        <h1 className="text-2xl font-bold mb-4">{employee.name}</h1>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <p><strong>Gender:</strong> {employee.gender || "N/A"}</p>
            <p><strong>Date of Birth:</strong> {employee.dob || "N/A"}</p>
            <p><strong>Phone:</strong> {employee.phone || "N/A"}</p>
            <p><strong>Country:</strong> {employee.country || "N/A"}</p>
            <p><strong>Region:</strong> {employee.region || "N/A"}</p>
            <p><strong>Photo URL:</strong> {employee.photo || "N/A"}</p>
          </div>
          <div>
            <p><strong>Position:</strong> {employee.position || "N/A"}</p>
            <p><strong>Level:</strong> {employee.level || "N/A"}</p>
            <p><strong>Experience:</strong> {employee.experience || "N/A"}</p>
            <p><strong>Field of Study:</strong> {employee.fieldOfStudy || "N/A"}</p>
            <p><strong>Department:</strong> {employee.department || "N/A"}</p>
            <p><strong>Institution Name:</strong> {employee.instName || "N/A"}</p>
          </div>
        </div>

        <div className="mt-4">
          <h2 className="font-semibold mb-2">Emergency Contact Info</h2>
          <p><strong>Name:</strong> {employee.emergencyName || "N/A"}</p>
          <p><strong>Relation:</strong> {employee.emergencyRelation || "N/A"}</p>
          <p><strong>Email/Phone:</strong> {employee.emergencyContact || "N/A"}</p>
          <p><strong>Job:</strong> {employee.emergencyJob || "N/A"}</p>
        </div>

        <div className="mt-4">
          <p><strong>Status:</strong> {employee.status || "Active"}</p>
        </div>
      </div>
    </div>
  );
}
