"use strict";
//• Start with your program from Exercise 15. Add a print statement to the end of your program informing
// people that you found a bigger dinner table.
// Add one new guest to the beginning of your array.
let Mehman = ["HASHAM SIRWAR", "SIR SAJID", "SIR ZIA KHAN"];
Mehman.unshift("ALONE MUSK");
console.log("My recpected Teacher" + " " + Mehman[0] + " " + "You are invited to dinner");
console.log("My recpected Teacher" + " " + Mehman[1] + " " + "You are invited to dinner");
console.log("My recpected Teacher" + " " + Mehman[2] + " " + "You are invited to dinner");
console.log("My recpected Teacher" + " " + Mehman[3] + " " + "You are invited to dinner");
//• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. 
//• Print a new set of invitation messages, one for each person in your list.
Mehman.splice(2, 0, "BILGATES");
Mehman.push("AMBANI");
console.log("---->After addition of two more Guests<----");
console.log("My recpected Teacher" + " " + Mehman[0] + " " + "You are invited to dinner");
console.log("My recpected Teacher" + " " + Mehman[1] + " " + "You are invited to dinner");
console.log("My recpected Teacher" + " " + Mehman[2] + " " + "You are invited to dinner");
console.log("My recpected Teacher" + " " + Mehman[3] + " " + "You are invited to dinner");
console.log("My recpected Teacher" + " " + Mehman[4] + " " + "You are invited to dinner");
console.log("My recpected Teacher" + " " + Mehman[5] + " " + "You are invited to dinner");
