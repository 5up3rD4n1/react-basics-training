import {
  UnitTestRepo,
  MyUnitTestRepository,
} from '../../../src/typescript/functions/homework-test-03-mocks';

const mockInstance: jest.Mocked<UnitTestRepo> = {
  save: jest.fn(),
  query: jest.fn(),
  delete: jest.fn(),
};

describe('Unit: src/typescript/functions/homework-test-03-mocks', () => {
  const subject = new MyUnitTestRepository(mockInstance);
  const defaultResponse = {
    data: {
      id: 'test-id-01',
      amount: 100,
      category: 'shoes',
    },
  };

  // test subject.save, subject.query, subject.delete
  // there is a mock implementation under the hood of the subject instance
  beforeAll(() => {
    mockInstance.save.mockReturnValue(defaultResponse.data.category);
  });
  beforeEach(() => {
    mockInstance.save.mockClear();
  });

  describe('save', () => {
    describe('when category is equal to shoes', () => {
      it('returns payload and adds amount divided by 2', () => {
        const payload = {
          id: 'test-id-01',
          amount: defaultResponse.data.amount / 2,
          category: 'shoes',
        };

        const response = subject.save(payload);

        expect(mockInstance.save).toHaveBeenCalledTimes(1);
        expect(response).toBe(payload.category);
      });
    });

    describe('when category is different than shoes', () => {
      it('returns the payload', () => {
        const payload = {id: 'test-id-01', amount: 50, category: 'hat'};
        const response = subject.save(payload);

        expect(mockInstance.save).toHaveBeenCalledTimes(1);
        expect(response).not.toEqual(payload.category);
      });
    });
  });

  describe('query', () => {
    const defaultR = ['tshirt', 'pants'];
    beforeAll(() => {
      mockInstance.query.mockReturnValue(defaultR);
    });
    // beforeEach(() => {
    //   mockInstance.query.mockClear();
    // });
    describe('when cateogry is tshirt', () => {
      it('changes the category name to shirts', () => {
        const payload = {
          id: 'test-id-01',
          amount: defaultResponse.data.amount,
          category: 'shirts',
        };

        const response = subject.save(payload);

        expect(mockInstance.save).toHaveBeenCalledTimes(1);
        expect(response).toEqual(payload.category);
      });
    });

    // I can't change the return value because it's set to be a string[] and its about the amount => number
    // describe('when amount is bigger than 100', () => {
    //   const defaultValues = ['not a number'];
    //   beforeAll(() => {
    //     mockInstance.query.mockReturnValue(defaultValues);
    //   });
    //   it('changes the amount to 100', () => {
    //     const payload = {
    //       id: 'test-id-01',
    //       amount: defaultResponse.data.amount > 100,
    //       category: defaultR[0],
    //     };

    //     const response = subject.save(payload);

    //     expect(mockInstance.save).toHaveBeenCalledTimes(1);
    //     expect(response).toEqual(defaultResponse.data.amount);
    //   });
    // });
  });

  describe('delete', () => {
    beforeAll(() => {
      mockInstance.delete.mockReturnValue(defaultResponse.data.id);
    });
    beforeEach(() => {
      mockInstance.save.mockClear();
    });

    it('sends id to repo delete method', () => {
      const id = 'test-id-01';
      const expectedResponse = {
        id,
        category: 'shoes',
        amount: defaultResponse.data.amount,
      };

      const response = subject.delete(expectedResponse.id);

      expect(mockInstance.delete).toBeCalledTimes(1);
      expect(response).toEqual(expectedResponse.id);
    });
  });
});
