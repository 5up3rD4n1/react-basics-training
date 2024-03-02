// 2. Code a function that returns the max of 2 numbers
// Allow the function to receive undefined parameters
// If both parameters are undefined return 0 as defualt

export function maxNumber(
  num1: number | undefined,
  num2: number | undefined
): number /** | undefined */ {
  if (num1 === undefined || num2 === undefined) {
    return 0;
  }

  // return num1 > num2 ? num1 : num2;

  if (num1 > num2) {
    return num1;
  }

  if (num2 > num1) {
    return num2;
  }

  return 0;
}

// 4. Create a function that generates random numbers bewtween 0 and 1000
// Validate with your tests that the number generated is not bigger or lower than the expected ranges
export function randomNum(max: number, min: number): number {
  const random = Math.floor(Math.random() * (max - min + 1)) + min;

  return random > 0 && random < 1000 ? random : 0;
  //  if (random > 0 && random < 1000) {
  //   return random;
  // }
  // return 0;
}

// 5 Create unit tests for at least 3 previous excersices using reduce and arrays
// What if there is only one element of that type
// Test independent object keys if necessary (store-1~product-1~user-1) => { } if applicable
// discount === [1, 4, 5] expect(result[key].discount).toEqual(expected)

// Investigate about mocks and fixtures

export const averageNums = [10, 2, 5, 8, 32, 45, 75, 54];

export function sumArr(arr: number[]): number {
  return arr.reduce((acc, num) => acc + num);
}

export function findAverage(arr: number[]): number {
  let avg = 0;
  const length = arr.length;

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    avg += num;
  }
  return avg / length;
}

export function removeDuplicateNum(arr: number[]): number[] {
  return arr.reduce((acc: number[], num: number) => {
    return acc.includes(num) ? acc : [...acc, num];
  }, []);
}

export function stringIntoLength(arr: string[]): number[] {
  let acc: number[] = [];

  for (let i = 0; i < arr.length; i++) {
    const char = arr[i];

    acc = [...acc, char.length];
  }
  return acc;
}
