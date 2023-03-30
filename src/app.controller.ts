import { Controller, Get, HttpException, Param } from '@nestjs/common';
import _ from 'lodash';
import { AppService } from './app.service';
import { AppUtils } from './app.utils';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly appUtils: AppUtils,
  ) {}

  @Get('/players')
  getAll() {
    return this.appService.getAllPlayers();
  }

  @Get('/players/random')
  getRandomPlayer() {
    return this.appService.getRandomPlayer();
  }

  @Get('/players/:id')
  getPlayerByNumber(@Param() params) {
    const { id } = params;

    if (!_.inRange(id, 1, 100)) {
      throw new HttpException('Player number must be between 1-99', 400);
    }

    const player = this.appService.getPlayerByNumber(id);

    if (_.isEmpty(player)) {
      throw new HttpException('Player not found', 404);
    }

    return player;
  }

  @Get('/players/position/:position')
  getPlayersByPosition(@Param() params) {
    const { position } = params;
    const validPosition = this.appUtils.validatePosition(position);

    if (!validPosition) {
      throw new HttpException('Please enter a valid position', 400);
    }

    return this.appService.getPlayerByPosition(position);
  }
}
