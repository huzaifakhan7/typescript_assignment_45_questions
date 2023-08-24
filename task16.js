"use strict";
//16.Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner,
//and you have space for only two guests.
// Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
//Print a message to each of the two people still on your list, letting them know they’re still invited.
// Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
let my_Mehman = ["ALI", "ASAD", "TAIMOOR", "OSAMA"];
console.log("Dear" + " " + my_Mehman[0] + " " + "You are invited to dinner");
console.log("Dear" + " " + my_Mehman[1] + " " + "You are invited to dinner");
console.log("Dear" + " " + my_Mehman[2] + " " + "You are invited to dinner");
console.log("Dear" + " " + my_Mehman[3] + " " + "You are invited to dinner");
console.log("---->Sorry we can ony invite two people<----");
console.log("Dear" + " " + my_Mehman.pop() + " " + "we cant invite you to dinner");
console.log("Dear" + " " + my_Mehman.pop() + " " + "we cant invite you to dinner");
console.log("---->Those people who are invited<----");
console.log("Dear" + " " + my_Mehman[0] + " " + "you are invited to dinner");
console.log("Dear" + " " + my_Mehman[1] + " " + "you are invited to dinner");
console.log("remove names from list");
my_Mehman.pop();
my_Mehman.pop();
console.log("Final list" + my_Mehman + "[ ]");
