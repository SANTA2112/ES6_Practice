"use strict";

var _user;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var password = Symbol();

var user = (_user = {
  username: "r2d2"
}, _defineProperty(_user, password, "c3po"), _defineProperty(_user, "password", 'asdasd'), _user);

console.log(user.password);
console.log(Object.keys(user));
console.log(Object.getOwnPropertyNames(user));

/*let password = user[Symbol.for("password")];
console.log(password);*/

console.log(Object.getOwnPropertySymbols(user));