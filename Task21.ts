/*. Intentional Error: If you haven’t received an array index error in one of your 
pro grams yet, try to make one happen. Change an index in one of your 
programs to produce an index error. Make sure you correct the error before 
closing the program.*/
let names=["ALI","ASAD","KHALID","FAWAD"];
// Try to access an element at index 5 (which is out of bounds)
console.log("IT WILL THROUGH AN INDEX ERROR");
console.log(names[5]);
// Correct the error by accessing an existing index 
let correct_the_error=names[2];
console.log("HERE WE CORRECT THE INDEX ERROR BEFORE CLOSING THE PROGRAM");
console.log(correct_the_error);
