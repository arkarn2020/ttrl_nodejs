const num1 = 5;
const num2 = 10;

function addValues() {
  console.log(`the sum is : ${num1 + num2}`);
}

addValues();
// as function is invoked here along with data passed as params
// no need to explicitly write ->
// module.exports
// when this module is imported without any assignment to a variable
// the return value of function(addValues) will be executed by default
