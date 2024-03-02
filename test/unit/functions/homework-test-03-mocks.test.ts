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

  // test subject.save, subject.query, subject.delete
  // there is a mock implementation under the hood of the subject instance

  describe('MyUnitTestRepository', () => {
    describe('save', () => {
      beforeAll(() => {
        mockInstance.save.mockReturnValue('test-id-1');
      });
      beforeEach(() => {
        mockInstance.save.mockClear();
      });

      afterAll(() => {
        mockInstance.save.mockReset();
      });
      describe('when category is equal to shoes', () => {
        it('returns payload and adds amount divided by 2', () => {
          const category = 'shoes';
          const expectedResponse = {category: 'shoes', amount: 100 / 2};

          const response = subject.save(expectedResponse);
          mockInstance.save.mockReturnValue(category);

          expect(mockInstance.save).toHaveBeenCalledTimes(1);
          expect(response).toEqual(expectedResponse);
        });
      });

      describe('when category is differen than shoes', () => {
        it('returns the payload', () => {
          const id = 'test-id-1';
          const payload = {id: 'test-id-1', category: 'shorts'};
          const response = subject.save(payload);
          mockInstance.save.mockReturnValue(id);

          expect(mockInstance.save).toHaveBeenCalledTimes(1);
          expect(response).toEqual(payload);
        });
      });
    });

    describe('query', () => {});

    describe('delete', () => {
      beforeAll(() => {
        mockInstance.delete.mockReturnValue('test-id-1');
      });

      beforeEach(() => {
        mockInstance.delete.mockClear();
      });

      afterAll(() => {
        mockInstance.delete.mockReset();
      });

      it('sends id to repo delete method', () => {
        const id = 'test-id-1';
        const response = subject.delete(id);

        expect(mockInstance.delete).toHaveBeenCalledTimes(1);
        expect(response).toEqual(id);
      });
    });
  });
});
