function addNumbers(numOne: number, numTwo: number) {
    return numOne + numTwo;
}

function stringConcat(firstName: string, lastName: string) {
    return firstName + lastName
}

function addNumbersWithOptional(numOne: number, numTwo: number, someString?: string) {
    console.log(someString);
    return numOne + numTwo;
}

console.log(stringConcat('Hank', 'Hill'));

addNumbersWithOptional(1, 2);
addNumbersWithOptional(1, 2, "This is optional");