const typeSelect = document.getElementById("type");
const generationSelect = document.getElementById("generation");
const legendaryCheck = document.getElementById("legendary");
const pokemonTable = document.getElementById("pokemon");

const typeChip = (type) => {
  return `<span class="type" style="background-color: var(--${type.toLowerCase()})">${type.toUpperCase()}</span>`;
};

const updateTable = () => {
  let filters = {
    type: typeSelect.value,
    generation: generationSelect.value,
    legendary: legendaryCheck.checked,
  };
  postData("pokemon", filters, (pokemon) => {
    pokemonTable.innerHTML = "";
    pokemon.forEach((element) => {
      let row = document.createElement("tr");
      row.dataset.id = element.id;
      let type = typeChip(element["Type 1"]);
      let subType = element["Type 2"] ? typeChip(element["Type 2"]) : "";
      row.innerHTML = `
        <td class="number">${element.id}</td>
        <td>${element.Name}</td>
        <td><div class="types">${type}${subType}</div></td>
        <td class="number">${element.HP}</td>
        <td class="number">${element.Attack}</td>
        <td class="number">${element.Defense}</td>
        <td class="number">${element["Sp. Atk"]}</td>
        <td class="number">${element["Sp. Def"]}</td>
        <td class="number">${element.Speed}</td>
        <td class="number">${element.Generation}</td>
        <td><div class="checked">${
          element.Legendary
            ? '<span class="material-symbols-outlined">star</span>'
            : ""
        }</div></td>
        <td><div class="checked"><input type="checkbox" ${
          element.Captured ? "checked" : ""
        }></div></td>
      `;
      pokemonTable.appendChild(row);
    });
  });
};

const capturePokemon = (event) => {
  const id = event.target.closest("tr").dataset.id;
  const captured = event.target.checked;
  postData("capture", { id: parseInt(id), captured: captured });
};

typeSelect.addEventListener("change", updateTable);
generationSelect.addEventListener("change", updateTable);
legendaryCheck.addEventListener("change", updateTable);

updateTable();

pokemonTable.addEventListener("change", capturePokemon);
