/*30.No Users: Add an if test to Exercise 28 to make sure the list of users is not 
empty.
• If the list is empty, print the message We need to find some users!
• Remove all of the usernames from your array, and make sure the correct message is 
printed.*/
let Usernames: string[] = ["ALI","DAWOOD"]; // You can remove all usernames here
//let Usernames: string[] = ["ALI","DAWOOD"]; Else body will execute
if (Usernames.length === 0) {
  console.log("We need to find some users!");
} else {
  for (const username of Usernames) {
    if (username === 'admin') {
      console.log(`Hello admin, would you like to see a status report?`);
    } else {
      console.log(`Hello ${username}, thank you for logging in again.`);
    }
  }
}







