// global

// describe its a description block
// we are going to use a string to identify use cases
// describe also set up start up and finish behaviours for the current block/description

// func sum(a, b)

// Case 1: sum 2 positive numbers
// When there are 2 numbers
// Given than they are both positive
// Then they should be added up together

// TDD: Test driven development

function sum(a: number, b?: number): number {
  // if (!b) {
  //   return a;
  // }

  if (!b) {
    return a + 1;
  }

  return a + b;
}

describe('Unit: src/typescript/index.ts', () => {
  describe('sum', () => {
    describe('when both arguments are positive', () => {
      it('sums both numbers', () => {
        const result = sum(2, 3);

        const expected = 5;
        // toEqual => matcher
        expect(result).toEqual(expected);
        // expect(result).toBeGreaterThan(0);
        // expect(result).not.toBeUndefined();
      });
    });

    describe('when first parameter is positive', () => {
      describe('and second argument is undefined', () => {
        it('returns just the first argument as a result', () => {
          const result = sum(1, undefined);

          const expected = 2;

          expect(result).toEqual(expected);
        });
      });
    });

    describe('when first parameter is undefined', () => {
      describe('and second parameter is undefined', () => {});
    });
  });

  describe('subtract', () => {});
});
