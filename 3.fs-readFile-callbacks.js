const fs = require('node:fs');

console.log('Leyendo primer archivo...');
// eslint-disable-next-line n/handle-callback-err
fs.readFile('archivo.txt', 'utf-8', (err, texto) => {
  console.log(texto);
});
console.log('Hacer algo mientras se termina de leer...');

console.log('Leyendo segundo archivo...');
// eslint-disable-next-line n/handle-callback-err
fs.readFile('archivo2.txt', 'utf-8', (err, texto2) => {
  console.log(texto2);
});
