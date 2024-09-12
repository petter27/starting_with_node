const fs = require('node:fs/promises');
/** Si un modulo no posee promesas nativas se puede utilizar promisify 
 * para convertirlo y utilizarlo como promesas
 */
//const fs = require('node:fs');
//const { promisify } = require('node:util');
//const readFilePromise = promisify(fs.readFile);

console.log('Leyendo primer archivo...');
fs.readFile('archivo.txt', 'utf-8').then((texto) => {
    console.log(texto);
});
console.log('Hacer algo mientras se termina de leer...');

console.log('Leyendo segundo archivo...');
 fs.readFile('archivo2.txt', 'utf-8').then((texto2) => {
    console.log(texto2);
});
