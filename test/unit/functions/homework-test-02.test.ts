import {
  maxNumber,
  removeDuplicateNum,
  randomNum,
  stringIntoLength,
  findAverage,
  averageNums,
  sumArr,
} from '../../../src/typescript/functions/homework-test-02';

export const strings = ['Just', 'call', 'my', 'name', 'Im', 'not', 'ashamed'];
export const duplicate = [2, 5, 22, 4, 5, 22, 34, 12, 98, 34, 8, 10, 4];

// MAX NUMBER
describe('Unit: src/typescript/functions/homework-test-02', () => {
  describe('maxNumber', () => {
    describe('returns the max of 2 numbers', () => {
      it('returns max number is 24', () => {
        const result = maxNumber(24, 12);
        const expected = 24;
        expect(result).toEqual(expected);
      });
    });
  });

  describe('maxNumber', () => {
    describe('if both parameters are undefined', () => {
      it('returns 0 as default', () => {
        // const result = maxNumber(undefined, undefined);
        const result = maxNumber(undefined, undefined);
        const expected = 0;
        expect(result).toEqual(expected);
      });
    });
  });

  // RANDOM NUMBER
  describe('when given a random number', () => {
    it('returns a random number between 0 and 1000', () => {
      expect.assertions(2);

      const result = randomNum(0, 1000);

      const lowerRange = 0;
      const upperRange = 1000;

      expect(result).toBeGreaterThan(lowerRange);
      expect(result).toBeLessThan(upperRange);
    });
  });

  // PREVIOUS EXERCISES

  // find average
  describe('when sum array nums', () => {
    it('sums all numbers in an array', () => {
      const result = sumArr(averageNums);
      const expected = 231;
      expect(result).toEqual(expected);
    });
  });

  describe('find average from sum', () => {
    it('finds average from sum', () => {
      const result = findAverage(averageNums);
      const expected = 28.875;
      expect(result).toEqual(expected);
    });
  });

  // repeated numbers
  describe('when num its repeated', () => {
    it('removes the duplicated number', () => {
      const result = removeDuplicateNum(duplicate);
      const expected = [2, 5, 22, 4, 34, 12, 98, 8, 10];
      expect(result).toEqual(expected);
    });
  });

  // string to string length
  describe('stringIntoLength', () => {
    it('returns string length [4, 4, 2, 4, 2, 3, 7]', () => {
      const result = stringIntoLength(strings);

      const expected = [4, 4, 2, 4, 2, 3, 7];

      expect(result).toEqual(expected);
    });
  });
});
