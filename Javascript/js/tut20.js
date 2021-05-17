console.log("Welcome to tut20.js");

let impArray = ['apple', 'cherry', 'mango'];
//Add a key-value pair inside local storage
// localStorage.setItem('Name', 'Anjali');
// localStorage.setItem('Lname', 'Patel');
// localStorage.setItem('fruits', JSON.stringify(impArray));

//Clears the entire local storage
// localStorage.clear();

// Clear a particular key-value pair
// localStorage.removeItem('Name');

// Retrieve an item from the local storage
let name1 = localStorage.getItem('Name');
name1 = JSON.parse(localStorage.getItem('fruits'));
console.log(name1);

//Session storage
// sessionStorage.setItem('sessionName', 'sAnjali');
// sessionStorage.setItem('sessionLname', 'sPatel');
// sessionStorage.setItem('sessionfruits', JSON.stringify(impArray));