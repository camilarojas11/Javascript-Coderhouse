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

let menu = document.querySelector(".menu")

for (let i = 0; i < productos.length; i++) {

    menu.innerHTML += `
    <section>
    <h3>${productos[i].nombre}</h3>
    <p> Opción ${productos[i].categoria}</p>
    <p> Precio: $ ${productos[i].precio}</p>
    <input type="number" name="cantidad" placeholder="Ingrese cantidad" required> <br>
    <input type="submit" value="Comprar" class= "btn-compra">
    </section>`
}