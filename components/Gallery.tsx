import GalleryItem from './../components/GalleryItem'
import { GalleryItemType } from './../types'

const Gallery = ({ gallery }: { gallery: GalleryItemType[] }) => {
  return (
    <div className="mx-auto max-w-2xl px-4 pb-16 sm:px-6 sm:pb-24 md:px-0 lg:max-w-7xl">
      <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {gallery.map((galleryItem) => (
          <GalleryItem key={galleryItem.id} galleryItem={galleryItem} />
        ))}
      </div>
    </div>
  )
}

export default Gallery
