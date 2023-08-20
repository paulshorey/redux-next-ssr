import {AnyAction} from 'redux';
import {HYDRATE} from 'next-redux-wrapper';
import {Pokemon} from '@/types';

export type pokemonState = {
    query: string;
    pokemons: Pokemon[];
};
const initialState = {query: '', pokemons: []};

const reducer = (state: pokemonState = initialState, action: AnyAction) => {
    switch (action.type) {
        case HYDRATE: {
            console.log('system HYDRATE', action);
            return {...state, ...action.payload.pokemon};
        }
        case 'pokemon/query':
            return {...state, query: action.payload};
        case 'pokemon/pokemons':
            return {...state, pokemons: action.payload};
        default:
            return state;
    }
};

export default reducer;
