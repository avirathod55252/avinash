import React, { useState, useEffect } from "react";

export default function Documents() {
  const [documents, setDocuments] = useState([]);
  
  // 🔗 Use your deployed backend URL from Render
  const API_URL = "https://resume-backend.onrender.com";

  // ✅ Fetch uploaded files from backend when component loads
  useEffect(() => {
    fetch(`${API_URL}/files`)
      .then((res) => res.json())
      .then((data) => setDocuments(data))
      .catch((err) => console.error("Error fetching files:", err));
  }, []);

  // ✅ Optional: handle file deletion
  const handleDelete = async (filename) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this file?");
    if (!confirmDelete) return;

    try {
      const res = await fetch(`${API_URL}/delete/${filename}`, { method: "DELETE" });
      const data = await res.json();
      alert(data.message);
      setDocuments((prev) => prev.filter((doc) => doc.name !== filename));
    } catch (error) {
      console.error("Error deleting file:", error);
    }
  };

  return (
    <section id="documents" className="py-16 max-w-6xl mx-auto px-6">
      <h2 className="text-3xl font-bold text-blue-600 mb-6">📁 Uploaded Files</h2>

      {documents.length === 0 ? (
        <p className="text-gray-600">No files uploaded yet.</p>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {documents.map((doc) => (
            <div
              key={doc.name}
              className="p-4 bg-white rounded-lg shadow hover:shadow-md transition flex justify-between items-center"
            >
              <a
                href={doc.url}
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 hover:underline truncate"
              >
                {doc.name}
              </a>
              <button
                onClick={() => handleDelete(doc.name)}
                className="text-red-500 hover:text-red-700 text-sm font-medium"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
