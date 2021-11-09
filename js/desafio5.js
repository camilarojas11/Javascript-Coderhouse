class Productos {
    constructor(nombre, categoria, cantidad, precio) {
        this.nombre = nombre;
        this.categoria = categoria;
        this.cantidad = cantidad;
        this.precio = precio;
    }

    unidades() {
        while (this.cantidad <= 0 || isNaN(this.cantidad)) {
            if (this.cantidad <=0) {
                this.cantidad = Number(prompt(`El producto elegido debe ser mayor a 0`));
            } else {
                this.cantidad = Number(prompt(`Debe ingresar un número`));
            }
        }
    }

    compra() {
        let total = this.cantidad * this.precio;
        alert(`Muchas gracias por su compra! El total es $ ${total}`)
    }
}


unidades = Number(prompt(`Cuantas unidades de quiere adquirir?`));
const producto1 = new Productos("agua", "bebidas", unidades, 120);

producto1.unidades();
producto1.compra();