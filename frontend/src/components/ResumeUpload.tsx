import { useState } from "react";
import "./ResumeUpload.css";

function ResumeUpload() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    }
  };

  return (
    <div className="upload-container">
      <div className="upload-box">
        <div className="upload-icon">📄</div>

        <h2>Drag & Drop Resume</h2>

        <p>or click below to browse your files</p>

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
          <p className="file-name">
            ✅ {selectedFile.name}
          </p>
        )}

        <small>Supported formats: PDF, DOC, DOCX</small>
      </div>
    </div>
  );
}

export default ResumeUpload;