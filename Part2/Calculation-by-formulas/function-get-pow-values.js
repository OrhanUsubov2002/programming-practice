// Напишите функцию pow(x,n), которая возвращает x в степени n.
//  Иначе говоря, умножает x на себя n раз и возвращает результат.
    //Solid
    // Function Scope:
    // - parameters
    // - internal variables
    // - reference to outer scope

function getTwoNumber() {
  const value = +prompt("Введите число x");
  const degree = +prompt("Введите степень n");

  let result = 1; 

  for (let a = 0; a < degree; a++) {
    result *= value; 
  }

  return result;   
}

const variable = 'bla bla bla';

function showPow() {
  const res = getTwoNumber();

  console.log(variable);

  alert(res);  
}

showPow(); 