// Create at least two different fn to solve the same problem with different inputs

const iceCream = ["vanilla", "chocolate", "strawberry", "rocks road"];

function printIceCream(arr) {
  for (var i = 0; i < arr.length; i += 1) {
    console.log(arr[i]);
  }
}

console.log(printIceCream(iceCream));

// "Use map to double each number in the array.",

const double = [90, 180, 45];

function doubleArrayNums() {
  return double.map((num) => num * 2);
}

console.log("================= double ============");
console.log(doubleArrayNums());

// "Use map to convert an array of Celsius temperatures to Fahrenheit.",

//Fahrenheit formula
// Celsius = (Fahrenheit - 32) * 5 / 9

//Celsius formula
// ( °C × 9/5) + 32 =  °F

const celsius = [32, 100, 60, 22, -4]; // 89.6 / 212 / 140 / 71.6 / 24.8

function celsiusToFahrenheit(celsiusArr) {
  return celsiusArr.map((cel) => {
    return (cel * 9) / 5 + 32;
  });
}

// Option #2 Using Reduce Method

function celsiusToFahrenheitReduce(array) {
  return array.reduce((acc, cel) => {
    return [...acc, (cel * 9) / 5 + 32];
  }, []);
}

console.log("============== celsius to fahrenheit");
console.log(celsiusToFahrenheit(celsius));
console.log(celsiusToFahrenheitReduce(celsius));

// convert an array of Fahrenheit temperature to Celsius.

const fahrenheit = [89.6, 212, 140, 71.6, 24.8];

function fahrenheitToCelsius(fahrenheitArr) {
  return fahrenheitArr.reduce((acc, fah) => {
    return [...acc, fah - (32 * 5) / 9];
  }, []);
}

console.log("============== fahrenheit to celsius");
console.log(fahrenheitToCelsius(fahrenheit));

// "Use filter to get only even numbers from an array.",

const nums = [23, 200, 90, 8, 3, 5, 14, 7];

function filterEvenNums(array) {
  return array.filter((num) => num % 2 === 0);
}

console.log("============== filter even =============");
console.log(filterEvenNums(nums));

// "Use filter to get only words longer than 5 characters from an array of strings.",

const users = ["Ana", "Felipe", "Fernando", "Liz", "Joe", "Fiorella"];

function filterCharLongerThan5(users) {
  return users.filter((char) => char.length > 5);
}

console.log("============== filter longer than 5 =============");
console.log(filterCharLongerThan5(users));

// "Use reduce to calculate the sum of all numbers in an array.",

const numbers = [305, 499, 435, 523, 19898];

function sumAllNums(array) {
  return array.reduce((acc, num) => acc + num);
}

console.log("============== reduce sum all =============");
console.log(sumAllNums(numbers));

// "Use reduce to concatenate all strings in an array.",

const phrase = ["Cannibal", "class", "killing", "the", "son"];

function concatenateArrStrings(array) {
  return array.reduce((acc, str) => {
    return `${acc} ${str}`;
  }, "");
}

console.log("============== reduce concatenate str =============");
console.log(concatenateArrStrings(phrase));

// "Use map to square each number and then use reduce to calculate their sum.",

const n = [13, 6, 93, 110, 50, 32]; // 3.60 // 2.44 // 9.64 / 10.48 / 7.07 /5.65 = 38.88

function square(array) {
  //   return array.map((num) => Math.pow(num, 2));
  const square = array.map((num) => num ** 2);
  const sum = square.reduce((acc, num) => acc + num);
  return sum;
}

console.log("============== square =============");
console.log(square(n));

// "Use filter to get only students who passed the exam (scored 60 or above).",

const students = [
  { name: "Joe", score: 100 },
  { name: "Peter", score: 24 },
  { name: "Jake", score: 70 },
];

function filterGradesBiggerThan60(array) {
  return array.filter((student) => student.score >= 60);
}

console.log("============== score >= 60 =============");
console.log(filterGradesBiggerThan60(students));

// "Use map to convert an array of strings to uppercase.",

const chars = ["it's", "not", "so", "wrong", "to", "wonder", "why"];

function uppercaseArr(array) {
  return array.map((str) => str.toUpperCase());
}

console.log("============== upperCase string =============");
console.log(uppercaseArr(chars));

// "Use reduce to find the maximum number in an array of numbers.",

const numArr = [102304, 24923920, 1931931021, 1213913912, 99210109011];

function findMaxNum(array) {
  return array.reduce((acc, max) => (acc > max ? acc : max));
}

console.log("============== find max =============");
console.log(findMaxNum(numArr));

// "Use filter to get only elements that are divisible by 3 from an array of numbers.",

function divisibleBy3(array) {
  return array.filter((num) => num % 3 === 0);
}

console.log("============== divisible by 3 =============");
console.log(divisibleBy3(nums));

// "Use map to convert an array of objects to an array of their ids.",

const people = [
  { name: "Joey", id: "01", age: 22 },
  { name: "Violet", id: "02", age: 32 },
  { name: "Kiki", id: "03", age: 45 },
];

function convertObjectToIds(array) {
  return array.map((person) => person.id);
}

console.log("============== array of id's =============");
console.log(convertObjectToIds(people));

// "Use reduce to calculate the total price of items in a shopping cart array.",

const shoppingCart = [
  {
    name: "item 1",
    category: "shoes",
    value: 2000,
  },
  {
    name: "item 2",
    category: "short",
    value: 900,
  },
  {
    name: "item 3",
    category: "shirt",
    value: 100,
  },
  {
    name: "item 4",
    category: "hat",
    value: 300,
  },
];

function calculateTotal(array) {
  return array.reduce((acc, item) => {
    return acc + item.value;
  }, 0);
}

console.log("============== total price =============");
console.log(calculateTotal(shoppingCart));

// "Use filter to get only prime numbers from an array of numbers.",

const arrNums = [1, 2, 4, 7, 12, 13, 55, 43, 111];

function filterPrimenNums(arr) {
  return arr.filter((odd) => odd % 2 !== 0);
}

console.log("============== prime numbers =============");
console.log(filterPrimenNums(arrNums));

// "Use map to convert an array of objects to an array of specific properties.",

const countries = [
  {
    country: "Costa Rica",
    city: "Alajuela",
    continent: "America",
  },
  {
    country: "Perú",
    city: "Lima",
    continent: "America",
  },
  {
    country: "Spain",
    city: "Madrid",
    continent: "Europa",
  },
];

function convertToProperties(arr) {
  return arr.map((country) => country.city);
}

console.log("============== country  =============");
console.log(convertToProperties(countries));

// "Use reduce to calculate the average of all numbers in an array.",

const averageNums = [20, 30, 40, 50, 60, 70, 80, 90, 100]; // 60

function calcAverage(arr) {
  const length = arr.length;

  return (
    arr.reduce((acc, num) => {
      return acc + num;
    }, 0) / length
  );
}

// Option #2 forEach Method

function filterGreater(arr) {
  let sum = 0;

  arr.forEach((num) => {
    sum += num;
  });

  const average = sum / arr.length;

  return average;
}

// Option #3 usibg map method

function average2(arr) {
  let sum = 0;
  arr.map((num) => {
    return (sum += num);
  });

  const average = sum / arr.length;
  return average;
}

console.log("============== average numbers =============");
console.log(calcAverage(averageNums));
console.log(filterGreater(averageNums));
console.log(average2(averageNums));

// "Use filter to get only elements that are greater than the average from an array of numbers.",

const avgNums = [45, 52, 79, 25, 15, 28, 7, 6]; // 32.125

function average(arr) {
  const avg = arr.reduce((acc, num) => {
    const sum = arr.length;
    return acc + num / sum;
  }, 0);

  return arr.filter((num) => num > avg);
}

console.log("============== filter greater than  =============");
console.log(average(avgNums));

// "Use map to add an 'index' property to each element in an array.",

const addIndexArr = [{ name: "chu" }, { name: "oli" }, { name: "saru" }];

function addIndex(arr) {
  return arr.map((elem, i) => {
    return { ...elem, index: `${i}` };
  });
}

console.log("============== add property =============");
console.log(addIndex(addIndexArr));
// "Use reduce to concatenate all strings in an array with a specific separator.",

const stringArr = [
  "Brocoli",
  "Banana",
  "Tomato",
  "Carrot",
  "Strawberry",
  "Grapes",
  "Garlic",
];

function concatenateStringsByCat(arr, separator) {
  // return arr.join(separator);

  //" adasdasd, asdsa, asd, asd, asd, asd,"
  return arr.reduce((acc, str) => {
    return `${acc}${separator}${str}`;
  }); // join("") doesn't work
}

console.log("============== concatenate strings =============");
console.log(concatenateStringsByCat(stringArr, ","));

// "Use filter to get only elements that start with a specific letter from an array of strings."

function filterByFirstLetter(arr) {
  // string.at(0)
  return arr.filter((string) => string[0] === "G");
}

console.log("============== filter by first letter =============");
console.log(filterByFirstLetter(stringArr));

// EXTRA

// find a 2 items an a list of words that the first element is a contained in the second element
const arr04 = [
  "element",
  "will",
  "appear",
  "in",
  "other",
  "this",
  "list",
  "of",
  "words",
  "is",
];

function findFirstWordContainedInSecond(arr) {
  let index = [-1, -1];

  let isFound = false;

  const length = arr.length;

  for (let index01 = 0; index01 < length; index01++) {
    for (let index02 = 0; index02 < length; index02++) {
      if (index02 <= index01) {
        continue;
      }

      const word1 = arr[index01];
      const word2 = arr[index02];

      const result = word1.includes(word2);

      if (result) {
        index = [index01, index02];

        isFound = true;

        break;
      }
    }

    if (isFound) {
      break;
    }
  }
  return index;
}

console.log(findFirstWordContainedInSecond(arr04));

// Write a function that takes a string and returns an object that counts the number of occurrences of each character in the string using a for loop.

// For example, if we call countCharacters('hello'), the function would return the following object:

function countChars(string) {
  let count = {};
  for (let i = 0; i < string.length; i++) {
    const char = string.charAt(i);
    count[char] = count[char] ? count[char] + 1 : 1;
  }
  return count;
}

console.log(countChars("Kawasaki"));

//Write a function that takes an array of numbers and returns the largest number in the array using a for loop. If the array is empty, return undefined

const arrMax = [2, 13, 55, 200, 3000];

function findMax(arr) {
  let max = arr[0];
  if (!arr.length) {
    return undefined;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
console.log(findMax(arrMax));

//Write a function that takes a string as input and returns the reverse of the string using a for loop

// const str = ["Tomorrow"];

// function reverseStr(str) {
//   let reverse = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     reverse += str.charAt(i);
//   }
//   return reverse;
// }

// console.log(reverseStr(str));
