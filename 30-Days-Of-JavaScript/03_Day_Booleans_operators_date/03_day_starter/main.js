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

// Time is an important thing. We like to know the time a certain activity or event. In JavaScript current time and date is created using JavaScript Date Object. The object we create using Date object provides many methods to work with date and time.The methods we use to get date and time information from a date object values are started with a word get because it provide the information.

// getFullYear(),              // Get the year as a four digit number (yyyy) 2022
// getMonth(),                 // Get the month as a number (0 - 11) 0
// getDate(),                 // Get the day as a number (1 - 31) 6
// getHours(),                // Get the hour (0 - 23) 0
// getMinutes(),              // Get the minute as a number (0 - 59) 56
// getSeconds(),             // Get the second (0 - 59)
// getMilliseconds(),        // Get the millisecond (0 - 999) 341
// getTime(),                // Get the time ( milliseconds since January 1, 1970 )  // 1578092201341
// getDay()                  // Get the weekday as a number (0 - 6)  6

// 6 - 1 ------ Creating a time object
// Once we create time object. The time object will provide information about time. Let us create a time object

const now = new Date();
console.log(now);

// We have created a time object and we can access any date time information from the object using the get methods we have mentioned on the table.

// 6 - 2 -------- Getting full year

const year = new Date();
console.log(year.getFullYear()); // 2022

// 6 - 2 ------ Getting month

const month = new Date();
console.log(month.getMonth()); // (0 - 11) // 11

// 6 - 3 ------ Getting date

const date = new Date();
console.log(date.getDate()); // 5, because the day of the month is 5th,  day(1-31)

// 6 - 4 ------ Getting day

const day = new Date();
console.log(day.getDay()); // 1, because the day is Monday which is the 1th day!

// Get the weekday as a number (0 - 6)  6
// 6 - 5 ------ Getting hours
const hour = new Date();
console.log(hour.getHours()); // 11, because the time is 11:20:00

// 6 - 6 ------ Getting minutes
const minute = new Date();
console.log(minute.getMinutes()); // 22, because the time is 00:22:41

// 6 - 7 ------ Getting seconds
const second = new Date();
console.log(second.getSeconds()); // 30, because the time is 00:22:30

// 6 - 7 ------ Getting time
const time = new Date().getTime();

// 1670236170488, this is the number of seconds passed from January 1, 1970 to January 4, 2022  00:56:41
console.log(time);

// --- Using Date.now()
const allSecond = Date.now();

// 1670236170488, this is the number of seconds passed from January 1, 1970 to January 4, 2022  00:56:41
console.log(allSecond);

// Comparison of those two methods, getTime() && now()
console.log(time === allSecond);

// Let us format these values to a human readable time format. Example:
const nowDate = new Date();
console.log(nowDate);

const yearFormat = nowDate.getFullYear(); // return year
console.log(yearFormat);

const monthFormat = nowDate.getMonth() + 1; // return month(0 - 11)
console.log(monthFormat);

const dateFormat = nowDate.getDate(); // return date (1 - 31)
console.log(dateFormat);

const hoursFormat = nowDate.getHours(); // return number (0 - 23)
console.log(hoursFormat);

const minutesFormat = nowDate.getMinutes(); // return number (0 -59)
console.log(minutesFormat); // 55

console.log(
  // 5/12/2022 11:56
  `${dateFormat}/${monthFormat}/${yearFormat} ${hoursFormat}:${minutesFormat}`
);

// Exercises!!
// Exercises: Level 1

// 1 - Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.

const _firstName = "Saad";
const _lastName = "Azghour";
const _country = "EveryWhere!!";
const _city = "AnyWhere!!";
const _age = "28";
const _isMarried = false;
const _year = "2022";

console.log(typeof _firstName);
console.log(typeof _lastName);
console.log(typeof _country);
console.log(typeof _city);
console.log(typeof _age);
console.log(typeof _isMarried);
console.log(typeof _year);

// 2 - Check if type of '10' is equal to 10
console.log(typeof 10 == typeof "10"); // false

// 3 - Check if parseInt('9.8') is equal to 10
console.log(typeof parseInt("9.8") == typeof 10); // true

// 4 - Boolean value is either true or false.
// Write three JavaScript statement which provide truthy value.

const isTruthy = true;

if (true) {
  console.log(true === isTruthy); // true
}

console.log(12 > 6); // true
console.log(2 * 2 > 2); // true

// Write three JavaScript statement which provide falsy value.

const isFalsy = false;

if (true) {
  console.log(true === isFalsy); // false
}

console.log(12 > 13); // false
console.log(2 * 2 > 6); // false

// 5 - Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()

console.log(4 > 3); // true
console.log(4 >= 3); // true
console.log(4 < 3); // false
console.log(4 == 4); // true
console.log(4 === 4); // true
console.log(4 != 4); // false
console.log(4 !== 4); // false
console.log(4 != "4"); // false
console.log(4 == "4"); // true
console.log(4 === "4"); // false

// Find the length of python and jargon and make a falsy comparison statement.

const python = "python";
const jargon = "jargon";

console.log(
  `Falsy comparison statement : ${String(python.length) === python.length}`
);

console.log(
  `Falsy comparison statement : ${String(jargon.length) === jargon.length}`
);

console.log(python.length !== jargon.length);

// 6 - Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()

console.log(4 > 3 && 10 < 12); // true
console.log(4 > 3 && 10 > 12); // false
console.log(4 > 3 || 10 < 12); // true

console.log(4 > 3 || 10 > 12); // true
console.log(!(4 > 3)); // false
console.log(!false); // true
console.log(!(4 > 3 && 10 < 12)); // false
console.log(!(4 === "4")); // true

// There is no 'on' in both dragon and python

const _python = "python";
const _dragon = "dragon";

console.log(_python.includes("on")); // true
console.log(_dragon.includes("on")); // true

// 7 - Use the Date object to do the following activities:
// What is the year today?

const yearToday = new Date();
console.log(yearToday.getFullYear()); // 2022

// What is the month today as a number?
const monthToday = new Date();

// Get the month as a number (0 - 11) 0
console.log(monthToday.getMonth()); // 11

// What is the date today?
const dateToday = new Date();
console.log(dateToday.getDate()); // 19

// What is the day today as a number?
const dayToday = new Date();
// 1, because the day is Monday which is the 1th day!
console.log(dayToday.getDay()); // 1 // Get the weekday as a number (0 - 6)  6

// What is the hours now?
const hourToday = new Date();
console.log(hourToday.getHours()); // 13

// What is the minutes now?
const minuteToday = new Date();
console.log(minuteToday.getMinutes()); // 6

// Find out the numbers of seconds elapsed from January 1, 1970 to now
// const secondElapsed = new Date("January 1, 1970");

const nowSecond = new Date();
console.log(Math.round(nowSecond.getTime() / 1000)); // 1671452225

// Exercises:
// Exercises: Level 2
