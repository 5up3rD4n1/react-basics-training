export function add(a: number, b: number): number {
  return a + b;
}

export function multiply(a: number, b: number): number {
  return a * b;
}

const mapper: Record<string, string> = {
  hats: 'headwear',
  watches: 'sportwear',
  shoes: 'footwear',
};

export function classifier(category: string): string {
  const mapped = mapper[category];

  if (mapped) {
    return mapped;
  }

  return 'unknown';
}

export default multiply;

// import lkasdlkasd, {multiply} from './utils.ts'
// const lkasdlkasd = require('./utils').default;

// const obj = {name: 'chu'};
// const {name} = obj;

// module.exports = {
//   default: multiply
//   multiply,
// };
