import { startServer, onEvent } from "soquetic";
import fs from "fs";

let pokemones = JSON.parse(fs.readFileSync("./data/pokemon.json"));

const savePokemones = () => {
    fs.writeFileSync("./data/pokemon.json", JSON.stringify(pokemones, null, 2));
};

onEvent("pokemon", (data) => {
    let filteredPokemons = pokemones;

    if (data.legendary === false) {
        filteredPokemons = filteredPokemons.filter(pokemon => pokemon["Legendary"] === false);
    }
    
    if (data.generation !== "all") {
        filteredPokemons = filteredPokemons.filter(pokemon => pokemon["Generation"] === parseInt(data.generation));
    }

    if (data.type !== "all") {
        filteredPokemons = filteredPokemons.filter(pokemon => 
            pokemon["Type 1"] === data.type || pokemon["Type 2"] === data.type
        );
    }

    return filteredPokemons;
});

onEvent("capture", (data) => {
    let pokemon = pokemones.find(p => p["id"] === data.id);
    if (pokemon) {
        pokemon["Captured"] = data.captured;
        savePokemones();
        return { success: true, message: `Pokémon ${pokemon["Name"]} actualizado` };
    } else {
        return { success: false, message: "Pokémon no encontrado" };
    }
});

startServer();