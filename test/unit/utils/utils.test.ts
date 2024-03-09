import exp = require('constants');
import {add, multiply, classifier} from '../../../src/typescript/utils/utils';

describe('Unit: src/typescript/utils/utils', () => {
  describe('add fn', () => {
    it('sums value 1 and value 2', () => {
      const value1 = 10;
      const value2 = 8;
      const result = add(value1, value2);
      const expected = 18;
      expect(result).toEqual(expected);
    });
  });
  describe('multiply', () => {
    it('multiplies number 1 and number 2', () => {
      const number1 = 230;
      const number2 = 2;

      const result = multiply(number1, number2);
      const expected = 460;

      expect(result).toEqual(expected);
    });
  });
  describe('classifier', () => {
    describe('when category is shoes', () => {
      it('uses classifier fn', () => {
        const result = classifier('shoes');
        const expected = 'footwear';

        expect(result).toEqual(expected);
      });
    });

    describe('when category is watches', () => {
      it('uses classifier fn', () => {
        const result = classifier('watches');
        const expected = 'sportwear';
        expect(result).toEqual(expected);
      });
    });

    describe('when category is hats', () => {
      it('uses classifier fn', () => {
        const result = classifier('hats');
        const expected = 'headwear';
        expect(result).toEqual(expected);
      });
    });

    describe('when category is unknown', () => {
      it('uses classifier fn', () => {
        const result = classifier('unknown');
        const expected = 'unknown';

        expect(result).toEqual(expected);
      });
    });
  });
});
