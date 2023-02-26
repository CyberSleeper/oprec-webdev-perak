import DataGame from '../dataGame.json'

const GameBox = ({name, innerColor, borderColor}: IGameBox) => {
  return(
  <article style={{background: innerColor, borderColor: borderColor}} className="h-[150px] w-[250px] m-10 border-solid border-8 flex items-center justify-center font-magic-retro text-[36px] text-[#F4EFD3]">
    {name}
  </article>
  )
}

export default GameBox;