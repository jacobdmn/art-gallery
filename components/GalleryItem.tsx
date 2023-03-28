import Image from 'next/image'
import { useState } from 'react'

import LoveButton from './../components/LoveButton'

import StarRatings from 'react-star-ratings'
import VisitButton from '../components/VisitButton'

import { GalleryItemType } from '../internal'
import { useExternalContext } from '../context/ExternalContext'

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function GalleryItem({
  galleryItem,
}: {
  galleryItem: GalleryItemType
}) {
  const [isLoading, setLoading] = useState(true)

  const { wishlist, setWishlist } = useExternalContext()

  return (
    <div className="flex flex-col overflow-hidden rounded-lg border-[1px] border-cold/10 pb-3">
      <div className="relative h-[102vw] w-[98vw] overflow-hidden !rounded-lg bg-cold/50 md:max-h-[370px] md:max-w-[300px]">
        <Image
          alt=""
          src={galleryItem.image}
          layout="fill"
          objectFit="cover"
          className={cn(
            'rounded-lg duration-700 ease-in-out group-hover:opacity-75',
            isLoading
              ? 'scale-110 blur-2xl grayscale'
              : 'scale-100 blur-0 grayscale-0'
          )}
          onLoadingComplete={() => setLoading(false)}
        />
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
      </div>
      <div className="flex grow flex-col px-3">
        <h1 className="mt-4 text-xl text-white">{galleryItem.name}</h1>
        <p className="mt-1 grow text-sm font-medium text-cold">
          {galleryItem.location.name}
        </p>
        <p className="mt-1 flex items-center justify-between gap-3 text-lg font-medium text-gray-900">
          <StarRatings
            rating={galleryItem.rating}
            numberOfStars={6}
            name="rating"
            starDimension="15px"
            starSpacing={1}
            starRatedColor="#ffd700"
          />
          <VisitButton name={galleryItem.name} url={galleryItem.location.url} />
        </p>
      </div>
    </div>
  )
}
