import "./ATSScore.css";
interface ATSScoreProps {
  score: number;
}

function ATSScore({ score }: ATSScoreProps) {
  let remark = "";

  if (score >= 80) {
    remark = "Excellent";
  } else if (score >= 60) {
    remark = "Good";
  } else if (score >= 40) {
    remark = "Needs Improvement";
  } else {
    remark = "Poor";
  }

  return (
    <div className="ats-score">
      <h2>ATS Score</h2>

      <div className="score-number">
        {score}/100
      </div>

      <p>{remark}</p>
    </div>
  );
}

export default ATSScore;