// asincrono secuencial con async-await
const { readFile } = require('node:fs/promises');

async function init () {
  console.log('Leyendo primer archivo...');
  const text = await readFile('archivo.txt', 'utf-8');
  console.log(text);
  console.log('Hacer algo mientras se termina de leer...');

  console.log('Leyendo segundo archivo...');
  const text2 = await readFile('archivo2.txt', 'utf-8');
  console.log(text2);
}

init();

// IIFE (Immediately Invoked Function Expression)
/*
(
    async () => {

        console.log('Leyendo primer archivo...');
        const text = await readFile('archivo.txt', 'utf-8');
        console.log(text);
        console.log('Hacer algo mientras se termina de leer...');

        console.log('Leyendo segundo archivo...');
        const text2 = await readFile('archivo2.txt', 'utf-8');
        console.log(text2);
    }
)();
*/
