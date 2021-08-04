alert( true + "test" );  //truetest , в выражении есть строка , поэтому бинарный плюс сложит два операнда в строку одну 
alert( +"123" );// NaN , так как строка не может быть приведена к числу          
alert( !!"0" ); // false , !! тоже самое что и Boolean("0"). 

document.writeln(Number(null))                 // 0  - null при численном преобразовании дает 0
document.writeln("<br>" + Number(undefined))   // NaN - underfind при численном преобразовании будет NaN
document.writeln("<br>" + Number(true))        // 1  - true преобразовуется в 1 
document.writeln("<br>" + Number(false))       // 0 - false преобразовуется в 0 
document.writeln("<br>" + Number(" 77 \t"))    // 77 - число 
document.writeln("<br>" + Number("-77.7"))     // -77.7 - число 
document.writeln("<br>" + Number("\n"))        // 0 - строка пустая вернет результат 0 
document.writeln("<br>" + Number(" 12x "))     // NaN - строка имеет не только символы 
document.writeln("<br>" + Number(123))         // 123 - число 


document.writeln(+'123' + "<br>");           // "123"
document.writeln((123 != '456') + "<br>");   // "true"
document.writeln((4 > '5') + "<br>");        // "false"
document.writeln((5/null) + "<br>");         // Infinity
document.writeln((true | 0) + "<br>");       // true
document.writeln(("5" + 6) + "<br>");        // "56"
document.writeln("a" == "b");                // false



document.writeln(Boolean(''))                    //
document.writeln('<br>' + Boolean(0))            // false
document.writeln('<br>' + Boolean(-0))           // false
document.writeln('<br>' + Boolean(NaN))          // false 
document.writeln('<br>' + Boolean(null))         // false
document.writeln('<br>' + Boolean(undefined))    // false
document.writeln('<br>' + Boolean(false))        // false



true + false        // 1 При численном преоьразовании будет true =1 , false = 0; 
8 / "2"             // 4 - автоматически преобразует к числу строку "2"
"number" + 5 + 1    // "number51" - Выполняется слева направо выражения , поэтому 5+1 = 51; 
5 + 1 + "number"    // "6number" Операторы выполняются слева направо поэтому сначал выполнится (5+1) потом сложит как строку с "Number"
7 && 2              // 2 Два выражения true , вернет последнее правильное 
2 && 7              // 7 Два выражения true , вернет последнее правильное 
null + 1            // 1 null = 0;  
undefined + 1       // NaN  underfind = NaN; 
"five" + + "two"    // "fiveNaN"   two преобразуется в NaN и сложится из строкой "five"
'true' == true      // false  'true' преобразуется в NaN a true в 1 
false == 'false'    // false  'false'= NaN 
null == ''          // false  null равен только underfind
!!"false" == !!"true"//true   "false" преобразуется в true  и true в true,так как строки не пустые ;
"4" - 3             // 1 
"4px" - 3           // NaN  "4px" - Попытка преобразовать в число приведете к NaN
0 || "0" && 1       // 1 





Number('123')   //  123
+'123'          //  123
123 != '456'    //  true 
4 > '5'         //  false
5/null          // infinity
true | 0        //true  



Number(null)          // 0    
Number(undefined)     // NaN        
Number(true)          // 1      
Number(false)         // 0         
Number(" 12 ")        // 12        
Number("-12.34")      // -12.34       
Number("\n")          // 0        
Number(" 12s ")       // NaN       
Number(123)           // 123       





