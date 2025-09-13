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
https://eagles-api-service-189864895985.us-east1.run.app/api/v1
```

#### API Methods

- `GET /api/v1/players - Retrieves all players.`

- `GET /api/v1/players/random - Retrieves a random player.`

- `GET /api/v1/players/:jerseyNumber - Retrieves a player based on the inputted jersey number.`

- `GET /api/v1/players/position/:position - Retrieves players based on the inputted position.`

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
$ uvicorn app.main:app --reload --port 8080
```

## Running the App w/ Docker

To run the app with Docker, use the following commands:

```bash
docker build -t eagles-api .
docker run -p 8000:8080 eagles-api
```
