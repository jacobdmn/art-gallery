import { GalleryItemType } from '../types'
import Gallery from '../components/Gallery'
import { useExternalContext } from '../context/ExternalContext'

export default function HomePage() {
  const { gallery, wishlist } = useExternalContext()

  return (
    <Gallery
      gallery={gallery.filter((item: GalleryItemType) =>
        wishlist.includes(item.id)
      )}
    />
  )
}
