// ------------- Adding new Elements
// @ts-nocheck

const arr = [1];

arr.unshift(0);
arr.splice(2, 0, 2); // Modifying the original array!
arr.push(3, 4);
//  The original array will not be modified!
console.log(arr.slice(2, 4));

// Result!!
console.log(arr);

// ------------- Finding Elements ===> (Primitive!)

// const findItem = arr.indexOf(1, 0);
const findItem = arr.lastIndexOf(3, 3);
console.log(findItem);
console.log(arr.indexOf(4) !== -1);
console.log(arr.includes(4));

// ------------- Finding Elements ===> (Reference Type!)

const courses = [
  { id: 1, name: "AZGHOUR" },
  { id: 2, name: "SAAD" },
];

const course = courses.find((course) => course.name === "AZGHOUR");

console.log(course);

// ------------- Removing Elements

const names = ["AZGHOUR", "SAAD", "Yaasine"];

// End element
console.log(names.pop());
// console.log(names);

// Begining element
console.log(names.shift());
// console.log(names);

// Modifying the original array!
console.log(names.splice(1, 2, "Yassine"));
console.log(names);

//  The original array will not be modified!
console.log(names.slice(0, 2));
console.log(names);

// -------------- Emptying an Array

// Solution 1  ----> Good!

// Still in memory, but will be removed by (GC)
// Garbage collection (GC). The purpose of a garbage collector is to monitor memory allocation and determine when a block of allocated memory is no longer needed and reclaim it.

let name = ["AZGHOUR", "SAAD", "Yaasine"];

name = [];
// console.log(name);

// Solution 2 ----> Good!
name.length = 0; // truncated Array!
// console.log(name);

// Solution 3
name.splice(0, name.length);
// console.log(name);

// Solution 4    // Not recommended!
while (name.length > 0) name.pop();
// console.log(name);

// -------------  Combining && Slicing Arrays

const first = [{ id: 1 }, 2, 3];
const second = [4, 5, 6];

// Combined by reference type!
const combine = first.concat(second);
// const combine  = [...first, ...second]
first[0].id = 10;
console.log(combine);

// const slice = combine.slice(3, 4);
// const slice = combine.slice();
const slice = [...combine];
console.log(slice);

// ------------- The Spread Operator

const firstArr = [1, 2, 3];
const secondArray = [4, 5, 6];

const spreed = [...firstArr, ...secondArray, ...slice];
console.log(spreed);

// ------------- Iterating an Array

for (const item of spreed) {
  console.log(item);
}

spreed.forEach((item, index) => {
  console.log(item, index);
});

// ------------- Joining Arrays

const numbers = [1, 2, 3];
const myLastName = "This is my last name AZGHOUR!";
const someName = ["Saad", "Yassine", "joy", "Mohammed"];

const join = numbers.join(" ");
console.log(join);

const split = myLastName.split(" ");
console.log(split);
const combineSplite = split.join("-");
console.log(combineSplite);

// ------------- Sorting Arrays

const numSort = [1, 4, 3, 2];
numSort.sort();
numSort.reverse();
console.log(numSort);

// Reference type Sort!
const arrayOfObject = [
  { id: 2, name: "React.js" },
  { id: 1, name: "JavaScript" },
];

arrayOfObject.sort((a, b) => {
  // a < b => -1
  // a > b => 1
  // a === b => 0

  const nameA = a.name.toUpperCase();
  const nameB = b.name.toUpperCase();

  if (nameA < nameB) return -1;
  if (nameA > nameB) return 1;
  return 0;
});

console.log(arrayOfObject);

// ------------- Testing the Elements of an Array

// every() ==> check every element in given array matches the given crteria!
// some() ==> check if we have at least one element that matches the given crteria!

// ------------------------------------------------------------------------

// const arrayPostive = [1, 2, 3, 4, 5, 20];

// const allPositive = arrayPostive.every((value) => {
//   return value >= 0;
// });

// console.log(allPositive);

const num = [-8, -5, 4, 5, 20];

const atLeastOnePositive = num.some((value) => {
  return value >= 0;
});

console.log(atLeastOnePositive);

// ------------- Filtering an Array ==> new Array not modify orriginal Array!

const posNumbers = [2, 5, -5, -4, -5];

// Loop through array! ==> new array!
const filtered = posNumbers.filter((n) => n >= 0);

console.log(filtered);

// ------------- Mapping an Array ==> new Array not modify orriginal Array!

const items = filtered.map((n) => `<li>${n}</li>`);
const html = `<ul>${items.join("")}</ul>`;
console.log(html);

const objItems = filtered.map((n) => ({ value: n }));
console.log(objItems);

// ------------- Chaining Filter && Map!!

const posNumbersChain = [10, 2, 3, 8, -5];

const itemsChain = posNumbersChain
  .filter((n) => n >= 0)
  .map((n) => ({ value: n }))
  .filter((obj) => obj.value > 3)
  .map((obj) => obj.value);

console.log(itemsChain);

// ------------- Reducing an Array!!

const numbersReduce = [1, 2, 3, 8, -2];

// numbersReduce.map((n) => (sum += n));

// Explanation!
// a = 0, c = 1 ==> a = 1
// a = 1, c = 2 ==> a = 3
// a = 3, c = 3 ==> a = 6
// a = 6, c = 8 ==> a = 14
// a = 14, c = -2 ==> a = 12

const sum = numbersReduce.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(sum);

// ------------- Array from Range!!

const arrayFromRange = (min, max) => {
  const range = [];

  for (let i = min; i <= max; i++) range.push(i);
  return range;
};

// const fromRange = arrayFromRange(-10,-4);
const fromRange = arrayFromRange(1, 4);
console.log(fromRange);

// ----------------- Includes!
// Implement Include method!

const include = (arrayNumbers, searchElement) => {
  for (const num of arrayNumbers) if (num === searchElement) return true;
  return false;
};

console.log(include(fromRange, 3));

// ----------------- Except
// Implement except method!

const except = (fromRange, excludeRange) => {
  const result = [];
  fromRange.forEach((num) => {
    if (!excludeRange.includes(num)) result.push(num);
  });
  return result;
};

console.log(except(fromRange, [1, 2]));

// ------------  Moving an Element (Implimentation of Array.prototype.move)

const move = (array, fromIndex, toIndex) => {
  const pos = fromIndex + toIndex;
  if (pos >= array.length || pos < 0) {
    throw new Error("Invalid index");
  }

  const newArray = [...array];
  const element = newArray.splice(fromIndex, 1)[0];
  newArray.splice(pos, 0, element);
  return newArray;
};

// console.log(move([1, 2, 3, 4], 1, -2));

// ------------  Get Max (Implimentation of Array.prototype.max)

const getMax = (array) => {
  let max = array[0]; // We assume the first element is the max
  if (array.length === 0 || array[0] < 0) return undefined;

  for (const num of array) {
    if (num > max) max = num; // set max to the current number
  }
  return max;
};

console.log(getMax([1, 2, 3, 4]));

// implimentation using reduce function in array
// explanation:
// [1, 2, 3, 4]

// a = 0, c = 1 ==> a = 1
// a = 1, c = 2 ==> a = 3
// a = 3, c = 3 ==> a = 6
// a = 6, c = 4 ==> a = 10

// Best way to implement max in array!!
const getMaxReduce = (array) => {
  if (array[0] < 0) return undefined;
  return array.reduce((acc, cur) => {
    // return acc > cur ? acc : cur; // another way to do it!!
    return acc > cur ? acc : cur; // set accumulator to the current number
  }, undefined);
};

console.log(getMaxReduce([1, 2, 3, 4]));

// ------------  Movies Array of Objects!!
const movies = [
  { title: "a", year: 2018, rating: 4.5 },
  { title: "b", year: 2018, rating: 4.7 },
  { title: "c", year: 2018, rating: 3 },
  { title: "d", year: 2017, rating: 4.5 },
];

// get all movies from 2018 with rating higher than 4
// Sort them by the rating in descending order
// Pick the title property of each movie object

// the result should be: ["Avebgers; Endgame", "Avengers"]

const getAllMovies = (movies) => {
  const result = movies
    .filter((movie) => movie.year === 2018 && movie.rating > 4)
    // explanation:
    // sort method
    // if a < b => -1
    // if a === b => 0
    // if a > b => 1
    .sort((a, b) => b.rating - a.rating)
    .map((movie) => movie.title);
  return result;
};

console.log(getAllMovies(movies));

//  Function Declarations vs. Expressions

// function declaration
function greet() {
  console.log("hi greet");
}

// Anonymous function expression
const anonyGreet = function () {
  console.log("hi anonyGreet");
};

anonyGreet();
// referencing same anonymous function, both in the same object in memory!
const anonyGreet2 = anonyGreet;
anonyGreet2();

// ----------------- Hoisting

// function hoisting
// Move function declaration to the top of the file and that happens automatically by the javascript engine!!

// The keys defference between function declarations and function expressions is that function declarations are hoisted to the top of their scope becase JavaScript engine it move all functions to the top, while function expressions are not hoisted.

// function declaration

greetHoisting();
function greetHoisting() {
  console.log("hi greet");
}

// Anonymous function expression

// In this case, the function expression is not hoisted, so it will throw an error.
// anonyGreetHoisting(); // error
const anonyGreetHoisting = function () {
  console.log("hi anonyGreet");
};

anonyGreetHoisting();
const anonyGreet2Hoisting = anonyGreetHoisting;
anonyGreet2Hoisting();

// ----------------- Arguments
// JavaScript are dynamic languages, so we can pass any number of arguments to a function.

let x = 1;
x = "another Value";
console.log(x);

// we can remove the a and b argument, and it will work!!
// because we don't use the arguments.
function add(a, b) {
  // it's an object, this object has an iterator, so we can use the length property to get the number of arguments.

  // console.log(arguments.length);
  arguments;
  let totalSum = 0;
  // console.log(arguments.length);
  for (const num of arguments) {
    totalSum += num;
  }
  return totalSum;

  // console.log(b);

  // // this is not a valid operation
  // return a + b; // 1 + undefined = NaN
}

// console.log(add(1)); // NaN
console.log(add(1, 2, 3, 4, 6)); //

// ----------------- The Rest Operator
// if you have a function that takes a variable number of arguments, you can use the rest operator to represent all the remaining arguments as an array.

function addRest(a, b, ...rest) {
  console.log(rest);

  // let totalSum = 0;
  // for (const num of rest) {
  //   totalSum += num;
  // }
  // return totalSum;

  // better way to do it, using reduce function, one line of code!!
  return rest.reduce((acc, cur) => acc + cur);
}

console.log(addRest(1, 2, 3, 4, 5, 6, 7, 8)); //

// Dicount function with the rest operator
function addRestDiscount(discount, ...prices) {
  const totalSum = prices.reduce((acc, cur) => acc + cur);
  let discountSum = 0;

  discount === 0.1
    ? (discountSum = totalSum * (1 - discount))
    : (discountSum = totalSum);

  return discountSum;
}

// 10% pr discount => 0.1 * 10 = 1
console.log(addRestDiscount(0.1, 20, 30)); //
console.log(addRestDiscount(0.2, 20, 30)); //

// -----------------  Default Parameters (Implimentation of ES6)

function totalInterest(principal, rate = 3.5, years) {
  // default parameters for rate and years
  // rate = rate || 3.5;
  // years = years || 5;

  return ((principal * rate) / 100) * years;
}

// default parameters for rate and years
console.log(totalInterest(10000));

// Not set default value for years we get NaN
// We pass 5, for the years, but we don't pass the rate, so it will use the default value of 3.5 => the result is NaN
// the is confusing, because JavaScript don't know the value 5 we passed is years or rate, so it will use the default value of rate 3.5 and throw an error of NaN
console.log(totalInterest(10000, 5)); //
console.log(totalInterest(10000)); //

// trick to fix it:
// we can pass rate as undefined, and it will use the default value of 3.5 and year will be set to 5.
console.log(totalInterest(10000, undefined, 5)); //

console.log(totalInterest(10000, 3.5, 5)); //

// best practice to use default parameters
// make sure that parameters are the last parameters in the list of parameters

// -----------------  Getters and Setters

// Getters and Setters are used to control access to an object's properties.
// Getters are used to get the value of an object's property.
// Setters are used to set the value of an object's property.
// Setters change or mutate the value of a property.

const person = {
  firstName: "SAAD",
  lastName: "AZGHOUR",
  fullName() {
    // console.log(`${person.firstName} ${person.lastName}`);
    return `${this.firstName} ${this.lastName}`;
  },
  get fullNameGet() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullNameSet(newValue) {
    const parts = newValue.split(" ");
    // console.log(parts);
    this.firstName = parts[0];
    this.lastName = parts[1];
  },
};

console.log(person.firstName);
console.log(person.lastName);

// the problem with this approch is that maybe there are multiple places in our application where we want to display fullName, so we need to repeat this template literal in multiple places.
console.log(`${person.firstName} ${person.lastName}`);

// the better approach is to define a method called fullName, and it will return the full name of the person.
// bay the way, we have a probleme again here, this is read only, so we can't change the value of the (person.fullName) to a new value.
// like this: person.fullName = "new value";

// to fix it, we can use getters and setters.
console.log(person.fullName());

// using getters and setters
console.log(person.fullNameGet);
person.fullNameSet = "Set newValue";

console.log(person.fullNameGet);
console.log(person);

// -----------------  Error Handling
// Error handling is the process of handling errors in a program.
// It is done by using try and catch statements.
// try: try to do something, if it fails, it will throw an error.
// catch: if the error happens, it will catch it and do something with it.

const personHandling = {
  firstName: "SAAD",
  lastName: "AZGHOUR",
  fullNameHandling() {
    // console.log(`${person.firstName} ${person.lastName}`);
    return `${this.firstName} ${this.lastName}`;
  },
  get fullNameGet() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullNameSet(newValue) {
    // console.log(typeof newValue);
    if (typeof newValue !== "string") {
      throw new Error("The value must be a string");
    }

    const parts = newValue.split(" ");
    // console.log(parts);

    if (parts.length < 2 || parts.length === 0) {
      throw new Error("You must enter a first and last name.");
    }

    this.firstName = parts[0];
    this.lastName = parts[1];
  },
};

console.log(personHandling.fullNameHandling());

try {
  personHandling.fullNameSet = "";
} catch (error) {
  console.log(error);
}

console.log(personHandling.fullNameGet);
console.log(personHandling);

// ----------------- Local Scope vs. Global Scope
// Local scope is the scope that is created by a function.
// Global scope is the scope that is created by the global object.
// Global scope is the scope that is created by the window object.
// Global scope is the scope that is created by the browser.

const start = (params) => {
  for (let i = 0; i <= 5; i++) {
    console.log(i);
  }

  // color variable is a global scope variable, we can acess it anywhere in the code.
  console.log(color);

  // i variable is not defined in global scop, so it will throw an error, it's defined only in local scope.
  console.log(i);

  if (true) {
    // another variable will be defined only in local scope.
    const anoter = "hello";
    console.log(anoter);

    // here the color variable is defined in local scope of if statement, so it will execute the blue color first, because it's in the local scope.
    const color = "blue";
    console.log(color);
  }

  // this will throw an error, because the variable anoter is not defined in the global scope.
  console.log(anoter);

  // color variable is a global scope variable, we can acess it anywhere in the code.
  console.log(color);

  // this will throw an error, because message is not defined in local scope of the function.
  console.log(message);
};

// the scop of the variable color is the global scope.
const color = "red";
console.log(color);

// start();
// console.log(message); // undefined

// -----------------  Let vs Var
// let is used to declare a variable that is block scoped.
// var is used to declare a variable that is function scoped.

// var ==> function scoped variables.
// ES6 (ES2015): let, const ==> block scoped variables.

const started = (params) => {
  // if we use let, it will throw an error, because i is not defined in the global scope.
  // but if we use var, it will print the value of i, because it is defined in the function scope.
  for (var i = 0; i <= 5; i++) {
    console.log(i);
    if (true) {
      var colored = "yellow";
    }
  }
  // becaue the variable colored is defined in the function scope, it will print the value of colored it will be accessible only in the whole function scope .
  console.log(colored);
  console.log(i);
};

started();

// when we use var outside of the function, this create a global variable, and attached that variable to the window object in the browser.
// we should avoid using var, because it is not a good practice.

// if third party librarys also have the same variable orangeColore i have,it will overide my variable, we should avoid adding variable to the window object.
// also that will create more bugs in our programs.
var orangeColor = "orange";
console.log(orangeColor);

// When we use let keyword, it will create a local variable, and it will not be attached to the window object in the browser.
let age = 30;
console.log(age);

// this function also added to the window object in the browser.
// and that's bad practice.
// to fix it, we can use modules, and not added to the window object.
// we can use modules to create a separate file, and import that file to our application.
// modules are files that we can use to create our own functions, variables, and objects.
const sayHi = (second) => {
  console.log("Hi");
};

// -----------------  The This Keyword
// this keyword is referenced to the object, that is executing the current function.

// The this keyword is used to access the current object.
// this is a global object.
// this is a window object.
// this is a browser object.
// this is a function object.
// this is a constructor object.
// this is a object object.
// this is a array object.

// if a function a part of an object, we call that function a method.
// method => function that is part of an object => object
// if a function is a rugular function, references to a global object, window object, browser object. (window object is the global object in the browser, global in node)

const video = {
  title: "a title",
  tags: ["tag1", "tag2", "tag3"],
  // showTags is a method, it is a function that is part of the video object.
  showTags() {
    this.tags.forEach((tag) => {
      console.log(this.title, tag);
    }, this); // but not all the methods, giv you the ability to pass the this keyword here.
  },
  play() {
    // this is referencing to the video object.
    console.log(this);
  },
};

// stop is a method of the video object.
video.stop = function () {
  console.log(this);
};

video.showTags();
video.stop();
video.play();

// a rugular function is a function that is not a method of an object.
// is a method of a global object, window object, browser object.
// it is not a method of an object, it is a regular function.
const playVideo = (params) => {
  // we get window object, because this is a regular function.
  console.log(this);
};

playVideo();

// a constructor function is a function that is used to create an object.
function Video(title) {
  // the this keyword is referencing to the object that is created by the constructor function. => {}
  this.title = title;

  // instead we get the window object.
  console.log(this);
}

Video();

// when we use the new operator, this new operator will create a new empty object.
// like this: {}

const v = new Video("title constructor");
console.log(v); // { title: 'title constructor' }

// -----------------  Changing the This Keyword
// when we use the call() or apply() methods, this keyword will refer to the object that is passed as the first argument.
// when we use the bind() method, this keyword will refer to the object that is passed as the first argument.
// a few defference solutions to change the this keyword.

const videoChangeThis = {
  titleThis: "a title",
  tagsThis: ["tag1", "tag2", "tag3"],
  // showTags is a method, it is a function that is part of the video object.
  showTags() {
    // self is a reference to the video object.
    const self = this;
    this.tagsThis.forEach(function (tag) {
      // the This keyword is referencing to the global object, window object.
      // console.log(this.titleThis, tag);

      // fix the problem by using the self variable.
      // it is not a prefernce approach, but don't use it.
      console.log(self.titleThis, tag);
    });
  },
  showTagsThis() {
    // using another approach to change the this keyword. intead of using the self variable.
    this.tagsThis.forEach(
      function (tag) {
        console.log(this.titleThis, tag);
      }.bind(this) // this is referencing to the video object.
    );
  },
  showTagsThisBetter() {
    // using another approach to change the this keyword. with ES6 arrow functions.
    // the modern approach to change this keyword with arrow functions.
    this.tagsThis.forEach((tag) => {
      console.log(this.titleThis, tag);
    });
  },
};

videoChangeThis.showTags();
videoChangeThis.showTagsThis();
videoChangeThis.showTagsThisBetter();

// another approach to change the this keyword.
// function are Objects in javascript, so we can use the bind() method to change the this keyword && call() && apply() methods.
function showTagsAnother(a, b) {
  // this, is referencing to the call method, object.
  console.log(this, a, b);
}

// window object
// showTagsAnother();

// the defference between call() and apply() methods is that call() method takes the arguments, and apply() method takes the arguments as an array.
// what we'll passed as the first argument is the object that we'll be the value of this keyword. in line above ==> 750.
showTagsAnother.call({ name: "AZGHOUR" }, 1, 2); // { name: 'AZGHOUR' } 1 2

// apply() method passes the arguments as an array.
showTagsAnother.apply({ name: "SAAD" }, [1, 2]); // { name: 'SAAD' } 1 2

// const fn = showTagsAnother.bind({ name: "return new function" }, 1, 2);
// fn();

// another approach to call the function.
showTagsAnother.bind({ name: "return new function" }, 1, 2)(); // { name: 'return new function' } 1 2

// -----------------   Exercise 1- Sum of Arguments
// sum(1,2,3,4) function should return the sum of all arguments passed to it.

const sumAll = (...items) => {
  // the rest operator, converts the arguments into an array.
  // console.log(items);
  if (items.length === 1 && Array.isArray(items[0])) items = items[0];

  return items.reduce((acc, curr) => acc + curr);
};

const sumAllArray = (array) => {
  if (Array.isArray(array)) {
    return array.reduce((acc, curr) => acc + curr);
  } else {
    return "must be an array";
  }
};

// console.log(sumAll(1, 2, 3, 4));

// if we passed array as an argument, it will return the sum of all the elements in the array.
console.log(sumAll([1, 2, 3, 4]));
console.log(sumAllArray([1, 2, 3, 4]));

// -----------------    Exercise 2- Area of Circle

const circle = {
  radius: 1,
  // area is a method, able to read it only from the circle object.
  // not able to set the area property.
  // i mean not able to change the value of area property.
  get area() {
    // return 10;
    return Math.PI * this.radius * this.radius;
  },
};

circle.radius = 2;
console.log(circle.radius);
console.log(circle.area);

// -----------------    - Exercise 3- Error Handling

const numbersOfArrays = [1, 2, 3, 4];

const countOccurrences = (array, searchElement) => {
  if (!Array.isArray(array)) {
    throw new Error("Opppps must be an Array!");
  }
  return array.reduce((acc, curr) => {
    return curr === searchElement ? 1 : 0;
  });
};

try {
  console.log(countOccurrences(numbersOfArrays, 1));
  // Opppps must be an Array!
  countOccurrences(null, 1);
  countOccurrences(true, 1);
} catch (error) {
  console.log(error);
}
