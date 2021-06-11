// modules

// CommonJS - every file in nodejs is a module (default)
// modules - encapsulated code (only share minimum)
// require('module to be imported') function is used to import a module

// a) Importing a module in a file and assigning it to a const variable
const names = require('./4-first-module');

// b) Importing a module in a file and assigning it to a const function
const sayHi = require('./5-second-module');
sayHi('susan');
sayHi(names.john);
sayHi(names.peter);

// c) Importing a module in a file and assigning it to a generic object variable which holds everything
const data = require('./6-alternative-flavor-module');
// accessing entire data (both array and object)
console.log(data);

// accessing data items array only
console.log(data.items);

// iterating data items array
data.items.forEach((item) => {
  console.log(item);
});

// accessing data object only
console.log(data.singlePerson);

// accessing data object's value
console.log(data.singlePerson.name);

// d) Importing a module (having a function invoked inside of it) doesn't need to be assigned to a variable as it will run by default
require('./7-mind-grenade');
