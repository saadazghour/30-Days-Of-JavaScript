const max = (numbers) => {
  let large = 0;
  for (const num of numbers) {
    if (num > large) {
      large = num;
    }
  }

  return large;
};

console.log(max([1, 2, 3, 4, 5, 6]));
