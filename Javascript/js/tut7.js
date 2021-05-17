 console.log('We are in tut7.js and lets discuss about arrays');
 let marks = [34, 23, 24, 93, 73, 25];
 const fruits = ['Orange', 'Apple', 'Pineapple'];
 const mixed = ['str', 89, [3,50]];

 const arr = new Array(23, 123, 21, 'Orange');
//  console.log(arr);
//  console.log(mixed);
//  console.log(fruits[1]);

// console.log(arr.length);
//console.log(arr[2]);
// console.log(Array.isArray(arr));
arr[1] = 'Anjali';
// console.log(arr);

//To access the element
// let arrelement = arr[1];
// console.log('Element is :', arrelement);

// console.log(marks);
// console.log(marks.indexOf(24));
//OR
// let value = marks.indexOf(73);
// console.log(value);

//Mutating or Modifying arrays
// marks.push(35);
// marks.unshift(90);
// marks.pop();
// marks.shift();
// marks.splice(2,2);
// marks.reverse();
let marks2 = [1, 2, 3];
marks = marks.concat(marks2);
// console.log(marks);

//Object
let myObj = {
    name1: 'Anjali',
    'chan nel': 'Hello123',
    isActive: true,
    marks: [1, 2, 3, 4]
}
console.log(myObj);
console.log(myObj.name1);
console.log(myObj['name1']);
console.log(myObj['chan nel']);
