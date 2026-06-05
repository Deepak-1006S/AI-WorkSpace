# AI Workspace

Professional, full-featured AI workspace scaffold.

Features included:
- FastAPI backend with `/predict` placeholder endpoint
- Dockerfile and `docker-compose.yml` for local development
- Basic CI workflow for linting and tests
- Project documentation and Makefile for developer ergonomics

Quick start (from repo root):

1. Build and run with Docker Compose:

```bash
docker compose up --build
```

2. Health check: `http://localhost:8000/health`

3. Predict endpoint: `POST http://localhost:8000/predict` JSON `{ "input": "..." }`

Replace the placeholder model logic in `backend/app/main.py` with real inference code.
