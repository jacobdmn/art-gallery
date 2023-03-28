import { GalleryItemType } from '../internal'
import Gallery from '../components/Gallery'
import { useExternalContext } from '../context/ExternalContext'
import { useEffect } from 'react'
import { website } from '../app.config'
import Head from 'next/head'
import { _gallery } from '../dummy'

export async function getStaticProps() {
  return {
    props: {
      _gallery,
    },
  }
}

export default function HomePage({
  _gallery,
}: {
  _gallery: GalleryItemType[]
}) {
  const { gallery, setGallery } = useExternalContext()

  useEffect(() => {
    setGallery(_gallery)
  }, [])
  return (
    <>
      <Head>
        <title>Gallery | {website.name}</title>
      </Head>
      {gallery ? <Gallery gallery={gallery} /> : <></>}
    </>
  )
}
