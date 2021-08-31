//Дан радиус окружности. Найти ее диаметр.

function getRadius() {
    let radius = prompt("Введите радиус в см.");
    if(Number(radius)) {
        return radius; 
    } else {
        alert("Вы ввели неправильно значения радиуса"); 
    }
}

function calculateDiametr(radius) {
    let setRadis = radius(); 
    let result = setRadis * 2;
     return result; 
}

function showDiametr(calculateDiametr, resultDiametr) {
    let setDiametr = calculateDiametr(resultDiametr);

    alert(`Result diametr ${setDiametr}`); 
}


showDiametr(calculateDiametr, getRadius); 


//Хотел написать функцию call-back с отдельной функцией для вывода , но что-то не получается. 