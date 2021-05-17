console.log("Welcome to Tut17");
//Events & Event Object In JavaScript

document.getElementById('heading').addEventListener
    // ('mouseover', function(e){
        ('click', function(e){
        let variable;
        variable = e.target;
        variable = e.target.className;
        variable = Array.from(e.target.classList);
        // variable = e.target.id;
        variable = e.offsetX;
        variable = e.offsetY;
        variable = e.clientX;
        variable = e.clientY;
        console.log("You have clicked the heading");
        console.log(variable);
        // location.href="//w3schools.com";
    });