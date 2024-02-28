const products1 = [
  {
    storeId: "store-1",
    productId: "product-1",
    amount: 3,
  }, // => [{storeId: '', productId: ''}, {storeId: '', productId: ''}, {storeId: '', productId: ''}]
  {
    storeId: "store-2",
    productId: "product-1",
    amount: 5,
  },
  {
    storeId: "store-1",
    productId: "product-1",
    amount: 7,
  }, // => [{storeId: '', productId: ''}, {storeId: '', productId: ''}, {storeId: '', productId: ''}, ...7 more]
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

// Implement both using for loops and array methods

// 1. Create a function that returns an object with all the products with the highest amount for the combination storeId and productId

/**
 * {
 * store-1 product-1 amount: 3-7,
 * store-2 product-1 amount: 5
 * store-2 product-2 amount: 1-9-3
 * store-3 product-1 amount: 2-5
 * store-2 product-3 amount: 6
 * }
 */

const obj1 = {
  hello: 1,
  "product-1": {
    product: 1,
    value: 2,
  },
  "product-2": {
    product: 2,
    value: 3,
  },
  "{abc: 1}": {
    amount: 1,
  },
};

// obj['hello'] => 1

// Object keys are ALWAYS strings
// obj['product-1'].value;

// obj[{klamsd}].value
// obj[{abc: 1}]

function productsHighestAmount(arr) {
  let acc = {};
  // acc => {}
  // acc => {{storeId: 'store-1', productId: 'product-1', amount: 7}, {{storeId: 'store-2', productId: 'product-1', amount: 5} {storeId: 'store-2', productId: 'product-2', amount: 9}, storeId: 'store-3', productId: 'product-1', amount: 5}, storeId: 'store-2', productId: 'product-3', amount: 6

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i]; // [{1 object}, {2 object}, {3 object}]
    let key = `${item.storeId}~${item.productId}`;
    let elem = acc[key]; // {store: store-1, product: produc-1, amount: 1}

    if (elem) {
      if (item.amount > elem.amount) {
        acc[key] = item;
      }
    } else {
      // acc['store-1~product-1'] = {store: store-1, product: produc-1, amount: 1}
      // acc = {'store-1~product-1': {store: store-1, product: produc-1, amount: 1}}
      // acc['store-1~product-1'] => {store: store-1, product: produc-1, amount: 1}
      acc[key] = item;
    }

    // const amount = acc.amount > item.amount ? acc[item].amount : item.amount;

    // acc = {
    //   ...acc,

    //   storeId: item.storeId,
    //   productId: item.productId,
    //   amount: amount,
    // };
  }
  return acc;
}

console.log("============ product highest amount =========");
console.log(productsHighestAmount(products1));

function highestAmountObj(arr) {
  return arr.reduce((acc, item) => {
    let key = `${item.storeId}~${item.productId}`;
    const elem = acc[key];

    // if (elem) {
    //   if (item.amount > elem.amount) {
    //     acc[key] = item;
    //   }
    // } else {
    //   acc[key] = item;
    // }

    // acc[key] = elem ? (item.amount > elem.amount ? item : elem) : item;
    const final = {
      ...item,
      amount: elem ? Math.max(item.amount, elem.amount) : item.amount,
    };

    return {
      ...acc,
      [key]: final,
    };

    // const amount =
    //   acc[item] && acc[item].amount > item.amount
    //     ? acc[item].amount
    //     : item.amount;

    // return acc;
  }, {});
}

console.log("========= highest amount obj");
console.log(highestAmountObj(products1));

const products2 = [
  {
    storeId: "store-1",
    productId: "product-1",
    userId: "user-1",
    discount: [1, 20, 4],
  }, // => [{storeId: '', productId: ''}, {storeId: '', productId: ''}, {storeId: '', productId: ''}]
  {
    storeId: "store-2",
    productId: "product-1",
    userId: "user-2",
    discount: [10, 2, 4],
  },
  {
    storeId: "store-1",
    productId: "product-1",
    userId: "user-1",
    discount: [1, 2, 40],
  }, // => [{storeId: '', productId: ''}, {storeId: '', productId: ''}, {storeId: '', productId: ''}, ...7 more]
  {
    storeId: "store-2",
    productId: "product-2",
    userId: "user-2",
    discount: [11, 2, 4],
  },
  {
    storeId: "store-3",
    productId: "product-1",
    userId: "user-2",
    discount: [1, 22, 4],
  },
  {
    storeId: "store-2",
    productId: "product-2",
    userId: "user-1",
    discount: [1, 25, 4],
  },
  {
    storeId: "store-3",
    productId: "product-1",
    userId: "user-3",
    discount: [1, 2, 41],
  },
  {
    storeId: "store-2",
    productId: "product-3",
    userId: "user-1",
    discount: [19, 2, 4],
  },
  {
    storeId: "store-2",
    productId: "product-2",
    userId: "user-2",
    discount: [1, 2, 14],
  },
  {
    storeId: "store-1",
    productId: "product-1",
    userId: "user-1",
    discount: [1, 26, 4],
  }, // => [{storeId: '', productId: ''}, {storeId: '', productId: ''}, {storeId: '', productId: ''}]
  {
    storeId: "store-2",
    productId: "product-1",
    userId: "user-3",
    discount: [1, 2, 54],
  },
  {
    storeId: "store-1",
    productId: "product-1",
    userId: "user-3",
    discount: [1, 28, 4],
  }, // => [{storeId: '', productId: ''}, {storeId: '', productId: ''}, {storeId: '', productId: ''}, ...7 more]
  {
    storeId: "store-2",
    productId: "product-2",
    userId: "user-1",
    discount: [19, 2, 4],
  },
  {
    storeId: "store-3",
    productId: "product-1",
    userId: "user-1",
    discount: [1, 62, 4],
  },
  {
    storeId: "store-2",
    productId: "product-2",
    userId: "user-2",
    discount: [71, 2, 4],
  },
  {
    storeId: "store-3",
    productId: "product-1",
    userId: "user-2",
    discount: [1, 12, 4],
  },
  {
    storeId: "store-2",
    productId: "product-3",
    userId: "user-1",
    discount: [1, 42, 4],
  },
  {
    storeId: "store-2",
    productId: "product-2",
    userId: "user-3",
    discount: [1, 52, 4],
  },
];

// List of users in every store, they have being accumulating discounts per each purchase, create a object with the combination of store, product and user
// with the highest discount for the user, update the shape of the object where the discount is a number with the max discount instead of an array
// output should be an object were the key is store, product, user combination and the values are the product with highest discount

function findMax(arr) {
  return arr.reduce((acc, max) => {
    return acc > max ? acc : max;
  });
}

function highestDiscount(arr) {
  return arr.reduce((acc, obj) => {
    let key = `${obj.storeId}~${obj.productId}~${obj.userId}`;

    // const elem = acc[key] => undefined

    const elem = acc[key];
    // { store, product, user, discount: number }

    // const discount = [...obj.discount, ...(elem ? [elem.discount] : [])].reduce(
    //   (max, num) => (max > num ? max : num)
    // );

    if (elem) {
      acc[key] = {
        ...obj,
        discount: findMax([...obj.discount, elem.discount]),
      };
    } else {
      acc[key] = { ...obj, discount: findMax(obj.discount) };
    }

    // return {
    //   ...acc,
    //   [key]: {
    //     ...obj,
    //     discount,
    //   },
    // };
    return acc;
  }, {});
}

// Object.keys(obj);

console.log(highestDiscount(products2));

function highestDiscountFor(arr) {
  let acc = {};
  for (let i = 0; i < arr.length; i++) {
    const obj = arr[i];
    let key = `${obj.storeId}~${obj.productId}~${obj.userId}`;
    const elem = acc[key];

    if (elem) {
      acc[key] = {
        ...obj,
        discount: findMax([...obj.discount, elem.discount]),
      };
    } else {
      acc[key] = { ...obj, discount: findMax(obj.discount) };
    }
  }
  return acc;
}
console.log("========= highest discount for=============");
console.log(highestDiscountFor(products2));

// Return and object with all discounts available for the combination of store, product and user

function mergeDiscount(arr) {
  return arr.reduce((acc, obj) => {
    let key = `${obj.storeId}~${obj.productId}~${obj.userId}`;
    const elem = acc[key];

    if (elem) {
      acc[key] = { ...obj, discount: [...obj.discount, ...elem.discount] };
    } else {
      acc[key] = obj;
    }

    // acc[key] = elem ? (acc[key] = [...obj, ...obj.discount]) : (acc[key] = obj);
    // return {
    //   ...acc,
    //   [key]: {
    //     ...obj,
    //   }
    // }
    return acc;
  }, {});
}

console.log("============= merge discount =============");
console.log(mergeDiscount(products2));

function mergeDiscountFor(arr) {
  let acc = {};

  for (let i = 0; i < arr.length; i++) {
    const obj = arr[i];
    let key = `${obj.storeId}~${obj.productId}~${obj.userId}`;
    const elem = acc[key];

    elem
      ? (acc[key] = { ...obj, discount: [...obj.discount, ...elem.discount] })
      : (acc[key] = obj);
  }
  return acc;
}

console.log("=========== merge discount for ================");
console.log(mergeDiscountFor(products2));

// Sum all discounts for combination store,
// product, user => {'': {store, product, user, discount: 250}}
// => elem = {store, product, user, discount: 250}

function sumDiscount(arr) {
  return arr.reduce((acc, obj) => {
    let key = `${obj.storeId}~${obj.productId}~${obj.userId}`;
    const elem = acc[key];
    const sum = obj.discount.reduce((sum, num) => sum + num);

    if (elem) {
      acc[key] = {
        ...obj,
        discount: sum + elem.discount,
      };
    } else {
      acc[key] = {
        ...obj,
        discount: sum,
      };
    }
    return acc;
  }, {});
}

console.log(" ============ sum discount ============");
console.log(sumDiscount(products2));

function sumDiscountFor(arr) {
  let acc = {};

  for (let i = 0; i < arr.length; i++) {
    const obj = arr[i];
    let key = `${obj.storeId}~${obj.productId}~${obj.userId}`;
    const elem = acc[key];
    const sum = obj.discount.reduce((sum, num) => sum + num);

    if (elem) {
      acc[key] = {
        ...obj,
        discount: sum + elem.discount,
      };
    } else {
      acc[key] = { ...obj, discount: sum };
    }
  }
  return acc;
}
console.log("============    sum Discount for ===============");
console.log(sumDiscountFor(products2));

// Assuming all products discounts have always the same length, sum all the discounts in the same position of the array
// say you have 3 products with the following discounts
// [1, 3, 5, 4]
// [3, 4, 7, 6]
// [1, 6, 9, 3]
// ---
// [5, 13, 21, 13]

// NO NO
// [0] + [0]
// [1] + [1]
// [2] + [2]

// return an object with the combination store, product, user with the resulting discounts array as follows
// {
//    'store-1~product-1~user-1': {
//         storeId: 'store-1',
//         productId: 'product-1',
//         userId: 'user-1',
//         discount: [5, 13, 21]
//     },
//    'store-2~product-2~user-1': { ... }
// }

function sum(arr) {
  arr.reduce((sum, num, i) => sum + num[i]);
}

// the assumption is that both arrays the same length
function mergeArrByPosition(arr1, arr2) {
  let length = arr1.length;
  let current = [];

  for (let i = 0; i < length; i++) {
    const a = arr1[i];
    const b = arr2[i];

    current.push(a + b);
  }
  return current;
}

function mergeArrByPositionMap(arr1, arr2) {
  return arr1.map((num, i) => {
    return arr2[i] + num;
  });
}

function sumDiscountByPosition(arr) {
  let acc = {};

  for (let i = 0; i < arr.length; i++) {
    const obj = arr[i];
    let key = `${obj.storeId}~${obj.productId}~${obj.userId}`;

    const elem = acc[key]; // {storeId: "", productId: "", amount: 3, discount: [1, 2, 5]}

    acc[key] = elem
      ? {
          ...elem,
          discount: mergeArrByPositionMap(elem.discount, obj.discount),
        }
      : obj;

    // return {
    //   ...acc,
    //   [key]: elem ? [...elem, ...current] : [...current],
    // };

    // acc = current.push({
    //   ...acc,
    //   [key]: elem ? [...elem, ...current] : [...current],
    // });
  }

  return acc;
}
console.log("============== sumDiscountByPosition ==========");
console.log(sumDiscountByPosition(products2));

// 2. Create a function that multiplies/generates and accumulates products in an array for the combination of storeId and productId,
//    the end result is an object where the keys are the composite key of storeId and productId and the value is the array with all generated products
// => amount = 3 => [{},{},{}]
// => [{storeId: '', productId: ''}, {storeId: '', productId: ''}, {storeId: '', productId: ''}, ...7 more]

function generateProductsObj(arr) {
  let acc = {};

  for (let i = 0; i < arr.length; i++) {
    const product = arr[i]; // {obj 1} {obj 2} ...
    const current = [];

    let key = `${product.storeId}~${product.productId}`; // key = ['store-1~product-1']
    const products = acc[key]; // {storeId: "", productId: "", amount: 3} each value of that specific key

    for (let i = product.amount; i > 0; i--) {
      current.push(product); // push the obj into the new array
    }

    acc[key] = products ? [...products, ...current] : [...current];

    // return {
    //   ...acc,
    //   [key]: products ? [...products, ...current] : [...current],
    // };

    // return new Array(products.length).fill({
    //   ...generated,
    //   [key]: products ? [...products, ...generated] : [...generated],
    // });
  }

  return acc;
}

console.log("======== products obj =========");
console.log(generateProductsObj(products1));

function generateObjByLength(arr) {
  // new Array(10).fill({});

  // let count = product.amount;
  // const generated = [];
  // while(count--) { 0
  //   generate.push(product);
  // }

  // for (let i = product.amount; i > 0; i--) {
  //  generated.push(product);
  // }
  //

  // {
  //   'store-1~product-1': [{store, product, ...rest}, {store, product, ...rest}, {store, product, ...rest}, ...n more],
  //   'store-2~product-1': [{}, {}, {}, {}]
  // }

  // {store, product, amount: 3}
  // {store, product, amount: 5}
  // { 'store-1~product-1': [{store, product, ...rest}, ...7 more] }
  return arr.reduce((acc, product) => {
    let generated = [];

    let key = `${product.storeId}~${product.productId}`;

    // acc[key] => {}['store-1~product-1'] => [] | undefined
    const products = acc[key];

    for (let i = product.amount; i > 0; i--) {
      generated.push(product);
    }

    return {
      ...acc,
      [key]: products ? [...products, ...generated] : [...generated],
    };
  }, {});
}

// arr
//   .reduce((acc, item) => {
//     let amount = acc[item].amount > item.amount ? acc : item;
//     if (amount) {
//       return { ...acc, storeId: item.storeId, products1: item.productId };
//     }
//   }, [])
//   .map((item) => item.amount.length);

console.log("========== by length ========");
console.log(generateObjByLength(products1));
