// there are different types of data types.

// The following are JavaScript primitive data types:

// String     ----> "Hello World"
// Number     ----> (integer, float, double) ---> (-3, -2, -1, 0, 1, 2, 3)
// Boolean,   ----> (true, false)
// undefined  ----> (undefined) ---> if we don't assign a value to a variable, the value is undefined. In addition to that, if a function is not returning anything, it returns undefined.

// Null       ----> (null)  ---> Null in JavaScript means an empty value.
// Symbol     ----> (symbol)

// Checking Data Types :
// To check the data type of a certain variable, we use the typeof operator. See the following example.

console.log(typeof "Hello World"); // string
console.log(typeof 3); // number
console.log(typeof true); // boolean
console.log(typeof undefined); // undefined
console.log(typeof null); // object
console.log(typeof Symbol()); // symbol

// Variables
// Variables are containers for storing data values.

// Variables are containers of data. Variables are used to store data in a memory location. When a variable is declared, a memory location is reserved. When a variable is assigned to a value (data), the memory space will be filled with that data. To declare a variable, we use var, let, or const keywords.

// For a variable that changes at a different time, we use let. If the data does not change at all, we use const. For example, PI, country name, gravity do not change, and we can use const. We will not use var in this challenge and I don't recommend you to use it. It is error prone way of declaring variable it has lots of leak. We will talk more about var, let, and const in detail in other sections (scope). For now, the above explanation is enough.

// A valid JavaScript variable name must follow the following rules:

// A JavaScript variable name should not begin with a number.
// A JavaScript variable name does not allow special characters except dollar sign and underscore.
// A JavaScript variable name follows a camelCase convention.
// A JavaScript variable name should not have space between words.

// ----------------------------------------------------------------------------------------------------------
// The following are examples of valid JavaScript variables:

// firstName
// lastName
// country
// city
// capitalCity
// age
// isMarried

// first_name
// last_name
// is_married
// capital_city

// num1
// num_1
// _num_1
// $num1
// year2020
// year_2020

// Example of invalid variables:

// first-name
// 1_num
// num_#_1

// Variables can also be declaring in one line separated by comma, however I recommend to use a seperate line to make code more readble .

// ------------------------------ -Exercise------------------------------------------------------

// comments can make code readable
// Welcome to 30DaysOfJavaScript

/* comments can make code readable, easy to reuse and informative */
