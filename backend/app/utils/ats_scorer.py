def calculate_ats_score(
    name,
    email,
    phone,
    skills,
    education,
    extracted_text
):
    score = 0

    # Contact information
    if name:
        score += 10

    if email:
        score += 10

    if phone:
        score += 10

    # Skills
    if skills:
        score += 20

    # Education
    if education:
        score += 15

    # Resume content
    if len(extracted_text.strip()) >= 500:
        score += 15

    # Projects
    text_lower = extracted_text.lower()

    if "project" in text_lower or "projects" in text_lower:
        score += 10

    # Experience
    if "experience" in text_lower or "work experience" in text_lower:
        score += 10

    return min(score, 100)