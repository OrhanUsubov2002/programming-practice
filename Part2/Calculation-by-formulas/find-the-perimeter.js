//Дана сторона квадрата. Найти его периметр

function getSide() {
    let side = +prompt("Введите стронону квадрата"); 
    return side; 
}

function calculatePerumetr(side) {
   
  let res =  side() * 4;
  alert(res);
}

calculatePerumetr(getSide); 