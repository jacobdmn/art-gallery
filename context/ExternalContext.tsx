import { createContext, useContext, useState } from 'react'
import { GalleryItemType } from '../types'

const ExternalContext = createContext<any>(null)

const ExternalContextProvider = ({ children }: any) => {
  const [gallery, setGallery] = useState<GalleryItemType[]>([])

  const [wishlist, setWishlist] = useState<any[]>([0, 3])

  const initialState = {
    wishlist,
    setWishlist,
    gallery,
    setGallery,
  }

  return (
    <ExternalContext.Provider value={initialState}>
      {children}
    </ExternalContext.Provider>
  )
}
export default ExternalContextProvider
export const useExternalContext = () => useContext(ExternalContext)
