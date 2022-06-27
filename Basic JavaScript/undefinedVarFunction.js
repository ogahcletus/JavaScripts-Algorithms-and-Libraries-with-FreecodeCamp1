/*

Understanding Undefined Value returned from a Function
A function can include the return statement but it does not have to. In the case that the function doesn't have a return statement, when you call it, the function processes the inner code but the returned value is undefined.

Example
*/

let sum = 0;

function addSum(num) {
  sum = sum + num;
}

addSum(3);

console.log(addSum(3));

/*
addSum is a function without a return statement. The function will change the global sum variable but the returned value of the function is undefined.

Create a function addFive without any arguments. This function adds 5 to the sum variable, but its returned value is undefined.
*/

let sum1 = 0;

function addThree() {
  sum1 = sum1 + 3;
}

// Only change code below this line
function addFive(){
    sum1= sum1 + 5;
}

// Only change code above this line

addThree();
addFive();

console.log(addThree());
console.log(addFive());