const deadpool = {
    nombre:"Wade",
    apellido:"Windston",
    poder:"Regeneración",
    edad : 50,
    getNombre(){
        return `${this.nombre} ${this.apellido}`
    }

} 
//objeto deadpool
/*const nombre = deadpool.nombre;
const apellido = deadpool.apellido;
const poder = deadpool.poder*/

//destructuración de un objeto
const {nombre, apellido, poder, edad} = deadpool;
console.log(nombre, apellido, poder, edad);
