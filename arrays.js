// ------------- Adding new Elements
// @ts-nocheck

const arr = [1];

arr.unshift(0);
arr.splice(2, 0, 2); // Modifying the original array!
arr.push(3, 4);
//  The original array will not be modified!
console.log(arr.slice(2, 4));

// Result!!
console.log(arr);

// ------------- Finding Elements ===> (Primitive!)

// const findItem = arr.indexOf(1, 0);
const findItem = arr.lastIndexOf(3, 3);
console.log(findItem);
console.log(arr.indexOf(4) !== -1);
console.log(arr.includes(4));

// ------------- Finding Elements ===> (Reference Type!)

const courses = [
  { id: 1, name: "AZGHOUR" },
  { id: 2, name: "SAAD" },
];

const course = courses.find((course) => course.name === "AZGHOUR");

console.log(course);

// ------------- Removing Elements

const names = ["AZGHOUR", "SAAD", "Yaasine"];

// End element
console.log(names.pop());
// console.log(names);

// Begining element
console.log(names.shift());
// console.log(names);

// Modifying the original array!
console.log(names.splice(1, 2, "Yassine"));
console.log(names);

//  The original array will not be modified!
console.log(names.slice(0, 2));
console.log(names);

// -------------- Emptying an Array

// Solution 1  ----> Good!

// Still in memory, but will be removed by (GC)
// Garbage collection (GC). The purpose of a garbage collector is to monitor memory allocation and determine when a block of allocated memory is no longer needed and reclaim it.

let name = ["AZGHOUR", "SAAD", "Yaasine"];

name = [];
// console.log(name);

// Solution 2 ----> Good!
name.length = 0; // truncated Array!
// console.log(name);

// Solution 3
name.splice(0, name.length);
// console.log(name);

// Solution 4    // Not recommended!
while (name.length > 0) name.pop();
// console.log(name);

// -------------  Combining && Slicing Arrays

const first = [{ id: 1 }, 2, 3];
const second = [4, 5, 6];

// Combined by reference type!
const combine = first.concat(second);
// const combine  = [...first, ...second]
first[0].id = 10;
console.log(combine);

// const slice = combine.slice(3, 4);
// const slice = combine.slice();
const slice = [...combine];
console.log(slice);

// ------------- The Spread Operator

const firstArr = [1, 2, 3];
const secondArray = [4, 5, 6];

const spreed = [...firstArr, ...secondArray, ...slice];
console.log(spreed);

// ------------- Iterating an Array

for (const item of spreed) {
  console.log(item);
}

spreed.forEach((item, index) => {
  console.log(item, index);
});

// ------------- Joining Arrays

const numbers = [1, 2, 3];
const myLastName = "This is my last name AZGHOUR!";
const someName = ["Saad", "Yassine", "joy", "Mohammed"];

const join = numbers.join(" ");
console.log(join);

const split = myLastName.split(" ");
console.log(split);
const combineSplite = split.join("-");
console.log(combineSplite);

// ------------- Sorting Arrays

const numSort = [1, 4, 3, 2];
numSort.sort();
numSort.reverse();
console.log(numSort);

// Reference type Sort!
const arrayOfObject = [
  { id: 2, name: "React.js" },
  { id: 1, name: "JavaScript" },
];

arrayOfObject.sort((a, b) => {
  // a < b => -1
  // a > b => 1
  // a === b => 0

  const nameA = a.name.toUpperCase();
  const nameB = b.name.toUpperCase();

  if (nameA < nameB) return -1;
  if (nameA > nameB) return 1;
  return 0;
});

console.log(arrayOfObject);

// ------------- Testing the Elements of an Array

// every() ==> check every element in given array matches the given crteria!
// some() ==> check if we have at least one element that matches the given crteria!

// ------------------------------------------------------------------------

// const arrayPostive = [1, 2, 3, 4, 5, 20];

// const allPositive = arrayPostive.every((value) => {
//   return value >= 0;
// });

// console.log(allPositive);

const num = [-8, -5, 4, 5, 20];

const atLeastOnePositive = num.some((value) => {
  return value >= 0;
});

console.log(atLeastOnePositive);

// ------------- Filtering an Array ==> new Array not modify orriginal Array!

const posNumbers = [2, 5, -5, -4, -5];

// Loop through array! ==> new array!
const filtered = posNumbers.filter((n) => n >= 0);

console.log(filtered);

// ------------- Mapping an Array ==> new Array not modify orriginal Array!

const items = filtered.map((n) => `<li>${n}</li>`);
const html = `<ul>${items.join("")}</ul>`;
console.log(html);

const objItems = filtered.map((n) => ({ value: n }));
console.log(objItems);

// ------------- Chaining Filter && Map!!

const posNumbersChain = [10, 2, 3, 8, -5];

const itemsChain = posNumbersChain
  .filter((n) => n >= 0)
  .map((n) => ({ value: n }))
  .filter((obj) => obj.value > 3)
  .map((obj) => obj.value);

console.log(itemsChain);

// ------------- Reducing an Array!!

const numbersReduce = [1, 2, 3, 8, -2];

// numbersReduce.map((n) => (sum += n));

// Explanation!
// a = 0, c = 1 ==> a = 1
// a = 1, c = 2 ==> a = 3
// a = 3, c = 3 ==> a = 6
// a = 6, c = 8 ==> a = 14
// a = 14, c = -2 ==> a = 12

const sum = numbersReduce.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(sum);

// ------------- Array from Range!!

const arrayFromRange = (min, max) => {
  const range = [];

  for (let i = min; i <= max; i++) range.push(i);
  return range;
};

// const fromRange = arrayFromRange(-10,-4);
const fromRange = arrayFromRange(1, 4);
console.log(fromRange);

// ----------------- Includes!
// Implement Include method!

const include = (arrayNumbers, searchElement) => {
  for (const num of arrayNumbers) if (num === searchElement) return true;
  return false;
};

console.log(include(fromRange, 3));

// ----------------- Except
// Implement except method!

const except = (fromRange, excludeRange) => {
  const result = [];
  fromRange.forEach((num) => {
    if (!excludeRange.includes(num)) result.push(num);
  });
  return result;
};

console.log(except(fromRange, [1, 2]));

// ------------  Moving an Element (Implimentation of Array.prototype.move)

const move = (array, fromIndex, toIndex) => {
  const pos = toIndex;
  if (pos >= array.length || pos < 0) {
    throw new Error("Invalid index");
  }

  const newArray = [...array];
  const element = newArray.splice(fromIndex, 1)[0];
  newArray.splice(toIndex, 0, element);
  return newArray;
};

console.log(move([1, 2, 3, 4], 1, -1));
