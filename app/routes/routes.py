from fastapi import APIRouter, HTTPException, Path
from typing import List
from app.services.player_service import (
    get_all_players,
    get_random_player,
    get_player_by_number,
    get_players_by_position,
)
from app.models.models import Player
from app.constants import VALID_POSITIONS

router = APIRouter(tags=["Players"])

@router.get("/players",
    response_model=List[Player],
    summary="Get all players",
    description="Returns the complete roster of Philadelphia Eagles players."
)
def read_players():
    return get_all_players()

@router.get("/players/random",
    response_model=Player,
    summary="Get a random player",
    description="Returns a randomly selected player from the Eagles roster."
)
def read_random_player():
    return get_random_player()

@router.get("/players/position/{position}",
    response_model=List[Player],
    summary="Get players by position",
    description=f"Returns all players who play at the specified position. Valid positions: {', '.join(VALID_POSITIONS)}"
)
def read_players_by_position(position: str):
    if position not in [pos for pos in VALID_POSITIONS]:
        raise HTTPException(
            status_code=422,
            detail=f"Invalid position. Must be one of: {', '.join(VALID_POSITIONS)}"
        )
    players = get_players_by_position(position)
    if not players:
        raise HTTPException(status_code=404, detail="No players at this position")
    return players

@router.get("/players/{jersey_number}", 
    response_model=Player,
    summary="Get player by jersey number",
    description="Returns information about a specific player based on their jersey number (0-99)."
)
def read_player_by_number(
    jersey_number: str = Path(
        ..., 
        description="Jersey number (0-99)", 
        regex="^[0-9]{1,2}$"
    )
):
    player = get_player_by_number(jersey_number)
    if not player:
        raise HTTPException(status_code=404, detail="Player not found")
    return player
