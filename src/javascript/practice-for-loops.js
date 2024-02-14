// function map(arr) {
//   // for ({ /*initalizador*/ }; {/**  => boolean */}; {/** at the end of each iteration */};) {
//   //...
//   //}

//   function checkSize(i, length) {
//     return i < length;
//   }

//   function incrementVariables(i, j) {
//     i++;
//     j++;
//     console.log(i, j);
//   }

//   let j = 0;

//   for (let i = 0; checkSize(i, arr.length); j += arr[i], i++);

//   console.log(j);
// }

// map([1, 2, 3, 5, 7, 6]);

// Write a function that takes a string and returns an object that counts the number of occurrences of each character in the string using a for loop.

function countChars(text) {
  // arr.map(item => );

  const count = {};

  // y
  function addChar(char) {
    // {M: 1} => {M: 1}[y] => undefined
    if (count[char] === undefined) {
      return 1; // => 1
    }

    const currentCount = count[char];

    return currentCount + 1;
  }

  // i = 1
  for (let i = 0; i < text.length; i++) {
    // as usual a new variable is created with the element in position i

    // y
    const char = text[i];
    // const char = text.chatAt(i);

    // {M: 1}
    // count.get(M) => 1;
    // count.set(M, 2) => {M: 2}
    count[char] = addChar(char);
    // count['y'] = 1; => {M: 1, y: 1}
  }

  return count;
}

console.log(countChars("My name is mister shady"));

// // Write a function that takes an array of numbers and returns the largest number in the array using a for loop.
// If the array is empty, return undefined

function findMax(arr) {
  // I always want to return early
  // (!undefined || !0)
  // (true || true)
  if (!arr || !arr.length || !Array.isArray(arr)) return undefined;

  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    const num = arr[i];

    if (num > max) {
      max = num;
    }
  }

  return max;
}

findMax([100, 10, 1, 5, 30, 50]);

// Write a function that takes a string as input and returns the reverse of the string using a for loop

const str = "loop";

function reverseString(string) {
  let reverse = "";

  for (let i = string.length - 1; i < 0; i--) {
    reverse = `${reverse}${string[i]}`;
    // reverse += string[i];
  }

  return reverse;
}

console.log(reverseString(str));

// Use reduce to group items with 2 identifiers
// Imagine you have a list of products that have 2 ids, one is the store id and the other one is the item id
// Group all items that belong to separate stores

const products1 = [
  {
    storeId: "store-1",
    productId: "product-1",
  },
  {
    storeId: "store-2",
    productId: "product-1",
  },
  {
    storeId: "store-1",
    productId: "product-1",
  },
  {
    storeId: "store-2",
    productId: "product-2",
  },
  {
    storeId: "store-3",
    productId: "product-1",
  },
  {
    storeId: "store-2",
    productId: "product-2",
  },
  {
    storeId: "store-3",
    productId: "product-1",
  },
  {
    storeId: "store-2",
    productId: "product-3",
  },
  {
    storeId: "store-2",
    productId: "product-2",
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
    // modules and index
    const i = index % n;
    acc[i].push(num);

    return acc;
  }, initial);
}

console.log(splitArray(nums1, 10).map((list) => list.length));
console.log(splitArray(nums1, 10));
