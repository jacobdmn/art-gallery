import { useLoadScript } from '@react-google-maps/api'
import { createContext, useContext, useEffect, useRef, useState } from 'react'
import { GalleryItemType } from '../internal'
import { libraries } from '../app.config'
import { onPlaceChanged, _gallery } from '../utils/constants'
import { useRouter } from 'next/router'

const ExternalContext = createContext<any>(null)

const ExternalContextProvider = ({ children }: any) => {
  const [gallery, setGallery] = useState<GalleryItemType[]>(_gallery)
  const [loadingGallery, setLoadingGallery] = useState(false)

  const [wishlist, setWishlist] = useState<any[]>([0, 3])

  const googlemap = useRef<HTMLDivElement>(null)

  const searchBoxInputRef = useRef<HTMLInputElement>(null)!

  // const isLoaded = false
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
    libraries,
  })

  const RUN_onPlaceChanged = async () => {
    const address = searchBoxInputRef?.current?.value
    await onPlaceChanged(
      address,
      setLoadingGallery,
      googlemap.current!,
      setGallery
    )
  }

  const router = useRouter()

  const initialState = {
    wishlist,
    setWishlist,
    gallery,
    setGallery,
    loadingGallery,
    setLoadingGallery,
    googlemap,
    searchBoxInputRef,
    isLoaded,
    RUN_onPlaceChanged,
    router,
  }

  return (
    <ExternalContext.Provider value={initialState}>
      {children}
    </ExternalContext.Provider>
  )
}
export default ExternalContextProvider
export const useExternalContext = () => useContext(ExternalContext)
