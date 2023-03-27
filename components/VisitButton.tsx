import { FiExternalLink } from 'react-icons/fi'

const VisitButton = ({
  name,
  url,
}: {
  name: string
  url?: string
  liked?: Boolean
}) => {
  return (
    <a
      aria-label={name}
      target="_blank"
      href={url}
      className="mr-2 ml-auto flex max-w-[90px] items-center justify-center gap-1 rounded-3xl border-[1.5px] border-cold py-1 px-3 text-sm text-cold outline-none transition-all hover:scale-[1.05] active:scale-[0.95]"
    >
      <span className="">Visit</span> <FiExternalLink />
    </a>
  )
}

export default VisitButton
