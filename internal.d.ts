export type GalleryItemType = {
  id: string
  name: string
  location: {
    name: string
    url: string
  }
  rating: number
  ratingCount: number
  image: string
  open?: boolean
}
