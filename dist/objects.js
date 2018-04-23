"use strict";

var firstName = "Bill",
    lastName = "Gates",
    email = "billgates@microsoft.com";

var person = {
  firstName: firstName,
  lastName: lastName,
  email: email,
  sayHello: function sayHello() {
    console.log("Hi my name is " + firstName + " " + lastName);
  },

  get fullName() {
    return this.firstName + " " + this.lastName;
  },
  set fullName(value) {
    this.firstName = value;
  }
};

Object.defineProperty(person, "fullName", {
  get: function get() {
    return this.firstName + " " + this.lastName;
  },
  set: function set(value) {
    this.firstName = value;
  }
});

console.log(person);
/*person.sayHello();

person.firstName;
person["firstName"];

let property = 'lastName';
person[property];

person = {
  [property]: "Bill"
};

function createCar(property, value) {
  return {
    [property]: value,
    ["_" + property]: value,
    [property.toUpperCase()]: value,
    ["get" + property]() {
      return this[property];
    }
  };
}
console.log(createCar("vin", 1));
*/