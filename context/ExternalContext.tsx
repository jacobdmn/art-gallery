import { createContext, useContext, useState } from 'react'
import { GalleryItemType } from '../internal'

const ExternalContext = createContext<any>(null)

const ExternalContextProvider = ({ children }: any) => {
  const [gallery, setGallery] = useState<GalleryItemType[]>()
  const [loadingGallery, setLoadingGallery] = useState(false)

  const [wishlist, setWishlist] = useState<any[]>([0, 3])

  const initialState = {
    wishlist,
    setWishlist,
    gallery,
    setGallery,
    loadingGallery,
    setLoadingGallery,
  }

  return (
    <ExternalContext.Provider value={initialState}>
      {children}
    </ExternalContext.Provider>
  )
}
export default ExternalContextProvider
export const useExternalContext = () => useContext(ExternalContext)
