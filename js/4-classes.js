var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Character = /** @class */ (function () {
    function Character() {
    }
    Character.prototype.sayHello = function () {
        console.log('Hello', this.firstName);
    };
    Character.prototype.sayHelloFullName = function () {
        console.log('Hello', this.firstName, this.lastName);
    };
    return Character;
}());
var Game = /** @class */ (function () {
    function Game(name, maker) {
        this.gameName = name;
        this.gameMaker = maker;
    }
    return Game;
}());
var GameWithoutConstructor = /** @class */ (function () {
    function GameWithoutConstructor() {
    }
    return GameWithoutConstructor;
}());
var Vehicle = /** @class */ (function () {
    function Vehicle() {
    }
    return Vehicle;
}());
var Automobile = /** @class */ (function (_super) {
    __extends(Automobile, _super);
    function Automobile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Automobile;
}(Vehicle));
var Animal = /** @class */ (function () {
    function Animal() {
    }
    return Animal;
}());
var Bear = /** @class */ (function (_super) {
    __extends(Bear, _super);
    function Bear() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Bear;
}(Animal));
var Tiger = /** @class */ (function (_super) {
    __extends(Tiger, _super);
    function Tiger() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Tiger;
}(Animal));
// class Store {
//     constructor(name: string, city: string) {
//         this.name = name;
//         this.city = city;
//     }
//     name: string;
//     city: string;
// }
var Store = /** @class */ (function () {
    function Store(name, city) {
        this.name = name;
        this.city = city;
    }
    return Store;
}());
var bobby = new Character();
bobby.firstName = 'Bobby';
bobby.lastName = 'Hill';
bobby.sayHello();
var sheriff = new Character();
sheriff.firstName = 'Sheriff';
sheriff.lastName = 'Holler';
sheriff.sayHelloFullName();
var battleship = new Game('Battleshits', 'Hassis');
var monopoly = new GameWithoutConstructor();
monopoly.gameName = 'Monopoly';
monopoly.gameMaker = 'Hasbro';
var myCar = new Automobile();
myCar.isSelfDriving = false;
myCar.topSpeed = 160;
myCar.make = 'Hyundai';
var Motorcycle = /** @class */ (function (_super) {
    __extends(Motorcycle, _super);
    function Motorcycle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Motorcycle;
}(Vehicle));
var myMotorcycle = new Motorcycle();
myMotorcycle.easyToDoWheelie = true;
myMotorcycle.topSpeed = 180;
var blackBear = new Bear();
blackBear.species = 'black';
var bengalTiger = new Tiger();
bengalTiger.country = 'India';
// let ikea: Store = new Store('Ikea', 'Fishers');
var ikea = new Store('Ikea', 'Fishers');
//# sourceMappingURL=4-classes.js.map