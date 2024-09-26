// prettier-ignore
let regex = new RegExp("\\b(\\w+)Mega\\s+\\1\\b", "i");

export const isMegaEvolution = (pokemonName) => {
  return pokemonName.match(regex) !== null;
};
