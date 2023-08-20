import React from "react";
import { useDispatch } from "react-redux";
// import { pokemonsIO } from "@/redux/io/pokemon";
import useStore from "@/redux/useStore";
import { useRouter } from "next/router";

/*
 * TODO: use debounce to submit input after period of inactivity
 */

const PokemonsInput = () => {
  const router = useRouter();
  const query = useStore((state) => state.pokemon.query);
  const dispatch = useDispatch();

  const handleInput = async (e: React.ChangeEvent<HTMLInputElement>) => {
    // const pokemonData = await pokemonsIO({ query: e.target.value });
    // dispatch({ type: "pokemon/data", payload: pokemonData });
    dispatch({ type: "pokemon/data", payload: { query: e.target.value } });
  };

  const handleSubmit = async () => {
    // This re-renders the whole route. NextJS getServersideProps() will take care of fetching/dispatching data.
    router.replace({
      query: { ...router.query, q: query },
    });
    // This does NOT reload the page, does not re-render React components
    // let searchParams = new URLSearchParams(window.location.search);
    // searchParams.set("q", query);
    // if (window.history.replaceState) {
    //   const newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + "?" + searchParams.toString();
    //   window.history.replaceState({ path: newurl }, "", newurl);
    // }
  };

  const handleEnter = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return <input value={query} type="text" onChange={handleInput} onBlur={handleSubmit} onKeyUp={handleEnter} />;
};

export default PokemonsInput;
