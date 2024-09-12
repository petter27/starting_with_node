//process
console.log(process.argv);

// controlar la salida de un proceso y liberar recursos
process.on('exit', function() {
    console.log('Saliendo del proceso');
});

// current working directory // desde donde se ejecuta el script
console.log(process.cwd());

// variables de entorno
console.log(process.env.NODE_ENV);

// salir del proceso 0: exito,  1: error
process.exit(0);

