import { readFile } from 'node:fs/promises';

console.log('Leyendo primer archivo...');
const text = await readFile('archivo.txt', 'utf-8');
console.log(text);
console.log('Hacer algo mientras se termina de leer...');

console.log('Leyendo segundo archivo...');
const text2 = await readFile('archivo2.txt', 'utf-8');
console.log(text2);
