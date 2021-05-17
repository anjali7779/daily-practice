console.log("Welcome to Tut14.js");
/*
element selectors:
1. Single element selector
2. Multi element selector
 */

// 1. Single element selector
let element = document.getElementById('myfirst');
// element = element.className;
// element = element.childNodes;
// element = element.parentNode;
element.style.color = 'orange';
element.innerText = 'Hello Everyone';
element.innerHTML = '<b>Hello Everyone</b>';
// console.log(element);
// console.log(element.innerHTML);
// console.log(element.innerText);

let sel = document.querySelector('#myfirst');
sel = document.querySelector('.child');
sel = document.querySelector('h1');
sel.style.color='green';
// console.log(sel);

// 2. Multi element selector
let elems = document.getElementsByClassName('child');
elems = document.getElementsByClassName('container');
elems = document.getElementsByTagName('div');
console.log(elems);

// for (let index = 0; index < elems.length; index++) {
//     const element = elems[index];
//     console.log(element);
//     element.style.color = 'purple';
    
// }

// Array.from(elems).forEach(element => {
//     console.log(element);
//     element.style.color = 'yellow';
// });

// console.log(elems[1]);
// console.log(elems[0].getElementsByClassName('child'));

