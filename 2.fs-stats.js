const fs = require('node:fs');

const stats = fs.statSync('archivo.txt');
console.log('Información del archivo: ');
console.log('Nombre: archivo.txt');
console.log('Tamaño: ' + stats.size + ' bytes.');
console.log('Es un archivo: ' + stats.isFile());
console.log('Es un directorio: ' + stats.isDirectory());