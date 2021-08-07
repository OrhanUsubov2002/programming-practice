document.write((null == undefined) + '<br>');    // true
  document.write((NaN == NaN) + '<br>');         // false
  document.write((NaN != NaN) + '<br>');         // true 
  document.write((false == 0) + '<br>');         // true
  document.write((true == 1) + '<br>');          // true
  document.write(("1" == true) + '<br>');        // true
  document.write(("" == false) + '<br>');        // true
  document.write((undefined == 0) + '<br>');     // false
  document.write((null == 0) + '<br>');          // false

  document.write((null === undefined) + '<br>'); // false
  document.write((NaN === NaN) + '<br>');        // false
  document.write((NaN !== NaN) + '<br>');        // true
  document.write((false === 0) + '<br>');        // false 
  document.write((true === 1) + '<br>');         // false
  document.write(("1" === true) + '<br>');       // false
  document.write(("" !== false) + '<br>');       // true
  document.write((undefined !== 0) + '<br>');    // true
  document.write((null === 0) + '<br>');         //false

alert(4 != 3);              // true
alert("4" != 4);            // false
alert("4" !== 4);           // true
alert(null == undefined);   // true
alert("123" == 123);        // true
alert(true == "1");         // true
alert(4 == 5);              //  false