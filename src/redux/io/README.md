# Redux IO

Functions which accept and return values from the redux store.

**Filename:** `@/redux/io/{store}.tsx`  
**Exported function name:** Most important key in the redux store which is intended to be updated, followed by "IO".

## Input (function arguments)

Interactive properties of a redux store such as user input.

## Output (function return value)

Modified values of the redux store, including both inputs and outputs. Outputs may be generated or fetched from an API.  
The function does dispatch anything, does not access the store. It only returns updated properties based on input values.

## Note

These functions may cache the output per unique input.

## Example

```
import { useDispatch } from "react-redux";
import { pokemonsIO } from '@/redux/io/pokemon';

const dispatch = useDispatch();

const pokemonData = await pokemonsIO({ query: 'pika' });
dispatch({ type: "pokemon/data", payload: pokemonData });
```

Input:

```
{
  searchTerm: string
}
```

Output:

```
{
  searchTerm: string,
  pokemons: Pokemon[],
}
```
