// ------------- Adding new Elements

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

const course = courses.find((course) => {
  return course.name === "AZGHOUR";
});

console.log(course);

// ------------- Removing Elements
// ------------- Splittings Arrays
// ------------- Combining Arrays
