import httpx
import json
import os

DATA_PATH = os.path.join(os.path.dirname(__file__), '..', 'data', 'official_roster.json')

async def fetch_roster():
    url = 'https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams/21/roster'
    async with httpx.AsyncClient() as client:
        response = await client.get(url)
        response.raise_for_status()
        return response.json()

def organize_roster(raw_data):
    combined = []
    for group in raw_data.get("athletes", []):
        combined.extend(group.get("items", []))

    official = []
    for player in combined:
        official.append({
            "id": player.get("id"),
            "number": player.get("jersey", "N/A"),
            "first_name": player.get("firstName"),
            "last_name": player.get("lastName"),
            "position": player.get("position", {}).get("abbreviation", "").lower(),
            "height": player.get("displayHeight"),
            "weight": str(player.get("weight", "")),
            "age": str(player.get("age", "")),
            "years_pro": str(player.get("experience", {}).get("years", "")),
            "college": player.get("college", {}).get("shortName", "N/A"),
        })
    return official

async def update_roster():
    raw = await fetch_roster()
    roster = organize_roster(raw)
    with open(DATA_PATH, 'w') as f:
        json.dump(roster, f, indent=2)
