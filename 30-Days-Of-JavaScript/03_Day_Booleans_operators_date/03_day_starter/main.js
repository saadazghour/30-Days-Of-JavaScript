// @ts-nocheck
// 1 -- Booleans

// A boolean data type represents one of the two values:true or false. Boolean value is either true or false. The use of these data types will be clear when you start the comparison operator. Any comparisons return a boolean value which is either true or false.
// Example: Boolean Values

const isLighOn = true;
const isRaining = false;
const isHungry = false;
const isMarried = 4 > 3; // true
const falseValue = 4 < 3; // false

// We agreed that boolean values are either true or false.

// Truthy values:
// -- All numbers(positive and negative) are truthy except zero
// -- All strings are truthy except an empty string ('')
// -- The boolean true

// Falsy values:
// -- 0
// -- 0n
// -- null
// -- undefined
// -- NaN
// -- the boolean false
// -- '', "", ``, empty string

// It is good to remember those truthy values and falsy values. In later section, we will use them with conditions to make decisions.

// 2 -- Undefined

// If we declare a variable and if we do not assign a value, the value will be undefined. In addition to this, if a function is not returning the value, it will be undefined.

// @ts-ignore
let firstName;
console.log(firstName); // the value is undefined, not defined, because it is not assigned to a value yet!!

// 3 -- Null

let empty = null;
console.log(empty); // null , means no value

// 4 -- Operators

// 4-1 Assignment operators:
// An equal sign in JavaScript is an assignment operator. It uses to assign a variable.

const LastName = "Azghour";

// @ts-ignore
const country = "Anywhere";

//  =     --->   x = y
// +=     --->   x = x + y
// -=     --->   x = x - y
// *=     --->   x = x * y
// /=     --->   x = x / y
// %=     --->   x = x % y
// **=    --->  x = x ** y

// 4-2 Arithmetic Operators:

// Arithmetic operators are mathematical operators.

// Addition(+): a + b
// Subtraction(-): a - b
// Multiplication(*): a * b
// Division(/): a / b
// Modulus(%): a % b
// Exponential(**): a ** b

const numFirst = 4;
const numSecond = 3;

const sum = numFirst + numSecond;
const diff = numFirst - numSecond;
const mult = numFirst * numSecond;
const div = numFirst / numSecond;
const remainder = numFirst % numSecond;
const powerOf = numFirst ** numSecond;

console.log(sum, diff, mult, div, remainder, powerOf); // 7,1,12,1.33,1, 64

const PI = 3.14;
const radius = 100; // length in meter

//Let us calculate area of a circle
const areaOfCircle = PI * radius * radius;
console.log(areaOfCircle); // 31400 m

const gravity = 9.81; // in m/s2
const mass = 72; // in Kilogram

// Let us calculate weight of an object
const weight = mass * gravity;
console.log(weight); // 706.32 N(Newton)

const boilingPoint = 100; // temperature in oC, boiling point of water
const bodyTemp = 37; // body temperature in oC

// Concatenating string with numbers using string interpolation
/*
 The boiling point of water is 100 oC.
 Human body temperature is 37 oC.
 The gravity of earth is 9.81 m/s2.
*/

console.log(
  `The boiling point of water is ${boilingPoint} oC.\nHuman body temperature is ${bodyTemp} oC.\nThe gravity of earth is ${gravity} m / s2.`
);

// 4-3 Comparison Operators:
// In programming we compare values, we use comparison operators to compare two values. We check if a value is greater or less or equal to other value.

// Example: Comparison Operators:
console.log(3 > 2); // true, because 3 is greater than 2
console.log(3 >= 2); // true, because 3 is greater than 2
console.log(3 < 2); // false,  because 3 is greater than 2
console.log(2 < 3); // true, because 2 is less than 3
console.log(2 <= 3); // true, because 2 is less than 3
console.log(3 == 2); // false, because 3 is not equal to 2
console.log(3 != 2); // true, because 3 is not equal to 2
console.log(3 == "3"); // true, compare only value
console.log(3 === "3"); // false, compare both value and data type
console.log(3 !== "3"); // true, compare both value and data type
console.log(3 != 3); // false, compare only value
console.log(3 !== 3); // false, compare both value and data type
console.log(0 == false); // true, equivalent
console.log(0 === false); // false, not exactly the same

console.log(0 == ""); // true, equivalent
console.log(0 == " "); // true, equivalent
console.log(0 === ""); // false, not exactly the same

console.log(1 == true); // true, equivalent
console.log(1 === true); // false, not exactly the same
console.log(undefined == null); // true
console.log(undefined === null); // false
console.log(NaN == NaN); // false, not equal
console.log(NaN === NaN); // false
console.log(typeof NaN); // number

console.log("mango".length == "avocado".length); // false
console.log("mango".length != "avocado".length); // true
console.log("mango".length < "avocado".length); // true
console.log("milk".length == "meat".length); // true
console.log("milk".length != "meat".length); // false
console.log("tomato".length == "potato".length); // true
console.log("python".length > "dragon".length); // false

// Try to understand the above comparisons with some logic. Remembering without any logic might be difficult. JavaScript is somehow a wired kind of programming language. JavaScript code run and give you a result but unless you are good at it may not be the desired result.

// As rule of thumb, if a value is not true with == it will not be equal with ===. Using === is safer than using ==. The following link : https://dorey.github.io/JavaScript-Equality-Table/
// has an exhaustive list of comparison of data types.

// 4-4 Logical Operators:

// The following symbols are the common logical operators: &&(ampersand) , ||(pipe) and !(negation). The && operator gets true only if the two operands are true. The || operator gets true either of the operand is true. The ! operator negates true to false and false to true.

// && ampersand operator example
const check1 = 4 > 3 && 10 > 5; // true && true -> true
const check2 = 4 > 3 && 10 < 5; // true && false -> false
const check3 = 4 < 3 && 10 < 5; // false && false -> false

// || pipe or operator, example
const check4 = 4 > 3 || 10 > 5; // true  || true -> true
const check5 = 4 > 3 || 10 < 5; // true  || false -> true
const check6 = 4 < 3 || 10 < 5; // false || false -> false

//! Negation examples
const check7 = 4 > 3; // true
const check8 = !(4 > 3); //  false
const isLightOnIn = true;
const isLightOff = !isLightOnIn; // false
const isMarriedFirst = !false; // true

// 4-5 Increment Operator:
// In JavaScript we use the increment operator to increase a value stored in a variable. The increment could be pre or post increment. Let us see each of them:

// --Pre - increment:
let countPre = 0;

console.log(++countPre); // 1
console.log(countPre); // 1

// --Post-increment:
let countPost = 0;

console.log(countPost++); // 0
console.log(countPost); // 1

// We use most of the time post-increment. At least you should remember how to use post-increment operator!!

// 4-6 Decrement Operator:
// In JavaScript we use the decrement operator to decrease a value stored in a variable. The decrement could be pre or post decrement. Let us see each of them:

// --Pre - decrement:

let countPreDecre = 0;

console.log(--countPreDecre); // -1
console.log(countPreDecre); // -1

// -- Post-decrement:
let countPostDecre = 0;

console.log(countPostDecre--); // 0
console.log(countPostDecre); // -1

// 4-6 Ternary Operators:
// Ternary operator allows to write a condition. Another way to write conditionals is using ternary operators. Look at the following examples:

let isRainingOn = true;

isRainingOn
  ? console.log("You need a rain coat.") // You need a rain coat.
  : console.log("No need for a rain coat.");

isRainingOn = false;

isRainingOn
  ? console.log("You need a rain coat.")
  : console.log("No need for a rain coat."); // No need for a rain coat.

let number = 5;

number > 0
  ? console.log(`${number} is a positive number`) // 5 is a positive number
  : console.log(`${number} is a negative number`);

number = -5;

number > 0
  ? console.log(`${number} is a positive number`)
  : console.log(`${number} is a negative number`); // -5 is a negative number

// 4-7 Operator Precedence:
// I would like to recommend you to read about operator precedence from this link:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

// 5 -- Window Methods
// 1-1 Window alert() method!!

// As you have seen at very beginning alert() method displays an alert box with a specified message and an OK button. It is a builtin method and it takes on argument.
const msg = "This is alert method!!";
alert(msg);

alert("Welcome to 30DaysOfJavaScript");
// Do not use too much alert because it is destructing and annoying, use it just to test.

// 1-2 Window prompt() method

// The window prompt methods display a prompt box with an input on your browser to take input values and the input data can be stored in a variable. The prompt() method takes two arguments. The second argument is optional.

prompt("required text", "optional text");

const numberPrompt = prompt("Enter number", "number goes here");
console.log(numberPrompt);

// 1-3 Window confirm() method

// The confirm() method displays a dialog box with a specified message, along with an OK and a Cancel button. A confirm box is often used to ask permission from a user to execute something. Window confirm() takes a string as an argument. Clicking the OK yields true value, whereas clicking the Cancel button yields false value.

const agree = confirm("Are you sure you like to delete? ");
console.log(agree); // result will be true or false based on what you click on the dialog box!!

// These are not all the window methods we will have a separate section to go deeper into window methods!!

// 6 -- Date Object!!
