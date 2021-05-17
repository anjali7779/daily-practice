console.log("Tutorial 31");

class Employee{
    constructor(givenName, givenExperience, givenDivision){
    this.name = givenName;
    this.experience = givenExperience;
    this.division = givenDivision;
    }

    slogan(){
        return `I am ${this.name} and this company is the best`;
    }

    joiningYear() {
        return 2020 - this.experience;
    }

    // We can use Static Method also
    static add(a, b){
        return a + b;
    }
}

class Programmer extends Employee{
    constructor(givenName, givenExperience, givenDivision, givenLanguage){
        super(givenName, givenExperience, givenDivision);
        this.language = givenLanguage;
    }

    favouriteLanguage(){
        if (this.language == 'python'){
            return 'Python';
        }
        else{
            return 'JavaScript';
        }
    }

    static multiply(a, b){
        return a*b;
    }
}

//OBJECTS
// abc = new Employee("abc", 22, "programmer");
// console.log(abc);
// console.log(abc.joiningYear());
// console.log(Employee.add(9, 5));

user123 = new Programmer("User123", 2, "div", "Java");
console.log(user123);
console.log(user123.favouriteLanguage());
console.log(Programmer.multiply(3, 5));