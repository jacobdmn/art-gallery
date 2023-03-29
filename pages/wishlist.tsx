import { GalleryItemType } from '../internal'
import Gallery from '../components/Gallery'
import { useExternalContext } from '../context/ExternalContext'
import Head from 'next/head'
import { website } from '../app.config'

export default function HomePage() {
  const { gallery, wishlist } = useExternalContext()

  return (
    <>
      <Head>
        <title>Wishlist | {website.name}</title>
      </Head>
      <Gallery
        gallery={gallery?.filter((item: GalleryItemType) =>
          wishlist.includes(item.id)
        )}
      />
    </>
  )
}
