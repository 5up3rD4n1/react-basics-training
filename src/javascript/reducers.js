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

console.log(aggregateCategory(arr3, "clothes")); // => { items: string[]; value: number};

/**
  Calculate Sum of Array Elements: Use reduce() to find the sum of all elements in an array.
  Example: [1,2,3,4,5,6,7,8,9] = 45

  Calculate Product of Array Elements: Use reduce() to find the product of all elements in an array.
  Example: [1,2,3,4,5,6,7,8,9] = 362880

  Flatten an Array: Use reduce() to flatten a multidimensional array into a single array.
  Example: [[1,2,3], [4, 5, 6], [7, 8, 9]] => [1,2,3,4,5,6,7,8,9]

  Counting Occurrences of Elements: Use reduce() to count the occurrences of each element in an array.
  Example: [1,2,3,2,3,5,6,7,8] => {1:1, 2:2, 3:2, 5:1, 6:1, 7:1, 8:1}

  Find Minimum Value in an Array: Use reduce() to find the minimum value in an array.
  Example: [7, 10, 23, 5, 77, 200, 100, 2, 0, -20] => -20

  Find Maximum Value in an Array: Use reduce() to find the maximum value in an array.
  Example: [7, 10, 23, 5, 77, 200, 100, 2, 0, -20] => 200

  Remove Duplicates from an Array: Use reduce() to remove duplicate elements from an array.
  Example: [1,2,3,2,3,5,6,7,8] => [1, 2, 3, 5, 6, 7, 8]

  Transforming Array into Object: Use reduce() to transform an array into an object with specific key-value pairs.
  Example: [['value', 1000], ['name', 'Item 1'], ['category', 'Cat-1']] => {name: 'Item 1', category: 'Cat-1', value: 1000}
*/
