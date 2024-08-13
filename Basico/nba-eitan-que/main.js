const equipos = [
  { nombre: "Boston Celtics", abreviado: "BOS", logo: "img/bos.svg" },
  { nombre: "Brooklyn Nets", abreviado: "BKN", logo: "img/bkn.svg" },
  { nombre: "New York Knicks", abreviado: "NYK", logo: "img/nyk.svg" },
  { nombre: "Philadelphia 76ers", abreviado: "PHI", logo: "img/phi.svg" },
  { nombre: "Toronto Raptors", abreviado: "TOR", logo: "img/tor.svg" },
  { nombre: "Chicago Bulls", abreviado: "CHI", logo: "img/chi.svg" },
  { nombre: "Cleveland Cavaliers", abreviado: "CLE", logo: "img/cle.svg" },
  { nombre: "Detroit Pistons", abreviado: "DET", logo: "img/det.svg" },
  { nombre: "Indiana Pacers", abreviado: "IND", logo: "img/ind.svg" },
  { nombre: "Milwaukee Bucks", abreviado: "MIL", logo: "img/mil.svg" },
  { nombre: "Atlanta Hawks", abreviado: "ATL", logo: "img/atl.svg" },
  { nombre: "Charlotte Hornets", abreviado: "CHA", logo: "img/cha.svg" },
  { nombre: "Miami Heat", abreviado: "MIA", logo: "img/mia.svg" },
  { nombre: "Orlando Magic", abreviado: "ORL", logo: "img/orl.svg" },
  { nombre: "Washington Wizards", abreviado: "WAS", logo: "img/was.svg" },
  { nombre: "Denver Nuggets", abreviado: "DEN", logo: "img/den.svg" },
  { nombre: "Minnesota Timberwolves", abreviado: "MIN", logo: "img/min.svg" },
  { nombre: "Oklahoma City Thunder", abreviado: "OKC", logo: "img/okc.svg" },
  { nombre: "Portland Trail Blazers", abreviado: "POR", logo: "img/por.svg" },
  { nombre: "Utah Jazz", abreviado: "UTA", logo: "img/uta.svg" },
  { nombre: "Golden State Warriors", abreviado: "GSW", logo: "img/gsw.svg" },
  { nombre: "LA Clippers", abreviado: "LAC", logo: "img/lac.svg" },
  { nombre: "Los Angeles Lakers", abreviado: "LAL", logo: "img/lal.svg" },
  { nombre: "Phoenix Suns", abreviado: "PHX", logo: "img/phx.svg" },
  { nombre: "Sacramento Kings", abreviado: "SAC", logo: "img/sac.svg" },
  { nombre: "Dallas Mavericks", abreviado: "DAL", logo: "img/dal.svg" },
  { nombre: "Houston Rockets", abreviado: "HOU", logo: "img/hou.svg" },
  { nombre: "Memphis Grizzlies", abreviado: "MEM", logo: "img/mem.svg" },
  { nombre: "New Orleans Pelicans", abreviado: "NOP", logo: "img/nop.svg" },
  { nombre: "San Antonio Spurs", abreviado: "SAS", logo: "img/sas.svg" },
];

for (const selector of ["equipo1", "equipo2"]) {
  const select = document.getElementById(selector);
  for (const equipo of equipos) {
    const option = document.createElement("option");
    option.value = equipo.nombre;
    option.text = equipo.nombre;
    select.appendChild(option);
  }
}

function obtenerLogoEquipo(nombre) {
  for (const equipo of equipos) {
    if (equipo.nombre === nombre) {
      return equipo.logo;
    }
  }
}

function cambiarImagenEquipo(selector, nombre) {
  const img = document.getElementById(selector);
  img.src = obtenerLogoEquipo(nombre);
}
document.getElementById("equipo1").addEventListener("change", function () {
  cambiarImagenEquipo(
    "imagenEquipo1",
    document.getElementById("equipo1").value
  );
});
document.getElementById("equipo2").addEventListener("change", function () {
  cambiarImagenEquipo(
    "imagenEquipo2",
    document.getElementById("equipo2").value
  );
});

document.getElementById("boton").addEventListener("click", function(event) {
  event.preventDefault();

  const equipo1 = document.getElementById("equipo1").value;
  const equipo2 = document.getElementById("equipo2").value;

  if(equipo1 && equipo2 && equipo1 !== equipo2) {
    const fechasDiv = document.getElementById("fechas");

    const fechaDiv = document.createElement("div");
    fechaDiv.classList.add("fecha");

    const logo1 = obtenerLogoEquipo(equipo1);
    const logo2 = obtenerLogoEquipo(equipo2);

    fechaDiv.innerHTML = `
      <div class="equipoFecha">
        <img src="${logo1}" alt="${equipo1}" />
        <span>${equipo1}</span>
      </div>
      <span>VS</span>
      <div class="equipoFecha">
        <img src="${logo2}" alt="${equipo2}" />
        <span>${equipo2}</span>
      </div>
    `;

    fechasDiv.appendChild(fechaDiv);
  }
});