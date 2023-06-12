// Higher Order Functions

// Higher order functions are functions which take other function as a parameter or return a function as a value. The function passed as a parameter is called callback.

// Callback
// A callback is a function which can be passed as parameter to other function. See the example below.

// Example:
// A callback function, the name of the function could be any name

const callBack = (n) => n * 2;
console.log(callBack(2)); // 4

// Higher Order Function
// function which takes a function as a callback

const higherOrderFunction = (n, callback) => callback(n) * 2;
console.log(higherOrderFunction(4, callBack)); // 16

// Returning function
// Higher order functions return function as a value​
// Higher order function returning an other function

const higherOrder = (n) => {
  const doSomeThing = (m) => {
    const doWhatEver = (t) => {
      // 4 + 9 + 10, the result of the function passed as a parameter.
      return 2 * n + 3 * m + t;
    };
    return doWhatEver;
  };
  return doSomeThing;
};

console.log(higherOrder(2)(3)(10)); // 23

// Let us see were we use callback functions. For instance the forEach method uses call back.
// Example:

const numbers = [1, 2, 3, 4, 5];

const sumArray = (array) => {
  let sum = 0;

  const callBack = (item) => {
    sum += item;
  };

  // The forEach method calls the callBack function for each item in the array.
  array.forEach(callBack);

  return sum;
};

console.log(sumArray(numbers)); // 15

// The Above example can be simplified as follows:

const sumArraySimplified = (array) => {
  let sum = 0;

  array.forEach((item) => {
    sum += item;
  });

  return sum;
};

console.log(sumArraySimplified(numbers)); // 15

// Setting time

// In JavaScript we can execute some activities in a certain interval of time or we can schedule(wait) for some time to execute some activities.

// *** setInterval
// *** setTimeout

// Setting Interval using a setInterval function
// In JavaScript, we use setInterval higher order function to do some activity continuously with in some interval of time. The setInterval global method take a callback function and a duration as a parameter. The duration is in milliseconds and the callback will be always called in that interval of time.

// Syntaxe
// Example:

// Resolve issue Callback must be a function!!
function intervalCallback(params) {
  console.log("Hello set Interval Callback");
}

// setInterval(callback, duration)
// It's log, in every second, 1000ms, milliseconds is 1s.

// Stop execute the setInterval function.
// console.log(setInterval(intervalCallback, 1000)); // 1000 is the duration in milliseconds.

// Setting a time using a setTimeout
// In JavaScript, we use setTimeout higher order function to execute some action at some time in the future. The setTimeout global method take a callback function and a duration as a parameter. The duration is in milliseconds and the callback wait for that amount of time.

// Syntaxe
// Example:

function timeoutCallback(params) {
  console.log("Hello set Timeout Callback");
}

// // Stop execute the setTimeout function.
// console.log(setTimeout(timeoutCallback, 2000)); // 2000 is the duration in milliseconds, in every second, 2000ms, milliseconds is 2s.

// Functional Programming

// Instead of writing regular loop, latest version of JavaScript introduced lots of built in methods which can help us to solve complicated problems. All builtin methods take callback function. In this section, we will see forEach, map, filter, reduce, find, every, some, and sort.

// -------------------------------------------------------------

// All builtin methods take callback function.
// forEach method takes a callback function as a parameter.
// map method takes a callback function as a parameter.
// filter method takes a callback function as a parameter.
// reduce method takes a callback function as a parameter.
// find method takes a callback function as a parameter.
// every method takes a callback function as a parameter.
// some method takes a callback function as a parameter.
// sort method takes a callback function as a parameter.

// -------------------------------------------------------------

// forEach :

// forEach: Iterate an array elements. We use forEach only with arrays. It takes a callback function with elements, index parameter and array itself. The index and the array optional.

const names = ["Saad", "Yassine", "Faycal", "Abdellah"];

names.forEach((element, index, array) => {
  console.log(element, index, array);
});
