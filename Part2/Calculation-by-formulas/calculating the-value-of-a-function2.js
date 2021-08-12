// вычисления значения функции y = 3a**2 + 5a – 21
//   при любом значении а.



function calculateFunction () {
    let valuesA = +prompt("Введите значения a");
    let result = (3 * valuesA) ** 2 + 5 * valuesA - 21
    return result;
}

alert(calculateFunction());