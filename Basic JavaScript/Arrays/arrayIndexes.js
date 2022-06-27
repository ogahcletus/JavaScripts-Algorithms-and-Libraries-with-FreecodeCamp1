/*
Access Array Data with Indexes
We can access the data inside arrays using indexes.

Array indexes are written in the same bracket notation that strings use, except that instead of specifying a character, they are specifying an entry in the array. Like strings, arrays use zero-based indexing, so the first element in an array has an index of 0.


Example
*/

const array = [50, 60, 70];
console.log(array[0]);
const data = array[1];


/*
The console.log(array[0]) prints 50, and data has the value 60.

Create a variable called myData and set it to equal the first value of myArray using bracket notation.


Modify Array Data With Indexes
Unlike strings, the entries of arrays are mutable and can be changed freely, even if the array was declared with const.

Example
*/
const ourArray = [50, 40, 30];
ourArray[0] = 15;

/*
ourArray now has the value [15, 40, 30].

Note: There shouldn't be any spaces between the array name and the square brackets, like array [0]. Although JavaScript is able to process this correctly, this may confuse other programmers reading your code.

Modify the data stored at index 0 of myArray to a value of 45.


*/