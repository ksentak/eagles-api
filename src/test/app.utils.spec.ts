import { AppUtils } from '../app.utils';

describe('AppUtils', () => {
  let appUtils: AppUtils;

  beforeEach(() => {
    appUtils = new AppUtils();
  });

  describe('validatePosition', () => {
    it('should return true for valid positions', () => {
      const validPositions = [
        'qb',
        'rb',
        'wr',
        'te',
        'ot',
        'g',
        'c',
        'de',
        'dt',
        'lb',
        'cb',
        's',
        'pk',
        'p',
        'ls',
      ];
      validPositions.forEach((position) => {
        expect(appUtils.validatePosition(position)).toBe(true);
      });
    });

    it('should return false for invalid positions', () => {
      const invalidPositions = [
        '',
        'qb1',
        'w r',
        'TE',
        'NT',
        'defensive back',
        'k',
        'l',
        't',
        'z',
      ];
      invalidPositions.forEach((position) => {
        expect(appUtils.validatePosition(position)).toBe(false);
      });
    });
  });
});
