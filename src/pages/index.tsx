import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import GameBox from "../components/GameBox";
import DataGame from "../dataGame.json"

import { api } from "../utils/api";

const Home: NextPage = () => {
  // const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <main className="bg-[#f4efd3] w-full">
      <h1 className="font-poppins text-[64px]">Pilih games yang<br/>kamu inginkan</h1>
      <h2 className="font-magic-retro text-[36px]">Games Individual</h2>
      <ul className="flex">
        {
          DataGame.map((val, index) => (
            <GameBox key={index} {...val} />
            ))
        }
      </ul>
    </main>
  )
};

export default Home;
