import { useLoadScript } from '@react-google-maps/api'
import { createContext, useContext, useEffect, useRef, useState } from 'react'
import { GalleryItemType } from '../types/internal'
import { libraries } from '../utils/app.config'
import { ON_PLACE_CHANGED } from '../utils/functions'
import { useRouter } from 'next/router'

const ExternalContext = createContext<any>(null)

const ExternalContextProvider = ({ children }: any) => {
  const [gallery, setGallery] = useState<GalleryItemType[]>()
  const [loadingGallery, setLoadingGallery] = useState(false)

  const [wishlist, setWishlist] = useState<any[]>([0, 3])

  const googlemap = useRef<HTMLDivElement>(null)

  const searchBoxInputRef = useRef<HTMLInputElement>(null)!

  // const isLoaded = false
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
    libraries,
  })

  const onPlaceChanged = async () => {
    const address = searchBoxInputRef?.current?.value
    await ON_PLACE_CHANGED(
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
    onPlaceChanged,
    router,
  }

  useEffect(() => {
    isLoaded &&
      googlemap.current &&
      ON_PLACE_CHANGED(
        'Rome, Italy',
        setLoadingGallery,
        googlemap.current!,
        setGallery
      )
  }, [router, googlemap.current, isLoaded])

  return (
    <ExternalContext.Provider value={initialState}>
      {children}
    </ExternalContext.Provider>
  )
}
export default ExternalContextProvider
export const useExternalContext = () => useContext(ExternalContext)
