"use strict";
/*23. More Conditional Tests: You don’t have to limit the number of tests you create
to 10. If you want to try more comparisons, write more tests. Have at least one
True and one False result for each of the following:
• Tests for equality and inequality with strings
• Tests using the lower case function
• Numerical tests involving equality and inequality, greater than and less than,
greater than or equal to, and less than or equal to
• Tests using "and" and "or" operators
• Test whether an item is in a array
• Test whether an item is not in a array*/
//    <<<<<------------>>>>>
// Tests for equality and inequality with strings
let string1 = "BANANA";
let string2 = "ORANGE";
console.log(string1 !== string2);
console.log(string1 === string2);
// Tests using the lower case function
let orignal_string = "HELLO WORLD";
console.log(orignal_string.toUpperCase() === "HELLO WORLD");
console.log(orignal_string.toLowerCase() === "HELLO WORLD");
// Numerical tests involving equality and inequality, greater than and less than, 
// greater than or equal to, and less than or equal to
let a = 101;
let b = 100;
console.log(a > b);
console.log(a < b);
console.log(a != b);
console.log(a == b);
//Tests using "and" and "or" operators
let num1 = 34;
let num2 = 23;
// IN AND OPERATOR BOTH CONDITION MUST BE TRUE SO THEN IT WILL GIVE TRUE
console.log(num1 > num2 && num2 < num1);
console.log(num1 > num2 && num2 > num1);
// IF ONE OF THE CONDION IS TRUE SO IT WILL GIVE TRUE
console.log(num1 > num2 || num2 > num1);
console.log(num1 < num2 || num2 > num1);
let cars = ["HONDA", "CIVIC", "VITZ", "AQUA"];
// Test whether an item is in a array
console.log(cars.includes("VITZ"));
// Test whether an item is not in a array
console.log(cars.includes("BUGHATI"));
