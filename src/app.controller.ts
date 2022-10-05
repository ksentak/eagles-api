import { Controller, Get, Param, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { playerObj } from './app.interface';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/players')
  findAll(): any {
    return this.appService.getAllPlayers();
  }

  @Get('/players/random')
  findRandomPlayer(): playerObj {
    return this.appService.getRandomPlayer();
  }

  @Get('/players/:id')
  findPlayerByNumber(@Param() params): playerObj {
    const { id } = params;
    return this.appService.getPlayerByNumber(id);
  }

  @Get('/position/:position')
  findPlayersByPosition(@Param() params): playerObj[] {
    const { position } = params;
    return this.appService.getPlayerByPosition(position);
  }
}
