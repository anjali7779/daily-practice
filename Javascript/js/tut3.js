console.log('tut3');
// Variable in js
// var, let, const
var name1 = 'Anjali1';
var channel;
var marks = 78;
//marks = 50
//channel = 'Hello peoples';
console.log(name1, channel,marks);
// Rules for creating JavaScript Variables
/*
1. Cannot start with numbers
2. Can start with letter, _ or $
3. Are case sensitive
 */
var $city = 'Ahmedabad';
 console.log($city);

const ownersName = 'Hari Ram';
//ownersName = 'Hari';  // Cannot do this (Generate error)
console.log(ownersName);
const fruit = "Orange";

{
    let $city = 'Rampur';
    $city = 'Kolkata';
   console.log($city);
}
console.log($city);


const arr1 = [12,89,3,67];
// arr1 = [6,7,8];
//console.log(arr1);
arr1.push(45);
console.log(arr1);

/* Most common programming case types:

1. camelCase
2. kebab-case
3. snake_case
4. PascalCase
*/
