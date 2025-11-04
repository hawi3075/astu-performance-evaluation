"use client";

import { useState } from "react";

export default function CommentPage() {
  const [comment, setComment] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (!comment.trim()) {
      setError("Please write a comment.");
      return;
    }

    setError("");

    // Save to localStorage
    const storedComments = localStorage.getItem("comments");
    const comments = storedComments ? JSON.parse(storedComments) : [];
    comments.push({ text: comment, date: new Date().toLocaleString() });
    localStorage.setItem("comments", JSON.stringify(comments));

    setComment("");
    alert("Comment submitted successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-200 flex flex-col items-center p-6">
      <h1 className="text-2xl font-bold text-black mb-4">Submit Comment</h1>
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Write your comment here..."
        className="w-full max-w-lg p-3 rounded border border-gray-300 text-black mb-3"
        rows={5}
      />
      {error && <p className="text-red-600 mb-3">{error}</p>}
      <button
        onClick={handleSubmit}
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        Submit
      </button>
    </div>
  );
}
