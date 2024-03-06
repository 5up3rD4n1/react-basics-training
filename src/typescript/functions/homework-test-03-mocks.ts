export interface UnitTestRepo {
  save: (payload: Record<string, any>) => string;
  query: (payload: Record<string, any>) => string[];
  delete: (id: string) => string;
}

export class MyUnitTestRepository {
  // attributes/properties
  private readonly repo: UnitTestRepo;

  constructor(repo: UnitTestRepo) {
    // instance
    this.repo = repo;
  }

  // method of a class
  save(payload: Record<string, any>): string {
    // NOTE: someone counted each pair as independent pairs
    if (payload.category === 'shoes') {
      // this.mockInstance.save => jest.fn => mock;
      return this.repo.save({...payload, amount: payload.amount / 2});
    }

    return this.repo.save(payload);
  }

  query(payload: Record<string, any>): string[] {
    if (payload.category === 'tshirt') {
      return this.repo.query({...payload, category: 'shirts'});
    }

    if (payload.amount > 100) {
      return this.repo.query({...payload, amount: 100});
    }

    return this.repo.query(payload);
  }

  delete(id: string): string {
    return this.repo.delete(id);
  }
}
