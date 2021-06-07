// modules

//CommonJS - every file in nodejs is a module (default)
// modules - encapsulated code (only share minimum)

const names = require('./4-first-module');
const sayHi = require('./5-second-module');
const data = require('./6-alternative-flavor-module');
require('./7-mind-grenade');

sayHi('susan');
sayHi(names.john);
sayHi(names.peter);
