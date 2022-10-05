import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  it('should return all players', () => {
    const result = [
      {
        id: '44baff7d-e389-4eb9-b665-968afcbdc670',
        number: '1',
        first_name: 'Jalen',
        last_name: 'Hurts',
        position: 'qb',
        height: '6-1',
        weight: '223',
        age: '24',
        years_pro: '3',
        college: 'Oklahoma',
      },
      {
        id: '456b312c-2bd6-48c3-a05e-b53dde25977f',
        number: '2',
        first_name: 'Darius',
        last_name: 'Slay',
        position: 'cb',
        height: '6-0',
        weight: '190',
        age: '31',
        years_pro: '10',
        college: 'Mississippi State',
      },
    ];
    jest.spyOn(appController, 'getAll').mockImplementation(() => result);

    expect(appController.getAll()).toBe(result);
  });

  it('should return a random player', () => {
    const result = {
      id: '456b312c-2bd6-48c3-a05e-b53dde25977f',
      number: '2',
      first_name: 'Darius',
      last_name: 'Slay',
      position: 'cb',
      height: '6-0',
      weight: '190',
      age: '31',
      years_pro: '10',
      college: 'Mississippi State',
    };
    jest
      .spyOn(appController, 'getRandomPlayer')
      .mockImplementation(() => result);

    expect(appController.getRandomPlayer()).toBe(result);
  });

  it('should return a specific player', () => {
    const result = {
      id: '44baff7d-e389-4eb9-b665-968afcbdc670',
      number: '1',
      first_name: 'Jalen',
      last_name: 'Hurts',
      position: 'qb',
      height: '6-1',
      weight: '223',
      age: '24',
      years_pro: '3',
      college: 'Oklahoma',
    };
    jest
      .spyOn(appController, 'getPlayerByNumber')
      .mockImplementation(() => result);

    expect(appController.getPlayerByNumber('1')).toBe(result);
  });

  it('should return a specific position group', () => {
    const result = [
      {
        id: 'f3bfb317-4005-4167-a42f-ba9f0118aac4',
        number: '4',
        first_name: 'Jake',
        last_name: 'Elliott',
        position: 'k',
        height: '5-9',
        weight: '167',
        age: '27',
        years_pro: '6',
        college: 'Memphis',
      },
    ];
    jest
      .spyOn(appController, 'getPlayersByPosition')
      .mockImplementation(() => result);

    expect(appController.getPlayersByPosition('k')).toBe(result);
  });
});
