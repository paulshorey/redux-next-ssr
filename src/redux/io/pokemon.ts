import { Pokemon } from "@/types";

type input = {
  query: string;
};
type output = {
  query: string;
  pokemons: Pokemon[];
};

export async function pokemonsIO(input: input): Promise<output> {
  // input
  const query = input.query;
  const filter = (p: Pokemon) => p.name.toLowerCase().includes(query?.toLowerCase() ?? "");
  // output
  const res = await fetch("http://localhost:3000/data/pokemon.json");
  const pokemons = (await res.json().then((data) => data.filter(filter).slice(0, 10))) || [];
  return { query, pokemons };
}
