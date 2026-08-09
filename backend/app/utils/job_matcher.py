def calculate_job_match(resume_skills, job_skills):
    resume_skills_lower = {
        skill.lower(): skill for skill in resume_skills
    }

    job_skills_lower = {
        skill.lower(): skill for skill in job_skills
    }

    matched_skills = []
    missing_skills = []

    for skill_lower, original_skill in job_skills_lower.items():
        if skill_lower in resume_skills_lower:
            matched_skills.append(original_skill)
        else:
            missing_skills.append(original_skill)

    if len(job_skills) > 0:
        match_score = round(
            (len(matched_skills) / len(job_skills)) * 100
        )
    else:
        match_score = 0

    return {
        "match_score": match_score,
        "matched_skills": matched_skills,
        "missing_skills": missing_skills
    }