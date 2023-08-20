'use client';
import React from 'react';
import {rootState} from '@/redux/store';

import {useSelector} from 'react-redux';
import type {TypedUseSelectorHook} from 'react-redux';
export const useTypedSelector: TypedUseSelectorHook<rootState> = useSelector;

const PokemonTable = () => {
    const {pokemons} = useTypedSelector(state => state.pokemon);
    return (
        <table>
            <tbody>
                {pokemons.map(pokemon => (
                    <tr key={pokemon.name}>
                        <td>{pokemon.name}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default PokemonTable;
