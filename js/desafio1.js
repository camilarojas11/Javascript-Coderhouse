//Variables
let añoNacimiento = 0;
let edad = 0;
let resultado = 0;

//Constante
const añoActual = 2021;


//Ingreso de datos del usuario
alert("Hola! Por favor completa los siguientes datos.");
let nombre = prompt("Ingrese su nombre");
let apellido = prompt("Ingrese su apellido");
añoNacimiento = parseInt(prompt("Por favor ingrese el año en que nació (Ejemplo: 1994)"));

//Proceso
edad = añoActual - añoNacimiento;

//Salida 
console.log("Hola" + " "+ nombre + " " + apellido + "! Según mis cálculos, tenes" + " " + edad + " " + "años.");