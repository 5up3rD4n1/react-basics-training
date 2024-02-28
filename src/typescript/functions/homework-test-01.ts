export function sum(a: number, b: number): number {
  return a + b;
}

// 1. Create a function that receives a text input with colors
// if the text is equal to blue return an array with rgb values [0, 0, 255]
// if the text is equal to green return an array with rgb values [0, 255, 0]
// if the text is equal to red return an array with rgb values [255, 0, 0]
// if not then just return rgb black [0, 0, 0]

// [number, number, number] => Tuple
// [number, number] => Tuple or Pair
export function textToRGB(color: string): [number, number, number] {
  if (color === 'red') {
    return [255, 0, 0];
  }

  if (color === 'blue') {
    return [0, 0, 255];
  }

  if (color === 'green') {
    return [0, 255, 0];
  }

  return [0, 0, 0];
}

// 2. Code a function that returns the max of 2 numbers
// Allow the function to receive undefined parameters
// If both parameters are undefined return 0 as defualt

// 3. Create a function to classify users
// Code a function that receives 3 parameters, name, gender and age
// return an object with the received parameters name, gender and age plust the new classification
// if the gender is male and age is bigger than 50 add classification retired-male
// if the gender is male and age is lower than 50 add classification active-male
// if the gender is male and age is lower than 18 add classification active-kid
// if the gender is female and age is bigger than 50 add classification retired-female
// if the gender is female and age is lower than 50 add classification active-female
// if the gender is female and age is lower than 18 add classification active-kid

// 4. Create a function that generates random numbers bewtween 0 and 1000
// Validate with your tests that the number generated is not bigger or lower than the expected ranges

// 5 Create unit tests for at least 3 previous excersices using reduce and arrays
// What if there is only one element of that type
// Test independent object keys if necessary (store-1~product-1~user-1) => { } if applicable
// discount === [1, 4, 5] expect(result[key].discount).toEqual(expected)

// Investigate about mocks and fixtures
