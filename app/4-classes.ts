class Character {

    firstName: string;
    lastName: string;

    sayHello() {
        console.log('Hello', this.firstName);
    }

    sayHelloFullName() {
        console.log('Hello', this.firstName, this.lastName)
    }
}

class Game {
    constructor (name: string, maker: string) {
        this.gameName = name;
        this.gameMaker = maker;
    }
    gameName: string;
    gameMaker: string;
}

class GameWithoutConstructor {
    gameName: string;
    gameMaker: string;
}

class Vehicle {
    type: string;
    make: string;
    model: string;
    manufactureYear: number;
    runs: boolean;
    topSpeed: number;
}

class Automobile extends Vehicle {
    isSelfDriving: boolean;
}

class Animal {
    isPredator: boolean;
    isPrey: boolean;
    isExtinct: boolean;
}

class Bear extends Animal {
    species: string;
}

class Tiger extends Animal {
    country: string;
}

// class Store {
//     constructor(name: string, city: string) {
//         this.name = name;
//         this.city = city;
//     }
//     name: string;
//     city: string;
// }

class Store {
    constructor(public name: string, public city: string){}
}

let bobby: Character = new Character();

bobby.firstName = 'Bobby';
bobby.lastName = 'Hill';

bobby.sayHello();

let sheriff: Character = new Character();

sheriff.firstName = 'Sheriff';
sheriff.lastName = 'Holler';

sheriff.sayHelloFullName();

let battleship: Game = new Game('Battleshits', 'Hassis');

let monopoly: GameWithoutConstructor = new GameWithoutConstructor();

monopoly.gameName = 'Monopoly';
monopoly.gameMaker = 'Hasbro';

let myCar: Automobile = new Automobile();
myCar.isSelfDriving = false;
myCar.topSpeed = 160;
myCar.make = 'Hyundai';

class Motorcycle extends Vehicle {
    easyToDoWheelie: boolean;
}

let myMotorcycle: Motorcycle = new Motorcycle();
myMotorcycle.easyToDoWheelie = true;
myMotorcycle.topSpeed = 180;

let blackBear: Bear = new Bear();
blackBear.species = 'black';

let bengalTiger: Tiger = new Tiger();
bengalTiger.country = 'India';

// let ikea: Store = new Store('Ikea', 'Fishers');

let ikea: Store = new Store('Ikea', 'Fishers');

class Employee extends Character {
    private _salary: number;

    getSalary(): string {
        return this._salary.toString();
    }

    setSalary(newSalary: number) {
        this._salary = newSalary;
    }
}

let newEmployee: Employee = new Employee();
newEmployee.setSalary(33000);
let salaryResult: string = newEmployee.getSalary();
console.log("The salary is:", salaryResult);