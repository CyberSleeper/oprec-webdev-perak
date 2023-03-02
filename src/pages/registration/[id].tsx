import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import GameBox from "../../components/GameBox";
import TypeRadio from "../../components/TypeRadio";
import DataGame from "../../dataGame.json"
import { useForm, SubmitHandler } from "react-hook-form";
import { SlPaperPlane } from "react-icons/sl"
import { BsFillCheckCircleFill } from "react-icons/bs"

import { api } from "../../utils/api";
import { Input } from "postcss";
import { useRouter } from "next/router";
import { currencyFormatter } from "../../utils/formatter";
import { useState } from "react";
import { authRouter } from "../../server/api/routers/auth";

type Inputs = {
  name: string;
  nickname: string;
  npm: string;
  contactInfo: string;
  typeId: string;
  registeredGameId: string;
};

const Home: NextPage = () => {
  const typesData = api.auth.getUserTypes.useQuery();
  const router = useRouter();
  const { id } = router.query;
  const { data: gameData } = api.game.getGame.useQuery({ id: id as string ?? "" }, {
    enabled: !!id,
  });
  const create = api.auth.register.useMutation();

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
      contactInfo: "",
      typeId: "",
      registeredGameId: ""
    }
  });
  const onSubmit = (data: Inputs) => {
    data.typeId = "cleq7h91600063ark8hp9gsp4";
    data.registeredGameId = gameData?.id as string;
    create.mutate(data);
  };

  const [showModal, setShowModal] = useState(false);

  return (
    <main className="bg-[#f4efd3] w-full">
      <h1 className="font-poppins text-[64px] font-black">Pendaftaran Games Individual</h1>
      <h2 className="font-magic-retro text-[36px]">{gameData?.name}</h2>
      <h3 className="font-poppins text-[33px] font-bold">Biaya pendaftaran: {currencyFormatter.format(gameData?.registerationFee ?? 0)}</h3>
      <p className="font-poppins text-[27px]">Instruksi pembayaran diberikan setelah mengisi form pendaftaran</p>
      <form onSubmit={handleSubmit(onSubmit)}>

        <label className="relative mb-3">
          <p className="font-poppins text-[22px] font-medium">Nama Lengkap</p>
          <input className="py-1 px-3 w-[40%]"
            {...register("name", { required: "Bagian ini wajib diisi." })}
            placeholder="Perry Perak"
          />
          <p>{errors.name?.message}</p>
        </label>

        <label className="relative mb-3">
          <p className="font-poppins text-[22px] font-medium">Nama Panggilan</p>
          <input className="py-1 px-3 w-[40%]"
            {...register("nickname", { required: "Bagian ini wajib diisi." })}
            placeholder="Perry"
          />
          <p>{errors.nickname?.message}</p>
        </label>

        <label className="relative mb-3">
          <p className="font-poppins text-[22px] font-medium">NPM</p>
          <input className="py-1 px-3 w-[40%]"
            {...register("npm", { required: "Bagian ini wajib diisi." })}
            placeholder="2100000000"
          />
          <p>{errors.npm?.message}</p>
        </label>

        <label className="relative mb-3">
          <p className="font-poppins text-[22px] font-medium">ID Line / WhatsApp</p>
          <input className="py-1 px-3 w-[40%]"
            {...register("contactInfo", { required: "Bagian ini wajib diisi." })}
            placeholder="perrytheperak"
          />
          <p>{errors.contactInfo?.message}</p>
        </label>

        <div className="relative mb-3">
          <button type="submit" value="Submit" onSubmit={handleSubmit(onSubmit)} onClick={() => setShowModal(true)} className="rounded bg-[#188C58] leading-tight py-1 px-3 w-[40%] flex justify-center shadow-md transition duration-150 ease-in-out hover:bg-[#167c4e] hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#126540] active:shadow-lg">
            <div className="flex items-center gap-2">
              <SlPaperPlane/>
              <p>Daftar Sekarang</p>
            </div>
          </button>
        </div>

          <div className={`transition duration-500 inset-0 z-50 flex fixed justify-center items-center overflow-x-hidden overflow-y-auto outline-none ${showModal ? "scale-100": "scale-0"}`}>
            <div className="relative w-auto mx-auto ">
              <div className="bg-[#272B52] relative w-80 h-auto flex-col border-0 rounded-lg shadow-lg outline-none p-10">
                <div className="flex justify-center mb-4">
                  <BsFillCheckCircleFill size={80} color="#FEB048"/>
                </div>
                <div className="text-[#FEB048] font-bold text-center mb-4">
                  Apakah Anda Yakin Ingin Mendaftar di Permainan Ini?
                </div>
                <div className="font-medium text-center text-white mb-4">
                Pastikan semua data yang telah anda masukkan tidak ada yang salah. Anda tidak bisa mengubah data setelah pendaftaran tersimpan.
                </div>
                <div className="flex justify-center gap-3">
                  <Link href={`/payment/${id}`} className="w-full">
                    <button className="bg-[#FEB048] w-full py-3 rounded-lg font-poppins font-bold">
                      Simpan
                    </button>
                  </Link>
                  <button type="button" onClick={() => setShowModal(false)} className="bg-[#E9DEA6] w-full py-3 rounded-lg font-poppins font-bold">
                    Batal
                  </button>
                </div>
              </div>
            </div>
          </div>
        {showModal && (
          <div className="inset-0 bg-black z-40 opacity-25 fixed"></div>
         )}
      </form>
    </main>
  )
};

export default Home;
