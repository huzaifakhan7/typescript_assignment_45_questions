"use strict";
/*33. Ordinal Numbers: Ordinal numbers indicate their position in a array, such as
1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
• Store the numbers 1 through 9 in a array.
• Loop through the array.
• Use an if-else chain inside the loop to print the proper ordinal ending for each
number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each
result should be on a separate line.*/
// Loop through the array using a for loop
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    // Initialize an empty string to store the ordinal ending 
    let ordinal_Ending;
    // Use an if-else chain to determine the proper ordinal ending
    if (number === 1) {
        ordinal_Ending = "st";
    }
    else if (number === 2) {
        ordinal_Ending = "nd";
    }
    else if (number === 3) {
        ordinal_Ending = "rd";
    }
    else {
        ordinal_Ending = "th";
    }
    // Print the result with the number and its ordinal ending
    console.log(`${number}${ordinal_Ending}`);
}
