const products1 = [
  {
    storeId: "store-1",
    productId: "product-1",
    amount: 3,
  },
  {
    storeId: "store-2",
    productId: "product-1",
    amount: 5,
  },
  {
    storeId: "store-1",
    productId: "product-1",
    amount: 7,
  },
  {
    storeId: "store-2",
    productId: "product-2",
    amount: 1,
  },
  {
    storeId: "store-3",
    productId: "product-1",
    amount: 2,
  },
  {
    storeId: "store-2",
    productId: "product-2",
    amount: 9,
  },
  {
    storeId: "store-3",
    productId: "product-1",
    amount: 5,
  },
  {
    storeId: "store-2",
    productId: "product-3",
    amount: 6,
  },
  {
    storeId: "store-2",
    productId: "product-2",
    amount: 3,
  },
];

// Homework translate this to a for loop
function groupByStoreAndProduct(arr) {
  return arr.reduce((acc, item) => {
    const key = `${item.storeId}#${item.productId}`;

    return {
      ...acc,
      // acc[key] => [{}, ...]
      // [key]: []
      [key]: acc[key] ? [...acc[key], item] : [item],
    };
    //{key: [...acc[key], item],
    // key: [{arr.serieId, arr. productId}],
    //key: [{arr.serieId, arr. productId}]
    //}
  }, {});
}

console.log(groupByStoreAndProduct(products1));

// Distribute evenly a array in n arrays of a similar size
// % modulus / indices

const nums1 = [
  90, 72, 85, 47, 67, 17, 63, 6, 32, 12, 51, 89, 54, 31, 31, 86, 88, 89, 23, 93,
  47, 77, 30, 43, 65, 58, 55, 28, 3, 99, 31, 12, 60, 22, 39, 30, 11, 11, 74, 16,
  98, 61, 82, 82, 91, 16, 39, 16, 10, 57,
];

// Implement the following with for loop
function splitArray(arr, n) {
  // [ 0   1   2   3  ]
  // [ [], [], [], [] ]
  const initial = new Array(n).fill().map(() => []);

  return arr.reduce((acc, num, index) => {
    const i = index % n;
    acc[i].push(num);

    return acc;
  }, initial);
}

console.log(splitArray(nums1, 10).map((list) => list.length));
console.log(splitArray(nums1, 10));

// Use reduce to group items with 2 identifiers
// Merge and sum the amounts of all items that belong to the same store and product id
// { [composite-key]: {storeId: "store-1", productId: "product-1", amount: SUM_OF_ALL_AMOUNT}}

const products2 = [
  {
    storeId: "store-1",
    productId: "product-1",
    amount: 3,
  },
  {
    storeId: "store-2",
    productId: "product-1",
    amount: 5,
  },
  {
    storeId: "store-1",
    productId: "product-1",
    amount: 7,
  },
  {
    storeId: "store-2",
    productId: "product-2",
    amount: 1,
  },
  {
    storeId: "store-3",
    productId: "product-1",
    amount: 2,
  },
  {
    storeId: "store-2",
    productId: "product-2",
    amount: 9,
  },
  {
    storeId: "store-3",
    productId: "product-1",
    amount: 5,
  },
  {
    storeId: "store-2",
    productId: "product-3",
    amount: 6,
  },
  {
    storeId: "store-2",
    productId: "product-2",
    amount: 3,
  },
];

// Solve the following statements using loops and its equivalent using array methods (sort, map, find, filter, reduce)

// 1.  finds and prints the average of all numbers in an array.
// 2.  removes all duplicate elements from an array.
// 3.  merges two arrays into a single array.
// 4.  finds the sum of all even numbers in an array.
// 5.  converts an array of strings into a single concatenated string.
// 6.  checks if all elements in an array are unique.
// 7.  converts an array of strings into an array of their respective lengths. ["hello", "yes", "is"] => [4, 3, 2]
// 8.  filters out all even numbers from an array.
// 9.  converts an array of objects into an object with key-value pairs.
// 10. flattens a nested array. [[1,2], [3, 4]] => [1, 2, 3, 4]
// 11. finds the index of the first occurrence of a given element in an array.
// 12. rotates the elements of an array to the right by a given number of positions.
// 13. sorts an array of objects based on a specified property. => last
// 14. groups objects in an array based on a common property.
// 15. finds the intersection of two arrays. [1, 2, 4, 5] => [1, 5, 7] => [1, 5]
// 16. transforms an array of objects by applying a given function to each object. // receives fn as parameter
// 17. converts an array of key-value pairs into an object.
// 18. removes all elements from an array that satisfy a given condition.
// 19. calculates the sum of values for a specific property in an array of objects.
// 20. finds the most common element in an array.
