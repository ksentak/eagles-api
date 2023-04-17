import { AppService } from '../app.service';
import players from '../officialRoster.json';

describe('AppService', () => {
  let appService: AppService;

  beforeEach(() => {
    appService = new AppService();
  });

  describe('getAllPlayers', () => {
    it('should return all players', () => {
      const result = appService.getAllPlayers();

      expect(result).toEqual(players);
    });
  });

  describe('getRandomPlayer', () => {
    it('should return a random player', () => {
      const result = appService.getRandomPlayer();

      expect(result).toBeDefined();
      expect(result).toHaveProperty('id');
      expect(result).toHaveProperty('number');
      expect(result).toHaveProperty('first_name');
      expect(result).toHaveProperty('last_name');
      expect(result).toHaveProperty('position');
      expect(result).toHaveProperty('height');
      expect(result).toHaveProperty('weight');
      expect(result).toHaveProperty('age');
      expect(result).toHaveProperty('years_pro');
      expect(result).toHaveProperty('college');
    });
  });

  describe('getPlayerByNumber', () => {
    it('should return the player with the given number', () => {
      const result = appService.getPlayerByNumber('1');

      expect(result).toBeDefined();
      expect(result).toHaveProperty('id');
      expect(result).toHaveProperty('number');
      expect(result).toHaveProperty('first_name');
      expect(result).toHaveProperty('last_name');
      expect(result).toHaveProperty('position');
      expect(result).toHaveProperty('height');
      expect(result).toHaveProperty('weight');
      expect(result).toHaveProperty('age');
      expect(result).toHaveProperty('years_pro');
      expect(result).toHaveProperty('college');
    });

    it('should return undefined if no player with the given number exists', () => {
      const result = appService.getPlayerByNumber('999');

      expect(result).toBeUndefined();
    });
  });

  describe('getPlayerByPosition', () => {
    it('should return all players for a given position', () => {
      const result = appService.getPlayerByPosition('qb');
      expect(result[0]).toHaveProperty('position', 'qb');
    });
  });
});
