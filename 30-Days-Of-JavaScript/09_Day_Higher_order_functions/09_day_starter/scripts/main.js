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

// Using arrow function.
names.forEach((element, index, array) => {
  console.log(element, index, array);
});

// The above code can be written using arrow function and explicit return
names.forEach((element, index, arr) => console.log(element, index, arr));

// Example:

let sum = 0;
const numbersSum = [1, 2, 3, 4, 5];

numbersSum.forEach((number, index, array) => {
  // console.log(number, index, array);
  sum += number;
});

console.log(sum); // 15

const countries = [
  "Morocco",
  "Russia",
  "Germany",
  "Finland",
  "Denmark",
  "Sweden",
  "Norway",
  "Iceland",
];

countries.forEach((country, index, array) => {
  console.log(country, index, array);
});

// map :

// map: Iterate an array elements and modify the array elements. It takes a callback function with elements, index , array parameter and return a new array.

// Syntaxe:
// const modifiedArray = countries.map((element, index, arr) => {
//   return element;
// });
// console.log(modifiedArray);

// Index and array params are optional.
const country = countries.map((element, index, array) => element);
console.log(country); // ["Morocco", "Russia", "Germany", "Finland", "Denmark", "Sweden", "Norway", "Iceland"]

// Example of Square of numbers in an array:
const numbersArray = [1, 2, 3, 4, 5, 6];
const numbersSquare = numbersArray.map((number) => number * number);
console.log(numbersSquare); // [1, 4, 9, 16, 25, 36]

const namesUpper = ["Saad", "Mathias", "Elias", "Brook"];
const numsResult = namesUpper.map((name) => name.toUpperCase());
console.log(numsResult); // ["ASABENEH", "MATHIAS", "ELIAS", "BROOK"]

const countryUpper = countries.map((country) => country.toUpperCase());
console.log(countryUpper); // ["MOROCCO", "RUSSIA", "GERMANY", "FINLAND", "DENMARK", "SWEDEN", "NORWAY", "ICELAND"]

const countriesFirstThreeLetters = countries.map((country) =>
  country.toUpperCase().slice(0, 3)
);

console.log(countriesFirstThreeLetters); // ["MRO", "RUS", "GER", "FIN", "DEN", "SWE", "NOR", "ICE"]

// filter :
// Filter: Filter out items which full fill filtering conditions and return a new array.

const filteredArray = countries.filter((country) => country.length > 6);
console.log(filteredArray); // [ 'Morocco', 'Germany', 'Finland', 'Denmark', 'Iceland' ]

const filterdInclueds = countries.filter((country) => country.includes("or"));
console.log(filterdInclueds); // ["Morocco", "Norway"]

const filteredEndWith = countries.filter((country) => country.endsWith("d"));
console.log(filteredEndWith); // ["Finland", "Iceland"]

const countriesHaveSixLetters = countries.filter(
  (country) => country.length === 6
);

console.log(countriesHaveSixLetters); // [ 'Russia', 'Sweden', 'Norway' ]

const scores = [
  { name: "Saad", score: 95 },
  { name: "Yassine", score: 98 },
  { name: "Hassan", score: 80 },
  { name: "Ilyass", score: 50 },
  { name: "Mohammed", score: 85 },
  { name: "John", score: 100 },
];

const scoresGreaterEighty = scores.filter((score) => score.score > 80);
console.log(scoresGreaterEighty); // [ { name: 'Saad', score: 95 }, { name: 'Yassine', score: 98 }, { name: 'Mohammed', score: 85 }, { name: 'John', score: 100 } ]

// reduce:

// reduce: Reduce takes a callback function. The call back function takes accumulator, current, and optional initial value as a parameter and returns a single value. It is a good practice to define an initial value for the accumulator value. If we do not specify this parameter, by default accumulator will get array first value. If our array is an empty array, then Javascript will throw an error.

// Syntaxe:

// arr.reduce((acc, cur) => {
//   // some operations goes here before returning a value
//  return
// }, initialValue)

const arrayReduce = [1, 2, 3, 4, 5];
const initialValue = 0;

const reduceResult = arrayReduce.reduce((acc, curr) => {
  console.log(acc, curr); // 0 1, 1 2, 3 3, 6 4, 10 5
  return acc + curr;
}, initialValue);

console.log(reduceResult); // 15

// every:

// every: Check if all the elements are similar in one aspect. It returns boolean

const namesEvery = ["Saad", "Yassine", "Faycal", "Abdellah"];
const everyResult = namesEvery.every((name) => name.length > 4);
console.log(everyResult); // false

const result = namesEvery.every((name) => typeof name === "string"); // are all String?

console.log(result); // true

const boolArr = [true, false, true, true, false, true, true];
const boolResult = boolArr.every((item) => typeof item === "boolean");
console.log(boolResult); // true

// find:
// find: Return the first element which satisfies the condition

const findArr = [1, 2, 3, 4, 5];
const findResult = findArr.find((num) => num > 3);
console.log(findResult); // 4

const ages = [22, 24, 25, 27, 28, 30];
const ageResult = ages.find((age) => age > 25);
console.log(ageResult); // 27

const scoresArray = [
  { name: "Saad", score: 95 },
  { name: "Yassine", score: 80 },
  { name: "Abdellah", score: 50 },
  { name: "Mohammed", score: 85 },
  { name: "Faycal", score: 100 },
];

const scoreResult = scoresArray.find((user) => user.score > 85);
console.log(scoreResult); // { name: 'Saad', score: 95 }

// findIndex:
// findIndex: Return the position of the first element which satisfies the condition

const findIndexArr = [1, 2, 3, 4, 5];
const findIndexResult = findIndexArr.findIndex((num) => num > 3); // 3
console.log(findIndexResult); // 3

const namesFindIndex = ["Saad", "Yassine", "Faycal", "Abdellah"];
const agesFindIndex = [24, 22, 25, 32, 35, 18];

const findIndexNamesResult = namesFindIndex.findIndex(
  (name) => name === "Saad"
);
console.log(findIndexNamesResult); // 0

const findResultLength = namesFindIndex.findIndex((name) => name.length > 7);
console.log(findResultLength); // 3

const agesIndexResult = agesFindIndex.findIndex((age) => age < 20);
console.log(agesIndexResult); // 5

// some
// some: Check if some of the elements are similar in one aspect. It returns boolean

const bools = [true, true, false, true];
const boolsResult = bools.some((bool) => bool === true);
console.log(boolsResult); // true

const someArr = ["Saad", "Yassine", "Faycal", "Abdellah"];
const areAllStr = names.some((name) => typeof name === "number"); // Are all strings ?

console.log(areAllStr); // false

// sort

// sort: The sort methods arranges the array elements either ascending or descending order. By default, the sort() method sorts values as strings.This works well for string array items but not for numbers. If number values are sorted as strings and it give us wrong result. Sort method modify the original array. It is recommended to copy the original data before you start using sort method.

// ***** Sorting string values

const products = ["Milk", "Coffee", "Sugar", "Honey", "Apple", "Carrot"];
const copyProducts = [...products]; // recommended to copy the original data before you start using sort method.

// It's working for String Array but not for Numbers!
console.log(copyProducts.sort()); // ["Apple", "Carrot", "Coffee", "Honey", "Milk", "Sugar"]

// ***** Sorting Numeric values

// As you can see in the example below, 100 came first after sorted in ascending order. Sort converts items to string , since '100' and other numbers compared, 1 which the beginning of the string '100' became the smallest. To avoid this, we use a compare call back function inside the sort method, which return a negative, zero or positive.

const numbersValues = [9.81, 3.14, 100, 37];

// Using sort method to sort number items provide a wrong result. see below
// Sort convert items to string.
console.log(numbersValues.sort()); // [100, 3.14, 37, 9.81]

// ********************************************
const copyNumbersValues = [...numbersValues];

// We use compare call back function inside the sort method to sort number items provide a correct result.
const resultValues = copyNumbersValues.sort((a, b) => {
  console.log(a, b);
  return a - b;
});

console.log(resultValues); // [3.14, 9.81, 37, 100]

const numbersSorted = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbersSorted.sort((a, b) => a - b)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] // ascending order

const numbersDesc = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
console.log(numbersDesc.sort((a, b) => b - a)); // [10, 9, 8, 7, 6, 5, 4, 3, 2, 1] // descending order

// ***** Sorting Object Arrays
// Whenever we sort objects in an array, we use the object key to compare. Let us see the example below.

const objArr = [
  { key: 10 },
  { key: 20 },
  { key: 30 },
  { key: 40 },
  { key: 50 },
  { key: 60 },
];

objArr.sort((a, b) => {
  if (a.key < b.key) return -1;
  if (a.key > b.key) return 1;
  return 0;
});

console.log(objArr); // [ { key: 10 }, { key: 20 }, { key: 30 }, { key: 40 }, { key: 50 }, { key: 60 } ]

// or

objArr.sort((a, b) => {
  if (a["key"] < b["key"]) return -1;
  if (a["key"] > b["key"]) return 1;
  return 0;
});

console.log(objArr); // [ { key: 10 }, { key: 20 }, { key: 30 }, { key: 40 }, { key: 50 }, { key: 60 } ]

const users = [
  { name: "Saad", age: 150 },
  { name: "Yassine", age: 50 },
  { name: "Mohammed", age: 100 },
  { name: "Faycal", age: 22 },
];

const usersSortObjArr = users.sort((a, b) => {
  if (a.age > b.age) return 1;
  if (a.age < b.age) return -1;

  return 0;
});

// Sorted ascending
console.log(usersSortObjArr); // [ { name: 'Faycal', age: 22 } { name: 'Yassine', age: 50 } { name:      'Mohammed', age: 100 } { name: 'Saad', age: 150 } ]

// ******************************  Exercises **********************************

// Exercises: Level 1

const countriesExercice = [
  "Morocco",
  "Finland",
  "Sweden",
  "Denmark",
  "Norway",
  "IceLand",
];
const namesExercice = ["Saad", "Mohammed", "Faycal", "Yassine", "Abdellah"];
const numbersExercice = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const productsExercice = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

// 1** Explain the difference between forEach, map, filter, and reduce.
// See above each callback function are explained in detail.

// 2 ** Define a callback function before you use it in forEach, map, filter or reduce.
// forEach:

const sumNumbersExercice = (array) => {
  let sumCallback = 0;

  const callBackResult = (num) => {
    sumCallback += num;
  };

  // The forEach method calls the callBack function for each item in the array.
  array.forEach(callBackResult);

  return sumCallback;
};

console.log(sumNumbersExercice(numbersExercice)); // 55

// 3 ** Use forEach to console.log each country in the countries array.
countriesExercice.forEach((country) => {
  console.log(country); // Morocco, Finland, Sweden, Denmark, Norway, IceLand
});

// 4 ** Use forEach to console.log each name in the names array.
namesExercice.forEach((name) => {
  console.log(name); // Saad, Mohammed, Faycal, Yassine, Abdellah
});

// 5 ** Use forEach to console.log each number in the numbers array.
numbersExercice.forEach((number) => {
  console.log(number); // 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
});

// 6 ** Use map to create a new array by changing each country to uppercase in the countries array.
const copyArr = [...countriesExercice];
copyArr.map((country) => {
  console.log(country.toLocaleUpperCase()); // MOROCCO, FINLAND, SWEDEN, DENMARK, NORWAY, ICELAND
});

// 7 ** Use map to create an array of countries length from countries array.
copyArr.map((country) => {
  console.log(country.length); // 7, 7, 7, 7, 7, 7;
});

// 8 ** Use map to create a new array by changing each number to square in the numbers array
const copyNumbers = [...numbersExercice];
console.log(copyNumbers);

copyNumbers.map((num) => {
  console.log(num * num); // 1, 4, 9, 16, 25, 36, 49, 64, 81, 100
});

// 9 ** Use map to change to each name to uppercase in the names array
namesExercice.map((name) => {
  console.log(name.toLocaleUpperCase()); // SAAD, MOHAMMED, FAYCAL, YASSINE, ABDELLAH
});

// 10 ** Use map to map the products array to its corresponding prices.
productsExercice.map((product) => {
  console.log(product); // { product: 'banana', price: 3 }  { product: 'mango', price: 6 }  { product: 'potato', price: ' ' }  { product: 'avocado', price: 8 }  { product: 'coffee', price: 10 }  { product: 'tea', price: '' }
});

// 11 ** Use filter to filter out countries containing land.
console.log(copyArr); // Morocco, Finland, Sweden, Denmark, Norway, IceLand
const resultFilter = copyArr.filter((country) => country.includes("land"));

console.log(resultFilter); // [ 'Finland' ]

// 12 ** Use filter to filter out countries having six character.
copyArr.filter((country) => {
  console.log(country.slice(0, 6)); // Morocc, Finlan, Sweden, Denmar, Norway, IceLan
});

// 13 ** Use filter to filter out countries containing six letters and more in the country array.
console.log(copyArr); // Morocco, Finland, Sweden, Denmark, Norway, IceLand
copyArr.filter((country) => {
  console.log(country.length >= 6); // true, true, true, true, true, true
});

// 14 ** Use filter to filter out country start with 'E'.
const countryStart = copyArr.filter((country) => country.startsWith("E"));
console.log(countryStart); // []

// 15 ** Use filter to filter out only prices with values.
productsExercice.filter((product) => {
  console.log(product.price); // 3, 6, 8, 10
});

// 16 ** Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.
console.log(copyArr); // Morocco, Finland, Sweden, Denmark, Norway, IceLand
const getStringLists = (arr) => {
  return arr.filter((country) => typeof country === "string");
};

// logged the result of the getStringLists function with the countries array only with string items.
console.log(getStringLists(copyArr)); // [ 'Morocco', 'Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand' ]

// 17 ** Use reduce to sum all the numbers in the numbers array.
