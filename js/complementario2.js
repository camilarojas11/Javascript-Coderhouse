const numeros = [];

for (let i = 1; i < 6; i++) {
    numeros.push(Number(prompt(`Ordenar 5 números de mayor a menor. Ingrese el ${i} número.`)));
}

numeros.sort((a,b) => a - b);
console.log(numeros);


class Persona {
    constructor (nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }
}

const personas = [];
personas.push(new Persona("Camila", 27));
personas.push(new Persona("Micaela", 27));
personas.push(new Persona("Lucia", 26));
personas.push(new Persona("Daiana", 25));
personas.push(new Persona("Karen", 27));
personas.push(new Persona("Mariana", 35));
personas.push(new Persona("Sofía", 29));
personas.push(new Persona("Yamila", 28));

alert(`Vamos a ordenar a las personas según su edad, de menor a mayor.`)

personas.sort((a, b) => {
    if (a.edad < b.edad) {
        return -1;
    }

    if (a.edad > b.edad) {
        return 1
    }

    return 0;
});

console.log(personas);