from fastapi import FastAPI

app = FastAPI(
    title="AI Resume Analyzer API",
    version="1.0.0"
)


@app.get("/")
def root():
    return {
        "message": "Welcome to AI Resume Analyzer API"
    }


@app.get("/health")
def health():
    return {
        "status": "healthy",
        "service": "AI Resume Analyzer"
    }