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

const intervalCallback = setInterval(() => {
  console.log("Hello set Interval Callback");
});

// setInterval(callback, duration)
// It's log, in every second, 1000ms, milliseconds is 1s.
console.log(setInterval(intervalCallback, 1000)); // 1000 is the duration in milliseconds.

// Setting a time using a setTimeout
// In JavaScript, we use setTimeout higher order function to execute some action at some time in the future. The setTimeout global method take a callback function and a duration as a parameter. The duration is in milliseconds and the callback wait for that amount of time.

// Syntaxe
// Example:

const timeoutCallback = setTimeout(() => {
  console.log("Hello set Timeout Callback");
});

console.log(setTimeout(timeoutCallback, 2000)); // 2000 is the duration in milliseconds, in every second, 2000ms, milliseconds is 2s.

// Functional Programming
