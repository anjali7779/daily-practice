// Primitive data types

//String
let name1 = "Anjali";
console.log("My string is " + name1);
console.log("Data type is " + (typeof name1));

// Numbers
let marks = 34.4;
console.log("Data type is " + (typeof marks));

//Boolean
let isDriver = true;
console.log("Data type is " + (typeof isDriver));

//Null
let nullVar = null;
console.log("Data type is " + (typeof nullVar));

//Undefined
let undef = undefined;
console.log("Data type is " + (typeof undef));

//Reference Data Types

// Arrays
let myarr = [1, 2, 3, 4, false, "Anjali"];
console.log("Data type is " + (typeof myarr));

// Object Literals
let stMarks = {
    harry: 89,
    Shubham: 36,
    Rohandas: 34
}
console.log(typeof stMarks);

// Function
function findName() {
    
}
console.log(typeof findName);

// Date
let date = new Date();
console.log(typeof date);