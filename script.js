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

class Maestro extends Ninja {
    constructor(nombre, salud, velocidad, fuerza) {
        super(nombre, salud, velocidad, fuerza)
        this.sabiduria = 10;
    }
    hablarDeSabiduria() {
        super.tomarSake();
        return `Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses.`;
    }
    mostrarEstadistica() {
        return `Estadisticas del Ninja / Nombre: ${this.nombre} Salud: ${this.salud} Velocidad: ${this.velocidad} Fuerza: ${this.fuerza} Sabiduria: ${this.sabiduria}`;
    }
}

const superSensei = new Maestro("Maestro Splinter", 200, 10, 10);

console.log(superSensei.hablarDeSabiduria());
console.log(superSensei.mostrarEstadistica());