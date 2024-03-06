// module.exports = {add, multiply}

// import {add, multiply} from '../utils/utils';

interface MockInstanceModuleMethods {
  add: (a: number, b: number) => number;
  multiply: (a: number, b: number) => number;
  classifier: (category: string) => string;
}

const mockInstance: jest.Mocked<MockInstanceModuleMethods> = {
  add: jest.fn(),
  multiply: jest.fn(),
  classifier: jest.fn(),
};

// import {mockInstance} from './mocks';

// based on the relative path of the test, not in the import
jest.mock('../../../src/typescript/utils/utils', () => {
  // module.exports = {add, multiply}

  return mockInstance;
});

import {
  processOrder,
  processItem,
} from '../../../src/typescript/functions/homework-test-04-mocks';
import multiply from '../../../src/typescript/utils/utils';

describe('Unit: src/typescript/functions/homework-test-04-mocks', () => {
  describe('processOrder', () => {
    const multiplyReturnValue = 10;
    const addReturnValue = 2;

    beforeAll(() => {
      mockInstance.add.mockReturnValue(addReturnValue);
      mockInstance.multiply.mockReturnValue(multiplyReturnValue);
    });

    beforeEach(() => {
      mockInstance.add.mockClear();
      mockInstance.multiply.mockClear();
    });

    describe('if category is equals to hats', () => {
      it('uses multiply method', () => {
        const payload = {category: 'hats', amount: 10, price: 5};
        const response = processOrder(payload);

        expect(mockInstance.add).toHaveBeenCalledTimes(0);
        expect(mockInstance.multiply).toHaveBeenCalledTimes(1);
        expect(mockInstance.multiply).toHaveBeenNthCalledWith(
          1,
          payload.price,
          payload.amount
        );
        expect(response).toEqual(multiplyReturnValue);
      });
    });
    // PENDING
    describe('if category is not hats', () => {
      it('uses add method', () => {
        const payload = {category: 'hats', amount: 10, price: 5};
        const response = processOrder(payload);

        expect(mockInstance.multiply).toHaveBeenCalledTimes(1);
        expect(mockInstance.add).toHaveBeenCalledTimes(1);
        expect(mockInstance.add).toHaveBeenNthCalledWith(
          1,
          payload.price,
          multiply(payload.price, 0.1)
        );
        expect(response).toEqual(addReturnValue);
      });
      // homework
    });
  });

  describe('processItem', () => {
    // validate every one of the categories we have in the codebase
    // it('', () => {
    //   const response = processItem();
    // });

    const footwareReturnValue = {category: 'footware', price: 5000, amount: 3};
    const sportwareReturnValue = {category: 'sports', price: 100, amount: 2};
    const headwareReturnValue = {category: 'helmets', price: 300, amount: 6};
    const unknownReturnValue = {category: 'unknown', price: 0, amount: 0};

    beforeEach(() => {
      mockInstance.classifier.mockClear();
    });

    describe('if category is equals to footware', () => {
      beforeAll(() => {
        mockInstance.classifier.mockReturnValue('footware');
      });
      it('uses classifier method', () => {
        const payload = {category: 'footware', price: 5000, amount: 3};
        const response = processItem(payload);

        expect(mockInstance.classifier).toHaveBeenCalledTimes(1);
        expect(mockInstance.classifier).toHaveBeenNthCalledWith(
          1,
          payload.category
        );
        expect(response).toEqual(footwareReturnValue);
      });
    });

    describe('if category is equals to sportware', () => {
      beforeAll(() => {
        mockInstance.classifier.mockReturnValue('sportware');
      });

      it('uses classifier method', () => {
        const payload = {category: 'sports', price: 100, amount: 2};
        const response = processItem(payload);

        expect(mockInstance.classifier).toHaveBeenCalledTimes(1);
        expect(mockInstance.classifier).toHaveBeenNthCalledWith(
          1,
          payload.category
        );
        expect(response).toEqual(sportwareReturnValue);
      });
    });

    describe('if category is equals to headware', () => {
      beforeAll(() => {
        mockInstance.classifier.mockReturnValue('headware');
      });

      it('uses classifier method', () => {
        const payload = {category: 'helmets', price: 300, amount: 6};
        const response = processItem(payload);

        expect(mockInstance.classifier).toHaveBeenCalledTimes(1);
        expect(mockInstance.classifier).toHaveBeenNthCalledWith(
          1,
          payload.category
        );
        expect(response).toEqual(headwareReturnValue);
      });
    });

    describe('if category is equals to unknown', () => {
      beforeAll(() => {
        mockInstance.classifier.mockReturnValue('unknown');
      });

      it('uses classifier method', () => {
        const payload = {category: 'unknown', price: 0, amount: 0};
        const response = processItem(payload);

        expect(mockInstance.classifier).toHaveBeenCalledTimes(1);
        expect(mockInstance.classifier).toHaveBeenNthCalledWith(
          1,
          payload.category
        );
        expect(response).toEqual(unknownReturnValue);
      });
    });
  });
});
