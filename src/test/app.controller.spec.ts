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

  describe('getAll', () => {
    it('should return an array of all players', () => {
      // Arrange
      jest.spyOn(appController, 'getAll').mockReturnValue(sampleData);

      // Act
      const response = appController.getAll();

      // Assert
      expect(response).toEqual(expect.any(Array));
      expect(response).toEqual(sampleData);
    });
  });

  describe('getRandomPlayer', () => {
    it('should return a random player', () => {
      // Arrange
      jest
        .spyOn(appController, 'getRandomPlayer')
        .mockReturnValue(sampleData[0]);

      // Act
      const response = appController.getRandomPlayer();

      // Assert
      expect(response).toEqual(sampleData[0]);
    });
  });

  describe('getPlayerByNumber', () => {
    it('should return a single player by their number', () => {
      // Arrange
      jest
        .spyOn(appController, 'getPlayerByNumber')
        .mockReturnValue(sampleData[3]);

      // Act
      const response = appController.getPlayerByNumber('4');

      // Assert
      expect(response).toEqual(expect.any(Object));
      expect(response).toEqual(sampleData[3]);
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

    it('should throw a 400 error if an invalid position is entered', () => {
      // Act & Assert
      expect(() => {
        appController.getPlayersByPosition('invalidPosition');
      }).toThrowError('Please enter a valid position');
    });
  });
});
