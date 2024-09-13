// sincrono
const fs = require('node:fs');

console.log('Leyendo primer archivo...');
const texto = fs.readFileSync('archivo.txt', 'utf-8');
console.log(texto);

console.log('Hacer algo mientras se termina de leer...');

console.log('Leyendo segundo archivo...');
const text2 = fs.readFileSync('archivo2.txt', 'utf-8');

console.log(text2);
