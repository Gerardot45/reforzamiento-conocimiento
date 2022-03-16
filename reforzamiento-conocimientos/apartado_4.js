//Lo necesario para los yargs
const fs = require('fs'); //nos permite interactuar con los archivos del sistema-
const base = 5;
let salida = '';

for(let i=1; i<=10; i++){
     salida += `${base} * ${i} = ${base*i}\n`; //esto nos da un salto de línea por cada iteración
}

fs.writeFile(`tabla-${base}.txt`, salida, (err) =>{
    if (err) throw err;
    console.log(`tabla-${base} creada`);
});

