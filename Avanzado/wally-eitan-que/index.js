import { generarEspacio } from "./busqueda.js"
const nombres = generarEspacio(100);
nombres.forEach((nombre, index) => {
    if (nombre[0] == "W" || nombre.includes("ll")) {
        console.log(`${index}: ${nombre}`)
    }
});