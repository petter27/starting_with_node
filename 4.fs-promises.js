const fs = require('node:fs/promises');

console.log('Leyendo primer archivo...');
const text = fs.readFile('archivo.txt', 'utf-8').then((texto) => {
    console.log(texto);
});
console.log('Hacer algo mientras se termina de leer...');

console.log('Leyendo segundo archivo...');
const text2 = fs.readFile('archivo2.txt', 'utf-8').then((texto2) => {
    console.log(texto2);
});
