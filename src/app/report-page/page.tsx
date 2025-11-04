"use client";

import React from "react";
import Layout from "../../components/Layout";

const EvaluationSummaryPage: React.FC = () => {
  const employeeFields = [
    { label: "Employee Name", id: "employeeName" },
    { label: "Type of work to evaluation", id: "workType" },
    { label: "Job type", id: "jobType" },
    { label: "Year of evaluation", id: "year" },
    { label: "Evaluation leader", id: "leader" },
  ];

  const markFields = [
    { label: "Mark given by leader out of 70%", id: "leader70" },
    { label: "Mark given by him/her self out of 5%", id: "self5" },
    { label: "Mark given by leader out of 10%", id: "leader10" },
    { label: "Mark given by peer /team out of 15%", id: "peer15" },
  ];

  return (
    <Layout>
      <div className="max-w-5xl mx-auto mt-8 p-6 bg-white shadow-lg rounded-lg font-sans">
        {/* Logo and University Header */}
  
        <h1 className="text-center text-xl font-bold text-black mb-2">
          ADAMA SCIENCE AND TECHNOLOGY UNIVERSITY
        </h1>
        <p className="text-center text-black italic mb-6">
          Vice President for Strategic Management and International Relation
        </p>

        {/* Summary & Term Box */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {[
            "The employee evaluation summary",
            "Evaluation term: Half year",
          ].map((text, idx) => (
            <div
              key={idx}
              className="p-4 border-2 border-gray-300 rounded-lg flex items-center justify-center bg-gray-100"
            >
              <span className="font-semibold text-black">{text}</span>
            </div>
          ))}
        </div>

        {/* Employee Details Box */}
        <div className="p-4 border-2 border-gray-300 rounded-lg mb-6 space-y-4">
          {employeeFields.map((field) => (
            <div key={field.id} className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
              <label className="w-1/3 text-sm font-medium text-black">{field.label}:</label>
              <input
                type="text"
                id={field.id}
                className="flex-grow border-2 border-gray-300 rounded px-2 py-1 text-black"
              />
            </div>
          ))}

          {/* Sign and Date */}
          <div className="flex flex-col md:flex-row items-center gap-4 md:pl-8">
            <label className="w-1/3 text-sm font-medium text-black">Sign:</label>
            <input type="text" className="flex-grow border-2 border-gray-300 rounded px-2 py-1 text-black" />
            <label className="w-1/6 text-sm font-medium text-black">Date:</label>
            <input type="text" className="flex-grow border-2 border-gray-300 rounded px-2 py-1 text-black" />
          </div>
        </div>

        {/* Marks Box */}
        <div className="p-4 border-2 border-gray-300 rounded-lg mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-4">
            {markFields.map((field) => (
              <div key={field.id} className="flex items-center gap-2">
                <label className="text-sm text-black w-2/3">{field.label}</label>
                <input
                  type="text"
                  id={field.id}
                  className="flex-grow border-2 border-gray-300 rounded px-2 py-1 text-black"
                />
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center justify-center space-y-2 border-2 border-gray-300 rounded p-4">
            <span className="font-semibold text-black">Total:</span>
            <input
              type="text"
              className="w-full border-2 border-gray-300 rounded px-2 py-1 text-black"
            />
          </div>
        </div>

        {/* Evaluation Summary Sign Box */}
        <div className="p-4 border-2 border-gray-300 rounded-lg mb-6">
          <div className="flex flex-col md:flex-row items-center gap-4 mb-2">
            <label className="w-2/3 text-sm font-medium text-black">
              Evaluation summary with sign to approve
            </label>
            <label className="w-1/6 text-sm font-medium text-black">Name:</label>
            <input className="w-1/6 border-2 border-gray-300 rounded px-2 py-1 text-black" type="text" />
          </div>

          <div className="flex flex-col md:flex-row items-center gap-4">
            <label className="w-1/6 text-sm font-medium text-black">Sign:</label>
            <input type="text" className="w-1/6 border-2 border-gray-300 rounded px-2 py-1 text-black" />
            <label className="w-1/6 text-sm font-medium text-black">Date:</label>
            <input type="text" className="w-1/6 border-2 border-gray-300 rounded px-2 py-1 text-black" />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default EvaluationSummaryPage;
