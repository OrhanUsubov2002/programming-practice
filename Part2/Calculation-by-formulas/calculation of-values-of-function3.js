//Составить программу вычисления значения функции (a**2+10)/(Math.sqrt(a**2+1))  при любом значении а; 

function calculateFunction () {
    let valuesA = +prompt("Введите значения a");
    let result = (valuesA**2 + 10)/(Math.sqrt(valuesA ** 2+1))
    return result;
}

  
alert(calculateFunction());