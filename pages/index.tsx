import { GalleryItemType } from './../types'
import Gallery from '../components/Gallery'
import { useExternalContext } from '../context/ExternalContext'

export async function getStaticProps() {
  const gallery = [
    {
      id: 0,
      name: 'Monalisa',
      location: {
        name: 'Paris, Louvre Museum',
        url: 'https://google.maps/Monalisa',
      },
      rating: 4.9,
      image: '/monalisa.jpg',
    },
    {
      id: 1,
      name: 'Monalisa',
      location: {
        name: 'Paris, Louvre Museum',
        url: 'https://google.maps/Monalisa',
      },
      rating: 4,
      image: '/monalisa.jpg',
    },
    {
      id: 3,
      name: 'Monalisa',
      location: {
        name: 'Paris, Louvre Museum',
        url: 'https://google.maps/Monalisa',
      },
      rating: 3.9,
      image: '/monalisa.jpg',
    },
    {
      id: 4,
      name: 'Monalisa',
      location: {
        name: 'Paris, Louvre Museum',
        url: 'https://google.maps/Monalisa',
      },
      rating: 2.3,
      image: '/monalisa.jpg',
    },
    {
      id: 5,
      name: 'Monalisa',
      location: {
        name: 'Paris, Louvre Museum',
        url: 'https://google.maps/Monalisa',
      },
      rating: 2.3,
      image: '/monalisa.jpg',
    },
    {
      id: 6,
      name: 'Monalisa',
      location: {
        name: 'Paris, Louvre Museum',
        url: 'https://google.maps/Monalisa',
      },
      rating: 2.3,
      image: '/monalisa.jpg',
    },
  ]

  return {
    props: {
      gallery,
    },
  }
}

export default function HomePage({ gallery }: { gallery: GalleryItemType[] }) {
  const { setGallery } = useExternalContext()

  setGallery(gallery)
  return <Gallery gallery={gallery} />
}
