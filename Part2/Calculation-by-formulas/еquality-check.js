// .   Даны три вещественных числа a, b, c. Проверить:
// а)  выполняется ли неравенство a < b < c;
// б)  выполняется ли неравенство b > a > c === c < a < b;

function checkEquality(firstValue , secondValue, thirdValue) {   // // a) true/false
    return (firstValue < secondValue) && (secondValue < thirdValue) ? 'vewrno' : 'neverno';
}

function checkBackwardEquality(firstValue , secondValue, thirdValue) {   // // a) true/false
    return checkEquality(thirdValue, secondValue, firstValue);
}

var a, b, c;

var resultA = checkEquality(a, b, c);
const resultB = checkEquality(c, a, b);

console.log('Task A: ', resultA);
console.log('Task B: ', resultB);

window.resultA; // verno/neverno
window.resultB; // undefined

