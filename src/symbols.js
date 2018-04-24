let password = Symbol();

let user = {
  username: "r2d2",
  [password]: "c3po",
  password: 'asdasd'
};

console.log(user.password);
console.log(Object.keys(user));
console.log(Object.getOwnPropertyNames(user));

/*let password = user[Symbol.for("password")];
console.log(password);*/

console.log(Object.getOwnPropertySymbols(user));
