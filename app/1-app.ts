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
function demoFunc(something: string) : void {
    console.log(something);
}
demoFunc('1');


const demoTwo = (somethingElse: boolean) : boolean => somethingElse;

demoTwo(false);