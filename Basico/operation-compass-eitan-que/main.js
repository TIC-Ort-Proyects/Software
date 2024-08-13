const letras = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "ñ",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

function cifrar(palabra, clave) {
  let palabraCifrada = "";
  for (let i = 0; i < palabra.length; i++) {
    let letra = palabra[i];
    let posicion = letras.indexOf(letra);
    if (posicion === -1) {
      palabraCifrada += letra;
    } else {
      let nuevaPosicion = (posicion + clave) % letras.length;
      if (nuevaPosicion < 0) {
        nuevaPosicion = letras.length + nuevaPosicion;
      }
      palabraCifrada += letras[nuevaPosicion];
    }
  }
  return palabraCifrada;
}

function descifrar(palabra, clave) {
  return cifrar(palabra, -clave);
}

document.getElementById("descifrar").addEventListener("click", function() {
  const msj = document.getElementById("mensaje").value;
  console.log(msj)
  const mensajesDescifrados = document.getElementById("mensajesDescifrados");
  mensajesDescifrados.innerHTML = '';

  for (let clave = 0; clave < 27; clave++) {
    const mensajeDescifrado = cifrar(msj, clave);
    console.log(mensajeDescifrado)
    const li = document.createElement("li");
    li.textContent = `Clave ${clave}: ${mensajeDescifrado}`;
    mensajesDescifrados.appendChild(li);
  };
});