const axios = require("axios");

const BASE_URL = "http://localhost:3000";

const instance = axios.create({ baseURL: BASE_URL });

async function getUsers() {
  const url = "/users";

  const response = await instance({ url, method: "get" });

  return response.data;
}

function processPromise(promise) {
  return promise.then((data) => console.log(data));
}

function getAllUsers() {
  console.log();
  // const id, url = '';

  return getUsers();
}

async function main() {
  // const promise = getUsers(); // promises are objects as any other value in the language, used as variables values and passed around

  const users = await getAllUsers();

  console.log(users);

  // await processPromise(promise);

  console.log("hello");

  const squaresPromise = new Promise((resolve, reject) => {
    let n = 100000;

    let result = [];

    console.log("INITIATING PROMISE");

    while (n--) {
      // sync process
      result = [...result, n * n];
    }

    if (n <= 0) {
      return reject(new Error("This value is not possible"));
    }

    if (n === 2) {
      return resolve([]);
    }

    resolve(result);

    // setTimeout(() => , 5000);
  });

  const a = 5;
  const b = 6;

  console.log(a + b);

  // try {} catch {} finally {}

  const squares = await squaresPromise;
  console.log(squares);

  // promise
  //   .then((users) => {
  //     return new Promise((r) => {
  //       setTimeout(() => r(users), 5000);
  //     }).then((data) => {
  //       return users.map((user) => user.id);
  //     });
  //   })
  //   .then((mapped) => console.log(mapped))
  //   .then(() => {
  //     console.log("hello");

  //     const a = 5;
  //     const b = 6;

  //     console.log(a + b);
  //   }); // async
}

main(); // puts this function to run into promise queue
