import axios from "axios";

const BASE_URL = "http://localhost:3000";

// events
// callback

class EventHandlerClient {
  handlers = {
    error: [],
    data: [],
    connect: [],
    done: [],
  };

  onError(callback, error) {
    callback(error);
  }

  onData(callback, data) {
    callback(data);
  }

  onConnection(callback) {
    callback({ data: "new connection stablished" });
  }

  onDone(callback, data) {
    callback(data);
  }

  on(event, callback) {
    if (event === "connect") {
      this.handlers[event].push(this.onConnection.bind(this, callback));
    }

    if (event === "data") {
      this.handlers[event].push(this.onData.bind(this, callback));
    }

    if (event === "error") {
      this.handlers[event].push(this.onError.bind(this, callback));
    }

    if (event === "done") {
      this.handlers[event].push(this.onDone.bind(this, callback));
    }
  }

  process() {
    let count = 0;
    let dataInterval;

    this.handlers["connect"].forEach((handler) => {
      handler();
    });

    dataInterval = setInterval(() => {
      if (count > 5) {
        this.handlers["done"].forEach((handler) => {
          handler({ data: "process done" });
        });

        clearInterval(dataInterval);

        return;
      }

      this.handlers["data"].forEach((handler) => {
        handler({ data: Math.random() });
      });

      count++;
    }, 1000);
  }
}

function makeRequest(config) /** : Promise<AxiosResponse<any>> */ {
  return axios({ baseURL: BASE_URL, ...config });
}

async function getUsers() {
  const url = "/users";

  // resolve/reject => fulfilled
  const response = await makeRequest({ url, method: "GET" });

  return response.data;
}

function createUser(payload) {
  const url = "/users";

  return new Promise((resolve) => {
    // resolve/reject => fulfilled
    makeRequest({ url, method: "POST", data: payload }).then((response) => {
      resolve(response.data);
    });
  });

  // return new Promise((r) => r(response.data));
}

function primisifyClient(client, mapper) {
  return new Promise((resolve, reject) => {
    const response = [];

    client.on("data", (data) => {
      response.push(mapper(data));
    });

    client.on("done", () => {
      resolve(response);
    });

    client.on("error", (error) => {
      reject(error);
    });

    client.process();
  });
}

async function main() {
  // const users = await getUsers();
  // console.log(users);
  // await createUser({ id: "id-2", name: "user-name-2", age: 80 });
  // const newUsers = await getUsers();
  // console.log(newUsers);
  // const client = new EventHandlerClient();
  // console.log("awaiting response from client");
  // const data = await primisifyClient(client, (payload) => payload.data);
  // console.log({ data });

  const users = [
    { name: "user-name-2", age: 80 },
    { name: "user-name-3", age: 80 },
    { name: "user-name-4", age: 80 },
    { name: "user-name-5", age: 80 },
    { name: "user-name-6", age: 80 },
    { name: "user-name-7", age: 80 },
    { name: "user-name-8", age: 80 },
  ];

  const responses /*: Promise<>[] */ = await Promise.all(
    users.map((user) => {
      // {name: '', value: 4}
      return createUser(user);
    })
  );

  console.log(responses);

  // const responses = await Promise.all(promises);

  // const response = await ...
  // const allUsers = response[0];
  // const userCreated = response[1];
  // const [allUsers, userCreated] = await Promise.all([
  //   getUsers(),
  //   createUser({}),
  // ]);
}

main();
