import { useLoadScript } from '@react-google-maps/api'
import { StandaloneSearchBox } from 'react-google-maps/lib/components/places/StandaloneSearchBox'
import { getGeocode, getLatLng } from 'use-places-autocomplete'
import { useExternalContext } from '../context/ExternalContext'
import { libraries } from '../app.config'
import { useRouter } from 'next/router'
import { AiOutlineSearch } from 'react-icons/ai'
import React, { useEffect, useRef } from 'react'

const SearchBar = () => {
  const router = useRouter()

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
                geometry,
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
                  url: `https://www.google.com/maps/search/?api=1&query=${geometry.location.lat()},${geometry.location.lng()}&query_place_id=${place_id}`,
                },
                rating: user_ratings_total || 0,
                image: (photos && photos[0]?.getUrl()) || icon,
              })
            )

          setGallery(newGallery)
          console.log(newGallery)
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
  )
}

export default SearchBar
