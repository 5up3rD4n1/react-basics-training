import {add, multiply, classifier} from '../utils/utils';
// module.exports = {add, multiply};

interface ProductItem {
  category: string;
  price: number;
  amount: number;
}

export function processOrder(product: ProductItem) {
  if (product.category === 'hats') {
    return multiply(product.price, product.amount);
  }

  return add(product.price, multiply(product.price, 0.1));
}

export function processItem(product: ProductItem): ProductItem {
  const category = classifier(product.category);

  if (category === 'footware') {
    return {category: 'footware', price: 5000, amount: 3};
  }

  if (category === 'sportware') {
    return {category: 'sports', price: 100, amount: 2};
  }

  if (category === 'headware') {
    return {category: 'helmets', price: 300, amount: 6};
  }

  return {category: 'unknown', price: 0, amount: 0};
}
