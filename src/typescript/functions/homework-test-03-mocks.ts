export interface UnitTestRepo {
  save: (payload: Record<string, any>) => string;
  query: (payload: Record<string, any>) => string[];
  delete: (id: string) => string;
}

export class MyUnitTestRepository {
  constructor(private readonly repo: UnitTestRepo) {}

  save(payload: Record<string, any>): string {
    // NOTE: someone counted each pair as independent pairs
    if (payload.category === 'shoes') {
      return this.repo.save({...payload, amount: payload.amout / 2});
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
