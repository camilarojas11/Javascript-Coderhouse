//Desafio 2

//Variables
precioSinIva = 0.00;
totalIva = 0.00;
precioConIva = 0.00;

//Constante
const iva27 = 0.27;
const iva21 = 0.21;
const iva10 = 0.105;

//Ingreso de Datos
alert("Bienvenido! Usaremos este programa para calcular el IVA de un producto que usted elija. \nPor favor seleccione la opción deseada");
let opcion = parseInt(prompt(" 1. Consultar total con IVA del 27% \n 2. Consultar total con IVA del 21% \n 3. Consultar total con IVA del 10,5%"));

//Condicionales

if ((opcion != 1) && (opcion != 2) && (opcion != 3)){
    alert("En dato ingresado es invalido. Ingrese 1, 2 o 3 según lo que quiere consultar");
}

//IVA 27%
else if (opcion == 1){
    precioSinIva = parseFloat(prompt("Ingrese el importe del producto para calcular el IVA del 27%"));
    totalIva = (precioSinIva * iva27);
    precioConIva = (totalIva + precioSinIva);

    alert("El IVA es de $ " + totalIva + ". \nEl precio final a abonar con IVA es de $ " + precioConIva);
}

//IVA 21%
else if (opcion == 2){
    precioSinIva = parseFloat(prompt("Ingrese el importe del producto para calcular el IVA del 21%"));
    totalIva = (precioSinIva * iva21);
    precioConIva = (totalIva + precioSinIva);

    alert("El IVA es de $ " + totalIva + ". \nEl precio final a abonar con IVA es de $ " + precioConIva);
}

//IVA 10,5%
else{
    precioSinIva = parseFloat(prompt("Ingrese el importe del producto para calcular el IVA del 10,5%"));
    totalIva = (precioSinIva * iva10);
    precioConIva = (totalIva + precioSinIva);

    alert("El IVA es de $ " + totalIva + ". \nEl precio final a abonar con IVA es de $ " + precioConIva);
}