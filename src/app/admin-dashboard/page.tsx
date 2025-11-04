"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import styles from "@/styles/Home.module.css";

interface Complain {
  text: string;
  date: string;
}

export default function AdminDashboard() {
  const router = useRouter();
  const [searchId, setSearchId] = useState("");
  const [complainText, setComplainText] = useState("");
  const [complains, setComplains] = useState<Complain[]>([]);

  // Load complains from localStorage
  useEffect(() => {
    const storedComplains = localStorage.getItem("complains");
    if (storedComplains) {
      setComplains(JSON.parse(storedComplains));
    }
  }, []);

  // Handle search
  const handleSearch = () => {
    if (!searchId) return;
    router.push(`/employee/${searchId}`);
  };

  // Handle complain submit
  const handleComplainSubmit = () => {
    if (!complainText.trim()) return;

    const newComplain = { text: complainText, date: new Date().toLocaleString() };
    const updatedComplains = [...complains, newComplain];

    setComplains(updatedComplains);
    localStorage.setItem("complains", JSON.stringify(updatedComplains));
    setComplainText("");
  };

  return (
    <div className={styles.pageWrapper}>
      {/* Top Navigation */}
      <header className={styles.topNav}>
        <div className={styles.brand}>
          <img src="/astu-logo.png" alt="ASTU Logo" className={styles.logoImage} />
          <span className={styles.logoText}>ASTU</span>
        </div>
        <nav className={styles.topLinks}>
          <a href="#">Dashboard</a>
          <a href="#">Employees</a>
          <a href="#">Departments</a>
          <a href="#">Reports</a>
        </nav>
      </header>

      {/* Search Section */}
      <div className="w-full px-4 md:px-6 py-4 bg-gray-100 flex flex-col md:flex-row items-center gap-4">
        <input
          type="text"
          placeholder="Search employee by ID"
          className="w-full md:w-1/3 p-2 rounded border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none text-black"
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
        />
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>

      {/* Main Grid */}
      <div className={styles.mainGrid}>
        {/* Sidebar */}
        <aside className={styles.sidebar}>
          <div className={styles.profile}>
            <strong>name:</strong> Hawi Girma
          </div>
          <nav className={styles.sideLinks}>
            <a href="#">Home</a>
            <a href="#">Reviews</a>
            <a href="#">Goals</a>
            <a href="#">Feedbacks</a>
            <a href="#">Reports</a>
            <a href="#">Settings</a>
          </nav>
        </aside>

        {/* Content Area */}
        <main className={styles.content}>
          {/* Add Employee */}
          <div className={styles.card}>
            <h3>Add New Employee</h3>
            <button
              className={styles.button}
              onClick={() => router.push("/add-employee")}
            >
              + Add New
            </button>
          </div>

          {/* Report */}
          <div className={styles.card}>
            <h3>Report</h3>
            <button
              className={styles.button}
              onClick={() => router.push("/report-page")}
            >
              See Report
            </button>
          </div>

          {/* Employee List */}
          <div className={styles.card}>
            <h3>Employee List</h3>
            <button
              className={styles.button}
              onClick={() => router.push("/employee-list")}
            >
              See Full List
            </button>
          </div>

          {/* Employer Complain */}
          <div className={styles.card}>
            <h3>Employer Complain</h3>
            <textarea
              placeholder="Write a complain..."
              className="w-full p-2 rounded border border-gray-300 mb-2 text-black"
              value={complainText}
              onChange={(e) => setComplainText(e.target.value)}
            />
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              onClick={handleComplainSubmit}
            >
              Submit Complain
            </button>

            {/* Display all complains */}
            <div className="mt-4">
              {complains.length === 0 ? (
                <p className="text-black">No complains yet.</p>
              ) : (
                <ul className="space-y-2">
                  {complains.map((c, i) => (
                    <li key={i} className="border-b border-gray-200 pb-2 text-black">
                      <strong>{c.date}:</strong> {c.text}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
