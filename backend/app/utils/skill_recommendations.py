def generate_recommendations(missing_skills):
    recommendations = []

    for skill in missing_skills:
        recommendations.append(
            {
                "skill": skill,
                "recommendation": (
                    f"If you have experience with {skill}, "
                    f"consider highlighting it in your resume "
                    f"to improve your match for this job."
                )
            }
        )

    return recommendations