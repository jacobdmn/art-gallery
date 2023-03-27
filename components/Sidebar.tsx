import React, { useState } from 'react'
import { Tooltip } from 'antd'
import { navlinks } from '../app.config'
import { useRouter } from 'next/router'
import Link from 'next/link'

const Icon = ({
  styles,
  name,
  Image,
  isActive,
  disabled,
  handleClick,
}: any) => (
  <div
    className={`h-[48px] w-[48px] rounded-[10px] ${
      isActive && isActive === name && 'bg-cold/20 hover:bg-cold/40'
    } flex items-center justify-center ${
      !disabled && 'cursor-pointer'
    } } transition duration-200 ease-in
    ${disabled ? '' : 'hover:bg-[#2c2f32]'} ${styles}`} // #EF5DA8
    onClick={handleClick}
  >
    <Image
      className={`h-1/2 w-1/2 text-love ${isActive !== name && 'grayscale'}`}
    />
  </div>
)

const Sidebar = () => {
  const router = useRouter()
  const [isActive, setIsActive] = useState('dashboard')

  return (
    <div className="sticky top-5 flex h-[93vh] flex-col items-center justify-between">
      <Link href="/">
        <img
          src="/logo.svg"
          className="bg-blurred h-[76px] w-[76px] !border-none  p-4"
        />
      </Link>

      <div className="bg-blurred mt-6 flex w-[76px] flex-1 flex-col items-center justify-between py-4">
        <div className="flex flex-col items-center justify-center gap-3">
          {navlinks.map((link) =>
            !link.disabled ? (
              <Tooltip
                key={link.name}
                placement="right"
                title={link.name.replace(/^[a-z]/, (char) =>
                  char.toUpperCase()
                )}
                // 첫 글자 대문자 작업
                color={'#EF5DA8'}
                overlayInnerStyle={{
                  color: 'white',
                }}
              >
                <div
                  key={link.name}
                  className="rounded-[10px] transition duration-200 ease-in"
                >
                  <Icon
                    key={link.name}
                    {...link}
                    isActive={isActive}
                    handleClick={() => {
                      if (!link.disabled) {
                        setIsActive(link.name)
                        router.push(link.link)
                      }
                    }}
                  />
                </div>
              </Tooltip>
            ) : (
              <Icon
                key={link.name}
                {...link}
                isActive={isActive}
                handleClick={() => {
                  if (!link.disabled) {
                    setIsActive(link.name)
                    router.push(link.link)
                  }
                }}
              />
            )
          )}
        </div>
      </div>
    </div>
  )
}

export default Sidebar
