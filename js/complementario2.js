const numeros = [];

for (let i = 1; i < 6; i++) {
    numeros.push(Number(prompt(`Ordenar 5 números de mayor a menor. Ingrese el ${i} número.`)));
}

numeros.sort((a,b) => a - b);
console.log(numeros);

