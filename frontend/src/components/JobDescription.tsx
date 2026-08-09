import { useState } from "react";
import "./JobDescription.css";
import Recommendations from "./Recommendations";

interface JobDescriptionProps {
  resumeSkills: string[];
}

function JobDescription({ resumeSkills }: JobDescriptionProps) {
  const [jobDescription, setJobDescription] = useState("");
  const [matchScore, setMatchScore] = useState<number | null>(null);
  const [matchedSkills, setMatchedSkills] = useState<string[]>([]);
  const [missingSkills, setMissingSkills] = useState<string[]>([]);
  const [recommendations, setRecommendations] = useState<
  { skill: string; recommendation: string }[]
  >([]);
  const [error, setError] = useState("");

  const handleAnalyze = async () => {
    if (!jobDescription.trim()) {
      return;
    }

    setError("");

    try {
      const response = await fetch(
        "http://127.0.0.1:8000/api/job-description",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            job_description: jobDescription,
            resume_skills: resumeSkills,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to analyze job description");
      }

      const data = await response.json();

      setMatchScore(data.match_score);
      setMatchedSkills(data.matched_skills || []);
      setMissingSkills(data.missing_skills || []);
      setRecommendations(data.recommendations || []);
    } catch (err) {
      setError("Unable to analyze job description.");
    }
  };

  return (
    <div className="job-description-container">
      <h2>Job Description</h2>

      <p>
        Paste the job description below to compare it with your resume.
      </p>

      <textarea
        value={jobDescription}
        onChange={(event) => setJobDescription(event.target.value)}
        placeholder="Paste the job description here..."
        rows={10}
      />

      <p className="character-count">
        {jobDescription.length} characters
      </p>

      <button
        className="analyze-job-btn"
        disabled={!jobDescription.trim()}
        onClick={handleAnalyze}
      >
        Analyze Job Description
      </button>

      {error && <p className="job-error">{error}</p>}

      {matchScore !== null && (
        <div className="job-match-result">
          <h3>Job Match Score</h3>

          <div className="match-score">
            {matchScore}%
          </div>

          <h4>Matched Skills</h4>

          {matchedSkills.length > 0 ? (
            <div className="job-skills">
              {matchedSkills.map((skill) => (
                <span key={skill} className="matched-skill">
                  ✓ {skill}
                </span>
              ))}
            </div>
          ) : (
            <p>No matching skills found.</p>
          )}

          <h4>Missing Skills</h4>

          {missingSkills.length > 0 ? (
            <div className="job-skills">
              {missingSkills.map((skill) => (
                <span key={skill} className="missing-skill">
                  ✗ {skill}
                </span>
              ))}
            </div>
          ) : (
            <p>No missing skills 🎉</p>
          )}
          <Recommendations recommendations={recommendations} />
        </div>
      )}
    </div>
  );
}

export default JobDescription;