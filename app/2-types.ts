
/******************
 * 01 - Declaration
 ******************/
let username: string = "instructor";
let password: string = "Password123!";
let instructorId: number = 13;

let phoneNumber: number;
let email: string;
let isMarried: boolean;

let greeting = 'Hello';


/*****************
 * 02 - Basic Types
 *******************/
let age: number = 27;
let currentYear: number = 2018;

let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;

let schoolName: string;
schoolName = 'Eleven Fifty';

let appName: string ='Twitter';
appName = 'Instagram';

let isLoggedIn: boolean = true;
let isGoldLevelUser: boolean = true;

let studentList: string[] = ['Tom', 'Dick', 'Harry'];

let allScores: Array<number> = [13, 14, 15];

console.log('Student List:', studentList[0]);

let dataFromThirdParty: any = '12345';
console.log(dataFromThirdParty);
console.log(typeof dataFromThirdParty);

dataFromThirdParty = 12345;
console.log(dataFromThirdParty);
console.log(typeof dataFromThirdParty);

/****************
 * 03 - Union Types
 ****************/
