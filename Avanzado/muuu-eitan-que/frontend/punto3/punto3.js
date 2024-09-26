const datosTbody = document.getElementById("datos");

function assignClass(value) {
  return value > 0 ? "grow" : value < 0 ? "shrink" : "";
}

fetchData("variacionPorProvincia", (datos) => {
  datos.forEach((element) => {
    let tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${element.nombre}</td>
      <td class="${assignClass(element.vacas)}">${element.vacas}%</td>
      <td class="${assignClass(element.vaquillonas)}">${
      element.vaquillonas
    }%</td>
      <td class="${assignClass(element.novillos)}">${element.novillos}%</td>
      <td class="${assignClass(element.novillitos)}">${element.novillitos}%</td>
      <td class="${assignClass(element.terneros)}">${element.terneros}%</td>
      <td class="${assignClass(element.terneras)}">${element.terneras}%</td>
      <td class="${assignClass(element.toros)}">${element.toros}%</td>
      <td class="${assignClass(element.toritos)}">${element.toritos}%</td>
      <td class="${assignClass(element.bueyes)}">${element.bueyes}%</td>
    `;
    datosTbody.appendChild(tr);
  });
});
