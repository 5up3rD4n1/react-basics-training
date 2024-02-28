import {
  sum,
  textToRGB,
} from '../../../src/typescript/functions/homework-test-01';

describe('Unit: src/typescript/functions/homework-test-01', () => {
  describe('sum', () => {
    it('adds up both numbers', () => {
      const result = sum(1, 1);
      const expected = 2;

      expect(result).toEqual(expected);
    });
  });

  describe('textToRGB', () => {
    describe('when text is equal to red', () => {
      it('returns rgb [255, 0, 0]', () => {
        const result = textToRGB('red');

        const expected = [255, 0, 0];

        expect(result).toEqual(expected);
      });
    });

    describe('when text is equal to blue', () => {
      it('returns rgb [0, 0, 255]', () => {
        const result = textToRGB('blue');

        const expected = [0, 0, 255];

        expect(result).toEqual(expected);
      });
    });

    describe('when text is equal to green', () => {
      it('returns rgb [0, 255, 0]', () => {
        const result = textToRGB('green');

        const expected = [0, 255, 0];

        expect(result).toEqual(expected);
      });
    });

    describe('when text is not a valid/recognized color', () => {
      it('returns rgb black [0, 0, 0]', () => {
        const result = textToRGB('mangeta');

        const expected = [0, 0, 0];

        expect(result).toEqual(expected);
      });
    });
  });
});
