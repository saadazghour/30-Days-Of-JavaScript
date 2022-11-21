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
