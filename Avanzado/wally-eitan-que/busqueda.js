import fs from "fs";

export function generarEspacio(n) {
  const names = fs
    .readFileSync("nombres.txt", "utf-8")
    .split("\n")
    .map((name) => name.trim());
  const espacio = [];
  for (let i = 0; i < n; i++) {
    espacio.push(names[Math.floor(Math.random() * names.length)]);
  }
  // Sacar Wallys si hay más de uno
  while (espacio.filter((name) => name === "Wally").length > 1) {
    const index = espacio.indexOf("Wally");
    espacio[index] = names[Math.floor(Math.random() * names.length)];
  }
  // Poner un Wally si no hay ninguno
  if (espacio.filter((name) => name === "Wally").length === 0) {
    const index = Math.floor(Math.random() * espacio.length);
    espacio[index] = "Wally";
  }
  return espacio;
}
