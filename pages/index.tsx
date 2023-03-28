import { GalleryItemType } from '../internal'
import Gallery from '../components/Gallery'
import { useExternalContext } from '../context/ExternalContext'
import { useEffect } from 'react'
import { website } from '../app.config'
import Head from 'next/head'

export async function getStaticProps() {
  const _gallery = [
    {
      id: 'ChIJG1jPvipqXz4RcMCoHhFmn3I',
      name: 'MB&F M.A.D.Gallery, The Dubai Mall',
      location: {
        name: 'First Floor - Unit FF - 290 - 269 Financial Center Road - Dubai',
        url: 'https://maps.google.com/?q=25.1977259,55.27613580000001',
      },
      rating: 54,
      image:
        'https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sAUjq9jm0aihDJIUsRoF0gOurtyopyaU-tJgoPOuA-UybYUoSZZ-oQ2Z5LIxP5N0fCLCDQEw1qufAkfIWfgyfGhZGVl5gNTxSpAavtZ3q7xL8bNfr8iALTnsXdHWE__dBepf0NVQeF-DG5rnwvJrE8MsCBKA2LP6kCSHxg9cSj0fBUeaSyFfx&3u1280&5m1&2e1&callback=none&key=AIzaSyAsEm65XA0ihWI5oMib2zIY2x9haZKY9AQ&token=17866',
    },
    {
      id: 'ChIJ3_edgoJCXz4RNpxNj2OVWSU',
      name: 'Opera Gallery',
      location: {
        name: 'Financial Center Road - Dubai',
        url: 'https://maps.google.com/?q=25.197726,55.278994',
      },
      rating: 2,
      image:
        'https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sAUjq9jl1t1d60EqBItdJJtJ7kO0-w6r51bclh0xRZ3fOMYM7YKxiw7LTbkv4Bj8YdIjTpdqHcDNBXyPMo0jy9gqrNV9K-pXCEWqVK022SIBFeR-jyw1GRutWBMGWz6e2SRs3MbceGOjb-enW8EzaBljHO-R21sd9NgeLMuzZJn7HGMYatS00&3u3468&5m1&2e1&callback=none&key=AIzaSyAsEm65XA0ihWI5oMib2zIY2x9haZKY9AQ&token=129321',
    },
    {
      id: 'ChIJ52N3oBFoXz4RkQb6mUyb5io',
      name: 'Unique-Gallery.com',
      location: {
        name: 'Dubai',
        url: 'https://maps.google.com/?q=25.1948253,55.2783197',
      },
      rating: 4,
      image:
        'https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sAUjq9jlbUoUbdSZnsm016xw-cFuEJB9jMoBPXfDDsYeP5r4i9RaLGWLmxajzVK_Eh_T78-0ASdIRLDXgxNuIpBY7tZq28wdOUB9Fkx8qQM1Ajws26TtFG-q--r5KHXMpvnLeYXHxt7mdNDC4cYQMUcfTujvAxI5ovPAwBfwAWBeGEIt741nN&3u1115&5m1&2e1&callback=none&key=AIzaSyAsEm65XA0ihWI5oMib2zIY2x9haZKY9AQ&token=111545',
    },
    {
      id: 'ChIJfYh87ZFCXz4R19jhj9V36T4',
      name: 'Opera Gallery Dubai',
      location: {
        name: 'Gate Village, Building 3 - 03 Sheikh Zayed Road - Dubai',
        url: 'https://maps.google.com/?q=25.213494,55.28241999999999',
      },
      rating: 33,
      image:
        'https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sAUjq9jla85mUkxwqgnW9BS14LXaou8mHvMoTmpZao__TQXIo_nERusp9ucI5Zd8hiiMpe0lMOLYiBCV9WUcJhaa9Nolyq3CfCk4NfWpqlN0MrmsEpvhQCS4wbJyCyhA4h75vg3omCryhAUy2DbZsNQl0C3zIOP_74FJ_dtNKH5nGwr-giVnV&3u1024&5m1&2e1&callback=none&key=AIzaSyAsEm65XA0ihWI5oMib2zIY2x9haZKY9AQ&token=49576',
    },
    {
      id: 'ChIJkTUhgoVpXz4RAet1992DZz4',
      name: 'Cities Design, Art and Lifestyle Store',
      location: {
        name: 'The Galleria Mall Jumeira Wasl Road',
        url: 'https://maps.google.com/?q=25.207244,55.254377',
      },
      rating: 17,
      image:
        'https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sAUjq9jlEWBscUqKYGsyX047JivgwAQKtBuxi-DbVTX3Yab0cvykNGlbYtXmRcY-4-eVngxbIBZ8AfAFSFcohCMbo3o8DvszGom5vNmApSH2s5WLalDMR82ye-lqe2P3F51mIJSg-JMMofw-JlaFH04-erQH6nxQAI6zklDeBlwNp8vJGKPZn&3u1280&5m1&2e1&callback=none&key=AIzaSyAsEm65XA0ihWI5oMib2zIY2x9haZKY9AQ&token=14226',
    },
    {
      id: 'ChIJF-tX0JFCXz4R6ZefFrxkQZc',
      name: 'Capital Club Dubai',
      location: {
        name: 'Gate Village, Building 3 - towards DIFC Parking - Dubai',
        url: 'https://maps.google.com/?q=25.2128257,55.2827616',
      },
      rating: 365,
      image:
        'https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sAUjq9jmtazyC7HJ93iElIcj7lU-uIvaS0QiZG10fOs4W42oDP9VxXmxh1vjkuNUe-LT8oUKLoKFsRvpS4cXPT5TR2zVKJ4TrxOI0hwg-bATRUxteTUeXlj5fsLfKi9fHmVL2_jsgoNj5w_UfMFCU6DwLCfXG7OQ0Qkkbw4ErXnYPxa2i_dBk&3u4000&5m1&2e1&callback=none&key=AIzaSyAsEm65XA0ihWI5oMib2zIY2x9haZKY9AQ&token=84623',
    },
    {
      id: 'ChIJW2jGkTFoXz4RUlEBHH6-dTk',
      name: 'The Fine Art Advisory',
      location: {
        name: 'Burj Khalifa - دبي',
        url: 'https://maps.google.com/?q=25.184804,55.27639600000001',
      },
      rating: 4,
      image:
        'https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sAUjq9jnhR9e-y9sJ9XGWHz8bZoCd9HOMCxxUf-LUfvTtdWzMHurP-jmp068CT_Kif59bKkqKpUlwGuCh5MSyosYon__wRQW0VT8LmoKqsoEJWoROc0sHZYTIbhuyTVfKAxAyKnY_V2wUnHz4-jvFRdChz6OdivJ4R6-f70DWbQ2X6DyO3MIY&3u1268&5m1&2e1&callback=none&key=AIzaSyAsEm65XA0ihWI5oMib2zIY2x9haZKY9AQ&token=115765',
    },
    {
      id: 'ChIJbxlFVw1CXz4R1yFkRstIL40',
      name: 'Fann A Porter',
      location: {
        name: 'Villa 45 23 B Street - Dubai',
        url: 'https://maps.google.com/?q=25.1993203,55.2475235',
      },
      rating: 3,
      image:
        'https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sAUjq9jkRrgRfGEil1MNGx-sImiupw05GkfDAqp-haxTm5wO8A1MyiiDkcaIIKQYULRee_ZZnlY9H75LWNFW4is3DEib494v4qhdW4I1lS6hIQYEWKVjhL8MgSnydi8xpvTqFvJJozfu5f86YSnlzn0WI5SDGocWVbNW0-eZONr0scVpzqO6c&3u4608&5m1&2e1&callback=none&key=AIzaSyAsEm65XA0ihWI5oMib2zIY2x9haZKY9AQ&token=97716',
    },
    {
      id: 'ChIJGS5YUA1CXz4RgMNJuXWLFFk',
      name: 'The Workshop Dubai',
      location: {
        name: 'Villa 45 St. 23b - Dubai',
        url: 'https://maps.google.com/?q=25.1992017,55.2473611',
      },
      rating: 134,
      image:
        'https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sAUjq9jmw5TlDn-9nu2Rc8WD8y9IJf4dDeFPoYTk-YT5lf1cN9Z2Mv9yoFWzEMQPgqeD3PKCZolX-VBKqZvKyLdqZQnEq9tciuKaEbZpRUkSzUtztY8MnqKQBb8umN0MonZT0JqJFfibQJMztJ8ZHBqdWsE4ly0pjKRJicJvSOA9xm1PUDGUn&3u2819&5m1&2e1&callback=none&key=AIzaSyAsEm65XA0ihWI5oMib2zIY2x9haZKY9AQ&token=53550',
    },
    {
      id: 'ChIJzYT2bNppXz4RdL-xzmvU6MI',
      name: 'Okapi Gallery',
      location: {
        name: 'Shop #9, 1 Floor, JW Marriott Marquis Hotel Sheikh Zayed Road, - دبي',
        url: 'https://maps.google.com/?q=25.18555449999999,55.2581316',
      },
      rating: 10,
      image:
        'https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sAUjq9jmCRhpWMMCasNEV9dCaUeI-lAwV5NGYaJ1CmUSj3I0G8S1aL_FCcAOFUyRpS3pgKyCvrUil7qSkw3Vx-s5ZUu1jSK_ThewzWLXkoCzm8E_pbBdn-MT9powgP5L-B0ubIWdPd7hsUpuHEYktz031SqKOx4dDivkEw8V-Zwru9mUtn8Wz&3u1280&5m1&2e1&callback=none&key=AIzaSyAsEm65XA0ihWI5oMib2zIY2x9haZKY9AQ&token=46076',
    },
    {
      id: 'ChIJqc_NxZFCXz4RDt57GiL_l78',
      name: 'ARTSAWA Gallery Dubai',
      location: {
        name: 'Gate # 8,Gate Village - Al Mustaqbal Street',
        url: 'https://maps.google.com/?q=25.21349899999999,55.28322199999999',
      },
      rating: 23,
      image:
        'https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sAUjq9jketiKDIyotgGrgmOEymFeXEp77r2iuG_bQU_CmWAgLLGECDWcrbnkIHpOmOcAnDaNppgdJiTbfIMmHeNZiH7Cu7rFBfLFpIBvZfFlbu69GG3nbb53eu-bVXLww4Hj5Xdp3x_5GCOSbiI8Fmh9_ltCIIsKP6xW6E6v8DvCUTCbavKU&3u2268&5m1&2e1&callback=none&key=AIzaSyAsEm65XA0ihWI5oMib2zIY2x9haZKY9AQ&token=35047',
    },
    {
      id: 'ChIJRcbZaklDXz4RXl9EscSd0CA',
      name: 'Tabari Artspace Gallery',
      location: {
        name: 'THE GATE VILLAGE BLDG.3 LEVEL 2 DIFC, Gate Village, Bld 3, Podium Level',
        url: 'https://maps.google.com/?q=25.213544,55.2824195',
      },
      rating: 16,
      image:
        'https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sAUjq9jlVdcnTu-t0f10pDgLxtCqC48os-xs4Yy5vKZmoanGj6A5G9Fe1NLTkeQDAGoEXUt_Qjzt5ZCJfBvVk9t3klMnzo49JzZLWr095yTzF25bXojtJm-X3FZ9ZijdVVxTUh_LdC7z7pbTK7exrp0XgHeCbBPyqlrKwfYTCL-oXHTOQ0F3V&3u7616&5m1&2e1&callback=none&key=AIzaSyAsEm65XA0ihWI5oMib2zIY2x9haZKY9AQ&token=65226',
    },
    {
      id: 'ChIJ3_MsZSloXz4R_GtdMrSRc9I',
      name: 'The Serigraph Studio',
      location: {
        name: 'Burj Khalifa - Sheikh Mohammed bin Rashid Boulevard - Dubai',
        url: 'https://maps.google.com/?q=25.193738,55.276197',
      },
      rating: 2,
      image:
        'https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sAUjq9jlqhNJlKniWW5h7t6B85d63_9hY__c6L2iwzwEaLyZ7d2luNwRiM0otyynndYK3j-18ID7bGADhdHfx5-UBlojKhPdGgOSAe9cF-3UB6BJihlAr6CyJJP9FkeNAJlcSRdz-Yko4JN5THkugYzwPMlKM6XKKX54UWJ-OVA0P-PuNJWVf&3u2988&5m1&2e1&callback=none&key=AIzaSyAsEm65XA0ihWI5oMib2zIY2x9haZKY9AQ&token=25073',
    },
    {
      id: 'ChIJm3GhrthDXz4RZ0LedOr_rEA',
      name: 'meta moina',
      location: {
        name: 'Dubai Main Land - Dubai',
        url: 'https://maps.google.com/?q=25.2048493,55.2707828',
      },
      rating: 0,
      image:
        'https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sAUjq9jmtmEdQnhE0tVFzQJSG3_n_k3cC9WCshNmzIKgwGv-tn1X-6PJYcxz3VHw78mmBDhRyloc-qS2l3eGV_p9YyFsNtm6ufDiypjBT_UrNoossioVpS_vQXJIEAhAqMvefSTryx2VVU4GS70O-sK7uDID7eUuIS3mr47kWfm8pXjcZQa8p&3u501&5m1&2e1&callback=none&key=AIzaSyAsEm65XA0ihWI5oMib2zIY2x9haZKY9AQ&token=19167',
    },
  ]

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
