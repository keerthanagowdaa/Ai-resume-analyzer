import re


def extract_email(text: str):
    pattern = r"[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}"
    match = re.search(pattern, text)

    if match:
        return match.group()

    return None


def extract_phone(text: str):
    pattern = r"(?:\+91[\s-]?)?[6-9]\d{9}"
    match = re.search(pattern, text)

    if match:
        return match.group()

    return None


def extract_name(text: str):
    lines = [line.strip() for line in text.splitlines() if line.strip()]

    if lines:
        return lines[0]

    return None