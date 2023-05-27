// Objects
// Scope

// Variable is the fundamental part in programming. We declare variable to store different data types. To declare a variable we use the key word var., let and const. A variable can be declared at different scope. In this section, we will see the scope variables, scope of variables when we use var. or let. Variables scopes can be:

// 1** Global
// 2** Local

// Variable can be declared globally or locally scope. We will see both global and local scope. Anything declared without let, var. or const. is scoped at global level.

// Let us imagine that we have a scope.js file.

// ********* Window Global Object
// Without using console.log() open your browser and check, you will see the value of a and b if you write a or b on the browser. That means a and b are already available in the window.

//scope.js
a = "JavaScript"; // declaring a variable without let or const make it available in window object and this found anywhere
b = 10; // this is a global scope variable and found in the window object
function letsLearnScope() {
  console.log(a, b);
  if (true) {
    console.log(a, b);
  }

  const values = `Best language is ${a}, and rating is ${b}`;

  return values;
}

console.log(letsLearnScope()); // Best language is JavaScript, and rating is 10
console.log(a, b); // accessible, // JavaScript 10

// ********* Global scope
// A globally declared variable can be accessed every where in the same file. But the term global is relative. It can be global to the file or it can be global relative to some block of codes.

//scope.js
// let a = 'JavaScript' // is a global scope it will be found anywhere in this file
// let b = 10 // is a global scope it will be found anywhere in this file

function letsLearnScope() {
  console.log(a, b); // JavaScript 10, accessible
  if (true) {
    let a = "Python";
    let b = 100;
    console.log(a, b); // Python 100
  }

  console.log(a, b);
  return `Best language is ${a}, and rating is ${b}`;
}

console.log(letsLearnScope());
console.log(a, b); // JavaScript 10, accessible

// ********* Local scope
// A variable declared as local can be accessed only in certain block code.
// ** Block Scope
// ** Function Scope

//scope.js
// let a = 'JavaScript' // is a global scope it will be found anywhere in this file
// let b = 10 // is a global scope it will be found anywhere in this file

// Function scope
function letsLearnScope() {
  console.log(a, b); // JavaScript 10, accessible
  let value = false;
  // block scope
  if (true) {
    // we can access from the function and outside the function but
    // variables declared inside the if will not be accessed outside the if block
    let a = "Python";
    let b = 20;
    let c = 30;
    let d = 40;
    value = !value;
    console.log(a, b, c, value); // Python 20 30 true
  }

  // we can not access c because c's scope is only the if block
  console.log(a, b, value); // JavaScript 10 true
}

// console.log(letsLearnScope())
console.log(a, b); // JavaScript 10, accessible

// Now, you have an understanding of scope. A variable declared with var only scoped to function but variable declared with let or const is block scope(function block, if block, loop block, etc). Block in JavaScript is a code in between two curly brackets ({}).

//scope.js
function letsLearnScope() {
  var gravity = 9.81;
  console.log(gravity);
}

console.log(gravity); // Uncaught ReferenceError: gravity is not defined, undefined.

if (true) {
  var gravity = 9.81;
  console.log(gravity); // 9.81
}

console.log(gravity); // 9.81

for (var i = 0; i < 3; i++) {
  console.log(i); // 0, 1, 2
}

console.log(i); // 3

// ******** In ES6 and above there is let and const, so you will not suffer from the sneakiness of var. When we use let our variable is block scoped and it will not infect other parts of our code.

//scope.js
function letsLearnScope() {
  // you can use let or const, but gravity is constant I prefer to use const
  const gravity = 9.81;
  console.log(gravity);
}
// console.log(gravity), Uncaught ReferenceError: gravity is not defined

if (true) {
  const gravity = 9.81;
  console.log(gravity); // 9.81
}
// console.log(gravity), Uncaught ReferenceError: gravity is not defined

for (let i = 0; i < 3; i++) {
  console.log(i); // 0, 1, 2
}

// console.log(i), Uncaught ReferenceError: i is not defined

// *******************
// The scope let and const are the same. The difference is only reassigning. We can not change or reassign the value of the const variable. I would strongly suggest you to use let and const, by using let and const you will write clean code and avoid hard to debug mistakes. As a rule of thumb, you can use let for any value which change, const for any constant value, and for an array, object, arrow function and function expression.

// Object
// Everything can be an object and objects do have properties and properties have values, so an object is a key value pair. The order of the key is not reserved, or there is no order. To create an object literal, we use two curly brackets.

// Creating an empty object
// An empty object

const person = {};

// Creating an objecting with values
// Now, the person object has firstName, lastName, age, location, skills and isMarried properties. The value of properties or keys could be a string, number, boolean, an object, null, undefined or a function.

// Let us see some examples of object. Each key has a value in the object.

const rectangle = {
  length: 10,
  width: 5,
};

console.log(rectangle); // {length: 10, width: 5}

const personReal = {
  firstName: "Saad",
  lastName: "Azghour",
  age: 30,
  country: "Morocco",
  city: "Casablanca",
  skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node", "Python"],
  isMarried: false,
};

// Getting values from an object
// We can access values of object using two methods:

// using dots . followed by key name if the key-name is a one word
// using square bracket and a quote

// **************************************************************
// Creating object methods

// Now, the person object has getFullName properties. The getFullName is function inside the person object and we call it an object method. The this key word refers to the object itself. We can use the word this to access the values of different properties of the object. We can not use an arrow function as object method because the word this refers to the window inside an arrow function instead of the object itself. Example of object:

const personFull = {
  firstName: "Saad",
  lastName: "Azghour",
  age: 30,
  country: "Morocco",
  city: "Casablanca",
  skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node", "Python"],
  isMarried: false,

  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },

  "phone number": "+3584545454545",
};

// accessing values using dots .

console.log(personFull.firstName); // Saad
console.log(personFull.lastName); // Azghour
console.log(personFull.age); // 30
console.log(personFull.location); // undefined

// value can be accessed using square bracket and key name
console.log(personFull["firstName"]); // Saad
console.log(personFull["lastName"]); // Azghour
console.log(personFull["age"]); // 30
console.log(personFull["location"]); // undefined

// for instance to access the phone number we only use the square bracket method
console.log(personFull["phone number"]); // +3584545454545

console.log(personFull.getFullName()); // Saad Azghour

// Setting new key for an object
// An object is a mutable data structure and we can modify the content of an object after it gets created.
// Setting a new keys in an object

personFull.nationality = "Moroccan";
personFull.country = "Morocco";
personFull.title = "Software Engineer";
personFull.skills.push("Next");
personFull.skills.push("Remix");
personFull.isMarried = true;

console.log(personFull.skills);

personFull.getPersonInfo = function (params) {
  let skillsWithoutLastSkill = this.skills
    .splice(0, this.skills.length - 1)
    .join(", ");

  let lastSkill = this.skills.splice(this.skills.length - 1)[0];
  console.log(lastSkill); // Remix

  let skills = `${skillsWithoutLastSkill} and ${lastSkill}`;
  console.log(skills); // HTML, CSS, JavaScript, React, Redux, Node, Python, and Remix

  let fullName = this.getFullName();
  console.log(fullName); // Saad Azghour

  this.isMarried = false;

  let statement = `${fullName} is a ${this.title} from ${
    this.country
  } and he is ${this.age} years old. He teach ${skills}. He is ${
    this.isMarried ? this.isMarried : "not"
  } Married.`;

  return statement;
};

console.log(personFull);
console.log(personFull.getPersonInfo());

// Just examples of splice method.
const myArray = ["apple", "banana", "orange", "kiwi"];

console.log(myArray.splice(2, 1)); // orange
console.log(myArray); // apple, banana, kiwi
console.log(myArray.splice(1, 2, "pear")); // banana, kiwi

console.log(myArray); // apple, pear
console.log(myArray.splice(2, 0, "grape", "melon")); // [], empty Array
console.log(myArray); // apple, pear, grape, melon

// Object Methods
// There are different methods to manipulate an object. Let us see some of the available methods.

// ***** Object.assign: To copy an object without modifying the original object
// Object methods are functions that are defined on objects.

// Object methods: Object.assign, Object.keys, Object.values, Object.entries
// hasOwnProperty

console.log(personFull);

// lastName: 'Azghour',
// age: 30,
// country: 'Morocco',
// city: 'Casablanca',
// skills: [],
// isMarried: false,
// getFullName: [λ: getFullName],
// 'phone number': '+3584545454545',
// nationality: 'Moroccan',
// title: 'Software Engineer',
// getPersonInfo: [λ] }

const copyPersonFull = Object.assign({}, personFull);

(copyPersonFull.address = {
  street: "Heitamienkatu 16",
  pobox: 2002,
  city: "Helsinki",
}),
  console.log(copyPersonFull); // {firstName: 'XXXX', lastName: 'Azghour', age: 30, country: 'Morocco', city: 'Casablanca', skills: [], isMarried: false, getFullName: [λ: getFullName], 'phone number': '+3584545454545'}

// Getting object keys using Object.keys()
console.log(Object.keys(copyPersonFull).join(", ")); // firstName, lastName, age, country, city, skills, isMarried, getFullName, 'phone number', 'nationality', 'title', 'getPersonInfo', 'address'

// Get Address Key
console.log(Object.keys(copyPersonFull.address)); // ["street", "pobox", "city"]

// Getting object values using Object.values()
console.log(Object.values(copyPersonFull)); // // [ 'Saad','Azghour',30,'Morocco','Casablanca',[],false,[λ: getFullName],'+3584545454545','Moroccan','Software Engineer',[λ],{ street: 'Heitamienkatu 16', pobox: 2002, city: 'Helsinki' } ]

// Getting object keys and values using Object.entries()
// ******** Object.entries: To get the keys and values in an array

console.log(Object.entries(copyPersonFull)); // [ [ 'firstName', 'Saad' ], [ 'lastName', 'Azghour' ], [ 'age', 30 ], [ 'country', 'Morocco' ], [ 'city', 'Casablanca' ], [ 'skills', [] ], [ 'isMarried', false ], [ 'getFullName', [λ: getFullName] ], [ 'phone number', '+3584545454545' ], [ 'nationality', 'Moroccan' ], [ 'title', 'Software Engineer' ], [ 'getPersonInfo', [λ] ], [ 'address',   { street: 'Heitamienkatu 16', pobox: 2002, city: 'Helsinki' } ] ]

//  *****************************************************

// Checking properties using hasOwnProperty()
// hasOwnProperty: To check if a specific key or property exist in an object

console.log(copyPersonFull);
console.log(copyPersonFull.hasOwnProperty("firstName")); // true

// **************** Exercises ****************************
// Exercises: Level 1

// Create an empty object called dog
const dog = {};
// Print the dog object on the console
console.log(dog); // {}
// Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof

dog.name = "Tiger";
dog.legs = 4;
dog.color = "Black";
dog.age = 5;

dog.bark = function () {
  return "woof woof";
};

// Get name, legs, color, age and bark values from the dog object
console.log(dog.name); // Tiger
console.log(dog.legs); // 4
console.log(dog.color); // Black
console.log(dog.age); // 5
console.log(dog.bark()); //  woof woof
console.log(dog);

// Alternative way to get values from the dog object
console.log(Object.values(dog)); // [ 'Tiger', 4, 'Black', 5, [λ: bark] ]

// Set new properties the dog object: breed, getDogInfo
dog.breed = "German Shepherd";
dog.getDogInfo = function () {
  return `The dog name is ${this.name} and it's a ${this.breed} and it's ${this.age} years old.`;
};

console.log(dog.getDogInfo()); // The dog name is Tiger and it's a German Shepherd and it's 5 years old.
console.log(dog); // { name: 'Tiger', legs: 4, color: 'Black', age: 5, bark: [λ: bark], breed: 'German Shepherd', getDogInfo: [λ: getDogInfo] }

// Exercises: Level 2

const users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};

// Find the person who has many skills in the users object.
let personMaxSkills = "";
let maxSkills = 0;

for (const obj in users) {
  console.log(obj);

  const skillsCount = users[obj].skills.length;
  console.log(skillsCount); // 3, 8, 5, 4, 6, 4, 7

  if (skillsCount > maxSkills) {
    maxSkills = skillsCount;
    personMaxSkills = obj;
  }
}

console.log(personMaxSkills); // Asab

// Count logged in users, count users having greater than equal to 50 points from the following object.
let count = 0;
for (const obj in users) {
  const loggedIn = users[obj].isLoggedIn;
  const points = users[obj].points;

  console.log(loggedIn);
  if (loggedIn === true || points >= 50) {
    count++;
  }
}

console.log(count); // 3

// Find people who are MERN stack developer from the users object

let findMern = [];
for (const obj in users) {
  // console.log(obj)

  const mernStack = users[obj].skills.includes(
    "MongoDB",
    "Express",
    "React",
    "Node"
  );

  console.log(mernStack); // false, true, false, false, false, false, true
  if (mernStack === true) {
    findMern.push(obj);
  }
}

console.log(findMern); // [ 'Asab', 'Paul' ]

// Set your name in the users object without modifying the original users object

const copyUsers = Object.assign({}, users);
// Alernative copy of users object
// const copyUsres = { ...users };

for (const obj in copyUsers) {
  copyUsers[obj].name = "saadazghour";
}

console.log(copyUsers);

// Get all keys or properties of copyUsers object
let getKeys = [];

for (const obj in copyUsers) {
  const objKeys = Object.keys(copyUsers[obj]);
  getKeys.push(objKeys);
}

// email ,skills ,age ,isLoggedIn ,points , name
//  email ,skills ,age ,isLoggedIn ,points ,name
//  email ,skills ,age ,isLoggedIn ,points ,name
//  email ,skills ,age ,isLoggedIn ,points ,name
//  email ,skills ,age ,isLoggedIn ,points ,name
//  email ,skills ,age ,isLoggedIn ,points ,name
//  email ,skills ,age ,isLoggedIn ,points ,name

console.log(getKeys.join(", "));

// Get all the values of copyUsers object
let getValues = [];

for (const obj in copyUsers) {
  const objValues = Object.values(copyUsers[obj]);
  getValues.push(objValues);
}

console.log(getValues.join(", "));

// Use the countries object to print a country name.
let countries = {
  AFG: "Afghanistan",
  ALB: "Albania",
  DZA: "Algeria",
  ASM: "American Samoa",
  AND: "Andorra",
  AGO: "Angola",
  AIA: "Anguilla",
  ATA: "Antarctica",
  ATG: "Antigua and Barbuda",
  ARG: "Argentina",
  ARM: "Armenia",
  ABW: "Aruba",
  AUS: "Australia",
  AUT: "Austria",
  AZE: "Azerbaijan",
  BHS: "Bahamas (the)",
  BHR: "Bahrain",
  BGD: "Bangladesh",
  BRB: "Barbados",
  BLR: "Belarus",
  BEL: "Belgium",
  BLZ: "Belize",
  BEN: "Benin",
  BMU: "Bermuda",
  BTN: "Bhutan",
  BOL: "Bolivia (Plurinational State of)",
  BES: "Bonaire, Sint Eustatius and Saba",
  BIH: "Bosnia and Herzegovina",
  BWA: "Botswana",
  BVT: "Bouvet Island",
  BRA: "Brazil",
  IOT: "British Indian Ocean Territory (the)",
  BRN: "Brunei Darussalam",
  BGR: "Bulgaria",
  BFA: "Burkina Faso",
  BDI: "Burundi",
  CPV: "Cabo Verde",
  KHM: "Cambodia",
  CMR: "Cameroon",
  CAN: "Canada",
  CYM: "Cayman Islands (the)",
  CAF: "Central African Republic (the)",
  TCD: "Chad",
  CHL: "Chile",
  CHN: "China",
  CXR: "Christmas Island",
  CCK: "Cocos (Keeling) Islands (the)",
  COL: "Colombia",
  COM: "Comoros (the)",
  COD: "Congo (the Democratic Republic of the)",
  COG: "Congo (the)",
  COK: "Cook Islands (the)",
  CRI: "Costa Rica",
  HRV: "Croatia",
  CUB: "Cuba",
  CUW: "Curaçao",
  CYP: "Cyprus",
  CZE: "Czechia",
  CIV: "Côte d'Ivoire",
  DNK: "Denmark",
  DJI: "Djibouti",
  DMA: "Dominica",
  DOM: "Dominican Republic (the)",
  ECU: "Ecuador",
  EGY: "Egypt",
  SLV: "El Salvador",
  GNQ: "Equatorial Guinea",
  ERI: "Eritrea",
  EST: "Estonia",
  SWZ: "Eswatini",
  ETH: "Ethiopia",
  FLK: "Falkland Islands (the) [Malvinas]",
  FRO: "Faroe Islands (the)",
  FJI: "Fiji",
  FIN: "Finland",
  FRA: "France",
  GUF: "French Guiana",
  PYF: "French Polynesia",
  ATF: "French Southern Territories (the)",
  GAB: "Gabon",
  GMB: "Gambia (the)",
  GEO: "Georgia",
  DEU: "Germany",
  GHA: "Ghana",
  GIB: "Gibraltar",
  GRC: "Greece",
  GRL: "Greenland",
  GRD: "Grenada",
  GLP: "Guadeloupe",
  GUM: "Guam",
  GTM: "Guatemala",
  GGY: "Guernsey",
  GIN: "Guinea",
  GNB: "Guinea-Bissau",
  GUY: "Guyana",
  HTI: "Haiti",
  HMD: "Heard Island and McDonald Islands",
  VAT: "Holy See (the)",
  HND: "Honduras",
  HKG: "Hong Kong",
  HUN: "Hungary",
  ISL: "Iceland",
  IND: "India",
  IDN: "Indonesia",
  IRN: "Iran (Islamic Republic of)",
  IRQ: "Iraq",
  IRL: "Ireland",
  IMN: "Isle of Man",
  ISR: "Israel",
  ITA: "Italy",
  JAM: "Jamaica",
  JPN: "Japan",
  JEY: "Jersey",
  JOR: "Jordan",
  KAZ: "Kazakhstan",
  KEN: "Kenya",
  KIR: "Kiribati",
  PRK: "Korea (the Democratic People's Republic of)",
  KOR: "Korea (the Republic of)",
  KWT: "Kuwait",
  KGZ: "Kyrgyzstan",
  LAO: "Lao People's Democratic Republic (the)",
  LVA: "Latvia",
  LBN: "Lebanon",
  LSO: "Lesotho",
  LBR: "Liberia",
  LBY: "Libya",
  LIE: "Liechtenstein",
  LTU: "Lithuania",
  LUX: "Luxembourg",
  MAC: "Macao",
  MDG: "Madagascar",
  MWI: "Malawi",
  MYS: "Malaysia",
  MDV: "Maldives",
  MLI: "Mali",
  MLT: "Malta",
  MHL: "Marshall Islands (the)",
  MTQ: "Martinique",
  MRT: "Mauritania",
  MUS: "Mauritius",
  MYT: "Mayotte",
  MEX: "Mexico",
  FSM: "Micronesia (Federated States of)",
  MDA: "Moldova (the Republic of)",
  MCO: "Monaco",
  MNG: "Mongolia",
  MNE: "Montenegro",
  MSR: "Montserrat",
  MAR: "Morocco",
  MOZ: "Mozambique",
  MMR: "Myanmar",
  NAM: "Namibia",
  NRU: "Nauru",
  NPL: "Nepal",
  NLD: "Netherlands (the)",
  NCL: "New Caledonia",
  NZL: "New Zealand",
  NIC: "Nicaragua",
  NER: "Niger (the)",
  NGA: "Nigeria",
  NIU: "Niue",
  NFK: "Norfolk Island",
  MNP: "Northern Mariana Islands (the)",
  NOR: "Norway",
  OMN: "Oman",
  PAK: "Pakistan",
  PLW: "Palau",
  PSE: "Palestine, State of",
  PAN: "Panama",
  PNG: "Papua New Guinea",
  PRY: "Paraguay",
  PER: "Peru",
  PHL: "Philippines (the)",
  PCN: "Pitcairn",
  POL: "Poland",
  PRT: "Portugal",
  PRI: "Puerto Rico",
  QAT: "Qatar",
  MKD: "Republic of North Macedonia",
  ROU: "Romania",
  RUS: "Russian Federation (the)",
  RWA: "Rwanda",
  REU: "Réunion",
  BLM: "Saint Barthélemy",
  SHN: "Saint Helena, Ascension and Tristan da Cunha",
  KNA: "Saint Kitts and Nevis",
  LCA: "Saint Lucia",
  MAF: "Saint Martin (French part)",
  SPM: "Saint Pierre and Miquelon",
  VCT: "Saint Vincent and the Grenadines",
  WSM: "Samoa",
  SMR: "San Marino",
  STP: "Sao Tome and Principe",
  SAU: "Saudi Arabia",
  SEN: "Senegal",
  SRB: "Serbia",
  SYC: "Seychelles",
  SLE: "Sierra Leone",
  SGP: "Singapore",
  SXM: "Sint Maarten (Dutch part)",
  SVK: "Slovakia",
  SVN: "Slovenia",
  SLB: "Solomon Islands",
  SOM: "Somalia",
  ZAF: "South Africa",
  SGS: "South Georgia and the South Sandwich Islands",
  SSD: "South Sudan",
  ESP: "Spain",
  LKA: "Sri Lanka",
  SDN: "Sudan (the)",
  SUR: "Suriname",
  SJM: "Svalbard and Jan Mayen",
  SWE: "Sweden",
  CHE: "Switzerland",
  SYR: "Syrian Arab Republic",
  TWN: "Taiwan",
  TJK: "Tajikistan",
  TZA: "Tanzania, United Republic of",
  THA: "Thailand",
  TLS: "Timor-Leste",
  TGO: "Togo",
  TKL: "Tokelau",
  TON: "Tonga",
  TTO: "Trinidad and Tobago",
  TUN: "Tunisia",
  TUR: "Turkey",
  TKM: "Turkmenistan",
  TCA: "Turks and Caicos Islands (the)",
  TUV: "Tuvalu",
  UGA: "Uganda",
  UKR: "Ukraine",
  ARE: "United Arab Emirates (the)",
  GBR: "United Kingdom of Great Britain and Northern Ireland (the)",
  UMI: "United States Minor Outlying Islands (the)",
  USA: "United States of America (the)",
  URY: "Uruguay",
  UZB: "Uzbekistan",
  VUT: "Vanuatu",
  VEN: "Venezuela (Bolivarian Republic of)",
  VNM: "Viet Nam",
  VGB: "Virgin Islands (British)",
  VIR: "Virgin Islands (U.S.)",
  WLF: "Wallis and Futuna",
  ESH: "Western Sahara",
  YEM: "Yemen",
  ZMB: "Zambia",
  ZWE: "Zimbabwe",
  ALA: "Åland Islands",
};

let countryArray = [];
for (const country in countries) {
  const countryName = countries[country].toUpperCase();
  countryArray.push(countryName);
}

console.log(countryArray);

// Exercises: Level 3

// Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.

const personAccount = {
  firstName: "saad",
  lastName: "azghour",
  incomes: {
    description: "my income",
    amount: 20,
  },
  expenses: {
    amount: 10,
    totalIncome: "my total income",
    totalExpense: "my total expense",
    accountInfo: "my account info",
    addIncome: "my add income",
    addExpense: "my add expense",
    accountBalance: function name(params) {
      return personAccount.incomes.amount - this.amount;
    },
  },
};

console.log(personAccount.expenses.accountBalance()); // 10

// **** Questions:2, 3 and 4 are based on the following two arrays: usersDb and products ()

const usersDb = [
  {
    _id: "ab12ex",
    username: "Alex",
    email: "alex@alex.com",
    password: "123123",
    createdAt: "08/01/2020 9:00 AM",
    isLoggedIn: false,
  },
  {
    _id: "fg12cy",
    username: "Asab",
    email: "asab@asab.com",
    password: "123456",
    createdAt: "08/01/2020 9:30 AM",
    isLoggedIn: true,
  },
  {
    _id: "zwf8md",
    username: "Brook",
    email: "brook@brook.com",
    password: "123111",
    createdAt: "08/01/2020 9:45 AM",
    isLoggedIn: true,
  },
  {
    _id: "eefamr",
    username: "Martha",
    email: "martha@martha.com",
    password: "123222",
    createdAt: "08/01/2020 9:50 AM",
    isLoggedIn: false,
  },
  {
    _id: "ghderc",
    username: "Thomas",
    email: "thomas@thomas.com",
    password: "123333",
    createdAt: "08/01/2020 10:00 AM",
    isLoggedIn: false,
  },
];

const products = [
  {
    _id: "eedfcf",
    name: "mobile phone",
    description: "Huawei Honor",
    price: 200,
    ratings: [
      { userId: "fg12cy", rate: 5 },
      { userId: "zwf8md", rate: 4.5 },
    ],
    likes: [],
  },
  {
    _id: "aegfal",
    name: "Laptop",
    description: "MacPro: System Darwin",
    price: 2500,
    ratings: [],
    likes: ["fg12cy"],
  },
  {
    _id: "hedfcg",
    name: "TV",
    description: "Smart TV:Procaster",
    price: 400,
    ratings: [{ userId: "fg12cy", rate: 5 }],
    likes: ["fg12cy"],
  },
];

// Imagine you are getting the above usersDb collection from a MongoDB database.

// *** a. Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.

function signUp(usersDb) {
  for (const user in usersDb) {
    if (usersDb[user].isLoggedIn === true) {
      console.log(`You have already an account`);
      return `You have already an account`;
    }

    console.log(usersDb[user]);
    if (usersDb[user].isLoggedIn === false) {
      usersDb.push({
        _id: "eefamr",
        fullName: "saadazghour",
        email: "saad.azghour@gmail.com",
        password: "XXXXXX",
        createdAt: "08/01/2020 9:50 AM",
        isLoggedIn: false,
        createdAt: "08/01/2020 9:50 AM",
      }); // push the new user to the usersDb collection

      console.log(`You havn't an account, Sign-Up Successfuly!!`);
      return `You havn't an account, Sign-Up Successfuly!!`;
    }

    return usersDb;
  }
}

console.log(signUp(usersDb));

// **** b. Create a function called signIn which allows user to sign in to the application

function signIn(emailIn, passwordIn) {
  for (const user in usersDb) {
    if (
      usersDb[user].email === emailIn &&
      usersDb[user].password === passwordIn
    ) {
      console.log(`You are already signed in`);
      usersDb[user].isLoggedIn = true; // change the isLoggedIn value to true
      return `You are already signed in` || true;
    }
  }

  return `You don't have an account` || false; // Return false if the user doesn't exist
}

const emailIn = "saad.azghour@gmail.com";
const passwordIn = "XXXXXX";

console.log(signIn(emailIn, passwordIn));

// The products array has three elements and each of them has six properties.
// **** a. Create a function called rateProduct which rates the product.

console.log(products);
function rateProduct(productId, userId, rating) {
  // Find the product in the products array based on productId
  const product = products.find((item) => item._id === productId);
  // console.log(product);

  if (product) {
    // Check if the user has already rated the product
    const userRating = product.ratings.find((item) => item.userId === userId);
    console.log(userRating);

    if (userRating) {
      // If the user has already rated the product, update the existing rating
      userRating.rate = rating;
      return `You have already rated this product`;
    } else {
      // If the user has not rated the product yet, add a new rating
      product.ratings.push({ userId, rate: rating });
    }

    return true; // Return true if the product is rated successfully
  }

  return false; // Return false if the product is not found
}

// Example usage
console.log(rateProduct("eedfcf", "zwf8md", 4.8)); // true (product rated successfully)
console.log(rateProduct("aegfal", "abc123", 12)); // true (product rated successfully)
console.log(rateProduct("xyz123", "fg12cy", 4.5)); // false (product not found)
console.log(products);

// **** b. Create a function called averageRating which calculate the average rating of a product
function averageRating(products, productId) {
  const product = products.find((product) => product._id === productId);
  console.log(product);

  if (!product || product.ratings.length === 0) {
    return `No ratings found` || 0;
  }

  const totalRating = product.ratings.length;
  console.log(totalRating); // 2

  let sumRating = 0;
  const arr = product.ratings;

  for (let idx = 0; idx < arr.length; idx++) {
    const rate = arr[idx].rate;
    console.log(rate); // 5, 4.8
    sumRating += rate;
  }

  // Alternative solution of sumRating using reduce method.
  // const sumRatings = product.ratings.reduce((sum, rating) => sum + rating.rate, 0);

  const average = sumRating / totalRating;

  return `The average rating is ${average}`;
}

const productId = "eedfcf"; // Example product ID
console.log(averageRating(products, productId));

// Create a function called likeProduct. This function will helps to like to the product, if it is not liked and remove like if it was liked.

console.log(products);
function likeProduct(products, productId) {
  console.log(productId);
  const product = products.find((product) => product._id === productId);
  console.log(product);

  console.log(product);

  const productLiked = product.likes.find((item) => item === "fg12cy");
  console.log(productLiked); // fg12cy

  if (productLiked) {
    // Remove the product from the likes array
    console.log(product.likes.indexOf(productId)); // -1
    product.likes.splice(product.likes.indexOf(productId), 1);
    return `Product removed from likes`;
  } else {
    product.likes.push(productId);
    return `Product liked successfully`;
  }

  // If the product is not found, return false or "No product found"
  if (!product || product.likes.length === 0) {
    return `No product found` || false;
  }
}

console.log(likeProduct(products, "eedfcf")); // false // No product found
console.log(likeProduct(products, "aegfal")); // true // Product removed from likes

// Finally!!
