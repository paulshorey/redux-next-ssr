import React from "react";
import Link from "next/link";
import UserInfo from "@/components/UserInfo";
import { NextPage, GetServerSidePropsContext } from "next";
import { wrapper } from "@/redux/store";
import { ipIO } from "@/redux/io/user";
import { pokemonsIO } from "@/redux/io/pokemon";
import Pokemons from "@/components/Pokemons";

type PageProps = {};

const Page: NextPage<PageProps> = () => {
  return (
    <div>
      <UserInfo />
      <Pokemons />
      <p>
        <Link href="/pokemon">Catch them all!</Link>
      </p>
    </div>
  );
};

export const getServerSideProps = wrapper.getServerSideProps((store) => async (context: GetServerSidePropsContext) => {
  const userData = await ipIO();
  store.dispatch({ type: "user/data", payload: userData });

  const query = (context?.params?.string as string) || "";
  const pokemonData = await pokemonsIO({ query });
  store.dispatch({ type: "pokemon/data", payload: pokemonData });

  return {
    props: {},
  };
});

export default Page;
