// import { totalmem, freemem, type, platform, arch, release, userInfo, cpus, uptime } from 'node:os';
import os from 'node:os';

console.log('Información del sistema operativo: ');
console.log('Memoria total: ' + os.totalmem() + ' bytes.');
console.log('Memoria libre: ' + os.freemem() + ' bytes.');
console.log('Sistema operativo: ' + os.type());
console.log('Plataforma: ' + os.platform());
console.log('Arquitectura: ' + os.arch());
console.log('Versión: ' + os.release());
console.log('Usuario del sistema: ' + os.userInfo().username);
console.log('CPUs :' + os.cpus().length);
console.log('Tiempo activo del sistema: ' + os.uptime() + ' segundos.');
