# Eagles API

The Eagles API is a RESTful API built with Python & FastApi that provides basic player information for players on the current roster of the Philadelphia Eagles. The API is deployed to a Google Cloud Run instance.

## Table of Contents

- [Documentation](#documentation)
  - [Base URL](#base-url)
  - [API Methods](#api-methods)
- [Installation](#installation)
- [Running the App](#running-the-app)

## Documentation

#### Base URL

```bash
TODO - Add URL
```

#### API Methods

- `GET /players - Retrieves all players.`

- `GET /players/random - Retrieves a random player.`

- `GET /players/:jerseyNumber - Retrieves a player based on the inputted jersey number.`

- `GET /players/position/:position - Retrieves players based on the inputted position.`

## Getting Started

1. Create a virtual environment.

```bash
$ python3 -m venv venv
```

2. Activate virtual environment & install dependencies

```bash
# Activate it (Mac/Linux)
source venv/bin/activate

# Or on Windows
venv\Scripts\activate

# Then install dependencies
pip install -r requirements.txt
```

## Generate Roster

```bash
python3 -m scripts.update_roster
```

## Running the App Locally

To run the app, use the following commands:

```bash
$ uvicorn app.main:app --reload

# Define a port
$ uvicorn app.main:app --reload --port 5050

```
