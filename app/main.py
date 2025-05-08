from fastapi import FastAPI, HTTPException
from app.utils import (
    get_all_players,
    get_random_player,
    get_player_by_number,
    get_players_by_position,
)

app = FastAPI()


@app.get("/players")
def read_players():
    return get_all_players()

@app.get("/players/random")
def read_random_player():
    return get_random_player()

@app.get("/players/{jersey_number}")
def read_player_by_number(jersey_number: str):
    player = get_player_by_number(jersey_number)
    if not player:
        raise HTTPException(status_code=404, detail="Player not found")
    return player

@app.get("/players/position/{position}")
def read_players_by_position(position: str):
    players = get_players_by_position(position)
    if not players:
        raise HTTPException(status_code=404, detail="No players at this position")
    return players
