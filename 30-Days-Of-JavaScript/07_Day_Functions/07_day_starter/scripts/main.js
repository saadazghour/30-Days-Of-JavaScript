// Function's

// So far we have seen many built-in JavaScript functions. In this section, we will focus on custom functions. What is a function? Before we start making functions, lets understand what function is and why we need function?

// A function is a reusable block of code or programming statements designed to perform a certain task. A function is declared by a function key word followed by a name, followed by parentheses (). A parentheses can take a parameter. If a function take a parameter it will be called with argument. A function can also take a default parameter. To store a data to a function, a function has to return certain data types. To get the value we call or invoke a function. Function makes code:

// 1 - clean and easy to read
// 2 - reusable
// 3 - easy to test

// A function can be declared or created in couple of ways:

// * Declaration function
// * Expression function
// * Anonymous function
// * Arrow function

// 1 * Function Declaration :
// Let us see how to declare a function and how to call a function.

function functionName(params) {
  // code goes here
  console.log(params);
}

// Calling function by its name and with parentheses
// functionName(argument);
functionName(6);

// 2 * Function without a parameter and return
// Function can be declared without a parameter.

function square() {
  let name = 2;
  let square = name ** 2;
  return square;
}

const resultSquare = square();
console.log(resultSquare); // 4

// function without parameter
function addTwoNumbers() {
  let firstNum = 20;
  let secondNum = 20;
  const sum = firstNum + secondNum;

  return sum;
}

// A function has to be called by its name to be executed.
console.log(addTwoNumbers()); // 40

function printFullName() {
  let firstName = "Saad";
  let lastName = "Azghour";

  const fullName = `${firstName} ${lastName}`;
  console.log(fullName);
}

console.log(printFullName()); // undefined

// Function returning value
// Function can also return values, if a function does not return values the value of the function is undefined. Let us write the above functions with return. From now on, we return value to a function instead of printing it.

function fullName() {
  let firstName = "Saad";
  let lastName = "Azghour";
  const fullName = `${firstName} ${lastName}`;

  return fullName;
}

console.log(fullName()); // Saad Azghour

// Function with a parameter
// In a function we can pass different data types(number, string, Boolean, object, function) as a parameter.

function functionParams(params) {
  // Your code goes he.
  return `${params}`;
}

console.log(functionParams("Saad Azghour")); // Saad Azghour

function areaOfCircle(r) {
  let area = Math.PI * r ** 2;
  return area;
}

// 314.1592653589793
console.log(areaOfCircle(10)); // should be called with one argument.

function squareResult(number) {
  return number ** 2;
}

console.log(squareResult(10)); // 100

// Function with two parameters
function functionTwoParams(params1, params2) {
  // Your code goes here.
  return `${params1} ${params2}`;
}

console.log(functionTwoParams(10, 20)); // 10 20

// Function without parameter doesn't take input, so lets make a function with parameters
// If a function doesn't return anything, will return undefined, it doesn't store data, so it should return!

function sumTwoNumbers(num1, num2) {
  console.log(`The sum is : ${num1 + num2}`); // The sum is : 16
  return num1 + num2;
}

console.log(sumTwoNumbers(8, 8)); // 16

function fullNamePrinted(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

console.log(fullNamePrinted("Saad", "Azghour")); // Saad Azghour

// Function with many parameters

function functionManyParams(params1, params2, params3) {
  // You code goes here.
  return `${params1} ${params2} ${params3}`;
}

console.log(functionManyParams("1", "Saad", true));

// this function takes array as a parameter and sum up the numbers in the array

function manyParamsArray(arr) {
  let sum = 0;
  for (let idx = 0; idx < arr.length; idx++) {
    const number = arr[idx];
    sum += number;
  }
  return sum;
}

console.log(manyParamsArray([1, 2, 3, 4, 5, 6])); // 21

const areaOfCircleRadius = (radius) => {
  const area = Math.PI * radius ** 2;
  return area;
};

console.log(areaOfCircleRadius(10));

// Function with unlimited number of parameters

// Sometimes we do not know how many arguments the user going to pass. Therefore, we should know how to write a function which can take unlimited number of arguments. The way we do it has a significant difference between a function declaration(regular function) and arrow function. Let us see examples both in function declaration and arrow function.

// 1 ** Unlimited number of parameters in regular function
// A function declaration provides a function scoped arguments array like object. Any thing we passed as argument in the function can be accessed from arguments object inside the functions. Let us see an example

// Let us access the arguments object
function sumAllNums() {
  // arguments object inside the functions.
  console.log(arguments);
  return arguments;
}

console.log(sumAllNums(1, 2, 3, 4)); // [Arguments] { '0': 1, '1': 2, '2': 3, '3': 4 }

// function declaration
function sumAllNumsDeclaration() {
  console.log(arguments);

  let sum = 0;
  for (let idx = 0; idx < arguments.length; idx++) {
    sum += arguments[idx];
  }

  return sum;
}

console.log(sumAllNumsDeclaration(1, 2, 3, 4)); // 10
console.log(sumAllNumsDeclaration(10, 20, 13, 40, 10)); // 93
console.log(sumAllNumsDeclaration(15, 20, 30, 25, 10, 33, 40)); // 173

// Unlimited number of parameters in arrow function

// Arrow function does not have the function scoped arguments object. To implement a function which takes unlimited number of arguments in an arrow function we use spread operator followed by any parameter name. Any thing we passed as argument in the function can be accessed as array in the arrow function. Let us see an example

// Arrow function
const sumAllNumArrow = (...args) => {
  // console.log(arguments), // arguments object not found in arrow function
  // instead we use a parameter followed by spread operator " ... "

  console.log(args);
  return args;
};

console.log(sumAllNumArrow(1, 2, 3, 4)); // [1, 2, 3, 4]

// function declaration

const sumAll = (...args) => {
  let sum = 0;
  for (const item of args) {
    // console.log(item);
    sum += item;
  }

  return sum;
};

console.log(sumAll(1, 2, 3, 4)); // 10
console.log(sumAll(10, 20, 13, 40, 10)); // 93
console.log(sumAll(15, 20, 30, 25, 10, 33, 40)); // 173

// Anonymous Function
// Anonymous function or without name

const anonymousFun = function () {
  console.log(
    `I am an anonymous function and my value is stored in anonymousFun`
  );

  return true;
};

console.log(anonymousFun());

// Expression Function
// Expression functions are anonymous functions. After we create a function without a name and we assign it to a variable. To return a value from the function we should call the variable. Look at the example below.

const squareFunc = (number) => {
  return number ** 2;
};

console.log(squareFunc(10)); // 100

// Self Invoking Functions
// Self invoking functions are anonymous functions which do not need to be called to return a value.
// But instead of just printing if we want to return and store the data, we do as shown below!

(function (number) {
  console.log(number ** 2);
})(2);

const selfInvoking = (function (number) {
  console.log(number ** 2);
  return number ** 2;
})(2);

console.log(selfInvoking);

// Arrow Function

// Arrow function is an alternative to write a function, however function declaration and arrow function have some minor differences.
// Arrow function uses arrow instead of the keyword function to declare a function. Let us see both function declaration and arrow function.

// This is how we write normal or declaration function
// Let us change this declaration function to an arrow function

function firstDeclaration(myName) {
  console.log(myName);
  return myName;
}

console.log(firstDeclaration("Saad Azghour")); // Saad Azghour

const firstArrow = (myName) => {
  console.log(myName);
  return myName;
};

console.log(firstArrow("Saad Azghour")); // Saad Azghour

// if we have only one line in the code block, it can be written as follows, explicit return
const arrowOneLine = (myName) => myName;

console.log(arrowOneLine("Saad Azghour"));

const changeToUpperCase = (countries) => {
  const result = [];
  for (const country of countries) {
    result.push(country.toUpperCase());
  }

  return result;
};

const countriesUpperCase = [
  "Finland",
  "Sweden",
  "Norway",
  "Denmark",
  "Iceland",
];

console.log(changeToUpperCase(countriesUpperCase));

// Function with default parameters

// Sometimes we pass default values to parameters, when we invoke the function if we do not pass an argument the default value will be used. Both function declaration and arrow function can have a default value or values.
function myNameFunc(defaultValue = "Saad Azghour") {
  // Your code goes here.
  return defaultValue;
}

console.log(myNameFunc());

function greeting(name = "Saad Azghour") {
  return `Hello, ${name}`;
}

console.log(greeting()); // Hello, Saad Azghour
console.log(greeting("Saad")); // Hello, Saad

function generateFullName(firstName = "Saad", lastName = "Azghour") {
  return `${firstName} ${lastName}`;
}

console.log(generateFullName()); // Saad Azghour
console.log(generateFullName("Mark", "Zekerberg")); // Mark Zekerberg

function calculateAge(birthYear, currentYear = "2023") {
  return `You age is : ${currentYear - birthYear}`;
}

console.log(calculateAge(1993)); // You age is : 30

// function declaration with default parameters!
function weightOfObject(mass, gravity = 9.81) {
  const weight = mass * gravity + " N"; // the value has to be changed to string first
  return weight;
}

// 9.81 gravity at the surface of Earth.
console.log("Weight of an object in Newton: ", weightOfObject(100));
// gravity at surface of Moon
console.log("Weight of an object in Newton: ", weightOfObject(100, 1.62));

// Let us see how we write the above functions with arrow functions
const weightOfObjectArroc = (mass, gravity = 9.81) => {
  const weight = mass * gravity + " N"; // the value has to be changed to string first
  return weight;
};

console.log(weightOfObjectArroc(100)); // 9.81 N
console.log(weightOfObjectArroc(100, 1.62)); // 162 N

const generateFullNameArrow = (firstName = "Saad", lastName = "Azghour") => {
  return `${firstName} ${lastName}`;
};

console.log(generateFullNameArrow());

const calculateAgeArrow = (birthYear, currentYear = "2023") =>
  `You age is : ${currentYear - birthYear}`;

console.log(calculateAgeArrow(1993)); //  You age is : 30

// Function declaration versus Arrow function
// It Will be covered in other section.

// Exercises
// Declare a function fullName and it print out your full name.

function fullNameNew(fullName) {
  return `${fullName}`;
}

console.log(fullNameNew("Saad Azghour")); // Saad Azghour

// Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
