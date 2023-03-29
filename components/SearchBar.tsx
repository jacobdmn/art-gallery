import { StandaloneSearchBox } from 'react-google-maps/lib/components/places/StandaloneSearchBox'
import { useExternalContext } from '../context/ExternalContext'
// import { useRouter } from 'next/router'
import { AiOutlineSearch } from 'react-icons/ai'
import React, { useEffect } from 'react'
// import { onPlaceChanged } from '../utils/constants'

const SearchBar = () => {
  const {
    googlemap,
    searchBoxInputRef,
    isLoaded,
    RUN_onPlaceChanged,
    // setLoadingGallery,
    // setGallery,
    // router,
  } = useExternalContext()

  // useEffect(() => {
  //   onPlaceChanged(
  //     'Rome, Italy',
  //     setLoadingGallery,
  //     googlemap.current!,
  //     setGallery
  //   )
  // }, [router])

  return (
    <div className="max-2-[458px] flex h-[52px] w-full flex-row rounded-full border-[1.5px] border-cold/20 bg-black/70 py-2 pl-4 pr-2 backdrop-blur-sm lg:flex-1">
      {isLoaded && (
        <StandaloneSearchBox onPlacesChanged={RUN_onPlaceChanged}>
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
