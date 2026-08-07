import { useState } from "react";
import "./ResumeUpload.css";
import { uploadResume } from "../services/api";

function ResumeUpload() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const allowedExtensions = ["pdf", "doc", "docx"];

  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (!event.target.files?.length) return;

    const file = event.target.files[0];

    const extension = file.name.split(".").pop()?.toLowerCase();

    if (!extension || !allowedExtensions.includes(extension)) {
      setSelectedFile(null);
      setError("❌ Only PDF, DOC and DOCX files are allowed.");
      setMessage("");
      return;
    }

    setSelectedFile(file);
    setError("");
    setMessage("");
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      setError("Please select a resume first.");
      return;
    }

    try {
      const response = await uploadResume(selectedFile);
      setMessage(response.message);
      setError("");
    } catch (err) {
      setError("Upload failed. Please try again.");
      setMessage("");
    }
  };

  return (
    <div className="upload-container">
      <div className="upload-box">
        <div className="upload-icon">📄</div>

        <h2>Upload Your Resume</h2>

        <p>Select a PDF, DOC or DOCX file</p>

        <input
          type="file"
          id="resume"
          accept=".pdf,.doc,.docx"
          hidden
          onChange={handleFileChange}
        />

        <label htmlFor="resume" className="browse-btn">
          Browse Files
        </label>

        {selectedFile && (
          <p className="file-name">📄 {selectedFile.name}</p>
        )}

        <button
          className="browse-btn"
          onClick={handleUpload}
          style={{ marginTop: "15px" }}
        >
          Upload Resume
        </button>

        {message && (
          <p style={{ color: "green", marginTop: "15px" }}>
            ✅ {message}
          </p>
        )}

        {error && (
          <p style={{ color: "red", marginTop: "15px" }}>
            {error}
          </p>
        )}

        <small>
          Supported formats: PDF, DOC, DOCX
        </small>
      </div>
    </div>
  );
}

export default ResumeUpload;