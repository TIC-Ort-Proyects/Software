function escribirValor(mensaje) {
  document.getElementById("valor").innerHTML = mensaje;
}

document.querySelector(".bandContainer").addEventListener("click", function(event) {
  let bandas = document.querySelectorAll(".band");
  let artista = "";

  bandas.forEach(band => {
    if (band.contains(event.target)) {
      artista = band.id;
    }
  });

  document.querySelectorAll(".selected").forEach(band => {
    band.classList.remove("selected");
  });

  if (artista) {
    document.getElementById(artista).classList.add("selected");

    if (artista === "taylor") {
      escribirValor("10000p");
    } else if (artista === "kgatlw") {
      escribirValor("7000p");
    } else if (artista === "dillom") {
      escribirValor("2000p");
    } else if (artista === "marilina") {
      escribirValor("1000p");
    } else if (artista === "winona") {
      escribirValor("750p");
    } else if (artista === "lali") {
      escribirValor("2250p");
    }
  }
});
