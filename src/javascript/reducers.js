// reduce

// concatenate values

// reduce transform an array to a different shape or result

const arr1 = [{ value: 1 }, { value: 5 }, { value: 10 }]; // => 16

arr1.reduce((acc, num) => acc + num.value, 0);

const arr2 = [
  [2, 4, 6],
  [4, 3, 2],
  [5, 6, 8],
]; // => [2, 4, 5]

arr2.reduce((acc, arr) => {
  return [...acc, arr[0]];
}, []);

const arr3 = [
  {
    name: "item 1",
    category: "clothes",
    value: 1000,
  },
  {
    name: "item 2",
    category: "hats",
    value: 1000,
  },
  {
    name: "item 3",
    category: "shoes",
    value: 1000,
  },
  {
    name: "item 4",
    category: "clothes",
    value: 1000,
  },
  {
    name: "item 5",
    category: "shoes",
    value: 1000,
  },
  {
    name: "item 6",
    category: "hats",
    value: 1000,
  },
];

// reduce list to a new shape were a value of a particular category is added/sum up
// case for clothes => {
// items: ['item 1', 'item 4', ...] // all names of the items included
// value: 2000 // total
// }

function aggregateCategory(arr, category) {
  return arr.reduce(
    (acc, item) => {
      if (item.category !== category) {
        return acc;
      }

      return {
        items: [...acc.items, item.name],
        value: acc.value + item.value,
      };
    },
    { items: [], value: 0 }
  );
}

console.log("============================ last");
console.log(aggregateCategory(arr3, "clothes")); // => { items: string[]; value: number};

// Calculate Sum of Array Elements: Use reduce() to find the sum of all elements in an array.
// Example: [1,2,3,4,5,6,7,8,9] = 45

const arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function sumAllElements(arr) {
  return arr.reduce((acc, num) => {
    return acc + num;
  }, 0);
}

console.log("====================== sumAll");
console.log(sumAllElements(arr4));

//  Calculate Product of Array Elements: Use reduce() to find the product of all elements in an array.
//  Example: [1,2,3,4,5,6,7,8,9] = 362880

const arr5 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function productOfAllElements(array) {
  return array.reduce((acc, elem) => {
    return acc * elem;
  }, 1);
}

console.log("====================== multiply");
console.log(productOfAllElements(arr5));

// Flatten an Array: Use reduce() to flatten a multidimensional array into a single array.
//  Example: [[1,2,3], [4, 5, 6], [7, 8, 9]] => [1,2,3,4,5,6,7,8,9]

const arr6 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
function flattenArrayElements(arr) {
  return arr.reduce((acc, elem) => {
    return [...acc, ...elem];
  }, []);
}
console.log("====================== flatten Array");
console.log(flattenArrayElements(arr6));

//  Counting Occurrences of Elements: Use reduce() to count the occurrences of each element in an array.
// Example: [1,2,3,2,3,5,6,7,8] => {1:1, 2:2, 3:2, 5:1, 6:1, 7:1, 8:1}

const arr7 = [1, 2, 3, 2, 3, 5, 6, 7, 8];

function countingOccurrences(array) {
  return array.reduce((acc, num) => {
    return { ...acc, [num]: (acc[num] || 0) + 1 };
  }, {});
}
console.log("====================== count occurencies");
console.log(countingOccurrences(arr7));

// Find Minimum Value in an Array: Use reduce() to find the minimum value in an array.
// Example: [7, 10, 23, 5, 77, 200, 100, 2, 0, -20] => -20

const arr8 = [7, 10, 23, 5, 77, 200, 100, 2, 0, -20];

function findMinimumValue(arr) {
  return arr.reduce((acc, min) => {
    // if acc its lowest than min(number) then return the acc if its not then return the number
    return acc < min ? acc : min;
  });
}

console.log("====================== find minimum");
console.log(findMinimumValue(arr8));

// Find Maximum Value in an Array: Use reduce() to find the maximum value in an array.
//  Example: [7, 10, 23, 5, 77, 200, 100, 2, 0, -20] => 200

const arr9 = [7, 10, 23, 5, 77, 200, 100, 2, 0, -20];

function findMaxValue(arr) {
  return arr.reduce((acc, max) => {
    // if acc its bigger than max(number) then return the acc if its not then return the number
    return acc > max ? acc : max;
  });
}

console.log("====================== find maximum");
console.log(findMaxValue(arr9));

// Remove Duplicates from an Array: Use reduce() to remove duplicate elements from an array.
// Example: [1,2,3,2,3,5,6,7,8] => [1, 2, 3, 5, 6, 7, 8]

const array1 = [1, 2, 3, 2, 3, 5, 6, 7, 8];
// const uniqArray = Array.from(new Set(array1));
// console.log(uniqArray);
function removeDuplicates(array) {
  return array.reduce((acc, doble) => {
    // if acc includes "doble" = number from array then return acc if its not then add to acc the numbers
    return acc.includes(doble) ? acc : [...acc, doble];
  }, []);
}

console.log("====================== remove duplicates");
console.log(removeDuplicates(array1));

// Transforming Array into Object: Use reduce() to transform an array into an object with specific key-value pairs.
// Example: [['value', 1000], ['name', 'Item 1'], ['category', 'Cat-1']] => {name: 'Item 1', category: 'Cat-1', value: 1000}

const array2 = [
  ["name", "Item 1"],
  ["category", "Cat-1"],
  ["value", 1000],
  ["age", 20],
];

function transformIntoObject(array) {
  // In the reduce method you need the acc and the array with the key and the value('cause thats what we need to change). Spread the acc and add a key with the value ex: name = key and "Item 1" = value
  // {}, [name, "Item 1"]
  // {name: "Item 1"}, ["category", "Cat-1"]

  // function (props) : {id: string; name: string}
  // function ({id, name})
  return array.reduce((acc, [key, value]) => {
    // const key = item[0];
    // const value = item[1];

    // key="key", value="value", other="", rest=["", ""] = ["key", "value", "", "", ""]
    // const [key, value, other, ...rest] = item;

    return { ...acc, [key]: value };
  }, {});
}
console.log("====================== array into object");
console.log(transformIntoObject(array2));
