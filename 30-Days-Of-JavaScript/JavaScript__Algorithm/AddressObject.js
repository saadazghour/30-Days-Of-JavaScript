const address = {
  street: "Morocco",
  city: "Casablanca",
  zipCode: "20000",
};

const showAddress = (address) => {
  for (const key in address) {
    console.log(key, address[key]);
  }
};

// console.log(showAddress(address));
