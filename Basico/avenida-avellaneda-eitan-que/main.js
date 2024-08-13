let precio = 0;
let total = document.querySelector(".total")

document.getElementById("form").addEventListener("submit", function(event) {
  event.preventDefault();

  let producto = document.getElementById("selector").value;
  let cantidad = document.getElementById("cant").value;
  total.style.display = "block"

  if (producto === "pantalon") {
    precio = calcularPrecioTotal(cantidad, 1500, 1000, 3);
    total.innerHTML = `El precio total es de ${precio}p`;
  } else if (producto === "remera") {
    precio = calcularPrecioTotal(cantidad, 800, 600, 6);
    total.innerHTML = `El precio total es de ${precio}p`;
  } else if (producto === "medias") {
    precio = calcularPrecioTotal(cantidad, 300, 200, 12);
    total.innerHTML = `El precio total es de ${precio}p`;
  } else if (producto === "calzonzillo" || producto === "bombacha") {
    precio = calcularPrecioTotal(cantidad, 500, 350, 12);
    total.innerHTML = `El precio total es de ${precio}p`;
  }
});

function calcularPrecioTotal(cantidad, precioMinorista, precioMayorista, minUnidadesMayorista) {
  if (cantidad >= minUnidadesMayorista) {
    return precioMayorista*cantidad;
  } else {
    return precioMinorista*cantidad;
  };
};