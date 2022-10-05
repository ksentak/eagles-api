import { Injectable } from '@nestjs/common';
import _ from 'lodash';
import players from './officialRoster';
import { playerObj } from './app.interface';

@Injectable()
export class AppService {
  getAllPlayers(): playerObj[] {
    return players;
  }

  getRandomPlayer(): playerObj {
    const randomNumber = _.random(players.length);
    return players[randomNumber];
  }

  getPlayerByNumber(number): playerObj {
    const player = _.filter(players, (player) => player.number === number);
    return player[0];
  }

  getPlayerByPosition(position): playerObj[] {
    const positionPlayers = _.filter(
      players,
      (player) => player.position === position,
    );
    return positionPlayers;
  }
}
