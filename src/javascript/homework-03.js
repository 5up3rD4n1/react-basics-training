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
// 2. Create a function that multiplies/generates and accumulates products in an array for the combination of storeId and productId,
//    the end result is an object where the keys are the composite key of storeId and productId and the value is the array with all generated products
