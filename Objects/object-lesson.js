// Обьект 

let user = new Object(); // синтаксис "конструктор объекта"
let user = {};  // синтаксис "литерал объекта"

let user = {
    userName: "Usubov",  // 1 свойство ключ значения (userName - ключ(имя свойства) ,"Usubov"- значения)
    age: 19,             // 2 свойство.
}


// получаем свойства объекта: 
alert( user.name ); // John
alert( user.age ); // 30

//Значения может быть любого типа. Добавления свойства. 
user.isAdmin = true; 

//Для удаления свойства мы можем использовать оператор delete:
delete user.age;

//Имя свойства может состоять из нескольких слов, но тогда оно должно быть заключено в кавычки:
let user = {
    name: "John",
    age: 30,
    "likes birds": true  // имя свойства из нескольких слов должно быть в кавычках
  };

  
  //Объект, объявленный через const, может быть изменён.
  
  const user = {
    name: "John"
  };
  
  user.name = "Pete"; // (*)
  
  alert(user.name); // Pete

  //Целочисленные свойства идут по-порядку , а  не целоцисленные идут по-порядку создания. 
  // не целочисленные свойства перечислены в порядке создания 

  let user = {
    name: "John",
    age: 30,
    isAdmin: true
  };
  
  for (let key in user) {
    // ключи
    alert( key );  // name, age, isAdmin
    // значения ключей
    alert( user[key] ); // John, 30, true
  }