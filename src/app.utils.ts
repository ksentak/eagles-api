import { Injectable } from '@nestjs/common';
import _ from 'lodash';

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

@Injectable()
export class AppUtils {
  validatePosition(position: string) {
    return _.includes(validPositions, position);
  }
}
