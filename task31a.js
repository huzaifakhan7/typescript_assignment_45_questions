"use strict";
// This is a list of usernames that are already being used.
const current__users = ["Ali", "Basit", "Jalal", "Jawad", "Muhhamad"];
// This is a list of new usernames that people want to use.
const new_users = ["Jawad", "Basit", "Huzaifa", "Sanan", "Ahmad"];
// Now, we will check each new username to see if it's already being used.
// We will use a loop to go through each new username.
for (const new_username of new_users) {
    // We'll change the new username to lowercase so that our comparison is case-insensitive.
    const lowercase_new_username = new_username.toLowerCase();
    // We'll use a variable to keep track of whether the username has been found or not.
    let username_found = false;
    // We'll loop through each current username to check if the new username is already being used.
    for (const current_username of current__users) {
        const lowercase_current_username = current_username.toLowerCase();
        // If the lowercase version of the new username matches the lowercase version of the current username,
        // it means the username has already been used.
        if (lowercase_new_username === lowercase_current_username) {
            username_found = true;
            break; // We can stop searching since we found a match.
        }
    }
    // Now, we'll print a message based on whether the username was found or not.
    if (username_found) {
        console.log(`Sorry, the username '${new_username}' is already taken. Please choose a different username.`);
    }
    else {
        console.log(`Congratulations! The username '${new_username}' is available.`);
    }
}
