/*
Comparison with the Inequality Operator
The inequality operator (!=) is the opposite of the equality operator. It means not equal and returns false where equality would return true and vice versa. Like the equality operator, the inequality operator will convert data types of values while comparing.

Examples

1 !=  2    // true
1 != "1"   // false
1 != '1'   // false
1 != true  // false
0 != false // false
Add the inequality operator != in the if statement so that the function will return the string Not Equal when val is not equivalent to 99.



*/

// Setup
function testNotEqual(val) {
    if (val != 99) { // Change this line
      return "Not Equal";
    }
    return "Equal";
  }
  
  testNotEqual(10);

console.log(testNotEqual(99));


/*
Comparison with the Strict Inequality Operator
The strict inequality operator (!==) is the logical opposite of the strict equality operator. It means "Strictly Not Equal" and returns false where strict equality would return true and vice versa. The strict inequality operator will not convert data types.

Examples

3 !==  3  // false
3 !== '3' // true
4 !==  3  // true
Add the strict inequality operator to the if statement so the function will return the string Not Equal when val is not strictly equal to 17

*/

// Setup
function testStrictNotEqual(val) {
    if (val !== 17) { // Change this line
      return "Not Equal";
    }
    return "Equal";
  }
  
  let answer = testStrictNotEqual('17');

  console.log(answer)
