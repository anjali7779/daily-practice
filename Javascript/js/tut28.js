console.log("Tutorial 28: Object Prototype");

let obj = {
    fname: "Anjali",
    lname: "Patel"
}
// console.log(obj);


// Edit our Own Prototype
function obj1(givenName){
    this.name1 = givenName;
}
obj1.prototype.getName = function(){
// obj.prototype.getName = function(){
    return this.name1;
}

obj1.prototype.setName = function(newName){
    this.name1 = newName;
}

let obj2 = new obj1("Anjali");
console.log(obj2);
// console.log(obj2.toString());