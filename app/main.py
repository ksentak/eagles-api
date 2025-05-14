from fastapi import FastAPI
from app.routes import routes
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="Philadelphia Eagles Players API",
    description="API providing data about Philadelphia Eagles players",
    version="1.0.0",
    docs_url="/docs",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://eagles-api.netlify.app"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(routes.router, prefix="/api/v1")
