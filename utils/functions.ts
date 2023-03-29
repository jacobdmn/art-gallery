import { getGeocode, getLatLng } from 'use-places-autocomplete'

export const ON_PLACE_CHANGED = async (
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
    const geoLocation = getLatLng(results[0])

    const map = new google.maps.Map(googlemapCurrent, {
      center: geoLocation,
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
              image: photos[0]?.getUrl() || icon,
              open: opening_hours?.open_now,
            })
          )
        setGallery(newGallery)
      }
    }

    service.nearbySearch(
      {
        location: geoLocation,
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
