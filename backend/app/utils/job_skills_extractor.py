def extract_job_skills(text: str):
    skills_database = [
        "Python",
        "Java",
        "JavaScript",
        "TypeScript",
        "React",
        "Node.js",
        "FastAPI",
        "Flask",
        "Django",
        "HTML",
        "CSS",
        "SQL",
        "MongoDB",
        "MySQL",
        "PostgreSQL",
        "Git",
        "GitHub",
        "Docker",
        "AWS",
        "Machine Learning",
        "Deep Learning",
        "Artificial Intelligence",
        "Data Science",
        "NLP",
        "TensorFlow",
        "PyTorch",
        "OpenCV",
        "Kubernetes",
        "REST API",
    ]

    text_lower = text.lower()

    found_skills = []

    for skill in skills_database:
        if skill.lower() in text_lower:
            found_skills.append(skill)

    return found_skills