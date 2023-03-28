import React, { useEffect, useRef, useState } from 'react'
import { libraries, navlinks } from '../app.config'
import { Toaster } from 'react-hot-toast'
import { useRouter } from 'next/router'
import { AiOutlineSearch } from 'react-icons/ai'
import { FiMenu } from 'react-icons/fi'
import Link from 'next/link'
import { useLoadScript } from '@react-google-maps/api'
import { StandaloneSearchBox } from 'react-google-maps/lib/components/places/StandaloneSearchBox'
import { getGeocode, getLatLng } from 'use-places-autocomplete'
import { useExternalContext } from '../context/ExternalContext'

const Navbar = () => {
  const router = useRouter()
  const [isActive, setIsActive] = useState('dashboard')
  const [toggleDrawer, setToggleDrawer] = useState(false)

  // const isLoaded = false
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
    libraries,
  })
  const googlemap = useRef<HTMLDivElement>(null)

  const searchBoxInputRef = useRef<HTMLInputElement>(null)!

  const { setGallery, setLoadingGallery } = useExternalContext()

  const onPlaceChanged = async () => {
    window &&
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      })

    const address = searchBoxInputRef?.current?.value
    if (!address) return

    //  DO NOT WRITE CODE BEFORE THIS LINE
    try {
      setLoadingGallery(true)
      const results = await getGeocode({ address })
      const { lat, lng } = getLatLng(results[0])

      const map = new google.maps.Map(googlemap.current!, {
        center: { lat, lng },
        zoom: 10,
      })

      const service = new google.maps.places.PlacesService(map)

      const callback = async (result: any, status: any) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          const newGallery = result
            .filter((item: any) => item.photos)
            .map(
              ({
                place_id,
                name,
                user_ratings_total,
                icon,
                photos,
                vicinity,
              }: {
                place_id: string
                name: string
                user_ratings_total: number
                icon: string
                geometry: {
                  location: {
                    lat: () => number
                    lng: () => number
                  }
                }
                photos: any
                vicinity: string
              }) => ({
                id: place_id,
                name,
                location: {
                  name: vicinity,
                  url: `https://www.google.com/maps/place/?q=place_id:${place_id}`,
                },
                rating: user_ratings_total || 0,
                image: (photos && photos[0]?.getUrl()) || icon,
              })
            )

          setGallery(newGallery)
        }
      }

      service.nearbySearch(
        {
          location: { lat, lng },
          radius: 500000,
          type: 'art_gallery',
        },
        callback
      )
    } catch (error) {
      console.error(error)
    } finally {
      setLoadingGallery(false)
    }
  }

  useEffect(() => {
    onPlaceChanged()
  }, [router])

  return (
    <div className="sticky top-0 z-10 mb-[35px] flex flex-col-reverse justify-between gap-6 md:top-10 md:flex-row">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="max-2-[458px] flex h-[52px] w-full flex-row rounded-full border-[1.5px] border-cold/20 bg-black/70 py-2 pl-4 pr-2 backdrop-blur-sm lg:flex-1">
        {isLoaded && (
          <StandaloneSearchBox onPlacesChanged={onPlaceChanged}>
            <input
              type="text"
              placeholder="Search for places"
              className="font-epilogue flex w-full bg-transparent text-[14px] font-normal text-white outline-none placeholder:text-[#4b5264]"
              ref={searchBoxInputRef}
            />
          </StandaloneSearchBox>
        )}
        <div id="map" ref={googlemap} />
        <div className="brightness flex h-full w-[72px] items-center justify-center rounded-[20px] bg-[#EF5DA8]">
          <AiOutlineSearch className="h-[15px] w-[15px] object-contain text-white" />
        </div>
      </div>

      {/* Small screen navigation */}
      <div className="relative flex items-center justify-between rounded-lg bg-black/70 backdrop-blur-sm sm:hidden">
        <Link href="/">
          <img src="/logo.svg" className="bg-blurred h-[70px] w-[100px] p-4" />
        </Link>

        <FiMenu
          className="mr-4 h-[34px] w-[34px] cursor-pointer object-contain text-love"
          onClick={() => {
            setToggleDrawer((prev) => !prev)
          }}
        />

        <div
          className={`shadow-secondary absolute top-[60px] right-0 left-0 z-10 rounded-[10px] bg-[#1c1c24] pb-4 ${
            !toggleDrawer ? '-translate-y-[100vh]' : 'translate-y-0'
          } transition-all duration-700`}
        >
          <ul className="mb-4">
            {navlinks.map((link: any) => (
              <li
                key={link.name}
                className={`flex p-4 first:rounded-t-[10px] ${
                  isActive === link.name && 'bg-[#3a3a43]'
                }`}
                onClick={() => {
                  if (!link.disabled) {
                    setIsActive(link.name)
                    router.push(link.link)
                  }
                }}
              >
                <div
                  className={`h-[48px] w-[48px] rounded-[10px] ${
                    link.isActive &&
                    link.isActive === link.name &&
                    'bg-cold/20 hover:bg-cold/40'
                  } flex items-center justify-center ${
                    !link.disabled && 'cursor-pointer'
                  } } transition duration-200 ease-in
    ${link.disabled ? '' : 'hover:bg-[#2c2f32]'} ${link.styles}`} // #EF5DA8
                  onClick={link.handleClick}
                >
                  <link.Image
                    className={`h-1/2 w-1/2 text-love ${
                      isActive !== link.name && 'grayscale'
                    }`}
                  />
                </div>
                <p
                  className={`font-epilogue ml-[20px] flex items-center text-[14px] font-semibold ${
                    isActive === link.name ? 'text-love' : 'text-cold'
                  }`}
                >
                  {link.name}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
