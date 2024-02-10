// Calculate Sum of Array Elements: Use reduce() to find the sum of all elements in an array.
// Example: [4, 6, 8, 14] = 32

const myArr = [4, 6, 8, 14];

function sumArrElements(myArr) {
  return myArr.reduce((acc, number) => acc + number);
}

console.log("=============== sum all ======================");
console.log(sumArrElements(myArr));

//  Calculate Product of Array Elements: Use reduce() to find the product of all elements in an array.
//  Example: [12, 4, 13, 5, 8] = 24960

const mySecondArr = [12, 4, 13, 5, 8];

function multiplyArrElementds(array) {
  return array.reduce((acc, element) => acc * element, 1); // u must use 1 cause 0 * by any number is = 0
}

console.log("============= multiply ===============");
console.log(multiplyArrElementds(mySecondArr));

// Find Maximum Value in an Array: Use reduce() to find the maximum value in an array.
//  Example: [7, 10, 23, 5, 77, 4000, 100, 2, 0, -20] => 4000

const myThirdArr = [7, 10, 23, 5, 77, 4000, 100, 2, 0, -20];

function findMaxValue(array) {
  return array.reduce((acc, value) => {
    if (acc > value) {
      return acc;
    }
    return value;
  }, []);
}
console.log("============= max ===============");
console.log(findMaxValue(myThirdArr));

// Flatten an Array: Use reduce() to flatten a multidimensional array into a single array and reverse it
//  Example: [[4,5,6], [7, 8, 9], [10, 11, 12]] => [12,11,10,9,8,7,6,5,4]

const myFourthArr = [
  [4, 5, 6],
  [7, 8, 9],
];

function flattenArray(array) {
  return array.reduce((acc, arr) => {
    const newArr = [...arr.reverse(), ...acc];
    return [...newArr];
  }, []);
}

console.log("============= flatten ===============");
console.log(flattenArray(myFourthArr));

// Transforming Array into Object: Use reduce() to transform an array into an object with specific key-value pairs.
// Example: [['value', 1000], ['name', 'Item 1'], ['category', 'Cat-1']] => {name: 'Item 1', category: 'Cat-1', value: 1000}

const myFifthArr = [
  ["name", "Item 1"],
  ["category", "Cat-1"],
  ["value", 1000],
];

function transformArrIntoObj(arr) {
  return arr.reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});
}

console.log("============= Array into Obj ===============");
console.log(transformArrIntoObj(myFifthArr));

//  Counting Occurrences of Elements: Use reduce() to count the occurrences of each element in an array.
// Example: [1,2,3,2,3,5,6,7,8] => {1:1, 2:2, 3:2, 5:1, 6:1, 7:1, 8:1}

const mySixArr = [1, 2, 2, 3, 2, 3, 5, 6, 6, 7, 8];

function counting(array) {
  return array.reduce((acc, elem) => {
    return acc.includes(elem) ? acc : [...acc, elem];
  }, []);
}

console.log("============= counting ===============");
console.log(counting(mySixArr));

// It takes the numbers > 3 and the result its multiply by 2

const array = [4, 2, 1, 7, 15, 0, -3];

function biggerThanMultiply(arr) {
  return arr.reduce((acc, num) => {
    return num > 3 ? [...acc, num * 2] : acc;
    // if (acc > 3) {
    //   acc.push(num * 2);
    // }
    // return acc;
  }, []);
}

console.log("============= biggerThanMultiply ===============");
console.log(biggerThanMultiply(array));

// Find Minimum Value in an Array: Use reduce() to find the minimum value in an array.
// Example: [7, 10, 23, 5, 77, 200, 100, 2, 0, -20] => -20

const arr = [0, 12, 23, 400, 3, -2, 5];

function findMin(arr) {
  return arr.reduce((acc, num) => {
    return acc < num ? acc : num;
  });
}

console.log("============= min ===============");
console.log(findMin(arr));

// Remove Duplicates from an Array: Use reduce() to remove duplicate elements from an array.
// Example: [1,2,3,2,3,5,6,7,8] => [1, 2, 3, 5, 6, 7, 8]

const duplArr = [1, 2, 2, 3, 2, 3, 5, 6, 6, 7, 8, 9];
function removeDuplicates(arr) {
  return arr.reduce((acc, num) => {
    return acc.includes(num) ? acc : [...acc, num];
  }, []);
}

console.log("============= remove  ===============");
console.log(removeDuplicates(duplArr));

// spread with ARRAY, is not a merge is a concat (append)

const num8 = 8;
const arr1 = [1, 2, 3, 4];
const arr2 = [5, 6, 7];
const arr3 = [...arr1, ...arr2, num8, 9, 10, 11];

function spread(arr) {
  return arr.reduce((acc, elem) => {
    const newArray = [elem, ...acc];
    return newArray;
  }, []);
}
console.log("============= spread ===============");
console.log(spread(arr3));

// code a function using reduce to reverse an array

const arr10 = [20, 22, 24, 26, 28, 30];

function reverseArr(arr) {
  arr.reduce((acc, num) => {
    // [] , 20 => [20]
    // [20] , 22 => [22, 20]
    // [22, 20], 24 => [24, 22, 20]
    // [24, 22, 20], 26 => [26,24,22,20]
    // [26,24,22,20], 28 => [28,26,24,22,20]
    // [28,26,24,22,20] 30 => [30,28,26,24,22,20]
    return [num, ...acc];
  }, []);
}

console.log(reverseArr(arr10));

// Write a function to zip two arrays into an array of arrays, where each subarray contains elements from both arrays at the same index.

// zipper

// user[1]
// preferences[1]

// => [[U1, P1], ] => function([user, preferences])

// [1, 2, 3]
// [4, 5, 6]

// => [[1, 4], [2, 5], [3, 6]]

// 3 => [0] => [1, 4]  => [1] => [2, 5] => [2] => [3, 6]
const arr01 = [1, 2, 3];
const arr02 = [4, 5, 6];

// => [..., [9, undefined]]
// => [...]

function zipArrayIntoArray(arr1, arr2) {
  // const maxLength = Math.max(arr1.length, arr2.length);

  // const result = [];

  // for (let index = 0; index < maxLength; index++) {
  //   const pair = [arr1[index], arr2[index]];

  //   result.push(pair);
  // }

  return arr1.reduce((acc, num, i) => {
    // [], 1, 0
    return [...acc, [num, arr2[i]]];
  }, []);

  // arr1.map((num, i) => ([num, arr2[i]]));
}

console.log(zipArrayIntoArray(arr01, arr02));

// create a function that splits an array based on a boolean check function
// [1, 2, 3, 4, 5, 6, 7, 8, 9], () => boolean
// splitArrayWith(arr, isEven) => [[1,3,5,7,9], [2,4,6,8]]

function isEven(num) {
  return num % 2 === 0;
}

const fullArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function splitArrayWith(arr, booleanFn) {
  return arr.reduce(
    (acc, num) => {
      // [[],[]] , 1 => [[],[]]
      // [[],[1]], 2 => [[2],[1]]

      // const result = booleanFn(num);
      // const index = result ? 1 : 0;
      // const inverterIndex = result ? 0 : 1;

      // const newArray = [...acc[index], num];

      // return result
      //   ? [acc[inverterIndex], newArray]
      //   : [newArray, acc[inverterIndex]];

      // const index = ;

      acc[booleanFn(num) ? 1 : 0].push(num);
      return acc;

      // return [acc, newArry];
    },
    [[], []]
  );
}

console.log(splitArrayWith(fullArr, isEven));

function genRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Write a function to generate an array of random integers within a specified range
// generate an array of 20 random items from 0 to 100
// generateArray(20, 0, 100);
// [0-,-,-,-...100]

function randomIntegers(num, min, max, randomNumberFn) {
  // [] => length (num) => [ 20 => randomNumberFn]

  // [<empty>, ... 19 more]

  // [1, 2, 3, 4, 5].map(() => 1) // [1, 1, 1, 1, 1]
  // [1, 2, 3, 4, 5].map(() => generateNum(min, max)) // [1, 1, 1, 1, 1]

  const arrNew = new Array(num).fill(null).map(() => {
    return randomNumberFn(min, max);
  });
  return arrNew;
}

console.log(randomIntegers(20, 0, 100, genRandomNumber));

// return the index of the 2 elements different that when added up they match a provided number
// if not possible return [-1, -1]

// [1, 3, 4, 9, 50, 20, 44, 50], 70 => [4, 5]
// [1, 3, 4, 9, 50, 20, 44, 50], 53 => [1, 4]

const arr03 = [1, 3, 4, 100, 9, 50, 33, 20, 44, 50];

// users => id categoria
//

// function iterateArray(arr) {
//   // n^2 => iterate the same list for each item in the list
//   arr.forEach((i) => {
//     arr.forEach((j) => {
//       console.log(i, j, i + j);
//     });
//   });
// }

// iterateArray(arr03);

// 1 + 3 = 4 === 70
// 1 + 4 = 5 === 70
// 1 + 100 = 101 === 70
// ---
// 3 + 1 = 4 === 70
// --
// 50 + 20 === 70

// premature optimization

// num[i] + num[i] = num === target

function sumByIndex(arr, target) {
  let index = [-1, -1];

  arr.forEach((num1, index1) => {
    arr.forEach((num2, index2) => {
      const result = num1 + num2;

      if (result === target) {
        index = [index1, index2];
      }
    });
  });

  return index;
}

console.log(sumByIndex(arr03, 70));

// find a 2 items an a list of words that the first element is a contained in the second element
const arr04 = [
  "element",
  "will",
  "appear",
  "in",
  "other",
  "this",
  "list",
  "of",
  "words",
  "is",
];

// function findSubSets(arr04) => [5, 9]

function findSubSets(arr) {
  let index = [-1, -1];

  let isFound = false;

  const length = arr.length;

  for (let index01 = 0; index01 < length; index01++) {
    for (let index02 = 0; index02 < length; index02++) {
      if (index02 <= index01) {
        continue;
      }

      const word1 = arr[index01];
      const word2 = arr[index02];

      const result = word1.includes(word2);

      if (result) {
        index = [index01, index02];

        isFound = true;

        break;
      }
    }

    if (isFound) {
      break;
    }
  }

  // arr.forEach((word1, index01) => {
  //   arr.forEach((word2, index02) => {
  //     const result = word1.includes(word2);

  //     if (result) {
  //       index = [index01, index02];
  //     }
  //   });
  // });
  return index;
}

console.log(findSubSets(arr04));
