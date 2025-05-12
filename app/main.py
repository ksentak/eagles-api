from fastapi import FastAPI
from app.routes import routes

app = FastAPI()

app.include_router(routes.router, prefix="/api/v1")
