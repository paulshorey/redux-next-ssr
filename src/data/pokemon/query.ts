import {Pokemon} from '@/types';

type Params = {
    query?: string;
    pokemons?: Pokemon[];
};

export default async function pokemonQuery({query = '', pokemons}: Params) {
    if (!pokemons) {
        pokemons = await fetch('/data/pokemon.json')
            .then(res => res.json())
            .then(data => data.filter((p: Pokemon) => p.name.toLowerCase().includes(query?.toLowerCase() ?? '')).slice(0, 10));
    }
    return {
        query,
        pokemons,
    };
}
