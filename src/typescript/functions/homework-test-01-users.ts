// 3. Create a function to classify users
// Code a function that receives 3 parameters, name, gender and age
// return an object with the received parameters name, gender and age plust the new classification
// if the gender is male and age is bigger than 50 add classification retired-male
// if the gender is male and age is lower than 50 add classification active-male
// if the gender is male and age is lower than 18 add classification active-kid
// if the gender is female and age is bigger than 50 add classification retired-female
// if the gender is female and age is lower than 50 add classification active-female
// if the gender is female and age is lower than 18 add classification active-kid

export interface UserParams {
  name: string;
  gender: string;
  age: number;
}

export interface UserClassification {
  name: string;
  gender: string;
  age: number;
  classification: string;
}

export function classifyUsers(user: UserParams): UserClassification {
  // let acc = {};

  // let key = `${user.name}`;
  // const elem = acc[key];
  // for (let i = 0; i < arr.length; i++) {
  // const user = arr[i];

  // if (user.gender === 'male') {
  //   if (user.age < 18) {
  //     // return;
  //   }

  //   if (user.age < 50) {

  //   }

  //   return {};
  // }

  if (user.gender === 'male' && user.age > 50) {
    return {...user, classification: 'retired-male'};
  }

  if (user.gender === 'male' && user.age < 18) {
    return {...user, classification: 'active-kid'};
  }

  if (user.gender === 'male' && user.age < 50) {
    return {...user, classification: 'active-male'};
  }

  if (user.gender === 'female' && user.age > 50) {
    return {...user, classification: 'retired-female'};
  }

  if (user.gender === 'female' && user.age < 18) {
    return {...user, classification: 'active-kid'};
  }

  if (user.gender === 'female' && user.age < 50) {
    return {...user, classification: 'active-female'};
  }

  // }

  return {...user, classification: 'UNKNOWN'};

  // acc = {
  //   ...acc,
  //   name: elem.name,
  //   gender: elem.gender,
  //   age: elem.age,
  //   classification: elem.classification,
  // };

  // return acc;
}
