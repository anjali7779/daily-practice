console.log('welcome to tutorial 15');

let cont = document.querySelector('.no');
cont = document.querySelector('.container');

let nodeName = cont.childNodes[5].nodeName;
let nodeType = cont.childNodes[5].nodeType;

//Node Types:
/*
 1. Element
 2. Attribute
 3. Text Node
 8. Comment
 9. document
 10. docType
 */

// console.log(nodeName);
// console.log(nodeType);
// console.log(cont.childNodes);
// console.log(cont.children);

let container = document.querySelector('div.container');
// console.log(container.children[1].children[0].children);

// console.log(container.firstChild);
// console.log(container.firstElementChild);
console.log(container.childNodes);
// console.log(container.lastChild);
// console.log(container.lastElementChild);

console.log(container.childElementCount);  // Count of child elements

console.log(container.firstElementChild.parentNode);
console.log(container.firstElementChild.nextSibling);
console.log(container.firstElementChild.nextElementSibling);
console.log(container.firstElementChild.nextElementSibling.nextElementSibling);