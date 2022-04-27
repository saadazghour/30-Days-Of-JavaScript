const circle = {
  radius: 1,
  draw() {
    console.log("draw");
  },
};

// Old
const another = {};

for (const key in circle) {
  another[key] = circle[key];
}
console.log(another);

// New and Best approach!
// const anotherClone = Object.assign({ color: "yellow" }, circle);
const anotherClone = { ...circle };
console.log(anotherClone);
