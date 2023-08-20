import React from "react";
import Link from "next/link";
import { NextPage, GetServerSidePropsContext } from "next";
import { wrapper } from "@/redux/store";
import { pokemonsIO } from "@/redux/io/pokemon";
import { ipIO } from "@/redux/io/user";
import Pokemons from "@/components/Pokemons";
import UserInfo from "@/components/UserInfo";
// import { serialize } from "cookie";

type PageProps = {};

const Page: NextPage<PageProps> = () => {
  return (
    <div>
      <UserInfo />
      <Pokemons />
      <p>
        <Link href="/pokemon?q=a"> _A_ </Link> | <Link href="/pokemon?q=b"> _B_ </Link> | <Link href="/pokemon?q=c"> _C_ </Link> |{" "}
        <Link href="/pokemon?q=d"> _D_ </Link> | <Link href="/pokemon?q=e"> _E_ </Link> | <Link href="/pokemon?q=f"> _F_ </Link> |{" "}
        <Link href="/pokemon?q=g"> _G_ </Link> | <Link href="/pokemon?q=h"> _H_ </Link> | <Link href="/pokemon?q=i"> _I_ </Link> |{" "}
        <Link href="/pokemon?q=j"> _J_ </Link> | <Link href="/pokemon?q=k"> _K_ </Link> | <Link href="/pokemon?q=l"> _L_ </Link> |{" "}
        <Link href="/pokemon?q=m"> _M_ </Link> | <Link href="/pokemon?q=n"> _N_ </Link> | <Link href="/pokemon?q=o"> _O_ </Link> |{" "}
        <Link href="/pokemon?q=p"> _P_ </Link> | <Link href="/pokemon?q=q"> _Q_ </Link> | <Link href="/pokemon?q=r"> _R_ </Link> |{" "}
        <Link href="/pokemon?q=s"> _S_ </Link> | <Link href="/pokemon?q=t"> _T_ </Link> | <Link href="/pokemon?q=u"> _U_ </Link> |{" "}
        <Link href="/pokemon?q=v"> _V_ </Link> | <Link href="/pokemon?q=w"> _W_ </Link> | <Link href="/pokemon?q=x"> _X_ </Link> |{" "}
        <Link href="/pokemon?q=y"> _Y_ </Link> | <Link href="/pokemon?q=z"> _Z_ </Link>
      </p>
      <p>
        <Link href="/">Back to homepage</Link>
      </p>
    </div>
  );
};

export const getServerSideProps = wrapper.getServerSideProps((store) => async (context: GetServerSidePropsContext) => {
  //

  // get initial state
  // const userCookie = context.req.cookies["user"];
  // console.log("\n\n\n userCookie", userCookie);

  const userData = await ipIO();
  store.dispatch({ type: "user/data", payload: userData });

  const query = (context?.query?.q as string) || userData.region || "";
  const pokemonData = await pokemonsIO({ query });
  store.dispatch({ type: "pokemon/data", payload: pokemonData });

  // cache state to cookie
  // const cookie = serialize("user", JSON.stringify(userData), {
  //   // httpOnly: true, // prevent people from reading it in DevTools
  //   path: "/",
  // });
  // context.res.setHeader("Set-Cookie", cookie);

  return {
    props: {},
  };
});

export default Page;
