"use strict"; 

const LOGIN = "Админ"; 
const PASSWORD_FOR_LOGIN = "Я Главный"; 

const currentUser = prompt("Кто?"); 

if (currentUser === LOGIN) {
  const passwordUSer = prompt("Введите пароль"); 
  
  if (passwordUSer === PASSWORD_FOR_LOGIN) {
    alert("Здравствуйте"); 
  } else if (passwordUSer == null || passwordUSer == "") {
    alert("Отменено"); 
  } else {
    alert("Я вас не знаю"); 
  }
} else if (currentUser == null || currentUser == "" ) {
  alert("Отменено"); 
} else { 
  alert("Я вас не знаю"); 
}
  