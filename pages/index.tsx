import Gallery from '../components/Gallery'
import { useExternalContext } from '../context/ExternalContext'
import { website } from '../app.config'
import Head from 'next/head'

export default function HomePage() {
  const { gallery } = useExternalContext()

  return (
    <>
      <Head>
        <title>Gallery | {website.name}</title>
      </Head>
      <Gallery gallery={gallery} />
    </>
  )
}
