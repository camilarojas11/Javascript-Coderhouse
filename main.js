//Variables
let espacio = " ";
let nombre = "";
let apellido = "";
let añoNacimiento = 0;
let edad = 0;
let resultado = 0;

//Constante
const mensaje = ("Hola! Por favor completa los siguientes datos.");
const añoActual = 2021;


//Ingreso de datos del usuario
alert(mensaje);
nombre = prompt("Ingrese su nombre");
apellido = prompt("Ingrese su apellido");
añoNacimiento = parseInt(prompt("Por favor ingrese el año en que nació (Ejemplo: 1994)"));

//Proceso
edad = añoActual - añoNacimiento;

//Salida 
console.log("Hola" + espacio + nombre + espacio + apellido + "! Según mis cálculos, tenes" + espacio + edad + espacio + "años.");