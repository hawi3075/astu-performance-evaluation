"use client";
import React, { useState, ChangeEvent } from "react";
import { useRouter } from "next/navigation";

export default function EmployeeRegistration() {
  const router = useRouter();

  const [form, setForm] = useState({
    fullName: "",
    gender: "",
    dob: "",
    phone: "",
    country: "",
    region: "",
    photo: "",
    position: "",
    level: "",
    experience: "",
    fieldOfStudy: "",
    department: "",
    instName: "",
    emergencyName: "",
    emergencyRelation: "",
    emergencyContact: "",
    emergencyJob: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!form.fullName || !form.phone) {
      setError("Please fill in Full Name and Phone Number");
      return;
    }

    setError("");

    // Read employees from localStorage
    const stored = localStorage.getItem("employees");
    const employees = stored ? JSON.parse(stored) : [];

    // Create new employee object (only necessary fields for employee list table)
    const newEmployee = {
      id: employees.length + 1,
      name: form.fullName,
      department: form.department || "N/A",
      position: form.position || "N/A",
      phone: form.phone,
      status: "Active",
    };

    // Add new employee to array
    employees.push(newEmployee);

    // Save back to localStorage
    localStorage.setItem("employees", JSON.stringify(employees));

    // Redirect to employee-list
    router.push("/employee-list");
  };

  // Reusable form row
  const FormRow = ({
    label,
    name,
    type = "text",
    value,
  }: {
    label: string;
    name: string;
    type?: string;
    value: string;
  }) => (
    <div className="flex items-center gap-4">
      <label htmlFor={name} className="w-40 text-black font-medium">
        {label}:
      </label>
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        placeholder={label}
        className="flex-1 border p-2 rounded text-black"
      />
    </div>
  );

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-200 p-6">
      <h1 className="text-2xl font-bold mb-6 text-black">
        ASTU Employee Registration Form
      </h1>

      {/* Form */}
      <div className="bg-gray-200 rounded-2xl p-6 w-full max-w-4xl grid grid-cols-2 gap-6">
        {/* Personal Information */}
        <div className="flex flex-col gap-3 border-r pr-4">
          <h2 className="font-semibold mb-2 text-black">Personal Information</h2>
          <FormRow label="Full Name" name="fullName" value={form.fullName} />
          <FormRow label="Gender" name="gender" value={form.gender} />
          <FormRow label="Date of Birth" name="dob" type="date" value={form.dob || ""} />
          <FormRow label="Phone No." name="phone" value={form.phone} />
          <FormRow label="Country" name="country" value={form.country} />
          <FormRow label="Region/State" name="region" value={form.region} />
          <FormRow label="Photo URL" name="photo" value={form.photo} />
        </div>

        {/* Education & Emergency Info */}
        <div className="flex flex-col gap-3 pl-4">
          <h2 className="font-semibold mb-2 text-black">Education Background</h2>
          <FormRow label="Position" name="position" value={form.position} />
          <FormRow label="Level" name="level" value={form.level} />
          <FormRow label="Experience" name="experience" value={form.experience} />
          <FormRow label="Field of Study" name="fieldOfStudy" value={form.fieldOfStudy} />
          <FormRow label="Department" name="department" value={form.department} />
          <FormRow label="Institution Name" name="instName" value={form.instName} />

          <h2 className="font-semibold mt-4 mb-2 text-black">Emergency Contact Info</h2>
          <FormRow label="Full Name" name="emergencyName" value={form.emergencyName} />
          <FormRow label="Relation" name="emergencyRelation" value={form.emergencyRelation} />
          <FormRow label="Email/Phone" name="emergencyContact" value={form.emergencyContact} />
          <FormRow label="Job" name="emergencyJob" value={form.emergencyJob} />
        </div>
      </div>

      {error && <p className="text-red-600 mt-3">{error}</p>}

      <button
        onClick={handleSubmit}
        className="mt-6 bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition"
      >
        Submit
      </button>
    </div>
  );
}
