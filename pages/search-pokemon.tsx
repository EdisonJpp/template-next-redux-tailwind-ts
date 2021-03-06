import Head from "next/head";
import { useState } from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import styles from "@styles/sass/Home.module.sass";

import { UserCard } from "@components/user";
import { Button, Modal } from "@components/ui";
import { Footer, Header } from "@components/common";
import { useGetPokemonByNameQuery } from "@lib/api/pokemon-api";

const Home: NextPage = () => {
  const [pokemonName, setPokemonName] = useState("bulbasaur");
  const router = useRouter();
  const { isLoading, data } = useGetPokemonByNameQuery(
    pokemonName.toLocaleLowerCase()
  );

  if (isLoading) return <div>Loading... </div>;
    console.log(isLoading, 'edison')
  return (
    <div className={styles.container}>
      <Head>
        <title>Template</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <input
        placeholder="search pokemon"
        className="border-2 my-10 mx-20 container"
        onChange={({ target }) => target.value && setPokemonName(target.value)}
      />
      <p className={styles.pokemonName} onClick={() => router.push("about")}>
        {data.name}
      </p>
      <p className={styles.abilitiesContainer}>abilities</p>
      {(data.abilities || []).map((ability: any) => (
        <p className={styles.abilitiesItem} key={ability.slot}>
          {ability.ability.name}
        </p>
      ))}
      User
      <UserCard />
      common
      <Header />
      <Footer />
      UI
      <Button />
      <Modal />
    </div>
  );
};

export default Home;
