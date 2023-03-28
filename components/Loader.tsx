import classNames from 'clsx'

const Loader = (props: any) => {
  const { className, text } = props

  return (
    <div className="grid min-h-[300px] w-full place-content-center text-center">
      <div className={classNames('mx-auto h-10 w-10', className)}>
        <svg viewBox="0 0 226 200">
          <defs>
            <linearGradient
              x1="114.720775%"
              y1="181.283245%"
              x2="39.5399306%"
              y2="100%"
              id="loader-linear-gradient"
            >
              <stop stopColor="#000000" offset="0%" />
              <stop stopColor="#FFFFFF" offset="100%" />
            </linearGradient>
          </defs>
          <g
            id="loader__"
            fill="none"
            stroke="url(#loader-linear-gradient)"
            strokeWidth="18"
          >
            <path d="M113,5.08219117 L4.28393801,197.5 L221.716062,197.5 L113,5.08219117 Z" />
          </g>
        </svg>
      </div>
      {text && <p className="prose dark:prose-invert">{text}</p>}
    </div>
  )
}

export default Loader
