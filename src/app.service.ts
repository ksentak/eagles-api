import { Injectable } from '@nestjs/common';
import _ from 'lodash';
import players from './officialRoster.json';

@Injectable()
export class AppService {
  getAllPlayers() {
    return players;
  }

  getRandomPlayer() {
    const randomNumber = _.random(players.length);
    return players[randomNumber];
  }

  getPlayerByNumber(number) {
    const player = _.filter(players, (player) => player.number === number);
    return player[0];
  }

  getPlayerByPosition(position) {
    const positionPlayers = _.filter(
      players,
      (player) => player.position === position,
    );
    return positionPlayers;
  }
}
