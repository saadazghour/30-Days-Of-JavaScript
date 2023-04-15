// Loops !!

// In programming languages to carry out repetitive task we use different kinds of loops. The following examples are the commonly used loops in JavaScript and other programming languages.

// for (initialization; condition; increment) {
//   // Your code here
// }

const array = [1, 2, 3, 4, 5, 6];

for (let i = 0; i < array.length; i++) {
  // you code here
}

for (let i = 0; i <= 6; i++) {
  // 0 1 2 3 4 5 6
  console.log(i);
}

for (let i = 6; i >= 0; i--) {
  console.log(i);
}

for (let i = 0; i < array.length; i++) {
  // 0 * 0 = 0
  // 1 * 1 = 1
  // 2 * 2 = 4
  // 3 * 3 = 9
  // 4 * 4 = 16
  // 5 * 5 = 25

  console.log(`${i} * ${i} = ${i * i}`);
}

const countries = ["Finland", "Sweden", "Norway", "Denmark", "Iceland"];
const newArr = [];

for (let i = 0; i < countries.length; i++) {
  newArr.push(countries[i].toUpperCase());
}

console.log(newArr); // [ 'FINLAND', 'SWEDEN', 'NORWAY', 'DENMARK', 'ICELAND' ]

// Adding all elements in the array
const newNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;

for (let i = 0; i < newNumber.length; i++) {
  sum += newNumber[i];
}

console.log(sum); //55

// Creating a new array based on the existing array
const newNumbers = [1, 2, 3, 4, 5, 6];
const newArray = [];

for (let i = 0; i < newNumbers.length; i++) {
  newArray.push(newNumber[i] * 2);
}

console.log(newArray); // [ 2, 4, 6, 8, 10, 12 ]

const country = ["Finland", "Sweden", "Norway", "Denmark", "Iceland"];
const newArrResult = [];

for (let i = 0; i < country.length; i++) {
  newArrResult.push(country[i].toLocaleUpperCase());
}

console.log(newArrResult); // [ 'FINLAND', 'SWEDEN', 'NORWAY', 'DENMARK', 'ICELAND' ]

// While loop

let i = 0;
while (i <= 5) {
  console.log(i); // 0 1 2 3 4 5
  i++;
}

// do while loop

let initial = 0;

do {
  console.log(initial); // 0 1 2 3 4 5
  initial++;
} while (initial <= 5);

// for of loop
// We use for of loop for arrays. It is very hand way to iterate through an array if we are not interested in the index of each element in the array.

const arrayForOf = [1, 2, 3, 4, 5, 6];

for (const item of arrayForOf) {
  console.log(item); // 1 2 3 4 5 6
}

for (const number of newNumbers) {
  console.log(number); // 1 2 3 4 5 6
}

for (const number of newNumbers) {
  console.log(number * number); // 1 4 9 16 25 36
}

// adding all the numbers in the array
let sumNum = 0;
for (const num of newNumbers) {
  sumNum += num;
}

console.log(sumNum); // 21

const webTechsArr = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

for (const tech of webTechsArr) {
  console.log(tech.toUpperCase()); // HTML CSS JAVASCRIPT REACT REDUX NODE MONGODB
}

// Get only the first letter of each element,  H C J R N M

for (const first of webTechsArr) {
  console.log(first[0]); // H C J R R N M
}

for (const country of countries) {
  newArr.push(country.toUpperCase());
}

console.log(newArr); // ["FINLAND", "SWEDEN", "NORWAY", "DENMARK", "ICELAND"]

const newAddCountries = ["Finland", "Sweden", "Norway", "Denmark", "Iceland"];
const newAddArr = [];

for (const country of newAddCountries) {
  newAddArr.push(country.toUpperCase());
}

console.log(newAddArr); // ["FINLAND", "SWEDEN", "NORWAY", "DENMARK", "ICELAND"]

// Using Break and Continue
// Break is used to interrupt a loop.

for (let i = 0; i <= 6; i++) {
  // The code stops if 3 found in the iteration process.
  if (i === 3) {
    break;
  }

  console.log(i); // 0 1 2
}

// Continue is used to skip the current iteration of a loop.
for (let i = 0; i <= 6; i++) {
  if (i === 3) {
    continue;
  }

  console.log(i); // 0 1 2 4 5 6
}

// Exercises!!
// Exercises: Level 1

const countriesExercice = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

const webTechsExercice = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

const mernStackExercice = ["MongoDB", "Express", "React", "Node"];

// Iterate 0 to 10 using for loop, do the same using while and do while loop

for (let i = 0; i <= 10; i++) {
  console.log(i); // 0 1 2 3 4 5 6 7 8 9 10
}

let iterate = 0;
while (iterate <= 10) {
  console.log(iterate); // 0 1 2 3 4 5 6 7 8 9 10
  iterate++;
}

let iterate1 = 0;

do {
  console.log(iterate1);
  iterate1++;
} while (iterate1 <= 10);

// Iterate 10 to 0 using for loop, do the same using while and do while loop

for (let i = 10; i >= 0; i--) {
  console.log(i);
}

let iterateMinus = 10;
while (iterateMinus >= 0) {
  console.log(iterateMinus);
  iterateMinus--;
}

let iterateMinus1 = 10;

do {
  console.log(iterateMinus1);
  iterateMinus1--;
} while (iterateMinus1 >= 0);

// Iterate 0 to n using for loop
const n = 6;

for (let i = 0; i <= n; i++) {
  console.log(i);
}

// Write a loop that makes the following pattern using console.log():

// #
// ##
// ###
// ####
// #####
// ######
// #######

for (let i = 1; i <= 7; i++) {
  // console.log(i)
  let line = "";
  // The inner for loop appends '#' to the line variable for each iteration.
  for (let j = 1; j <= i; j++) {
    line += "#";
  }
  console.log(line);
}

// // using another Method!
// for (let i = 0; i <= 7; i++) {
//   console.log("#", )
// }
