// Variable Destructuring
// Extract using destructuring the variable hello from the nested object item
const object1 = { item: { hello: 1 } };

// Your code goes here
// const hello = object1.item.hello;

const {
  item: { hello },
} = object1;

console.log(hello);

// Dynamic Key Object Creation
// create function that dynamically adds a new property to an object
const object2 = { result: "success" };

// Your code goes here
function addProp(obj, prop, value) {
  return { ...obj, [prop]: value };
}

console.log(addProp(object2, "newProp", "propValue"));

// Array Methods
// Filter all values that are bigger than 20

const items = [
  {
    value: 3,
  },
  { value: 10 },
  { value: 50 },
  { value: 30 },
];

function filterBiggerThan20(items) {
  return items.filter((item) => item.value > 20);
}

console.log(filterBiggerThan20(items));

// Map
// Tranform the following array of objects to the following shape:
// id: the name of the item,
// category: the name of the category

const items2 = [
  {
    name: "Item 1",
    category: {
      name: "Category 2",
    },
  },
  {
    name: "Item 2",
    category: {
      name: "Category 1",
    },
  },
  {
    name: "Item 3",
    category: {
      name: "Category 3",
    },
  },
  {
    name: "Item 4",
    category: {
      name: "Category 2",
    },
  },
  {
    name: "Item 5",
    category: {
      name: "Category 3",
    },
  },
];

// items2 = {
// id: "Item 5"
// category: "Category 3"
// }

function transformItems(arr) {
  return arr.map((obj) => {
    return {
      id: obj.name,
      category: obj.category.name,
    };
  });
}

console.log(transformItems(items2));

// Reduce
// Group Items by a property
// Use reduce method to group all items by category, the result should be an object where they key is
// the name of the category and the value is an array of all matching items for that category

function groupByCategory(items2) {
  return items2.reduce((acc, item) => {
    return {
      ...acc,
      [item.category.name]: [...(acc[item.category.name] || []), item],
    };
  }, {});
}

console.log(groupByCategory(items2));

// Mapping (Dictionary)
// Use the following dictionary to decode the secret message
const dict = {
  x: "c",
  o: "o",
  b: "d",
  r: "e",
  n: "i",
  y: "s",
  p: "l",
  a: "f",
  w: "a",
  u: "w",
  c: "m",
};

function decodeMessage(message, dictionary) {
  const chars = message.split("");
  return chars
    .map((char) => {
      if (char === " ") {
        return char;
      }
      return dictionary[char];
    })
    .join("");
}

console.log(decodeMessage("xobr ny pnar xobr ny wuryocy", dict));

// Count words lower case
// Count all independent words in the following test

const text1 = `
Augusta Ada King, Countess of Lovelace (née Byron; 10 December 1815 - 27 November 1852) was an English mathematician and writer, chiefly known for her work on Charles Babbage's proposed mechanical general-purpose computer, the Analytical Engine.
She was the first to recognise that the machine had applications beyond pure calculation.
Ada Byron was the only legitimate child of poet Lord Byron and reformer Lady Byron.
All Lovelace's half-siblings, Lord Byron's other children, were born out of wedlock to other women.
Byron separated from his wife a month after Ada was born and left England forever.
He died in Greece when Ada was eight.
Her mother was anxious about her upbringing and promoted Ada's interest in mathematics and logic in an effort to prevent her from developing her father's perceived insanity.
Despite this, Ada remained interested in him, naming her two sons Byron and Gordon.
Upon her death, she was buried next to him at her request. Although often ill in her childhood, Ada pursued her studies assiduously.
She married William King in 1835. King was made Earl of Lovelace in 1838, Ada thereby becoming Countess of Lovelace.
`;

function countWords(text) {
  const words = text.toLowerCase().split(" ");
  return words.reduce((acc, word) => {
    return { ...acc, [word]: (acc[word] || 0) + 1 };
  }, {});
}
console.log(countWords(text1));
// Count letters lowercase
// Create a function that counts all the letters in the text provided

function countLetters(text) {
  const characters = text.toLowerCase().split("");
  return characters.reduce((acc, character) => {
    return {
      ...acc,
      [character]: (acc[character] || 0) + 1,
    };
  }, {});
}

console.log(countLetters(text1));
