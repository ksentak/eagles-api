import { Injectable } from '@nestjs/common';
import _ from 'lodash';

const validPositions = [
  'qb',
  'rb',
  'wr',
  'te',
  't',
  'g',
  'c',
  'de',
  'dt',
  'lb',
  'cb',
  's',
  'k',
  'p',
  'ls',
];

@Injectable()
export class AppUtils {
  validatePosition(position: string) {
    return _.includes(validPositions, position);
  }
}
