import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import GameBox from "../components/GameBox";
import DataGame from "../dataGame.json"

import { api } from "../utils/api";

const Home: NextPage = () => {
  const gameData = api.game.getGames.useQuery();
  return (
    <main className="bg-[#f4efd3] w-full">
      <h1 className="font-poppins text-[64px] font-black">Pilih games yang<br/>kamu inginkan</h1>
      <h2 className="font-magic-retro text-[36px]">Games Individual</h2>
      <ul className="flex">
        {
          gameData.data ? gameData.data.map((val, index) => (
            <GameBox key={index} {...val} />
          )) : "Loading game data"
        }
      </ul>
    </main>
  )
};

export default Home;
