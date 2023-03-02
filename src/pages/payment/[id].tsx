import { type NextPage } from "next";

import { currencyFormatter } from "../../utils/formatter";
import { api } from "../../utils/api";
import { useRouter } from "next/router";

type Inputs = {
  name: string;
  nickname: string;
  npm: string;
  contactInfo: string;
  typeId: string;
  registeredGameId: string;
};

const Home: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data: gameData } = api.game.getGame.useQuery({ id: id as string ?? "" }, {
    enabled: !!id,
  });

  return (
    <main className="bg-[#f4efd3] w-full">
      <h1 className="font-poppins text-[64px] font-black">Pendaftaran Games Individual</h1>
      <h2 className="font-magic-retro text-[36px]">{gameData?.name}</h2>
      <h3 className="font-poppins text-[33px] font-bold">Terima kasih telah melakukan pendaftaran games di PERAK 2023</h3>
      <p className="font-poppins text-[27px]">Silakan melakukan pembayaran biaya pendaftaran sebesar</p>
      <h3 className="font-poppins text-[33px] font-bold">{currencyFormatter.format(gameData?.registerationFee ?? 0)}</h3>

    </main>
  )
};

export default Home;
