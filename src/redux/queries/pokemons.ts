import {Pokemon} from '@/types';

type input = {
    query?: string;
};
type output = Pokemon[];

export default async function pokemons(props?: input): Promise<output> {
    const {query} = props ?? {};
    const res = await fetch('http://localhost:3000/data/pokemon.json');
    const pokemonsArray = await res
        .json()
        .then(data => data.filter((p: Pokemon) => p.name.toLowerCase().includes(query?.toLowerCase() ?? '')).slice(0, 10));
    return pokemonsArray ?? [];
}
