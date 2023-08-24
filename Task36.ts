/*37. Large Shirts: Modify the make_shirt() function so that shirts are large by 
default with a message that reads I love TypeScript. Make a large shirt and a 
medium shirt with the default message, and a shirt of any size with a different 
message.*/
    function Make_shirt(size:string="Large",message:string="I Love Typescript") {
    console.log(`I made a ${size} shirt with the message ${message}`)
    
}
Make_shirt();
Make_shirt("Medium");
Make_shirt("Small");
