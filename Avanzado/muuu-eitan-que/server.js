import fs from "fs";
import { startServer, onEvent } from "soquetic";

let provincias = JSON.parse(fs.readFileSync("./data/provincias.json"));
let departamentos = JSON.parse(fs.readFileSync("./data/departamentos.json"));
let vacas = JSON.parse(fs.readFileSync("./data/vacas.json"));

onEvent("provinciasYDepartamentos", () => {
    return { provincias, departamentos }
});

onEvent("datosBovinos", (data) => {
    let i
    vacas.forEach(vaca => {
        if (data.provincia === vaca.provincia_id && data.departamento === vaca.departamento_id && data.año === vaca.año) {
            i = vaca[data.bovino];
        }
    });
    return i
})

onEvent("datosAñoProvincia", (data) => {
    let i = []
    vacas.forEach(vaca => {
        if (data.provincia === vaca.provincia_id && data.año === vaca.año) {
            i.push(vaca)
        }
    });
    return i
})

onEvent("variacionPorProvincia", () => {
    let i = []
    let variacion
    if (porcentaje2013 === 0 && porcentaje2019 > 0) {
        variacion = 100
    } if (porcentaje2013 === 0 && porcentaje2019 === 0) {
        variacion = 0
    } else {
        variacion = ((porcentaje2019 - porcentaje2013) / porcentaje2013) * 100
    }
})

startServer();