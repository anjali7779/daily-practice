console.log("Welcome to tut18.js");
// let  btn = document.getElementById('btn');
// btn.addEventListener('click', func1);

// function func1(e){
//     console.log("Thanks",e);
//     e.preventDefault();
    
// }

// btn.addEventListener('dblclick', func2);

// function func2 (e){
//     console.log("Thanks it's a double click",e);
//     e.preventDefault();
// }

// btn.addEventListener('mousedown', func3);

// function func3 (e){
//     console.log("Thanks it's a mouse down",e);
//     e.preventDefault();
// }

// document.querySelector('.no').addEventListener('mouseenter',function(){
//     console.log("You enter no");
// })
// document.querySelector('.no').addEventListener('mouseleave',function(){
//     console.log("You exited no");
// })
document.querySelector('.container').addEventListener('mousemove',function(e){
    console.log(e.offsetX, e.offsetY);
    // document.body.style.backgroundColor = 'yellow';
    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, ${e.offsetX+e.offsetY})`;
    console.log("You triggered mouse move event");
})