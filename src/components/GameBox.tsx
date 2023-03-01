import Link from 'next/link'
import DataGame from '../dataGame.json'

const GameBox = ({name, id}: IGame) => {
  return(
  // <Link href={{
  //   pathname: `/registration/[id]`,
  //     query: {
  //       id: id
  //     },
  //   }}
  //   as={`/registration/${id}`}
  // >
  <Link href="/registration">
    <article className="bg-[#6DB8C2] border-[#2F7A84] h-[150px] w-[250px] m-10 border-solid border-8 flex items-center justify-center font-magic-retro text-[36px] text-[#F4EFD3] hover:shadow-lg hover:cursor-pointer">
      {name}
    </article>
  </Link>
  )
}

export default GameBox;