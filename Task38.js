"use strict";
/*39. City Names: Write a function called city_country() that takes in the name of a
city and its country. The function should return a string formatted like this:
"Lahore, Pakistan"
Call your function with at least three city-country pairs, and print the value that’s
returned*/
function city_country(city, country) {
    return `${city},${country}`;
}
const city1 = city_country("Lahore", "Pakistan");
const city2 = city_country("NewYork", "US");
const city3 = city_country("Mumbai", "India");
const city4 = city_country("London", "UK");
console.log(city1);
console.log(city2);
console.log(city3);
console.log(city4);
