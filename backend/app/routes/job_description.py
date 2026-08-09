from fastapi import APIRouter
from pydantic import BaseModel

from app.utils.job_skills_extractor import extract_job_skills
from app.utils.job_matcher import calculate_job_match
from app.utils.skill_recommendations import generate_recommendations


router = APIRouter(
    prefix="/api",
    tags=["Job Description"]
)


class JobDescriptionRequest(BaseModel):
    job_description: str
    resume_skills: list[str] = []


@router.post("/job-description")
async def analyze_job_description(
    data: JobDescriptionRequest
):
    job_description = data.job_description

    # Extract skills required by the job
    job_skills = extract_job_skills(job_description)

    # Compare job skills with resume skills
    match_result = calculate_job_match(
        data.resume_skills,
        job_skills
    )

    recommendations = generate_recommendations(
    match_result["missing_skills"]
)

    return {
        "message": "Job description analyzed successfully!",
        "job_description": job_description,
        "required_skills": job_skills,
        "match_score": match_result["match_score"],
        "matched_skills": match_result["matched_skills"],
        "missing_skills": match_result["missing_skills"],
        "recommendations": recommendations
    }