const filtros = document.querySelector(".filtros");
const boton = document.getElementById("buscar");
const faltantes = document.getElementById("faltantes");
const resultado = document.getElementById("resultado");

let filtro = {
  provincia: null,
  departamento: null,
  año: null,
  bovino: null,
};

let listaProvincias = [];
let listaDepartamentos = [];

filtros.addEventListener("input", (e) => {
  let input = e.target.value;
  if (e.target.tagName !== "INPUT") return;
  categoria = e.target.parentElement.dataset.categoria;
  let optionContainer = e.target.parentElement.querySelector(".dropdown");
  if (input.length === 0) {
    optionContainer.classList.add("closed");
    filtro[categoria] = null;
    if (categoria === "provincia") {
      filtro.departamento = null;
      document
        .querySelector('[data-categoria="departamento"] input')
        .setAttribute("disabled", "");
      document.querySelector('[data-categoria="departamento"] input').value =
        "";
    }
    return;
  } else {
    optionContainer.classList.remove("closed");
  }

  optionContainer.innerHTML = (
    categoria === "provincia"
      ? listaProvincias
      : listaDepartamentos.filter((d) => d.provincia_id === filtro.provincia)
  )
    .filter((p) => p.nombre.toLowerCase().includes(input.toLowerCase()))
    .map((p) => `<div class="opcion" data-id="${p.id}">${p.nombre}</div>`)
    .join("");
});

filtros.addEventListener("change", (e) => {
  let select = e.target;
  if (select.tagName !== "SELECT") return;
  let categoria = select.name;
  filtro[categoria] =
    categoria === "año" ? parseInt(select.value) : select.value;
});

filtros.addEventListener("click", (e) => {
  let target = e.target;
  let provincia = filtro.provincia;
  if (target.classList.contains("opcion")) {
    let id = target.dataset.id;
    let input = target.parentElement.parentElement.querySelector("input");
    input.value = target.innerText;
    input.dataset.id = id;
    target.parentElement.classList.add("closed");
    filtro[target.parentElement.parentElement.dataset.categoria] = parseInt(id);
  }
  if (filtro.provincia !== null) {
    document
      .querySelector('[data-categoria="departamento"] input')
      .removeAttribute("disabled");
  }
  if (provincia !== filtro.provincia) {
    filtro.departamento = null;
    document.querySelector('[data-categoria="departamento"] input').value = "";
  }
});

boton.addEventListener("click", () => {
  let categoriasCompletas = Object.keys(filtro).every(
    (key) => filtro[key] !== null
  );
  if (!categoriasCompletas) {
    faltantes.style.display = "block";
    resultado.innerText = "";
  } else {
    faltantes.style.display = "none";
    postData("datosBovinos", filtro, (datos) => {
      resultado.innerText = datos;
    });
  }
});

fetchData("provinciasYDepartamentos", (datos) => {
  let { provincias, departamentos } = datos;
  listaProvincias = provincias;
  listaDepartamentos = departamentos;
  let filtroProvincias = document.createElement("div");
  filtroProvincias.classList.add("categoria");
  filtroProvincias.innerHTML = `
      <label for="provincia">Provincia:</label>
      <div class="filtro" data-categoria="provincia">
      <input class="oxygen-regular">
        <div class="dropdown closed">
        </div>
      </div>
    `;
  filtros.appendChild(filtroProvincias);
  let filtroDepartamentos = document.createElement("div");
  filtroDepartamentos.classList.add("categoria");
  filtroDepartamentos.innerHTML = `
      <label for="departamento">Departamento:</label>
      <div class="filtro" data-categoria="departamento">
      <input class="oxygen-regular" disabled>
        <div class="dropdown closed">
        </div>
      </div>
    `;
  filtros.appendChild(filtroDepartamentos);
});
