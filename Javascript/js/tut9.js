console.log("Tutorial 9");

// General Loops: for, while, do-while

// for(let i=0;i<=100;i++)
// {
//     console.log(i);
// }

// let a = 34;
// a += 1;
// a++;
// console.log(a);

// let j = 0;
// while(j<10){
//     console.log(j+1);
//     j +=1;
//  }

// let k = 0;
// do{
//     console.log(k+1);
//     k +=1;
// }while(k < 10);

// let k = 0;
// do{
//     if(k===5){
//         k +=1;
//         continue;
//     }
//     console.log(k+1);
//     k +=1;
// }while(k < 10);

//Modern way (Recommended) :
let arr = [2,5,6,4,2,3];
arr.forEach(function(element, index, array){
    console.log(element, index, array);
});

//Instead of above code  block(Old way) :
// let arr = [2,5,6,4,2,3];
// for (let i = 0; i < arr.length; i++) {  
//     const element = arr[i];
//     console.log(element);
// }

let obj = {
    name: "Rohan Das",
    age: 78,
    type: "Dangerous Programmer",
    os: "Ubuntu"
}
for(let key in obj)
{
    //console.log(obj[key]);
    console.log(`The ${key} of object is ${obj[key]}`);
}

console.log('Done');


