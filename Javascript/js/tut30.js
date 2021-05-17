console.log("Tutorial 30");

//proto is object , slogan & changeName is a function
const proto = {
    slogan: function(){
        return `This is the best company`;
    },
    changeName: function(newName){
        this.name = newName;
    }
}

// This create name2 object(First way)
// const name2 = Object.create(proto);
// name2.name = "Anjali";
// name2.role = "Learner";
// name2.changeName("Anjali2");
// console.log(name2);

// This also create name2 object(Second way)
const name2 = Object.create(proto,{
    name: {value: "Anjali", writable: true},
    role: {value: "JsLearner"},
});
name2.changeName("Anjali123");
// console.log(name2);

// Employee Constructor
function Employee(name, salary, experience){
    this.name = name;
    this.salary = salary;
    this.experience = experience;
}

// Slogan
Employee.prototype.slogan = function(){
    return `This is the best company. Regards, ${this.name}`;
}

// Object(Employee)
let nameObj = new Employee("Anjali111", 25000, 2);
// console.log(nameObj);
console.log(nameObj.slogan());

// Programmer constructor inherit employee
function Programmer(name, salary, experience, language){
    Employee.call(this, name, salary, experience);
    this.language = language;
}

// Inherit the prototype
Programmer.prototype = Object.create(Employee.prototype);

// Manually set the constructor
Programmer.prototype.constructor = Programmer;

let pname = new Programmer("abc", 30000, 3, "Java");
console.log(pname);