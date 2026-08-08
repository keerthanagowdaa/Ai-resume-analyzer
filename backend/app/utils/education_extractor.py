def extract_education(text: str):
    lines = [line.strip() for line in text.splitlines() if line.strip()]

    education_lines = []
    education_started = False

    for line in lines:
        line_lower = line.lower()

        # Start collecting after the EDUCATION heading
        if line_lower in ["education", "academic background", "educational qualifications"]:
            education_started = True
            education_lines.append(line)
            continue

        if education_started:

            # Stop when another major resume section starts
            if line_lower in [
                "featured projects",
                "projects",
                "technical skills",
                "skills",
                "experience",
                "work experience",
                "certifications",
                "professional experience",
            ]:
                break

            education_lines.append(line)

    return education_lines