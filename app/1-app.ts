// console.log('This also works.');

// let potato: number = 100;
// potato = 'this is awesome';
// console.log(potato);

// let bool: boolean = false;

// let str: string = 'neat';

// let num: number = 1234;
// let hex: number = 0xf00d;
// let binary: number = 0b1010;

// console.log(num, hex, binary);

// let ages: Array<number> = [13, 14, 15];

// let dudeName: string[] = ['Tyler', 'Jeff', 'Jim'];

// let thirdPartyStuff: any = 'something here';
// console.log(thirdPartyStuff, typeof thirdPartyStuff);


//!@#$%^&*   tuples   *&^%$#@!

let usrnmpass: [string, number];
usrnmpass = ['connonBallSteve', 123456];



//!@#$%^&*   enums   *&^%$#@!

enum WeaponType { Sword, Sabre, Axe, Spear, Mace, Dagger, Bow };
let weapon: WeaponType = WeaponType.Dagger;
console.log(weapon);  // 5


enum CardType { Ace = 13, Two, Three, Four };
let card: CardType = CardType.Three;
let cardTwo: string = CardType[16];
console.log(card, cardTwo);  // 15 "Four"



//!@#$%^&*   union types   *&^%$#@!

let iDontKnow: number | string;
iDontKnow = 1234;
iDontKnow = 'something';



//!@#$%^&*   functions   *&^%$#@!

function demoFunc(something: string) : string {
    return something;
}
demoFunc('1');


const demoTwo = (something: boolean, somethingElse?: string, somethingElseElse?: number) : void => {
    console.log(something, somethingElse);
}
demoTwo(true, 'cool beans', 10);  // true 'cool beans'



//!@#$%^&*   classes   *&^%$#@!
class Person {
    firstName: string;
    lastName: string;

    sayHi() {
        console.log('Hello, my name is', this.firstName);
    }
}

let tyler: Person = new Person();

tyler.firstName = 'Titty-T';
tyler.lastName = 'ShelShel';

console.log(tyler.firstName, tyler.lastName);

let cory: Person = new Person();

cory.firstName = 'C-Money';
cory.lastName = 'C-Money';

console.log(cory.firstName, cory.lastName);

console.log(tyler, cory);

tyler.sayHi();