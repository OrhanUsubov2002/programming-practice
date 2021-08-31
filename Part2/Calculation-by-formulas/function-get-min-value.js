//Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.


// function getTwoNumber() {
//     const number1 = +prompt("Введите число a");
//     const number2 = +prompt("Введите число b");

//     if (number1<number2) {
//         return number1; 
//     }
//     return number2; 
// }

// function showMinValue(result) {
//     result = getTwoNumber();
//     alert(result); 
// }
// showMinValue(); 

function getMinNumber(number1, number2) {
    return number1 < number2 ? number1 : number2; 
}

function showMinValue(number1, number2) {
    const result = getMinNumber(number1, number2);

    alert(result); 
}


const number1 = +prompt("Введите число a");
const number2 = +prompt("Введите число b");

showMinValue(number1, number2); 
