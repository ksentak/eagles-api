import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from '../app.controller';
import { AppService } from '../app.service';
import { AppUtils } from '../app.utils';
import sampleData from './sampleData';

describe('AppController', () => {
  let appController: AppController;
  let appService: AppService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService, AppUtils],
    }).compile();

    appController = app.get<AppController>(AppController);
    appService = app.get<AppService>(AppService);
  });

  describe('getAll', () => {
    it('should return an array of all players', () => {
      // Arrange
      const getAllPlayersSpy = jest
        .spyOn(appService, 'getAllPlayers')
        .mockReturnValue(sampleData);

      // Act
      const response = appController.getAll();

      // Assert
      expect(getAllPlayersSpy).toHaveBeenCalled();
      expect(response).toEqual(expect.any(Array));
      expect(response).toEqual(sampleData);
    });
  });

  describe('getRandomPlayer', () => {
    it('should return a random player', () => {
      // Arrange
      const randomPlayer = sampleData[0];
      jest.spyOn(appService, 'getRandomPlayer').mockReturnValue(randomPlayer);

      // Act
      const response = appController.getRandomPlayer();

      // Assert
      expect(appService.getRandomPlayer).toHaveBeenCalled(); // Ensure that the service method was called
      expect(response).toEqual(randomPlayer);
    });
  });

  describe('getPlayerByNumber', () => {
    it('should return a single player by their number', () => {
      // Arrange
      const getPlayerByNumberSpy = jest
        .spyOn(appService, 'getPlayerByNumber')
        .mockReturnValue(sampleData[3]);

      // Act
      const response = appController.getPlayerByNumber({ id: 4 });

      // Assert
      expect(response).toEqual(expect.any(Object));
      expect(response).toEqual(sampleData[3]);
    });

    it('should throw a 404 error if player is not found', () => {
      // Arrange
      const mockPlayerByNumber = jest
        .spyOn(appService, 'getPlayerByNumber')
        .mockReturnValue(undefined);
      const invalidPlayerNumber = '49';

      // Act and Assert
      expect(() => {
        appController.getPlayerByNumber({ id: invalidPlayerNumber });
      }).toThrow('Player not found');

      expect(mockPlayerByNumber).toHaveBeenCalledWith(invalidPlayerNumber);
    });

    it('should throw a 400 error if player number is out of range', () => {
      // Arrange
      const invalidPlayerNumber = '101';

      // Act and Assert
      expect(() => {
        appController.getPlayerByNumber(invalidPlayerNumber);
      }).toThrow('Player number must be between 0-99');
    });
  });

  describe('getPlayersByPosition', () => {
    it('should return an array of players by position', () => {
      // Arrange
      const position = 'cb';
      const expectedPlayers = [sampleData[1], sampleData[2]];
      jest
        .spyOn(appService, 'getPlayerByPosition')
        .mockReturnValue(expectedPlayers);

      // Act
      const response = appController.getPlayersByPosition({ position });

      // Assert
      expect(response).toEqual(expectedPlayers);
      expect(appService.getPlayerByPosition).toHaveBeenCalledWith(position);
    });

    it('should return an empty array if no players in the position group exist', () => {
      // Arrange
      jest.spyOn(appController, 'getPlayersByPosition').mockReturnValue([]);

      // Act
      const response = appController.getPlayersByPosition('dt');

      // Assert
      expect(response).toEqual([]);
    });

    it('should throw a 400 error if an invalid position is entered', () => {
      // Act & Assert
      expect(() => {
        appController.getPlayersByPosition('invalidPosition');
      }).toThrowError('Please enter a valid position');
    });
  });
});
