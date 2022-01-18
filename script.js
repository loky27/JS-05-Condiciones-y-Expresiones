/*Ejercicio 1
Tienes una lista de nombres: var names = ["Maria", "Antony", "Joy", "Juan"]
Parte 1
Escriba una función para insertar un nombre al final de la lista. Agregue su propio nombre al final de la lista.
Parte 2
Escribe una función que tome un nombre y verifique si la lista tiene ese nombre. Debería devolver un booleano - verdadero/falso.
parte 3
Escribe una función que tome una lista de nombres. Esta función debería comparar la lista tomada en la nameslista que tiene actualmente. La función debe devolver una matriz con los nombres que están en ambas listas.
parte 4
Escriba una función que tome una lista de nombres y devuelva una lista de números enteros con la longitud de los nombres en el mismo orden en que se recibieron. Sugerencia para usar la función de empuje

*/var names = ["Maria", "Antony", "Joy", "Juan"];

const nam=(...name)=>{
     name.forEach(element =>
         {names.push(element)})
        }

const takesName=(array,...names)=>{
    names.forEach(
        element=>{
            console.log(array.indexOf(element) != -1?true:false)
       }

    )
}
const lengthTheNames=(array)=>{
    let leng=[]
    array.forEach(
        element=>{
            leng.push(element.length)
        }
    )
    return leng
}

//nam('jonathan')
///console.log(names)
//takesName(names,`jonathan`,'david','luis')
//var res=lengthTheNames(names)
//console.log(res)

/*
false || (true && false); false
true || (11 + 12); true 
(31 + 22) || true;  true
true && (1 + 7);  false 
false && (3 + 4);  false  
(1 + 2) && true;  false 
(32 * 4) >= 129; false
false !== !true; false 
true === 4; false 
false === (847 === '847'); true 
false === (887 == '887'); false  
(!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) || false; true
*/
const numberRange=(num)=>{
        
        if(0<=num && num <=25 ){
            return (`'${num} is between 0 and 25'`)
        }
        else if (26<=num && num<=100){
            return (`'${num} is between 26 and 100'`)
        }
        else if (100<num){
            return (`'${num} is greater than 100'`)
        }
        else if(num<0){
            return (`''${num} is less than 0''`)
        }

        
        
} 

console.log(numberRange(25));   // '25 is between 0 and 25'
console.log(numberRange(75));   // '75 is between 26 and 100'
console.log(numberRange(125));  // '125 is greater than 100'
console.log(numberRange(-25));  // '-25 is less than 0'

var a;
var b = null;
var c = undefined;
var d = 4;
var e = 'five';
var f = a || b || c || d || e;

console.log(f);