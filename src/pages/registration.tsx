import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import GameBox from "../components/GameBox";
import DataGame from "../dataGame.json"
import { useForm, SubmitHandler } from "react-hook-form";
import { SlPaperPlane } from "react-icons/sl"

import { api } from "../utils/api";
import { Input } from "postcss";

type Inputs = {
  name: string;
  nickname: string;
  npm: string;
  contactInfo: string;
};

const Home: NextPage = () => {
  const id = "cleq70f7g00003arkva9v94py";
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<Inputs>({
    defaultValues: {
      name: "",
      nickname: "",
      npm: "",
      contactInfo: ""
    }
  });
  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

  const gameData = api.game.getGame.useQuery({ id });

  return (
    <main className="bg-[#f4efd3] w-full">
      <h1 className="font-poppins text-[64px] font-black">Pendaftaran Games Individual</h1>
      <h2 className="font-magic-retro text-[36px]">"Nama game"</h2>
      <h3 className="font-poppins text-[33px] font-bold">Biaya pendaftaran: Rp xx.xxx</h3>
      <p className="font-poppins text-[27px]">Instruksi pembayaran diberikan setelah mengisi form pendaftaran</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="relative mb-3">
          <p className="font-poppins text-[22px] font-medium">Nama Lengkap</p>
          <input className="py-1 px-3 w-[40%]"
            {...register("name", { required: "Bagian ini wajib diisi." })}
            placeholder="Perry Perak"
          />
          <p>{errors.name?.message}</p>
        </div>

        <div className="relative mb-3">
          <p className="font-poppins text-[22px] font-medium">Nama Panggilan</p>
          <input className="py-1 px-3 w-[40%]"
            {...register("nickname", { required: "Bagian ini wajib diisi." })}
            placeholder="Perry"
          />
          <p>{errors.nickname?.message}</p>
        </div>

        <div className="relative mb-3">
          <p className="font-poppins text-[22px] font-medium">NPM</p>
          <input className="py-1 px-3 w-[40%]"
            {...register("npm", { required: "Bagian ini wajib diisi." })}
            placeholder="2100000000"
          />
          <p>{errors.npm?.message}</p>
        </div>

        <div className="relative mb-3">
          <p className="font-poppins text-[22px] font-medium">ID Line / WhatsApp</p>
          <input className="py-1 px-3 w-[40%]"
            {...register("contactInfo", { required: "Bagian ini wajib diisi." })}
            placeholder="perrytheperak"
          />
          <p>{errors.contactInfo?.message}</p>
        </div>

        <div className="relative mb-3">
          <button type="submit" className="rounded bg-[#188C58] leading-tight py-1 px-3 w-[40%] flex justify-center shadow-md transition duration-150 ease-in-out hover:bg-[#167c4e] hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#126540] active:shadow-lg">
            <div className="flex items-center gap-2">
              <SlPaperPlane/>
              <p>Daftar Sekarang</p>
            </div>
          </button>
        </div>
      </form>
    </main>
  )
};

export default Home;
