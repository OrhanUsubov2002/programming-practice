// Даны два целых числа. Найти:
// а) их среднее арифметическое;
// б) их среднее геометрическое.



//Вариант 1. 

//Среднее арифметическое
let average = function(firstValue , secondValue) {
    firstValue = +prompt("Внесите первое число");
    secondValue = +prompt("Внесите второе число");

    return (firstValue + secondValue) / 2
}; 

alert("Среднее арифметическое" + average()); 

//Среднее геометрическое 
let average = function(firstValue , secondValue) {
    firstValue = +prompt("Внесите первое число");
    secondValue = +prompt("Внесите второе число");
    let result = firstValue * secondValue; 
    return Math.sqrt(result); 
}; 
alert("Среднее геометрическое" + average()); 

//Вариант 2. 

function getNumber(firstValue , secondValue) {
  firstValue = +prompt("Внесите первое число");
  secondValue = +prompt("Внесите второе число");

  return {
        firstValue: firstValue,
        secondValue: secondValue
    }; 
}


function calc() {
    const result = getNumber();
    
    alert(result.firstValue); 
    alert(result.secondValue); 
}

calc(); 







