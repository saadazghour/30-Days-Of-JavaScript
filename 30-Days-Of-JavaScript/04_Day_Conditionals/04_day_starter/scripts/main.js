// console.log("Open the browser console whenever you work on JavaScript");

// @ts-nocheck
// 1 -- Conditionals

// Conditional statements are used for make decisions based on different conditions. By default , statements in JavaScript script executed sequentially from top to bottom. If the processing logic require so, the sequential flow of execution can be altered in two ways:

// - Conditional execution: a block of one or more statements will be executed if a certain expression is true
// - Repetitive execution: a block of one or more statements will be repetitively executed as long as a certain expression is true. In this section, we will cover if, else , else if statements. The comparison and logical operators we learned in the previous sections will be useful in here.

// Conditions can be implementing using the following ways:

// -- if
// -- if else
// -- if else if else
// -- switch
// -- ternary operator

// -- If
// In JavaScript and other programming languages the key word if is to used check if a condition is true and to execute the block code. To create an if condition, we need if keyword, condition inside a parenthesis and block of code inside a curly bracket({}).

// syntax
// if (condition) {
//   //this part of code runs for truthy condition
// }

// Example
const num = 3;

if (num > 0) {
  console.log(`${num} is a positive number!!`);
}

// As you can see in the condition example above, 3 is greater than 0, so it is a positive number. The condition was true and the block of code was executed. However, if the condition is false, we won't see any results.

const isRaining = true;

if (isRaining) {
  console.log(`Remember to take your rain coat!!`);
}

// The same goes for the second condition, if isRaining is false the if block will not be executed and we do not see any output. In order to see the result of a falsy condition, we should have another block, which is going to be else.

// -- If Else
// If condition is true the first block will be executed, if not the else condition will be executed.

// syntax
// if (condition) {
//   // this part of code runs for truthy condition
// } else {
//   // this part of code runs for false condition
// }

let number = 3;
if (number > 0) {
  console.log(`${number} is a positive number`); //
} else {
  console.log(`${number} is a negative number`);
}

number = -3;
if (number > 0) {
  console.log(`${number} is a positive number`);
} else {
  console.log(`${number} is a negative number`); //
}

//

let isRain = true;
if (isRain) {
  console.log("You need a rain coat."); //
} else {
  console.log("No need for a rain coat.");
}

isRain = false;
if (isRain) {
  console.log("You need a rain coat.");
} else {
  console.log("No need for a rain coat."); //
}

// The last condition is false, therefore the else block was executed. What if we have more than two conditions? In that case, we would use else if conditions.

// -- If Else if Else

// On our daily life, we make decisions on daily basis. We make decisions not by checking one or two conditions instead we make decisions based on multiple conditions. As similar to our daily life, programming is also full of conditions. We use else if when we have multiple conditions.

// syntax
// if (condition) {
//      // code
// } else if (condition) {
//    // code
// } else {
//     //  code

// }

// Example

let a = 0;

if (a > 0) {
  console.log(`${a} is a positive number`);
} else if (a < 0) {
  console.log(`${a} is a negative number`);
} else if (a === 0) {
  console.log(`${a} is zero`); //
} else {
  console.log(`${a} is not a number`);
}

// if else if else
let weather = "sunny";

if (weather === "rainy") {
  console.log("You need a rain coat.");
} else if (weather === "cloudy") {
  console.log("It might be cold, you need a jacket.");
} else if (weather === "sunny") {
  console.log("Go out freely."); //
} else {
  console.log("No need for rain coat.");
}

// -- Switch

// Switch is an alternative for if else if else else. The switch statement starts with a switch keyword followed by a parenthesis and code block. Inside the code block we will have different cases. Case block runs if the value in the switch statement parenthesis matches with the case value. The break statement is to terminate execution so the code execution does not go down after the condition is satisfied. The default block runs if all the cases don't satisfy the condition.

// switch (caseValue) {
//   case 1:
//     // code
//     break;
//   case 2:
//     // code
//     break;
//   case 3:
//     // code
//     break;
//   default:
//   // code
// }

let weatherSwitch = "cloudy";

switch (weatherSwitch) {
  case "rainy":
    console.log("You need a rain coat.");
    break;
  case "cloudy":
    console.log("It might be cold, you need a jacket."); //
    break;
  case "sunny":
    console.log("Go out freely.");
    break;
  default:
    console.log(" No need for rain coat.");
}

// Switch More Examples
let dayUserInput = String(prompt("What day is today ?", "monday"));
// dayUserInput = "Wednesday";
let day = dayUserInput.toLowerCase();

switch (day) {
  case "monday":
    console.log("Today is Monday");
    break;
  case "tuesday":
    console.log("Today is Tuesday");
    break;
  case "wednesday":
    console.log("Today is Wednesday"); //
    break;
  case "thursday":
    console.log("Today is Thursday");
    break;
  case "friday":
    console.log("Today is Friday");
    break;
  case "saturday":
    console.log("Today is Saturday");
    break;
  case "sunday":
    console.log("Today is Sunday");
    break;
  default:
    console.log("It is not a week day.");
}

// -- Ternary Operators

// Another way to write conditionals is using ternary operators. We have covered this in other sections, but we should also mention it here.

let raining = true;

raining
  ? console.log("You need a rain coat.") //
  : console.log("No need for a rain coat.");

// You are extraordinary and you have a remarkable potential. You have just completed day 4 challenges and you are four steps ahead to your way to greatness. Now do some exercises for your brain and muscle!!

// Exercises:
// Exercises: Level 1!

// Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

let userAge = Number(prompt("Enter your age :"));
// userAge = 18;

if (userAge >= 18) {
  console.log("You are old enough to drive!"); //
} else {
  console.log("You need to wait some years to turn 18.");
}

// Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.

let yourAge = Number(prompt("Enter your age :"));

yourAge = 30;
let myAge = 28;

if (yourAge > myAge) {
  console.log(`You are ${yourAge - myAge} years older than me.
 `); // You are 2 years older than me.
} else if (yourAge === myAge) {
  console.log(`We are Equal!`);
} else if (yourAge < myAge) {
  console.log(`You are ${myAge - yourAge} years younger than me.
 `); // You are 2 years older than me.
}

// If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways

const aNum = 6;
const bNum = 2;

aNum > bNum
  ? console.log("a is greater than b") //
  : console.log("a is less than b");

// Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

const evenNum = 6;

evenNum % 2 === 0
  ? console.log(`${evenNum} is an even number`) // 6 is an even number
  : console.log(`${evenNum} is is an odd number.`);

// Exercises: Level 2
// Write a code which can give grades to students according to theirs scores:

// 80 - 100, A;
// 70 - 89, B;
// 60 - 69, C;
// 50 - 59, D;
// 0 - 49, F;

let score = 100;

if (score >= 80 && score <= 100) {
  console.log("A"); //
} else if (score >= 70 && score <= 89) {
  console.log("B");
} else if (score >= 60 && score <= 69) {
  console.log("C");
} else if (score >= 50 && score <= 59) {
  console.log("D");
} else {
  console.log("F");
}

// Check if the season is Autumn, Winter, Spring or Summer. If the user input is :

// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer

let month = "September";

if (month === "September" || month === "October" || month === "November") {
  console.log("The season is Autumn"); //
} else if (
  month === "December" ||
  month === "January" ||
  month === "February"
) {
  console.log("The season is Winter");
} else if (month === "March" || month === "April" || month === "May") {
  console.log("The season is Spring");
} else if (month === "June" || month === "July" || month === "August") {
  console.log("The season is Summer");
}

// Check if a day is weekend day or a working day. Your script will take day as an input.

let dayUser = String(prompt("What day is today ?", "sunday"));
// dayUser = "sunday";
let isDay = dayUser.toLowerCase();

isDay === "saturday" || isDay === "sunday"
  ? console.log("This is Weekend day!")
  : console.log("This is working day!");

// Exercises:
// Exercises: Level 3
// Write a program which tells the number of days in a month.
