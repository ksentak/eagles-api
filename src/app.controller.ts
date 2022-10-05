import { Controller, Get, Param, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { playerObj } from './app.interface';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/players')
  getAll(): playerObj[] {
    return this.appService.getAllPlayers();
  }

  @Get('/players/random')
  getRandomPlayer(): playerObj {
    return this.appService.getRandomPlayer();
  }

  @Get('/players/:id')
  getPlayerByNumber(@Param() params): playerObj {
    const { id } = params;
    return this.appService.getPlayerByNumber(id);
  }

  @Get('/players/position/:position')
  getPlayersByPosition(@Param() params): playerObj[] {
    const { position } = params;
    return this.appService.getPlayerByPosition(position);
  }
}
