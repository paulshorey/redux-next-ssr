import React from 'react';
import {useDispatch} from 'react-redux';
import pokemonQuery from '@/redux/queries/pokemons';

const PokemonsInput = () => {
    const dispatch = useDispatch();
    const handleInput = async (e: any) => {
        const pokemons = await pokemonQuery({query: e.target.value});
        dispatch({type: 'pokemon/pokemons', payload: pokemons});
    };

    return <input type="text" onChange={handleInput} />;
};

export default PokemonsInput;
