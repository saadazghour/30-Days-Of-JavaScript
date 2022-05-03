// Factory Function
function showFactoryAddress(street, city, zipCode) {
  return {
    street,
    city,
    zipCode,
    place() {
      console.log("Place!");
    },
  };
}

const address1 = showFactoryAddress("Morocco", "Casablanca", "20000");
console.log(address1);

const address2 = showFactoryAddress();
console.log(address2.place());

// Constructor Function ===> PASCAL NOTATION
function Constructor(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
  this.draw = function () {
    console.log("Constructor draw!");
  };
}

const newConstructor = new Constructor("Morocco", "Marrakesh", "10000");
console.log(newConstructor);

const secondConstructor = new Constructor("Morocco", "Marrakesh", "10000");
console.log(newConstructor);

const thirdConstructor = newConstructor;

// Object Equality
const areEqual = (newConstructor, secondConstructor) => {
  return (
    newConstructor.street === secondConstructor.street &&
    newConstructor.city === secondConstructor.city &&
    newConstructor.zipCode === secondConstructor.zipCode
  );
};

// Referencing same Object!
const areSame = (newConstructor, secondConstructor) => {
  return newConstructor === secondConstructor;
};

console.log(areEqual(newConstructor, secondConstructor));
console.log(areSame(newConstructor, secondConstructor));

console.log(areEqual(newConstructor, thirdConstructor));
console.log(areSame(newConstructor, thirdConstructor));
