function greet(greeteng = 'Hello', name = 'friend') {
  console.log(`${greeteng} ${name}`);
}


greet("Hi", "Bill");

greet("Hi");

greet(undefined, "Bill");

greet();

function sum() {
  console.log(arguments instanceof Array);

  var sum = 0;

  Array.prototype.forEach.call(arguments, function (value) {
    sum+=value;
  });
  console.log(sum);
}

function sum(...values) {
  console.log(values instanceof Array);
  let sum = 0;

  values.forEach(function (value) {
    sum+=value;
  });

  console.log(sum);
}

function sum(...values) {

  console.log(values.reduce(function(prevValue, currentValue) {
    return prevValue + currentValue;
  }));
}

sum(5, 7, 2, 10 );
