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

  if (a.name < b.name) {
    return -1;
  } else if (a.name > b.name) {
    return 1;
  } else if (a.name === b.name) {
    return 0;
  }
});

console.log(arrayOfObject);
