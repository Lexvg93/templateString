//  `cadena de texto ${expresion} texto`
//tag `cadena de texto ${expresion} texto`

//Cadenas de mas de una linea
//ES5
console.log("Hola, \n\
caracola");

console.log(`Agur,
yogur`);

//Interpolar expresiones
let num1=2;
let num2=4;
//ES5
console.log("La suma es "+(num1+num2)+ "\ny la resta es "+(num1-num2)+".");
//ES6
console.log(`La suma es ${num1 + num2}
y la resta es ${num1 - num2}.`);