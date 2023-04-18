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

// Using Another Method for with the same Result.
for (let idx = 1; idx <= 7; idx++) {
  console.log("#".repeat(idx));
}

// Use loop to print the following pattern:

// 0 x 0 = 0
// 1 x 1 = 1
// 2 x 2 = 4
// 3 x 3 = 9
// 4 x 4 = 16
// 5 x 5 = 25
// 6 x 6 = 36
// 7 x 7 = 49
// 8 x 8 = 64
// 9 x 9 = 81
// 10 x 10 = 100

for (let idx = 0; idx <= 10; idx++) {
  console.log(`${idx} * ${idx} = ${idx * idx}`);
}

// Using loop print the following pattern

// i    i^2   i^3
// 0    0     0
// 1    1     1
// 2    4     8
// 3    9     27
// 4    16    64
// 5    25    125
// 6    36    216
// 7    49    343
// 8    64    512
// 9    81    729
// 10   100   1000

for (let idx = 0; idx <= 10; idx++) {
  console.log(`${idx} ${idx * idx}  ${idx * idx * idx}`);
}

// You can us the exponent operator  ** to calculate the power of a number.

for (let idx = 0; idx <= 10; idx++) {
  console.log(`${idx} ${idx ** 2} ${idx ** 3}`);
}

// Use for loop to iterate from 0 to 100 and print only even numbers

for (let idx = 0; idx <= 100; idx++) {
  if (idx % 2 === 0) {
    console.log(idx);
  }
}

// Use for loop to iterate from 0 to 100 and print only odd numbers

for (let idx = 0; idx <= 100; idx++) {
  if (idx % 2 !== 0) {
    console.log(idx);
  }
}

// Use for loop to iterate from 0 to 100 and print only prime numbers
// A prime number is a number that is only divisible by 1 and itself.

// TODO:
// for (let idx = 0; idx <= 100; idx++) {
//   // console.log(idx);
//   let isPrime = true;

//   for (let j = 2; j < idx; j++) {
//     // Checks if the number is divisible by any of the numbers in that range
//     if (idx % j === 0) {
//       // Then it's not Prime.
//       isPrime = false;
//       // break
//     }
//   }

//   if (isPrime) {
//     console.log("Is Prime", idx);
//   }
// }

// for (let idx = 0; idx <= 100; idx++) {
//   let isPrime = true;
//   for (let i = 2; i < idx; i++) {
//     if (idx % i === 0) {
//       isPrime = false;
//     }
//   }
//   if (isPrime) {
//     console.log(idx);
//   }
// }

// Use for loop to iterate from 0 to 100 and print the sum of all numbers.

let allSum = 0;
for (let idx = 0; idx <= 100; idx++) {
  allSum += idx;
}

console.log(`The sum of all numbers from 0 to 100 is ${allSum}`); // The sum of all numbers from 0 to 100 is 5050.

// Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
let sumEvens = 0;
let sumOdds = 0;

for (let idx = 0; idx <= 100; idx++) {
  if (idx % 2 === 0) {
    sumEvens += idx;
  } else if (idx % 2 !== 0) {
    sumOdds += idx;
  }
}

console.log(sumEvens); // 2550
console.log(sumOdds); // 2500

// Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array

let sumEvensArray = 0;
let sumOddsArray = 0;

for (let idx = 0; idx <= 100; idx++) {
  if (idx % 2 === 0) {
    sumEvensArray += idx;
  } else if (idx % 2 !== 0) {
    sumOddsArray += idx;
  }
}

const sumArray = [sumEvensArray, sumOddsArray];
console.log(sumArray); // [2550, 2500]

// Develop a small script which generate array of 5 random numbers

const randomArray = [];

for (let idx = 0; idx < 5; idx++) {
  const randomNumbers = Math.floor(Math.random() * 10);
  randomArray.push(randomNumbers);
}

console.log(randomArray);

// Develop a small script which generate array of 5 random numbers and the numbers must be unique

const randomArrayUnique = [];

for (let idx = 0; idx < 5; idx++) {
  const randomNumbers = Math.floor(Math.random() * 10);

  if (!randomArrayUnique.includes(randomNumbers)) {
    randomArrayUnique.push(randomNumbers);
  }
}

console.log(randomArrayUnique);

// Develop a small script which generate a six characters random id:

let randomId = "";
let randomCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

for (let idx = 0; idx < 6; idx++) {
  const randomIndex = Math.floor(Math.random() * randomCharacters.length);
  randomId += randomCharacters[randomIndex];
}

console.log(randomId);

// Using function to generate Random Id, and the function should return the Id and the function should be Called only once.
const generateRandomId = () => {
  let randomId = "";
  let randomCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

  for (let idx = 0; idx < 6; idx++) {
    const randomIndex = Math.floor(Math.random() * randomCharacters.length);
    // console.log(randomIndex);
    randomId += randomCharacters[randomIndex];
  }

  return randomId;
};

const Id = generateRandomId();
console.log(Id);

// Exercises: Level 2
// Develop a small script which generate any number of characters random id:

const generateRandomIdsByParams = (anyNumberChar) => {
  let randomIdsResult = "";
  let charactersRandom =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let idx = 0; idx < anyNumberChar; idx++) {
    // charactersRandom.charAt(
    //   Math.floor(Math.random() * charactersRandom.length)
    // );

    const randomIndex = Math.floor(Math.random() * charactersRandom.length);
    randomIdsResult += charactersRandom[randomIndex];
  }

  return randomIdsResult;
};

const randomIdsResult = generateRandomIdsByParams(12);
console.log(randomIdsResult);

// Write a script which generates a random hexadecimal number.

const generateRandomHexadecimalNumber = () => {
  // Generate a random decimal number between 0 and 1
  const randomDecimal = Math.random();

  // 0xffffffff, Is a hexadecimal literal that represents the maximum value of a 32-bit unsigned integer, and it's represent the maximum value of a 32-bit.

  // ( randomDecimal * 0xffffffff ) --> Random integer between 0 and 4294967295.
  // Converting to hexadecimal format using the toString(16)

  return Math.floor(randomDecimal * 0xffffffff).toString(16);
};

const randomHexa = generateRandomHexadecimalNumber();
console.log(randomHexa);

// Write a script which generates a random "RGB" "COLOR" number.
const generateRandomColor = () => {
  // generate a random number between 0 and 255 for the RGB component
  // red , green, blue .

  const random = Math.random();
  const r = Math.floor(random * 256);
  const g = Math.floor(random * 256);
  const b = Math.floor(random * 256);

  return `rgb ${r}, ${g}, ${b}`;
};

const randomRgb = generateRandomColor();
console.log(randomRgb);

const AboveCountries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Germany",
  "Hungary",
  "Finland",
  "Ireland",
  "Iceland",
  "Japan",
  "Kenya",
];

// Using the above countries array, create the following new array.
// ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]

const newAboveCountries = [];
for (let idx = 0; idx < AboveCountries.length; idx++) {
  newAboveCountries.push(AboveCountries[idx].toUpperCase());
}

console.log(newAboveCountries);

// Using the above countries array, create an array for countries length'.
// [7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]

for (let idx = 0; idx < AboveCountries.length; idx++) {
  console.log(AboveCountries[idx].length); // [7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]
}

// Use the AboveCountries array to create the following array of arrays:

//  [
//   ['Albania', 'ALB', 7],
//   ['Bolivia', 'BOL', 7],
//   ['Canada', 'CAN', 6],
//   ['Denmark', 'DEN', 7],
//   ['Ethiopia', 'ETH', 8],
//   ['Finland', 'FIN', 7],
//   ['Germany', 'GER', 7],
//   ['Hungary', 'HUN', 7],
//   ['Ireland', 'IRE', 7],
//   ['Iceland', 'ICE', 7],
//   ['Japan', 'JAP', 5],
//   ['Kenya', 'KEN', 5]
// ]

const newAboveCountriesArray = [];

for (let idx = 0; idx < AboveCountries.length; idx++) {
  const country = AboveCountries[idx];

  newAboveCountriesArray.push([
    country,
    country.substring(0, 3).toUpperCase(),
    country.length,
  ]);
}

console.log(newAboveCountriesArray);

// In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.

const result = [];
const resultWithout = [];

for (let idx = 0; idx < AboveCountries.length; idx++) {
  const country = AboveCountries[idx];
  if (country.includes("land")) {
    result.push(country);
  } else {
    resultWithout.push(country);
  }
}

console.log(result);
console.log(resultWithout);

const aboveCountries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Germany",
  "Hungary",
  "Finland",
  "Ireland",
  "Iceland",
  "Japan",
  "Kenya",
  "AIMOROCCO",
  "AI",
];

const countriesUppercase = [];
for (let idx = 0; idx < aboveCountries.length; idx++) {
  countriesUppercase.push(aboveCountries[idx].toUpperCase());
}

console.log(countriesUppercase);

// In above countries array, check if there is a country or countries end with a substring IA. If there are countries end with, print it as array. If there is no country containing the word AI, print 'These are countries ends without IA'.

console.log(countriesUppercase);

const newResult = [];
const newResultWithout = [];

for (let idx = 0; idx < countriesUppercase.length; idx++) {
  const country = countriesUppercase[idx];

  if (country.endsWith("IA")) {
    newResult.push(country);
  } else if (!country.includes("AI")) {
    newResultWithout.push(country);
  }
}

console.log(newResult); // [ 'ALBANIA', 'BOLIVIA', 'ETHIOPIA' ]
console.log(`These are countries ends without IA : ${newResultWithout}`); // CANADA,DENMARK,GERMANY,HUNGARY,FINLAND,IRELAND,ICELAND,JAPAN,KENYA

console.log(countriesUppercase); // This is the original above countries array.

// Using the above countries array, find the country containing the biggest number of characters.

let maxLength = 0;
let biggestNumCharactere = "";

for (let idx = 0; idx < countriesUppercase.length; idx++) {
  const country = countriesUppercase[idx];

  if (country.length > maxLength) {
    maxLength = country.length;
    biggestNumCharactere = country;
    console.log(maxLength);
  }
}

console.log(maxLength);
console.log(biggestNumCharactere);

// Approach with reduce method.
const countriesUppercaseResult = countriesUppercase.reduce((a, b) => {
  // console.log(a, b);
  return a.length > b.length ? a : b;
});

console.log(countriesUppercaseResult); // AIMOROCCO

console.log(countriesUppercase); // This is the original above countries Array.
// Using the above countries array, find the country containing only 5 characters.

let maxLengthFive = [];
let onlyFiveCharactere = [];

for (let idx = 0; idx < countriesUppercase.length; idx++) {
  const country = countriesUppercase[idx];

  if (country.length === 5) {
    maxLengthFive.push(country.length);
    onlyFiveCharactere.push(country);
  } else {
    console.log(`Not containing five characters! ${country}`);
  }
}

console.log(maxLengthFive);
console.log(onlyFiveCharactere);

// Find the longest word in the webTechsLongest Array
const webTechsLongest = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

let longestLength = 0;
let longestWord = "";

for (let idx = 0; idx < webTechsLongest.length; idx++) {
  const webTechNew = webTechsLongest[idx];
  // console.log(webTechNew.length)

  if (webTechNew.length > longestLength) {
    longestLength = webTechNew.length;
    longestWord = webTechNew;
  }
}

console.log(longestWord);
console.log(longestLength);

// Use the webTechsLongest array to create the following array of arrays:
// [["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]

const arrayOfArray = [];

for (let idx = 0; idx < webTechsLongest.length; idx++) {
  const webTechNew = webTechsLongest[idx];
  // console.log(webTechNew);

  arrayOfArray.push([webTechNew, webTechNew.length]);
}

console.log(arrayOfArray);

// An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array MERNSTACK
const mernStack = ["MongoDB", "Express", "React", "Node"];
const acronymResult = [];

for (let idx = 0; idx < mernStack.length; idx++) {
  const wordIndex = mernStack[idx];
  acronymResult.push(wordIndex[0]);
}

console.log(acronymResult.join("")); // MERN

// Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.

const newTehArr = [
  "HTML",
  "CSS",
  "JS",
  "React",
  "Redux",
  "Node",
  "Express",
  "MongoDB",
];
for (const item of newTehArr) {
  console.log(item);
}

// This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.

const fruits = ["banana", "orange", "mango", "lemon"];
const reverseFruits = [];

for (let idx = fruits.length - 1; idx >= 0; idx--) {
  const fruit = fruits[idx];

  reverseFruits.push(fruit);
}

console.log(reverseFruits);

// Print all the elements of array as shown below.

const fullStack = [
  ["HTML", "CSS", "JS", "React"],
  ["Node", "Express", "MongoDB"],
];

// HTML
// CSS
// JS
// REACT
// NODE
// EXPRESS
// MONGODB

// The outer loop iterates over the two inner arrays
for (let idx = 0; idx < fullStack.length; idx++) {
  const arrayItems = fullStack[idx];
  // While the inner loop iterates over each element in the current inner array
  for (let j = 0; j < arrayItems.length; j++) {
    console.log(arrayItems[j]);
  }
}

// Exercises: Level 3
// Copy countries array(Avoid mutation)
const countriyAvoidMutation = [
  "Finland",
  "Sweden",
  "Norway",
  "Denmark",
  "Iceland",
];

console.log([...countriyAvoidMutation]);

// Another way to copy array.
// Using Array.from() method to create a new array with the same elements
console.log(Array.from(countriyAvoidMutation));

// Arrays are mutable. Create a copy of array which does not modify the original. Sort the copied array and store in a variable sortedCountries

const copyCountry = [...countriyAvoidMutation];
const sortedCountries = copyCountry.sort();
console.log(sortedCountries);

// Sort the webTechs array and mernStack array

const webTechSort = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

const mernStackSort = ["MongoDB", "Express", "React", "Node"];

console.log(webTechSort.sort());
console.log(mernStackSort.sort());

// Extract all the countries contain the word 'land' from the countries array and print it as array

const countriesExtract = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Ireland",
  "island",
  "Germany",
  "Hungary",
  "Japan",
  "Kenya",
];

const resultExtract = [];
for (let idx = 0; idx < countriesExtract.length; idx++) {
  const country = countriesExtract[idx];
  if (country.includes("land")) {
    resultExtract.push(country);
  }
}

console.log(resultExtract);

// Find the country containing the highest, number of characters in the countries array

let resultHighest = 0;
let resultCharacter = "";
const newCountry = [...countriesExtract];

for (let idx = 0; idx < newCountry.length; idx++) {
  const country = newCountry[idx];
  // console.log(country.length);

  if (country.length > resultHighest) {
    resultHighest = country.length;
    resultCharacter = country;
  }
}

console.log(resultHighest); // 8
console.log(resultCharacter); // Ethiopia

// Extract all the countries containing only four characters from the countries array and print it as array

const allCountries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Cape Verde",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombi",
  "Comoros",
  "Congo (Brazzaville)",
  "Congo",
  "Costa Rica",
  "Cote d'Ivoire",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "East Timor (Timor Timur)",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia, The",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Korea, North",
  "Korea, South",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macedonia",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia and Montenegro",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Swaziland",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican City",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];

const resultFour = [];
for (let idx = 0; idx < allCountries.length; idx++) {
  const country = allCountries[idx];
  if (country.length === 4) {
    resultFour.push(country);
  }
}

console.log(resultFour);

// Extract all the countries containing two or more words from the countries array and print it as array

const resultWords = [];
console.log(allCountries);

for (let idx = 0; idx < allCountries.length; idx++) {
  const country = allCountries[idx];
  const words = allCountries[idx].split(" ");

  if (words.length >= 2) {
    resultWords.push(country);
  }
}

console.log(resultWords);

console.log(allCountries);

// Reverse the countries array and capitalize each country and stored it as an array

// Using reverse method .
const reverseCountries = allCountries.reverse();
const resultReverse = [];

for (let idx = 0; idx < reverseCountries.length; idx++) {
  const countryResult = reverseCountries[idx];
  resultReverse.push(countryResult.toUpperCase());
}

console.log(resultReverse);

const newResultReverse = [];
for (let idx = allCountries.length - 1; idx >= 0; idx--) {
  const resultReverse = allCountries[idx];
  newResultReverse.push(resultReverse.toUpperCase());
}

console.log(newResultReverse);
