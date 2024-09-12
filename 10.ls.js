const fs = require('node:fs');
const path = require('node:path');

// Podemos pasar el directorio como argumento
const folder = process.argv[2] ?? '.'; 

fs.readdir(folder, (err, files) => {
    if (err) {
        console.log('Error al leer el directorio', err);
    } else {
        for (let file of files) {
            console.log(file);
        }
    }
});