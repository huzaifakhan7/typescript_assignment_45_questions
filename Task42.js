"use strict";
/*43. Unchanged Magicians: Start with your work from Exercise 40. Call the function
make_great() with a copy of the array of magicians’ names. Because the
original array will be unchanged, return the new array and store it in a
separate array. Call show_magicians() with each array to show that you have
one array of the original names and one array with the Great added to each
magician’s name.*/
// Define an array of magician names
let magicians = ["Shakal", "Rangella", "Jason chohan", "Rudra"];
// Function to show magician names
function showMagicians(names) {
    for (let name of names) {
        console.log(name);
    }
}
// Function to make magicians great
function makeGreat(names) {
    let greatMagicians = [];
    for (let name of names) {
        greatMagicians.push(`the Great ${name}`);
    }
    return greatMagicians;
}
// Show original magician names
console.log("Original Magicians:");
showMagicians(magicians);
// Make magicians great and store the modified list in a new array without changing the original array
let greatMagiciansArray = makeGreat([...magicians]);
console.log("\nModified Magicians:");
showMagicians(greatMagiciansArray);
console.log("\nOriginal Magicians (unchanged):");
showMagicians(magicians);
