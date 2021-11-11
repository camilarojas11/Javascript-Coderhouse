//Variables
let cantidad;
let opcion;

//Objeto Principal
class Producto {
    constructor(id, nombre, categoria, precio) {
        this.id = id;
        this.nombre = nombre;
        this.categoria = categoria;
        this.precio = precio;
    }
}

//Array de productos
const productos = [];

productos.push(new Producto(0, "Pizza Napotilana", "veggie", 660));
productos.push(new Producto(1, "Empanada de pollo", "no veggie", 130));
productos.push(new Producto(2, "Tarta de verduras p/porcion", "veggie", 180));
productos.push(new Producto(3, "Milanesa de carne c/ensalada", "no veggie", 480));
productos.push(new Producto(4, "Triple de J&Q", "no veggie", 105));
productos.push(new Producto(5, "Papas Fritas", "veggie", 200));

//Filter para comidas Veggie
const productosVeggie = productos.filter(comida => comida.categoria === "veggie");


//Se muestran los productos al usuario
const mostrarProductos = () => {
    let mensaje = "";

    if (opcion === 1) {
        for (const producto of productos) {
            mensaje += `id = ${producto.id}\nProducto: ${producto.nombre}\nCategoría: ${producto.categoria}\n Precio: $${producto.precio}\n\n`
        }
        return mensaje;

    } else if (opcion === 2) {
        for (const producto of productosVeggie) {
            mensaje += `id = ${producto.id}\nProducto: ${producto.nombre}\nCategoría: ${producto.categoria}\n Precio: $${producto.precio}\n\n`
        }
        return mensaje;

    }
}

//Comprar
const comprar = () => {
    const eleccionUsuario = Number(prompt(`Indique el n° del producto que quiere comprar`));
    const prodEncontrado = productos.find(producto => producto.id === eleccionUsuario);

    if (prodEncontrado) {
        cantidad = Number(prompt(`Cuantas unidades quiere comprar?`));
        let total = prodEncontrado.precio * cantidad;

        console.log(`Muchas gracias por tu compra! Has comprado ${cantidad} ${prodEncontrado.nombre} por un total de $${total}`);
    } else {
        alert(`Lo sentimos, el producto seleccionado no existe.`);
    }
}

//Saludo de bienvenida
const saludo = () => {
    let nombre = prompt(`Por favor ingrese su nombre`);
    alert(`Hola ${nombre}! Bienvenidx a La Tablita! La mejor rotisería de Paternal\n`);

    menuPrincipal();
}

//Menu principal
const menuPrincipal = () => {
    opcion = Number(prompt(`Qué te gustaría comer hoy?
    1. Ver el menú completo.
    2. Opción Veggie.
    3. Salir`));

    switch (opcion) {
        case 1:
            console.log(mostrarProductos());
            console.log(comprar());
            break;

        case 2:
            console.log(mostrarProductos());
            console.log(comprar());

        case 3:
            alert(`Gracias, vuelva pronto!`)
            break;

        default:
            alert(`Valor ingresado incorrecto. Intentelo nuevamente`);
            menuPrincipal();
            break;
    }

}

//Inicio de ejecución
saludo();