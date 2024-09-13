const fs = require('node:fs/promises');
const path = require('node:path');
const pc = require('picocolors');

// Podemos pasar el directorio como argumento
const folder = process.argv[2] ?? '.'; 

async function listFiles(directory) {
    let files;
    try{
         files = await fs.readdir(directory);
    }catch(err){
        console.error(pc.bgRed(`No se pudo leer el directorio: ${directory}`));
        process.exit(1);
    }

    const filesPromises = files.map(async (file) => {
        const filePath = path.join(directory, file);

        let stats;
        try{
            stats = await fs.stat(filePath);
        }catch(err){
            console.error(`No se pudo leer el archivo: ${filePath}`);
            process.exit(1);
        }

        const isDirectory = stats.isDirectory();
        const fileType = isDirectory ? 'DIR' : 'FILE';
        const fileSize = stats.size.toString();
        const fileModified = stats.mtime.toLocaleString();
    
        return `${pc.blue(fileType.padEnd(5))} | ${pc.green(file.padEnd(30))} | ${pc.yellow(fileSize.toString().padStart(10))} | ${pc.underline(fileModified)}`;

    })

    const filesInfo = await Promise.all(filesPromises)
    filesInfo.forEach((file) => {
        console.log(file);
    });
}

listFiles(folder);