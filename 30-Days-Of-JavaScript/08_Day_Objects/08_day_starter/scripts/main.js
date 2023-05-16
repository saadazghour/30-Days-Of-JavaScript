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

//
