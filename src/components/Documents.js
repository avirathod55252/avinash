import React, { useState, useEffect } from "react";

export default function Documents() {
  const [documents, setDocuments] = useState([]);
  const API_URL = "http://localhost:5000";

  // ✅ Fetch all files
  useEffect(() => {
    fetch(`${API_URL}/files`)
      .then((res) => res.json())
      .then((data) => setDocuments(data))
      .catch((err) => console.error("❌ Error fetching files:", err));
  }, []);

  // ✅ Upload file
  const handleFileChange = async (e) => {
    const files = e.target.files;
    for (const file of files) {
      const formData = new FormData();
      formData.append("file", file);

      try {
        const res = await fetch(`${API_URL}/upload`, {
          method: "POST",
          body: formData,
        });
        if (!res.ok) throw new Error(`Upload failed: ${res.status}`);
        const data = await res.json();
        setDocuments((prev) => [
          ...prev,
          { name: file.name, url: data.fileUrl },
        ]);
      } catch (err) {
        console.error("❌ Upload error:", err);
        alert("Failed to upload. Make sure backend is running.");
      }
    }
  };

  // ✅ Delete file
  const handleRemove = async (fileName) => {
    if (!window.confirm(`Are you sure you want to delete "${fileName}"?`))
      return;
    try {
      const encoded = encodeURIComponent(fileName);
      const res = await fetch(`${API_URL}/delete/${encoded}`, {
        method: "DELETE",
      });
      if (res.ok) {
        setDocuments((prev) =>
          prev.filter((doc) => !doc.url.includes(fileName))
        );
        alert("✅ File deleted successfully!");
      } else alert("❌ Failed to delete file.");
    } catch (err) {
      console.error("❌ Delete error:", err);
    }
  };

  // ✅ Update (Replace) file
  const handleUpdate = async (oldFileName, e) => {
    const newFile = e.target.files[0];
    if (!newFile) return;
    const formData = new FormData();
    formData.append("file", newFile);
    try {
      const encoded = encodeURIComponent(oldFileName);
      const res = await fetch(`${API_URL}/update/${encoded}`, {
        method: "PUT",
        body: formData,
      });
      if (res.ok) {
        const data = await res.json();
        setDocuments((prev) =>
          prev.map((doc) =>
            doc.url.includes(oldFileName)
              ? { name: newFile.name, url: data.fileUrl }
              : doc
          )
        );
        alert("✅ File updated successfully!");
      } else alert("❌ Update failed.");
    } catch (err) {
      console.error("❌ Update error:", err);
    }
  };

  return (
    <section
      id="documents"
      className="py-16 px-6 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-3xl shadow-lg max-w-6xl mx-auto mt-10"
    >
      {/* Title */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-blue-700 mb-2">
          📂 Document Manager
        </h2>
        <p className="text-gray-600">Upload, View, Update or Delete Files</p>
        <div className="h-1 w-32 bg-blue-500 mx-auto mt-3 rounded-full"></div>
      </div>

      {/* Upload Section */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-8">
        <label className="flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full shadow-md cursor-pointer transition">
          ⬆️ Upload Files
          <input
            type="file"
            multiple
            accept=".pdf,.jpg,.jpeg,.png"
            onChange={handleFileChange}
            className="hidden"
          />
        </label>
      </div>

      {/* Document List */}
      {documents.length > 0 ? (
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
          {documents.map((doc, i) => (
            <div
              key={i}
              className="group bg-white rounded-2xl shadow-md hover:shadow-2xl border border-gray-100 transition-all duration-300 p-5 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 bg-blue-100 text-blue-600 text-xs font-bold px-3 py-1 rounded-bl-lg">
                File {i + 1}
              </div>

              <h3 className="font-semibold mb-3 text-gray-800 truncate text-lg">
                📄 {doc.name}
              </h3>

              <iframe
                src={doc.url}
                title={doc.name}
                className="w-full h-40 rounded-lg border mb-4"
              />

              <div className="flex flex-wrap justify-center gap-2">
                <a
                  href={doc.url}
                  download
                  className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm hover:bg-blue-700 transition"
                >
                  📥 Download
                </a>

                <label className="bg-yellow-500 text-white px-4 py-2 rounded-full text-sm hover:bg-yellow-600 cursor-pointer transition">
                  ♻️ Update
                  <input
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png"
                    className="hidden"
                    onChange={(e) => handleUpdate(doc.url.split("/").pop(), e)}
                  />
                </label>

                <button
                  onClick={() => handleRemove(doc.url.split("/").pop())}
                  className="bg-red-500 text-white px-4 py-2 rounded-full text-sm hover:bg-red-600 transition"
                >
                  🗑️ Delete
                </button>

                <a
                  href={doc.url}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-gray-100 text-blue-600 px-4 py-2 rounded-full text-sm hover:bg-gray-200 transition"
                >
                  🔍 View
                </a>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500 italic text-center mt-6">
          No documents uploaded yet. 📭
        </p>
      )}
    </section>
  );
}
