//Variables
valor = 0;
suma = 0;
opcion = 0;

//Bucle principal
while (opcion != 2) {
    //Inicializo nuevamente las variables en caso de entrar nuevamente al while.
    valor = 0;
    suma = 0;
    opcion = 0;

    //Mensaje
    alert("Hola! Se viene el día de la madre y tres hermanxs no se deciden en qué regalarle. Por lo tanto, comprarán una caja sorpresa según el monto recaudado. Las cajas tienen diferentes costos, desde $1000 hasta los $7000. El contenido será revelado una vez realicemos la compra.")

    //Ciclo for para la sumatoria
    for (let i = 1; i <= 3; i++) {
        valor = Number(prompt(`Ingrese el monto que aporta el ${i} hermanx`));
        suma = suma + valor;
    }

    //Se muestra el total recaudado.
    alert(`El monto total para comprar el box es $${suma}`);

    //Condicional para conseguir un regalo
    if (suma >= 1000) {
        alert("Muy bien! Ahora según lo recaudado compramos...");

        if ((suma >= 1000) && (suma <= 1999)) {
            alert(`Felicidades! Compraron Ramo de rosas + una caja de bombones.\n
        ¡Muchas gracias por su compra!\n
        Su vuelto es de $ ${suma - 1000}`);

        } else if ((suma >= 2000) && (suma <= 4999)) {
            alert(`Felicidades! Compraron Un Box Desayuno Completo.\n
        ¡Muchas gracias por su compra!\n
        Su vuelto es de $ ${suma - 2000}`);

        } else if ((suma >= 5000) && (suma <= 6999)) {
            alert(`Felicidades! Compraron un par de Zapatos.\n
        ¡Muchas gracias por su compra!\n
        Su vuelto es de $ ${suma - 5000}`);

        } else if (suma >= 7000) {
            alert(`Felicidades! Compraron una Gift Card para un día completo en Spa/Estética.\n
        ¡Muchas gracias por su compra!\n
        Su vuelto es de $ ${suma - 7000}`);

        } else {}

    } else {
        alert("Bueno... no nos alcanzó para comprar un regalo... pero lo importante es la intención :)")
    }

    //Validación para jugar nuevamente.
    while ((opcion < 1) || (opcion > 2)) {
        opcion = Number(prompt(`¿Querés intentar otra vez?\n
        1. Si
        2. No`));

        if ((opcion < 1) || (opcion > 2)) {
            alert("Valor ingresado incorrecto. Por favor elija la opción 1 o 2");
        }
    }

}
document.write(`Muchas gracias por jugar! Esto está basado en un hecho real jajaja :)`);