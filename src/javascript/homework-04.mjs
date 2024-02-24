// Promises
import axios from "axios";

const BASE_URL = "http://localhost:3000";
const instance = axios.create({ baseURL: BASE_URL });

// RUN "npm run start:db" to start the database

// Use axios to connect to our local database and use http method and promises to solve the following exercises

// 1. Create a product with the following attributes
// id, name, category, amount

async function createProduct(payload) {
  const url = "/users";

  const response = await instance({ url, method: "POST", data: payload });

  return response.data;
}

// 2. List all products
async function getProduct() {
  const url = "/users";

  const response = await instance({ url, method: "get" });

  return response.data;
}

// 3. Update a product

async function updateProduct(payload, id) {
  const url = `/users/${id}`;

  const response = await instance({ url, method: "PATCH", data: payload });

  return response.data;
}

// 4. Delete a product
async function deleteProduct(payload, id) {
  const url = `/users/${id}`;

  const response = await instance({ url, method: "DELETE", data: payload });

  return response.data;
}

// 5. Create a method that list all products and updates each of the products with a new attribute called price, set the value to 0

const newProducts = [
  {
    id: "id-01",
    name: "stripes-shirt",
    category: "clothes",
    amount: 3,
    price: 0,
  },
  {
    id: "id-02",
    name: "legant-sofa",
    category: "furniture",
    amount: 2,
    price: 0,
  },
  {
    id: "id-03",
    name: "omega-figure",
    category: "toys",
    amount: 5,
    price: 0,
  },
  {
    id: "id-04",
    name: "h-short",
    category: "clothes",
    amount: 9,
    price: 0,
  },
  {
    id: "id-05",
    name: "cross-lamp",
    category: "decoration",
    amount: 7,
    price: 0,
  },
];

const addingPrice = await Promise.all(
  newProducts.map((user) => {
    // {name: '', value: 4}
    return createProduct(user);
  })
);

async function main() {
  await createProduct({
    id: "id-01",
    name: "stripes-shirt",
    category: "clothes",
    amount: 3,
  });
  const products = await getProduct();
  console.log(products);
  console.log("=========== products + price ============");
  console.log(addingPrice);

  await updateProduct(
    {
      id: "id-04",
      name: "h-short",
      category: "clothes",
      amount: 9,
    },
    "id-04"
  );

  await deleteProduct({ id: "id-1", name: "user-name-1", age: 90 });
}

main();
