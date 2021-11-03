//Obtener el sueldo de un empleado a partir de los descuentos.

//Variable.
let sueldoBruto;
let obraSocial;
let jubilacion;
let sindicato;
let descuento;
let sueldoNeto;

//Constantes.
const porcObraSocial = 0.03;
const porcJubilacion = 0.11;
const porcSindicato = 0.01;

//Calculadora.
function multiplicar(x, y) {
    return x * y;
}

function resta(x, y) {
    return x - y;
}

function suma(x, y, z) {
    return x + y + z;
}

//Saludo.
function saludar() {
    nombre = prompt(`Por favor ingrese su nombre`);
    alert(`Hola ${nombre}!! Nos volvemos a ver.\nEn esta oportunidad, calcularemos tu sueldo neto`);

    datos();
}

//Ingreso de datos del usuario.
function datos() {
    sueldoBruto = Number(prompt(`Ingrese su sueldo bruto`));
    impuestos(sueldoBruto);
}

//Impuestos.
function impuestos(sueldoB) {
    obraSocial = multiplicar(sueldoB, porcObraSocial);
    jubilacion = multiplicar(sueldoB, porcJubilacion);
    sindicato = multiplicar(sueldoB, porcSindicato);

    descuento = suma(obraSocial, jubilacion, sindicato);
    sueldoN(sueldoB, descuento);
}

//Sueldo Neto.
function sueldoN(sueldoB, descuento) {
    let opcion;
    sueldoNeto = resta(sueldoB, descuento);

    alert(`Tu sueldo neto es de $ ${sueldoNeto}\n
Descuento Obra Social $ ${obraSocial}
Descuento Jubilación $ ${jubilacion}
Descuento Sindicato $ ${sindicato}`);

    opcion = Number(prompt(`Querés calcular otro sueldo?
1. Si
2. No`));

    if (opcion === 1) {
        datos();
    } else {
        document.write(`Gracias por participar :D`);
    }
}

//Ejecución del programa.
saludar();