const num = prompt();
let result; 
switch (num) {
    case '1': {
        result = 'Зима';
        alert(result); 
    } break; 
    case '2':
        result = 'Весна'
        alert(result); 
        break;
    case '3':
        result = 'Лето'
        alert(result); 
        break;
    case '4':
        result = 'Осень'
        alert(result); 
        break;

    default:
        alert("Вы ввели неверно номер время ");
        break;

} 
