# scripts/update_roster.py
import asyncio
from app.roster import update_roster

asyncio.run(update_roster())