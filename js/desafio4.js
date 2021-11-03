//Variable
let elegir;

//Constantes
const agua = 120;
const arroz = 80;
const papel = 138;
const mayonesa = 125.40;
const shampoo = 163;

//Saludo Inicial
function saludo() {
    let nombre = prompt(`Por favor ingrese su nombre`);
    alert(`Hola ${nombre}! Bienvenidx a La Tablita! Tu almacén de confianza\n`);

    menu();
}

//Menu Principal
function menu() {

    opcion = Number(prompt(`¿Que necesitas en el día de hoy?
    1. Agua 1.5l $${agua}.
    2. Arroz 500gr $${arroz}.
    3. Papel Higiénico $${papel}.
    4. Mayonesa $${mayonesa}.
    5. Shampoo Dove 250ml $${shampoo}`));

    eleccion(opcion);
}

//Funcion para multiplicar
function multiplicar(x, y) {
    return x * y;
}

//Funcion para restar
function resta(x, y) {
    return x - y;
}

//Switch para los productos
function eleccion(compra) {
    let subtotal = 0;

    switch (compra) {
        case 1:
            cantidad = Number(prompt(`Cuantas unidades de Agua?`));
            subtotal = multiplicar(agua, cantidad);
            break;

        case 2:
            cantidad = Number(prompt(`Cuantas unidades de Arroz?`));
            subtotal = multiplicar(arroz, cantidad);
            break;

        case 3:
            cantidad = Number(prompt(`Cuantas unidades de Papel Higiénico?`));
            subtotal = multiplicar(papel, cantidad);
            break;

        case 4:
            cantidad = Number(prompt(`Cuantas unidades de Mayonesa?`));
            subtotal = multiplicar(mayonesa, cantidad);
            break;

        case 5:
            cantidad = Number(prompt(`Cuantas unidades Shampoo Dove?`));
            subtotal = multiplicar(shampoo, cantidad);
            break;

        default:
            alert(`La opción ingresada no es valida`);
            break;
    }

    alert(`El subtotal es de $ ${subtotal}`);

    pago(subtotal);
}

//Función para abonar
function pago(subtotal) {
    let vuelto;
    efectivo = Number(prompt(`Ingrese el monto con el que abonará la compra`));

    while (efectivo < subtotal) {
        efectivo = Number(prompt(`Monto ingresado incorrecto. El monto no puede ser menor que el subtotal.`))
    }

    vuelto = resta(efectivo, subtotal);
    alert(`Muchas gracias por su compra. Su vuelto es de $ ${vuelto}`);

    elegir = Number(prompt(`Querés realizar otra compra?
    1. Si
    2. No`));

    if (elegir === 1) {
        menu();
    } else {
        document.write(`Muchas gracias por participar! Que tengas un lindo día :)`);
    }
}

//Ejecución del programa
saludo();