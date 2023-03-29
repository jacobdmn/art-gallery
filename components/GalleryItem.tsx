import Image from 'next/image'
import { useState } from 'react'

import LoveButton from './../components/LoveButton'

import StarRatings from 'react-star-ratings'
import VisitButton from '../components/VisitButton'

import { GalleryItemType } from '../types/internal'
import { useExternalContext } from '../context/ExternalContext'

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const imageLoader = ({ src, width }: { src: string; width: string | number }) =>
  src

export default function GalleryItem({
  galleryItem,
}: {
  galleryItem: GalleryItemType
}) {
  const [isLoading, setLoading] = useState(true)

  const { wishlist, setWishlist } = useExternalContext()

  return (
    <div className="relative flex cursor-default flex-col overflow-hidden rounded-lg border-[1px] border-cold/20 pb-3 transition-all hover:scale-[1.01] hover:border-cold/30 md:max-w-[300px]">
      <div className="relative h-[102vw] w-[98vw] overflow-hidden bg-cold/50 md:max-h-[280px]">
        <Image
          alt=""
          src={galleryItem.image}
          layout="fill"
          objectFit="cover"
          className={cn(
            'rounded-t-lg duration-700 ease-in-out group-hover:opacity-75',
            isLoading
              ? 'scale-110 blur-2xl grayscale'
              : 'scale-100 blur-0 grayscale-0'
          )}
          onLoadingComplete={() => setLoading(false)}
          loader={imageLoader}
        />
      </div>
      <LoveButton
        liked={wishlist?.includes(galleryItem.id)}
        onClick={() => {
          const isLiked = wishlist?.includes(galleryItem.id)

          setWishlist((prev: any) =>
            isLiked
              ? prev?.filter((item: any) => item !== galleryItem.id)
              : [...prev, galleryItem.id]
          )
        }}
      />
      <div className="flex grow flex-col px-3">
        <p
          className={`mt-4 text-sm ${
            galleryItem.open ? 'text-green-600' : 'text-red-600'
          }`}
        >
          {galleryItem.open ? 'Open' : 'Closed'}
        </p>
        <h1 className="mt-1 text-xl text-white">{galleryItem.name}</h1>
        <p className="mt-1 grow text-sm font-medium text-cold">
          {galleryItem.location.name}
        </p>
        <p className="mt-3 flex items-center justify-between gap-3 text-lg font-medium text-gray-900">
          <span className="flex items-center gap-2">
            <StarRatings
              rating={galleryItem.rating}
              numberOfStars={5}
              name="rating"
              starDimension="15px"
              starSpacing={1}
              starRatedColor="#ffd700"
            />
            <span className="mt-[3px] text-sm text-white">
              ({galleryItem.ratingCount || '0'})
            </span>
          </span>

          <VisitButton name={galleryItem.name} url={galleryItem.location.url} />
        </p>
      </div>
    </div>
  )
}
