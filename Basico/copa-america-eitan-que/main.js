let convocados = []

const agregarBtn = document.getElementById("agregar");
const limpiarBtn = document.getElementById("limpiar");
const finalizarBtn = document.getElementById("finalizar");
const convocadosLista = document.getElementById("convocados");

agregarBtn.addEventListener("click", function() {
    let nombre = document.getElementById("jugador").value;
    let numero = document.getElementById("numero").value;
    let posicion = document.getElementById("posicion").value;

    if (nombre && numero && posicion && convocados.length < 26) {
        const jugador = { nombre, numero, posicion };
        convocados.push(jugador);
        document.getElementById("jugador").value = "";
        document.getElementById("numero").value = "";
    
        if (convocados.length === 26) {
          agregarBtn.style.pointerEvents = "none";
          agregarBtn.style.backgroundColor = "#ccc";
        };
      };
});

limpiarBtn.addEventListener("click", function() {
    convocados = [];
    convocadosLista.innerHTML = "";
    agregarBtn.style.pointerEvents = 'auto';
    agregarBtn.style.backgroundColor = 'var(--azul-oscuro)';
});

finalizarBtn.addEventListener("click", function() {
    convocadosLista.innerHTML = "";

    const posiciones = {
        Arquero: [],
        Defensor: [],
        Volante: [],
        Delantero: [],
      };

    convocados.forEach(jugador => {
    posiciones[jugador.posicion].push(jugador);
    });

    for (const [posicion, jugadores] of Object.entries(posiciones)) {
        if (jugadores.length > 0) {
          const posicionHeader = document.createElement('h3');
          posicionHeader.textContent = posicion;
          convocadosLista.appendChild(posicionHeader);
          jugadores.forEach(jugador => {
            const jugadorItem = document.createElement('li');
            jugadorItem.textContent = `${jugador.numero} - ${jugador.nombre}`;
            convocadosLista.appendChild(jugadorItem);
          });
        }
    }

    agregarBtn.style.pointerEvents = 'auto';
    agregarBtn.style.backgroundColor = 'var(--azul-oscuro)';
})

    
  