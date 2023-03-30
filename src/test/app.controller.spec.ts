import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from '../app.controller';
import { AppService } from '../app.service';
import { AppUtils } from '../app.utils';
import sampleData from './sampleData';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService, AppUtils],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  it('should return all players', () => {
    // Arrange
    jest.spyOn(appController, 'getAll').mockReturnValue(sampleData);

    // Act
    const response = appController.getAll();

    // Assert
    expect(response).toEqual(sampleData);
  });

  it('should return a random player', () => {
    // Arrange
    jest.spyOn(appController, 'getRandomPlayer').mockReturnValue(sampleData[0]);

    // Act
    const response = appController.getRandomPlayer();

    // Assert
    expect(response).toEqual(sampleData[0]);
  });

  it('should return a specific player', () => {
    // Arrange
    jest
      .spyOn(appController, 'getPlayerByNumber')
      .mockReturnValue(sampleData[3]);

    // Act
    const response = appController.getPlayerByNumber('4');

    // Assert
    expect(response).toEqual(sampleData[3]);
  });

  it('should return a specific position group', () => {
    // Arrange
    jest
      .spyOn(appController, 'getPlayersByPosition')
      .mockReturnValue([sampleData[1], sampleData[2]]);

    // Act
    const response = appController.getPlayersByPosition('cb');

    // Assert
    expect(response).toEqual([sampleData[1], sampleData[2]]);
  });

  it('should return an empty array if no players in the position group exist', () => {
    // Arrange
    jest.spyOn(appController, 'getPlayersByPosition').mockReturnValue([]);

    // Act
    const response = appController.getPlayersByPosition('dt');

    // Assert
    expect(response).toEqual([]);
  });
});
