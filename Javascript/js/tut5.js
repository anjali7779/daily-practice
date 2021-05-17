// type conversion and type coercion

// Type Conversion
console.log("Welcome to tut5");
let myVar;
myVar = String(34);
console.log(myVar, (typeof myVar));

let booleanVar = String(true);
console.log(booleanVar, (typeof booleanVar));

let date = String(new Date());
console.log(date, typeof(date));

let arr = String([1,2,3,4,5]);
console.log(arr.length, typeof(arr));

let i = 8;
console.log(i.toString());

let stri = Number("3434");
// stri = Number("34i34");
// stri = Number(false);
// stri = Number([1,2,3,4]);
console.log(stri, (typeof stri));

let number = parseFloat("34.9867");
console.log(number.toFixed(10), (typeof number));

// Type coercion

let mystr = Number("698");
let mynum = 34;
console.log(mystr + mynum);
