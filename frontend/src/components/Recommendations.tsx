import "./Recommendations.css";

interface Recommendation {
  skill: string;
  recommendation: string;
}

interface RecommendationsProps {
  recommendations: Recommendation[];
}

function Recommendations({
  recommendations,
}: RecommendationsProps) {
  return (
    <div className="recommendations">
      <h3>Recommendations</h3>

      {recommendations.length === 0 ? (
        <p>
          🎉 Great job! Your resume covers all the required
          skills for this job.
        </p>
      ) : (
        recommendations.map((item) => (
          <p key={item.skill}>
            💡 {item.recommendation}
          </p>
        ))
      )}
    </div>
  );
}

export default Recommendations;