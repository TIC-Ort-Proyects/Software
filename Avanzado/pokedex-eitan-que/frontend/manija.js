const generationSelect = document.getElementById("generation");
const legendaryCheck = document.getElementById("legendary");
const megaCheck = document.getElementById("mega");
const pokemonTable = document.getElementById("pokemon");

const typeChip = (type) => {
  return `<span class="type" style="background-color: var(--${type.toLowerCase()})">${type.toUpperCase()}</span>`;
};

const updateStats = () => {
  const generation = generationSelect.value;
  const legendary = legendaryCheck.checked;
  const megaEvolution = megaCheck.checked;
  postData(
    "statsByType",
    {
      generation,
      legendary,
      megaEvolution,
    },
    (stats) => {
      pokemonTable.innerHTML = "";
      stats.forEach((element) => {
        let row = document.createElement("tr");
        let type = typeChip(element.type);
        row.innerHTML = `
        <td><div class="types">${type}</div></td>
        <td class="number">${element.HP}</td>
        <td class="number">${element.Attack}</td>
        <td class="number">${element.Defense}</td>
        <td class="number">${element["Sp. Atk"]}</td>
        <td class="number">${element["Sp. Def"]}</td>
        <td class="number">${element.Speed}</td>
      `;
        pokemonTable.appendChild(row);
      });
    }
  );
};

generationSelect.addEventListener("change", updateStats);
legendaryCheck.addEventListener("change", updateStats);
megaCheck.addEventListener("change", updateStats);

updateStats();
