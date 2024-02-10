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
    const newArr = [...acc, ...arr];
    return [...newArr].reverse();
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
    return acc > 3 ? acc.push(num * 2) : acc;
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
