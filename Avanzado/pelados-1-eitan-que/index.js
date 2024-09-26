import readlineSync from "readline-sync";
import fs from "fs";

// Cargar archivos
let sabores = JSON.parse(fs.readFileSync("./data/sabores.json"));
let productos = JSON.parse(fs.readFileSync("./data/productos.json"));
let pedidos = JSON.parse(fs.readFileSync("./data/pedidos.json"));
let seguirPidiendo = true;
let productosPedido = [];

// Ingresar cliente
let cliente = readlineSync.question("¿Cuál es tu nombre?");
console.log(
  "Bienvenido heladería 'Los Pelados'! Estos son nuestros productos:"
);
for (let i = 0; i < productos.length; i++) {
  console.log(
    `${i + 1}) ${productos[i].nombre} $${productos[i].precio} (hasta ${
      productos[i].maxGustos
    } sabores)`
  );
}
while (seguirPidiendo) {
// Elegir producto
let productoIndex;
while (
  productoIndex === undefined ||
  productoIndex < 0 ||
  productoIndex >= productos.length
) {
  productoIndex =
    parseInt(
      readlineSync.question("¿Qué vas a pedir? Ingresa el número de opción:")
    ) - 1;
  if (productoIndex < 0 || productoIndex >= productos.length) {
    console.log("Lo siento, no entendí tu respuesta. Probá de nuevo");
  }
}

let producto = productos[productoIndex];
// Elegir cantidad de gustos
let gustos;
while (gustos === undefined || gustos < 1 || gustos > producto.maxGustos) {
  gustos = parseInt(readlineSync.question("¿Cuántos gustos vas a pedir?"));
  if (gustos < 1 || gustos > producto.maxGustos) {
    console.log(
      `Lo siento, solo puedes pedir entre 1 y ${producto.maxGustos} gustos. Probá de nuevo`
    );
  }
}
// Elegir sabores
let saboresElegidos = [];
console.log("Estos son nuestros sabores:");
for (let i = 0; i < sabores.length; i++) {
  console.log(`${i + 1}) ${sabores[i]}`);
}
for (let i = 0; i < gustos; i++) {
  let saborIndex;
  while (
    saborIndex === undefined ||
    saborIndex < 0 ||
    saborIndex >= sabores.length
  ) {
    saborIndex =
      parseInt(readlineSync.question("Ingresa el número de opción:")) - 1;
    if (saborIndex < 0 || saborIndex >= sabores.length) {
      console.log("Lo siento, no entendí tu respuesta. Probá de nuevo");
    }
  }
  console.log(`Elegiste ${sabores[saborIndex]}`);
  saboresElegidos.push(sabores[saborIndex]);
  // Guardar producto en el pedido
  productosPedido.push({
    producto: producto.nombre,
    sabores: saboresElegidos,
  });
  // Preguntar si quiere agregar otro producto
  seguirPidiendo =
    readlineSync.question("¿Quieres agregar otro producto? (s/n): ").toLowerCase() === "s";
}
}
// Guardar pedido
let pedido = {
  cliente: cliente,
  productos: productosPedido,
};

// Agregar pedido al array de pedidos
pedidos.push(pedido);

// Guardar pedidos en el archivo pedidos.json
fs.writeFileSync("./data/pedidos.json", JSON.stringify(pedidos, null, 2));

console.log("¡Pedido guardado exitosamente!");
