// console.log(countries);

// alert("Open the browser console whenever you work on JavaScript");
// alert("Open the console and check if the countries has been loaded");

// --------------------------
// Arrays:

// In contrast to variables, an array can store multiple values. Each value in an array has an index, and each index has a reference in a memory address. Each value can be accessed by using their indexes. The index of an array starts from zero, and the index of the last element is less by one from the length of the array.

// An array is a collection of different data types which are ordered and changeable(modifiable). An array allows storing duplicate elements and different data types. An array can be empty, or it may have different data type values.

// 1 - How to create an empty array

// In JavaScript, we can create an array in different ways. Let us see different ways to create an array. It is very common to use const instead of let to declare an array variable. If you ar using const it means you do not use that variable name again.

// - Using Array constructor

const arr = Array();
// or
// const array = new Array()
console.log(arr); // []

// - Using square brackets([])

// // syntax
// This the most recommended way to create an empty list.

const newArray = [];
console.log(newArray); // []

// 2 - How to create an array with values

// Array with initial values. We use length property to find the length of an array.

const numbers = [0, 3.14, 9.81, 37, 98.6, 100]; // array of numbers
const fruits = ["banana", "orange", "mango", "lemon"]; // array of strings, fruits
const vegetables = ["Tomato", "Potato", "Cabbage", "Onion", "Carrot"]; // array of strings, vegetables
const animalProducts = ["milk", "meat", "butter", "yoghurt"]; // array of strings, products
const webTechs = ["HTML", "CSS", "JS", "React", "Redux", "Node", "MongDB"]; // array of web technologies
let countries = [
  "Russia",
  "Sweden",
  "Germany",
  "Finland",
  "Norway",
  "Paris",
  "Iceland",
  "Denmark",
]; // array of strings, countries

// Print the array and its length

console.log("Numbers:", numbers);
console.log("Number of numbers:", numbers.length);

console.log("Fruits:", fruits);
console.log("Number of fruits:", fruits.length);

console.log("Vegetables:", vegetables);
console.log("Number of vegetables:", vegetables.length);

console.log("Animal products:", animalProducts);
console.log("Number of animal products:", animalProducts.length);

console.log("Web technologies:", webTechs);
console.log("Number of web technologies:", webTechs.length);

console.log("Countries:", countries);
console.log("Number of countries:", countries.length);

// Array can have items of different data types

const arrayMultiple = [
  "saadazghour",
  250,
  true,
  { country: "Finland", city: "Helsinki" },
  { skills: ["HTML", "CSS", "JS", "React", "Python"] },
]; // arrayMultiple containing different data types!!

console.log(arrayMultiple);

// 3 - Creating an array using split.

// As we have seen in the earlier section, we can split a string at different positions, and we can change to an array. Let us see the examples below :

let js = "javaScript";
const charsInJavaScript = js.split("");

// [ 'j', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't' ]
console.log(charsInJavaScript);

let companiesString = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
const companies = companiesString.split(",");

// [ 'Facebook', ' Google', ' Microsoft', ' Apple', ' IBM', ' Oracle', ' Amazon' ]
console.log(companies);

let txt = "I love learning new technology like HTML, CSS, JS, React, Python!";
const words = txt.split(" ");

console.log(words);

// 4 - Accessing array items using index
// We access each element in an array using their index. An array index starts from 0. The picture below clearly shows the index of each element in the array.

const fruitsArray = ["banana", "orange", "mango", "lemon"];
let firstFruit = fruitsArray[0]; // we are accessing the first item using its index

console.log(firstFruit); // banana

const secondFruit = fruitsArray[1];
console.log(secondFruit); // orange

let lastFruit = fruitsArray[3];
console.log(lastFruit); // lemon

// Last index can be calculated as follows
let lastIndex = fruitsArray.length - 1;

lastFruit = fruitsArray[lastIndex];

console.log(lastFruit); // lemon

//
const num = [0, 3.14, 9.81, 37, 98.6, 100]; // set of num

console.log(num.length); // => to know the size of the array, which is 6
console.log(num); // -> [0, 3.14, 9.81, 37, 98.6, 100]
console.log(num[0]); //  -> 0
console.log(num[5]); //  -> 100

let last = num.length - 1;
console.log(num[last]); // -> 100

//

const techs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
]; // List of web technologies

console.log(techs); // all the array items
console.log(techs.length); // => to know the size of the array, which is 7
console.log(techs[0]); //  -> HTML
console.log(techs[3]); //  -> React

let lastItem = techs.length - 1;
console.log(techs[lastItem]); // -> MongoDB

//

const country = [
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
  "Russia",
]; // List of country

console.log(country); // -> all country in array
console.log(country[0]); //  -> Albania
console.log(country[9]); //  -> Japan

let lastIn = country.length - 1;
console.log(country[lastIn]); //  -> Russia

//

const shoppingCart = [
  "Milk",
  "Mango",
  "Tomato",
  "Potato",
  "Avocado",
  "Meat",
  "Eggs",
  "Sugar",
]; // List of food products

console.log(shoppingCart); // -> all shoppingCart in array
console.log(shoppingCart[0]); //  -> Milk
console.log(shoppingCart[7]); //  -> Sugar

let lastOne = shoppingCart.length - 1;
console.log(shoppingCart[lastOne]); //  -> Sugar

// 5 - Modifying array element

// An array is mutable(modifiable). Once an array is created, we can modify the contents of the array elements.

const nbr = [1, 2, 3, 4, 5];
nbr[0] = 10; // changing 1 at index 0 to 10
nbr[1] = 20; // changing  2 at index 1 to 20

console.log(nbr); // [10, 20, 3, 4, 5]

const _country = [
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

_country[0] = "Afghanistan"; // Replacing Albania by Afghanistan

let _lastItem = _country.length - 1;
_country[_lastItem] = "Korea"; // Replacing Kenya by Korea

// [ 'Afghanistan',
// 'Bolivia',
// 'Canada',
// 'Denmark',
// 'Ethiopia',
// 'Finland',
// 'Germany',
// 'Hungary',
// 'Ireland',
// 'Japan',
// 'Korea' ]

console.log(_country);

// 6 - Methods to manipulate array

// There are different methods to manipulate an array. These are some of the available methods to deal with arrays:Array, length, concat, indexOf, slice, splice, join, toString, includes, lastIndexOf, isArray, fill, push, pop, shift, unshift !

// 1 - Array Constructor:
// Array:To create an array.

const arrConstructor = Array(); // Create an empty array
console.log(arrConstructor); // []

const eightEmptyValues = Array(8); // It creates eight empty values
console.log(eightEmptyValues); // []

// 2 - Creating static values with fill :
// fill: Fill all the array elements with a static value.

const staticValues = Array();
console.log(staticValues);

const ValuesFill = Array(8).fill("Saad"); // It creates eight element values filled with 'Saad'
console.log(ValuesFill);

const numberFilled = Array(8).fill(0); // It creates eight element values filled with 0
console.log(numberFilled);

const four4values = Array(4).fill(4); // It creates 4 element values filled with 4
console.log(four4values);

// 3 - Concatenating array using concat :
// concat:To concatenate two arrays.

const firstList = [1, 2, 3, 4];
const secondList = [5, 6, 7, 8];

const listResult = firstList.concat(secondList);
console.log(listResult);

const listFruits = ["banana", "orange", "mango", "lemon"]; // array of fruits
const listVegetables = ["Tomato", "Potato", "Cabbage", "Onion", "Carrot"]; // array of vegetables
const fruitsAndVegetablesResult = listFruits.concat(listVegetables); // concatenate the two arrays

console.log(fruitsAndVegetablesResult);

// 4 - Getting array length :
// Length:To know the size of the array.

const lengthNumbers = [1, 2, 3, 4];
console.log(lengthNumbers.length); // 4  is the size of the array

// 5 - Getting index an element in arr array :
// indexOf:To check if an item exist in an array. If it exists it returns the index else it returns -1.

const numbersIndex = [1, 2, 3, 4, 5, 6];
console.log(numbersIndex.indexOf(5));
console.log(numbersIndex.indexOf(0));
console.log(numbersIndex.indexOf(1));
console.log(numbersIndex.indexOf(6));
console.log(numbersIndex.indexOf(7));

// 6 - Check an element if it exist in an array :
// Check items in a list.
// let us check if a banana exist in the array

const fruitsCheck = ["banana", "apple", "orange", "peach", "orange", "mango"];
const indexOf = fruitsCheck.indexOf("banana");

indexOf === -1
  ? new Error("This fruit does not exist in the array")
  : console.log("This fruit does exist in the array");

// let us check if an avocado exist in the array
const fruitsExist = fruitsCheck.indexOf("avocado");

fruitsExist === -1
  ? console.log("This fruit does not exist in the array")
  : console.log("This fruit does exist in the Array");

// 7 - Getting last index of an element in array
// lastIndexOf: It gives the position of the last item in the array. If it exist, it returns the index else it returns -1.

const lastIndexNumbers = [1, 2, 3, 4, 5, 3, 1, 2];

console.log(lastIndexNumbers.lastIndexOf(2));
console.log(lastIndexNumbers.lastIndexOf(0));
console.log(lastIndexNumbers.lastIndexOf(1));
console.log(lastIndexNumbers.lastIndexOf(4));
console.log(lastIndexNumbers.lastIndexOf(6));
console.log(lastIndexNumbers.lastIndexOf(3));

// 8 - includes: To check if an item exist in an array. If it exist it returns the true else it returns false.

const numbersIncludes = [1, 2, 3, 4, 5, 3, 1, 2];

console.log(numbersIncludes.includes(1)); // true
console.log(numbersIncludes.includes(3)); // true
console.log(numbersIncludes.includes(2)); // true
console.log(numbersIncludes.includes(0)); // false
console.log(numbersIncludes.includes(4)); // true
console.log(numbersIncludes.includes(-1)); // false

const tech = ["HTML", "CSS", "JavaScript", "React", "Redux", "Node", "MongoDB"]; // List of web technologies

console.log(tech.includes("Node")); // true
console.log(tech.includes("Go")); // false

// 9 - Checking Array
// Array.isArray:To check if the data type is an array

const checkArraysNumbers = [1, 2, 3, 7, 8, 9, 10, 0];
console.log(Array.isArray(checkArraysNumbers));

const numbersCheck = 10;

console.log(Array.isArray(numbersCheck));

// 10 - Converting array to string
// toString: Converts array to string

const arrayConverts = [1, 2, 3, 4, 5, 6];
console.log(arrayConverts.toString()); // 1,2,3,4,5,6

const names = ["Saad", "Yassine", "Mohammed", "Abdellah"];
console.log(names.toString()); // Saad,Yassine,Mohamed,Abdellah

// 11 - Joining array elements :
// join: It is used to join the elements of the array, the argument we passed in the join method will be joined in the array and return as a string. By default, it joins with a comma, but we can pass different string parameter which can be joined between the items.

const joinNumbers = [1, 2, 3, 4, 5, 6];
console.log(joinNumbers.join("")); // 123456

const joinNames = ["Saad", "Yassine", "Mohammed", "Abdellah"];

console.log(joinNames.join()); // Saad,Yassine,Mohammed,Abdellah
console.log(joinNames.join("")); // SaadYassineMohammedAbdellah
console.log(joinNames.join(" ")); // Saad Yassine Mohammed Abdellah
console.log(joinNames.join(", ")); // Saad, Yassine, Mohammed, Abdellah
console.log(joinNames.join(" # ")); // Saad # Yassine # Mohammed # Abdellah

// 12 - Slice array elements :
// Slice: To cut out a multiple items in range. It takes two parameters:starting and ending position. It doesn't include the ending position.

const sliceNumbers = [1, 2, 3, 4, 5, 6];
console.log(sliceNumbers.slice()); //  [1, 2, 3, 4, 5, 6];
console.log(sliceNumbers.slice(0)); //  [1, 2, 3, 4, 5, 6];
console.log(sliceNumbers.slice(0, sliceNumbers.length)); // it copies all  item
console.log(sliceNumbers.slice(1, 4)); // [2,3,4] // it doesn't include the ending position

// 13 - Splice method in array
// Splice: It takes three parameters: Starting position, number of times to be removed and number of items to be added.

const spliceNumbers = [1, 2, 3, 4, 5, 6];
// @ts-ignore
console.log(spliceNumbers.splice()); // [], remove all items
console.log(spliceNumbers.splice(0, 1)); // [1] remove the first item
console.log(spliceNumbers.splice(0, spliceNumbers.length)); // [ 2, 3, 4, 5, 6 ]
console.log(spliceNumbers); // Whole things are removed, we have empty array []

const numbersSplice = [1, 2, 3, 4, 5, 6];
numbersSplice.splice(3, 3, 7, 8, 9); // [1, 2, 3, 7, 8, 9]
console.log(numbersSplice);

// [1, 2, 3, 7, 8, 9] // It removes three item and replace three items, at index 3 .
console.log(numbersSplice.splice(3, 3, 7, 8, 9)); //
console.log(numbersSplice); // [1, 2, 3, 7, 8, 9]

// 14 - Adding item to an array using push
// Push: adding item in the end. To add item to the end of an existing array we use the push method.

const arrayItems = ["item1", "item2", "item3"];
arrayItems.push("Item4");
console.log(arrayItems);

const arrayNumbers = [1, 2, 3, 4, 5, 6];
arrayNumbers.push(7, 8);
console.log(arrayNumbers); // [ 1, 2, 3, 4, 5, 6, 7, 8 ]

// 15 - Removing the end element using pop.
// remove one item from the end.
arrayNumbers.pop();
console.log(arrayNumbers); // [ 1, 2, 3, 4, 5, 6, 7 ]

// 16 - Removing an element from the beginning
// shift: Removing one array element in the beginning of the array.
arrayNumbers.shift();
console.log(arrayNumbers); // [ 2, 3, 4, 5, 6, 7 ]

// 17 - Add an element from the beginning
//unshift: Adding array element in the beginning of the array.
arrayNumbers.unshift(0);
console.log(arrayNumbers); // [ 0, 2, 3, 4, 5, 6, 7 ]

// 18 - Reversing array order
// reverse: reverse the order of an array.
const reverseArray = arrayNumbers.reverse();
console.log(reverseArray); // [ 7, 6, 5, 4, 3, 2, 0 ]  // Reverse array order

// 19 - Sorting elements in array
// sort: arrange array elements in ascending order. Sort takes a call back function, we will see how we use sort with a call back function in the coming sections.

const webSorting = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

console.log(webSorting.sort()); // [ 'CSS', 'HTML', 'JavaScript', 'MongoDB', 'Node', 'React', 'Redux' ]
// After sorting we can reverse it.
console.log(webSorting.reverse()); // [ 'Redux', 'React', 'Node', 'MongoDB', 'JavaScript', 'HTML', 'CSS' ]

// Array of arrays
// Array can store different data types including an array itself. Let us create an array of arrays

const firstNums = [1, 2, 3];
const secondNums = [4, 5, 6];
const arrayOfArrays = [firstNums, secondNums];

console.log(arrayOfArrays[1]);

const frontEnd = ["HTML", "Css", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];
const fullStack = [frontEnd, backEnd];

console.log(fullStack.length);
console.log(fullStack[0]);
console.log(fullStack[1]);

// --------------  Exercise ------------------
