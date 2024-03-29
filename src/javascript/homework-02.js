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

// For Loop

function groupByProperties(arr) {
  let acc = {};

  for (let i = 0; i < arr.length; i++) {
    var item = arr[i];
    let key = `${item.storeId}#${item.productId}`;

    acc[key] = acc[key] ? [...acc[key], item] : [item];
  }
  return acc;
}

console.log("================= group by property ============");
console.log(groupByProperties(products1));

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

console.log("===================== splitArray ==============");

function splitArrWithLoop(arr, num) {
  const acc = new Array(num).fill().map(() => []);

  for (let i = 0; i < arr.length; i++) {
    const index = i % num;
    acc[index].push(arr[i]);
  }
  return acc;
}

console.log(splitArrWithLoop(nums1, 10));
console.log(splitArrWithLoop(nums1, 10).map((list) => list.length));

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

// Use reduce to group items with 2 identifiers
// Merge and sum the amounts of all items that belong to the same store and product id
// { [composite-key]: {storeId: "store-1", productId: "product-1", amount: SUM_OF_ALL_AMOUNT}}

function groupByIdentifiers(arr) {
  return arr.reduce((acc, item) => {
    let key = `${item.storeId}~${item.productId}`;

    // acc = {}, => undefined
    // acc['store-1~product-1'] => {..., amount: 3}
    //

    /**
     { 'store-1~product-1' : {
         storeId: "store-1",
         productId: "product-1",
         amount: 3,
       }
     }
  
     ----
  {
    storeId: "store-1",
    productId: "product-1",
    amount: 7,
  },

     */

    // if (acc[key]) {
    //   const value = acc[key];

    //   return {
    //     ...acc,
    //     [key]: {
    //       ...value,
    //       amount: value.amount + item.amount,
    //     }
    //   }
    // }

    // return {
    //   ...acc,
    //   [key]: item,
    // }

    // console.log({ acc, item });

    return {
      ...acc,
      // ...(item.amount = acc.amount + item.amount),
      [key]: acc[key]
        ? { ...acc[key], amount: acc[key].amount + item.amount }
        : item,
    };
  }, {});
}

console.log("============= groupByIdentifiers =============="); // PENDING
console.log(groupByIdentifiers(products2));

// Solve the following statements using loops and its equivalent using array methods (sort, map, find, filter, reduce)

// 1.  finds and prints the average of all numbers in an array.

// FOR LOOP

const averageNums = [10, 2, 5, 8, 32, 45, 75, 54];

function findAverage(arr) {
  let avg = 0;
  const length = arr.length;

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    avg += num;
  }
  return avg / length;
}

console.log(findAverage(averageNums)); // output = 28.875

// REDUCE METHOD

function findAvg(arr) {
  const length = arr.length;
  return (
    arr.reduce((acc, num) => {
      return acc + num;
    }, 0) / length
  );
}
console.log("============== find average using reduce ===========");
console.log(findAvg(averageNums));

// 2.  removes all duplicate elements from an array.

const duplicatedArr = [2, 5, 22, 4, 5, 22, 34, 12, 98, 34, 8, 10, 4];

function removeDuplicateNum(arr) {
  return arr.reduce((acc, num) => {
    return acc.includes(num) ? acc : [...acc, num];
  }, []);
}
console.log("================= REMOVE DUPLICATE REDUCE ==============");
console.log(removeDuplicateNum(duplicatedArr));

function removeDoubles(arr) {
  let acc = [];

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    acc = acc.includes(num) ? acc : [...acc, num];
  }
  return acc;
}

console.log("============= REMOVE DOUBLES FOR LOOP =============");
console.log(removeDoubles(duplicatedArr));

// 3.  merges two arrays into a single array.
const bananas = [
  ["1 : banana", "2 : bananas", "3 : bananas"],
  ["4 : bananas", "5 : bananas", "6 : bananas"],
];
function concatenateTwoArr(arr) {
  return arr.reduce((acc, elem) => [...acc, ...elem]);
}

console.log("========= concatArrays Reduce  ==========");
console.log(concatenateTwoArr(bananas));

function concatArraysFL(arr) {
  let acc = [];

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    acc = [...acc, ...num];
  }
  return acc;
}
console.log("========= concatArrays For Loop ==========");
console.log(concatArraysFL(bananas));
// 4.  finds the sum of all even numbers in an array.

const evenNums = [5, 2, 8, 3, 1, 7, 14, 10, 22, 9020];
function sumEvenNums(arr) {
  let acc = 0;

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    const even = num % 2 === 0;

    if (even) {
      acc += num;
    }
  }
  return acc;
}

console.log("================= Sum Even Nums For Loop ============");
console.log(sumEvenNums(evenNums));
// use method first and then reduce
function sumEven(arr) {
  return arr
    .filter((num) => num % 2 === 0)
    .reduce((acc, num) => {
      // const even = num % 2 === 0;

      return acc + num;
    });
}

console.log("================= Sum Even nums ============");
console.log(sumEven(evenNums));
// 5.  converts an array of strings into a single concatenated string.

const str = ["This", "is", "a", "single", "concatenated", "string"];
function concatStr(arr) {
  return arr.reduce((acc, string) => {
    return `${acc} ${string}`;
  }, "");
}

console.log("========= concate str ===========");
console.log(concatStr(str));

function concatenateString(arr) {
  let acc = "";

  for (const str of arr) {
    acc = `${acc} ${str}`;
  }
  return acc;
}

console.log("========= concat string for loop ============");
console.log(concatenateString(str));

// 6.  checks if all elements in an array are unique.=> boolean

const unique = [1234, 44323, 77282, 2332, 1212, 1234];
function uniqueElementFor(arr) {
  let acc = false;

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    if (acc !== num) {
      return true;
    }
  }
  return acc;
}

console.log("============= unique element For==============");
console.log(uniqueElementFor(unique));

function uniqueElem(arr) {
  return arr.reduce((acc, num) => {
    return acc !== num ? true : false;
  }, false);
  // return arr.reduce((acc, num) => {
  //   return acc === num;
  // }, []);
}
console.log("============= unique element filter==============");

console.log(uniqueElem(unique));

// 7.  1 ["hello", "yes", "is"] => [4, 3, 2]

const strings = ["Just", "call", "my", "name", "Im", "not", "ashamed"];

function stringIntoLength(arr) {
  let acc = [];

  for (let i = 0; i < arr.length; i++) {
    let char = arr[i];

    acc = [...acc, char.length];
  }
  return acc;
}
console.log("============= string length for ==============");
console.log(stringIntoLength(strings));

function stringLength(arr) {
  return arr.map((str) => str.length);
  // return arr.reduce((acc, string) => {
  //   return [...acc, string.length];
  // }, []);
}
console.log("============ string length =============");
console.log(stringLength(strings));
// 8.  filters out all even numbers from an array.

function filterEvenNum(arr) {
  let acc = [];

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];

    if (num % 2 === 0) {
      acc.push(num);
    }
  }

  return acc;
}

console.log("==============  filterEven ============");
console.log(filterEvenNum(evenNums));

function filterEve(arr) {
  return arr.filter((num) => num % 2 === 0);
}

console.log(filterEve(evenNums));

// 9.  converts an array of objects into an object with key-value pairs.
// [{}, {}] => {} => [['value', 1000], ['name', 'Item 1'], ['category', 'Cat-1']] => {name: 'Item 1', category: 'Cat-1', value: 1000}

const clients = [{ name: "A" }, { age: 1 }];

function transformArrIntoObj(arr) {
  return arr.reduce((acc, item) => {
    return {
      ...acc,
      ...item,
    };
  }, {});
}

console.log("============= Array into Obj ===============");
console.log(transformArrIntoObj(clients));

function convertArrIntoObj(arr) {
  let acc = {};

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    acc = { ...acc, ...num };
  }
  return acc;
}

console.log(convertArrIntoObj(clients));

// 10. flattens a nested array. [[1,2], [3, 4]] => [1, 2, 3, 4]

const flatArr = [
  [0, 1, 2],
  [3, 4, 5],
];
function flattenArr(arr) {
  let acc = [];

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    acc = [...acc, ...num];
  }
  return acc;
}
console.log("================== flatten ================");
console.log(flattenArr(flatArr));

function flattenNestedArr(arr) {
  return arr.reduce((acc, num) => {
    return [...acc, ...num];
  });
}

console.log(flattenNestedArr(flatArr));

// 11. finds the index of the first occurrence of a given element in an array.
// arr = ["bye", "hi", "later", "soon"];
// fn(arr, "later") => 2
const indexArr = ["bye", "hi", "later", "soon"];
function findIndex(arr, occ) {
  let acc = -1;

  for (let i = 0; i < arr.length; i++) {
    acc = arr.indexOf(occ);
  }
  return acc;
}

console.log(findIndex(indexArr, "later"));

function findIndexFn(arr, word) {
  return arr.indexOf(word);
}
console.log("================= finde index ============");
console.log(findIndexFn(indexArr, "soon"));

// 12. rotates the elements of an array to the right by a given number of positions.

const elements = [2, 34, 232, 923, 33, 43];

// [2, 34, 232, 923, 33, 43];
// [43, 2, 34, 232, 923, 33, 43];
// [33, 43, 2, 34, 232, 923, 33, 43];
// [923, 33, 43, 2, 34, 232, 923, 33, 43];
// [232, 923, 33, 43, 2, 34, 232, 923, 33, 43];

// [232, 923, 33, 43, 2, 34];

// [923, 33, 43, 2, 34, 232];

// using modules
function rotateElem(arr, n) {
  let acc = []; //....//6   -  /4    //6
  const shifts = arr.length - (n % arr.length);
  for (let i = 0; i < arr.length; i++) {
    const index = (shifts + i) % arr.length;
    const num = arr[index];
    acc = [...acc, num];
  }
  return acc;
}

console.log("================ rotate Element =============");
console.log(rotateElem(elements, 4));

function rotateElement(arr, n) {
  return arr.map((num, i) => {
    const shifts = arr.length - (n % arr.length);
    const index = (shifts + i) % arr.length;
    const numX = arr[index];
    const result = (num = numX);

    return result;
  });
}

console.log(rotateElement(elements, 4));

// 13. sorts an array of objects based on a specified property. [{name: '', cat: '', size: 3}, {name: '', cat: '', size: 1}] => sort by size [{size: 1}, {size:3}]=> leave this execise as the last one
// 14. groups objects in an array based on a common property. // group by

const properties = [
  {
    name: "Elem 01",
    from: { country: "CR", city: "SJ" },
    price: 1000,
  },
  {
    name: "Elem 02",
    from: { country: "IND", city: "I" },
    price: 1000,
  },
  {
    name: "Elem 03",
    from: { country: "KOR", city: "S" },
    price: 100,
  },
  {
    name: "Elem 04",
    from: { country: "IND", city: "I" },
    price: 500,
  },
  {
    name: "Elem 05",
    price: 1000,
    from: { country: "CR", city: "SJ" },
  },
];

function groupByCat(arr) {
  let acc = {};

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    acc = {
      ...acc,
      [item.from.country]: [...(acc[item.from.country] || []), item],
    };
  }
  return acc;
}
console.log("================= group By Cat ===========");
console.log(groupByCat(properties));

function gourpByProperty(arr) {
  return arr.reduce((acc, item) => {
    return {
      ...acc,
      [item.from.country]: [...(acc[item.from.country] || []), item],
    };
  }, {});
}

console.log("================= group By Property ===========");
console.log(gourpByProperty(properties));

// 15. finds the intersection of two arrays. [1, 2, 4, 5] => [1, 5, 7] => [1, 5]

const inter01 = [2, 54, 67, 88, 12, 7];

const inter02 = [33, 2, 88];

function findIntersection(arr1, arr2) {
  let acc = [];

  for (let i = 0; i < arr1.length; i++) {
    const num = arr1[i];

    if (arr2.includes(num)) {
      acc.push(num);
    }
  }
  return acc;
}

console.log("========= intersection ==========");
console.log(findIntersection(inter01, inter02));

function intersectionArr(arr01, arr02) {
  return arr01.filter((num) => arr02.includes(num));
}
console.log(intersectionArr(inter01, inter02));
// 16. transforms an array of objects by applying a given function to each object. //map => transform receives fn as parameter

function isExpensive(item) {
  return item.filter((category) => category === item.price);
}

function transformObj(arr, fn) {}

console.log(transformObj(properties, isExpensive)); // PEMDING

// 17. converts an array of key-value pairs into an object.
// [['value', 1000], ['name', 'Item 1'], ['category', 'Cat-1']] => {name: 'Item 1', category: 'Cat-1', value: 1000}

const arrKVP = [
  ["name", "Joe"],
  ["age", 22],
  ["gender", "M"],
];

function arrayIntoObj(arr) {
  return arr.reduce((acc, [key, value]) => {
    return { ...acc, [key]: value };
  }, {});
}
console.log("============== transformObj ==============");
console.log(arrayIntoObj(arrKVP));

// 18. removes all elements from an array that satisfy a given condition.
const ages = [8, 18, 22, 43, 2, 20];
function underAge(arr) {
  let acc = [];

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];

    acc = num < 18 ? [...acc, num] : acc;
  }
  return acc;
}

console.log("============== remove under age==============");
console.log(underAge(ages));

function removeUnderAge(arr) {
  return arr.filter((age) => age < 18);
}

console.log(removeUnderAge(ages));

// 19. calculates the sum of values for a specific property in an array of objects.

function sumByProperty(arr) {
  return arr.reduce(
    (acc, item) => {
      return {
        ...acc,

        price: acc.price + item.price,
      };
    },
    { price: 0 }
  );
}

console.log("============== sum By Property ==============");
console.log(sumByProperty(properties));

function sumValueByProperty(arr) {
  let acc = { price: 0 };

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];

    acc = { ...acc, price: acc.price + item.price };
  }
  return acc;
}

console.log(sumValueByProperty(properties));

// 20. finds the most common element in an array. // PENDING

const common = [2, 4, 3, 3, 5, 3, 2, 1, 7];
function findCommon(arr) {
  let acc = 0;
  let num = 1;
  let elem;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      // Check if the current item matches with another item in the array
      if (arr[i] === arr[j]) {
        acc++;
        // Update the most frequent item and its frequency if the current item's frequency is higher
        if (acc > num) {
          num = acc;
          elem = arr[i];
        }
      }
    }
    acc = 0;
  }
  return elem;
}

function findCommon2(arr) {
  const acc = {}; // {1: 1, 2: 3, 3: 3 };

  let elem = undefined;
  let max = 0;

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];

    // {}[2] => (undefined || 0) + 1
    // value <== 0 + 1 = 1
    const count = (acc[num] || 0) + 1;

    if (count > max) {
      elem = num;
      max = count;
    }

    acc[num] = count;
  }

  return {
    elem,
    max,
  };
}

console.log("============ findCommon ==============");
console.log(findCommon(common));

function findCommonElem(arr) {
  let elem;
  let max = 0;

  // {1: 1, 2: 3, 4: 1}
  arr.reduce((acc, num) => {
    const count = (acc[num] || 0) + 1;

    if (count > max) {
      elem = num;
      max = count;
    }

    return { ...acc, [num]: count };
  }, {});

  return elem;
}

console.log("================ find common elem");
console.log(findCommonElem(common));
