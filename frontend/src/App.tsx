import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ResumeUpload from "./components/ResumeUpload";
import FeatureCard from "./components/Featurecard";
import JobDescription from "./components/JobDescription";


function App() {
  const [resumeSkills, setResumeSkills] = useState<string[]>([]);
  return (
    <>
    <Navbar />
    <div className="container">
      <Hero
        title="🤖 AI Resume Analyzer"
        description="Analyze your resume using Artificial Intelligence and improve your chances of getting shortlisted."
      />
      <ResumeUpload onSkillsExtracted={setResumeSkills} />
      <JobDescription resumeSkills={resumeSkills} />

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
    </>
  );
}

export default App;