import { MouseEventHandler } from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'

const LoveButton = ({
  onClick,
  liked,
}: {
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined
  liked?: Boolean
}) => {
  const iconClassName = 'text-lg font-bold text-inherit'
  return (
    <button
      onClick={onClick}
      className={`absolute right-4 top-4 grid h-10 w-10 place-content-center rounded-full border-[1px] border-love  p-3  outline-none transition-all hover:scale-[1.05] active:scale-[0.95]
      ${liked ? 'bg-love text-white' : ' bg-white text-love'}
      
      `}
    >
      {liked ? (
        <AiFillHeart className={iconClassName} />
      ) : (
        <AiOutlineHeart className={iconClassName} />
      )}
    </button>
  )
}

export default LoveButton
