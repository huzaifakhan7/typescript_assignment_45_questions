/*42. Great Magicians: Start with a copy of your program from Exercise 39. Write a 
function called make_great() that modifies the array of magicians by adding 
the phrase the Great to each magician’s name. Call show_magicians() to see 
that the list has actually been modified.*/
// Define an array of magician names
// Define an array of magician names
let _magicians = ["Shakal", "Rangella", "Jason chohan", "Rudra"];

// Function to show magician names
function _showMagicians(names: string[]): void {
  for (let name of names) {
    console.log(name);
  }
}

// Function to make magicians great
function _makeGreat(names: string[]): string[] {
  let greatMagicians: string[] = [];
  for (let name of names) {
    greatMagicians.push(`the Great ${name}`);
  }
  return greatMagicians;
}
// Show original magician names
console.log("Original Magicians:");
_showMagicians(_magicians);

// Make magicians great and show the modified list
_magicians = _makeGreat(_magicians);
console.log("\nGreat Magicians:");
_showMagicians(_magicians);



