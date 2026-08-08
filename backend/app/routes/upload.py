from fastapi import APIRouter, UploadFile, File
import os
import shutil

from app.utils.pdf_parser import extract_text_from_pdf
from app.utils.resume_parser import (
    extract_email,
    extract_phone,
    extract_name
)
from app.utils.skills_extractor import extract_skills
from app.utils.education_extractor import extract_education

router = APIRouter(prefix="/api", tags=["Upload"])

UPLOAD_DIR = "app/uploads"

os.makedirs(UPLOAD_DIR, exist_ok=True)


@router.post("/upload")
async def upload_resume(file: UploadFile = File(...)):

    file_path = os.path.join(UPLOAD_DIR, file.filename)

    # Save the uploaded file
    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    # Extract text from PDF
    extracted_text = ""

    if file.filename.lower().endswith(".pdf"):
        extracted_text = extract_text_from_pdf(file_path)

    # Extract basic resume information
    name = extract_name(extracted_text)
    email = extract_email(extracted_text)
    phone = extract_phone(extracted_text)

    # Extract skills
    skills = extract_skills(extracted_text)
    education = extract_education(extracted_text)

    return {
        "message": "Resume uploaded successfully!",
        "filename": file.filename,
        "name": name,
        "email": email,
        "phone": phone,
        "skills": skills,
        "education": education,
        "extracted_text": extracted_text
    }