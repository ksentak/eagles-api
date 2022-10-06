# Eagles API

## Documentation

The `Eagles API` allows users to obtain basic player information data of players that are on the current roster (2022). Data includes the player's name, number, height, weight, and college. The API was built with NestJS and is deployed to an `AWS Lambda` using `serverless`.

### Endpoints

#### Base URL

### `https://5o1j7ybsh2.execute-api.us-east-1.amazonaws.com/prod`

#### `GET /players - Gets all players`

#### `GET /players/random - Gets a random player`

#### `GET /players/:jerseyNumber - Gets a player based on the inputted jersey number`

#### `GET /players/position/:position - Gets players based on the inputted position`

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# serverless mode
$ sls offline
```

## Testing

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deploying (Serverless)

```bash
# build application
$ npm run build

# deploy aws lambda (dev)
$ sls deploy

# deploy aws lambda (prod)
$ sls deploy --stage prod
```
