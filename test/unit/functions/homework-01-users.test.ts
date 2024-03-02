import {
  classifyUsers,
  // users,
} from '../../../src/typescript/functions/homework-test-01-users';

export const usersFixture = [
  {name: 'Josh', gender: 'male', age: 34},
  {name: 'Joe', gender: 'male', age: 15},
  {name: 'Ana', gender: 'female', age: 56},
  {name: 'Jess', gender: 'female', age: 22},
  {name: 'Sue', gender: 'female', age: 17},
];

// CLASSIFY USERS
describe('Unit: src/typescript/functions/homework-01-users', () => {
  describe('classifyUsers', () => {
    describe('if the gender is male and age is bigger than 50', () => {
      it('adds classification retired-male', () => {
        const user = {
          name: 'Caleb',
          gender: 'male',
          age: 60,
        };
        const result = classifyUsers(user);
        const expected = {
          name: 'Caleb',
          gender: 'male',
          age: 60,
          classification: 'retired-male',
        };
        expect(result).toEqual(expected);
      });
    });

    describe('if the gender is male and age is lower than 50 ', () => {
      it('adds classification active-male', () => {
        const result = classifyUsers(usersFixture[0]);
        const expected = {
          name: 'Josh',
          gender: 'male',
          age: 34,
          classification: 'active-male',
        };
        expect(result).toEqual(expected);
      });
    });

    describe('if the gender is male and age is lower than 18', () => {
      it('adds classification active-kid', () => {
        const result = classifyUsers(usersFixture[1]);
        const expected = {
          name: 'Joe',
          gender: 'male',
          age: 15,
          classification: 'active-kid',
        };
        expect(result).toEqual(expected);
      });
    });

    describe('if the gender is female and age is bigger than 50', () => {
      it('adds classification retired-female', () => {
        const result = classifyUsers(usersFixture[2]);
        const expected = {
          name: 'Ana',
          gender: 'female',
          age: 56,
          classification: 'retired-female',
        };
        expect(result).toEqual(expected);
      });
    });

    describe('if the gender is female and age is lower than 50', () => {
      it('adds classification active-female', () => {
        const result = classifyUsers(usersFixture[3]);
        const expected = {
          name: 'Jess',
          gender: 'female',
          age: 22,
          classification: 'active-female',
        };
        expect(result).toEqual(expected);
      });
    });

    describe('if the gender is female and age is lower than 18', () => {
      it('adds classification active-kid', () => {
        const result = classifyUsers(usersFixture[4]);
        const expected = {
          name: 'Sue',
          gender: 'female',
          age: 17,
          classification: 'active-kid',
        };
        expect(result).toEqual(expected);
      });
    });
  });
});
