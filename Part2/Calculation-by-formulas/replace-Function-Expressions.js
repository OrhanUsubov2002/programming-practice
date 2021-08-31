// Перепишите с использованием функции-стрелки
// Замените код Function Expression стрелочной функцией


// function ask(question, yes, no) {   // //Вариант1
//     confirm(question) ? yes() : no();
// }
  
//   ask(
//     "Вы согласны?",
//     () => alert("Вы согласились."),
//     () => alert("Вы отменили выполнение.")
//   );



// function ask(question, yes, no) {   // Вариант2
//   if (confirm(question)) yes()
//   else no();
// }
// let qstn = "Вы согласны?"; 
// let yes = () => alert("Вы согласились.");
// let no = () => alert("Вы отменили выполнение.");
// ask(qstn , yes , no); 


function ask(question = "Вы согласны?") {  //Вариант3
  if (confirm(question)) {
    alert("Вы согласились.");
  } else {
    alert("Вы отменили выполнение.");
  } 
}

ask(); 
ask('Are you okey?');
