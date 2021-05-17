console.log("We are at tut6");
const name1 = "Anjali";
const greeting = "Good morning";
// console.log(greeting + " " + name1);

let html;
html = "<h1>This is Heading</h1>" +
        "<p>This is my para</p>"; 
html = html.concat('this', ' str2');
// console.log(html);
// console.log(html.length);
// console.log(html.toLowerCase());
// console.log(html.toUpperCase());
 console.log(html);

//Indexing
// console.log(html[1]);
// console.log(html.charAt(7));
// console.log(html.indexOf('is'));
// console.log(html.lastIndexOf('is'));
// console.log(html.endsWith('str2'));
// console.log(html.includes('para'));
// console.log(html.substring(2,6));
// console.log(html.slice(-2));
//console.log(html.slice(1,4));
// console.log(html.split(' '));
//console.log(html.replace('This','It'));

//Template literal
let fruit1 = 'Orange\'';
let fruit2 = 'Apple';
let myHtml = `Hello ${name1}
            <h1>This is "my" heading</h1>
            <p>You like ${fruit1} and ${fruit2} </p>    
            `;
        document.body.innerHTML = myHtml;