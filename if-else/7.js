const name_ = prompt("Введите имя"); 
const surname = prompt("Фамилию");
const fatherName = prompt("По отцовском");
if (name_ && surname && fatherName) {
    alert(`${name_} ${surname} ${fatherName}`)
}else {
    alert("Вы не ввели имя"); 
}