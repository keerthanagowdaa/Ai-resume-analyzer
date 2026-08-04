import "./App.css";

import Hero from "./components/Hero";
import FeatureCard from "./components/Featurecard";

function App() {
  return (
    <div className="container">
      <Hero
        title="🤖 AI Resume Analyzer"
        description="Analyze your resume using Artificial Intelligence and improve your chances of getting shortlisted."
      />

      <div className="features">
        <FeatureCard
          title="📄 Resume Parsing"
          description="Extract information from PDF resumes automatically."
        />

        <FeatureCard
          title="🎯 ATS Score"
          description="Measure resume compatibility with Applicant Tracking Systems."
        />

        <FeatureCard
          title="🧠 Skill Extraction"
          description="Identify technical and soft skills using NLP."
        />
      </div>
    </div>
  );
}

export default App;