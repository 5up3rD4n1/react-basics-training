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
  // CRUD => create, read, update, delete => repo => save, update, delete, query
  describe('save', () => {
    beforeAll(() => {
      mockInstance.save.mockReturnValue(defaultResponse.data.id);
    });

    beforeEach(() => {
      mockInstance.save.mockClear();
    });

    describe('when category is equal to shoes', () => {
      it('returns payload and adds amount divided by 2', () => {
        const payload = {
          id: 'test-id-01',
          amount: defaultResponse.data.amount,
          category: 'shoes',
        };

        const expected = {
          id: 'test-id-01',
          amount: defaultResponse.data.amount / 2,
          category: 'shoes',
        };

        const response = subject.save(payload);

        expect(mockInstance.save).toHaveBeenCalledTimes(1);
        expect(mockInstance.save).toHaveBeenNthCalledWith(1, expected);
        expect(response).toEqual(defaultResponse.data.id);
      });
    });

    describe('when category is different than shoes', () => {
      it('returns the payload', () => {
        const payload = {id: 'test-id-01', amount: 50, category: 'hat'};
        const response = subject.save(payload);

        const expected = {id: 'test-id-01', amount: 50, category: 'hat'};

        expect(mockInstance.save).toHaveBeenCalledTimes(1);
        expect(mockInstance.save).toHaveBeenNthCalledWith(1, expected);
        expect(response).toEqual(defaultResponse.data.id);
      });
    });
  });

  describe('query', () => {
    const defaultR = ['tshirt', 'pants'];
    beforeAll(() => {
      mockInstance.query.mockReturnValue(defaultR);
    });

    beforeEach(() => {
      mockInstance.query.mockClear();
    });

    describe('when category is tshirt', () => {
      it('changes the category name to shirts', () => {
        const payload = {
          id: 'test-id-01',
          amount: 100,
          category: 'tshirt',
        };

        const expected = {
          id: 'test-id-01',
          amount: 100,
          category: 'shirts',
        };

        const response = subject.query(payload);

        expect(mockInstance.query).toHaveBeenCalledTimes(1);
        expect(mockInstance.query).toHaveBeenNthCalledWith(1, expected);
        expect(response).toEqual(defaultR);
      });
    });

    // I can't change the return value because it's set to be a string[] and its about the amount => number
    describe('when amount is bigger than 100', () => {
      it('changes the amount to 100', () => {
        const payload = {
          id: 'test-id-01',
          amount: 102,
          category: 'shoes',
        };

        const expected = {
          id: 'test-id-01',
          amount: 100,
          category: 'shoes',
        };

        const response = subject.query(payload);

        expect(mockInstance.query).toHaveBeenCalledTimes(1);
        expect(mockInstance.query).toHaveBeenNthCalledWith(1, expected);
        expect(response).toEqual(defaultR);
      });
    });

    describe('when amount is not bigger than 100 and category is not tshirt', () => {
      it('returns the payload', () => {
        const payload = {
          id: 'test-id-01',
          amount: 90,
          category: 'shoes',
        };

        const response = subject.query(payload);

        expect(mockInstance.query).toHaveBeenCalledTimes(1);
        expect(mockInstance.query).toHaveBeenNthCalledWith(1, payload);
        expect(response).toEqual(defaultR);
      });
    });
  });

  describe('delete', () => {
    beforeAll(() => {
      mockInstance.delete.mockReturnValue(defaultResponse.data.id);
    });
    beforeEach(() => {
      mockInstance.delete.mockClear();
    });

    it('sends id to repo delete method', () => {
      const id = 'test-id-01';

      const response = subject.delete(id);

      expect(mockInstance.delete).toBeCalledTimes(1);
      expect(mockInstance.delete).toHaveBeenNthCalledWith(1, id);
      expect(response).toEqual(id);
    });
  });
});
