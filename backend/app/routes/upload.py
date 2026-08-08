from fastapi import APIRouter, UploadFile, File
import os
import shutil

from app.utils.pdf_parser import extract_text_from_pdf

router = APIRouter(prefix="/api", tags=["Upload"])

UPLOAD_DIR = "app/uploads"

os.makedirs(UPLOAD_DIR, exist_ok=True)


@router.post("/upload")
async def upload_resume(file: UploadFile = File(...)):

    file_path = os.path.join(UPLOAD_DIR, file.filename)

    # Save the uploaded file
    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    # Extract text if the uploaded file is a PDF
    extracted_text = ""

    if file.filename.lower().endswith(".pdf"):
        extracted_text = extract_text_from_pdf(file_path)

    return {
        "message": "Resume uploaded successfully!",
        "filename": file.filename,
        "extracted_text": extracted_text
    }