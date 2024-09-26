import { ifError } from "assert";
import fs from "fs";
import { startServer, onEvent } from "soquetic";

let sabores = JSON.parse(fs.readFileSync("./data/sabores.json"));
let productos = JSON.parse(fs.readFileSync("./data/productos.json"));
let pedidos = JSON.parse(fs.readFileSync("./data/pedidos.json"));

onEvent("productos", () => {
    return productos
})
onEvent("sabores", () => {
    return sabores
})
onEvent("pedido", (data) => {
    pedidos.push(data);
    fs.writeFileSync("./data/pedidos.json", JSON.stringify(pedidos, null, 2));
    if (data) {
        return {ok:true}
    } else {
        return {ok:false}
    }
})

startServer();