interface AxiosResponse {
  data: Record<string, any>;
}

const mockAxiosInstace = jest.fn<
  Promise<AxiosResponse>,
  Record<string, any>[],
  any
>();

async function createUser(payload: object): Promise<Record<string, any>> {
  const url = '/users';

  const response = await mockAxiosInstace({url, data: payload});

  return response.data;
}

async function updateUser(
  id: string,
  payload: object
): Promise<Record<string, any>> {
  const url = `/users/${id}`;

  const response = await mockAxiosInstace({url, data: payload});

  return response.data;
}

async function deleteUser(id: string): Promise<Record<string, any>> {
  const url = `/users/${id}`;

  const response = await mockAxiosInstace({
    url,
    method: 'DELETE',
  });

  console.log(response.data.deletedAt);

  return response.data;
}

// const utils = {
//   printElement: (element: string) => console.log(element),
// };

// jest.spyOn(utils, 'printElement');
// // utils.printElement = jest.fn();

describe('Unit: test/learning/mocks.test.ts', () => {
  const defaultResponse = {
    data: {
      id: '1',
      name: 'ballba',
    },
  };

  beforeAll(() => {
    // mockAxiosInstace.mockImplementation(() => Promise.resolve(defaultResponse));
    // mockAxiosInstace.mockReturnValue(Promise.resolve(defaultResponse));
    mockAxiosInstace.mockResolvedValue(defaultResponse);
  });

  beforeEach(() => {
    // Deletes the implmenetation so no default value is returned
    // mockAxiosInstace.mockReset();

    // If the mock is overriding an exiting function
    // it restores the original function implementation
    // mockAxiosInstace.mockRestore();

    // Clears all invocation information of the mock
    mockAxiosInstace.mockClear();
  });

  describe('createUser', () => {
    it('creates an user with expected payload', async () => {
      const payload = {id: 'test-id-1', name: 'My amazing name'};
      const response = await createUser(payload);

      const expectedParams = [
        {
          url: '/users',
          data: payload,
        },
        {
          log: true,
        },
      ];

      expect(mockAxiosInstace).toBeCalledTimes(1);
      expect(mockAxiosInstace).toHaveBeenNthCalledWith(
        1,
        expectedParams[0],
        expectedParams[1]
      );
      expect(response).toEqual(defaultResponse.data);
    });
  });

  describe('deleteUser', () => {
    beforeAll(() => {
      // mockAxiosInstace.mockResolvedValue({
      //   data: {
      //     id: 'test-id-1',
      //     name: 'expected-name',
      //     deletedAt: '2024-03-01',
      //   },
      // });

      mockAxiosInstace.mockResolvedValueOnce({
        data: {
          id: 'test-id-1',
          name: 'expected-name',
          deletedAt: '2024-03-01',
        },
      });

      // mockAxiosInstace.mockResolvedValueOnce({
      //   data: {
      //     id: 'test-id-1',
      //     name: 'expected-name',
      //     deletedAt: '2024-03-02',
      //   },
      // });
    });

    afterAll(() => {
      // clean up
      // mockAxiosInstace.mockRejectedValue(defaultResponse);
    });

    it('deletes user and receives expected response', async () => {
      const id = 'test-id-1';
      const response = await deleteUser(id);

      const params = {
        url: '/users/test-id-1',
        method: 'DELETE',
      };

      const expectedResponse = {
        id,
        name: 'expected-name',
        deletedAt: '2024-03-01',
      };

      expect(mockAxiosInstace).toBeCalledTimes(1);
      expect(mockAxiosInstace).toHaveBeenNthCalledWith(1, params);
      expect(response).toEqual(expectedResponse);
    });
  });

  describe('updateUser', () => {
    it('updates an user with expected payload', async () => {
      const id = 'test-id-1';
      const payload = {id: 'test-id-1', name: 'My amazing name'};
      const response = await updateUser(id, payload);

      const expectedParams = [
        {
          url: '/users/test-id-1',
          data: payload,
        },
      ];

      expect(mockAxiosInstace).toBeCalledTimes(1);
      expect(mockAxiosInstace).toHaveBeenNthCalledWith(1, expectedParams[0]);
      expect(response).toEqual(defaultResponse.data);
    });
  });
});
