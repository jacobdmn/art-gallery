import { getGeocode, getLatLng } from 'use-places-autocomplete'

export const onPlaceChanged = async (
  address: string | undefined,
  setLoadingGallery: any,
  googlemapCurrent: any,
  setGallery: any
) => {
  window &&
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })

  if (!address) return

  //  DO NOT WRITE CODE BEFORE THIS LINE
  try {
    setLoadingGallery(true)
    const results = await getGeocode({ address })
    const { lat, lng } = getLatLng(results[0])

    const map = new google.maps.Map(googlemapCurrent, {
      center: { lat, lng },
      zoom: 10,
    })

    const service = new google.maps.places.PlacesService(map)

    const callback = async (result: any, status: any) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        const newGallery = result
          .filter((item: any) => item.photos)
          .map(
            ({
              place_id,
              name,
              rating,
              geometry,
              icon,
              photos,
              vicinity,
              opening_hours,
              user_ratings_total,
            }: {
              place_id: string
              name: string
              icon: string
              geometry: {
                location: {
                  lat: () => number
                  lng: () => number
                }
              }
              photos: any
              vicinity: string
              opening_hours: any
              rating: number
              user_ratings_total?: number
            }) => ({
              id: place_id,
              name,
              location: {
                name: vicinity,
                url: `https://www.google.com/maps/search/?api=1&query=${geometry.location.lat()},${geometry.location.lng()}&query_place_id=${place_id}`,
              },
              rating: rating || 0,
              ratingCount: user_ratings_total || 0,
              image: (photos && photos[0]?.getUrl()) || icon,
              open: opening_hours?.open_now,
            })
          )

        setGallery(newGallery)
        console.log(newGallery)
      }
    }

    service.nearbySearch(
      {
        location: { lat, lng },
        radius: 500000,
        type: 'art_gallery',
      },
      callback
    )
  } catch (error) {
    console.error(error)
  } finally {
    setLoadingGallery(false)
  }
}

export const _gallery = [
  {
    id: 'ChIJbxxhZa5hLxMRRjFLUna6Ylk',
    name: 'Palazzo delle Esposizioni',
    location: {
      name: 'Via Nazionale, 194, Roma',
      url: 'https://www.google.com/maps/search/?api=1&query=41.8994596,12.4901464&query_place_id=ChIJbxxhZa5hLxMRRjFLUna6Ylk',
    },
    rating: 4.5,
    ratingCount: 5742,
    image:
      'https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sAUjq9jmx9rwFm21z8LOfKwIircetxJotIi6v4zi0DLPf9KPkwbLwkLbYqpQ371dCaheNk78Yyx-2KZBzm3rEVP8cOFxk-V-01Vm54wIZke0AecOqQODieD3BO5R6I1oi14QePwWpQyvR1A4nJGf85Kf5bsc6BFXU10Z6bSGKnuCdwXvWQLEA&3u4608&5m1&2e1&callback=none&key=AIzaSyAsEm65XA0ihWI5oMib2zIY2x9haZKY9AQ&token=67531',
    open: false,
  },
  {
    id: 'ChIJ24XkSv9gLxMR3HnSkrtI1qU',
    name: 'Il Margutta',
    location: {
      name: 'Via Margutta, 118, Roma',
      url: 'https://www.google.com/maps/search/?api=1&query=41.90948300000001,12.478375&query_place_id=ChIJ24XkSv9gLxMR3HnSkrtI1qU',
    },
    rating: 4.2,
    ratingCount: 1814,
    image:
      'https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sAUjq9jm9Cmo8iP51IL8dkUxOm1HtePDTmC9I1zArkr9vExSbUOCVririjJPeplcYE8Teigjq84H0vHLVH3R9ypE_Vozti7-EwMMSnRSKKKtn0Aw2RbTOB16qXvC_6fLBsiyW3ty-nzUcwOGjocKfqB9Qyf1cz7JI2ILlCe9818w_OoMcTmRX&3u2048&5m1&2e1&callback=none&key=AIzaSyAsEm65XA0ihWI5oMib2zIY2x9haZKY9AQ&token=49000',
    open: false,
  },
  {
    id: 'ChIJk7HQeqlhLxMRwIY3JsnfdjU',
    name: 'National Gallery of Ancient Art in Barberini Palace',
    location: {
      name: 'Via delle Quattro Fontane, 13, Roma',
      url: 'https://www.google.com/maps/search/?api=1&query=41.9031491,12.4900479&query_place_id=ChIJk7HQeqlhLxMRwIY3JsnfdjU',
    },
    rating: 4.6,
    ratingCount: 4844,
    image:
      'https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sAUjq9jkyfL4LjLc2g-Lvy4qrtbzYTwq1dciLVZz-q_PX7jaAu3s_E5IdQpCku2AuG8amzlnASUUumnVcG0U_EZDE2U5QkNWCgOoiuz6Vo4D4qZphnoHV3INpZ2t6J57x0IpnrtjSULdwC36LNASz081kUYEKbnPjIuoAH04XNaV4F06UzJBF&3u3280&5m1&2e1&callback=none&key=AIzaSyAsEm65XA0ihWI5oMib2zIY2x9haZKY9AQ&token=100520',
    open: false,
  },
  {
    id: 'ChIJF0obe01gLxMR0JJHtlD0kMY',
    name: 'Doria Pamphili Gallery',
    location: {
      name: 'Via del Corso, 305, Roma',
      url: 'https://www.google.com/maps/search/?api=1&query=41.89797819999999,12.4815742&query_place_id=ChIJF0obe01gLxMR0JJHtlD0kMY',
    },
    rating: 4.6,
    ratingCount: 4815,
    image:
      'https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sAUjq9jnfOvhukjU28oNtrUSoceZNogHBXAXqoBhP0YWvS4shgWBQArf4RNCwSXNxQtBS9jBR_PoS0HxxWCQ59mXDY-m6-nynosMYR8uITYQL4OrgGUw1zvArdfm1eJwn2l2mAE8wWek4b2zm7vheLMVvkGLJn0Xc-HJnYtRBBkS9NLoK8gSC&3u4032&5m1&2e1&callback=none&key=AIzaSyAsEm65XA0ihWI5oMib2zIY2x9haZKY9AQ&token=51692',
    open: false,
  },
  {
    id: 'ChIJDf8OnlVgLxMR_cnQXKqJtNc',
    name: 'Galleria Russo',
    location: {
      name: 'Via Alibert, 20, Roma',
      url: 'https://www.google.com/maps/search/?api=1&query=41.9071259,12.4808445&query_place_id=ChIJDf8OnlVgLxMR_cnQXKqJtNc',
    },
    rating: 4.5,
    ratingCount: 54,
    image:
      'https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sAUjq9jmF2SWKLXHvryL4fH94VydKsROwvcvl2asVZQ79BYrHUsE89apAb7tFzOKmo8HI21NApadyAlg2Pgz3uCyZ3zj8zTgcfs5pxPKiVBEK8Mb4UdL4D_o8ytKaKv5JElNQOSvApAyZkbd6I_CAftwA-3Cs4duzYMrmBoPHQw3rFj4l7a9c&3u11490&5m1&2e1&callback=none&key=AIzaSyAsEm65XA0ihWI5oMib2zIY2x9haZKY9AQ&token=84632',
    open: false,
  },
  {
    id: 'ChIJz3INfqxhLxMRwGcar7FHFvY',
    name: 'Associazione Internazionale Galleria "Il Collezionista"',
    location: {
      name: 'Via Rasella, 132, Roma',
      url: 'https://www.google.com/maps/search/?api=1&query=41.9024401,12.4867972&query_place_id=ChIJz3INfqxhLxMRwGcar7FHFvY',
    },
    rating: 4.3,
    ratingCount: 10,
    image:
      'https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sAUjq9jk1LWP4SV4_QsEKJ9uV0TEypVgzP4mQlmgUubR76Erj31baA0zMKnNMFjivKx9CsMbKro2orvIjWC7fQsfoGFIG61-ZTpEZ9BvjjB94Eb3IDSAHIVHCDPmpahJ9U3C3GZxGUtEjugaUSWC-6hSzZuEO7Bsj-O9fz75ljDy0AF4NTFdg&3u3264&5m1&2e1&callback=none&key=AIzaSyAsEm65XA0ihWI5oMib2zIY2x9haZKY9AQ&token=92260',
  },
  {
    id: 'ChIJNTRaorFhLxMRmoevmkEolcA',
    name: 'makemake',
    location: {
      name: 'Via del Boschetto, 121, Roma',
      url: 'https://www.google.com/maps/search/?api=1&query=41.8954049,12.4910405&query_place_id=ChIJNTRaorFhLxMRmoevmkEolcA',
    },
    rating: 5,
    ratingCount: 4,
    image:
      'https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sAUjq9jmKlG0XmXG7wGQflX43RqFFcPv2Kw9feUCCWw-jpZZL_HHsdeK0flxDl6KRwErXZdGG0i4XuoBB2CvEoz1MQl9LZrppVqDUZfKW7r8hvAe9nDu4aLTyktFLXZIDl9kRTsU9p9oT2xS1J6mznmHlyXurD-x2eiv-1pkrGxf5bxibqeuh&3u3024&5m1&2e1&callback=none&key=AIzaSyAsEm65XA0ihWI5oMib2zIY2x9haZKY9AQ&token=58121',
    open: false,
  },
  {
    id: 'ChIJlXgQiVVgLxMRG_c2Q1r8Imo',
    name: 'Antonacci Lapiccirella Fine Art',
    location: {
      name: 'Via Margutta, 54, Roma',
      url: 'https://www.google.com/maps/search/?api=1&query=41.9078922,12.4805036&query_place_id=ChIJlXgQiVVgLxMRG_c2Q1r8Imo',
    },
    rating: 0,
    ratingCount: 0,
    image:
      'https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sAUjq9jkPbfNnmrqiUEF64S5j47oA-a6p4sQYJZOaXTxkCXsTGrZ_9f_SWRsVuh97beCwoCfuNn3onfmrNmk9lP6Jv27V9zLqUr95o5l52D-DSPr7Ohipw54qWMByV30AOqpBBv_V4BRp_q3ayx9H35irnVRH-n6QavFybA7KQMCAVCkG2BOs&3u2720&5m1&2e1&callback=none&key=AIzaSyAsEm65XA0ihWI5oMib2zIY2x9haZKY9AQ&token=62675',
    open: false,
  },
  {
    id: 'ChIJCYGkAQlhLxMRpExdZrYIjNU',
    name: 'AEDES ART GALLERY',
    location: {
      name: 'Via Piave, 26, Roma',
      url: 'https://www.google.com/maps/search/?api=1&query=41.908819,12.4984589&query_place_id=ChIJCYGkAQlhLxMRpExdZrYIjNU',
    },
    rating: 4,
    ratingCount: 2,
    image:
      'https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sAUjq9jlc2VBtTwub2EacaAbyZKbXKb4X93kUto3x4vQk15KP9NBrIhpj5f4uDlnjomDbDMCZl3d7jU402aSkojjIbEVat2HSZMBkwru4qGnM2KshyuNxgf70ebBH0lq9XEnrYT3VccI-Iaklxwnkx2k394pdPOosXVNiljz0vUhiij7NZULH&3u4032&5m1&2e1&callback=none&key=AIzaSyAsEm65XA0ihWI5oMib2zIY2x9haZKY9AQ&token=4812',
    open: false,
  },
  {
    id: 'ChIJzSLnf7dhLxMR99dsqshZPyQ',
    name: 'Galleria Arte E Pensieri',
    location: {
      name: 'Via Ostilia, 3, Roma',
      url: 'https://www.google.com/maps/search/?api=1&query=41.8895044,12.495281&query_place_id=ChIJzSLnf7dhLxMR99dsqshZPyQ',
    },
    rating: 4.1,
    ratingCount: 12,
    image:
      'https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sAUjq9jnxG96AO0CNARF9PPw1-GPJtiG9_D-qeVBcVbCq9Eww2nAfeQpkmJeXwv0Zr1Ex9lriYddH57v4Bkvk_NYuHWmVFipctXRlRbGN1j64alRXZvSPFXcYRc8Vem-rDhhYfSjl59we7YL-Z6Iogif_77V_IelAUxSYOzVkYFtGua-QW9PP&3u4160&5m1&2e1&callback=none&key=AIzaSyAsEm65XA0ihWI5oMib2zIY2x9haZKY9AQ&token=106899',
    open: false,
  },
  {
    id: 'ChIJselrSqthLxMRlm64qoHKcM8',
    name: 'Ulisse Gallery',
    location: {
      name: 'Via di Capo le Case, 32, Roma',
      url: 'https://www.google.com/maps/search/?api=1&query=41.9038104,12.4837897&query_place_id=ChIJselrSqthLxMRlm64qoHKcM8',
    },
    rating: 4.3,
    ratingCount: 17,
    image:
      'https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sAUjq9jnYunXyfjEXVc1ApB8PM2ZOqUvCqSgct9RM8dhW18Qg7WvlDG9yvyzfUVUy55tEjLoqqfrvFSjSy1rCt7b0zAE0hZQV2Es5NU3ENYkF_jzvC4buJfswqCyAXxBPVgM7_DpEbClxdG0FxTXqxRlLkRJsY0YIEG3UhZrov9fcuv3uerk4&3u3120&5m1&2e1&callback=none&key=AIzaSyAsEm65XA0ihWI5oMib2zIY2x9haZKY9AQ&token=116400',
    open: false,
  },
  {
    id: 'ChIJa5e33Q5hLxMRzsKK6SftTbg',
    name: 'Smac',
    location: {
      name: 'Via Velletri, 30, Roma',
      url: 'https://www.google.com/maps/search/?api=1&query=41.91225310000001,12.4987887&query_place_id=ChIJa5e33Q5hLxMRzsKK6SftTbg',
    },
    rating: 4,
    ratingCount: 1,
    image:
      'https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sAUjq9jn03f1lq-LITl0RN79RfXMHBDDzpIuWpeKbEdOJN_BaAlNBibVn7rPSypl1Gkkb43Hjs1xvs4BcmTazTLoojxmvZux9wUzgGPO-WLPIt1vuND9mNn_EGFv3yffWeP5NvuNLwplXZTQKFyG5NnmW8OTTPNG4v3Z6OgobIqdYDTF0WRiQ&3u4032&5m1&2e1&callback=none&key=AIzaSyAsEm65XA0ihWI5oMib2zIY2x9haZKY9AQ&token=51563',
  },
  {
    id: 'ChIJWQNU0E1gLxMRwuL90M25qQc',
    name: 'Farmand Gallery',
    location: {
      name: 'Via del Gesù, 64, Roma',
      url: 'https://www.google.com/maps/search/?api=1&query=41.89687190000001,12.4786555&query_place_id=ChIJWQNU0E1gLxMRwuL90M25qQc',
    },
    rating: 4.9,
    ratingCount: 16,
    image:
      'https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sAUjq9jlXWu1FJEEe_7Rqv2310XPUXgq_y-DWwq1Ah73ukFLo8eVfHyIuZaH0Dw8KjbxJ0kehheiNM_CScx5sjZixSgEvZwwiPEs14P7spGrOixmClPUcixVi-0yCKdmAT8ug6zOoD6k5BUbpzG9ykBQhD-unl2C-m-e1hWa3EAfzGJMQaBOx&3u3024&5m1&2e1&callback=none&key=AIzaSyAsEm65XA0ihWI5oMib2zIY2x9haZKY9AQ&token=38840',
    open: false,
  },
  {
    id: 'ChIJ8d4QT_9gLxMRHYGnSJHVWWQ',
    name: 'Galleria Vittoria',
    location: {
      name: 'Via Margutta, 103, Roma',
      url: 'https://www.google.com/maps/search/?api=1&query=41.9092276,12.4787473&query_place_id=ChIJ8d4QT_9gLxMRHYGnSJHVWWQ',
    },
    rating: 4.8,
    ratingCount: 22,
    image:
      'https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sAUjq9jkJfggc1_zM6_FMbnqgQt603T6VF_vQ3PV8emFMS7B_plOQlsXgt6EhaL6-PtbuuUZjtiZUrbAQyYeIfdgwgcxJolyR0Nto3g196ondPsaIwzGBWLnXkxCLu12vndVFgjeFSPHtzaMBXpIlAIcBWuyG91mt4lj6Ijd8sDvxpCRdAbKy&3u1357&5m1&2e1&callback=none&key=AIzaSyAsEm65XA0ihWI5oMib2zIY2x9haZKY9AQ&token=120968',
    open: false,
  },
  {
    id: 'ChIJ04Ia76BhLxMRjK8OFjbojXc',
    name: 'Indipendenza Art Gallery',
    location: {
      name: 'Via dei Mille, 6, Roma',
      url: 'https://www.google.com/maps/search/?api=1&query=41.9040405,12.5030281&query_place_id=ChIJ04Ia76BhLxMRjK8OFjbojXc',
    },
    rating: 2.8,
    ratingCount: 6,
    image:
      'https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sAUjq9jnLvHTMBfgJOPbSIY2Vxv68OeTo-WEotLuzrJt5fqoJ8UF1j8anxuY9ph5NTaN0c6l1-z_EwDQXdyFhwzAXVGqSi0gt8jyTmD1etTQt4RoXcz7ZZrvYtsVK-fG-xw_mfCLW7Kcmn2F8AsI3wTTIAWnupif7z0m6F5ydJxlrl5T0_yCE&3u1600&5m1&2e1&callback=none&key=AIzaSyAsEm65XA0ihWI5oMib2zIY2x9haZKY9AQ&token=43484',
    open: false,
  },
  {
    id: 'ChIJtaZ7PbBhLxMRVeCKtwo_JqA',
    name: 'Detour',
    location: {
      name: 'Via Urbana, 107, Roma',
      url: 'https://www.google.com/maps/search/?api=1&query=41.89619899999999,12.493943&query_place_id=ChIJtaZ7PbBhLxMRVeCKtwo_JqA',
    },
    rating: 4.7,
    ratingCount: 173,
    image:
      'https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sAUjq9jlpHLBjcmnwf4UGHzJFk-s3slK2o5BiAg1dxFIAtza6eVX2zcpLwbjGfuRRq_ZW54rksXDqPzeSaKTrKFqrT3fEWH63ID5xi-sd1ctfuqsHbw_u5m__wf6kn6ggDXnlBb-LuVx_NhWfP0B313U6WZnVQIAA9ZhLp1B6V5ZwmJfoVN4j&3u1200&5m1&2e1&callback=none&key=AIzaSyAsEm65XA0ihWI5oMib2zIY2x9haZKY9AQ&token=15191',
    open: false,
  },
]
