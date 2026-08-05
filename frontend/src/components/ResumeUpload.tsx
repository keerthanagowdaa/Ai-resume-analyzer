import "./ResumeUpload.css";

function ResumeUpload() {
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
        />

        <label htmlFor="resume" className="browse-btn">
          Browse Files
        </label>

        <small>Supported formats: PDF, DOC, DOCX</small>
      </div>
    </div>
  );
}

export default ResumeUpload;