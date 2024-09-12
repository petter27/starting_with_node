const fs = require('node:fs');
const path = require('node:path');

fs.readdir('.', (err, files) => {
    if (err) {
        console.log('Error al leer el directorio', err);
    } else {
        for (let file of files) {
            let basename = path.basename(file);
            let ext = path.extname(file);
            let size = (fs.statSync(file).size/1024).toFixed(2) +'KB';
            console.log(basename, ext, size);
        }
    }
});