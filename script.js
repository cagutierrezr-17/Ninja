class Ninja {
    constructor(nombre, salud, velocidad, fuerza) {
        this.nombre = nombre;
        this.salud = salud;
        this.velocidad = velocidad;
        this.fuerza = fuerza;
    }
    decirNombre() {
        return `El nombre del ninja es ${this.nombre}`
    }

    mostrarEstadistica() {
        return `Estadisticas del Ninja / Nombre: ${this.nombre} Fuerza: ${this.fuerza} Velocidad: ${this.velocidad} Salud ${this.salud}`
    }

    tomarSake() {
        this.salud += 10;
        return `Que rico Sake me hace sentir ${this.salud} veces mas saludable`
    }

}

const nameNinja = new Ninja("Hyabusa")
const mostrarEstadistica = new Ninja("Hyabusa", 0, 3, 3)



console.log(nameNinja.decirNombre());
console.log(mostrarEstadistica.mostrarEstadistica());
console.log(mostrarEstadistica.tomarSake());