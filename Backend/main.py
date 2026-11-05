from fastapi import FastAPI

app = FastAPI(
    title="LifeOS API",
    description="Backend API for the LifeOS application",
    version="1.0.0"
)


@app.get("/")
def root():
    return {"message": "Welcome to LifeOS API"}


@app.get("/health")
def health_check():
    return {"status": "healthy"}