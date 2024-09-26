let añoSelect = document.getElementById("año");
let provinciaSelect = document.getElementById("provincia");
let boton = document.getElementById("filtrar");
let datosTbody = document.getElementById("datos");
let faltantes = document.getElementById("faltantes");

fetchData("provinciasYDepartamentos", (datos) => {
  const { provincias, departamentos } = datos;
  provincias.forEach((provincia) => {
    const option = document.createElement("option");
    option.value = provincia.id;
    option.innerText = provincia.nombre;
    provinciaSelect.appendChild(option);
  });
});

boton.addEventListener("click", () => {
  const provincia = provinciaSelect.value;
  const año = añoSelect.value;
  if (provincia === "" || año === "") {
    faltantes.style.display = "block";
    return;
  }
  faltantes.style.display = "none";
  postData(
    "datosAñoProvincia",
    { año: parseInt(año), provincia: parseInt(provincia) },
    (datos) => {
      datosTbody.innerHTML = "";
      datos.forEach((dato) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
                <td>${dato.departamento}</td>
                <td>${dato.vacas}</td>
                <td>${dato.vaquillonas}</td>
                <td>${dato.novillos}</td>
                <td>${dato.novillitos}</td>
                <td>${dato.terneros}</td>
                <td>${dato.terneras}</td>
                <td>${dato.toros}</td>
                <td>${dato.toritos}</td>
                <td>${dato.bueyes}</td>
            `;
        datosTbody.appendChild(tr);
      });
    }
  );
});
