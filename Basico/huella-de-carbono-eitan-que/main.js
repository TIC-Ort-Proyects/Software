document.getElementById("calcular").addEventListener("click", function(event) {
  event.preventDefault();

  let km = document.getElementById("inputKM").value;
  let medioDeTransporte = document.getElementById("inputMedioDeTransporte").value;
  let CO2 = calcularCO2(km, medioDeTransporte);

  if (CO2 !== undefined) {
      oculatrContenido();
      const emicionDiv = document.createElement("div");
      emicionDiv.classList.add("emicionDivAlert");
      emicionDiv.innerHTML = `
        <span class="sub">Cantidad de gCO2 generado por los Km recorridos son:</span>
        <span class="titl">${CO2}gCO2</span>
        <input type="button" value="Aceptar" id="aceptar" class="inputbtn">
      `;

      document.querySelector("body").appendChild(emicionDiv);

      document.getElementById("aceptar").addEventListener("click", function() {
          emicionDiv.remove();
          mostrarContenido();
      });
  } else {
      alert("Por favor, seleccione un medio de transporte válido.");
  }
});

function calcularCO2(km, medioDeTransporte) {
  km = parseFloat(km);
  if (!isNaN(km)) {
    if (medioDeTransporte === "0") {
      return km * 254;
    } else if (medioDeTransporte === "1") {
      return km * 195;
    } else if (medioDeTransporte === "2") {
      return km * 171;
    } else if (medioDeTransporte === "3") {
      return km * 104;
    } else if (medioDeTransporte === "4") {
      return km * 43;
    } else if (medioDeTransporte === "5") {
      return km * 41;
    } else if (medioDeTransporte === "6") {
      return km * 27;
    } else if (medioDeTransporte === "7") {
      return km * 6;
    } else {
      return undefined;
    }
  }
  return undefined;
};

function oculatrContenido() {
  const contenido = document.querySelectorAll(".content");
  contenido.forEach(element => {
    element.classList.add("hideOnClick");
  });
};

function mostrarContenido() {
  const contenido = document.querySelectorAll(".content");
  contenido.forEach(element => {
    element.classList.remove("hideOnClick");
  });
};