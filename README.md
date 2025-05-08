# Eagles API

The Eagles API is a RESTful API built with Python & FastApi that provides basic player information for players on the current roster of the Philadelphia Eagles. The API is deployed to a Google Cloud Run instance.

## Table of Contents

- [Documentation](#documentation)
  - [Base URL](#base-url)
  - [API Methods](#api-methods)
- [Installation](#installation)
- [Roster Update Script](#roster-update-script)
- [Running the App](#running-the-app)
- [Testing](#testing)
- [Deploying (Serverless)](#deploying-serverless)
- [CI/CD](#cicd)

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

## Installation

TODO - UPDATE ALL INSTRUCTIONS BELOW

To install the necessary dependencies, run the following command:

```bash
$ npm install
```

## Roster Update Script

To update the roster information, run the following command:

```bash
$ npm run updateRoster
```

## Running the App

To run the app, use the following commands:

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# serverless mode
$ sls offline
```

## Testing

To run tests, use the following commands:

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
