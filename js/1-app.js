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
var usrnmpass;
usrnmpass = ['connonBallSteve', 123456];
//!@#$%^&*   enums   *&^%$#@!
var WeaponType;
(function (WeaponType) {
    WeaponType[WeaponType["Sword"] = 0] = "Sword";
    WeaponType[WeaponType["Sabre"] = 1] = "Sabre";
    WeaponType[WeaponType["Axe"] = 2] = "Axe";
    WeaponType[WeaponType["Spear"] = 3] = "Spear";
    WeaponType[WeaponType["Mace"] = 4] = "Mace";
    WeaponType[WeaponType["Dagger"] = 5] = "Dagger";
    WeaponType[WeaponType["Bow"] = 6] = "Bow";
})(WeaponType || (WeaponType = {}));
;
var weapon = WeaponType.Dagger;
console.log(weapon); // 5
var CardType;
(function (CardType) {
    CardType[CardType["Ace"] = 13] = "Ace";
    CardType[CardType["Two"] = 14] = "Two";
    CardType[CardType["Three"] = 15] = "Three";
    CardType[CardType["Four"] = 16] = "Four";
})(CardType || (CardType = {}));
;
var card = CardType.Three;
var cardTwo = CardType[16];
console.log(card, cardTwo); // 15 "Four"
//!@#$%^&*   union types   *&^%$#@!
var iDontKnow;
iDontKnow = 1234;
iDontKnow = 'something';
//!@#$%^&*   functions   *&^%$#@!
function demoFunc(something) {
    console.log(something);
}
demoFunc('1');
var demoTwo = function (somethingElse) { return somethingElse; };
demoTwo(false);
//# sourceMappingURL=1-app.js.map