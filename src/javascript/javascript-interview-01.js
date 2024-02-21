// Describe the differences between function declarations and function expressions.

// definition
function myFn() {}

// expression
const myFn1 = function () {};

// expression
const myOtherFn = () => {};

// function expresion () => {}
[].map(() => {});

// What is the purpose of the arguments object in a function?

// create a function with unlimited/dynamic number of arguments
// varargs => undefined number of arguments
function whatEver(/*element, ...fn*/) {
  const args = [...arguments];

  const [element, ...fns] = args;

  console.log(args);
}

function myOtherWharever() {
  const params = [{}, () => {}, () => {}, () => {}];
  whatEver(...params);

  // whatEver(
  //   {},
  //   () => {},
  //   () => {},
  //   () => {}
  // );
}

whatEver(
  {},
  () => {},
  () => {}
);
whatEver();

// Explain the concept of callback functions.

// A callback is used to transmit data (result) to a unknown function whenever a process or calculation is done/completed
// Usually used on async operations (like going to a server, http request, data transmition through sockets, reading files or others)

// For javascript as a convetion a callback always receives 2 parameters, the first one is an error if present, undefined otherwise, then the result
// if no error occured

function process(callback) {
  // execution something expensive here
  const result = ""; // some operation

  // Error case
  callback(new Error());

  // Success case
  callback(undefined, result);
}

function myDataResponseProcessor(error, data) {
  if (error) {
    // handle error
  }

  // do something with the data
}

process(function (error, data) {});
// process(myDataResponseProcessor1);
// process(myDataResponseProcessor2);

[].map((a) => {});

/** 
○ How do you access a specific element in an array?
 
Uses an index, key or index/number position in the array
Syntax uses square brakets "arr[1]"


○ Explain the difference between === and == in JavaScript.

"1" == 1 => true

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness


○ How would you clone an object in JavaScript?

// references and memory allocation
// shallow clone

// deep clone

*/

/**
 * 
 Scope and Closure:
○ What is block scope and how is it different from function scope?



Block scope (curly brackets): declare variables in the block scope wich means variable only exist within the corresponding block.


Function Scope:  it is the scope inside a function. For example the var variable key gets a fn scope (has global scope) can be access inside the fn. Var can be re-declared and re-initialized.

On the other side, const and let variables are block scope and can be visible and be access just inside the piece of code they were declare / define. You can't access let or const variables in the fn scope because their blocked. let can only be re-initialize
const can't be re-declare or re-initialized

○ How does closure help with encapsulation in JavaScript?

closure is a fn having access to the scope of its parent fn after the parent fn has returned. In this way we create private variables and fn in order to encapsulate.

const myCounter = (function() {
let _counter = 0;

function increase(){
  return _counter++;
}

function decrease(){
  return _counter--;
}

function value(){
  return _counter;
}

return {
  increase,
  decrease,
  value
}
})();
 
myCounter.value()
myCounter.increase()
myCounter.value()
myCounter.increase()
myCounter.increase()
myCounter.value()
myCounter.decrease()
myCounter.value()


○ Explain the concept of lexical scope.

the place in which the variable was declare/created, means definition space not invocation space


// scope and uses this scope variable
function () {

}

// different uses the closes this of the parent in the scope
const () => {

}

 */

// Block Scope
function scope() {
  if (true) {
    var heroOne = "Iron Man"; // general scope
    const heroTwo = "Superman"; // block scope
    let heroThree = "Batman"; // block scope
    console.log(heroOne);
  }

  console.log(heroOne); // "Iron Man"
  // console.log(heroTwo); heroTwo is not defined
  //console.log(heroThree); // hereThree is not defined
}

scope();

/**
Asynchronous JavaScript:
○ What is the difference between synchronous and asynchronous code?

synchronous: que pasa de manera secuencial (o sea una cosa depues de la otra)
- for loop
- native operations like math calculations

asynchronous: no pasa de manera secuencial (que son cosas pueden pasar al mismo tiempo)
- everything that requires I/O (input output) requests/resources
  - http request (go to a server and fetch data)
  - open a file and read content


// Event Loop
7 steps, happen by ticks (clock)

[ ] -> sync
[ ] -> async
// setTimeout, setInterval, setInmediate => timer based operations



○ How does the Promise object work in JavaScript?

Explain the role of the async/await syntax.
// Emulates imperative blocking programming
// async: Wrapps function return value into a promise
// await: Indicates javacript to stop and wait for a primise to be resolved/fulfilled

async function MyAsyncFunction() {

  await //

  .
  .
  .
  
  return "" => primitivo o complejo (class, object, arr)

} => wraps whatever the function retuns into a new Promise<any> => Promise<string>
*/
