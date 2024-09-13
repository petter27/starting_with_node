const path = require('node:path');

const separador = path.sep;
console.log('seperador: ', separador);

const ruta = path.join(__dirname, 'archivo.txt');
console.log('ruta del archivo:', ruta);

// devuelve el nombre del archivo
const base = path.basename(ruta);
console.log('nombre del archivo:', base);

// nombre del archivo sin la extensión
const nombre = path.basename(ruta, '.txt');
console.log('nombre del archivo sin extensión:', nombre);

// devuelve la extensión del archivo
const ext = path.extname(ruta);
console.log('extensión del archivo:', ext);
