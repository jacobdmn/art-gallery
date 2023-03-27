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
      className="absolute right-[4.5rem] bottom-4 grid h-10 w-10 place-content-center rounded-full border-2  border-current  p-3 text-love outline-none transition-all hover:scale-[1.05] active:scale-[0.95] md:right-8"
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
