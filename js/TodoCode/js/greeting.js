var name = "Kyb3r";
var age = 17;
var presentOrNot= true;
var surname = "Cipher";
var height = 1.67;

// var is a type of variable, que sin importar donde declaremos vamos a poder acceder a ella en cualquier lugar (es una variable global).
/*
if (true) {
    var variable = "VARIABLE";
}
console.log(variable);
*/
// let is a type of variable, que solamente es accedida solo dentro de un bloque de codigo en particular, ya sea una funcion, un if-else.
/*
if (true) {
    let variable = "VARIABLE";
}
console.log(variable);
*/
// const viene de la palabra constante, es un tipo de variable que siempre es constate y se mantiene y una vez declarada no puede cambiar su valor.
const variable = "VARIABLE";
console.log(variable);


// const
//alert("Hello world with JavaScript " + name);
console.log("Name: " + name + " type = " + typeof(name));
console.log("Age: " + age + " type = " + typeof(age));
console.log("Present?: " + presentOrNot + " type = " + typeof(presentOrNot));
console.log("Surname: " + surname +  "type = " + typeof(surname));
console.log("Height: " + height + " type = " + typeof(height));
