import json
import os
import random

DATA_PATH = os.path.join(os.path.dirname(__file__), '..', 'data', 'official_roster.json')

VALID_POSITIONS = [
    "qb", "rb", "wr", "te", "ot", "g", "c",
    "de", "dt", "lb", "cb", "s", "pk", "p", "ls"
]

def load_roster():
    with open(DATA_PATH) as f:
        return json.load(f)

def get_all_players():
    return load_roster()

def get_random_player():
    players = load_roster()
    return random.choice(players)

def get_player_by_number(number):
    players = load_roster()
    return next((p for p in players if p["number"] == number), None)

def get_players_by_position(position):
    position = position.lower()
    if position not in VALID_POSITIONS:
        return []
    return [p for p in load_roster() if p["position"] == position]
