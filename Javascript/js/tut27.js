console.log("Tutorial 27: Object Literals, Constructors and Object Oriented");

// Object Literal for creating objects
let car = {
    name1: 'KIA',
    topSpeed: 100,
    run: function(){
        console.log("Car is running");
    }
}
// console.log(car);

// Creating a constructor for cars
function GeneralCar(givenName, givenSpeed){
    this.name1 = givenName;
    this.topSpeed = givenSpeed;
    this.run = function(){
        console.log(`${this.name1} is running`);
    }
    this.analyze = function(){
        console.log(`This ${this.name1} car is slower by ${200 - this.topSpeed} Km/H than Mercedes`);
    }
}
car1 = new GeneralCar('Nissan',150);
car2 = new GeneralCar('Maruti',80);
console.log(car1,car2);

