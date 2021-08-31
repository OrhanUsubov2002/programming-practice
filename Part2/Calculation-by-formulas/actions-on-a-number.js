// Дано натуральное число. Определить:
// а)  является ли оно четным;
// б)  оканчивается ли оно цифрой 7   // ХЗ(

// 356 = 35*10 + 6

function checkIfNumberEven(value) {
    return value % 2 === 0; // return checkRestAfterDivision(value, 2, 0);
}


function checkIfNumberEndsWithSeven(value) {
    return value % 10 === 7; // return checkRestAfterDivision(value, 10, 7);
}

function checkRestAfterDivision(value, divider, rest) {
    return value % divider === rest;
}

function showResult() {
    const number = +prompt("Введите натуральное число");
    const result = checkIfNumberEven(number) && checkIfNumberEndsWithSeven(number); 

    result ? alert("Число чётное") : alert("Число не чётное");
}

showResult();