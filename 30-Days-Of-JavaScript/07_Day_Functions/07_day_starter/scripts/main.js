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

// Declare a function newFullName and now it takes firstName, lastName as a parameter and it returns your full - name.

function newFullName(firstName, lastName) {
  return `Your full name ${firstName} - ${lastName}`;
}

console.log(newFullName("Saad", "Azghour")); // Your full name Saad - Azghour

// Declare a function addNumbers and it takes two parameters and it returns sum.

function addNumbers(numberOne, numberTwo) {
  const sum = `${numberOne + numberTwo}`;
  return sum;
}

console.log(addNumbers(4, 4)); // 8

// An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.

function areaRectangle(length, width = 10) {
  const resultArea = length * width;
  return resultArea;
}

console.log(areaRectangle(15));

// A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.

function perimeterRectangle(length, width = 10) {
  const resultPerimeter = 2 * (length + width);
  return resultPerimeter;
}

console.log(perimeterRectangle(100));

// A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.

function volumeOfRectPrism(length, width = 10, height) {
  const volumeResult = length * width * height;
  return volumeResult;
}

// TODO:
// Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle

console.log(volumeOfRectPrism(10, 60, 30)); // 18000
console.log(volumeOfRectPrism(10, undefined, 30)); // 3000

// Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle

function areaOfCircleResult(n) {
  const areaResult = n ** 3;
  return areaResult;
}

console.log(areaOfCircleResult(6)); // 216

// Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle

function circumOfCircle() {
  const radius = 5;
  const result = 2 * Math.PI * radius;

  return result;
}

console.log(circumOfCircle()); // 31.41592653589793

// Density of a substance is calculated as follows: density= mass/volume. Write a function which calculates density.

function densityOfSubstance(mass, volume) {
  const densityResult = mass / volume;
  return densityResult;
}

console.log(densityOfSubstance(60, 10)); //  6

// Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.

function calculateSpeed(totalDistance, totalAmount) {
  // totalDistance, In meters
  // totalAmount, In seconds
  const speedResult = totalDistance / totalAmount;
  return speedResult;
}

console.log(calculateSpeed(100, 10)); // 10 meters per second.

// Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.

function weightOfSubstance(mass = 5, gravity = 9.81) {
  const weightResult = mass * gravity;
  return weightResult;
}

console.log(weightOfSubstance()); // with default param,  it will be 49.050000000000004
console.log(weightOfSubstance(10)); // 98.10000000000001

// Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.

function convertCelsiusToFahrenheit(oC) {
  const oFResult = (oC * 9) / 5 + 32;
  return oFResult;
}

console.log(convertCelsiusToFahrenheit(12)); // 53.6

// Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.

function bodyMassIndex(weight, height) {
  // weight = 70; // kg
  // height = 1.7; // meters

  const bmiResult = weight / height ** 2;
  console.log(bmiResult);

  if (bmiResult < 18.5) {
    return "Underweight";
  } else if (bmiResult >= 18.5 && bmiResult <= 24.9) {
    return "Normal Weight";
  } else if (bmiResult > 25 && bmiResult <= 29.9) {
    return "Overweight";
  } else {
    return "Obese";
  }

  return bmiResult;
}

console.log(bodyMassIndex(77, 1.76)); // Normal Weight

// Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.

function checkSeason(month) {
  if (month === "December" || month === "January" || month === "February") {
    return "Winter";
  } else if (month === "March" || month === "April" || month === "May") {
    return "Spring";
  } else if (month === "June" || month === "July" || month === "August") {
    return "Summer";
  } else {
    return "Autumn";
  }
}

console.log(checkSeason("April"));

// Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.

function findMax(first, second, third) {
  let maxResult = first;

  if (second > maxResult) {
    maxResult = second;
  }

  if (third > maxResult) {
    maxResult = third;
  }

  return maxResult;
}

console.log(findMax(1, 2, 6));

// Using another method to find max
function findMaxNew(first, second, third) {
  const arr = [first, second, third];
  let maxResult = arr[0];

  for (let idx = 0; idx < arr.length; idx++) {
    const num = arr[idx];
    if (num > maxResult) {
      maxResult = num;
    }
  }

  return maxResult;
}

console.log(findMaxNew(1, 50, 20)); // 50
console.log(findMaxNew(0, -10, -2)); // 0
