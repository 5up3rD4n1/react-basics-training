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
// if (gender === 'male' && age > 50) {
//   return {name: '', gender: '', age: 0, classification: 'retired-male'};
// }

// if (gender === 'male' && age < 50) {
//   return {name: '', gender: '', age: 0, classification: 'active-male'};
// }

// if (gender === 'male' && age < 18) {
//   return {name: '', gender: '', age: 0, classification: 'active-kid'};
// }

// if (gender === 'female' && age > 50) {
//   return {name: '', gender: '', age: 0, classification: 'retired-female'};
// }

// if (gender === 'female' && age < 50) {
//   return {name: '', gender: '', age: 0, classification: 'active-female'};
// }
// if (gender === 'female' && age < 18) {
//   return {name: '', gender: '', age: 0, classification: 'active-kid'};
// }
