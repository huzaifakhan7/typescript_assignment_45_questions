/*31. Checking Usernames: Do the following to create a program that simulates 
how websites ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users.*/
const current_users = ["HUZAIFA7", "RONALDO", "CR7", "DON"];
const new_username = "RONALDO";  // You can try other names too

if (current_users.includes(new_username)) {
  console.log("This username is already taken. Please choose another one.");
} else {
  console.log("Great choice! Your username is now set.");
}


