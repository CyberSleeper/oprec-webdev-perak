import Link from 'next/link'

const GameBox = ({name, id}: IGame) => {
  return(
  <Link 
  href={`/registration/${id}`}
    className="bg-[#6DB8C2] border-[#2F7A84] h-[150px] w-[250px] m-10 border-solid border-8 flex items-center justify-center font-magic-retro text-[36px] text-[#F4EFD3] hover:shadow-lg hover:cursor-pointer"
  >
    {name}
  </Link>
  )
}

export default GameBox;