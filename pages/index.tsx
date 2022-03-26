import Head from "next/head";
import type { NextPage } from "next";
import { UserCard } from "@components/user";
import styles from "../styles/Home.module.css";
import { Button, Modal } from "@components/ui";
import { Footer, Header } from "@components/common";

import {
  getPokemonByName,
  getRunningOperationPromises,
} from "@lib/api/pokemon-api";
import { wrapper } from "@lib/store";
import { useRouter } from "next/router";

export const getStaticProps = wrapper.getStaticProps((store) => async () => {
  const { data } = await store.dispatch(getPokemonByName.initiate("bulbasaur"));
  Promise.all(getRunningOperationPromises());

  return {
    props: {
      data,
    },
  };
});

const Home: NextPage<{ data: any }> = (props) => {
  const { data } = props;
  const router = useRouter();

  return (
    <div className={styles.container}>
      <Head>
        <title>Template</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p
        className="text-center text-2xl text-primary-500 cursor-pointer"
        onClick={() => router.push("search-pokemon")}
      >
        Search pokemon by name
      </p>
      <p
        className="text-center text-2xl text-primary-500"
        onClick={() => router.push("about")}
      >
        {data.name}
      </p>
      <p className="text-center text-xl text-blue-400">abilities</p>
      {(data.abilities || []).map((ability: any) => (
        <p className="text-center text-base text-blue-400" key={ability.slot}>
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
