import "./ATSFeedback.css";
interface ATSFeedbackProps {
  score: number;
}

function ATSFeedback({ score }: ATSFeedbackProps) {
  const feedback: string[] = [];

  if (score >= 80) {
    feedback.push("Your resume has good ATS compatibility.");
  } else if (score >= 60) {
    feedback.push("Your resume has decent ATS compatibility but can be improved.");
  } else if (score >= 40) {
    feedback.push("Your resume needs some improvements for better ATS compatibility.");
  } else {
    feedback.push("Your resume needs significant improvements for ATS compatibility.");
  }

  if (score < 70) {
    feedback.push("Consider adding more relevant skills and experience.");
  }

  if (score < 50) {
    feedback.push("Make sure your contact information, education, skills, and projects are clearly included.");
  }

  return (
    <div className="ats-feedback">
      <h3>Resume Analysis</h3>

      {feedback.map((item, index) => (
        <p key={index}>✓ {item}</p>
      ))}
    </div>
  );
}

export default ATSFeedback;