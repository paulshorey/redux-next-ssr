'use client';
import React from 'react';
import PokemonTable from './List';
import PokemonsInput from './Input';

const Pokemons = () => {
    return (
        <div>
            <PokemonsInput />
            <PokemonTable />
        </div>
    );
};

export default Pokemons;
