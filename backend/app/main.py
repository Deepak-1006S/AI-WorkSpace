from fastapi import FastAPI
from pydantic import BaseModel

class PredictRequest(BaseModel):
    input: str

app = FastAPI(title="AI Workspace - Backend")

@app.get("/health")
def health():
    return {"status": "ok"}

@app.post("/predict")
def predict(req: PredictRequest):
    # Placeholder inference logic — replace with real model calls
    prediction = {
        "input": req.input,
        "prediction": "dummy-prediction",
        "confidence": 0.0
    }
    return prediction
