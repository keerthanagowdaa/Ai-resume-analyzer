import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="hero">
        <h1>🤖 AI Resume Analyzer</h1>

        <p>
          Analyze your resume using Artificial Intelligence and improve your
          chances of getting shortlisted.
        </p>

        <button>Upload Resume</button>
      </div>

      <div className="features">
        <div className="card">
          <h3>📄 Resume Parsing</h3>
          <p>Extract information from PDF resumes automatically.</p>
        </div>

        <div className="card">
          <h3>🎯 ATS Score</h3>
          <p>Measure resume compatibility with Applicant Tracking Systems.</p>
        </div>

        <div className="card">
          <h3>🧠 Skill Extraction</h3>
          <p>Identify technical and soft skills using NLP.</p>
        </div>
      </div>
    </div>
  );
}

export default App;