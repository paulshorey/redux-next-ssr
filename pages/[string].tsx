import React from "react";
import Link from "next/link";
// import { useSelector } from "react-redux";
import { NextPage, GetServerSidePropsContext } from "next";
import { wrapper } from "@/redux/store";
import pokemonQuery from "@/redux/queries/pokemons";
import ipAddress from "@/redux/queries/ipAddress";
import Pokemons from "@/components/Pokemons";
import UserInfo from "@/components/UserInfo";

type PageProps = {};

const Server: NextPage<PageProps> = () => {
  // const {user, system, pokemon} = useSelector<any, any>(state => state);
  return (
    <div>
      <UserInfo />
      <Pokemons />
      {/* <pre>{JSON.stringify({user, system, pokemon}, null, 2)}</pre> */}
      <nav>
        <Link href="/">Navigate to index</Link>
      </nav>
    </div>
  );
};

export const getServerSideProps = wrapper.getServerSideProps((store) => async (context: GetServerSidePropsContext) => {
  const pokemon = (context?.params?.string as string) || "";
  const pokemons = await pokemonQuery({ query: pokemon });
  const userMeta = await ipAddress();
  store.dispatch({ type: "PAGE", payload: "[pokemon]" });
  store.dispatch({ type: "pokemon/pokemons", payload: pokemons });
  store.dispatch({ type: "user/meta", payload: userMeta });
  return { props: {} };
});

export default Server;
